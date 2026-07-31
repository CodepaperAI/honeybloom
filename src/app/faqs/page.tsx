import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { getByFamily, toSummary } from "@/data/landingPages";
import { faqJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Honey Bloom Beauty appointments, microshading, ombre brows, services, pricing, and location.",
  alternates: {
    canonical: "/faqs",
  },
};

export default function FaqsPage() {
  const guides = getByFamily("guide").map(toSummary);

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />
      <section className="page-hero">
        <p className="eyebrow">FAQs</p>
        <h1>Before you glow.</h1>
        <p>Quick answers for appointments, services, pricing, consultations, and location details.</p>
      </section>

      <section className="section faq-section">
        <FaqList />
        <div className="section-actions">
          <Link className="button button-primary" href="/booking">
            Booking information
          </Link>
        </div>
      </section>

      {/* The longer questions — what a treatment costs, which of two options to
          pick — are answered in full on the guide pages. This is the only place
          on the original site where they have a natural home, and without it
          the guides had no contextual route in from anywhere. */}
      {guides.length > 0 && (
        <section className="section faq-guides">
          <div className="section-heading">
            <p className="eyebrow">Go deeper</p>
            <h2>Detailed guides</h2>
            <p>Longer answers to the questions that need more than a paragraph.</p>
          </div>
          <div className="detail-grid">
            {guides.map((guide) => (
              <article className="detail-card" key={guide.slug}>
                <h3>
                  <Link href={guide.pathname}>{guide.h1}</Link>
                </h3>
                <p>{guide.metaDescription}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
