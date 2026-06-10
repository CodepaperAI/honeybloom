export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://honeybloombeauty.ca";

export const contact = {
  businessName: "Honey Bloom Beauty",
  owner: "Lead Esthetician & Founder",
  email: "honeybloombeauty9@gmail.com",
  phone: "(437) 771-6094",
  phoneHref: "tel:+14377716094",
  whatsAppHref: "https://wa.me/14377716094",
  address: "50 Sussex Gate, unit #102, Mississauga, ON L5B 3Y5",
  shortAddress: "50 Sussex Gate, unit #102",
  city: "Mississauga",
  region: "ON",
  postalCode: "L5B 3Y5",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

export const stockPhotos = {
  hero: {
    src: "/images/stock-hero-facial.webp",
    alt: "Woman relaxing during a professional facial treatment with a towel wrap",
  },
  brow: {
    src: "/images/micro_shading.jpg",
    alt: "Professional eyebrow microshading and ombre brow styling",
  },
  threading: {
    src: "/images/stock-threading.webp",
    alt: "Professional eyebrow threading service performed with precise detail",
  },
  lashes: {
    src: "/images/lash_lift_new.jpg",
    alt: "Professional lash lift and tint enhancement",
  },
  makeup: {
    src: "/images/makeup_service.jpg",
    alt: "Professional bridal and event makeup application",
  },
  henna: {
    src: "/images/stock-henna-application.webp",
    alt: "Henna design being applied by hand for a detailed beauty service",
  },
  facial: {
    src: "/images/stock-facial-massage.webp",
    alt: "Client receiving a relaxing facial massage in a spa treatment room",
  },
  spa: {
    src: "/images/stock-spa-treatment.webp",
    alt: "Relaxing spa treatment with professional massage care",
  },
};

export const services = [
  {
    title: "Microshading & Ombre Brows",
    text: "Soft powder brow artistry designed around your face shape, natural brow pattern, and preferred finish.",
    icon: "sparkles",
    image: stockPhotos.brow.src,
    imageAlt: stockPhotos.brow.alt,
    bestFor: "Sparse brows, soft definition, daily brow routine reduction",
    time: "Consultation required",
  },
  {
    title: "Lash Lift & Tinting",
    text: "Low-maintenance lash enhancement for lifted, defined lashes without daily curling.",
    icon: "flower",
    image: "/images/lash_lift_purple.jpg",
    imageAlt: "Professional lash lift procedure with protective shield and tinting",
    bestFor: "Natural lashes, no-extension definition, low-maintenance beauty",
    time: "Usually 45-75 minutes",
  },
  {
    title: "Facial Treatments",
    text: "Personalized skincare including hydrating facials, anti-aging care, acne facials, and chemical peels.",
    icon: "heart",
    image: stockPhotos.facial.src,
    imageAlt: stockPhotos.facial.alt,
    bestFor: "Glow maintenance, hydration, texture, acne support",
    time: "Usually 45-75 minutes",
  },
  {
    title: "Nufree Waxing",
    text: "A professional, soy-based, antimicrobial liquid hair removal system that is gentle, clean, and safe for sensitive skin.",
    icon: "check",
    image: "/images/nufree_wax.png",
    imageAlt: "Professional Nufree waxing service",
    bestFor: "Sensitive skin, clean hair removal, long-lasting smoothness",
    time: "Varies by service",
    tag: "Highly Recommended",
    featured: true,
  },
  {
    title: "Waxing, Threading & Henna",
    text: "Precise beauty maintenance for brows, face, body, and custom henna designs.",
    icon: "check",
    image: stockPhotos.threading.src,
    imageAlt: stockPhotos.threading.alt,
    bestFor: "Clean shaping, facial hair removal, event-ready details",
    time: "Varies by service",
  },
  {
    title: "Bridal & Event Makeup",
    text: "Professional makeup application for weddings, parties, and special events, tailored to enhance your features with a flawless, long-lasting finish.",
    icon: "sparkles",
    image: stockPhotos.makeup.src,
    imageAlt: stockPhotos.makeup.alt,
    bestFor: "Weddings, special events, photoshoot-ready glow, party styling",
    time: "Usually 60-90 minutes",
  },
];

export const menuGroups = [
  {
    title: "Permanent Make-Up",
    items: [
      ["Micro Shading", "$300"],
      ["Powder Brows", "$300"],
      ["Ombre Brows", "$300"],
      ["Touch Up", "$200"],
      ["Micro Shading with Touch-Up", "$400"],
    ],
  },
  {
    title: "Facials",
    items: [
      ["Anti-Aging Facial", "$85"],
      ["Hydra Facial", "$120"],
      ["Hydrating Facial", "$90"],
      ["Microdermabrasion", "$90"],
      ["Face Treatment & Up", "$90"],
      ["Acne Facial", "$90"],
      ["Chemical Peel", "$100"],
    ],
  },
  {
    title: "Lash & Tinting",
    items: [
      ["Lash Lift & Tinting", "$85"],
      ["Eyebrows Lamination & Tinting", "$85"],
      ["Eyebrows Tinting", "$10"],
      ["Lash Tinting", "$10"],
    ],
  },
  {
    title: "Threading",
    items: [
      ["Threading", "$10"],
      ["Upper Lips", "$5"],
      ["Chin / Neck", "$6"],
      ["Cheeks", "$6"],
      ["Forehead", "$5"],
      ["Sideburns", "$10"],
      ["Full Face", "$35"],
    ],
  },
  {
    title: "Regular Waxing",
    items: [
      ["Regular Full Body Wax", "$120"],
      ["Full Legs", "$35"],
      ["Full Arms", "$30"],
      ["Underarms", "$15"],
      ["Brazilian", "$45"],
      ["Eyebrows", "$10"],
      ["Full Face", "$40"],
      ["Back", "$35"],
    ],
  },
  {
    title: "Nufree Waxing",
    items: [
      ["Nufree Full Body Wax", "$200"],
      ["Full Legs", "$60"],
      ["Full Arms", "$40"],
      ["Underarms", "$20"],
      ["Brazilian", "$55"],
      ["Eyebrows", "$12"],
      ["Back", "$60"],
    ],
  },
  {
    title: "Henna",
    items: [
      ["Bridal Henna", "$350 & Up"],
      ["Party Henna", "$150 & Up"],
    ],
  },
];


export const bookingSteps = [
  "Choose your brow, lash, facial, waxing, threading, tinting, or henna service.",
  "WhatsApp, call, or email Honey Bloom Beauty to request an appointment time.",
  "Arrive for a personalized consultation before your treatment begins.",
];

export const appointmentNotes = [
  {
    title: "Before your visit",
    text: "Arrive with clean skin around the treatment area when possible. For brows, bring reference photos if you have a preferred shape or finish.",
  },
  {
    title: "Consultation first",
    text: "Brow, facial, tinting, and henna services are matched to your goals, skin type, comfort level, and maintenance routine.",
  },
  {
    title: "Aftercare matters",
    text: "You will receive simple aftercare guidance for your treatment so results settle cleanly and last as intended.",
  },
];

export const faqs = [
  {
    question: "Do I need a consultation before microshading or ombre brows?",
    answer:
      "Yes. A consultation helps confirm your brow goals, skin type, shape preference, and aftercare needs before permanent make-up services.",
  },
  {
    question: "How do I book an appointment?",
    answer: "Appointments can be requested by WhatsApp or phone at (437) 771-6094, or by email at honeybloombeauty9@gmail.com.",
  },
  {
    question: "Which services are available at Honey Bloom Beauty?",
    answer:
      "Services include microshading, ombre brows, lash lifts, facials, waxing, threading, eyebrow tinting, lash tinting, henna, brow shaping, and beauty consultations.",
  },
  {
    question: "Are prices fixed for henna and facial services?",
    answer:
      "Some services vary by design, skin goals, or treatment needs. Bridal henna, basic henna, and select treatments are confirmed during booking or consultation.",
  },
  {
    question: "Where is Honey Bloom Beauty located?",
    answer:
      "We are located at Honey Bloom Beauty, 50 Sussex Gate, unit #102, Mississauga, ON L5B 3Y5. Please call before visiting to confirm appointment availability.",
  },
];

export const promises = [
  {
    title: "Personalized consultations",
    text: "Treatments begin with a conversation about your goals, comfort, and desired finish.",
  },
  {
    title: "Detail-focused results",
    text: "Brows, lashes, skin, and hair removal services are shaped around precision and clean presentation.",
  },
  {
    title: "Welcoming salon care",
    text: "The experience is built around professional service, comfort, and confidence.",
  },
];

export const testimonials = [
  {
    name: "Anika S.",
    service: "Ombre brows",
    text: "The shape looked soft and balanced, not harsh. The consultation made me feel comfortable before starting.",
  },
  {
    name: "Priya M.",
    service: "Lash lift and tint",
    text: "My lashes looked lifted but still natural. It made my morning routine much quicker.",
  },
  {
    name: "Meera K.",
    service: "Hydra facial",
    text: "My skin felt fresh and hydrated after the facial, and the service felt calm from start to finish.",
  },
  {
    name: "Nisha R.",
    service: "Threading and brow shaping",
    text: "Clean shaping, careful threading, and no rushed feeling. I liked how detailed the brow check was.",
  },
  {
    name: "Jasleen P.",
    service: "Basic henna",
    text: "The henna design was neat and elegant for my event. The appointment felt friendly and professional.",
  },
  {
    name: "Sara A.",
    service: "Waxing services",
    text: "Comfortable appointment, clear communication, and a clean finish. I would book again for maintenance.",
  },
];

export const galleryStories = [
  {
    title: "Soft powder brow refresh",
    service: "Microshading",
    image: stockPhotos.brow.src,
    imageAlt: stockPhotos.brow.alt,
    description: "A natural-looking brow finish for a client who wanted fuller shape without a heavy makeup effect.",
  },
  {
    title: "Lifted everyday lashes",
    service: "Lash Lift & Tinting",
    image: stockPhotos.lashes.src,
    imageAlt: stockPhotos.lashes.alt,
    description: "A low-maintenance lash result designed for definition, curl, and a softer daily routine.",
  },
  {
    title: "Gentle soy-based waxing care",
    service: "Nufree Waxing",
    image: "/images/nufree_wax.png",
    imageAlt: "Smooth skin hair removal result using Nufree",
    description: "A gentle hair removal session using the antimicrobial, soy-based Nufree system, ideal for sensitive skin.",
  },
  {
    title: "Event-ready henna details",
    service: "Henna Services",
    image: stockPhotos.henna.src,
    imageAlt: stockPhotos.henna.alt,
    description: "A clean floral-inspired design direction for a client preparing for a special celebration.",
  },
  {
    title: "Hydrated glow facial",
    service: "Facial Treatments",
    image: stockPhotos.facial.src,
    imageAlt: stockPhotos.facial.alt,
    description: "A skin-care appointment focused on hydration, refreshed texture, and a comfortable post-facial glow.",
  },
  {
    title: "Elegant event makeup look",
    service: "Makeup Services",
    image: stockPhotos.makeup.src,
    imageAlt: stockPhotos.makeup.alt,
    description: "A natural yet glamorous makeup style designed for a special event, highlighting glowing skin and defined eyes.",
  },
];


export const pages = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.95 },
  { path: "/gallery", priority: 0.75 },
  { path: "/testimonials", priority: 0.65 },
  { path: "/faqs", priority: 0.75 },
  { path: "/booking", priority: 0.9 },
  { path: "/contact", priority: 0.9 },
];

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteUrl}/#business`,
    name: contact.businessName,
    url: siteUrl,
    image: `${siteUrl}${stockPhotos.hero.src}`,
    description:
      "Professional beauty salon and medical esthetician studio specializing in microshading, ombre brows, lash lifts, facials, waxing, threading, tinting, and henna services.",
    telephone: "+14377716094",
    email: contact.email,
    founder: {
      "@type": "Person",
      name: contact.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.shortAddress,
      addressLocality: contact.city,
      addressRegion: contact.region,
      postalCode: contact.postalCode,
      addressCountry: "CA",
    },
    priceRange: "$$",
    areaServed: ["Mississauga", "Greater Toronto Area"],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.text,
      },
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/faqs#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
