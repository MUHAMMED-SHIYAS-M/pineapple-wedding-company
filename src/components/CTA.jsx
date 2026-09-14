import { MessageCircle, Phone } from 'lucide-react';

const WA_NUMBER  = '917510523602';
const WA_MESSAGE = encodeURIComponent(
  "Hello Pineapple Wedding Company, I'm interested in your event management services. I would like to discuss my event."
);

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative py-24 md:py-32 overflow-hidden bg-burgundy-950"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07)_0%,transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="reveal">
          <span className="section-label mb-6 block">Get In Touch</span>

          <h2
            id="cta-heading"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8"
          >
            Let's Create<br />
            <span className="gold-shimmer-text italic font-light">Something Beautiful.</span>
          </h2>

          <div className="gold-divider mb-8" />

          <p className="font-sans text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12">
            Planning a wedding or celebration? Tell us your vision and let's turn it into
            an unforgettable experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-[#20BD5B] hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-0.5"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

            <div className="flex gap-4">
              <a
                href="tel:7510523602"
                className="inline-flex items-center gap-3 btn-gold py-4 px-8 hover:shadow-lg hover:shadow-gold-400/20 hover:-translate-y-0.5"
                aria-label="Call us at 75105 23602"
              >
                <Phone size={16} />
                75105 23602
              </a>
              <a
                href="tel:7560907841"
                className="inline-flex items-center gap-3 btn-gold py-4 px-8 hover:shadow-lg hover:shadow-gold-400/20 hover:-translate-y-0.5"
                aria-label="Call us at 75609 07841"
              >
                <Phone size={16} />
                75609 07841
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
