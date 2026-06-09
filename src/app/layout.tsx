import type { Metadata, Viewport } from "next";
import { Abhaya_Libre, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { businessJsonLd, siteUrl, stockPhotos } from "@/lib/site";
import "./globals.css";

const display = Abhaya_Libre({
  subsets: ["latin"],
  variable: "--next-font-display",
  display: "swap",
  weight: "700",
});

const body = Montserrat({
  subsets: ["latin"],
  variable: "--next-font-body",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Honey Bloom Beauty",
  title: {
    default: "Honey Bloom Beauty | Beauty Salon & Medical Esthetician in Mississauga",
    template: "%s | Honey Bloom Beauty",
  },
  description:
    "Honey Bloom Beauty is a professional beauty salon and medical esthetician studio specializing in microshading, ombre brows, lash lifts, facials, waxing, threading, tinting, and henna services.",
  keywords: [
    "Beauty Salon",
    "Medical Esthetician",
    "Microshading",
    "Ombre Brows",
    "Lash Lift",
    "Facial Treatments",
    "Waxing Services",
    "Threading Services",
    "Eyebrow Tinting",
    "Lash Tinting",
    "Henna Services",
    "Brow Studio",
    "Beauty Spa",
    "Skincare Treatments",
    "Beauty Services",
    "Lash Studio",
    "Beauty Clinic",
    "Facial Spa",
    "Beauty Expert",
    "Brow Specialist",
    "Mississauga beauty salon",
  ],
  authors: [{ name: "Honey Bloom Beauty", url: siteUrl }],
  creator: "Honey Bloom Beauty",
  publisher: "Honey Bloom Beauty",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Honey Bloom Beauty | Brows, Lashes, Facials & Beauty Care",
    description:
      "Personalized brow artistry, lash lifts, skincare treatments, waxing, threading, tinting, and henna services by Honey Bloom Beauty.",
    url: "/",
    siteName: "Honey Bloom Beauty",
    images: [
      {
        url: stockPhotos.hero.src,
        width: 1800,
        height: 1200,
        alt: stockPhotos.hero.alt,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey Bloom Beauty | Beauty Salon & Medical Esthetician",
    description:
      "Microshading, ombre brows, lash lifts, facials, waxing, threading, tinting, and henna services.",
    images: [stockPhotos.hero.src],
  },
  category: "Beauty salon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#24584f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${display.variable} ${body.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd()) }} />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
