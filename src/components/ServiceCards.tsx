import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Flower2, Heart, Sparkles, ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import { landingPathForService } from "@/data/landingPages";

// Server component — safe to import the registry here. See SiteFooter.tsx.

const icons = {
  sparkles: Sparkles,
  flower: Flower2,
  heart: Heart,
  check: BadgeCheck,
};

export function ServiceCards({ limit }: { limit?: number }) {
  return (
    <div className="service-grid">
      {services.slice(0, limit).map((service) => {
        const Icon = icons[service.icon as keyof typeof icons];
        // Null while a landing page is held, so no dead link is rendered.
        const href = landingPathForService(service.title);
        return (
          <article className={["service-card", service.featured && "service-card-featured"].filter(Boolean).join(" ")} key={service.title}>
            <figure className="service-card-media">
              {service.tag && (
                <span className="service-card-tag">{service.tag}</span>
              )}
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={900}
                height={680}
                loading="eager"
                sizes="(max-width: 680px) 100vw, (max-width: 1120px) 48vw, 24vw"
              />
            </figure>
            <div className="service-card-body">
              <span className="service-card-icon">
                <Icon aria-hidden="true" size={22} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              {href && (
                <Link className="detail-card-link" href={href}>
                  Details and pricing
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
