import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
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
    </main>
  );
}
