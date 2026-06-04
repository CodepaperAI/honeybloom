import { services } from "@/lib/site";

export function ServiceDetails() {
  return (
    <div className="detail-grid">
      {services.map((service) => (
        <article className="detail-card" key={service.title}>
          <h3>{service.title}</h3>
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
