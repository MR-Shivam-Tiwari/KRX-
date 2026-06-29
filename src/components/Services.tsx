import { Service } from '../data';
import { motion } from 'motion/react';

interface ServicesProps {
  services: Service[];
  onSelectService: (service: Service) => void;
  onAddToCart: (service: Service) => void;
  isInCart: (id: string) => boolean;
}

export default function Services({ services, onSelectService, onAddToCart, isInCart }: ServicesProps) {
  return (
    <section 
      id="services" 
      className="py-24 bg-beige-warm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header Row - Left-aligned matching Screenshot 2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15] uppercase">
              Discover Premium Essentials<br />at KRX
            </h2>
            <p className="mt-4 text-stone-600 text-sm md:text-base leading-relaxed font-light">
              Explore our curated selection of top-quality performance-driven services designed to scale your commercial output.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3 bg-terracotta hover:bg-terracotta-hover text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-colors inline-block cursor-pointer whitespace-nowrap"
            >
              Browse All Items
            </button>
          </div>
        </div>

        {/* Minimalist Grid matching Screenshot 2 (Square edges, flat layout) - Balanced 3-column grid with wide images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const added = isInCart(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group flex flex-col cursor-pointer"
                onClick={() => onSelectService(service)}
              >
                {/* Wide Landscape Flat Image Container with no shadow */}
                <div className="relative aspect-[3/2] overflow-hidden bg-stone-100 mb-4 border border-stone-200/55">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Selected Indicator Badge */}
                  {added && (
                    <div className="absolute top-3 left-3 bg-stone-900 text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
                      SELECTED
                    </div>
                  )}
                </div>

                {/* Info block - Aligned exactly like WooCommerce screenshot 2 */}
                <div className="flex justify-between items-start pt-2">
                  <h3 className="text-base font-bold text-stone-900 tracking-tight leading-snug group-hover:text-terracotta transition-colors duration-200">
                    {service.title}
                  </h3>
                  <span className="text-base font-bold text-stone-900 shrink-0 ml-4">
                    {service.price}
                  </span>
                </div>

                {/* Subtitle / Category matching the 'Uncategorized' label style */}
                <p className="text-[11px] text-stone-400 font-bold uppercase tracking-widest mt-1">
                  {service.category}
                </p>

                {/* Flat, Clean Call-To-Actions below metadata */}
                <div className="mt-4 flex items-center gap-4 text-xs font-bold tracking-wider">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service);
                    }}
                    className="text-stone-500 hover:text-stone-900 transition-colors uppercase text-[10px]"
                  >
                    View Details
                  </button>
                  <span className="text-stone-300 font-light">|</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(service);
                    }}
                    className={`transition-colors uppercase text-[10px] ${
                      added ? 'text-terracotta hover:text-stone-900' : 'text-stone-800 hover:text-terracotta'
                    }`}
                  >
                    {added ? '✓ Selected' : '+ Select'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
