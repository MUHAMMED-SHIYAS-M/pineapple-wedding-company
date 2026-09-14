import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import logoMain from '../assets/logo/logo-main.png';

/* ── Inline brand SVG icons (lucide-react removed brand icons) ── */
function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const WA_NUMBER  = '917510523602';
const WA_MESSAGE = encodeURIComponent(
  "Hello Pineapple Wedding Company, I'm interested in your event management services. I would like to discuss my event."
);

const quickLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About Us',     href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

const handleScroll = (href) => {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-burgundy-950 border-t border-white/5" role="contentinfo">

      {/* Main footer body */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src={logoMain}
              alt="Pineapple Wedding Company Logo"
              className="h-20 w-20 object-contain rounded-full mb-6"
            />
            <p className="font-sans text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Creating extraordinary celebrations across Edappal, Malappuram and Tirur, Kerala.
              Your dream event, beautifully executed.
            </p>
            <p className="font-serif italic text-gold-400 text-base">
              "Creating Moments. Designing Memories."
            </p>
            <div className="gold-divider-left mt-6 mb-6" />

            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pineapple_wedding_company/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
                onClick={(e) => e.preventDefault()}
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-xs text-white/40 tracking-widest uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                    className="font-sans text-sm text-white/60 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-400/0 group-hover:bg-gold-400/60 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs text-white/40 tracking-widest uppercase mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:7510523602"
                  className="flex items-start gap-3 text-white/60 hover:text-gold-400 transition-colors duration-300 group"
                  aria-label="Call 75105 23602"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-sans text-sm">75105 23602</div>
                    <div className="font-sans text-sm">75609 07841</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pineappleevents08@gmail.com"
                  className="flex items-start gap-3 text-white/60 hover:text-gold-400 transition-colors duration-300"
                  aria-label="Email pineappleevents08@gmail.com"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-sm break-all">pineappleevents08@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold-400/60" />
                  <div className="font-sans text-sm">
                    <div>Edappal | Malappuram | Tirur</div>
                    <div className="text-white/40 text-xs mt-0.5">Kerala, India</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">
            © 2026 Pineapple Wedding Company. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/20">
            Wedding &amp; Event Management · Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
