"use client";

// The single rendering template for every landing-page family.
//
// TWO INVARIANTS — do not break these:
//
// 1. This file MUST NOT import src/data/landingPages (the registry). It is a
//    client component; importing the registry would bundle every record — all
//    long-form copy, every FAQ, for every page — into this page's JS payload.
//    The route resolves the one record it needs on the server and passes it in.
//
// 2. This file MUST NOT render any head/SEO output. The route owns <head> via
//    Next's `metadata` export. A client-rendered title or canonical is
//    invisible to crawlers that do not execute JS, which is the exact class of
//    defect this project was brought in to fix.

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Flower2,
  Heart,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Leaf,
  Droplets,
  Scissors,
  Eye,
  Brush,
  CalendarClock,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Info,
  AlertTriangle,
  Wallet,
} from "lucide-react";
import { contact } from "@/lib/site";
import type { LandingPage } from "@/data/landingPages/types";
import type { LinkedContent, LinkSegment } from "@/data/landingPages/linking";

// Explicit map, not `import * as Icons` — a namespace import pulls the whole
// lucide package into this client bundle. Keys mirror iconRegistry in
// src/data/landingPages/types.ts, where they are type-checked, so an unknown
// key is a compile error rather than a blank space on a live page.
const ICONS = {
  Sparkles,
  Flower2,
  Heart,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Leaf,
  Droplets,
  Scissors,
  Eye,
  Brush,
  CalendarClock,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Info,
  AlertTriangle,
  Wallet,
};

/** Closed union so every CTA reports a known surface — no free-text labels. */
export type CtaLocation =
  | "hero"
  | "after-price-table"
  | "closing"
  | "sticky-bar"
  | "inline-call"
  | "inline-whatsapp";

export interface PageSummaryProp {
  slug: string;
  pathname: string;
  h1: string;
  metaDescription: string;
  family: LandingPage["family"];
}

export interface LandingTemplateProps {
  page: LandingPage;
  linked: LinkedContent;
  related: PageSummaryProp[];
}

function track(location: CtaLocation, formSourceId: string) {
  if (typeof window === "undefined") return;
  // Read/derive rather than stub: analytics snippets commonly redefine gtag,
  // so pushing to the layer directly is what actually survives in production.
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "landing_cta_click",
    cta_location: location,
    page_source_id: formSourceId,
  });
}

function Segments({ segments }: { segments: LinkSegment[] }) {
  return (
    <>
      {segments.map((s, i) =>
        s.href ? (
          <Link key={i} href={s.href}>
            {s.text}
          </Link>
        ) : (
          <span key={i}>{s.text}</span>
        )
      )}
    </>
  );
}

/** Sticky CTA bar, shown past ~35% scroll and dismissible. */
function StickyCta({ page }: { page: LandingPage }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;
      setVisible(doc.scrollTop / max > 0.35);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="landing-sticky-cta" role="complementary" aria-label="Book this service">
      <span className="landing-sticky-cta-text">{page.ctaHeading}</span>
      <span className="landing-sticky-cta-actions">
        <a
          className="button button-primary"
          href={contact.whatsAppHref}
          onClick={() => track("sticky-bar", page.formSourceId)}
        >
          <MessageCircle aria-hidden="true" size={16} /> WhatsApp
        </a>
        <a
          className="button button-secondary"
          href={contact.phoneHref}
          onClick={() => track("sticky-bar", page.formSourceId)}
        >
          <Phone aria-hidden="true" size={16} /> Call
        </a>
        <button
          type="button"
          className="landing-sticky-cta-close"
          aria-label="Dismiss booking bar"
          onClick={() => setDismissed(true)}
        >
          ×
        </button>
      </span>
    </div>
  );
}

function CtaBlock({
  page,
  location,
  heading,
  body,
}: {
  page: LandingPage;
  location: CtaLocation;
  heading: string;
  body: string;
}) {
  return (
    <div className="landing-cta">
      <h2>{heading}</h2>
      <p>{body}</p>
      <div className="booking-actions">
        <a
          className="button button-whatsapp"
          href={contact.whatsAppHref}
          onClick={() => track(location, page.formSourceId)}
        >
          <MessageCircle aria-hidden="true" size={17} /> Message on WhatsApp
        </a>
        <a
          className="button button-primary"
          href={contact.phoneHref}
          onClick={() => track(location, page.formSourceId)}
        >
          <Phone aria-hidden="true" size={17} /> {contact.phone}
        </a>
        <Link
          className="button button-secondary"
          href="/contact#enquiry"
          onClick={() => track(location, page.formSourceId)}
        >
          Send an enquiry
        </Link>
      </div>
    </div>
  );
}

