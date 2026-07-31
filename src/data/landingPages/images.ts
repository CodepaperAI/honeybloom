// Verified image manifest.
//
// EVERY entry here was opened and looked at before its description was written.
// Filenames lie, and the existing captions in src/lib/site.ts lie in several
// places — see the MISLABELLED block at the bottom. Constants are named for
// what the photo ACTUALLY shows, not for the service someone hoped it showed,
// because a misleading variable name propagates the error to the next person
// (or agent) who reaches for it.
//
// Rules:
//   - Never write alt text from a filename.
//   - Never use an image of a service the salon does not offer.
//   - Never use another business's branded photo.

import type { PageImage } from "./types";

/** Verified and safe to use, with alt text describing the actual content. */
export const VERIFIED = {
  lashLiftInProgress: {
    src: "/images/lash_lift_purple.jpg",
    alt: "Lash lift in progress with a purple silicone shield and under-eye pads, lashes being combed upward",
  },
  threadingInProgress: {
    src: "/images/stock-threading.webp",
    alt: "Facial threading in progress, cotton thread held taut across a reclined client's brow area",
  },
  browShapingTweezers: {
    src: "/images/stock-brow-styling.webp",
    alt: "Eyebrow shaping with tweezers on a reclined client, brow line being cleaned up",
  },
  facialWarmTowel: {
    src: "/images/stock-facial-massage.webp",
    alt: "Facial treatment with a warm towel being pressed over a client's cheeks and jaw",
  },
  facialClayMask: {
    src: "/images/stock-hero-facial.webp",
    // The existing site alt says "Woman relaxing..." — the subject has a full
    // beard. Described without assuming gender.
    alt: "Client in a white robe and towel wrap relaxing with a clay face mask applied",
  },
  bridalHennaArms: {
    src: "/images/henna_new.jpg",
    alt: "Detailed bridal mehndi henna covering both hands and forearms, worn with bridal jewellery",
  },
  hennaConeApplication: {
    src: "/images/stock-henna-application.webp",
    alt: "Henna cone applying a floral design to the back of a hand, artist and client seated together",
  },
  bridalMakeupApplication: {
    src: "/images/makeup_service.jpg",
    alt: "Makeup artist applying eye makeup to a bride in traditional South Asian bridal jewellery",
  },
  bridalMakeupFinished: {
    src: "/images/bridal_makeup_gallery.jpg",
    alt: "Finished bridal makeup look with soft glowing skin, defined eyes, tiara and veil",
  },
  legWaxingAmberWax: {
    src: "/images/gallery_waxing.png",
    alt: "Warm amber wax being spread along a client's lower leg with a wooden spatula in a treatment room",
  },
  armWaxingAmberWax: {
    src: "/images/nufree_wax.png",
    alt: "Warm amber wax being applied along a client's forearm with a wooden spatula",
  },
  // Named for the procedure it ACTUALLY shows. Honey Bloom does not offer
  // extensions, so this belongs only on the lift-vs-extensions comparison,
  // where showing the alternative is the point. The constant name and alt text
  // are both explicit so it cannot be grabbed for a lash lift page by mistake.
  lashExtensionsApplication: {
    src: "/images/stock-lash-application.webp",
    alt: "Eyelash extensions being applied one at a time with two pairs of tweezers",
  },
} as const satisfies Record<string, PageImage>;

export type VerifiedImageKey = keyof typeof VERIFIED;

export function img(key: VerifiedImageKey): PageImage {
  return VERIFIED[key];
}

export function imgs(...keys: VerifiedImageKey[]): PageImage[] {
  return keys.map(img);
}

// ---------------------------------------------------------------------------
// DO NOT USE on landing pages. Each of these is wrong in a way that would cost
// the client something real. Left documented rather than deleted so nobody
// "rediscovers" them and puts them back.
// ---------------------------------------------------------------------------

