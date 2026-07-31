import type { MetadataRoute } from "next";
import { pages, siteUrl } from "@/lib/site";
import { landingPageRoutes } from "@/data/landingPages";
import { listBlogs } from "@/lib/blog";

// The sitemap previously listed only the nine static pages. Blog posts are
// fetched at runtime from the Uplift API and were never included, so every post
// was an orphan — present on the site, absent from the sitemap, and reachable
// only by crawling the blog index.

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date("2026-06-02");

  const staticPages = pages.map((page) => ({
    url: `${siteUrl}${page.path === "/" ? "" : page.path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));

  const landing = landingPageRoutes().map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  // A failing or unconfigured blog API must not take the sitemap down with it —
  // losing the static and landing URLs would be far worse than omitting posts.
  let blog: MetadataRoute.Sitemap = [];
  try {
    const result = await listBlogs();
    blog = (result?.blogs ?? []).map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    blog = [];
  }

  return [...staticPages, ...landing, ...blog];
}
