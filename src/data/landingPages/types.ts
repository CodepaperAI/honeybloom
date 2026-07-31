// Landing-page record types.
//
// TWO INVARIANTS, both load-bearing:
//
// 1. Records are PURE JSON-SERIALISABLE DATA. No React components, no imported
//    icons, no functions. Icons are string keys resolved through iconRegistry at
//    render time and typed as `IconKey`, so a typo is a compile error rather
//    than a blank space on a live page. This keeps every record importable from
//    server-only contexts — route `metadata`, sitemap.ts, and the validator —
//    none of which can evaluate a component reference.
//
// 2. The rendering template MUST NOT import the registry (./index). A client
//    component that imports the registry ships every record — all long-form
//    copy, every FAQ — into every page's JS bundle. The route resolves the one
//    record it needs server-side and passes it down as a prop.

/**
 * Icon keys. Mirrored by an explicit map in the landing template, where each
 * key maps to a lucide-react component. Kept as a const tuple so the union is
 * checked at compile time.
 */
export const iconRegistry = [
  "Sparkles",
  "Flower2",
  "Heart",
  "CheckCircle2",
  "Clock",
  "ShieldCheck",
  "Leaf",
  "Droplets",
  "Scissors",
  "Eye",
  "Brush",
  "CalendarClock",
  "MapPin",
  "Phone",
  "MessageCircle",
  "Star",
  "Info",
  "AlertTriangle",
  "Wallet",
] as const;

export type IconKey = (typeof iconRegistry)[number];

/** Which family a record belongs to. Drives routing and related-page mixing. */
export type PageFamily = "service" | "guide" | "area";

export interface Faq {
  question: string;
  answer: string;
}

/**
 * A row of the published price menu.
 *
 * `price` is copied verbatim from the salon's own published menu in
 * src/lib/site.ts. Never invent, round, or "tidy" a price — a wrong price is
 * the one fact a client checks before booking, and the one that costs a sale.
 */
export interface PriceRow {
  label: string;
  price: string;
  note?: string;
}

export interface FactRow {
  label: string;
  value: string;
  /** Where the number came from. REQUIRED when the value is a statistic. */
  source?: string;
}

export interface Benefit {
  icon: IconKey;
  title: string;
  description: string;
}

export interface PageImage {
  src: string;
  /** Must describe what the image ACTUALLY shows. Verified by opening it. */
  alt: string;
}

export interface LandingPage {
  /** Unique within the whole registry. */
  slug: string;
  family: PageFamily;
  /** Route path, e.g. "/services/lash-lift-and-tint-mississauga". Unique. */
  pathname: string;

  // ---- Head ----
  title: string;
  metaDescription: string;
  /** The visible <h1>. Leads with the phrase people actually search. */
  h1: string;
  /**
   * Short label for footer/nav listings.
   *
   * The h1 is written for search ("Lash Lift and Tint in Mississauga") and is
   * far too long for a footer column. Kept as its own field rather than
   * truncating the h1, because a truncated heading reads as broken.
   */
  navLabel: string;

  // ---- Body, in render order. bodyText() concatenates exactly these. ----
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  benefits: Benefit[];
  /** Published prices. Required on service pages — see validate.ts. */
  priceTable?: { caption: string; rows: PriceRow[] };
  factTable?: { caption: string; rows: FactRow[] };
  faqs: Faq[];
  ctaHeading: string;
  ctaBody: string;

  images: PageImage[];

  // ---- Graph ----
  /** Slugs of related records. Populated and balanced by buildRelated(). */
  related: string[];
  /** Phrases this page is the canonical destination for, for in-copy linking. */
  entities: string[];

  // ---- Attribution ----
  /** Echoed into the inquiry email so a lead traces to the page. Unique. */
  formSourceId: string;

  // ---- Optional family-specific payload ----
  serviceSlug?: string;
  areaSlug?: string;

  /**
   * Non-empty when the page is written but must NOT ship yet, with the reason.
   *
   * Held pages are excluded from the live registry rather than deleted, so the
   * copy stays reviewed and ready and the blocker stays visible in every build
   * log. Use this instead of weakening the quality gate — "the gate complained
   * so I removed the rule" is how a thin page reaches production.
   */
  blockedBy?: string[];
}

/**
 * The exact prose a visitor reads, in render order.
 *
 * The word count and similarity checks MUST measure this and nothing else.
 * Navigation, footer and other boilerplate would inflate every page equally and
 * mask a genuinely thin one.
 */
export function bodyText(p: LandingPage): string {
  const parts: string[] = [p.h1, p.intro];
  for (const s of p.sections) parts.push(s.heading, s.body);
  for (const b of p.benefits) parts.push(b.title, b.description);
  if (p.priceTable) {
    parts.push(p.priceTable.caption);
    for (const r of p.priceTable.rows) {
      parts.push(r.label, r.price);
      if (r.note) parts.push(r.note);
    }
  }
  if (p.factTable) {
    parts.push(p.factTable.caption);
    for (const r of p.factTable.rows) parts.push(r.label, r.value);
  }
  for (const f of p.faqs) parts.push(f.question, f.answer);
  parts.push(p.ctaHeading, p.ctaBody);
  return parts.join(" ");
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
