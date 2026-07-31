// Landing-page registry.
//
// IMPORTANT: no client component may import this module. It pulls every record
// — all long-form copy, every FAQ — and a client import would ship the whole
// registry into that page's JS bundle. Routes resolve the single record they
// need on the server and pass it down as a prop.

import { LandingPage, PageFamily } from "./types";
import { allImagesAvailable } from "./images";
import { servicePages } from "./services";
import { guidePages } from "./guides";
import { areaPages } from "./areas";

/**
 * A record is live only when every image it references actually exists.
 *
 * The alternative — shipping the page with a placeholder or a loosely related
 * photo — is how a brow page ends up illustrated with someone else's branded
 * before/after. Drafts are excluded here rather than deleted so the copy is
 * written, reviewed and ready; dropping the licensed file into public/images/
 * and moving its key into VERIFIED is the only step left to publish.
 */
function isLive(p: LandingPage): boolean {
  return allImagesAvailable(p.images) && !(p.blockedBy && p.blockedBy.length > 0);
}

/** Why each held page is held, for the build log. */
export function draftReasons(p: LandingPage): string[] {
  const reasons = [...(p.blockedBy ?? [])];
  const missing = p.images.filter((i) => !allImagesAvailable([i])).map((i) => i.src);
  if (missing.length) reasons.push(`missing imagery: ${missing.join(", ")}`);
  return reasons;
}

/** Records written but waiting on imagery. Reported at build time. */
export const draftPages: LandingPage[] = [...servicePages, ...guidePages, ...areaPages].filter(
  (p) => !isLive(p)
);

/**
 * Interleaves the families round-robin.
 *
 * Concatenating services then guides then areas would make the cyclic walk in
 * buildRelated() link services almost exclusively to other services.
 * Interleaving first means each page's neighbours in the ordering come from
 * different families, so the related graph is genuinely cross-family without
 * any special-casing — a guide about lash lifts vs extensions ends up pointing
 * at the lash lift service page, which is the whole point.
 */
function interleave(groups: LandingPage[][]): LandingPage[] {
  const out: LandingPage[] = [];
  const longest = Math.max(0, ...groups.map((g) => g.length));
  for (let i = 0; i < longest; i++) {
    for (const g of groups) if (i < g.length) out.push(g[i]);
  }
  return out;
}

/**
 * Assigns `related` links across the registry.
 *
 * Balanced by construction: pages are walked in order and each takes its links
 * from the following pages cyclically, so every page ends up with exactly the
 * same inbound count instead of links pooling on whichever page happens to be
 * listed first. An unbalanced graph is how "related pages" sections end up
 * funnelling everything into one hub while the rest of the set sits orphaned.
 */
function buildRelated(pages: LandingPage[], perPage = 5): LandingPage[] {
  const n = pages.length;
  if (n < 2) return pages;
  const k = Math.min(perPage, n - 1);
  return pages.map((page, i) => {
    const related: string[] = [];
    for (let step = 1; step <= k; step++) {
      related.push(pages[(i + step) % n].slug);
    }
    return { ...page, related };
  });
}

/**
 * Every landing page that can ship today, with the related graph resolved.
 *
 * buildRelated() runs AFTER drafts are filtered out. Building the graph first
 * would leave live pages pointing at slugs that render 404s, and the gate's
 * dangling-related rule would (correctly) fail the build.
 */
export const landingPages: LandingPage[] = buildRelated(
  interleave([
    servicePages.filter(isLive),
    guidePages.filter(isLive),
    areaPages.filter(isLive),
  ])
);

const bySlug = new Map(landingPages.map((p) => [p.slug, p]));
const byPathname = new Map(landingPages.map((p) => [p.pathname, p]));

export function getBySlug(slug: string): LandingPage | undefined {
  return bySlug.get(slug);
}

export function getByPathname(pathname: string): LandingPage | undefined {
  return byPathname.get(pathname);
}

export function getByFamily(family: PageFamily): LandingPage[] {
  return landingPages.filter((p) => p.family === family);
}

export function getServicePage(serviceSlug: string): LandingPage | undefined {
  return landingPages.find((p) => p.family === "service" && p.serviceSlug === serviceSlug);
}

export function getAreaPage(areaSlug: string): LandingPage | undefined {
  return landingPages.find((p) => p.family === "area" && p.areaSlug === areaSlug);
}

/**
 * Lightweight shape for related-page cards. Never pass whole records into a
 * client component when a summary will do — the long-form copy and FAQs would
 * be serialised into the RSC payload for no reason.
 */
export interface PageSummary {
  slug: string;
  pathname: string;
  h1: string;
  metaDescription: string;
  family: PageFamily;
}

export function toSummary(p: LandingPage): PageSummary {
  return {
    slug: p.slug,
    pathname: p.pathname,
    h1: p.h1,
    metaDescription: p.metaDescription,
    family: p.family,
  };
}

