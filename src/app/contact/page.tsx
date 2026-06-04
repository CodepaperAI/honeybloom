import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { ContactBlock } from "@/components/ContactBlock";
import { ContactForm } from "@/components/ContactForm";
import { contact, stockPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Honey Bloom Beauty in Mississauga by phone or email for beauty salon appointments, brow services, facials, waxing, threading, tinting, and henna.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="section contact-studio-layout">
        <div className="contact-details-panel">
          <div className="contact-copy">
            <p className="eyebrow">Honey Bloom Beauty</p>
            <h2>Reach the studio directly.</h2>
            <p>
              Appointments can be requested by phone at {contact.phone} or email at {contact.email}. Call before visiting
              to confirm availability.
            </p>
            <div className="contact-actions">
              <a className="button button-primary shimmer-button" href={contact.phoneHref}>
                <Phone aria-hidden="true" size={18} />
                Call now
              </a>
              <a className="button button-secondary" href={`mailto:${contact.email}`}>
                <Mail aria-hidden="true" size={18} />
                Email studio
              </a>
            </div>
          </div>
          <figure className="contact-photo-card">
            <Image
              src={stockPhotos.henna.src}
              alt={stockPhotos.henna.alt}
              width={900}
              height={680}
              loading="eager"
              sizes="(max-width: 900px) 100vw, 38vw"
            />
          </figure>
          <ContactBlock />
        </div>
        <div className="contact-form-panel">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
