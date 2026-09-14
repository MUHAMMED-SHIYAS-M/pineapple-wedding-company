import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBg from '../assets/gallery/hero_bg.jpg';
import logoMain from '../assets/logo/logo-main.png';

export default function Hero() {
  const heroRef     = useRef(null);
  const textRef     = useRef(null);
  const overlayRef  = useRef(null);

  /* ── Parallax on scroll ───────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
      if (textRef.current) {
        textRef.current.style.transform  = `translateY(${scrollY * 0.25}px)`;
        textRef.current.style.opacity    = `${Math.max(0, 1 - scrollY / 500)}`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
      aria-label="Hero section"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={heroRef}
          src={heroBg}
          alt="Luxury Indian wedding mandap decoration"
          className="hero-bg absolute inset-0 w-full h-full object-cover object-center scale-110"
          fetchPriority="high"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-950/70 via-burgundy-900/50 to-burgundy-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/30 via-transparent to-burgundy-950/30" />
      </div>

      {/* Hero content */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Logo & Decorative top line */}
        <div className="hero-text-animate flex flex-col items-center justify-center mb-6">
          <img
            src={logoMain}
            alt="Pineapple Wedding Company"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full shadow-2xl border border-gold-400/50 p-1 bg-burgundy-950/60 backdrop-blur-sm mb-4"
          />
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold-400/60" />
            <span className="section-label text-gold-400/80">Est. Kerala, India</span>
            <div className="h-px w-12 bg-gold-400/60" />
          </div>
        </div>

        {/* Main title */}
        <h1 className="hero-text-animate-delay1 font-serif font-light text-white leading-none mb-2">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest gold-shimmer-text">
            PINEAPPLE
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest2 font-light text-champagne mt-2">
            WEDDING COMPANY
          </span>
        </h1>

        {/* Divider */}
        <div className="hero-text-animate-delay2 flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16 md:w-24 bg-gold-400/50" />
          <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
          <div className="h-px w-16 md:w-24 bg-gold-400/50" />
        </div>

        {/* Tagline */}
        <p className="hero-text-animate-delay3 font-serif italic text-xl md:text-2xl lg:text-3xl text-champagne/90 leading-relaxed mb-4">
          "Creating Moments. Designing Memories."
        </p>

        {/* Supporting text */}
        <p className="hero-text-animate-delay4 font-sans text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed mb-12 font-light tracking-wide">
          Beautiful weddings and unforgettable celebrations, thoughtfully planned and beautifully executed.
        </p>

        {/* CTA Buttons */}
        <div className="hero-text-animate-delay5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('gallery');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="btn-gold text-xs py-4 px-10 hover:shadow-lg hover:shadow-gold-400/20"
          >
            Explore Our Work
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="btn-gold-filled text-xs py-4 px-10 hover:shadow-lg hover:shadow-gold-400/30"
          >
            Plan Your Event
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-gold-400 transition-colors duration-300 group"
        aria-label="Scroll to explore"
      >
        <span className="font-sans text-xs tracking-widest2 uppercase">Scroll to Explore</span>
        <ChevronDown
          size={20}
          className="scroll-indicator-arrow group-hover:text-gold-400"
        />
      </button>
    </section>
  );
}
