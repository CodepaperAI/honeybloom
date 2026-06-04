import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { GalleryStories } from "@/components/GalleryStories";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View Honey Bloom Beauty service visuals, brow enhancement flyer imagery, and treatment inspiration for brows, lashes, facials, threading, and henna.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <p className="eyebrow">Gallery</p>
        <h1>Service visuals and Honey Bloom Beauty details.</h1>
      </section>

      <section className="section gallery-section">
        <GalleryGrid />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Treatment stories</p>
          <h2>A closer look at popular beauty goals.</h2>
        </div>
        <GalleryStories />
        <div className="section-actions">
          <Link className="button button-primary" href="/booking">
            Book a visit
          </Link>
          <Link className="button button-secondary" href="/services">
            View services
          </Link>
        </div>
      </section>
    </main>
  );
}
