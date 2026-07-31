import Link from "next/link";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import { landingPathForPhrase } from "@/data/landingPages";

// Server component — safe to import the registry. See SiteFooter.tsx.
//
// The service label on each testimonial links to the page for that treatment.
// A review of a specific service is a natural, genuinely useful place to send
// someone, and it gives established pages a contextual route into the new ones.

export function TestimonialsGrid({ limit }: { limit?: number }) {
  return (
    <div className="testimonial-grid">
      {testimonials.slice(0, limit).map((testimonial) => {
        const href = landingPathForPhrase(testimonial.service);
        return (
        <article className="testimonial-card" key={`${testimonial.name}-${testimonial.service}`}>
          <Quote className="testimonial-quote-icon" aria-hidden="true" size={22} />
          <div className="stars" aria-label="Five star review">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} aria-hidden="true" size={15} />
            ))}
          </div>
          <blockquote>
            <p>{testimonial.text}</p>
          </blockquote>
          <div className="testimonial-meta">
            <strong>{testimonial.name}</strong>
            {href ? (
              <Link href={href}>{testimonial.service}</Link>
            ) : (
              <span>{testimonial.service}</span>
            )}
          </div>
        </article>
        );
      })}
    </div>
  );
}
