import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { ContactBlock } from "@/components/ContactBlock";
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
      <section className="page-hero">
        <p className="eyebrow">Contact us</p>
        <h1>Your beauty appointment starts here.</h1>
        <p>
          Call, email, or visit by appointment to discuss microshading, ombre brows, lash lifts, facials, waxing,
          threading, tinting, henna, and beauty consultations.
        </p>
      </section>

      <section className="section contact-section">
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
        <div className="contact-stack">
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
      </section>
    </main>
  );
}
