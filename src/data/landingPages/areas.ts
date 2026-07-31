// Area landing pages — INTENTIONALLY EMPTY for now.
//
// Two gates must clear before any page is added here.
//
// 1. MEASURED TRAVEL DATA. Every area page needs a real distance and drive time
//    from 50 Sussex Gate, unit #102, Mississauga, measured with a routing API
//    and recorded in AREA_TRAVEL in facts.ts. requireAreaTravel() throws if a
//    page references an area that has not been measured, so this cannot be
//    forgotten. Do not write these numbers from memory — a wrong drive time is
//    checked against the reader's own map before they book.
//
// 2. A FRESH SERP CHECK PER AREA. The audit that scoped this work found the
//    picture changes sharply with granularity:
//
//      "ombre powder brows Oakville"        -> 9 independent salon sites. Buildable.
//      "eyebrow threading Erin Mills"       -> 6 of 6 results were directories
//                                              (YellowPages x4, Yelp x2), zero
//                                              salon sites. NOT buildable.
//
//    Neighbourhood-level pages (Erin Mills, Square One, Hurontario, Glen Erin,
//    Heartland) were explicitly CUT for that reason. A single salon page cannot
//    displace a directory block, and a set of near-identical
//    "<service> in <neighbourhood>" pages is the textbook doorway pattern that
//    gets an entire domain demoted. City-level only.
//
// Candidates to check, all city-level: Oakville, Brampton, Etobicoke, Milton.
//
// Honesty requirement: the salon is in Mississauga. An area page must read as
// "near Oakville, N km away" and never imply a second location. Iconbrows ranks
// this way for Mississauga terms from outside the city, framing pages as
// "near Mississauga - 25 Min via the QEW" — that framing is the model.

import type { LandingPage } from "./types";

export const areaPages: LandingPage[] = [];
