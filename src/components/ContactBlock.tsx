import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/site";

export function ContactBlock() {
  return (
    <div className="contact-list" aria-label="Honey Bloom Beauty contact details">
      <a href={contact.phoneHref}>
        <Phone aria-hidden="true" size={20} />
        <span>
          <b>Phone</b>
          {contact.phone}
        </span>
      </a>
      <a href={`mailto:${contact.email}`}>
        <Mail aria-hidden="true" size={20} />
        <span>
          <b>Email</b>
          {contact.email}
        </span>
      </a>
      <div>
        <MapPin aria-hidden="true" size={20} />
        <span>
          <b>Location</b>
          {contact.address}
        </span>
      </div>
      <div>
        <CalendarCheck aria-hidden="true" size={20} />
        <span>
          <b>Hours</b>
          By appointment
        </span>
      </div>
    </div>
  );
}
