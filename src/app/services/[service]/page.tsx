import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/landing/LandingTemplate";
import {
  getByFamily,
  getServicePage,
  getRelatedSummaries,
  entityLinkMap,
} from "@/data/landingPages";
import { linkPage } from "@/data/landingPages/linking";
import { contact, siteUrl } from "@/lib/site";

// This route owns <head>. The template is a client component and deliberately
// renders no metadata — a client-injected canonical is invisible to crawlers
// that do not execute JS.

export function generateStaticParams() {
  return getByFamily("service").map((p) => ({ service: p.serviceSlug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const page = getServicePage(service);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: page.pathname },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `${siteUrl}${page.pathname}`,
      type: "website",
      images: page.images[0] ? [`${siteUrl}${page.images[0].src}`] : undefined,
    },
  };
}

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const page = getServicePage(service);
  if (!page) notFound();

  // Linking is resolved here, on the server, as one pure pass over the record.
  // Passing finished segments down is what keeps the client render
  // deterministic and free of hydration mismatches.
  const linked = linkPage(page, entityLinkMap());
  const related = getRelatedSummaries(page.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${page.pathname}#service`,
    name: page.h1,
    description: page.metaDescription,
    url: `${siteUrl}${page.pathname}`,
    areaServed: ["Mississauga", "Greater Toronto Area"],
    provider: {
      "@type": "BeautySalon",
      "@id": `${siteUrl}/#business`,
      name: contact.businessName,
      telephone: "+14377716094",
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.shortAddress,
        addressLocality: contact.city,
        addressRegion: contact.region,
        postalCode: contact.postalCode,
        addressCountry: "CA",
      },
    },
    ...(page.priceTable
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: page.priceTable.caption,
            itemListElement: page.priceTable.rows.map((r) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: r.label },
              price: r.price,
              priceCurrency: "CAD",
            })),
          },
        }
      : {}),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}${page.pathname}#faq`,
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <LandingTemplate page={page} linked={linked} related={related} />
    </>
  );
}
