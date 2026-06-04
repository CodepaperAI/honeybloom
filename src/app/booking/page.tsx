import type { Metadata } from "next";
import Link from "next/link";
import { BookingBand } from "@/components/BookingBand";
import { BookingPlanner } from "@/components/BookingPlanner";
import { ContactBlock } from "@/components/ContactBlock";
import { appointmentNotes, bookingSteps, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Booking Information",
  description:
    "Book Honey Bloom Beauty appointments by phone or email for microshading, ombre brows, lash lifts, facials, waxing, threading, tinting, and henna.",
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
          <h2>Call or email the studio.</h2>
          <p>
            Use phone for the fastest response, or email if you want to include treatment questions before booking.
          </p>
          <div className="contact-actions">
            <a className="button button-primary shimmer-button" href={contact.phoneHref}>
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
