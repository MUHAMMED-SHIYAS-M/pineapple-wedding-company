import aboutImg from '../assets/gallery/about_reception.jpg';

export default function About() {
  return (
    <section id="about" className="section-py bg-ivory" aria-labelledby="about-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Image */}
          <div className="reveal-left relative order-2 lg:order-1">
            <div className="relative overflow-hidden">
              <img
                src={aboutImg}
                alt="Luxury wedding reception hall decorated by Pineapple Wedding Company"
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-400/40 pointer-events-none" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-burgundy-900 text-white px-8 py-6 shadow-2xl">
              <div className="flex items-end gap-3">
                <span className="font-serif text-5xl font-light text-gold-400 leading-none">100%</span>
                <span className="font-sans text-xs text-white/60 uppercase tracking-widest leading-tight pb-1">
                  Personalized<br />Planning
                </span>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="reveal order-1 lg:order-2">
            <div className="mb-6">
              <span className="section-label">Our Story</span>
            </div>

            <h2
              id="about-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-burgundy-900 leading-tight mb-6"
            >
              Your Dream Day,<br />
              <span className="italic font-light text-gold-500">Our Passion.</span>
            </h2>

            {/* Gold line */}
            <div className="gold-divider-left mb-8" />

            <p className="font-sans text-warmgray text-base md:text-lg leading-relaxed mb-6">
              At Pineapple Wedding Company, we believe every celebration deserves to be extraordinary.
              From intimate gatherings to grand weddings, we bring together thoughtful planning,
              beautiful décor, delicious dining and flawless execution to create moments you'll
              remember forever.
            </p>

            <p className="font-sans text-warmgray text-sm md:text-base leading-relaxed mb-10">
              Based across <strong className="text-burgundy-800 font-medium">Edappal, Malappuram and Tirur</strong> in
              Kerala, our team of passionate designers and coordinators transform your vision into
              an experience that feels uniquely yours.
            </p>

            {/* Stats row */}
            <div className="flex gap-10 mb-10 border-t border-b border-gold-400/20 py-6">
              {[
                { num: '1+', label: 'Years of Excellence' },
                { num: '3', label: 'Locations Served' },
                { num: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl text-burgundy-800 font-light">{stat.num}</div>
                  <div className="font-sans text-xs text-warmgray tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('services');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              className="btn-gold"
            >
              Discover Pineapple
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
