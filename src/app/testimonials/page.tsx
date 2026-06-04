import type { Metadata } from "next";
import Link from "next/link";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import { promises } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Honey Bloom Beauty client testimonials for brows, lash lift, facial treatments, threading, waxing, and henna services.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <p className="eyebrow">Testimonials</p>
        <h1>Client feedback, handled with care.</h1>
        <p>
          A calm, professional beauty experience shaped around careful consultations, clean details, and natural-looking
          results.
        </p>
      </section>

      <section className="section">
        <TestimonialsGrid />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Client care promise</p>
          <h2>What the experience is built around.</h2>
        </div>
        <div className="promise-grid">
          {promises.map((promise) => (
            <article key={promise.title}>
              <h3>{promise.title}</h3>
              <p>{promise.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="page-card">
          <h3>Share your Honey Bloom experience</h3>
          <p>
            Loved your brows, lashes, facial, threading, waxing, or henna appointment? Send a note to the studio so your
            experience can help future clients choose the right service.
          </p>
          <div className="inline-links">
            <Link href="/gallery">See gallery</Link>
            <Link href="/contact">Contact studio</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
