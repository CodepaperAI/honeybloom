import type { Metadata } from "next";
import Link from "next/link";
import { BookingBand } from "@/components/BookingBand";
import { BookingPlanner } from "@/components/BookingPlanner";
import { ContactBlock } from "@/components/ContactBlock";
import { appointmentNotes, bookingSteps, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Booking Information",
  description:
    "Book Honey Bloom Beauty appointments by WhatsApp, phone, or email for microshading, ombre brows, lash lifts, facials, waxing, threading, tinting, and henna.",
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingPage() {
  return (
    <main id="main">
      <section className="section booking-planner-section">
        <BookingPlanner />
      </section>
 
      <BookingBand />
 
      <section className="section split-section booking-steps-section">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Simple steps before your appointment.</h2>
        </div>
        <ol className="number-list">
          {bookingSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
 
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Appointment notes</p>
          <h2>A smoother visit starts before the chair.</h2>
        </div>
        <div className="promise-grid">
          {appointmentNotes.map((note) => (
            <article key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>
 
      <section className="section contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Request an appointment</p>
          <h2>WhatsApp, call, or email the studio.</h2>
          <p>
            Use WhatsApp or phone for the fastest response, or email if you want to include treatment questions before booking.
          </p>
          <div className="contact-actions">
            <a className="button button-whatsapp shimmer-button" href={contact.whatsAppHref} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953(3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Message
            </a>
            <a className="button button-primary" href={contact.phoneHref}>
              Call {contact.phone}
            </a>
            <Link className="button button-secondary" href="/contact">
              Full contact details
            </Link>
          </div>
        </div>
        <ContactBlock />
      </section>
    </main>
  );
}
