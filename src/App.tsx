import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { SERVICES, Service } from './data';

// Component Imports
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CartDrawer from './components/CartDrawer';
import ServiceDetailModal from './components/ServiceDetailModal';
import Footer from './components/Footer';

export default function App() {
  // Cart state (Inquiry bundle)
  const [cartItems, setCartItems] = useState<Service[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Detail Modal state
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Smooth scroll helper
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle selection of service in cart
  const handleAddToCart = (service: Service) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === service.id);
    if (isAlreadyInCart) {
      setCartItems((prev) => prev.filter((item) => item.id !== service.id));
    } else {
      setCartItems((prev) => [...prev, service]);
    }
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleProceedToInquiry = () => {
    setIsCartOpen(false);
    setTimeout(() => {
      handleScrollToSection('contact');
    }, 200);
  };

  const isInCart = (id: string) => cartItems.some((item) => item.id === id);

  return (
    <div className="relative min-h-screen bg-white text-stone-900 selection:bg-terracotta/20 selection:text-terracotta">
      
      {/* Header / Navigation */}
      <Header 
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
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
          onAddToCart={handleAddToCart}
          isInCart={isInCart}
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
        {/* Slide-over Right Cart Drawer */}
        {isCartOpen && (
          <CartDrawer 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
            onProceedToInquiry={handleProceedToInquiry}
          />
        )}

        {/* Interactive Service Detail modal overlay */}
        {selectedService && (
          <ServiceDetailModal 
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onAddToCart={handleAddToCart}
            isInCart={isInCart(selectedService.id)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
