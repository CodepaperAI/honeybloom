import Image from "next/image";
import Link from "next/link";
import { galleryStories } from "@/lib/site";
import { landingPathForPhrase } from "@/data/landingPages";

// Server component — safe to import the registry. See SiteFooter.tsx.

export function GalleryStories() {
  return (
    <div className="story-grid">
      {galleryStories.map((story) => {
        // Each gallery story's service label links through to that treatment.
        const href = landingPathForPhrase(story.service);
        return (
          <article className="story-card" key={story.title}>
            <Image src={story.image} alt={story.imageAlt} width={900} height={680} sizes="(max-width: 680px) 100vw, 50vw" />
            <div>
              {href ? <Link href={href}>{story.service}</Link> : <span>{story.service}</span>}
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
