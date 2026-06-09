import Image from "next/image";
import { stockPhotos } from "@/lib/site";

export function GalleryGrid() {
  const galleryItems = [
    {
      src: "/images/aleks-Wude2F3CMss-unsplash.jpg",
      alt: "Clean, luxurious esthetician spa room with massage bed and ambient lighting",
      caption: "Our peaceful treatment space",
      width: 900,
      height: 680,
    },
    {
      src: "/images/lash_before_after.jpg",
      alt: "Before and after results of a professional lash lift and tinting treatment",
      caption: "Lash Lift & Tint before & after",
      width: 900,
      height: 1200,
    },
    {
      src: "/images/stock-henna-application.webp",
      alt: "Detailed henna design being applied onto hand by a beauty artist",
      caption: "Elegant henna hand designs",
      width: 900,
      height: 680,
    },
    {
      src: "/images/stock-brow-styling.webp",
      alt: "Close-up of eyebrow shaping and grooming in a professional studio",
      caption: "Brow shaping and mapping detail",
      width: 900,
      height: 680,
    },
    {
      src: "/images/stock-spa-treatment.webp",
      alt: "Client relaxing with a nourishing facial mask during a beauty salon treatment",
      caption: "Relaxing facial skincare care",
      width: 900,
      height: 680,
    },
    {
      src: "/images/stock-lash-application.webp",
      alt: "Close-up of precise lash enhancement application in a beauty clinic",
      caption: "Professional lash application",
      width: 900,
      height: 680,
    },
    {
      src: "/images/stock-threading.webp",
      alt: "A professional esthetician performing precise thread hair removal on client's eyebrows",
      caption: "Eyebrow threading maintenance",
      width: 900,
      height: 680,
    },
    {
      src: "/images/gallery_waxing.png",
      alt: "An esthetician applying natural soy hair removal wax to a client's arm with a wooden applicator",
      caption: "Gentle soy-based waxing detail",
      width: 900,
      height: 680,
    },
    {
      src: "/images/milky-way-lashes-GEct9d7zgos-unsplash.jpg",
      alt: "Aesthetic close-up of a client showing long, dark, thick styled eyelashes",
      caption: "Stunning lash enhancement results",
      width: 900,
      height: 680,
    },
  ];

  return (
    <div className="gallery-grid">
      {galleryItems.map((item) => (
        <figure className="gallery-item" key={item.caption}>
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
