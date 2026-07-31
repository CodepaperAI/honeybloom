// Service landing pages.
//
// ---------------------------------------------------------------------------
// ALLOWED FACTS — anything already published by the salon, plus arithmetic on
// it, plus sourced third-party data:
//   - Every price in menuGroups (src/lib/site.ts), read via facts.ts. Never
//     retyped, so a menu change can never leave a landing page stale.
//   - Address, phone, WhatsApp, email from `contact`.
//   - The service descriptions, `bestFor` and `time` strings already on /services.
//   - Nufree described as soy-based, antimicrobial and suited to sensitive skin
//     (the salon's own wording), plus the manufacturer's "not a wax" positioning.
//   - Competitor prices in COMPETITOR_PRICES, each with a source URL.
//
// BANNED until the client confirms in writing — write around these, never
// invent them:
//   - The founder's name, training, years in business, client counts.
//   - "Medical esthetician" as a credential (it is in the current <title>; it
//     is regulated-sounding and unverified). Not repeated on any page here.
//   - Ontario permanent-makeup licensing, pigment brands, Nufree certification.
//   - Opening hours, parking, accessibility, languages spoken.
//   - Patch-test policy, healing timelines, contraindications, aftercare
//     specifics beyond the generic guidance already published on /booking.
//   - Any superlative: best, largest, longest-established, #1.
// ---------------------------------------------------------------------------

import type { LandingPage } from "./types";
import { imgs } from "./images";
import { priceGroup, requirePrice } from "./facts";

