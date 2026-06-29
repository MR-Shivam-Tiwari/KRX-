import { Rocket } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="bg-white border-t border-stone-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <button 
              onClick={() => onScrollToSection('hero')} 
              className="flex items-center gap-2.5 text-stone-900 focus:outline-none cursor-pointer"
            >
              <div className="p-1.5 rounded-full bg-terracotta text-white">
                <Rocket className="h-4 w-4" />
              </div>
              <span className="text-base font-extrabold tracking-widest">
                KRX
              </span>
            </button>
            <p className="text-stone-500 text-xs leading-relaxed max-w-xs font-light">
              Providing premium, high-converting digital service frameworks and client acquisition design pipelines for ambitious brands worldwide.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-stone-800 tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => onScrollToSection('hero')}
                  className="text-stone-500 hover:text-terracotta text-xs font-medium cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('services')}
                  className="text-stone-500 hover:text-terracotta text-xs font-medium cursor-pointer"
                >
                  Curated Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('testimonials')}
                  className="text-stone-500 hover:text-terracotta text-xs font-medium cursor-pointer"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('contact')}
                  className="text-stone-500 hover:text-terracotta text-xs font-medium cursor-pointer"
                >
                  Initiate Partnership
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Premium Offers */}
          <div>
            <h4 className="text-xs font-bold text-stone-800 tracking-wider uppercase mb-4">
              Our Essentials
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-500 font-medium">
              <li className="hover:text-terracotta transition-colors cursor-pointer" onClick={() => onScrollToSection('services')}>
                Premium Growth Accelerator
              </li>
              <li className="hover:text-terracotta transition-colors cursor-pointer" onClick={() => onScrollToSection('services')}>
                Website Conversion Overhaul
              </li>
              <li className="hover:text-terracotta transition-colors cursor-pointer" onClick={() => onScrollToSection('services')}>
                Performance SEO Engine
              </li>
              <li className="hover:text-terracotta transition-colors cursor-pointer" onClick={() => onScrollToSection('services')}>
                Paid Social & PPC Strategy
              </li>
            </ul>
          </div>

          {/* Column 4: Standards */}
          <div>
            <h4 className="text-xs font-bold text-stone-800 tracking-wider uppercase mb-4">
              Legal & Delivery
            </h4>
            <p className="text-stone-500 text-xs leading-relaxed font-light">
              Deliverables are governed by mutual master service agreements (MSA). All project scopes include revisions and analytics dashboard integrations.
            </p>
          </div>

        </div>

        {/* Bottom divider and copyright */}
        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px] text-stone-400 font-medium">
          <div>
            © {new Date().getFullYear()} KRX Services. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-600 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-600 cursor-pointer">Privacy Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
