import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { SERVICES, Service } from './data';

// Component Imports
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ServiceDetailModal from './components/ServiceDetailModal';
import Footer from './components/Footer';

export default function App() {
  // Current active inquiry item
  const [cartItems, setCartItems] = useState<Service[]>([]);

  // Detail Modal state
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Smooth scroll helper
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquire = (service: Service) => {
    setCartItems([service]);
    setSelectedService(null);
    setTimeout(() => {
      handleScrollToSection('contact');
    }, 100);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="relative min-h-screen bg-white text-stone-900 selection:bg-terracotta/20 selection:text-terracotta">
      
      {/* Header / Navigation */}
      <Header 
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Sections */}
      <main>
        
        {/* Section 1: Hero Banner (Vibrant abstract mural overlay) */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Section 2: Services Grid (Beige warm background, minimal product cards) */}
        <Services 
          services={SERVICES}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* Section 3: Centered Testimonials Grid (White background, stars, avatars) */}
        <Testimonials />

        {/* Section 4: Contact & Office Image Split (Beige warm background, form + digital hub boardroom) */}
        <Contact 
          preselectedServices={cartItems.map(item => item.title)}
          onClearPreselectedServices={handleClearCart}
        />

      </main>

      {/* Footer (Clean corporate site footer) */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Overlays / Slide-overs */}
      <AnimatePresence>
        {/* Interactive Service Detail modal overlay */}
        {selectedService && (
          <ServiceDetailModal 
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onInquire={handleInquire}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
