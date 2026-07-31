import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// siteUrl is imported rather than re-declared. This file used to keep its own
// copy of the origin, which is how robots.txt and the canonicals could drift
// apart — two constants meant two places to get the domain wrong.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
