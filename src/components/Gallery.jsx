import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

import heroBg               from '../assets/gallery/hero_bg.jpg';
import aboutImg             from '../assets/gallery/about_reception.jpg';
import floralImg            from '../assets/gallery/gallery_floral.jpg';
import stageImg             from '../assets/gallery/gallery_stage.jpg';
import diningImg            from '../assets/gallery/gallery_dining.jpg';
import receptionImg         from '../assets/gallery/gallery_reception.jpg';
import mandapImg            from '../assets/gallery/gallery_mandap.jpg';
import featuredImg          from '../assets/gallery/featured_event.jpg';
import diningWhiteFloral    from '../assets/gallery/dining_white_floral.jpg';
import receptionRoundTable  from '../assets/gallery/reception_round_table.jpg';
import stagePinkFloral      from '../assets/gallery/stage_pink_floral.jpg';
import decorBougainvillea   from '../assets/gallery/decor_bougainvillea_arch.jpg';
import stageLuxuryArch      from '../assets/gallery/stage_luxury_arch.jpg';

const allImages = [
  { id: 1,  src: heroBg,              alt: 'Luxury Indian wedding mandap with gold and ivory decorations',                     category: 'weddings',   label: 'Grand Mandap' },
  { id: 2,  src: floralImg,           alt: 'Circular floral arch made of red roses and white orchids',                          category: 'decor',      label: 'Floral Arch' },
  { id: 3,  src: stageImg,            alt: 'Royal wedding stage with red velvet sofa and crystal chandeliers',                  category: 'decor',      label: 'Royal Stage' },
  { id: 4,  src: receptionImg,        alt: 'Elegant wedding reception hall with burgundy aisle and chandeliers',                category: 'receptions', label: 'Reception Hall' },
  { id: 5,  src: diningImg,           alt: 'Wedding catering spread with traditional Indian food arrangements',                 category: 'dining',     label: 'Grand Feast' },
  { id: 6,  src: mandapImg,           alt: 'Traditional Kerala wedding mandap with marigold and banana leaves',                 category: 'weddings',   label: 'Kerala Mandap' },
  { id: 7,  src: aboutImg,            alt: 'Luxury wedding banquet hall with crystal chandeliers and gold setup',               category: 'receptions', label: 'Banquet Hall' },
  { id: 8,  src: featuredImg,         alt: 'Cinematic wedding ceremony at golden hour with flower-lined aisle',                 category: 'weddings',   label: 'Golden Hour' },
  { id: 9,  src: diningWhiteFloral,   alt: 'Luxury wedding reception banquet table with white floral centerpieces and candles', category: 'dining',     label: 'Candlelight Dining' },
  { id: 10, src: receptionRoundTable, alt: 'Round wedding reception table styled with blush pink roses and crystal chandeliers',category: 'dining',     label: 'Blush Floral Banquet' },
  { id: 11, src: stagePinkFloral,     alt: 'Pastel pink wedding stage decoration with flower arch and illuminated steps',       category: 'decor',      label: 'Blush Floral Stage' },
  { id: 12, src: decorBougainvillea,  alt: 'Outdoor wedding decor featuring traditional carved daybed and bougainvillea arch',  category: 'weddings',   label: 'Bougainvillea Courtyard' },
  { id: 13, src: stageLuxuryArch,     alt: 'Ultra luxury wedding stage with illuminated golden halo monogram and floral arches',category: 'receptions', label: 'Royal Halo Stage' },
];

const categories = [
  { key: 'all',        label: 'All' },
  { key: 'weddings',   label: 'Weddings' },
  { key: 'decor',      label: 'Decor' },
  { key: 'dining',     label: 'Dining' },
  { key: 'receptions', label: 'Receptions' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox,        setLightbox]       = useState(null); // index in filtered

  const filtered = activeCategory === 'all'
    ? allImages
    : allImages.filter(img => img.category === activeCategory);

  const openLightbox  = useCallback((idx) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() =>
    setLightbox(i => (i - 1 + filtered.length) % filtered.length), [filtered.length]);

  const next = useCallback(() =>
    setLightbox(i => (i + 1) % filtered.length), [filtered.length]);

  // Keyboard navigation
  const onKeyDown = useCallback((e) => {
    if (lightbox === null) return;
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape')     closeLightbox();
  }, [lightbox, prev, next, closeLightbox]);

  return (
    <section
      id="gallery"
      className="section-py bg-ivory"
      aria-labelledby="gallery-heading"
      onKeyDown={onKeyDown}
    >
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="section-label mb-4 block">Our Portfolio</span>
          <h2
            id="gallery-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-burgundy-900 leading-tight mb-6"
          >
            Celebrations<br />
            <span className="italic font-light text-gold-500">We've Created</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="font-sans text-warmgray text-base max-w-md mx-auto">
            A glimpse into our world of weddings, décor and celebrations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-sans text-xs tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-burgundy-900 border-burgundy-900 text-gold-400'
                  : 'border-burgundy-900/30 text-burgundy-900 hover:border-burgundy-900 hover:bg-burgundy-900/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              className="masonry-item group"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.label}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(idx); }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="masonry-overlay">
                <div className="flex flex-col gap-1 w-full">
                  <span className="font-serif text-white text-base font-normal tracking-wide">
                    {img.label}
                  </span>
                  <div className="flex items-center gap-2 text-gold-400">
                    <Eye size={14} />
                    <span className="font-sans text-[11px] tracking-widest uppercase font-medium">
                      View Event
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 reveal">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="btn-gold"
          >
            Plan Your Event With Us
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${lightbox + 1} of ${filtered.length}: ${filtered[lightbox].label}`}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-gold-400 transition-colors z-10 p-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 text-white/70 hover:text-gold-400 transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[90vh] mx-6 md:mx-20 relative"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain mx-auto block shadow-2xl"
            />
            <div className="text-center mt-4">
              <span className="font-serif text-lg text-champagne">{filtered[lightbox].label}</span>
              <span className="font-sans text-xs text-white/40 ml-4 tracking-widest uppercase">
                {lightbox + 1} / {filtered.length}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 text-white/70 hover:text-gold-400 transition-colors z-10 p-3"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
