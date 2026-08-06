import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact } from "@/lib/site";
import { formGuardConfig } from "@/lib/form-guard.config";
import { runGuards } from "@/lib/form-guard/guard";

export const dynamic = "force-dynamic";

/**
 * No CORS headers are emitted anywhere in this route, so browsers reject
 * cross-origin calls outright. The form is same-origin and needs no preflight;
 * anything that does is not us.
 */
export async function OPTIONS() {
  return new NextResponse(null, { status: 405, headers: { Allow: "POST" } });
}

/** The success body sent to the client, and the one a silent drop mirrors. */
const SUCCESS = { success: true } as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, sourceId, pagePath } = body;

    // origin -> honeypot -> timing -> Turnstile, before any field work.
    const verdict = await runGuards({
      headers: request.headers,
      fields: body,
      config: formGuardConfig,
    });

    if (verdict.outcome === "reject") {
      return NextResponse.json(
        { success: false, error: verdict.message },
        { status: verdict.status },
      );
    }

    // Honeypot or impossible submit speed. Mirrors the real success response so
    // a spammer gets no signal about which filter caught them.
    if (verdict.outcome === "silent-drop") {
      return NextResponse.json(SUCCESS);
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Shape check only. Anything stricter rejects real addresses; the point is
    // to catch a field that plainly is not an email before it becomes an
    // unreplyable lead.
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // Attribution is deliberately NOT validated against a closed list of known
    // page ids. A strict enum here would silently 400 every submission from any
    // page added later — the exact failure that makes a landing-page programme
    // unmeasurable. Unknown values are recorded as-is instead.
    const source = typeof sourceId === "string" && sourceId.trim() ? sourceId.trim() : "unknown";
    const path = typeof pagePath === "string" && pagePath.trim() ? pagePath.trim() : "unknown";

    // Constructed here rather than at the top of the handler: the Resend
    // constructor throws when the key is absent, and from there it aborted the
    // request before any guard ran — so a deploy missing the key returned 500
    // for every submission, including the ones the guard should have rejected
    // cheaply.
    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] RESEND_API_KEY is not set — cannot deliver this lead.");
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      // Resend's shared testing address only delivers to the account owner, so
      // it is a fallback rather than the intended sender. Set CONTACT_FROM_EMAIL
      // to an address on a verified domain.
      from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
      to: contact.email, // honeybloombeauty9@gmail.com
      // Lets staff reply straight to the customer instead of to the sender.
      replyTo: email,
      // Source is in the subject so leads can be filtered in the inbox without
      // opening each one.
      subject: `New Inquiry from ${name} - ${service} [${source}]`,
      text:
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n` +
        `Service of Interest: ${service || "N/A"}\n\n` +
        `Message:\n${message}\n\n` +
        `— Attribution —\nSource page: ${source}\nPath: ${path}\n`,
    });

    // The SDK reports delivery failures in the payload rather than by throwing.
    // Returning it unchecked meant a rejected send still produced a 200, the
    // form showed "sent", and the lead was lost with nobody aware.
    if (result.error) {
      console.error("[contact] Resend rejected the send:", result.error.message);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    // Deliberately not returning Resend's payload — it carries the provider
    // message id, which the browser has no use for.
    return NextResponse.json(SUCCESS);
  } catch (error) {
    console.error("[contact] Unhandled failure:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
