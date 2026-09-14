const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We listen to your ideas, preferences and vision to understand what your perfect celebration looks like.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We transform your ideas into a beautiful event concept — from décor styles to venue layouts.',
  },
  {
    num: '03',
    title: 'Plan',
    desc: 'We coordinate décor, catering, venue and every important detail with precision and care.',
  },
  {
    num: '04',
    title: 'Celebrate',
    desc: 'You enjoy your special day fully while we take care of everything behind the scenes.',
  },
];

export default function Process() {
  return (
    <section
      className="section-py bg-burgundy-950"
      aria-labelledby="process-heading"
    >
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 block">How We Work</span>
          <h2
            id="process-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            From Dream<br />
            <span className="italic font-light text-gold-400">to Celebration</span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Timeline — Desktop: horizontal, Mobile: vertical */}
        <div className="relative">

          {/* Horizontal connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[44px] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gold-400/20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal flex flex-col lg:items-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Mobile: vertical line connector */}
                <div className="flex lg:hidden items-start gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    {/* Circle */}
                    <div className="w-14 h-14 rounded-full border-2 border-gold-400 flex items-center justify-center bg-burgundy-950 relative z-10">
                      <span className="font-serif text-gold-400 text-sm font-light">{step.num}</span>
                    </div>
                    {/* Vertical line */}
                    {i < steps.length - 1 && (
                      <div className="w-px h-24 bg-gold-400/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-3 pb-8">
                    <h3 className="font-serif text-2xl text-white mb-3">{step.title}</h3>
                    <p className="font-sans text-sm text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Desktop: vertical layout centered */}
                <div className="hidden lg:flex flex-col items-center text-center">
                  {/* Circle */}
                  <div className="w-14 h-14 rounded-full border-2 border-gold-400 flex items-center justify-center bg-burgundy-950 relative z-10 mb-8">
                    <span className="font-serif text-gold-400 text-sm font-light">{step.num}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">{step.title}</h3>
                  <div className="w-8 h-px bg-gold-400/30 mb-4" />
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <p className="font-serif italic text-white/50 text-lg mb-6">
            Ready to start your journey with us?
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="btn-gold"
          >
            Begin Your Story
          </button>
        </div>
      </div>
    </section>
  );
}