export function LandingTemplate({ page, linked, related }: LandingTemplateProps) {
  const [hero, ...gallery] = page.images;

  return (
    <main id="main" className="landing-page">
      <section className="section landing-hero">
        <div className="landing-hero-copy">
          <p className="eyebrow">
            {page.family === "service"
              ? "Service"
              : page.family === "guide"
                ? "Guide"
                : "Service area"}
          </p>
          <h1>{page.h1}</h1>
          <p className="landing-intro">
            <Segments segments={linked.intro} />
          </p>
          <div className="booking-actions">
            <a
              className="button button-whatsapp"
              href={contact.whatsAppHref}
              onClick={() => track("hero", page.formSourceId)}
            >
              <MessageCircle aria-hidden="true" size={17} /> Book on WhatsApp
            </a>
            <a
              className="button button-secondary"
              href={contact.phoneHref}
              onClick={() => track("hero", page.formSourceId)}
            >
              <Phone aria-hidden="true" size={17} /> {contact.phone}
            </a>
          </div>
          <p className="landing-address">
            <MapPin aria-hidden="true" size={15} /> {contact.address}
          </p>
        </div>
        {hero && (
          <figure className="landing-hero-photo">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={900}
              height={680}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </figure>
        )}
      </section>

      {/* Body copy runs in a single readable measure rather than beside a photo.
          Pairing every section with an image left an empty column whenever the
          section count and image count disagreed, and a tall portrait next to a
          short paragraph opened a large vertical gap. Images get their own
          section below instead. */}
      <section className="section landing-body">
        {linked.sections.map((section) => (
          <div className="landing-section-body" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>
              <Segments segments={section.body} />
            </p>
          </div>
        ))}
      </section>

      {gallery.length > 0 && (
        <section className="section landing-gallery">
          <div className="landing-gallery-grid">
            {gallery.map((g) => (
              <figure key={g.src}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={900}
                  height={680}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="section landing-benefits">
        <div className="detail-grid">
          {page.benefits.map((b) => {
            const Icon = ICONS[b.icon];
            return (
              <article className="detail-card" key={b.title}>
                <Icon aria-hidden="true" size={22} />
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {page.priceTable && (
        <section className="section pricing-section" aria-labelledby="landing-prices">
          <div className="section-heading">
            <p className="eyebrow">Published pricing</p>
            <h2 id="landing-prices">{page.priceTable.caption}</h2>
          </div>
          <div className="landing-price-table-wrap">
            <table className="landing-price-table">
              <tbody>
                {page.priceTable.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">
                      {r.label}
                      {r.note && <span className="landing-price-note">{r.note}</span>}
                    </th>
                    <td>{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Peak-intent CTA: the moment someone has just read the price is when
              they are closest to deciding, and it is the surface most sites
              leave empty. */}
          <CtaBlock
            page={page}
            location="after-price-table"
            heading="Ready to book this?"
            body="Prices above are the published rates. Message or call to check availability — you will get a straight answer on timing and what the appointment involves."
          />
        </section>
      )}

      <section className="section landing-faqs" aria-labelledby="landing-faq-title">
        <div className="section-heading">
          <p className="eyebrow">Questions</p>
          <h2 id="landing-faq-title">Frequently asked</h2>
        </div>
        {/* Native details/summary, not an accordion component. A JS accordion
            unmounts closed content, so the answers would be absent from the
            server-rendered HTML — fatal on a page whose purpose is answering
            these questions. This works before hydration and is fully crawlable. */}
        <div className="faq-list">
          {page.faqs.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section landing-related">
          <div className="section-heading">
            <p className="eyebrow">Related</p>
            <h2>You might also be looking for</h2>
          </div>
          <div className="detail-grid">
            {related.map((r) => (
              <article className="detail-card" key={r.slug}>
                <h3>
                  <Link href={r.pathname}>{r.h1}</Link>
                </h3>
                <p>{r.metaDescription}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section landing-closing" id="enquiry">
        <CtaBlock
          page={page}
          location="closing"
          heading={page.ctaHeading}
          body={page.ctaBody}
        />
      </section>

      <StickyCta page={page} />
    </main>
  );
}
