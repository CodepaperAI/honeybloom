import Image from "next/image";
import { galleryStories } from "@/lib/site";

export function GalleryStories() {
  return (
    <div className="story-grid">
      {galleryStories.map((story) => (
        <article className="story-card" key={story.title}>
          <Image src={story.image} alt={story.imageAlt} width={900} height={680} sizes="(max-width: 680px) 100vw, 50vw" />
          <div>
            <span>{story.service}</span>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
