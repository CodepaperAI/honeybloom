import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import { landingPathForService } from "@/data/landingPages";

// Server component. Importing the landing-page registry is safe here for that
// reason — see the note in SiteFooter.tsx.

export function ServiceDetails() {
  return (
    <div className="detail-grid">
      {services.map((service) => {
        // Contextual link from the existing services page into the detailed
        // landing page. Returns null while a page is held, so nothing renders
        // a dead link.
        const href = landingPathForService(service.title);
        return (
          <article className={["detail-card", service.featured && "detail-card-featured"].filter(Boolean).join(" ")} key={service.title}>
            <div className="detail-card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-sm)", marginBottom: "var(--space-xs)" }}>
              <h3>{service.title}</h3>
              {service.tag && <span className="detail-tag">{service.tag}</span>}
            </div>
            <p>{service.text}</p>
            <dl>
              <div>
                <dt>Best for</dt>
                <dd>{service.bestFor}</dd>
              </div>
              <div>
                <dt>Timing</dt>
                <dd>{service.time}</dd>
              </div>
            </dl>
            {href && (
              <Link className="detail-card-link" href={href}>
                {service.title} details and pricing
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            )}
          </article>
        );
      })}
    </div>
  );
}
