// Guide landing pages.
//
// These target research-stage searches — the comparisons and cost questions
// people type before they are ready to book — and pass link equity into the
// service pages. Same allowed/banned fact rules as services.ts.
//
// The Nufree-vs-regular comparison is the strongest page on the site by a wide
// margin: Honey Bloom publishes a full price list for BOTH systems, so it can
// put a real side-by-side cost table on the page. Competitors that offer only
// one system cannot write this page honestly.

import type { LandingPage } from "./types";
import { imgs } from "./images";
import { requirePrice } from "./facts";
import { COMPETITOR_PRICES } from "./facts";

/** Renders a competitor price as "$280 (Business, Oakville)" for prose use. */
function quoted(business: string, service: string): string {
  const c = COMPETITOR_PRICES.find((p) => p.business === business && p.service === service);
  if (!c) throw new Error(`[guides] No recorded competitor price for ${business} / ${service}`);
  return `${c.price} at ${c.business} in ${c.city}`;
}

export const guidePages: LandingPage[] = [
  // -------------------------------------------------------------------------
  {
    slug: "nufree-vs-regular-waxing",
    family: "guide",
    pathname: "/guides/nufree-vs-regular-waxing",
    title: "Nufree vs Regular Waxing: Cost and Difference | Honey Bloom Beauty",
    metaDescription:
      "Nufree vs traditional waxing compared on cost, comfort and skin reaction, with both full price lists side by side. Brazilian $45 regular vs $55 Nufree.",
    h1: "Nufree vs Regular Waxing: What Actually Differs",
    navLabel: "Nufree vs Regular Waxing",
    intro:
      "Most salons offer one hair removal system and describe it as the best option, which makes an honest comparison hard to find. Honey Bloom Beauty runs both, and publishes prices for both, so the trade-off can be laid out properly. The short version: Nufree costs meaningfully more, and the reason to pay it has nothing to do with how smooth the result is. It is about how your skin reacts.",
    sections: [
      {
        heading: "Nufree is not a wax, and that is the whole point",
        body:
          "Traditional wax works by adhering. It grips the hair, and unavoidably grips the surface of the skin as well, and when the strip comes away both are lifted. For most people that is fine. For some, it is the reason they are pink, tender and blotchy for the rest of the day, and occasionally why they get lifted skin on delicate areas. Nufree is a soy-based botanical liquid that is designed to surround the hair rather than bond to the skin, and it is applied at a lower temperature. The manufacturer is explicit that it is not a wax at all. That distinction sounds like marketing until you have had a bad reaction to wax, at which point it is the only thing that matters.",
      },
      {
        heading: "The cost difference, area by area",
        body:
          "Nufree is more expensive everywhere, and the gap widens on larger areas. A Brazilian is " +
          requirePrice("Regular Waxing", "Brazilian") +
          " regular against " +
          requirePrice("Nufree Waxing", "Brazilian") +
          " Nufree — about a ten dollar difference. Underarms go from " +
          requirePrice("Regular Waxing", "Underarms") +
          " to " +
          requirePrice("Nufree Waxing", "Underarms") +
          ". But full legs jump from " +
          requirePrice("Regular Waxing", "Full Legs") +
          " to " +
          requirePrice("Nufree Waxing", "Full Legs") +
          ", back goes from " +
          requirePrice("Regular Waxing", "Back") +
          " to " +
          requirePrice("Nufree Waxing", "Back") +
          ", and a full body moves from " +
          requirePrice("Regular Waxing", "Regular Full Body Wax") +
          " to " +
          requirePrice("Nufree Waxing", "Nufree Full Body Wax") +
          ". On small areas the premium is minor. On a full body it is substantial.",
      },
      {
        heading: "Which one should you actually book",
        body:
          "If waxing has never caused you a problem, regular wax does the job and the money is better spent elsewhere. If you finish every appointment red and sore for hours, if you have sensitive or reactive skin, or if you are booking a delicate area for the first time and are nervous about it, the Nufree premium buys you something concrete. A reasonable middle path is to use Nufree on the areas where your skin actually reacts — commonly the bikini line, underarms and face — and regular wax on legs and arms where the skin is tougher and the price gap is largest. Nobody is obliged to pick one system for everything.",
      },
      {
        heading: "What does not change between the two",
        body:
          "Both remove hair from the root, so regrowth is soft rather than blunt and the interval before you need to return is similar. Both need the same hair length to work — roughly a quarter of an inch, or two to three weeks of growth — and shaving in between will ruin the result with either system. Both leave skin more vulnerable for a day or so, meaning the same advice about sun, saunas, swimming and heavy exercise applies. Neither prevents ingrown hairs on its own; gentle regular exfoliation between appointments does that. Choosing Nufree does not let you skip the preparation.",
      },
      {
        heading: "Booking either system in Mississauga",
        body:
          "Both are available at the studio at 50 Sussex Gate, unit #102 in Mississauga, across the same areas. When you message, say which system you want, or describe how your skin has reacted to waxing previously and ask for a recommendation — that is a more useful conversation than picking from a menu. If you have never been waxed at all, saying so is worth doing, because the approach for a first appointment differs from routine maintenance.",
      },
    ],
    benefits: [
      {
        icon: "Leaf",
        title: "Soy-based, not wax",
        description:
          "Nufree surrounds the hair instead of bonding to the skin, which is why reactive skin tends to tolerate it better.",
      },
      {
        icon: "Wallet",
        title: "Both price lists published",
        description:
          "Every area is listed for both systems, so the premium is visible before you book rather than after.",
      },
      {
        icon: "CheckCircle2",
        title: "Mix the two",
        description:
          "Use Nufree on areas that react and regular wax where skin is tougher — there is no requirement to pick one.",
      },
      {
        icon: "Info",
        title: "Same preparation either way",
        description:
          "Both need about two to three weeks of growth, and neither is a substitute for exfoliating between visits.",
      },
    ],
    priceTable: {
      caption: "Nufree compared with regular waxing, same areas, published prices",
      rows: [
        {
          label: "Brazilian",
          price: `${requirePrice("Regular Waxing", "Brazilian")} regular / ${requirePrice(
            "Nufree Waxing",
            "Brazilian"
          )} Nufree`,
        },
        {
          label: "Underarms",
          price: `${requirePrice("Regular Waxing", "Underarms")} regular / ${requirePrice(
            "Nufree Waxing",
            "Underarms"
          )} Nufree`,
        },
        {
          label: "Full legs",
          price: `${requirePrice("Regular Waxing", "Full Legs")} regular / ${requirePrice(
            "Nufree Waxing",
            "Full Legs"
          )} Nufree`,
        },
        {
          label: "Full arms",
          price: `${requirePrice("Regular Waxing", "Full Arms")} regular / ${requirePrice(
            "Nufree Waxing",
            "Full Arms"
          )} Nufree`,
        },
        {
          label: "Back",
          price: `${requirePrice("Regular Waxing", "Back")} regular / ${requirePrice(
            "Nufree Waxing",
            "Back"
          )} Nufree`,
        },
        {
          label: "Eyebrows",
          price: `${requirePrice("Regular Waxing", "Eyebrows")} regular / ${requirePrice(
            "Nufree Waxing",
            "Eyebrows"
          )} Nufree`,
        },
        {
          label: "Full body",
          price: `${requirePrice("Regular Waxing", "Regular Full Body Wax")} regular / ${requirePrice(
            "Nufree Waxing",
            "Nufree Full Body Wax"
          )} Nufree`,
        },
      ],
    },
    faqs: [
      {
        question: "Is Nufree actually a wax?",
        answer:
          "No. It is a soy-based botanical liquid applied at a lower temperature, designed to surround the hair rather than adhere to the skin. The manufacturer is explicit that it is not a wax, which is the basis for its claim to suit sensitive skin.",
      },
      {
        question: "How much more does Nufree cost?",
        answer:
          "It varies by area. A Brazilian is " +
          requirePrice("Regular Waxing", "Brazilian") +
          " regular against " +
          requirePrice("Nufree Waxing", "Brazilian") +
          " Nufree, while full legs go from " +
          requirePrice("Regular Waxing", "Full Legs") +
          " to " +
          requirePrice("Nufree Waxing", "Full Legs") +
          ". The premium is small on little areas and much larger on big ones.",
      },
      {
        question: "Is Nufree less painful than waxing?",
        answer:
          "Hair still comes out at the root, so it is not painless. What tends to differ is the aftermath — because it is not lifting the skin surface along with the hair, people who normally finish an appointment red and sore often report far less of that reaction.",
      },
      {
        question: "Can I use Nufree on some areas and regular wax on others?",
        answer:
          "Yes, and it is often the sensible choice. Many people use Nufree where their skin reacts, typically the bikini line, underarms and face, and regular wax on legs and arms where skin is tougher and the price gap is widest.",
      },
      {
        question: "Does Nufree stop ingrown hairs?",
        answer:
          "Not by itself. Ingrowns are managed with gentle regular exfoliation between appointments regardless of which system you choose.",
      },
      {
        question: "Do I still need to grow my hair out for Nufree?",
        answer:
          "Yes, the same as for regular waxing — roughly a quarter of an inch, about two to three weeks of growth. Shaving in between will produce patchy results with either system.",
      },
    ],
    ctaHeading: "Not sure which system suits your skin?",
    ctaBody:
      "Describe how your skin has reacted to waxing in the past and ask for a recommendation rather than picking blind. Both systems are available at the Mississauga studio across the same areas.",
    images: imgs(
      "legWaxingAmberWax",
      "armWaxingAmberWax",
      "threadingInProgress",
      "facialWarmTowel"
    ),
    related: [],
    entities: ["nufree", "nufree waxing", "soy-based hair removal"],
    formSourceId: "guide-nufree-vs-regular-waxing",
  },

  // -------------------------------------------------------------------------
  {
    slug: "permanent-brow-makeup-cost-mississauga",
    family: "guide",
    pathname: "/guides/permanent-brow-makeup-cost-mississauga",
    title: "What Permanent Brow Makeup Costs in Mississauga | Honey Bloom Beauty",
    metaDescription:
      "What microshading, powder and ombre brows cost in Mississauga, with real market prices compared. Honey Bloom is $300, or $400 including the touch-up.",
    h1: "What Permanent Brow Makeup Costs in Mississauga",
    navLabel: "Permanent Brow Makeup Cost",
    intro:
      "Permanent brow pricing is confusing because studios quote different things. Some advertise a headline figure that excludes the touch-up you will almost certainly need; others bundle it. Comparing the headline numbers alone will mislead you. This page sets out what Honey Bloom Beauty charges, what other studios in the area publish, and where the hidden cost usually sits.",
    sections: [
      {
        heading: "The touch-up is the part people miss",
        body:
          "Permanent brow makeup is not a single appointment. Pigment settles unevenly as it heals, and how much of it your skin retains varies from person to person, so a second session is normal rather than a sign something went wrong. At Honey Bloom Beauty the initial work is " +
          requirePrice("Permanent Make-Up", "Micro Shading") +
          " and a touch-up is " +
          requirePrice("Permanent Make-Up", "Touch Up") +
          " if booked separately. Booked together as one package it is " +
          requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
          ", which saves against paying for the two individually. When you compare studios, find out whether their advertised price includes that second session, because a cheaper headline with a separately priced touch-up can easily end up costing more.",
      },
      {
        heading: "What the local market charges",
        body:
          "Prices published by other studios put Honey Bloom in the middle of the Mississauga market rather than at either end. Ombre brows are advertised at " +
          quoted("Xtremities", "Ombre brows") +
          " and " +
          quoted("Alternative Laser Health", "Ombre brows") +
          ", with a microblading and ombre powder combination at " +
          quoted("Alternative Laser Health", "Microblading + ombre powder combination") +
          ". Move west and the figures change considerably: ombre brows are listed at " +
          quoted("Dollface Beauty Bar", "Ombre brows") +
          ". Honey Bloom's " +
          requirePrice("Permanent Make-Up", "Ombre Brows") +
          " sits above the cheapest Mississauga options and well below Oakville pricing. These figures were recorded from public pages in July 2026 and studios do change them, so treat them as a guide rather than a live quote.",
      },
      {
        heading: "Microshading, powder brows and ombre brows are priced the same here",
        body:
          "All three are machine techniques that build up soft pigment in a stippled pattern, as distinct from microblading, which uses a blade to cut individual hair strokes. The names describe variations in gradient and density rather than fundamentally different procedures, which is why Honey Bloom prices micro shading, powder brows and ombre brows identically at " +
          requirePrice("Permanent Make-Up", "Powder Brows") +
          ". If a studio quotes you very different prices for these three, it is worth asking what technical difference justifies the gap.",
      },
      {
        heading: "What the price should include",
        body:
          "A responsible permanent makeup booking involves a consultation before anything is applied — brow shape mapped to your face, colour matched to your hair and skin tone, and a conversation about what you actually want it to look like. Honey Bloom requires a consultation before permanent make-up services rather than treating it as optional, and that requirement is a feature: brows sit on your face for a long time and the mapping stage is what determines whether you like the result. When comparing quotes, check whether consultation and aftercare guidance are included or billed on top.",
      },
      {
        heading: "Budgeting realistically",
        body:
          "The sensible way to budget is to assume the package price rather than the headline. At " +
          requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
          " including the touch-up, spread across the period before it needs refreshing, permanent brows compare reasonably with the running cost of regular threading, tinting and daily brow products — though that comparison depends entirely on how much brow maintenance you currently do. If you barely touch your brows, permanent makeup is a genuine expense rather than a saving, and it should be chosen because you want the result, not because it pays for itself.",
      },
    ],
    benefits: [
      {
        icon: "Wallet",
        title: "Package price published",
        description:
          "Initial work plus touch-up at " +
          requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
          ", so the real total is visible up front.",
      },
      {
        icon: "Info",
        title: "Compared against the market",
        description:
          "Local published prices are cited with sources and dates rather than vague claims about value.",
      },
      {
        icon: "CheckCircle2",
        title: "One price for all three techniques",
        description:
          "Microshading, powder brows and ombre brows are the same price, because they are variations of the same machine method.",
      },
      {
        icon: "MessageCircle",
        title: "Consultation required first",
        description:
          "Shape and colour are mapped before any pigment is applied — that stage decides whether you like the outcome.",
      },
    ],
    priceTable: {
      caption: "Published permanent make-up prices at Honey Bloom Beauty",
      rows: [
        { label: "Micro Shading", price: requirePrice("Permanent Make-Up", "Micro Shading") },
        { label: "Powder Brows", price: requirePrice("Permanent Make-Up", "Powder Brows") },
        { label: "Ombre Brows", price: requirePrice("Permanent Make-Up", "Ombre Brows") },
        {
          label: "Touch Up (booked separately)",
          price: requirePrice("Permanent Make-Up", "Touch Up"),
        },
        {
          label: "Micro Shading with Touch-Up",
          price: requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up"),
          note: "Lower than paying for the initial session and touch-up individually",
        },
      ],
    },
    faqs: [
      {
        question: "How much do ombre brows cost in Mississauga?",
        answer:
          "Honey Bloom Beauty charges " +
          requirePrice("Permanent Make-Up", "Ombre Brows") +
          ". Other studios in the area publish figures including " +
          quoted("Xtremities", "Ombre brows") +
          " and " +
          quoted("Alternative Laser Health", "Ombre brows") +
          ", recorded in July 2026.",
      },
      {
        question: "Is the touch-up included in the price?",
        answer:
          "Not automatically. The initial session is " +
          requirePrice("Permanent Make-Up", "Micro Shading") +
          " and a separate touch-up is " +
          requirePrice("Permanent Make-Up", "Touch Up") +
          ", but booking them together as a package is " +
          requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
          ". Always check whether a quoted price elsewhere includes the second session.",
      },
      {
        question: "Why do microshading, powder brows and ombre brows cost the same?",
        answer:
          "Because they are variations of the same machine-based technique, differing in gradient and density rather than method. Honey Bloom prices all three at " +
          requirePrice("Permanent Make-Up", "Powder Brows") +
          ".",
      },
      {
        question: "Do I need a consultation before booking?",
        answer:
          "Yes. Honey Bloom requires a consultation before permanent make-up services so brow shape can be mapped to your face and colour matched to your hair and skin tone before any pigment is applied.",
      },
      {
        question: "Is permanent brow makeup cheaper than regular brow maintenance?",
        answer:
          "It depends entirely on how much maintenance you currently do. If you thread and tint regularly and use brow products daily, the comparison is closer than it looks. If you barely touch your brows, it is a real expense and should be chosen because you want the result.",
      },
      {
        question: "Are these prices up to date?",
        answer:
          "Honey Bloom's own prices are read directly from its published menu. Competitor figures were recorded from public pages in July 2026 and may have changed since, so use them as a guide rather than a current quote.",
      },
    ],
    ctaHeading: "Ask about permanent brow makeup",
    ctaBody:
      "A consultation is required before permanent make-up, so the first step is a conversation rather than a booking. Message on WhatsApp or call to arrange one and talk through shape, colour and whether the package option suits you.",
    images: imgs(
      "browShapingTweezers",
      "threadingInProgress",
      "lashLiftInProgress",
      "facialClayMask"
    ),
    related: [],
    // The technique terms are owned by the microshading SERVICE page. This
    // guide keeps only the cost-intent phrases, so a reader searching the
    // technique lands on the page that sells it, not the page about pricing.
    // "microblading" is claimed here rather than on a service page because
    // Honey Bloom does not offer it — this guide is where the difference is
    // explained, so mentions of it elsewhere should land on the explanation.
    entities: ["permanent brow makeup", "brow tattoo", "microblading"],
    formSourceId: "guide-permanent-brow-makeup-cost-mississauga",
  },

  // -------------------------------------------------------------------------
  {
    slug: "lash-lift-vs-extensions",
    family: "guide",
    pathname: "/guides/lash-lift-vs-extensions",
    title: "Lash Lift vs Eyelash Extensions: Which to Choose | Honey Bloom Beauty",
    metaDescription:
      "Lash lift or eyelash extensions? Compared honestly on cost over a year, upkeep, damage risk and who each actually suits — including when extensions win.",
    h1: "Lash Lift vs Eyelash Extensions",
    navLabel: "Lash Lift vs Extensions",
    intro:
      "These two treatments get compared as though they are competing versions of the same thing. They are not. One reshapes the lashes you have; the other attaches new ones. That difference decides everything else — the cost over a year, how much upkeep you sign up for, and whether it suits your lashes at all. Honey Bloom Beauty offers the lift and not extensions, so this page is written with that stated plainly rather than pretending otherwise.",
    sections: [
      {
        heading: "What each one actually does",
        body:
          "A lift is a chemical reshaping. Your natural lashes are held against a silicone shield while a solution softens the internal bond in each hair, then a second solution sets them in a lifted curve. Nothing is added. Extensions are the opposite approach: individual synthetic lashes are glued one at a time onto individual natural lashes, adding length and volume you do not have. A full set takes considerably longer to apply than a lift, and the result is limited by how many healthy natural lashes there are to attach to.",
      },
      {
        heading: "The upkeep difference is the real decision",
        body:
          "This is what most people underestimate. A lift needs nothing between appointments — no aftercare products, no avoiding oils, no sleeping position to worry about, nothing to brush. When it fades you decide whether to book again. Extensions need fills every two to three weeks as the natural lashes they are attached to shed, and they come with genuine daily restrictions: no oil-based cleansers or makeup removers near the eyes, careful drying, and no rubbing. Skipping fills does not return you to neutral — it leaves a sparse, uneven set that looks worse than bare lashes.",
      },
      {
        heading: "Cost over a year, not per appointment",
        body:
          "Comparing single prices is misleading because the two have completely different rhythms. A lash lift and tint at Honey Bloom Beauty is " +
          requirePrice("Lash & Tinting", "Lash Lift & Tinting") +
          " and you might book it a handful of times a year as it grows out. Extensions require an initial full set plus a fill roughly every two to three weeks to maintain, which is somewhere between seventeen and twenty-six appointments a year if you keep them continuously. Whatever a fill costs at a given studio, multiply it by that number before comparing. For most people the annual gap is substantial, and it is the number worth calculating rather than the sticker price.",
      },
      {
        heading: "When extensions are genuinely the better answer",
        body:
          "A lift cannot add length. If your lashes are naturally very short, lifting them curls what is there and the change will be modest — extensions are the honest recommendation in that case, and no amount of enthusiasm for lifts changes it. Extensions also win if you want a dramatic, obviously-enhanced look, or a specific engineered shape. The lift wins when your lashes have reasonable length but grow straight out or downward, so they read as short from the front and disappear behind the lid. That is an extremely common lash pattern, and it is the one where a lift produces a change people describe as dramatic.",
      },
      {
        heading: "Damage, and what actually causes it",
        body:
          "Both are safe when done properly and both can cause problems when they are not. With extensions the risk is weight and adhesion: extensions that are too long or too heavy for the natural lash, or several natural lashes glued together, put strain on the follicle and cause premature shedding. With a lift the risk is over-processing — leaving solution on too long, or repeating the treatment before lashes have recovered, which leaves them dry and brittle. In both cases the damage comes from application and frequency rather than from the treatment existing. Spacing appointments sensibly matters more than which one you pick.",
      },
    ],
    benefits: [
      {
        icon: "Clock",
        title: "Lift: no maintenance schedule",
        description:
          "Nothing to avoid, no products to buy, no fills. When it fades you decide whether to rebook.",
      },
      {
        icon: "Wallet",
        title: "Compare annual cost, not per visit",
        description:
          "Extensions need roughly seventeen to twenty-six appointments a year to maintain continuously. A lift needs a handful.",
      },
      {
        icon: "Eye",
        title: "Extensions add length a lift cannot",
        description:
          "If your lashes are genuinely very short, extensions are the honest answer — a lift curls but cannot lengthen.",
      },
      {
        icon: "Info",
        title: "Risk comes from application",
        description:
          "Both are safe done well. Damage comes from weight and glue with extensions, and over-processing with lifts.",
      },
    ],
    faqs: [
      {
        question: "Is a lash lift cheaper than extensions?",
        answer:
          "Over a year, almost always. A lift and tint is " +
          requirePrice("Lash & Tinting", "Lash Lift & Tinting") +
          " and is booked a few times a year. Extensions need a full set plus fills every two to three weeks, so the comparison worth making is annual cost rather than a single appointment.",
      },
      {
        question: "Does Honey Bloom Beauty do lash extensions?",
        answer:
          "No. The menu covers lash lifts and tinting, not extensions. This comparison is here because it is a genuine question people have before booking, and the honest answer sometimes points elsewhere.",
      },
      {
        question: "Will a lash lift make my lashes look longer?",
        answer:
          "It makes them look longer by revealing their full length. Lashes that grow straight out or downward read as short from the front; lifting them shows what was always there. It does not add physical length.",
      },
      {
        question: "Which is more damaging?",
        answer:
          "Neither, when done properly. Extensions cause problems when they are too heavy or when lashes are glued together; lifts cause problems when over-processed or repeated too soon. Application quality and spacing matter more than the choice itself.",
      },
      {
        question: "Can I get a lash lift if I currently have extensions?",
        answer:
          "The extensions need to be fully removed and the natural lashes given time to recover first. Mention that you have had extensions when you enquire so the timing can be advised.",
      },
      {
        question: "How do I know which one suits my lashes?",
        answer:
          "Roughly: if your lashes have decent length but grow straight or downward, a lift will make a large difference. If they are genuinely very short, extensions are the more direct answer. Send a photo when you enquire and you will get a straight opinion.",
      },
    ],
    ctaHeading: "Not sure a lift is right for your lashes?",
    ctaBody:
      "Send a photo of your natural lashes when you message. If a lift will not give you what you are after, you will be told that rather than sold an appointment that disappoints.",
    images: imgs(
      "lashLiftInProgress",
      "lashExtensionsApplication",
      "browShapingTweezers",
      "facialWarmTowel"
    ),
    related: [],
    entities: ["lash extensions", "eyelash extensions"],
    formSourceId: "guide-lash-lift-vs-extensions",
  },

  // -------------------------------------------------------------------------
  {
    slug: "threading-vs-waxing-for-eyebrows",
    family: "guide",
    pathname: "/guides/threading-vs-waxing-for-eyebrows",
    title: "Threading vs Waxing for Eyebrows: Which Is Better | Honey Bloom Beauty",
    metaDescription:
      "Threading or waxing your eyebrows? Compared on precision, skin reaction, retinoid safety, cost and regrowth — with published Mississauga prices for both.",
    h1: "Threading vs Waxing for Eyebrows",
    navLabel: "Threading vs Waxing",
    intro:
      "Both remove hair from the root and both leave a clean brow, so the choice comes down to how much control you want over the shape and how your skin behaves. Honey Bloom Beauty offers both, at " +
      requirePrice("Threading", "Threading") +
      " for threading and " +
      requirePrice("Regular Waxing", "Eyebrows") +
      " for brow waxing, which means there is no commercial reason here to push you toward one.",
    sections: [
      {
        heading: "Precision: the case for threading",
        body:
          "Wax removes everything within the area it covers. Once the strip is down, that hair is going. A thread can be worked along a single row at a time, which means the shape can be built gradually and assessed as it emerges rather than committed to before the first removal. That control matters most in the two places a brow is easiest to ruin: the front, where taking too much leaves a gap that takes months to grow back, and the arch, where a millimetre of difference changes where the peak sits. Threading also catches fine pale hairs that wax strips tend to skip, so the finished edge looks sharper close up.",
      },
      {
        heading: "Speed and coverage: the case for waxing",
        body:
          "Waxing is faster, particularly on larger or denser areas, because it clears a whole section in one movement rather than a row at a time. For someone with thick brows who wants a well-defined shape maintained on a regular schedule — and who already knows the shape works — that speed is a real advantage and the precision argument matters less. Waxing is also generally the better tool once you move beyond brows to the rest of the face and body, which is why the two often get booked together: brows threaded for control, everything else waxed for efficiency.",
      },
      {
        heading: "Skin reaction and when waxing is off the table",
        body:
          "This is the deciding factor for a lot of people. Wax adheres to the skin as well as the hair, and lifting the strip takes a layer of the surface with it. On most skin that is unremarkable. On skin using retinoids, tretinoin, acids or certain acne medications, that surface is already fragile and waxing can lift skin rather than just hair — which is why estheticians ask about actives before waxing a face. Threading touches nothing but the hair, so it usually stays available when waxing is not. If you use any of those products, mention it when you book regardless of which you choose.",
      },
      {
        heading: "Cost and how often you will be back",
        body:
          "The prices are close: threading is " +
          requirePrice("Threading", "Threading") +
          " and brow waxing is " +
          requirePrice("Regular Waxing", "Eyebrows") +
          ", so cost is not really the deciding factor for brows alone. Where it starts to matter is across the face. Threading is priced per area — upper lip at " +
          requirePrice("Threading", "Upper Lips") +
          ", chin or neck at " +
          requirePrice("Threading", "Chin / Neck") +
          " — with a full face at " +
          requirePrice("Threading", "Full Face") +
          ", against " +
          requirePrice("Regular Waxing", "Full Face") +
          " for a waxed full face. Both remove hair at the root, so regrowth is soft rather than blunt either way, and most people are back every two to four weeks with either method.",
      },
      {
        heading: "Choosing, and mixing the two",
        body:
          "There is no obligation to pick one for everything, and plenty of people do not. A common approach is threading for brows and upper lip, where precision and skin sensitivity matter most, and waxing for legs, arms and back, where speed matters and the skin is tougher. If you are growing your brows out or changing the shape rather than maintaining it, threading is the safer choice for that period specifically, because the shape is being rebuilt gradually and you want the ability to stop at any point. Say which you are doing when you book — maintenance and reshaping are different appointments.",
      },
    ],
    benefits: [
      {
        icon: "Scissors",
        title: "Threading controls the shape",
        description:
          "Hair comes out a row at a time, so the brow is assessed as it emerges rather than committed to in one pull.",
      },
      {
        icon: "Clock",
        title: "Waxing is faster on volume",
        description:
          "A whole section clears in one movement, which suits dense brows on a settled shape and larger body areas.",
      },
      {
        icon: "ShieldCheck",
        title: "Threading survives retinoids",
        description:
          "Nothing adheres to the skin, so it usually stays available when actives make waxing the face inadvisable.",
      },
      {
        icon: "Wallet",
        title: "Prices published for both",
        description:
          "Brows are " +
          requirePrice("Threading", "Threading") +
          " threaded and " +
          requirePrice("Regular Waxing", "Eyebrows") +
          " waxed — close enough that cost need not decide it.",
      },
    ],
    priceTable: {
      caption: "Threading compared with waxing, same areas, published prices",
      rows: [
        {
          label: "Eyebrows",
          price: `${requirePrice("Threading", "Threading")} threading / ${requirePrice(
            "Regular Waxing",
            "Eyebrows"
          )} waxing`,
        },
        {
          label: "Full face",
          price: `${requirePrice("Threading", "Full Face")} threading / ${requirePrice(
            "Regular Waxing",
            "Full Face"
          )} waxing`,
        },
        { label: "Upper lip (threading)", price: requirePrice("Threading", "Upper Lips") },
        { label: "Chin or neck (threading)", price: requirePrice("Threading", "Chin / Neck") },
        { label: "Cheeks (threading)", price: requirePrice("Threading", "Cheeks") },
        { label: "Sideburns (threading)", price: requirePrice("Threading", "Sideburns") },
      ],
    },
    faqs: [
      {
        question: "Is threading better than waxing for eyebrows?",
        answer:
          "For shaping precision, generally yes — hair is removed a row at a time so the shape can be checked as it develops. For speed on dense brows with an already-settled shape, waxing has the advantage. Neither is universally better.",
      },
      {
        question: "Which hurts less?",
        answer:
          "People report it differently. Threading is a series of quick sharp sensations; waxing is one stronger pull. Because nothing is stuck to the skin and torn away, some people who find waxing difficult prefer threading.",
      },
      {
        question: "Can I wax my brows if I use retinol?",
        answer:
          "Often not safely. Retinoids, acids and some acne medications thin the skin surface, and wax can lift skin along with hair. Threading is usually the option that remains available. Tell your technician what you use either way.",
      },
      {
        question: "Which is cheaper?",
        answer:
          "For brows they are close — " +
          requirePrice("Threading", "Threading") +
          " threading against " +
          requirePrice("Regular Waxing", "Eyebrows") +
          " waxing. The difference is more noticeable across a full face.",
      },
      {
        question: "Does hair grow back differently?",
        answer:
          "No. Both remove hair from the root, so regrowth comes back soft and tapered rather than blunt. Most people rebook every two to four weeks with either method.",
      },
      {
        question: "Can I use threading for brows and waxing elsewhere?",
        answer:
          "Yes, and many people do exactly that — threading where precision and skin sensitivity matter, waxing on legs, arms and back where speed matters and skin is tougher.",
      },
    ],
    ctaHeading: "Book brow shaping in Mississauga",
    ctaBody:
      "Say whether you are maintaining a shape or changing one when you message — they are different appointments and need different amounts of time. If you use retinoids or acids, mention that too.",
    images: imgs(
      "threadingInProgress",
      "browShapingTweezers",
      "legWaxingAmberWax",
      "lashLiftInProgress"
    ),
    related: [],
    entities: ["brow waxing", "eyebrow waxing"],
    formSourceId: "guide-threading-vs-waxing-for-eyebrows",
  },

  // -------------------------------------------------------------------------
  {
    slug: "bridal-beauty-timeline",
    family: "guide",
    pathname: "/guides/bridal-beauty-timeline",
    title: "Bridal Beauty Timeline: What to Book and When | Honey Bloom Beauty",
    metaDescription:
      "A working bridal beauty timeline for brows, skin, lashes, waxing, henna and makeup — what to book months out, weeks out, and what never to try that week.",
    h1: "Bridal Beauty Timeline: What to Book and When",
    navLabel: "Bridal Beauty Timeline",
    intro:
      "Almost every bridal beauty problem is a timing problem. The treatments themselves are routine; booking them in the wrong order, or too close to the day, is what produces brows that are still settling, skin that is peeling, or henna that has not reached full colour in the photographs. This is a practical sequence working backwards from the wedding, using treatments available at Honey Bloom Beauty in Mississauga.",
    sections: [
      {
        heading: "Six months to three months out: anything permanent",
        body:
          "Permanent brow work belongs here and nowhere later. Microshading or ombre brows at " +
          requirePrice("Permanent Make-Up", "Micro Shading") +
          " is a two-appointment process — the initial session, then a touch-up once the first has healed and settled, with real time between them. Booking that package at " +
          requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
          " several months out means the brows are fully healed, the colour has matured to its true tone, and there is room to adjust anything you are not happy with. Starting permanent brows inside two months leaves no margin at all, and brows that photograph darker than you expected are not fixable in a week.",
      },
      {
        heading: "Three months to one month out: skin, on a course",
        body:
          "If you want a visible change in skin texture or congestion rather than a one-off glow, this is the window, because that change comes from a series rather than a single appointment. Monthly facials through this period line up with how skin turns over. Resurfacing treatments — microdermabrasion at " +
          requirePrice("Facials", "Microdermabrasion") +
          " or a chemical peel at " +
          requirePrice("Facials", "Chemical Peel") +
          " — sit at the earlier end, never the later, because they ask for recovery time and skin can react unpredictably. The firm rule for this whole window: nothing new is trialled after it closes. Any treatment you have not had before should be tested here, with time to recover if it disagrees with you.",
      },
      {
        heading: "Two to three weeks out: lashes and brows settle",
        body:
          "A lash lift and tint at " +
          requirePrice("Lash & Tinting", "Lash Lift & Tinting") +
          " is well placed here. It is at its best a little after application rather than the same day, and having it done now means less eye makeup is needed and no risk of a same-week surprise. Brow lamination and tint at " +
          requirePrice("Lash & Tinting", "Eyebrows Lamination & Tinting") +
          " follows the same logic — the set softens slightly over the first days into something more natural. Waxing also belongs in this window rather than the final week, since skin needs a couple of days to calm and hair needs about two to three weeks of growth beforehand anyway.",
      },
      {
        heading: "The final week: shaping only, nothing new",
        body:
          "This week is for tidying, not transforming. Brow threading at " +
          requirePrice("Threading", "Threading") +
          " two or three days before is ideal — enough time for any pinkness to settle, close enough that the shape is sharp. A hydrating facial at " +
          requirePrice("Facials", "Hydrating Facial") +
          " or a HydraFacial at " +
          requirePrice("Facials", "Hydra Facial") +
          " works a few days out because neither leaves peeling or downtime, unlike a peel. What does not belong here: any first-time treatment, anything resurfacing, and anything permanent. If something has gone wrong earlier in the timeline, the answer is to work around it, not to introduce a new variable now.",
      },
      {
        heading: "Mehndi and the morning itself",
        body:
          "Bridal henna from " +
          requirePrice("Henna", "Bridal Henna") +
          " needs its own placement, because henna is not finished when the artist stops. The paste sits for hours, and the stain keeps darkening for a day or two after it comes off before reaching true colour. That is why the traditional mehndi-night slot a day or two before the main event exists — it works. Applying on the morning itself means a lighter stain in the photographs and hours of sitting still on your busiest day. Makeup is then the only thing left for the morning, and it needs a realistic slot between hair and the photographer rather than whatever time is left over.",
      },
    ],
    benefits: [
      {
        icon: "CalendarClock",
        title: "Permanent work goes first",
        description:
          "Brow pigment is two appointments plus healing, so it belongs months out — never inside the final weeks.",
      },
      {
        icon: "AlertTriangle",
        title: "Nothing new in the last month",
        description:
          "Any treatment you have not had before gets trialled with recovery time, not in the week of the wedding.",
      },
      {
        icon: "Sparkles",
        title: "Lashes and brows two weeks out",
        description:
          "Lifts and lamination look their best a little after application, and it removes same-week risk entirely.",
      },
      {
        icon: "Brush",
        title: "Henna needs a day or two to darken",
        description:
          "The stain deepens after the paste comes off, which is exactly why mehndi night sits before the main event.",
      },
    ],
    faqs: [
      {
        question: "When should I get permanent brows before my wedding?",
        answer:
          "At least three months out, ideally more. It is a two-appointment process with healing time between, and the colour matures over weeks. Booking the package at " +
          requirePrice("Permanent Make-Up", "Micro Shading with Touch-Up") +
          " early leaves room to adjust anything you are not happy with.",
      },
      {
        question: "When should bridal henna be applied?",
        answer:
          "A day or two before the main event. The stain continues darkening after the paste is removed, so applying on the morning itself risks a lighter colour in photographs and means sitting still on your busiest day.",
      },
      {
        question: "How close to the wedding can I have a facial?",
        answer:
          "A hydrating facial or HydraFacial works a few days out because neither leaves peeling or downtime. A chemical peel or microdermabrasion should sit weeks earlier, since both ask for recovery time.",
      },
      {
        question: "When should I get my eyebrows threaded?",
        answer:
          "Two or three days before. That gives any pinkness time to settle while keeping the shape sharp for the day.",
      },
      {
        question: "When should I book a lash lift?",
        answer:
          "Roughly two to three weeks out. It looks its best slightly after application rather than the same day, and it means noticeably less eye makeup is needed.",
      },
      {
        question: "What should I never do in the final week?",
        answer:
          "Try anything for the first time, have any resurfacing treatment, or start anything permanent. If something went wrong earlier, work around it rather than introducing a new variable.",
      },
    ],
    ctaHeading: "Plan your bridal beauty timeline",
    ctaBody:
      "Send your wedding date and the events around it, and the appointments can be sequenced backwards from there. Bridal henna and wedding-season dates get taken early, so it is worth starting before the rest of the planning is settled.",
    images: imgs(
      "bridalHennaArms",
      "bridalMakeupFinished",
      "bridalMakeupApplication",
      "hennaConeApplication"
    ),
    related: [],
    entities: ["bridal beauty timeline", "wedding beauty"],
    formSourceId: "guide-bridal-beauty-timeline",
  },
];
