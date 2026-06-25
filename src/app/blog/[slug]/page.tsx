import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { formatBlogDate, getBlog, listBlogs } from "@/lib/blog";

export const revalidate = 1800;

type BlogParams = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { blogs } = await listBlogs();
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  const title = post.meta?.seoTitle ?? post.title;
  const description = post.meta?.seoDescription ?? post.excerpt ?? undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.meta?.ogTitle ?? title,
      description: post.meta?.ogDescription ?? description,
      type: "article",
      url: `/blog/${post.slug}`,
      images: post.featuredImage ? [{ url: post.featuredImage, alt: post.title }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogParams) {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    notFound();
  }

  const category = post.categories?.[0] ?? post.meta?.articleSection ?? "Article";
  const date = formatBlogDate(post);

  return (
    <main id="main">
      <article className="blog-article">
        <header className="blog-article-header">
          <Link className="blog-back-link" href="/blog">
            <ArrowLeft aria-hidden="true" size={15} />
            <span>All articles</span>
          </Link>
          <p className="eyebrow">{category}</p>
          <h1>{post.title}</h1>
          <div className="blog-article-meta">
            {post.authorName ? <span>{post.authorName}</span> : null}
            {date ? <time dateTime={post.publishDate ?? post.createdAt}>{date}</time> : null}
          </div>
        </header>

        {post.featuredImage ? (
          <div className="blog-article-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.featuredImage} alt={post.title} />
          </div>
        ) : null}

        {post.content ? (
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : post.excerpt ? (
          <div className="blog-content">
            <p>{post.excerpt}</p>
          </div>
        ) : null}

        {post.tags && post.tags.length > 0 ? (
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}

        <div className="section-actions">
          <Link className="button button-primary" href="/booking">
            Book a visit
          </Link>
          <Link className="button button-secondary" href="/blog">
            More articles
          </Link>
        </div>
      </article>
    </main>
  );
}
