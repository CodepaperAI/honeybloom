import Image from "next/image";
import { BadgeCheck, Flower2, Heart, Sparkles } from "lucide-react";
import { services } from "@/lib/site";

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
            </div>
          </article>
        );
      })}
    </div>
  );
}
