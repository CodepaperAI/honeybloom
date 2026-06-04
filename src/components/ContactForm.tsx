import { Send } from "lucide-react";
import { contact, services } from "@/lib/site";

export function ContactForm() {
  return (
    <form
      action={`mailto:${contact.email}`}
      className="contact-form"
      encType="text/plain"
      method="post"
      aria-label="Contact form"
    >
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        <span>Service interest</span>
        <select name="service">
          {services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
        </select>
      </label>
      <label className="contact-form-message">
        <span>Message</span>
        <textarea name="message" rows={4} />
      </label>
      <button className="button button-primary" type="submit">
        <Send aria-hidden="true" size={17} />
        Send inquiry
      </button>
    </form>
  );
}

