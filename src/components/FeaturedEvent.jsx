import featuredImg from '../assets/gallery/featured_event.jpg';

export default function FeaturedEvent() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="relative min-h-[70vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={featuredImg}
          alt="Grand Indian wedding ceremony at golden hour with cinematic lighting"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/90 via-burgundy-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 via-transparent to-burgundy-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-24">
        <div className="max-w-2xl reveal">
          <span className="section-label text-gold-400/80 block mb-6">Featured Celebration</span>

          <h2
            id="featured-heading"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Your Day.<br />
            <span className="italic font-light text-gold-400">Your Story.</span>
          </h2>

          <div className="gold-divider-left mb-8" />

          <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            Every celebration has a story. We turn your ideas, traditions and dreams into an
            experience that feels uniquely yours — from the very first detail to the final moment.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="btn-gold-filled hover:shadow-lg hover:shadow-gold-400/20"
          >
            Start Planning
          </button>
        </div>
      </div>
    </section>
  );
}
