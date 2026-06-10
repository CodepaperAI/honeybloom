import Image from "next/image";
import { stockPhotos } from "@/lib/site";

export function GalleryGrid() {
  const galleryItems = [
    {
      src: "/images/lash_lift_new.jpg",
      alt: "Close-up of precise lash lift and tint application in our salon",
      caption: "Professional lash lift service",
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
      src: "/images/lash_lift_purple.jpg",
      alt: "Close-up of precise lash lift and tint application in our salon",
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
    {
      src: "/images/makeup_service.jpg",
      alt: "Flawless event makeup application by a professional esthetician",
      caption: "Bridal & Event Makeup service",
      width: 900,
      height: 680,
    },
    {
      src: "/images/bridal_makeup_gallery.jpg",
      alt: "Beautiful bride with elegant crown and bridal makeup",
      caption: "Stunning bridal makeup",
      width: 900,
      height: 1200,
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
