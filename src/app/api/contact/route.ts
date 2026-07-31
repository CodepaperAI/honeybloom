import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact } from "@/lib/site";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, phone, service, message, sourceId, pagePath } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Attribution is deliberately NOT validated against a closed list of known
    // page ids. A strict enum here would silently 400 every submission from any
    // page added later — the exact failure that makes a landing-page programme
    // unmeasurable. Unknown values are recorded as-is instead.
    const source = typeof sourceId === "string" && sourceId.trim() ? sourceId.trim() : "unknown";
    const path = typeof pagePath === "string" && pagePath.trim() ? pagePath.trim() : "unknown";

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Default testing address provided by Resend
      to: contact.email, // honeybloombeauty9@gmail.com
      // Source is in the subject so leads can be filtered in the inbox without
      // opening each one.
      subject: `New Inquiry from ${name} - ${service} [${source}]`,
      text:
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n` +
        `Service of Interest: ${service || "N/A"}\n\n` +
        `Message:\n${message}\n\n` +
        `— Attribution —\nSource page: ${source}\nPath: ${path}\n`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
