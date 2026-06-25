import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="story-grid blog-grid">
      {posts.map((post) => {
        const category = post.categories?.[0] ?? post.meta?.articleSection ?? "Article";
        const date = formatBlogDate(post);

        return (
          <article className="story-card blog-card" key={post.id}>
            <Link href={`/blog/${post.slug}`} className="blog-card-link" aria-label={post.title}>
              {post.featuredImage ? (
                // Remote images from the Uplift CMS; plain img keeps domain config simple.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.featuredImage} alt={post.title} loading="lazy" />
              ) : (
                <div className="blog-card-placeholder" aria-hidden="true" />
              )}
              <div>
                <span>{category}</span>
                <h3>{post.title}</h3>
                {post.excerpt ? <p>{post.excerpt}</p> : null}
                <div className="blog-card-meta">
                  {post.authorName ? <span className="blog-card-author">{post.authorName}</span> : null}
                  {date ? <time dateTime={post.publishDate ?? post.createdAt}>{date}</time> : null}
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
