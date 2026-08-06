"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import { services, contact } from "@/lib/site";
import TurnstileWidget, { type TurnstileHandle } from "@/components/TurnstileWidget";
import { formGuardConfig } from "@/lib/form-guard.config";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export interface ContactFormProps {
  /**
   * Which page produced this lead. Landing pages pass their own `formSourceId`;
   * everything else falls back to the pathname, so every page on the site is
   * attributable without having to touch each call site.
   *
   * Without this the inquiry email is identical no matter where it came from,
   * which makes it impossible to tell which pages actually generate bookings.
   */
  sourceId?: string;
}

export function ContactForm({ sourceId }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const pathname = usePathname();

  // Honeypot. Never visible, so any value here came from a bot.
  const [company, setCompany] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileHandle>(null);
  // Unique per mount, so two forms on one page cannot collide on the label's
  // htmlFor target.
  const honeypotId = useId();

  // Set on mount, never during render: these pages are prerendered, so a
  // build-time timestamp would make every visitor look like an instant
  // submitter and trip the timing check.
  const mountedAtRef = useRef(0);
  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
      sourceId: sourceId ?? pathname ?? "unknown",
      pagePath: pathname ?? "unknown",
      company,
      elapsedMs: mountedAtRef.current ? Date.now() - mountedAtRef.current : undefined,
      turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Failed to send");
      }

      setStatus("success");
      form.reset();
      setCompany("");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "");
      setStatus("error");
      // Turnstile tokens are single-use — without a reset the visitor's retry
      // would replay a spent token and fail again.
      setTurnstileToken("");
      turnstileRef.current?.reset();
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        <span>Service interest</span>
        <select name="service">
          {services.map((service) => (
            <option key={service.title} value={service.title}>{service.title}</option>
          ))}
        </select>
      </label>
      <label className="contact-form-message">
        <span>Message</span>
        <textarea name="message" rows={4} required />
      </label>

      {/*
        Honeypot. Positioned off-screen rather than display:none — some bots skip
        fields that are outright hidden, but fill anything they can read in the
        DOM. aria-hidden and tabIndex keep it away from screen readers and the
        keyboard tab order, so no human can reach it.
      */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: "auto", height: 0, width: 0, overflow: "hidden" }}
      >
        <label htmlFor={honeypotId}>Company (leave this field empty)</label>
        <input
          id={honeypotId}
          type="text"
          name="company"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {TURNSTILE_SITE_KEY ? (
        <TurnstileWidget
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          action={formGuardConfig.action}
          contactLabel={formGuardConfig.contactLabel}
          contactHref={formGuardConfig.contactHref}
          onVerify={setTurnstileToken}
          onUnavailable={() => setTurnstileToken("")}
        />
      ) : (
        <p style={{ color: "red", fontSize: "0.875rem", marginBottom: "1rem", fontWeight: 500 }}>
          The inquiry form is not fully configured. Please call us at{" "}
          <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
      )}

      {status === "success" && (
        <p style={{ color: "#32573f", fontSize: "0.875rem", marginBottom: "1rem", fontWeight: 500 }}>
          Your inquiry has been sent! We will be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "red", fontSize: "0.875rem", marginBottom: "1rem", fontWeight: 500 }}>
          {errorMessage || "Something went wrong. Please try again or contact us directly."}
        </p>
      )}

      <button
        className="button button-primary"
        type="submit"
        disabled={status === "submitting" || !turnstileToken}
      >
        <Send aria-hidden="true" size={17} />
        {status === "submitting" ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}
