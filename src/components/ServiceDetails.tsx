import { services } from "@/lib/site";

export function ServiceDetails() {
  return (
    <div className="detail-grid">
      {services.map((service) => (
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
        </article>
      ))}
    </div>
  );
}
