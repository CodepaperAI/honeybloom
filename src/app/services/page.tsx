import type { Metadata } from "next";
import Link from "next/link";
import { BookingBand } from "@/components/BookingBand";
import { PricingMenu } from "@/components/PricingMenu";
import { ServiceCards } from "@/components/ServiceCards";
import { ServiceDetails } from "@/components/ServiceDetails";
import { menuGroups, services, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore Honey Bloom Beauty services including microshading, ombre brows, lash lifts, facials, waxing, threading, tinting, henna, and beauty consultations.",
  alternates: {
    canonical: "/services",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/services#service-menu`,
  name: "Honey Bloom Beauty services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.text,
    },
  })),
};

export default function ServicesPage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />

      <section className="section services-overview-section">
        <div className="section-heading">
          <p className="eyebrow">Treatment categories</p>
          <h2>Beauty treatments with a precise, personal touch.</h2>
        </div>
        <ServiceCards />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">What to book</p>
          <h2>Choose by your beauty goal.</h2>
          <p>Use these descriptions to understand which service may fit your routine.</p>
        </div>
        <ServiceDetails />
      </section>

      <section className="section pricing-section" aria-labelledby="pricing-title">
        <div className="section-heading">
          <p className="eyebrow">Menu</p>
          <h2 id="pricing-title">Popular service pricing.</h2>
          <p>
            Prices are based on the provided Honey Bloom Beauty menu and may vary by treatment needs or design detail.
          </p>
        </div>
        <PricingMenu />
      </section>

      <section className="section">
        <div className="page-card">
          <h3>Service groups at a glance</h3>
          <p>
            {menuGroups.map((group) => group.title).join(", ")}. Detailed consultations help confirm the best option
            for your goals.
          </p>
          <div className="inline-links">
            <Link href="/booking">Booking information</Link>
            <Link href="/faqs">Service FAQs</Link>
            <Link href="/contact">Contact studio</Link>
          </div>
        </div>
      </section>

      <BookingBand />
    </main>
  );
}
