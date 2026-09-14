import { Star, Quote } from 'lucide-react';

/**
 * Testimonial data — replace with actual client testimonials when available.
 * Each entry is clearly structured for easy future replacement.
 */
const testimonials = [
  {
    id: 1,
    quote:
      'Pineapple transformed our wedding vision into something even more beautiful than we imagined. Every detail was handled perfectly — from the stunning mandap to the elegant reception décor. We could not have asked for a more wonderful team.',
    author: 'A Happy Couple',
    event: 'Wedding Celebration',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Our engagement ceremony was absolutely breathtaking. The floral arrangements, the lighting, the stage design — everything was beyond our expectations. Pineapple truly understands how to make every moment feel magical.',
    author: 'A Grateful Family',
    event: 'Engagement Ceremony',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'From planning to execution, the Pineapple team was professional, creative and incredibly attentive. Our wedding felt like it was taken straight from a dream. The décor was stunning and the catering was absolutely delicious.',
    author: 'A Delighted Couple',
    event: 'Grand Wedding',
    rating: 5,
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="star-rating flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-py bg-ivory"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 block">Client Stories</span>
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-burgundy-900 leading-tight mb-6"
          >
            Words From<br />
            <span className="italic font-light text-gold-500">Happy Clients</span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className="testimonial-card reveal bg-white p-8 md:p-10 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 text-gold-400/20">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Divider */}
              <div className="w-10 h-px bg-gold-400/40 my-6" />

              {/* Quote text */}
              <blockquote className="font-serif text-lg md:text-xl text-burgundy-900 leading-relaxed italic mb-8">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gold-400/20 pt-6">
                <div className="font-sans text-sm font-semibold text-burgundy-800 tracking-wide">
                  — {t.author}
                </div>
                <div className="font-sans text-xs text-warmgray tracking-widest uppercase mt-1">
                  {t.event}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note about testimonials */}
        <p className="text-center font-sans text-xs text-warmgray/60 mt-8">
          * Testimonials are representative. Client names kept private for their privacy.
        </p>
      </div>
    </section>
  );
}
