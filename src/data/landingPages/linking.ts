// In-copy contextual linking.
//
// Sitewide nav and footer links are boilerplate and heavily discounted.
// Contextual links inside body copy are what actually carry weight, so this is
// the part of the internal-linking work that matters.
//
// THE CRITICAL CONSTRAINT: this runs as ONE PURE PASS BEFORE RENDER and returns
// plain serialisable segments. It must never be implemented by threading a
// mutable "already linked" set through components as they render. React
// re-renders subtrees (StrictMode double-render, concurrent render), so the
// client would begin with a partly-populated set, produce different output than
// the server, and trigger a hydration mismatch that discards the whole tree —
// while the production build still passes. Only a browser catches that.
//
// Rules enforced here:
//   - First mention of each entity per page, then stop.
//   - Longest phrase first, so "lash lift and tint" wins over "lash lift".
//   - Never self-link.
//   - Hard cap per page (maxEntityLinks), because linking every mention is
//     textbook over-optimisation.

import type { LandingPage } from "./types";
import { DEFAULT_THRESHOLDS } from "./validate";

export interface LinkSegment {
  text: string;
  href?: string;
}

export interface LinkedSection {
  heading: string;
  body: LinkSegment[];
}

export interface LinkedContent {
  intro: LinkSegment[];
  sections: LinkedSection[];
  /** How many links were placed, for the build-time over-linking assertion. */
  linkCount: number;
}

export interface EntityLink {
  phrase: string;
  href: string;
  slug: string;
}

/** Escapes a phrase for safe use inside a RegExp. */
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

interface PassState {
  used: Set<string>;
  placed: number;
  cap: number;
}

/**
 * Links the first occurrence of each not-yet-used entity in one block of text.
 *
 * Mutation is confined to `state`, which is created fresh per page inside
 * linkPage() and never escapes it — this is a local accumulator in a pure
 * function, not shared state read during render.
 */
function linkText(text: string, links: EntityLink[], state: PassState): LinkSegment[] {
  const segments: LinkSegment[] = [];
  let rest = text;

  // Longest phrase first so the most specific entity claims the match.
  const candidates = [...links].sort((a, b) => b.phrase.length - a.phrase.length);

  let guard = 0;
  while (rest.length && guard++ < 500) {
    let best: { index: number; length: number; href: string; key: string; matched: string } | null =
      null;

    for (const c of candidates) {
      if (state.placed >= state.cap) break;
      const key = c.phrase.toLowerCase();
      if (state.used.has(key)) continue;

      // Word-boundary match so "deli" cannot match inside "chandeliers".
      const re = new RegExp(`\\b${escapeRegExp(c.phrase)}\\b`, "i");
      const m = re.exec(rest);
      if (!m) continue;

      // Earliest match wins; ties break toward the longer phrase because
      // candidates are already sorted longest-first.
      if (!best || m.index < best.index) {
        best = { index: m.index, length: m[0].length, href: c.href, key, matched: m[0] };
      }
    }

    if (!best) break;

    if (best.index > 0) segments.push({ text: rest.slice(0, best.index) });
    segments.push({ text: best.matched, href: best.href });
    state.used.add(best.key);
    state.placed++;
    rest = rest.slice(best.index + best.length);
  }

  if (rest.length) segments.push({ text: rest });
  return segments;
}

/**
 * Computes every contextual link for one page, in render order.
 *
 * `allLinks` is the whole registry's entity map; the page's own entities are
 * filtered out so a page can never link to itself.
 */
export function linkPage(
  page: LandingPage,
  allLinks: EntityLink[],
  cap: number = DEFAULT_THRESHOLDS.maxEntityLinks
): LinkedContent {
  const links = allLinks.filter((l) => l.slug !== page.slug);
  const state: PassState = { used: new Set(), placed: 0, cap };

  // Order matters: intro first, then sections top to bottom, so the first
  // mention that gets linked is the first one a reader actually encounters.
  const intro = linkText(page.intro, links, state);
  const sections = page.sections.map((s) => ({
    heading: s.heading,
    body: linkText(s.body, links, state),
  }));

  return { intro, sections, linkCount: state.placed };
}
