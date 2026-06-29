import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (id: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white shadow-sm border-b border-stone-100 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo matching the screenshots */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 focus:outline-none cursor-pointer"
        >
          {/* Circular logo with a premium wave graphic, matching Screenshot 2 */}
          <div className="h-8 w-8 rounded-full bg-stone-900 flex items-center justify-center overflow-hidden relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-emerald-400 to-orange-400 opacity-85 mix-blend-color-dodge animate-pulse" />
            <svg className="w-4 h-4 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
          </div>
          <span className={`text-sm sm:text-base font-extrabold tracking-[0.25em] uppercase transition-colors duration-300 ${
            isScrolled || mobileMenuOpen ? 'text-stone-900' : 'text-white'
          }`}>
            KRX
          </span>
        </button>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-12">
          <button
            onClick={() => handleNavClick('hero')}
            className={`text-xs font-bold tracking-[0.2em] transition-colors cursor-pointer ${
              isScrolled ? 'text-stone-600 hover:text-terracotta' : 'text-white/80 hover:text-white'
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`text-xs font-bold tracking-[0.2em] transition-colors cursor-pointer ${
              isScrolled ? 'text-stone-600 hover:text-terracotta' : 'text-white/80 hover:text-white'
            }`}
          >
            SERVICES
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-xs font-bold tracking-[0.2em] transition-colors cursor-pointer ${
              isScrolled ? 'text-stone-600 hover:text-terracotta' : 'text-white/80 hover:text-white'
            }`}
          >
            CONTACT
          </button>
        </nav>

        {/* Right Button - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('services')}
            className={`px-7 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
              isScrolled 
                ? 'bg-terracotta hover:bg-terracotta-hover text-white' 
                : 'bg-white hover:bg-stone-50 text-stone-900'
            }`}
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile Hamburger / Cart Control */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full ${
              isScrolled || mobileMenuOpen ? 'text-stone-700' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Restored original simple layout with gap fix */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-30 flex flex-col justify-between p-8 border-t border-stone-100">
          <div className="flex flex-col gap-6">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left text-sm font-bold tracking-[0.2em] text-stone-800 hover:text-terracotta py-2 cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left text-sm font-bold tracking-[0.2em] text-stone-800 hover:text-terracotta py-2 cursor-pointer"
            >
              SERVICES
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left text-sm font-bold tracking-[0.2em] text-stone-800 hover:text-terracotta py-2 cursor-pointer"
            >
              CONTACT
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('services')}
              className="w-full text-center bg-terracotta hover:bg-terracotta-hover text-white py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer"
            >
              Inquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
