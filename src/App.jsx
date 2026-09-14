import { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Services      from './components/Services';
import Gallery       from './components/Gallery';
import FeaturedEvent from './components/FeaturedEvent';
import WhyChooseUs   from './components/WhyChooseUs';
import Process       from './components/Process';
import Testimonials  from './components/Testimonials';
import CTA           from './components/CTA';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  // Wire up global scroll reveal animations
  useScrollReveal();

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <FeaturedEvent />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}