export const servicePages: LandingPage[] = [
  // -------------------------------------------------------------------------
  {
    slug: "lash-lift-and-tint-mississauga",
    family: "service",
    serviceSlug: "lash-lift-and-tint-mississauga",
    pathname: "/services/lash-lift-and-tint-mississauga",
    title: "Lash Lift & Tint in Mississauga | Honey Bloom Beauty",
    metaDescription:
      "Lash lift and tint in Mississauga, $85. Lifted, darker natural lashes for weeks with no extensions and no daily curling. Book at Honey Bloom Beauty.",
    h1: "Lash Lift and Tint in Mississauga",
    navLabel: "Lash Lift & Tint",
    intro:
      "A lash lift reshapes the lashes you already have. Instead of gluing extensions onto each hair, a silicone shield holds your natural lashes in a lifted curve while a setting solution locks that shape in. Add a tint and the pale tips that normally disappear turn dark from root to end, so your eyes look more open without mascara. At Honey Bloom Beauty in Mississauga the lift and tint are priced together at " +
      requirePrice("Lash & Tinting", "Lash Lift & Tinting") +
      ", and the appointment runs about 45 to 75 minutes.",
    sections: [
      {
        heading: "What happens during the appointment",
        body:
          "You lie back with your eyes closed for the whole treatment, so there is nothing to watch or hold still for beyond keeping your eyes shut. Under-eye pads go on first to separate the lower lashes. A silicone shield is placed along the lash line, and the upper lashes are combed up onto it one section at a time until they sit evenly against the curve. A lifting solution softens the bond inside each hair so it can take a new shape, then a setting solution fixes it. If you are having the tint, that goes on last and processes for a few minutes before everything is removed and the lashes are brushed through. Most of the appointment is quiet processing time.",
      },
      {
        heading: "Who a lift suits, and who it does not",
        body:
          "A lift works with the length you already have. If your lashes are a reasonable length but grow straight out, so they read as short from the front and hide behind your lid, lifting them will make a dramatic difference. If your lashes are genuinely very short, a lift will curl them but it cannot add length, and extensions are the more honest answer. Straight, heavy, downward-growing lashes tend to get the most visible change. A tint on its own is worth considering if your lashes already curl well but are fair at the tips.",
      },
      {
        heading: "How long it lasts and what it costs to maintain",
        body:
          "The lift lasts as long as the lashes it was applied to. Lashes shed and regrow on their own cycle, so the effect fades gradually over several weeks as lifted hairs drop out and untreated ones replace them — you will not wake up one morning with it gone. Most people book again when the curl looks uneven rather than absent. Tint fades faster than the lift because pigment washes out with cleansing. Compared with extensions there are no fills, no glue, no aftercare products to buy, and nothing to avoid touching, which is the main reason people move across to it.",
      },
      {
        heading: "Lash lift and tint pricing",
        body:
          "Honey Bloom Beauty prices the lift and tint as one service at " +
          requirePrice("Lash & Tinting", "Lash Lift & Tinting") +
          ". Tinting alone is available for lashes or brows at " +
          requirePrice("Lash & Tinting", "Lash Tinting") +
          ", which is often added onto another appointment rather than booked by itself. Brow lamination with tinting sits at the same " +
          requirePrice("Lash & Tinting", "Eyebrows Lamination & Tinting") +
          " as the lash service, and the two are frequently booked together because they are the same kind of treatment applied to different hair.",
      },
      {
        heading: "Booking a lash lift in Mississauga",
        body:
          "The studio is at 50 Sussex Gate, unit #102 in Mississauga. Appointments are requested by WhatsApp, phone or email rather than through an online calendar, which means you can ask about timing and what to expect in the same message. Come with clean lashes and no mascara if you can — if you arrive with makeup on, it has to be removed first and that eats into your appointment. Contact lenses come out before the treatment starts, so bring a case and your glasses.",
      },
    ],
    benefits: [
      {
        icon: "Eye",
        title: "No extensions to maintain",
        description:
          "Nothing is glued on, so there are no fills to book, no glue to avoid, and no aftercare products to buy.",
      },
      {
        icon: "Clock",
        title: "Shorter morning routine",
        description:
          "Lifted, tinted lashes read as defined without mascara, which is the change most clients notice first.",
      },
      {
        icon: "Sparkles",
        title: "Works with your own lashes",
        description:
          "The result follows your natural lash line and length, so it looks like your eyes rather than a set of lashes.",
      },
      {
        icon: "Wallet",
        title: "One flat price",
        description:
          "Lift and tint are quoted together at " +
          requirePrice("Lash & Tinting", "Lash Lift & Tinting") +
          " rather than billed as separate add-ons.",
      },
    ],
    priceTable: {
      caption: "Published lash and tinting prices at Honey Bloom Beauty",
      rows: priceGroup("Lash & Tinting"),
    },
    faqs: [
      {
        question: "How much is a lash lift and tint in Mississauga?",
        answer:
          "At Honey Bloom Beauty a lash lift with tinting is " +
          requirePrice("Lash & Tinting", "Lash Lift & Tinting") +
          ". Lash tinting on its own is " +
          requirePrice("Lash & Tinting", "Lash Tinting") +
          ", usually added to another appointment.",
      },
      {
        question: "How long does a lash lift take?",
        answer:
          "Plan for roughly 45 to 75 minutes. Most of that is processing time with your eyes closed, so it is a quiet appointment rather than an active one.",
      },
      {
        question: "Is a lash lift better than extensions?",
        answer:
          "It depends on what you want. A lift enhances the lashes you have and needs no upkeep between appointments. Extensions add length and volume you do not naturally have, but require regular fills. If your lashes are a decent length and simply grow straight, a lift usually gives the bigger visible change for less maintenance.",
      },
      {
        question: "Can I wear mascara after a lash lift?",
        answer:
          "You can, though many people find they stop bothering, which is usually the point. If you have had a tint as well, the lashes are already dark from root to tip.",
      },
      {
        question: "Do I need to do anything before my appointment?",
        answer:
          "Arrive with clean lashes and no eye makeup if possible, since anything left on has to be removed before the treatment can start. Contact lenses need to come out, so bring your case and glasses.",
      },
      {
        question: "How often do I need to come back?",
        answer:
          "The lift fades gradually as treated lashes shed and new ones grow in, so there is no hard expiry. Most clients rebook when the curl starts looking uneven rather than waiting for it to disappear entirely.",
      },
    ],
    ctaHeading: "Book a lash lift and tint in Mississauga",
    ctaBody:
      "Message Honey Bloom Beauty on WhatsApp, call, or send an enquiry to ask about availability. If you are not sure whether a lift or a tint is the better fit for your lashes, say so in your message and it can be talked through before you book.",
    images: imgs(
      "lashLiftInProgress",
      "browShapingTweezers",
      "facialWarmTowel",
      "threadingInProgress"
    ),
    related: [],
    entities: ["lash lift and tint", "lash lift", "lash tinting"],
    formSourceId: "service-lash-lift-and-tint-mississauga",
  },

  // -------------------------------------------------------------------------
  {
    slug: "eyebrow-threading-mississauga",
    family: "service",
    serviceSlug: "eyebrow-threading-mississauga",
    pathname: "/services/eyebrow-threading-mississauga",
    title: "Eyebrow Threading in Mississauga from $10 | Honey Bloom Beauty",
    metaDescription:
      "Eyebrow threading in Mississauga from $10, full face $35. Precise cotton-thread hair removal for brows, lip, chin and cheeks. Published prices, no packages.",
    h1: "Eyebrow Threading in Mississauga",
    navLabel: "Eyebrow Threading",
    intro:
      "Threading removes hair with a twisted cotton thread rolled across the skin, catching hairs in the twist and lifting them out at the root. Nothing is applied to the skin — no wax, no heat, no adhesive — which is why it stays workable for people who react to waxing or who use retinoids and acids that make skin too fragile to wax. Brow threading at Honey Bloom Beauty is " +
      requirePrice("Threading", "Threading") +
      ", and a full face is " +
      requirePrice("Threading", "Full Face") +
      ".",
    sections: [
      {
        heading: "Why threading gives a cleaner brow line",
        body:
          "Wax removes everything it touches. A thread can be worked along a single row of hairs, which is what makes it possible to take a brow down gradually and check the shape as it emerges rather than committing to a stencil first. That matters most on the parts of the brow that are easy to overdo — the front, where too much removal leaves a gap that takes months to grow back, and the arch, where a millimetre changes where the peak sits. It also means fine, pale hairs that a wax strip would skip get caught, so the finished edge looks sharper up close.",
      },
      {
        heading: "Threading on the rest of the face",
        body:
          "The same technique works anywhere the hair is fine and the area is small enough to control. Upper lip is " +
          requirePrice("Threading", "Upper Lips") +
          " and forehead is the same at " +
          requirePrice("Threading", "Forehead") +
          ". Chin or neck is " +
          requirePrice("Threading", "Chin / Neck") +
          " and cheeks are " +
          requirePrice("Threading", "Cheeks") +
          ". Sideburns are " +
          requirePrice("Threading", "Sideburns") +
          ". Booking areas individually adds up quickly, so a full face at " +
          requirePrice("Threading", "Full Face") +
          " is the more economical option once you are having three or four areas done in the same visit.",
      },
      {
        heading: "What it feels like and how to make it easier",
        body:
          "Threading is quick and sharp rather than a single pull. Most of the sensation is in the first pass over an area; it settles after that. The skin goes pink and usually calms within an hour or two. You will be asked to hold the skin taut at the brow or eyelid with your own fingers — that tension is what stops the thread from dragging, so following those instructions genuinely makes the appointment more comfortable. If you are sensitive, avoid booking in the few days before your period, when skin tends to be more reactive.",
      },
      {
        heading: "Regrowth and how often to rebook",
        body:
          "Because the hair comes out at the root rather than being cut, regrowth comes back soft and fine rather than blunt. Most people are ready for a brow tidy every two to four weeks depending on how fast their hair grows and how defined they like the shape kept. Coming in on a regular rhythm makes each appointment shorter and the shape easier to hold, because the technician is maintaining a line rather than rebuilding one. If you are growing a brow out to change the shape, say so at the start — the plan is different from routine maintenance.",
      },
      {
        heading: "Threading, tinting and lamination together",
        body:
          "Threading defines the outline; tinting and lamination change how the brow reads inside that outline. Brow tinting at " +
          requirePrice("Lash & Tinting", "Eyebrows Tinting") +
          " darkens the fine hairs that already exist so a sparse-looking brow fills in visually. Lamination with tinting at " +
          requirePrice("Lash & Tinting", "Eyebrows Lamination & Tinting") +
          " sets the hairs in a brushed-up direction, which suits brows that grow flat or in conflicting directions. All three are often done in one visit, with threading first so the shape is settled before anything is set or coloured.",
      },
    ],
    benefits: [
      {
        icon: "Scissors",
        title: "Nothing applied to the skin",
        description:
          "No wax, heat or adhesive, which keeps it usable for reactive skin and for people using retinoids or acids.",
      },
      {
        icon: "CheckCircle2",
        title: "Row-by-row control",
        description:
          "Hair can be removed a line at a time, so the shape is checked as it develops instead of committed to up front.",
      },
      {
        icon: "Wallet",
        title: "Published per-area prices",
        description:
          "Every area is listed individually from " +
          requirePrice("Threading", "Forehead") +
          ", with a full face at " +
          requirePrice("Threading", "Full Face") +
          ". No packages required.",
      },
      {
        icon: "Clock",
        title: "Quick appointment",
        description:
          "A brow tidy is a short visit, which makes it practical to keep on a two-to-four week rhythm.",
      },
    ],
    priceTable: {
      caption: "Published threading prices at Honey Bloom Beauty",
      rows: priceGroup("Threading"),
    },
    faqs: [
      {
        question: "How much is eyebrow threading in Mississauga?",
        answer:
          "Brow threading at Honey Bloom Beauty is " +
          requirePrice("Threading", "Threading") +
          ". A full face is " +
          requirePrice("Threading", "Full Face") +
          ", and individual areas such as upper lip start at " +
          requirePrice("Threading", "Upper Lips") +
          ".",
      },
      {
        question: "Does threading hurt more than waxing?",
        answer:
          "People report it differently. Threading is a series of quick sharp sensations rather than one pull, and it is usually strongest on the first pass over an area. Nothing is stuck to the skin and pulled away, which is why some people who find waxing hard prefer it.",
      },
      {
        question: "Can I get threading if I use retinol or acids?",
        answer:
          "Threading is often the option that remains available, because it does not adhere to and lift the surface of the skin the way wax does. Mention any actives you use when you book so the area can be assessed first.",
      },
      {
        question: "How often should I get my eyebrows threaded?",
        answer:
          "Every two to four weeks suits most people, depending on growth rate and how sharply you like the shape kept. Regular visits keep each appointment short.",
      },
      {
        question: "Is it cheaper to book a full face than separate areas?",
        answer:
          "Usually, yes. Once you are having three or four areas in one visit, the full face price of " +
          requirePrice("Threading", "Full Face") +
          " works out lower than adding them up individually.",
      },
      {
        question: "Can threading be combined with brow tinting?",
        answer:
          "Yes, and it is a common pairing. Threading is done first to settle the shape, then tinting at " +
          requirePrice("Lash & Tinting", "Eyebrows Tinting") +
          " darkens the finer hairs inside it.",
      },
    ],
    ctaHeading: "Book eyebrow threading in Mississauga",
    ctaBody:
      "Threading appointments are short, so they are easy to fit in. Message on WhatsApp or call to ask what is available. If you are growing your brows out or want to change the shape rather than maintain it, mention that when you book so enough time is set aside.",
    images: imgs(
      "threadingInProgress",
      "browShapingTweezers",
      "lashLiftInProgress",
      "facialClayMask"
    ),
    related: [],
    entities: ["eyebrow threading", "threading", "brow shaping"],
    formSourceId: "service-eyebrow-threading-mississauga",
  },

  // -------------------------------------------------------------------------
  {
    slug: "facials-mississauga",
    family: "service",
    serviceSlug: "facials-mississauga",
    pathname: "/services/facials-mississauga",
    title: "Facials in Mississauga $85–$120 | Honey Bloom Beauty",
    metaDescription:
      "Facials in Mississauga from $85. Hydrating, anti-aging, acne and HydraFacial treatments plus microdermabrasion and chemical peels, with every price published.",
    h1: "Facials in Mississauga",
    navLabel: "Facials",
    intro:
      "Honey Bloom Beauty runs seven distinct facial treatments rather than one facial with add-ons, which means the appointment you book is chosen for what your skin is actually doing. Prices run from " +
      requirePrice("Facials", "Anti-Aging Facial") +
      " to " +
      requirePrice("Facials", "Hydra Facial") +
      " and every one of them is published below. Treatments generally run 45 to 75 minutes and begin with a conversation about your skin before anything is applied.",
    sections: [
      {
        heading: "Choosing between the treatments",
        body:
          "The hydrating facial at " +
          requirePrice("Facials", "Hydrating Facial") +
          " is the general-maintenance option for skin that feels tight, looks dull or has been through a Mississauga winter. The HydraFacial at " +
          requirePrice("Facials", "Hydra Facial") +
          " is the most involved treatment on the menu and combines cleansing, exfoliation and hydration in one pass. The anti-aging facial at " +
          requirePrice("Facials", "Anti-Aging Facial") +
          " focuses on firmness and texture. The acne facial at " +
          requirePrice("Facials", "Acne Facial") +
          " is built around congestion and breakouts. If you genuinely do not know which applies, book a consultation and let the skin be looked at first.",
      },
      {
        heading: "Resurfacing: microdermabrasion and chemical peels",
        body:
          "Microdermabrasion at " +
          requirePrice("Facials", "Microdermabrasion") +
          " works mechanically, passing a device over the skin to lift off the dull surface layer. A chemical peel at " +
          requirePrice("Facials", "Chemical Peel") +
          " does something similar with a solution instead, loosening the bonds between surface cells so they shed. Both target texture, tone and the general roughness that builds up over time, and both are more assertive than a standard facial. They suit a plan rather than a one-off — which one is appropriate, and at what strength, depends on your skin type and what you are already using at home, so this is a conversation to have at the appointment.",
      },
      {
        heading: "What a facial appointment involves",
        body:
          "Every treatment starts with cleansing and an assessment of what the skin is doing that day, which is not always what it was doing when you booked. From there the steps vary by treatment, but generally move through exfoliation, any extractions if they are appropriate, a mask or serum stage, and a finishing layer of moisturiser and protection. The pace is unhurried; the massage and mask stages are the parts most people remember. You will get straightforward guidance on what to do and avoid for the next few days before you leave.",
      },
      {
        heading: "How often to come and what changes",
        body:
          "Skin turns over on roughly a four-week cycle, which is why monthly is the rhythm most facial plans are built around — it lines the appointment up with the point where the previous one's effect is tapering. A single facial makes skin look and feel better immediately, and that is a real result if you are booking before an event. Lasting change in texture, congestion or tone comes from a series, combined with a home routine that does not undo the work. Nobody at the salon will tell you a facial replaces what you do daily.",
      },
      {
        heading: "Booking a facial in Mississauga",
        body:
          "The studio is at 50 Sussex Gate, unit #102 in Mississauga, and appointments are arranged directly by WhatsApp, phone or email. Come with clean skin if you can, though it is not a requirement — makeup gets removed as the first step regardless. Tell the technician about any actives you are using, recent sun exposure, or a reaction you have had before, because all three change what is appropriate on the day. If you are booking for an event, leave a clear gap beforehand rather than scheduling it for the same week.",
      },
    ],
    benefits: [
      {
        icon: "Droplets",
        title: "Seven distinct treatments",
        description:
          "Hydrating, anti-aging, acne, HydraFacial, microdermabrasion, chemical peel and general face treatment — not one facial with upsells.",
      },
      {
        icon: "Wallet",
        title: "Every price published",
        description:
          "From " +
          requirePrice("Facials", "Anti-Aging Facial") +
          " to " +
          requirePrice("Facials", "Hydra Facial") +
          ", listed openly so you know the cost before you arrive.",
      },
      {
        icon: "Info",
        title: "Assessed on the day",
        description:
          "Skin is looked at before anything is applied, because what it needs today is not always what it needed when you booked.",
      },
      {
        icon: "Clock",
        title: "45 to 75 minutes",
        description:
          "Long enough for the treatment to be done properly rather than compressed into a lunch break.",
      },
    ],
    priceTable: {
      caption: "Published facial prices at Honey Bloom Beauty",
      rows: priceGroup("Facials"),
    },
    faqs: [
      {
        question: "How much is a facial in Mississauga?",
        answer:
          "At Honey Bloom Beauty facials run from " +
          requirePrice("Facials", "Anti-Aging Facial") +
          " for the anti-aging treatment up to " +
          requirePrice("Facials", "Hydra Facial") +
          " for the HydraFacial. Hydrating, acne and microdermabrasion treatments are " +
          requirePrice("Facials", "Hydrating Facial") +
          ".",
      },
      {
        question: "Which facial should I book?",
        answer:
          "If your skin feels tight or looks dull, start with the hydrating facial. For congestion and breakouts, the acne facial. For texture and firmness, anti-aging or microdermabrasion. If you are unsure, book a consultation so your skin can be assessed before a treatment is chosen.",
      },
      {
        question: "What is the difference between microdermabrasion and a chemical peel?",
        answer:
          "Microdermabrasion resurfaces mechanically with a device passed over the skin. A chemical peel uses a solution to loosen surface cells so they shed. Both address texture and tone; which suits you depends on your skin type and what you use at home.",
      },
      {
        question: "How often should I get a facial?",
        answer:
          "Monthly suits most people, because it matches roughly how long skin takes to turn over. One facial gives an immediate improvement; changing texture or congestion takes a series.",
      },
      {
        question: "Can I get a facial before a wedding or event?",
        answer:
          "Yes, but leave a gap rather than booking it for the same week, especially for resurfacing treatments. Mention the date when you book so the timing and treatment can be planned around it.",
      },
      {
        question: "Do I need to prepare for a facial?",
        answer:
          "Arrive with clean skin if convenient, though makeup is removed as the first step anyway. Do tell the technician about any retinoids or acids you use, recent sun exposure, or past reactions, as these all affect what is appropriate.",
      },
    ],
    ctaHeading: "Book a facial in Mississauga",
    ctaBody:
      "Message Honey Bloom Beauty on WhatsApp, call, or send an enquiry describing what your skin has been doing lately. If you would rather have it looked at before committing to a particular treatment, ask for a consultation and start there.",
    images: imgs(
      "facialWarmTowel",
      "facialClayMask",
      "browShapingTweezers",
      "lashLiftInProgress"
    ),
    related: [],
    // "hydrafacial" belongs to its own dedicated service page — the overview
    // page should not outrank the specific one for the specific term.
    entities: ["facials", "chemical peel", "microdermabrasion", "acne facial"],
    formSourceId: "service-facials-mississauga",
  },

  // -------------------------------------------------------------------------
  {
    slug: "bridal-henna-mississauga",
    family: "service",
    serviceSlug: "bridal-henna-mississauga",
    pathname: "/services/bridal-henna-mississauga",
    title: "Bridal Henna & Mehndi in Mississauga | Honey Bloom Beauty",
    metaDescription:
      "Bridal henna in Mississauga from $350, party henna from $15. Detailed mehndi for weddings, mehndi nights and events, booked by consultation at Honey Bloom Beauty.",
    h1: "Bridal Henna and Mehndi in Mississauga",
    navLabel: "Bridal Henna",
    intro:
      "Bridal mehndi is the one beauty booking in a wedding that cannot be rushed and cannot be redone the next morning. Honey Bloom Beauty takes bridal henna by consultation, starting at " +
      requirePrice("Henna", "Bridal Henna") +
      ", with party and guest henna from " +
      requirePrice("Henna", "Party Henna") +
      ". Because coverage, intricacy and the number of hands vary so much between bookings, the final quote is confirmed once the design and timing are agreed rather than guessed from a price list.",
    sections: [
      {
        heading: "Why bridal henna is quoted by consultation",
        body:
          "The difference between a bridal booking and a guest design is not a small upgrade — it is hours of work. A bridal set typically runs up both hands and forearms and often the feet, with dense detail, and takes a long sitting to complete. Two brides asking for what sounds like the same thing can want very different amounts of coverage: one wants elbow-length with heavy fill, another wants a lighter design that stops at the wrist. Quoting from a menu would mean either overcharging the second bride or rushing the first. The starting figure of " +
          requirePrice("Henna", "Bridal Henna") +
          " reflects a full bridal sitting, and the specifics are confirmed with you.",
      },
      {
        heading: "Timing your henna around the wedding",
        body:
          "Henna is not finished when the artist stops drawing. The paste sits on the skin for hours, and once it comes off the stain continues to darken over the following day or two before it reaches its true colour. Booking mehndi for the morning of the wedding means wearing the darkest possible stain on the day you least want to be sitting still, and risking a lighter colour in the photographs. The traditional mehndi night placement — a day or two before the main event — exists because it works. Bring your actual schedule to the consultation and the sitting can be placed around it.",
      },
      {
        heading: "Party, guest and event henna",
        body:
          "Not every henna booking is bridal. Party henna starts at " +
          requirePrice("Henna", "Party Henna") +
          " and covers the designs guests want at a mehndi night, Eid, Diwali, a birthday or a school event — smaller motifs on the back of the hand, a bracelet band, a simple trail along one finger. These are much quicker than bridal work and priced accordingly, scaling with size and detail. If you are organising an event and want several people done, raise it when you enquire so the time can be blocked out properly rather than squeezed between other appointments.",
      },
      {
        heading: "Getting the darkest stain",
        body:
          "How dark your henna goes depends more on what happens after the appointment than during it. Leave the paste on as long as you comfortably can — longer contact means a deeper stain. Scrape it off rather than washing it off, and keep water away from the area for as long as possible afterwards, which means planning around showers and dishes. Warmth helps the colour develop. Palms and the tops of hands stain darkest because the skin is thickest there; forearms come out lighter, which is normal and not a sign anything went wrong.",
      },
      {
        heading: "Booking bridal henna in Mississauga",
        body:
          "Bridal dates get taken early, particularly through wedding season, so enquire well ahead rather than a few weeks out. Message Honey Bloom Beauty on WhatsApp, call, or email with your wedding date, the events you need covered, and roughly how much coverage you have in mind. Reference photos help more than descriptions — if you have saved designs you like, send them. The studio is at 50 Sussex Gate, unit #102 in Mississauga.",
      },
    ],
    benefits: [
      {
        icon: "Brush",
        title: "Bridal work quoted properly",
        description:
          "Coverage and detail are agreed at consultation from " +
          requirePrice("Henna", "Bridal Henna") +
          " rather than compressed into a single menu price.",
      },
      {
        icon: "CalendarClock",
        title: "Planned around your schedule",
        description:
          "The sitting is placed so the stain reaches full colour for the events that matter, not the morning of.",
      },
      {
        icon: "Sparkles",
        title: "Guest and party designs too",
        description:
          "Smaller event designs from " +
          requirePrice("Henna", "Party Henna") +
          " for mehndi nights, Eid, Diwali and birthdays.",
      },
      {
        icon: "MessageCircle",
        title: "Design agreed in advance",
        description:
          "Send reference photos when you enquire so the style is settled before the day rather than decided in the chair.",
      },
    ],
    priceTable: {
      caption: "Published henna prices at Honey Bloom Beauty",
      rows: priceGroup("Henna"),
    },
    faqs: [
      {
        question: "How much is bridal henna in Mississauga?",
        answer:
          "Bridal henna at Honey Bloom Beauty starts at " +
          requirePrice("Henna", "Bridal Henna") +
          ". The final quote is confirmed at consultation because coverage and intricacy vary considerably between bookings. Party and guest henna starts at " +
          requirePrice("Henna", "Party Henna") +
          ".",
      },
      {
        question: "How far in advance should I book bridal mehndi?",
        answer:
          "As early as you can, especially in wedding season. Bridal dates are taken well ahead, and booking early also leaves room to plan the sitting around your other events.",
      },
      {
        question: "When should the henna be applied before the wedding?",
        answer:
          "A day or two before the main event usually works best. The stain keeps darkening for a day or so after the paste comes off, so applying it on the morning itself risks a lighter colour in photographs and means sitting still on your busiest day.",
      },
      {
        question: "How do I get a darker henna stain?",
        answer:
          "Leave the paste on as long as you comfortably can, scrape it off rather than washing it, keep water off the area afterwards, and stay warm. Palms and the backs of hands always stain darker than forearms.",
      },
      {
        question: "Can you do henna for guests at a mehndi night?",
        answer:
          "Yes. Party henna starts at " +
          requirePrice("Henna", "Party Henna") +
          " and scales with size and detail. Mention how many people you expect when you enquire so time can be set aside properly.",
      },
      {
        question: "Do you do henna for Eid, Diwali and birthdays?",
        answer:
          "Yes. Smaller occasion designs are booked the same way as party henna and are much quicker than bridal work.",
      },
    ],
    ctaHeading: "Enquire about bridal henna in Mississauga",
    ctaBody:
      "Send your wedding date, the events you need covered, and any reference designs you have saved. Bridal dates fill early in the season, so it is worth starting the conversation before the rest of the planning is finalised.",
    images: imgs(
      "bridalHennaArms",
      "hennaConeApplication",
      "bridalMakeupApplication",
      "bridalMakeupFinished"
    ),
    related: [],
    entities: ["bridal henna", "mehndi", "party henna", "henna"],
    formSourceId: "service-bridal-henna-mississauga",
  },

  // -------------------------------------------------------------------------
  {
    slug: "bridal-makeup-mississauga",
    family: "service",
    serviceSlug: "bridal-makeup-mississauga",
    pathname: "/services/bridal-makeup-mississauga",
    title: "Bridal & Event Makeup in Mississauga | Honey Bloom Beauty",
    metaDescription:
      "Bridal and event makeup in Mississauga at Honey Bloom Beauty. Long-wearing, photograph-ready application for weddings, receptions and parties, 60–90 minutes.",
    h1: "Bridal and Event Makeup in Mississauga",
    navLabel: "Bridal & Event Makeup",
    intro:
      "Event makeup has to survive a long day, close-up photography and whatever the weather does, all at once. Honey Bloom Beauty applies bridal and event makeup as a 60 to 90 minute appointment, built around your features and the look you want rather than a single house style. Because bridal bookings vary so much by number of looks, timings and location, pricing is confirmed when you enquire with your date and requirements.",
    sections: [
      {
        heading: "Makeup that holds up in photographs",
        body:
          "Camera flash behaves differently from daylight. Products heavy in certain light-reflecting particles can look flawless in the mirror and then read as a pale cast across the face in flash photography, which is the single most common way wedding makeup goes wrong. Longevity matters just as much: a look applied at eight in the morning has to still be intact for evening photographs, through a ceremony, a meal and a great deal of hugging. Both concerns shape which products go where, and neither is something you can assess in a mirror on the day.",
      },
      {
        heading: "Bridal, party and event looks",
        body:
          "A bride generally wants something more considered and longer-wearing than a guest attending the same wedding, and the appointment reflects that. Party and event makeup — a reception, a birthday, an engagement, a photoshoot — takes the same approach to wear and photography but is usually a shorter appointment with less structural work underneath. South Asian bridal looks in particular have their own conventions around eye definition and depth that hold up against heavily embellished outfits and jewellery, and those are worth talking through rather than assuming.",
      },
      {
        heading: "Planning the timeline",
        body:
          "Makeup does not sit alone in a wedding morning; it sits between hair, dressing and the photographer's arrival, and it is the thing that gets compressed when something else runs late. Give the enquiry your actual schedule — ceremony time, when photographs start, whether you are changing looks between ceremony and reception — so the appointment can be placed with a realistic buffer. If several people need makeup, that changes the plan substantially and needs to be raised early rather than mentioned the week before.",
      },
      {
        heading: "Booking alongside brows, lashes and henna",
        body:
          "Event makeup rarely happens in isolation. Brow shaping, a lash lift at " +
          requirePrice("Lash & Tinting", "Lash Lift & Tinting") +
          " and a facial in the weeks beforehand all change what the makeup has to do on the day — lifted, tinted lashes reduce how much eye work is needed, and skin that has been prepared takes base products better. Bridal henna is also booked through the same studio, which makes it easier to sequence everything sensibly. The rule for all of it is to leave a gap: nothing new should be tried for the first time in the same week as the event.",
      },
      {
        heading: "Enquiring about bridal makeup in Mississauga",
        body:
          "Message Honey Bloom Beauty on WhatsApp, call, or send an enquiry with your date, the type of event, how many people need makeup, and any reference images of looks you like. Photographs communicate far more than adjectives here — 'natural' and 'glam' mean very different things to different people. The studio is at 50 Sussex Gate, unit #102 in Mississauga, and dates through wedding season are taken well ahead.",
      },
    ],
    benefits: [
      {
        icon: "Sparkles",
        title: "Built for photography",
        description:
          "Product choices account for how flash behaves, so the look reads correctly in photographs and not just in the mirror.",
      },
      {
        icon: "Clock",
        title: "60 to 90 minutes",
        description:
          "Enough time to build a look that lasts a full event rather than one applied against the clock.",
      },
      {
        icon: "Heart",
        title: "Your features, not a house style",
        description:
          "The look is planned around what you want and what suits you, with reference images welcome.",
      },
      {
        icon: "CalendarClock",
        title: "Sequenced with your other bookings",
        description:
          "Brows, lashes, facials and henna can be planned in the right order and with the right gaps before the day.",
      },
    ],
    faqs: [
      {
        question: "How much is bridal makeup in Mississauga?",
        answer:
          "Bridal pricing is confirmed when you enquire, because it depends on the number of looks, how many people need makeup, and the timings involved. Send your date and requirements and you will get a specific quote rather than an estimate.",
      },
      {
        question: "How long does bridal makeup take?",
        answer:
          "Plan for 60 to 90 minutes for the application itself. Where it sits in the morning matters as much as the duration, so share your full schedule when you book.",
      },
      {
        question: "Do you do makeup for guests as well as the bride?",
        answer:
          "Yes, event and party makeup is available for guests, birthdays, engagements and photoshoots. Mention how many people need makeup when you enquire so the timing can be planned properly.",
      },
      {
        question: "Should I get a lash lift before my wedding?",
        answer:
          "Many people do. A lash lift with tint at " +
          requirePrice("Lash & Tinting", "Lash Lift & Tinting") +
          " means less eye makeup is needed on the day. Book it a week or two ahead rather than the same week, so there is time to see the result.",
      },
      {
        question: "Can you do South Asian bridal makeup?",
        answer:
          "Yes. These looks have their own conventions around eye depth and definition so they hold up against embellished outfits and jewellery. Send reference images when you enquire so the style is agreed in advance.",
      },
      {
        question: "How far ahead should I book?",
        answer:
          "As early as possible, particularly for dates in wedding season. Booking early also leaves room to sequence brows, lashes, facials and henna sensibly before the event.",
      },
    ],
    ctaHeading: "Enquire about bridal or event makeup",
    ctaBody:
      "Send your date, the type of event, how many people need makeup, and a few reference images of looks you like. Wedding-season dates are taken well ahead, so it is worth asking early even if the details are not final.",
    images: imgs(
      "bridalMakeupApplication",
      "bridalMakeupFinished",
      "bridalHennaArms",
      "lashLiftInProgress"
    ),
    related: [],
    entities: ["bridal makeup", "event makeup", "party makeup"],
    formSourceId: "service-bridal-makeup-mississauga",
    // Bridal & event makeup is the ONLY service on /services with no published
    // price — menuGroups has no makeup group at all. Every competitor that
    // ranks for these terms publishes pricing, and this whole page family is
    // built on price transparency, so shipping the one page that dodges the
    // question would undercut the rest. The gate catches this automatically via
    // the missing-price-table rule; holding it here makes the reason explicit.
    blockedBy: [
      "No published price for bridal or event makeup. Need at least a starting " +
        "figure or an honest 'from $X' range from the client before this can ship.",
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "waxing-mississauga",
    family: "service",
    serviceSlug: "waxing-mississauga",
    pathname: "/services/waxing-mississauga",
    title: "Waxing in Mississauga | Full Body $120 | Honey Bloom Beauty",
    metaDescription:
      "Waxing in Mississauga with every price published: full body $120, full legs $35, Brazilian $45, underarms $15. Nufree soy-based option also available.",
    h1: "Waxing in Mississauga",
    navLabel: "Waxing",
    intro:
      "Honey Bloom Beauty runs two separate hair removal systems, and the difference between them is the first thing worth understanding. Regular waxing covers everything from eyebrows at " +
      requirePrice("Regular Waxing", "Eyebrows") +
      " to a full body at " +
      requirePrice("Regular Waxing", "Regular Full Body Wax") +
      ". Nufree is a soy-based alternative priced separately and aimed at skin that reacts badly to traditional wax. Every price in both systems is published rather than quoted on arrival.",
    sections: [
      {
        heading: "What regular waxing covers",
        body:
          "The standard menu is priced by area so you only pay for what you book. Full legs are " +
          requirePrice("Regular Waxing", "Full Legs") +
          " and full arms are " +
          requirePrice("Regular Waxing", "Full Arms") +
          ". Underarms, one of the quickest and most frequently repeated appointments, are " +
          requirePrice("Regular Waxing", "Underarms") +
          ". A Brazilian is " +
          requirePrice("Regular Waxing", "Brazilian") +
          " and a back is " +
          requirePrice("Regular Waxing", "Back") +
          ". Facial areas are covered too, with eyebrows at " +
          requirePrice("Regular Waxing", "Eyebrows") +
          " and a full face at " +
          requirePrice("Regular Waxing", "Full Face") +
          ". Booking a full body at " +
          requirePrice("Regular Waxing", "Regular Full Body Wax") +
          " costs less than assembling the same areas individually.",
      },
      {
        heading: "When the Nufree system is the better choice",
        body:
          "Nufree is a soy-based, antimicrobial hair removal system rather than a traditional wax. It is designed not to adhere to the skin itself, which is the property that matters if you have had waxing appointments that left you red and irritated for a day afterwards — that reaction usually comes from the wax gripping and lifting the skin surface along with the hair. It costs more across the board: a Brazilian is " +
          requirePrice("Nufree Waxing", "Brazilian") +
          " against " +
          requirePrice("Regular Waxing", "Brazilian") +
          " for regular, and full legs are " +
          requirePrice("Nufree Waxing", "Full Legs") +
          " against " +
          requirePrice("Regular Waxing", "Full Legs") +
          ". Whether that premium is worth it depends entirely on how your skin has behaved in the past.",
      },
      {
        heading: "Getting the hair length right",
        body:
          "This is the single most common reason an appointment does not go well. Hair needs enough length for the wax to grip — roughly a quarter of an inch, about two to three weeks of growth for most people. Shaving between appointments resets that clock and is the usual cause of patchy results, because shaved hair grows back at different rates and only some of it is long enough on the day. Resist the urge to tidy up beforehand. If the hair is genuinely too long it can be trimmed at the appointment, which is a much smaller problem than it being too short.",
      },
      {
        heading: "Before and after your appointment",
        body:
          "Exfoliate gently a day or two before, not immediately before, to clear the way for the hair without leaving the skin sensitised. Avoid heavy oils or lotions on the day. Afterwards, skin is more vulnerable than usual: leave hot tubs, saunas, swimming pools and direct sun for a day or so, and skip heavy exercise straight after a Brazilian. Regular gentle exfoliation between appointments is the main defence against ingrown hairs. Waxing on a consistent rhythm also tends to make each appointment easier, because the growth cycle gradually synchronises.",
      },
      {
        heading: "Booking waxing in Mississauga",
        body:
          "Appointments are arranged directly by WhatsApp, phone or email at the studio at 50 Sussex Gate, unit #102 in Mississauga. When you book, say which areas you want and whether you would like the regular or the Nufree system so the right amount of time is set aside — a full body appointment is a very different block of time from underarms. If you have reacted badly to waxing before, mention it, since that is exactly the situation the Nufree option exists for.",
      },
    ],
    benefits: [
      {
        icon: "Wallet",
        title: "Every area priced openly",
        description:
          "From eyebrows at " +
          requirePrice("Regular Waxing", "Eyebrows") +
          " to full body at " +
          requirePrice("Regular Waxing", "Regular Full Body Wax") +
          ", published rather than quoted on arrival.",
      },
      {
        icon: "Leaf",
        title: "Soy-based option for reactive skin",
        description:
          "The Nufree system is available across the same areas for skin that traditional wax leaves irritated.",
      },
      {
        icon: "CheckCircle2",
        title: "Full body costs less than the parts",
        description:
          "Booking the full body wax works out lower than assembling the same areas individually.",
      },
      {
        icon: "ShieldCheck",
        title: "Told what to do beforehand",
        description:
          "Straightforward guidance on hair length and preparation, which is what actually determines the result.",
      },
    ],
    priceTable: {
      caption: "Published regular waxing prices at Honey Bloom Beauty",
      rows: priceGroup("Regular Waxing"),
    },
    faqs: [
      {
        question: "How much is a Brazilian wax in Mississauga?",
        answer:
          "A Brazilian at Honey Bloom Beauty is " +
          requirePrice("Regular Waxing", "Brazilian") +
          " with regular wax, or " +
          requirePrice("Nufree Waxing", "Brazilian") +
          " using the soy-based Nufree system.",
      },
      {
        question: "How long does my hair need to be for waxing?",
        answer:
          "Roughly a quarter of an inch, which is about two to three weeks of growth for most people. Shaving between appointments is the most common cause of patchy results, so avoid tidying up beforehand.",
      },
      {
        question: "What is the difference between regular waxing and Nufree?",
        answer:
          "Nufree is a soy-based antimicrobial system designed not to adhere to the skin itself, which is why it suits people who find traditional wax leaves them red and irritated. It costs more — for example " +
          requirePrice("Nufree Waxing", "Full Legs") +
          " for full legs against " +
          requirePrice("Regular Waxing", "Full Legs") +
          ".",
      },
      {
        question: "How much is a full body wax?",
        answer:
          "A regular full body wax is " +
          requirePrice("Regular Waxing", "Regular Full Body Wax") +
          ", which is less than booking the same areas separately. The Nufree full body is " +
          requirePrice("Nufree Waxing", "Nufree Full Body Wax") +
          ".",
      },
      {
        question: "What should I avoid after waxing?",
        answer:
          "Give hot tubs, saunas, swimming and direct sun a day or so, and skip heavy exercise immediately after a Brazilian. Gentle regular exfoliation between appointments is the best defence against ingrown hairs.",
      },
      {
        question: "How often should I book waxing appointments?",
        answer:
          "Every three to four weeks suits most people. A consistent rhythm gradually synchronises the growth cycle, which tends to make each appointment easier over time.",
      },
    ],
    ctaHeading: "Book a waxing appointment in Mississauga",
    ctaBody:
      "Message on WhatsApp or call with the areas you want and whether you would prefer the regular or Nufree system, so the right amount of time is set aside. If waxing has irritated your skin before, say so — that is exactly what the soy-based option is there for.",
    images: imgs(
      "legWaxingAmberWax",
      "armWaxingAmberWax",
      "facialWarmTowel",
      "threadingInProgress"
    ),
    related: [],
    // "brazilian wax" belongs to the dedicated Brazilian page below — one
    // destination per phrase, enforced by the gate's duplicate-entity rule.
    entities: ["waxing", "full body wax", "leg waxing"],
    formSourceId: "service-waxing-mississauga",
  },

  // -------------------------------------------------------------------------
  {
    slug: "microshading-ombre-brows-mississauga",
    family: "service",
    serviceSlug: "microshading-ombre-brows-mississauga",
    pathname: "/services/microshading-ombre-brows-mississauga",
    title: "Microshading & Ombre Brows in Mississauga $300 | Honey Bloom Beauty",
    metaDescription:
      "Microshading, powder and ombre brows in Mississauga, $300, or $400 with the touch-up included. Consultation required. Published pricing at Honey Bloom Beauty.",
    h1: "Microshading and Ombre Brows in Mississauga",
    navLabel: "Microshading & Ombre Brows",
    intro:
      "Microshading builds a brow out of thousands of tiny pigment dots rather than drawn-on lines, so the finished result reads like soft brow powder that does not come off. It is a machine technique, which is what separates it from microblading and its bladed hair strokes. At Honey Bloom Beauty microshading, powder brows and ombre brows are all " +
      requirePrice("Permanent Make-Up", "Micro Shading") +
      ", or " +
      requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
      " with the touch-up session included. A consultation is required before any pigment work begins.",
    sections: [
      {
        heading: "How the shading technique actually works",
        body:
          "A digital machine drives a fine needle grouping that deposits pigment into the upper layers of the skin in a stippled pattern, dot by dot, gradually building density. Because the artist controls how tightly those dots are packed, the brow can be faded almost to nothing at the front and built up toward the tail. Nothing is cut. That matters for people with oily skin, where microblading's fine incised lines tend to blur as they heal because the skin pushes pigment outward — stippled shading holds its shape far more predictably on skin that produces a lot of oil.",
      },
      {
        heading: "Microshading, powder brows and ombre brows",
        body:
          "These three names get used as though they are separate services, and studios sometimes price them differently. In practice they describe how the same stippled shading is distributed. Powder brows carry a fairly even density from front to tail, like a brow filled in evenly with powder. Ombre brows deliberately grade from a soft, light front to a defined tail. Microshading is the umbrella term for the technique itself. Honey Bloom prices all three identically at " +
          requirePrice("Permanent Make-Up", "Powder Brows") +
          " precisely because the work involved is the same — the difference is the finish you ask for at the consultation.",
      },
      {
        heading: "Why the consultation comes first",
        body:
          "Brow mapping is the part of this that determines whether you like the outcome, and it happens before any pigment is opened. Your face is measured to place the front, arch and tail in proportion, the shape is drawn on and adjusted while you look at it, and the pigment tone is matched against your hair and skin. You should expect to see and approve a drawn outline before anything permanent starts. This is also the point to raise anything about your skin or medication that might affect the work. Honey Bloom requires this consultation rather than treating it as an optional extra.",
      },
      {
        heading: "Two sessions, not one",
        body:
          "The first appointment lays the foundation. How much of that pigment your skin actually keeps varies from person to person, and brows commonly heal lighter or slightly patchy in places — that is normal and expected, not a mistake. The touch-up session corrects density, adjusts tone if the healed colour has shifted, and refines the shape now that the first pass has settled. Booked on its own a touch-up is " +
          requirePrice("Permanent Make-Up", "Touch Up") +
          ", so the package at " +
          requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
          " is the more sensible way to budget. Treat the two sessions as one process.",
      },
      {
        heading: "Booking permanent brows in Mississauga",
        body:
          "The studio is at 50 Sussex Gate, unit #102 in Mississauga. Because a consultation is required first, the opening step is a conversation rather than a booking — message on WhatsApp, call, or send an enquiry describing the brow you have in mind and any previous permanent makeup you have had, since existing pigment changes what is possible. If you are working toward a wedding or a specific date, say so early: this is a two-session process spread over time and it cannot be compressed into the week before an event.",
      },
    ],
    benefits: [
      {
        icon: "Sparkles",
        title: "Machine shading, not blades",
        description:
          "Pigment is stippled in rather than cut, which holds its shape more predictably on oily skin than incised hair strokes.",
      },
      {
        icon: "Wallet",
        title: "One price for all three finishes",
        description:
          "Microshading, powder and ombre brows are all " +
          requirePrice("Permanent Make-Up", "Powder Brows") +
          ", because the technique is the same.",
      },
      {
        icon: "MessageCircle",
        title: "Shape approved before pigment",
        description:
          "Brow mapping is drawn on and adjusted while you watch, and you approve the outline before anything permanent starts.",
      },
      {
        icon: "CalendarClock",
        title: "Touch-up priced in",
        description:
          "The package at " +
          requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
          " covers both sessions rather than quoting a headline that excludes the second.",
      },
    ],
    priceTable: {
      caption: "Published permanent make-up prices at Honey Bloom Beauty",
      rows: priceGroup("Permanent Make-Up"),
    },
    faqs: [
      {
        question: "How much is microshading in Mississauga?",
        answer:
          "Microshading at Honey Bloom Beauty is " +
          requirePrice("Permanent Make-Up", "Micro Shading") +
          ", or " +
          requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
          " booked as a package including the touch-up session. A touch-up on its own is " +
          requirePrice("Permanent Make-Up", "Touch Up") +
          ".",
      },
      {
        question: "What is the difference between microshading and microblading?",
        answer:
          "Microshading uses a machine to stipple pigment in tiny dots, producing a soft powdered finish. Microblading uses a hand-held blade to cut fine lines that mimic individual hairs. They look different and heal differently — shading tends to hold its shape better on oily skin, where bladed lines can blur.",
      },
      {
        question: "Are powder brows and ombre brows different services?",
        answer:
          "They are variations of the same stippled technique. Powder brows keep a fairly even density throughout; ombre brows grade from a light front to a defined tail. Honey Bloom prices both at " +
          requirePrice("Permanent Make-Up", "Ombre Brows") +
          ".",
      },
      {
        question: "Do I need a consultation first?",
        answer:
          "Yes, it is required rather than optional. Brow shape is mapped to your face and drawn on for your approval, and pigment tone is matched to your hair and skin, before any permanent work begins.",
      },
      {
        question: "Why do I need a second appointment?",
        answer:
          "How much pigment your skin retains varies, and brows commonly heal lighter or slightly uneven in places. The touch-up corrects density, adjusts tone and refines the shape once the first pass has settled. It is part of the process, not a correction of a mistake.",
      },
      {
        question: "Can I book microshading right before a wedding?",
        answer:
          "It is not advisable. This is a two-session process spread over time and brows need to heal and settle between them. If you have a date in mind, raise it at the consultation so the sessions can be planned with enough room.",
      },
    ],
    ctaHeading: "Book a permanent brow consultation",
    ctaBody:
      "Because a consultation is required before any pigment work, the first step is a conversation. Message on WhatsApp or call to arrange one, and mention any previous permanent makeup — existing pigment affects what can be done.",
    images: imgs(
      "browShapingTweezers",
      "threadingInProgress",
      "lashLiftInProgress",
      "facialClayMask"
    ),
    related: [],
    entities: ["microshading", "ombre brows", "powder brows", "permanent make-up"],
    formSourceId: "service-microshading-ombre-brows-mississauga",
  },

  // -------------------------------------------------------------------------
  {
    slug: "brow-lamination-and-tint-mississauga",
    family: "service",
    serviceSlug: "brow-lamination-and-tint-mississauga",
    pathname: "/services/brow-lamination-and-tint-mississauga",
    title: "Brow Lamination & Tint in Mississauga $85 | Honey Bloom Beauty",
    metaDescription:
      "Brow lamination with tinting in Mississauga, $85. Sets unruly or flat-growing brows into a fuller brushed-up shape for weeks. No pigment, no needles.",
    h1: "Brow Lamination and Tint in Mississauga",
    navLabel: "Brow Lamination & Tint",
    intro:
      "Brow lamination is a perm for your eyebrows. A softening solution relaxes the bond inside each hair so it can be brushed into a new direction, then a setting solution locks it there. Brows that grew flat, sideways or in three arguing directions sit upward and stay put. Combined with a tint at " +
      requirePrice("Lash & Tinting", "Eyebrows Lamination & Tinting") +
      ", it is the most visible change you can make to a brow without pigment or needles.",
    sections: [
      {
        heading: "What lamination fixes that shaping cannot",
        body:
          "Threading and waxing remove hair. They cannot change the direction the remaining hair grows, and direction is often the real problem. A brow can be perfectly shaped and still look sparse because the hairs lie flat against the skin and reveal the gaps underneath, or look messy because a section at the front grows straight down. Lamination redirects that growth upward and outward, which covers gaps by fanning hair across them and gives the brow visible height. The effect is fullness created from hair you already have rather than from a pencil.",
      },
      {
        heading: "Who it suits particularly well",
        body:
          "It is most dramatic on brows with decent hair that misbehaves — thick, coarse or unruly brows that never sit the same way twice, and brows with a flat growth pattern that reads as thin from the front. It also helps brows with a gap or a sparse patch, because brushed-up hair covers ground that flat hair does not. If your brows are genuinely very sparse, with little hair to redirect, lamination has less to work with and permanent makeup is the more direct answer. A tint is usually worth adding, since setting the hair upward exposes finer pale hairs that darken well.",
      },
      {
        heading: "How long it lasts and how to look after it",
        body:
          "The set holds for several weeks and softens gradually as the treated hairs grow out and are replaced, so it fades rather than stopping. Keep the brows dry and avoid steam for the first day while the set stabilises, and brush them into shape daily with a spoolie — that habit is what keeps the result looking deliberate. Lamination is a chemical process on hair that is already fine, so it should not be repeated more often than needed; over-processing leaves brows dry and frizzy. Spacing appointments sensibly rather than rebooking at the first sign of softening matters here.",
      },
      {
        heading: "Lamination, tinting and threading together",
        body:
          "These three do different jobs and work best in sequence. Threading at " +
          requirePrice("Threading", "Threading") +
          " sets the outline. Lamination changes the direction and volume inside it. Tinting darkens the hair so the whole shape reads more strongly, and brow tinting alone is " +
          requirePrice("Lash & Tinting", "Eyebrows Tinting") +
          ". Booked together, the shaping is generally done first so the artist can see the true outline, with the chemical work following. The lamination-and-tint combination at " +
          requirePrice("Lash & Tinting", "Eyebrows Lamination & Tinting") +
          " is the same price as a lash lift and tint, and the two are frequently booked in one visit.",
      },
      {
        heading: "Booking brow lamination in Mississauga",
        body:
          "Appointments are arranged directly by WhatsApp, phone or email at the studio at 50 Sussex Gate, unit #102 in Mississauga. Come with clean brows and no makeup on them if you can. Mention any recent brow treatments, particularly previous lamination, since hair that has been processed recently needs assessing before it is processed again. If you are unsure whether lamination or permanent makeup is the better route for your brows, ask — the answer depends mostly on how much hair there is to work with.",
      },
    ],
    benefits: [
      {
        icon: "Brush",
        title: "Redirects growth, not just shape",
        description:
          "Threading removes hair; lamination changes the direction the remaining hair sits, which is often the real problem.",
      },
      {
        icon: "Sparkles",
        title: "Fullness from your own hair",
        description:
          "Brushed-up hairs fan across gaps, so brows look denser without pencil, pigment or needles.",
      },
      {
        icon: "Wallet",
        title: "Lamination and tint together",
        description:
          "Priced as one service at " +
          requirePrice("Lash & Tinting", "Eyebrows Lamination & Tinting") +
          " rather than billed as two separate treatments.",
      },
      {
        icon: "Clock",
        title: "Low daily upkeep",
        description:
          "A brush through with a spoolie each morning is the whole routine while the set lasts.",
      },
    ],
    priceTable: {
      caption: "Published lash and brow tinting prices at Honey Bloom Beauty",
      rows: priceGroup("Lash & Tinting"),
    },
    faqs: [
      {
        question: "How much is brow lamination in Mississauga?",
        answer:
          "Brow lamination with tinting at Honey Bloom Beauty is " +
          requirePrice("Lash & Tinting", "Eyebrows Lamination & Tinting") +
          ". Brow tinting on its own is " +
          requirePrice("Lash & Tinting", "Eyebrows Tinting") +
          ".",
      },
      {
        question: "What does brow lamination actually do?",
        answer:
          "It relaxes the bond inside each brow hair so it can be brushed into a new direction, then sets it there. Flat or unruly brows sit upward and hold that shape for weeks, which makes them look fuller and neater.",
      },
      {
        question: "Is brow lamination the same as microblading?",
        answer:
          "No. Lamination works on the hair you already have and involves no pigment and no needles. Microblading and microshading deposit pigment into the skin. Lamination fades out over weeks; permanent makeup lasts far longer.",
      },
      {
        question: "How long does brow lamination last?",
        answer:
          "Several weeks, fading gradually as treated hairs grow out and are replaced. It softens rather than stopping abruptly.",
      },
      {
        question: "Will lamination work on very sparse brows?",
        answer:
          "It has less to work with. Lamination redirects existing hair, so brows with little hair see a smaller change. If yours are very sparse, permanent brow makeup is usually the more direct answer.",
      },
      {
        question: "Can I have lamination and threading in the same appointment?",
        answer:
          "Yes, and it is a common pairing. Shaping is generally done first so the outline is clear, with the lamination and tint following.",
      },
    ],
    ctaHeading: "Book brow lamination in Mississauga",
    ctaBody:
      "Message on WhatsApp or call to check availability. If you have had lamination recently, mention it when you book — recently processed hair needs assessing before it is treated again.",
    images: imgs(
      "browShapingTweezers",
      "threadingInProgress",
      "lashLiftInProgress",
      "facialWarmTowel"
    ),
    related: [],
    entities: ["brow lamination", "eyebrow lamination", "brow tinting"],
    formSourceId: "service-brow-lamination-and-tint-mississauga",
  },

  // -------------------------------------------------------------------------
  {
    slug: "brazilian-waxing-mississauga",
    family: "service",
    serviceSlug: "brazilian-waxing-mississauga",
    pathname: "/services/brazilian-waxing-mississauga",
    title: "Brazilian Wax in Mississauga $45 | Honey Bloom Beauty",
    metaDescription:
      "Brazilian wax in Mississauga, $45 regular or $55 with the soy-based Nufree system for sensitive skin. Private room, published pricing, straight answers.",
    h1: "Brazilian Wax in Mississauga",
    navLabel: "Brazilian Wax",
    intro:
      "A Brazilian is the appointment people are most likely to put off booking, usually because they do not know what to expect and would rather not ask. Honey Bloom Beauty charges " +
      requirePrice("Regular Waxing", "Brazilian") +
      " with regular wax, or " +
      requirePrice("Nufree Waxing", "Brazilian") +
      " with the soy-based Nufree system for skin that reacts. This page covers what actually happens, so the first appointment is not a surprise.",
    sections: [
      {
        heading: "What the appointment involves",
        body:
          "You are shown to a private room and left alone to undress from the waist down; a towel is provided. The technician talks you through positions as you go, and you will be asked to help by holding the skin taut in places, which genuinely reduces the discomfort. Wax is applied in small sections and removed quickly rather than in large strips. Hair at the front is generally the easiest; the more sensitive areas are dealt with in short passes. Talking through what you want removed happens at the start, not silently mid-appointment.",
      },
      {
        heading: "Managing the discomfort honestly",
        body:
          "It hurts, and anyone claiming otherwise is selling something. What is true is that the first appointment is the worst one, and it gets substantially easier with regular visits as the hair grows back finer and the follicles loosen their grip. Timing helps: skin is more sensitive in the few days before a period, so booking a week or so afterwards is noticeably more comfortable. An over-the-counter painkiller taken half an hour beforehand is a reasonable step. Avoid caffeine right before, which tends to heighten sensitivity.",
      },
      {
        heading: "Hair length and preparation",
        body:
          "This is where most first appointments go wrong. Hair needs roughly a quarter of an inch of growth — about two to three weeks — for the wax to grip properly. Shaving to tidy up beforehand is the single most common mistake and guarantees a patchy result, because shaved hair regrows at uneven rates and only some of it will be long enough on the day. Exfoliate gently a couple of days before, not on the day itself, and arrive clean with no oils, lotions or heavy creams applied. If hair is too long it can be trimmed at the appointment, which is a far smaller problem than it being too short.",
      },
      {
        heading: "Regular wax or Nufree for this area",
        body:
          "The skin here is thinner and more reactive than on legs or arms, which is why it is the area where the choice of system matters most. Regular wax at " +
          requirePrice("Regular Waxing", "Brazilian") +
          " is fine for most people. The Nufree system at " +
          requirePrice("Nufree Waxing", "Brazilian") +
          " is soy-based, applied at a lower temperature, and designed not to bond to the skin surface — which is what tends to cause the lingering redness and soreness some people get. The ten dollar difference is small enough that it is worth choosing Nufree if you have reacted badly before, or if this is your first Brazilian and you are nervous.",
      },
      {
        heading: "Aftercare that prevents problems",
        body:
          "For the first day or two the skin is more vulnerable than usual. Skip hot tubs, saunas, swimming pools, sunbeds and heavy exercise — friction and heat are what turn a normal appointment into irritation. Wear loose cotton rather than tight synthetic fabric for the rest of the day. From a few days afterwards, gentle regular exfoliation is the main defence against ingrown hairs, and it matters more here than anywhere else. Booking every three to four weeks keeps the growth cycle synchronised, which makes each subsequent appointment quicker and more comfortable.",
      },
    ],
    benefits: [
      {
        icon: "ShieldCheck",
        title: "Private room, clear communication",
        description:
          "What is being removed is agreed at the start, and the technician talks you through each step rather than working in silence.",
      },
      {
        icon: "Leaf",
        title: "Soy-based option for reactive skin",
        description:
          "Nufree at " +
          requirePrice("Nufree Waxing", "Brazilian") +
          " is applied at lower heat and does not bond to the skin surface.",
      },
      {
        icon: "Wallet",
        title: "Published price, no add-ons",
        description:
          requirePrice("Regular Waxing", "Brazilian") +
          " regular, quoted openly rather than adjusted once you are on the table.",
      },
      {
        icon: "Info",
        title: "Told what actually helps",
        description:
          "Straight guidance on hair length, timing around your cycle, and aftercare — the things that decide how it goes.",
      },
    ],
    priceTable: {
      caption: "Brazilian and related waxing prices, both systems",
      rows: [
        {
          label: "Brazilian — regular wax",
          price: requirePrice("Regular Waxing", "Brazilian"),
        },
        {
          label: "Brazilian — Nufree soy-based",
          price: requirePrice("Nufree Waxing", "Brazilian"),
          note: "Lower heat, does not bond to the skin surface",
        },
        { label: "Underarms — regular", price: requirePrice("Regular Waxing", "Underarms") },
        { label: "Underarms — Nufree", price: requirePrice("Nufree Waxing", "Underarms") },
        { label: "Full legs — regular", price: requirePrice("Regular Waxing", "Full Legs") },
        {
          label: "Full body — regular",
          price: requirePrice("Regular Waxing", "Regular Full Body Wax"),
        },
      ],
    },
    faqs: [
      {
        question: "How much is a Brazilian wax in Mississauga?",
        answer:
          requirePrice("Regular Waxing", "Brazilian") +
          " with regular wax at Honey Bloom Beauty, or " +
          requirePrice("Nufree Waxing", "Brazilian") +
          " using the soy-based Nufree system.",
      },
      {
        question: "How long does my hair need to be?",
        answer:
          "About a quarter of an inch, roughly two to three weeks of growth. Do not shave beforehand to tidy up — it is the most common reason a first appointment produces a patchy result.",
      },
      {
        question: "Does a Brazilian wax hurt?",
        answer:
          "Yes, particularly the first time. It gets noticeably easier with regular appointments as hair grows back finer. Booking a week or so after your period rather than just before makes a real difference, since skin is more sensitive then.",
      },
      {
        question: "Should I choose regular wax or Nufree?",
        answer:
          "The skin in this area is thin and reactive, so it is where the choice matters most. If you have finished previous waxing appointments red and sore, or this is your first Brazilian, the Nufree system at " +
          requirePrice("Nufree Waxing", "Brazilian") +
          " is worth the small premium.",
      },
      {
        question: "What should I avoid afterwards?",
        answer:
          "For a day or two, skip hot tubs, saunas, swimming, sunbeds and heavy exercise, and wear loose cotton. Heat and friction are what turn a normal appointment into irritation.",
      },
      {
        question: "How do I prevent ingrown hairs?",
        answer:
          "Gentle regular exfoliation starting a few days after your appointment, and keeping to a consistent waxing rhythm rather than letting growth cycles scatter.",
      },
    ],
    ctaHeading: "Book a Brazilian wax in Mississauga",
    ctaBody:
      "If it is your first time, say so when you message — the appointment is paced differently and you will get the preparation advice up front. Mention whether you would prefer the regular or Nufree system, or ask which suits your skin.",
    images: imgs(
      "legWaxingAmberWax",
      "armWaxingAmberWax",
      "facialWarmTowel",
      "browShapingTweezers"
    ),
    related: [],
    entities: ["brazilian wax", "brazilian waxing", "bikini wax"],
    formSourceId: "service-brazilian-waxing-mississauga",
  },

  // -------------------------------------------------------------------------
  {
    slug: "hydrafacial-mississauga",
    family: "service",
    serviceSlug: "hydrafacial-mississauga",
    pathname: "/services/hydrafacial-mississauga",
    title: "HydraFacial in Mississauga $120 | Honey Bloom Beauty",
    metaDescription:
      "HydraFacial in Mississauga, $120. Cleansing, exfoliation, extraction and hydration in one treatment, with no downtime. Published pricing at Honey Bloom Beauty.",
    h1: "HydraFacial in Mississauga",
    navLabel: "HydraFacial",
    intro:
      "The HydraFacial is the most involved treatment on the Honey Bloom Beauty facial menu at " +
      requirePrice("Facials", "Hydra Facial") +
      ", and the one people book when they want a visible difference the same day rather than over a course. It combines the stages that are usually separate treatments — cleansing, exfoliation, extraction and hydration — into a single sequence, and it leaves no visible peeling or downtime afterwards.",
    sections: [
      {
        heading: "Why it is the treatment people book before an event",
        body:
          "Most resurfacing treatments trade downtime for results: a stronger peel gives more change and leaves you flaking for several days. The HydraFacial is popular precisely because it sidesteps that trade. Skin looks brighter and feels smoother when you leave rather than a week later, without redness that needs hiding. That makes it the sensible choice ahead of a wedding, a shoot or an event, where a chemical peel would be a gamble on timing. It is also why it works as a one-off in a way that a course-based treatment does not.",
      },
      {
        heading: "What happens in the treatment",
        body:
          "Skin is cleansed and a gentle exfoliation lifts the dull surface layer. A solution is then used to loosen the contents of congested pores so debris can be drawn out — this is the extraction stage, and it is considerably more comfortable than manual squeezing, which is what most people associate with the word. Hydrating and conditioning serums are worked in afterwards while the pores are still clear, which is the part that produces the immediate plumpness. The whole appointment sits in the 45 to 75 minute range.",
      },
      {
        heading: "How it compares with the other facials on the menu",
        body:
          "The hydrating facial at " +
          requirePrice("Facials", "Hydrating Facial") +
          " concentrates on moisture and comfort without the extraction stage, and is the better-value regular option if congestion is not your issue. Microdermabrasion at " +
          requirePrice("Facials", "Microdermabrasion") +
          " resurfaces mechanically and targets texture specifically. A chemical peel at " +
          requirePrice("Facials", "Chemical Peel") +
          " goes deeper but asks for recovery time. The HydraFacial at " +
          requirePrice("Facials", "Hydra Facial") +
          " covers more ground in one appointment than any of them, which is what the price reflects.",
      },
      {
        heading: "Who gets the most from it",
        body:
          "It suits congested skin with visible blockage around the nose and chin, dull skin that has stopped reflecting light, and dehydrated skin that feels tight regardless of how much moisturiser goes on. It is a reasonable option for people who have never had a facial and are wary of anything aggressive, because nothing is scraped or peeled. If your primary concern is active inflamed acne rather than congestion, the acne facial at " +
          requirePrice("Facials", "Acne Facial") +
          " is built for that instead — mention what your skin is doing when you book and it can be matched properly.",
      },
      {
        heading: "How long the results hold",
        body:
          "The immediate brightness and plumpness are at their best for the first several days and then settle gradually. That is not the treatment wearing off so much as skin returning to its normal hydration and turnover, which is why the timing advice for events is to book a few days ahead rather than weeks. Congestion cleared during extraction does not simply reappear, but pores refill at whatever rate your skin produces oil, so someone with very oily skin will notice congestion returning sooner than someone who does not. Booking on a roughly monthly rhythm keeps skin at the better end of that cycle rather than letting it drift back each time.",
      },
      {
        heading: "Booking a HydraFacial in Mississauga",
        body:
          "The studio is at 50 Sussex Gate, unit #102 in Mississauga, and appointments are arranged by WhatsApp, phone or email. Tell the technician about any retinoids or acids you use and any recent sun exposure, since both change what is appropriate on the day. If you are booking ahead of an event, you can schedule this one closer to the date than a peel — but still leave a few days rather than the morning of, because skin behaves unpredictably even with gentle treatments.",
      },
    ],
    benefits: [
      {
        icon: "Droplets",
        title: "Four stages in one appointment",
        description:
          "Cleansing, exfoliation, extraction and hydration run as a single sequence rather than separate bookings.",
      },
      {
        icon: "Clock",
        title: "No downtime",
        description:
          "No visible peeling or lingering redness, which is why it works close to an event where a peel would not.",
      },
      {
        icon: "Sparkles",
        title: "Same-day difference",
        description:
          "Skin looks brighter and feels smoother when you leave, rather than after a course of appointments.",
      },
      {
        icon: "Info",
        title: "Comfortable extractions",
        description:
          "Congestion is loosened and drawn out rather than manually squeezed, which is what most people expect and dread.",
      },
    ],
    priceTable: {
      caption: "Published facial prices at Honey Bloom Beauty",
      rows: priceGroup("Facials"),
    },
    faqs: [
      {
        question: "How much is a HydraFacial in Mississauga?",
        answer:
          "A HydraFacial at Honey Bloom Beauty is " +
          requirePrice("Facials", "Hydra Facial") +
          ", the most involved treatment on the facial menu.",
      },
      {
        question: "Is there any downtime after a HydraFacial?",
        answer:
          "No visible peeling or lingering redness, which is the main reason it is chosen ahead of events where a chemical peel would be too much of a gamble on timing.",
      },
      {
        question: "How is it different from a regular hydrating facial?",
        answer:
          "The hydrating facial at " +
          requirePrice("Facials", "Hydrating Facial") +
          " focuses on moisture and comfort without the extraction stage. The HydraFacial adds exfoliation and extraction, covering more ground in one appointment.",
      },
      {
        question: "Does it hurt?",
        answer:
          "It should not. The extraction stage loosens congestion so it can be drawn out rather than squeezed manually, which is considerably more comfortable than what most people picture.",
      },
      {
        question: "Can I have one before a wedding?",
        answer:
          "Yes, and it is a common reason to book it. Leave a few days rather than scheduling it for the morning of, since skin can behave unpredictably even with gentle treatments.",
      },
      {
        question: "How often should I have one?",
        answer:
          "Monthly suits most people, matching roughly how long skin takes to turn over. Unlike course-based treatments it also works perfectly well as a one-off before an occasion.",
      },
    ],
    ctaHeading: "Book a HydraFacial in Mississauga",
    ctaBody:
      "Message on WhatsApp or call, and describe what your skin has been doing lately so the treatment can be confirmed as the right one. If you are booking around an event, mention the date and the timing can be planned properly.",
    images: imgs(
      "facialWarmTowel",
      "facialClayMask",
      "lashLiftInProgress",
      "browShapingTweezers"
    ),
    related: [],
    entities: ["hydrafacial", "hydra facial"],
    formSourceId: "service-hydrafacial-mississauga",
  },
];
