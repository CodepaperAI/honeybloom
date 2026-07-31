// THE QUALITY GATE.
//
// This is the entire defence against a scaled-content / doorway-page penalty.
// Page count is not the lever — data density per page is, and the only way to
// guarantee it is to make a thin page impossible to ship.
//
// It runs from next.config.ts and THROWS. A lint warning or a checklist gets
// ignored; a failing build does not.
//
// DO NOT lower a threshold to get a page to pass. If a page trips the gate,
// rewrite the page. Lowering `maxSimilarity` in particular defeats the only
// check that catches the actual failure mode: one template with a swapped
// service or city name.

import { LandingPage, bodyText, wordCount } from "./types";

export interface Thresholds {
  minWords: number;
  minFaqs: number;
  minImages: number;
  maxSimilarity: number;
  minInboundLinks: number;
  maxEntityLinks: number;
}

export const DEFAULT_THRESHOLDS: Thresholds = {
  // Calibrated against the strongest competitor pages in this market — the
  // dedicated service pages that actually rank for "lash lift Mississauga" and
  // "ombre brows Mississauga" run ~1,000-1,400 words with a real FAQ.
  minWords: 900,
  minFaqs: 5,
  // Deliberately 4, not the usual 6.
  //
  // The honest image pool is 11 photos. Forcing 6 unique per page would mean
  // padding a facial page with henna photos to hit a number — which is worse
  // for the visitor than four relevant ones, and the gate exists to enforce
  // quality, not box-ticking. RAISE THIS TO 6 once the licensed stock in
  // images.ts PLANNED lands, and again if first-party photography is shot.
  minImages: 4,
  // 8-word-shingle Jaccard against every sibling. A genuinely differentiated
  // set lands near 1-3%; anything approaching 30% is a templated page.
  maxSimilarity: 0.3,
  minInboundLinks: 3,
  // In-copy contextual links. Linking every mention is textbook
  // over-optimisation, so the cap is enforced rather than merely advised.
  maxEntityLinks: 10,
};

export interface Issue {
  slug: string;
  rule: string;
  detail: string;
}

/** Word shingles for near-duplicate detection. */
function shingles(text: string, size = 8): Set<string> {
  const w = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + size <= w.length; i++) out.add(w.slice(i, i + size).join(" "));
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const s of a) if (b.has(s)) shared++;
  return shared / (a.size + b.size - shared);
}