export function getRelatedSummaries(slug: string): PageSummary[] {
  const page = bySlug.get(slug);
  if (!page) return [];
  return page.related
    .map((r) => bySlug.get(r))
    .filter((p): p is LandingPage => Boolean(p))
    .map(toSummary);
}

/**
 * Entity phrase -> destination pathname, for in-copy contextual linking.
 *
 * Longest phrase first so "lash lift and tint" wins over "lash lift" when both
 * are claimed. Uniqueness of the phrases themselves is enforced by the gate's
 * duplicate-entity rule.
 */
export function entityLinkMap(): Array<{ phrase: string; href: string; slug: string }> {
  const entries = landingPages.flatMap((p) =>
    p.entities.map((phrase) => ({ phrase, href: p.pathname, slug: p.slug }))
  );
  return entries.sort((a, b) => b.phrase.length - a.phrase.length);
}

/**
 * Maps the service cards already on the site (src/lib/site.ts `services`) to
 * their landing page.
 *
 * This is the retrofit that connects the EXISTING site to the new pages. Before
 * it, /services and the homepage listed every treatment and linked to none of
 * them — the landing pages were reachable only from the footer and from each
 * other, which is a weak signal and a dead end for visitors.
 *
 * Keys must match the `title` strings in site.ts exactly. A rename there would
 * silently drop the link, so assertServiceCardTargets() below fails the build
 * instead.
 */
const SERVICE_CARD_TARGETS: Record<string, string> = {
  "Microshading & Ombre Brows": "microshading-ombre-brows-mississauga",
  "Lash Lift & Tinting": "lash-lift-and-tint-mississauga",
  "Facial Treatments": "facials-mississauga",
  // No dedicated Nufree service page yet — it is blocked on imagery. The guide
  // is the best available destination and is genuinely the stronger page.
  "Nufree Waxing": "nufree-vs-regular-waxing",
  "Waxing, Threading & Henna": "waxing-mississauga",
  // "Bridal & Event Makeup" is deliberately absent: that page is held pending a
  // published price. Held pages are not in bySlug, so it resolves to null and
  // simply renders no link.
};

/** Landing page for one of the site's existing service cards, if there is one. */
export function landingPathForService(title: string): string | null {
  const slug = SERVICE_CARD_TARGETS[title];
  if (!slug) return null;
  return bySlug.get(slug)?.pathname ?? null;
}

/**
 * Fails the build if a mapping key no longer matches a service title, or points
 * at a slug that is not a real record. Without this the retrofit rots quietly:
 * links just stop appearing and nobody notices.
 */
export function assertServiceCardTargets(serviceTitles: string[]): string[] {
  const problems: string[] = [];
  const known = new Set(serviceTitles);
  for (const [title, slug] of Object.entries(SERVICE_CARD_TARGETS)) {
    if (!known.has(title)) {
      problems.push(`service card title "${title}" no longer exists in site.ts services`);
    }
    const isDraft = draftPages.some((p) => p.slug === slug);
    if (!bySlug.has(slug) && !isDraft) {
      problems.push(`"${title}" points at unknown landing page slug "${slug}"`);
    }
  }
  return problems;
}

/**
 * Best landing page for a free-text service label.
 *
 * Used by the testimonial and gallery cards, whose `service` fields are loose
 * prose ("Threading and brow shaping", "Basic henna") rather than exact service
 * titles. Rather than maintaining a second hand-written map that would drift,
 * this reuses the entity map the in-copy linker already builds — the phrases are
 * declared once, on the pages that own them.
 *
 * entityLinkMap() is sorted longest-phrase-first, so the first hit is the most
 * specific one. Returns null when nothing matches, and nothing is rendered.
 */
export function landingPathForPhrase(text: string): string | null {
  const haystack = text.trim().toLowerCase();
  if (!haystack) return null;
  const hit = entityLinkMap().find((e) => haystack.includes(e.phrase.toLowerCase()));
  return hit ? hit.href : null;
}

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Grouped label/href pairs for the footer.
 *
 * SERVER-ONLY. SiteFooter is a server component and must stay one. If it ever
 * gains "use client", importing this module would pull the entire registry —
 * every section of long-form copy and every FAQ — into the JS bundle of every
 * page on the site, because the footer renders in the root layout.
 */
export function landingNavGroups(): Array<{ title: string; links: NavLink[] }> {
  const group = (family: PageFamily) =>
    landingPages
      .filter((p) => p.family === family)
      .map((p) => ({ label: p.navLabel, href: p.pathname }));

  return [
    { title: "Services", links: group("service") },
    { title: "Guides", links: group("guide") },
    { title: "Areas", links: group("area") },
  ].filter((g) => g.links.length > 0);
}

/** Route entries for sitemap.ts. */
export function landingPageRoutes(): Array<{ path: string; priority: number }> {
  return landingPages.map((p) => ({
    path: p.pathname,
    priority: p.family === "service" ? 0.85 : p.family === "area" ? 0.7 : 0.65,
  }));
}

export default landingPages;
