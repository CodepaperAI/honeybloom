import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/landing/LandingTemplate";
import { getByFamily, getBySlug, getRelatedSummaries, entityLinkMap } from "@/data/landingPages";
import { linkPage } from "@/data/landingPages/linking";
import { siteUrl } from "@/lib/site";

// This route owns <head>; the client template renders no metadata.

export function generateStaticParams() {
  return getByFamily("guide").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getBySlug(slug);
  if (!page || page.family !== "guide") return {};
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: page.pathname },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `${siteUrl}${page.pathname}`,
      type: "article",
      images: page.images[0] ? [`${siteUrl}${page.images[0].src}`] : undefined,
    },
  };
}

export default async function GuideLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getBySlug(slug);
  if (!page || page.family !== "guide") notFound();

  const linked = linkPage(page, entityLinkMap());
  const related = getRelatedSummaries(page.slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}${page.pathname}#article`,
    headline: page.h1,
    description: page.metaDescription,
    url: `${siteUrl}${page.pathname}`,
    publisher: { "@type": "BeautySalon", "@id": `${siteUrl}/#business` },
    image: page.images[0] ? `${siteUrl}${page.images[0].src}` : undefined,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <LandingTemplate page={page} linked={linked} related={related} />
    </>
  );
}
