import Image from "next/image";
import { stockPhotos } from "@/lib/site";

export function GalleryGrid() {
  const galleryItems = [
    {
      src: stockPhotos.hero.src,
      alt: stockPhotos.hero.alt,
      caption: "Calm facial and skincare appointments",
      width: 1800,
      height: 1200,
    },
    {
      src: stockPhotos.brow.src,
      alt: stockPhotos.brow.alt,
      caption: "Brow shaping and styling detail",
      width: 900,
      height: 680,
    },
    {
      src: stockPhotos.lashes.src,
      alt: stockPhotos.lashes.alt,
      caption: "Lash lift, tinting, and enhancement care",
      width: 900,
      height: 680,
    },
    {
      src: stockPhotos.henna.src,
      alt: stockPhotos.henna.alt,
      caption: "Henna services for events and celebrations",
      width: 900,
      height: 680,
    },
    {
      src: "/images/honey-bloom-before-after.jpeg",
      alt: "Before and after eyebrow microshading result from Honey Bloom Beauty",
      caption: "Honey Bloom brow enhancement flyer",
      width: 900,
      height: 1600,
      className: "gallery-contain",
    },
    {
      src: "/images/honey-bloom-service-menu.webp",
      alt: "Honey Bloom Beauty printed service menu with facials, waxing, threading, massage, and henna pricing",
      caption: "Honey Bloom printed service menu",
      width: 900,
      height: 1600,
      className: "gallery-contain",
    },
  ];

  return (
    <div className="gallery-grid">
      {galleryItems.map((item) => (
        <figure className={["gallery-item", item.className].filter(Boolean).join(" ")} key={item.caption}>
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="(max-width: 760px) 100vw, 43vw"
          />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
