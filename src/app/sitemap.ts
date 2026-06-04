import type { MetadataRoute } from "next";
import { pages, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date("2026-06-02"),
    changeFrequency: "weekly",
    priority: page.priority,
  }));
}
