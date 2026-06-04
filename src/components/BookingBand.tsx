import Image from "next/image";
import { CalendarCheck, Mail } from "lucide-react";
import { bookingSteps, contact, stockPhotos } from "@/lib/site";

export function BookingBand() {
  return (
    <section className="booking-band" aria-labelledby="booking-title">
      <div className="booking-copy">
        <div>
          <p className="eyebrow">Booking information</p>
          <h2 id="booking-title">Plan your visit with confidence.</h2>
        </div>
        <ol>
          {bookingSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="booking-actions">
          <a className="button button-light" href={`mailto:${contact.email}?subject=Honey%20Bloom%20Beauty%20Appointment%20Request`}>
            <Mail aria-hidden="true" size={18} />
            Request by email
          </a>
          <a className="button button-light" href={contact.phoneHref}>
            <CalendarCheck aria-hidden="true" size={18} />
            Call to book
          </a>
        </div>
      </div>
      <figure className="booking-photo">
        <Image
          src={stockPhotos.spa.src}
          alt={stockPhotos.spa.alt}
          width={900}
          height={680}
          loading="eager"
          sizes="(max-width: 900px) 100vw, 35vw"
        />
      </figure>
    </section>
  );
}
