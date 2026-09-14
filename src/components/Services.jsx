import {
  CalendarCheck,
  Sparkles,
  Flower2,
  UtensilsCrossed,
  Heart,
  Building2,
  Crown,
  ClipboardList,
} from 'lucide-react';

const services = [
  {
    num: '01',
    icon: CalendarCheck,
    title: 'Wedding Planning',
    desc: 'Complete wedding planning and coordination tailored to your vision — from the first idea to the final moment.',
  },
  {
    num: '02',
    icon: Sparkles,
    title: 'Wedding Decoration',
    desc: 'Beautiful stage, venue and mandap designs crafted around your celebration with impeccable attention to detail.',
  },
  {
    num: '03',
    icon: Flower2,
    title: 'Floral Decoration',
    desc: 'Elegant floral arrangements that bring warmth, color and romance to every corner of your venue.',
  },
  {
    num: '04',
    icon: UtensilsCrossed,
    title: 'Catering & Dining',
    desc: 'Delicious food, elegant dining arrangements and professional catering management for unforgettable feasts.',
  },
  {
    num: '05',
    icon: Heart,
    title: 'Reception & Engagement',
    desc: 'Memorable setups for receptions, engagements and special celebrations that create lasting impressions.',
  },
  {
    num: '06',
    icon: Building2,
    title: 'Venue Styling',
    desc: 'Transforming ordinary venues into stunning spaces designed beautifully for your special occasion.',
  },
  {
    num: '07',
    icon: Crown,
    title: 'Stage & Mandap Design',
    desc: 'Custom-designed stages and mandaps that become the breathtaking centerpiece of your celebration.',
  },
  {
    num: '08',
    icon: ClipboardList,
    title: 'Complete Event Management',
    desc: 'End-to-end event coordination so you can enjoy every precious moment of your special day stress-free.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-py bg-burgundy-950"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 block">What We Offer</span>
          <h2
            id="services-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Every Detail.<br />
            <span className="italic font-light text-gold-400">Beautifully Planned.</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="font-sans text-white/50 text-base max-w-lg mx-auto leading-relaxed">
            From the first idea to the final celebration, we take care of every detail.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.num}
                className="service-card reveal bg-white/3 p-8 group cursor-default"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Number */}
                <div className="font-serif text-4xl font-light text-gold-400/20 leading-none mb-4 group-hover:text-gold-400/40 transition-colors duration-400">
                  {svc.num}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-gold-400/30 group-hover:border-gold-400 transition-colors duration-400 mb-6">
                  <Icon
                    size={20}
                    className="text-gold-400/70 group-hover:text-gold-400 transition-colors duration-400"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-white mb-3 leading-tight group-hover:text-gold-300 transition-colors duration-400">
                  {svc.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-gold-400/30 group-hover:w-16 group-hover:bg-gold-400 transition-all duration-400 mb-4" />

                {/* Description */}
                <p className="font-sans text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-400">
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
