import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ListChecks, Mail, Star } from "lucide-react";
import { BloomLottie } from "@/components/BloomLottie";
import { BookingBand } from "@/components/BookingBand";
import { ScrollFloat } from "@/components/ScrollFloat";
import { ServiceCards } from "@/components/ServiceCards";
import { ServiceRibbon } from "@/components/ServiceRibbon";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import { contact, stockPhotos } from "@/lib/site";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Brow artistry - skincare - lashes</p>
          <h1>Beauty care that blooms with you.</h1>
          <p className="hero-text">
            Honey Bloom Beauty helps clients enhance their natural beauty through personalized microshading, ombre
            brows, lash lifts, facials, waxing, threading, tinting, and henna services in a professional salon setting.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary shimmer-button" href="/booking">
              <CalendarCheck aria-hidden="true" size={18} />
              Booking information
            </Link>
            <Link className="button button-secondary" href="/services">
              <ListChecks aria-hidden="true" size={18} />
              View services
            </Link>
          </div>
          <div className="hero-proof" aria-label="Honey Bloom Beauty highlights">
            <span>
              <Star aria-hidden="true" size={16} /> Brow specialist
            </span>
            <span>
              <Star aria-hidden="true" size={16} /> Medical esthetician care
            </span>
            <span>
              <Star aria-hidden="true" size={16} /> By appointment
            </span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Honey Bloom Beauty facial and brow care">
          <BloomLottie />
          <figure className="hero-photo">
            <Image
              src={stockPhotos.hero.src}
              alt={stockPhotos.hero.alt}
              width={1800}
              height={1200}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 820px) 92vw, 41vw"
            />
          </figure>
          <figure className="hero-mini-photo">
            <Image
              src={stockPhotos.brow.src}
              alt={stockPhotos.brow.alt}
              width={900}
              height={680}
              sizes="(max-width: 820px) 42vw, 14vw"
            />
          </figure>
          <div className="floating-note">
            <strong>Signature brows</strong>
            <span>Microshading - Powder Brows - Ombre Brows</span>
          </div>
        </div>
      </section>

      <ServiceRibbon />

      <section className="section split-section image-split">
        <div>
          <p className="eyebrow">About Honey Bloom Beauty</p>
          <h2>Your personalized salon for brows, lashes, skin, and self-care.</h2>
          <figure className="section-photo">
            <Image src={stockPhotos.facial.src} alt={stockPhotos.facial.alt} width={900} height={680} sizes="(max-width: 900px) 100vw, 38vw" />
          </figure>
        </div>
        <div className="about-copy">
          <p>
            Led by {contact.owner}, Honey Bloom Beauty is designed for women who value careful detail, professional
            service, and long-lasting beauty results. Each appointment starts with your brow shape, skin goals,
            preferred finish, and comfort level.
          </p>
          <p>
            The studio focuses on beauty enhancement without losing what makes your features naturally yours.
            {" "}
            <Link className="text-link" href="/about">
              Learn more about the studio
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <ScrollFloat animationDuration={0.9} ease="back.out(1.7)" scrollStart="top bottom-=8%" scrollEnd="center center" stagger={0.018}>
            Beauty treatments with a precise, personal touch.
          </ScrollFloat>
          <p>Explore signature brow, lash, skin, waxing, threading, tinting, and henna services.</p>
        </div>
        <ServiceCards />
        <div className="section-actions">
          <Link className="button button-primary" href="/services">
            See full service menu
          </Link>
        </div>
      </section>

      <BookingBand />

      <section className="section testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Client stories</p>
          <ScrollFloat animationDuration={0.85} ease="back.out(1.45)" scrollStart="top bottom-=10%" scrollEnd="center center" stagger={0.014}>
            Clients come in for detail and leave feeling polished.
          </ScrollFloat>
          <p>Warm, detail-focused beauty care for brows, lashes, skincare, waxing, threading, and henna.</p>
        </div>
        <TestimonialsGrid limit={3} />
        <div className="section-actions">
          <Link className="button button-secondary" href="/testimonials">
            Read more client stories
          </Link>
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Ready to plan your appointment?</h2>
          <p>
            Call or email Honey Bloom Beauty to discuss services, availability, and your treatment goals before booking.
          </p>
          <div className="contact-actions">
            <a className="button button-primary shimmer-button" href={contact.phoneHref}>
              Call now
            </a>
            <a className="button button-secondary" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" size={18} />
              Email studio
            </a>
          </div>
        </div>
        <div className="contact-photo-card">
          <Image
            src={stockPhotos.lashes.src}
            alt={stockPhotos.lashes.alt}
            width={900}
            height={680}
            loading="eager"
            sizes="(max-width: 900px) 100vw, 38vw"
          />
          <div className="inline-links">
            <Link href="/gallery">Gallery</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
