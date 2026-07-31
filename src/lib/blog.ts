// Uplift AI blog API client. The token is server-side only (UPLIFT_API_TOKEN)
// so we use the Bearer-authenticated server endpoints rather than the
// token-in-path browser endpoints.

const API_BASE = "https://api.upliftai.co/api/public/v1";

export type BlogFreshness = {
  lastUpdatedAt?: string;
  ageDays?: number;
  needsRefresh?: boolean;
  freshnessThresholdDays?: number;
};

export type BlogMeta = {
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  status?: string;
  publishDate?: string;
  publishTime?: string;
  featuredImage?: string;
  categories?: string[];
  tags?: string[];
  seoScore?: number;
  createdAt?: string;
  updatedAt?: string;
  authorName?: string;
  authorUrl?: string;
  freshness?: BlogFreshness;
  meta?: BlogMeta;
  customFields?: Record<string, unknown>;
};

export type BlogListResult = {
  blogs: BlogPost[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

// Accepts either name. Vercel production has the token under UPLIFT_TOKEN while
// this code originally read only UPLIFT_API_TOKEN, so getToken() returned null
// on every production request and the blog silently rendered "Coming soon" —
// the failure is a console.warn on the server, invisible from the browser.
function getToken(): string | null {
  return process.env.UPLIFT_API_TOKEN ?? process.env.UPLIFT_TOKEN ?? null;
}

async function uplift<T>(path: string): Promise<T | null> {
  const token = getToken();
  if (!token) {
    console.warn("Neither UPLIFT_API_TOKEN nor UPLIFT_TOKEN is set; skipping blog API request.");
    return null;
  }

  try {
    const response = await fetch(`${API_BASE}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      // Revalidate blog content periodically rather than on every request.
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      if (response.status !== 404) {
        console.error(`Uplift blog API error ${response.status} for ${path}`);
      }
      return null;
    }

    const json = (await response.json()) as { success?: boolean; data?: T };
    if (!json?.success) {
      return null;
    }
    return json.data ?? null;
  } catch (error) {
    console.error("Uplift blog API request failed:", error);
    return null;
  }
}

export async function listBlogs(
  options: { page?: number; limit?: number; status?: "PUBLISH" | "DRAFT" | "ALL" } = {},
): Promise<BlogListResult> {
  const { page = 1, limit = 100, status = "PUBLISH" } = options;
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    status,
  });

  const data = await uplift<BlogListResult>(`/blogs?${params.toString()}`);
  if (!data?.blogs) {
    return { blogs: [] };
  }
  return data;
}

export async function getBlog(slug: string): Promise<BlogPost | null> {
  const data = await uplift<{ blog: BlogPost }>(`/blog/${encodeURIComponent(slug)}`);
  return data?.blog ?? null;
}

export function formatBlogDate(post: Pick<BlogPost, "publishDate" | "createdAt">): string {
  const raw = post.publishDate ?? post.createdAt;
  if (!raw) return "";
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
