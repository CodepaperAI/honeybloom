import type { Metadata } from "next";
import Link from "next/link";
import { BlogGrid } from "@/components/BlogGrid";
import { listBlogs } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Beauty tips, brow and lash care guides, skincare advice, and salon updates from the Honey Bloom Beauty team in Mississauga.",
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 1800;

export default async function BlogPage() {
  const { blogs } = await listBlogs();

  return (
    <main id="main">
      <section className="page-hero">
        <p className="eyebrow">Journal</p>
        <h1>Beauty tips, brow care, and Honey Bloom Beauty updates.</h1>
        <p>
          Guides and inspiration for brows, lashes, skincare, waxing, threading, and henna, written to help you get the
          most out of every appointment.
        </p>
      </section>

      <section className="section">
        {blogs.length > 0 ? (
          <BlogGrid posts={blogs} />
        ) : (
          <div className="blog-empty">
            <p className="eyebrow">Coming soon</p>
            <h2>New articles are on the way.</h2>
            <p>
              We&apos;re preparing fresh beauty guides and salon updates. In the meantime, explore our services or book a
              visit.
            </p>
            <div className="section-actions">
              <Link className="button button-primary" href="/booking">
                Book a visit
              </Link>
              <Link className="button button-secondary" href="/services">
                View services
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
