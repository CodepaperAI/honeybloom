import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBlock } from "@/components/ContactBlock";
import { contact, promises, stockPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Honey Bloom Beauty, a professional Mississauga beauty salon and medical esthetician studio led by Mohinina Parmar.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="section split-section image-split about-editorial-section">
        <div>
          <p className="eyebrow">Owner</p>
          <h2>Led by {contact.owner}.</h2>
          <figure className="section-photo">
            <Image src={stockPhotos.spa.src} alt={stockPhotos.spa.alt} width={900} height={680} sizes="(max-width: 900px) 100vw, 38vw" />
          </figure>
        </div>
        <div className="about-copy">
          <p>
            The studio is built for clients who want quality beauty services, professional expertise, and long-lasting
            results without feeling rushed. Every treatment starts with attention to the client: their comfort, goals,
            routine, and natural features.
          </p>
          <p>
            Honey Bloom Beauty caters primarily to women seeking beauty maintenance, brow and lash enhancements,
            skincare treatments, and self-care services in a welcoming salon environment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">What clients can expect</p>
          <h2>Professional care that feels warm, precise, and personal.</h2>
          <p>
            The studio experience is shaped around real salon decision-making: comfort, clarity, aftercare, and
            practical service guidance.
          </p>
        </div>
        <div className="promise-grid">
          {promises.map((promise) => (
            <article key={promise.title}>
              <h3>{promise.title}</h3>
              <p>{promise.text}</p>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <Link className="button button-primary" href="/services">
            Explore services
          </Link>
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Visit by appointment</p>
          <h2>Start with a service conversation.</h2>
          <p>
            Call or email before visiting to confirm availability, treatment fit, and appointment timing.
          </p>
        </div>
        <ContactBlock />
      </section>
    </main>
  );
}
