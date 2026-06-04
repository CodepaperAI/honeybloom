import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";

export function TestimonialsGrid({ limit }: { limit?: number }) {
  return (
    <div className="testimonial-grid">
      {testimonials.slice(0, limit).map((testimonial) => (
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
            <span>{testimonial.service}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
