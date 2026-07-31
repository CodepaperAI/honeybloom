"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import { services } from "@/lib/site";

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
  const pathname = usePathname();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
      sourceId: sourceId ?? pathname ?? "unknown",
      pagePath: pathname ?? "unknown",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus("error");
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
      
      {status === "success" && (
        <p style={{ color: "#32573f", fontSize: "0.875rem", marginBottom: "1rem", fontWeight: 500 }}>
          Your inquiry has been sent! We will be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "red", fontSize: "0.875rem", marginBottom: "1rem", fontWeight: 500 }}>
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button className="button button-primary" type="submit" disabled={status === "submitting"}>
        <Send aria-hidden="true" size={17} />
        {status === "submitting" ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}
