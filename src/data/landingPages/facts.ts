// Verified facts. Every number on every landing page reads from here.
//
// RULE: never estimate a number that has a real source. Prices come from the
// salon's own published menu (src/lib/site.ts `menuGroups`) and are read at
// build time rather than retyped, so a price can never drift between the menu
// page and a landing page. Competitor prices carry the URL they came from.
//
// Distances and drive times for area pages must come from a routing API (OSRM
// is free and needs no key), never from memory. They are deliberately absent
// here until measured — see AREA_TRAVEL below.

// Relative, not the "@/" alias. This module is reached from next.config.ts so
// the quality gate can run at build time, and Next's config transpiler does not
// apply tsconfig path aliases — an aliased import here fails the whole build
// with a MODULE_NOT_FOUND before any page is even compiled.
import { menuGroups } from "../../lib/site";
import type { PriceRow } from "./types";

/**
 * Reads one published price. Throws if the group or item does not exist.
 *
 * Throwing is intentional: this runs during the build, so a renamed menu item
 * fails the deploy instead of quietly rendering "undefined" as a price on a
 * live page. A wrong price is the fact a client checks before booking.
 */
export function requirePrice(groupTitle: string, itemLabel: string): string {
  const group = menuGroups.find((g) => g.title === groupTitle);
  if (!group) {
    throw new Error(
      `[facts] Unknown price group "${groupTitle}". Known groups: ${menuGroups
        .map((g) => g.title)
        .join(", ")}`
    );
  }
  const item = group.items.find((i) => i[0] === itemLabel);
  if (!item) {
    throw new Error(
      `[facts] Unknown item "${itemLabel}" in "${groupTitle}". Known items: ${group.items
        .map((i) => i[0])
        .join(", ")}`
    );
  }
  return item[1];
}

/** Every published row of a menu group, as price-table rows. */
export function priceGroup(groupTitle: string): PriceRow[] {
  const group = menuGroups.find((g) => g.title === groupTitle);
  if (!group) {
    throw new Error(`[facts] Unknown price group "${groupTitle}".`);
  }
  return group.items.map((i) => ({ label: i[0], price: i[1] }));
}

/** A subset of a group's rows, in the order given. */
export function priceRows(groupTitle: string, labels: string[]): PriceRow[] {
  return labels.map((label) => ({ label, price: requirePrice(groupTitle, label) }));
}

/**
 * Competitor prices observed on public pages, with the source URL.
 *
 * These are quoted as "at the time of writing" on the pages that use them and
 * exist so the guide pages can make an honest market comparison rather than an
 * unsupported "great value" claim. Re-check before any major content refresh.
 */
export interface CompetitorPrice {
  business: string;
  service: string;
  price: string;
  city: string;
  source: string;
  observed: string;
}

export const COMPETITOR_PRICES: CompetitorPrice[] = [
  {
    business: "Xtremities",
    service: "Ombre brows",
    price: "$280",
    city: "Mississauga",
    source: "https://www.xtremities.ca/ombre-brows",
    observed: "2026-07",
  },
  {
    business: "Alternative Laser Health",
    service: "Ombre brows",
    price: "$280",
    city: "Mississauga",
    source: "https://www.alternativelaserhealth.com/ombre-powder-brow-makeup",
    observed: "2026-07",
  },
  {
    business: "Alternative Laser Health",
    service: "Microblading + ombre powder combination",
    price: "$325",
    city: "Mississauga",
    source: "https://www.alternativelaserhealth.com/permanent-makeup",
    observed: "2026-07",
  },
  {
    business: "Dollface Beauty Bar",
    service: "Ombre brows",
    price: "$599",
    city: "Oakville",
    source: "https://www.dollfacebeautybar.ca/permanent-make-up",
    observed: "2026-07",
  },
];

/**
 * Drive distance and time from the salon to each serviced area.
 *
 * INTENTIONALLY EMPTY. Populate ONLY from a routing API — do not write these
 * from memory. On a previous build two drive times were written from memory and
 * shipped; one was 25 km on a page that claimed "fifteen minutes".
 *
 * Salon origin: 50 Sussex Gate, unit #102, Mississauga, ON L5B 3Y5.
 *
 *   curl "https://router.project-osrm.org/route/v1/driving/{lon1},{lat1};{lon2},{lat2}?overview=false"
 *
 * Lead with distance (stable); give time as a range, since routing times
 * exclude traffic. An area page must not ship until its entry exists here.
 */
export interface AreaTravel {
  areaSlug: string;
  areaName: string;
  distanceKm: number;
  driveMinutesLow: number;
  driveMinutesHigh: number;
  source: string;
}

export const AREA_TRAVEL: AreaTravel[] = [];

export function requireAreaTravel(areaSlug: string): AreaTravel {
  const t = AREA_TRAVEL.find((a) => a.areaSlug === areaSlug);
  if (!t) {
    throw new Error(
      `[facts] No measured travel data for area "${areaSlug}". ` +
        `Measure it with OSRM and add it to AREA_TRAVEL — do not estimate.`
    );
  }
  return t;
}
