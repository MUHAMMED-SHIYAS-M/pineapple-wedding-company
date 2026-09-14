import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

function InstagramIcon({ size = 18, className = 'text-gold-400' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const WA_NUMBER = '917510523602';
const WA_MESSAGE = encodeURIComponent(
  "Hello Pineapple Wedding Company, I'm interested in your event management services. I would like to discuss my event."
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-py bg-burgundy-950"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 block">Contact Us</span>
          <h2
            id="contact-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Let's Talk About<br />
            <span className="italic font-light text-gold-400">Your Event</span>
          </h2>
          <div className="gold-divider" />
          <p className="font-sans text-white/50 text-base mt-6 max-w-xl mx-auto leading-relaxed">
            Based in Kerala, we bring your dream celebrations to life across Edappal,
            Malappuram and Tirur. Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">

          {/* Phone 1 */}
          <a
            href="tel:8089107071"
            className="group flex flex-col items-center text-center gap-4 border border-gold-400/20 p-8 hover:border-gold-400/60 hover:bg-white/5 transition-all duration-300"
            aria-label="Call us at 80891 07071"
          >
            <div className="w-14 h-14 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-300">
              <Phone size={22} className="text-gold-400" />
            </div>
            <div>
              <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-1">Phone</div>
              <div className="font-serif text-xl text-white group-hover:text-gold-400 transition-colors">80891 07071</div>
            </div>
          </a>

          {/* Phone 2 */}
          <a
            href="tel:8157061265"
            className="group flex flex-col items-center text-center gap-4 border border-gold-400/20 p-8 hover:border-gold-400/60 hover:bg-white/5 transition-all duration-300"
            aria-label="Call us at 81570 61265"
          >
            <div className="w-14 h-14 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-300">
              <Phone size={22} className="text-gold-400" />
            </div>
            <div>
              <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-1">Phone</div>
              <div className="font-serif text-xl text-white group-hover:text-gold-400 transition-colors">81570 61265</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-4 border border-gold-400/20 p-8 hover:border-[#25D366]/60 hover:bg-[#25D366]/5 transition-all duration-300"
            aria-label="WhatsApp us"
          >
            <div className="w-14 h-14 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-[#25D366] group-hover:bg-[#25D366]/10 transition-all duration-300">
              <MessageCircle size={22} className="text-gold-400 group-hover:text-[#25D366] transition-colors" />
            </div>
            <div>
              <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-1">WhatsApp</div>
              <div className="font-serif text-xl text-white group-hover:text-[#25D366] transition-colors">+91 751 052 3602</div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:pineappleevents08@gmail.com"
            className="group flex flex-col items-center text-center gap-4 border border-gold-400/20 p-8 hover:border-gold-400/60 hover:bg-white/5 transition-all duration-300"
            aria-label="Email us at pineappleevents08@gmail.com"
          >
            <div className="w-14 h-14 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-300">
              <Mail size={22} className="text-gold-400" />
            </div>
            <div>
              <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-1">Email</div>
              <div className="font-serif text-lg text-white group-hover:text-gold-400 transition-colors break-all">
                pineappleevents08@gmail.com
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/pineapple_wedding_company/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-4 border border-gold-400/20 p-8 hover:border-gold-400/60 hover:bg-white/5 transition-all duration-300"
            aria-label="Follow us on Instagram"
          >
            <div className="w-14 h-14 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-300">
              <InstagramIcon size={22} className="text-gold-400" />
            </div>
            <div>
              <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-1">Instagram</div>
              <div className="font-serif text-lg text-white group-hover:text-gold-400 transition-colors">
                @pineapple_wedding_company
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center text-center gap-4 border border-gold-400/20 p-8">
            <div className="w-14 h-14 flex-shrink-0 border border-gold-400/30 flex items-center justify-center">
              <MapPin size={22} className="text-gold-400" />
            </div>
            <div>
              <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-1">Locations</div>
              <div className="font-serif text-lg text-white">Edappal · Malappuram · Tirur</div>
              <div className="font-sans text-white/40 text-sm mt-1">Kerala, India</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