export function validateLandingPages(
  pages: LandingPage[],
  thresholds: Partial<Thresholds> = {}
): Issue[] {
  const t = { ...DEFAULT_THRESHOLDS, ...thresholds };
  const issues: Issue[] = [];
  const add = (slug: string, rule: string, detail: string) => issues.push({ slug, rule, detail });

  // ---- Uniqueness across the registry ----
  const uniqueFields: Array<[keyof LandingPage, string]> = [
    ["slug", "duplicate-slug"],
    ["pathname", "duplicate-pathname"],
    ["title", "duplicate-title"],
    ["h1", "duplicate-h1"],
    ["metaDescription", "duplicate-meta-description"],
    ["formSourceId", "duplicate-form-source-id"],
  ];
  for (const [field, rule] of uniqueFields) {
    const seen = new Map<string, string>();
    for (const p of pages) {
      const v = String(p[field] ?? "");
      const prev = seen.get(v);
      if (prev) add(p.slug, rule, `${String(field)} "${v}" is already used by "${prev}"`);
      else seen.set(v, p.slug);
    }
  }

  // ---- Per-page rules ----
  for (const p of pages) {
    const text = bodyText(p);
    const words = wordCount(text);

    if (words < t.minWords) add(p.slug, "min-words", `${words} words, needs ${t.minWords}`);
    if (p.faqs.length < t.minFaqs) {
      add(p.slug, "min-faqs", `${p.faqs.length} FAQs, needs ${t.minFaqs}`);
    }

    const uniqueImages = new Set(p.images.map((i) => i.src));
    if (uniqueImages.size < t.minImages) {
      add(p.slug, "min-images", `${uniqueImages.size} unique images, needs ${t.minImages}`);
    }
    for (const img of p.images) {
      if (!img.alt || img.alt.trim().length < 12) {
        add(p.slug, "alt-text", `image ${img.src} has missing or too-short alt text`);
      }
    }

    // The route param and the declared pathname must agree, or the page renders
    // at one URL while its canonical, sitemap entry and OG tags all point at
    // another. That is precisely the defect this project was brought in to fix
    // at the domain level; it must not reappear at the path level.
    if (p.family === "service") {
      if (!p.serviceSlug) {
        add(p.slug, "missing-service-slug", "service pages need a serviceSlug for the route");
      } else if (p.pathname !== `/services/${p.serviceSlug}`) {
        add(
          p.slug,
          "pathname-slug-mismatch",
          `pathname "${p.pathname}" does not match route /services/${p.serviceSlug}`
        );
      }
    }
    if (p.family === "area") {
      if (!p.areaSlug) {
        add(p.slug, "missing-area-slug", "area pages need an areaSlug for the route");
      } else if (p.pathname !== `/beauty-salon/${p.areaSlug}`) {
        add(
          p.slug,
          "pathname-slug-mismatch",
          `pathname "${p.pathname}" does not match route /beauty-salon/${p.areaSlug}`
        );
      }
    }
    if (p.family === "guide" && p.pathname !== `/guides/${p.slug}`) {
      add(
        p.slug,
        "pathname-slug-mismatch",
        `pathname "${p.pathname}" does not match route /guides/${p.slug}`
      );
    }

    // A service page exists to answer "what does this cost and what do I get".
    // Without the published price block it is just prose, and every competitor
    // that ranks in this market publishes prices.
    if (p.family === "service") {
      if (!p.priceTable || p.priceTable.rows.length === 0) {
        add(p.slug, "missing-price-table", "service pages must publish a price table");
      } else if (p.priceTable.rows.some((r) => !r.price.trim())) {
        add(p.slug, "empty-price", "a price row has no price");
      }
    }

    // Unresolved copy must never reach production.
    const todo = text.match(/\b(TODO|TBD|FIXME|LOREM|XXX|PLACEHOLDER)\b/i);
    if (todo) add(p.slug, "todo-marker", `contains "${todo[0]}"`);

    if (!p.pathname.startsWith("/")) add(p.slug, "pathname", `"${p.pathname}" must start with /`);
    if (p.pathname !== p.pathname.toLowerCase()) {
      add(p.slug, "pathname", `"${p.pathname}" must be lowercase`);
    }
    if (!p.h1.trim()) add(p.slug, "missing-h1", "h1 is empty");
    if (!p.navLabel.trim()) {
      add(p.slug, "missing-nav-label", "navLabel is empty");
    } else if (p.navLabel.length > 32) {
      add(
        p.slug,
        "nav-label-length",
        `navLabel "${p.navLabel}" is ${p.navLabel.length} chars — too long for a footer column`
      );
    }
    if (p.metaDescription.length > 165) {
      add(p.slug, "meta-description-length", `${p.metaDescription.length} chars, keep under 165`);
    }
    if (p.metaDescription.length < 70) {
      add(p.slug, "meta-description-length", `${p.metaDescription.length} chars, too short`);
    }
    if (!p.entities.length) {
      add(p.slug, "missing-entities", "no entities declared, so nothing can link here in copy");
    }

    // A page must not list itself as related.
    if (p.related.includes(p.slug)) add(p.slug, "self-link", "lists itself in related");
    const dupRelated = p.related.filter((r, i) => p.related.indexOf(r) !== i);
    if (dupRelated.length) add(p.slug, "duplicate-related", `repeats ${dupRelated.join(", ")}`);
    for (const r of p.related) {
      if (!pages.some((x) => x.slug === r)) {
        add(p.slug, "dangling-related", `"${r}" is not a known page`);
      }
    }
  }

  // ---- Entity collisions: one destination per phrase ----
  // Two pages claiming the same entity makes in-copy linking non-deterministic.
  const entityOwner = new Map<string, string>();
  for (const p of pages) {
    for (const e of p.entities) {
      const key = e.trim().toLowerCase();
      const prev = entityOwner.get(key);
      if (prev && prev !== p.slug) {
        add(p.slug, "duplicate-entity", `entity "${e}" is already claimed by "${prev}"`);
      } else {
        entityOwner.set(key, p.slug);
      }
    }
  }

  // ---- Inbound link balance: nothing ships orphaned ----
  const inbound = new Map<string, number>(pages.map((p) => [p.slug, 0]));
  for (const p of pages) {
    for (const r of p.related) inbound.set(r, (inbound.get(r) ?? 0) + 1);
  }
  for (const p of pages) {
    const n = inbound.get(p.slug) ?? 0;
    if (n < t.minInboundLinks) {
      add(p.slug, "min-inbound-links", `${n} inbound links, needs ${t.minInboundLinks}`);
    }
  }

  // ---- The anti-doorway check: every pair ----
  const sh = pages.map((p) => ({ slug: p.slug, s: shingles(bodyText(p)) }));
  for (let i = 0; i < sh.length; i++) {
    for (let j = i + 1; j < sh.length; j++) {
      const sim = jaccard(sh[i].s, sh[j].s);
      if (sim > t.maxSimilarity) {
        add(
          sh[i].slug,
          "max-similarity",
          `${(sim * 100).toFixed(1)}% similar to "${sh[j].slug}" (ceiling ${(
            t.maxSimilarity * 100
          ).toFixed(0)}%)`
        );
      }
    }
  }

  return issues;
}

export function formatIssues(issues: Issue[]): string {
  const bySlug = new Map<string, Issue[]>();
  for (const i of issues) {
    if (!bySlug.has(i.slug)) bySlug.set(i.slug, []);
    bySlug.get(i.slug)!.push(i);
  }
  const lines: string[] = [];
  for (const [slug, list] of bySlug) {
    lines.push(`  ${slug}`);
    for (const i of list) lines.push(`     [${i.rule}] ${i.detail}`);
  }
  return lines.join("\n");
}

/** Max pairwise similarity — reported on success so drift is visible early. */
export function maxPairwiseSimilarity(pages: LandingPage[]): {
  value: number;
  pair: [string, string] | null;
} {
  const sh = pages.map((p) => ({ slug: p.slug, s: shingles(bodyText(p)) }));
  let best = 0;
  let pair: [string, string] | null = null;
  for (let i = 0; i < sh.length; i++) {
    for (let j = i + 1; j < sh.length; j++) {
      const sim = jaccard(sh[i].s, sh[j].s);
      if (sim > best) {
        best = sim;
        pair = [sh[i].slug, sh[j].slug];
      }
    }
  }
  return { value: best, pair };
}
