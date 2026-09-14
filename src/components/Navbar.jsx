import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import logoMain from '../assets/logo/logo-main.png';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ── Scroll listener ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu open ───────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-60 transition-all duration-500 ${
          scrolled ? 'navbar-solid py-3' : 'navbar-transparent py-5'
        }`}
        role="banner"
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center flex-shrink-0"
            aria-label="Pineapple Wedding Company — Home"
          >
            <img
              src={logoMain}
              alt="Pineapple Wedding Company Logo"
              className="h-14 md:h-16 w-14 md:w-16 object-contain rounded-full"
            />
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            role="navigation"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hidden md:inline-flex btn-gold text-xs py-2.5 px-6"
            >
              Plan Your Event
            </a>
            <button
              className="lg:hidden text-white p-2 hover:text-gold-400 transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-70 bg-burgundy-950 flex flex-col ${mobileOpen ? 'open' : 'closed'}`}
        aria-hidden={!mobileOpen}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <img
              src={logoMain}
              alt="Pineapple Wedding Company Logo"
              className="h-16 w-16 object-contain rounded-full"
            />
          <button
            className="text-white hover:text-gold-400 transition-colors p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col flex-1 justify-center items-center gap-8 px-8" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-serif text-3xl text-white hover:text-gold-400 transition-colors duration-300 tracking-wide"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="px-8 pb-12 border-t border-white/10 pt-8">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="btn-gold w-full justify-center text-center"
          >
            Plan Your Event
          </a>
          <div className="flex justify-center gap-6 mt-6 text-white/50 text-xs tracking-widest">
            <a href="tel:7510523602" className="hover:text-gold-400 transition-colors">75105 23602</a>
            <span>|</span>
            <a href="tel:7560907841" className="hover:text-gold-400 transition-colors">75609 07841</a>
          </div>
        </div>
      </div>
    </>
  );
}
