const features = [
  {
    num: '01',
    title: 'Personalized Design',
    desc: 'Every celebration is designed around your style, story and vision — no two events are ever the same.',
  },
  {
    num: '02',
    title: 'Attention to Detail',
    desc: 'Because the smallest details often create the biggest memories. We never overlook anything.',
  },
  {
    num: '03',
    title: 'Seamless Execution',
    desc: 'Professional coordination from planning to the final moment, so everything goes exactly as planned.',
  },
  {
    num: '04',
    title: 'Memorable Experiences',
    desc: "We don't just decorate venues. We create experiences that your guests will talk about for years.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-py bg-cream"
      aria-labelledby="why-heading"
    >
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 block">Our Promise</span>
          <h2
            id="why-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-burgundy-900 leading-tight mb-6"
          >
            Why <span className="italic font-light text-gold-500">Pineapple?</span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <div
              key={feat.num}
              className="feature-block reveal group py-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                {/* Large number */}
                <div className="font-serif text-6xl md:text-7xl font-light text-gold-400/20 leading-none flex-shrink-0 group-hover:text-gold-400/40 transition-colors duration-400 select-none">
                  {feat.num}
                </div>

                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-burgundy-900 mb-3 leading-tight group-hover:text-burgundy-700 transition-colors duration-400">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-warmgray leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