export const DO_NOT_USE = {
  "/images/lash_before_after.jpg":
    "Another studio's marketing image — the product bottle is visibly branded " +
    '"VELVET LASH STUDIO — Lift & Tint Specialist". Presenting it as Honey Bloom\'s ' +
    "own before/after misrepresents someone else's results and is a likely " +
    "copyright problem. Currently live in GalleryGrid.tsx — needs removing.",

  "/images/micro_shading.jpg":
    "Shows MICROBLADING, not microshading: a blade cutting linear hair strokes, " +
    "with visible blood and broken skin. Microshading/ombre is a machine " +
    "stippling technique and looks nothing like this. It is the wrong procedure " +
    "for the page it illustrates, it is graphic, and it currently appears twice " +
    "on the homepage.",

  "/images/stock-spa-treatment.webp":
    "Shows a full-body oil MASSAGE. Not a service on the menu — using it implies " +
    "the salon offers massage.",

  "/images/aleks-Wude2F3CMss-unsplash.jpg": "Not yet verified — open it before use.",
  "/images/milky-way-lashes-GEct9d7zgos-unsplash.jpg": "Not yet verified — open it before use.",
  "/images/lash_lift.jpg": "Not yet verified — open it before use.",
  "/images/lash_lift_new.jpg": "Not yet verified — open it before use.",
} as const;

// ---------------------------------------------------------------------------
// Stock to be licensed. Each entry is the exact shot a page needs and cannot
// currently show honestly. Drop the file into public/images/ under the given
// path and the page activates itself — see AVAILABLE_IMAGES below.
//
// Written as a spec rather than "a nice brow photo" because the whole reason
// this list exists is that generic beauty stock was used for specific
// procedures and got them wrong.
// ---------------------------------------------------------------------------

export interface PlannedImage {
  src: string;
  alt: string;
  /** What to actually look for when licensing. */
  spec: string;
}

export const PLANNED: Record<string, PlannedImage> = {
  microshadingMachine: {
    src: "/images/microshading-machine-work.jpg",
    alt: "Permanent makeup artist shading a brow with a digital machine and pigment, client reclined",
    spec:
      "MUST show a PMU machine pen (not a manual blade) stippling pigment into the brow, " +
      "producing a soft powdered gradient. No blood, no linear hair strokes — those are " +
      "microblading and are the exact mistake currently on the homepage.",
  },
  ombreBrowsHealed: {
    src: "/images/ombre-brows-healed-result.jpg",
    alt: "Healed ombre powder brows with a soft gradient, lighter at the front and defined at the tail",
    spec:
      "A HEALED result, not a fresh-out-of-the-chair brow. Should read as soft powdered " +
      "makeup, darker at the tail, faded at the front. Unbranded.",
  },
  nufreeProductInUse: {
    src: "/images/nufree-application.jpg",
    alt: "Nufree soy-based hair removal liquid being applied with a spatula, then removed with a cloth strip",
    spec:
      "CRITICAL: Nufree is blue/white and is explicitly NOT a wax. Do not accept amber or " +
      "honey-coloured wax. If genuine Nufree stock cannot be found, photograph the salon's " +
      "own product — this image is the entire differentiator for that page.",
  },
  browLamination: {
    src: "/images/brow-lamination.jpg",
    alt: "Brow lamination in progress, brow hairs brushed upward and set with a processing cream",
    spec: "Brow hairs combed vertically and held with lamination solution. Not tinting, not threading.",
  },
  chemicalPeel: {
    src: "/images/chemical-peel.jpg",
    alt: "Esthetician applying a chemical peel solution to a client's face with a fan brush",
    spec: "Fan brush applying a clear solution. Client's eyes protected. Clinical but calm.",
  },
  brazilianWaxRoom: {
    src: "/images/waxing-treatment-room.jpg",
    alt: "Clean private waxing treatment room with a covered table, fresh linens and supplies laid out",
    spec:
      "Room-only shot, no body. For the Brazilian page, where a discretion/hygiene image " +
      "works far better than a treatment photo.",
  },
};

/**
 * Every image path the site can honestly render today.
 *
 * A record whose images are not all in this set is treated as a draft and kept
 * out of the live registry (see index.ts). Add the licensed file to
 * public/images/, move its key from PLANNED into VERIFIED after opening it,
 * and the page ships on the next build — no other change needed.
 */
export const AVAILABLE_IMAGES: ReadonlySet<string> = new Set(
  Object.values(VERIFIED).map((i) => i.src)
);

export function allImagesAvailable(images: PageImage[]): boolean {
  return images.every((i) => AVAILABLE_IMAGES.has(i.src));
}

/**
 * Nufree note.
 *
 * Nufree is explicitly marketed as "NOT A WAX" — a blue/white soy-based liquid
 * applied at low heat. Both waxing photos in this repo show classic warm amber
 * wax on a wooden spatula, which is the opposite of the product's entire
 * selling point. They are captioned honestly here as amber wax and are fine on
 * the regular-waxing page, but the Nufree page needs a real photo of the actual
 * Nufree product in use before it can show a "this is Nufree" image.
 */
export const NUFREE_IMAGE_GAP = true;
