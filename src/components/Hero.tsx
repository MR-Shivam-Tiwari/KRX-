import { motion } from 'motion/react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900"
    >
      {/* High-Quality Premium Architectural Glass Reflection Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Premium Corporate Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-[12000ms] ease-out scale-105 select-none opacity-85 grayscale-[15%]"
        />
        {/* Balanced elegant dark overlay mask for premium contrast and readability */}
        <div className="absolute inset-0 bg-stone-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Subtle premium accent pill */}
          <span className="text-stone-300 font-bold tracking-[0.25em] text-[10px] uppercase mb-8 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
            Welcome to KRX Services
          </span>

          {/* Centered Large Title - Matching Screenshot 1 perfectly */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[1.05] tracking-tight max-w-4xl select-none uppercase">
            Explore Our<br />
            Expertly Curated<br />
            Selection
          </h1>
          
          <p className="mt-8 text-stone-200 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed tracking-wide">
            Unlocking premium, high-ticket client acquisition pipelines and conversion engineering with expertly crafted aesthetic solutions.
          </p>

          {/* Elegant pill-shaped CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onScrollToSection('services')}
              className="px-8 py-4 bg-terracotta hover:bg-terracotta-hover text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-black/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Services
            </button>
            <button
              onClick={() => onScrollToSection('contact')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Specialist
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle down scroll indicator */}
      <div 
        onClick={() => onScrollToSection('services')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 z-20"
      >
        <span className="text-[10px] font-bold text-white tracking-[0.25em] uppercase">Scroll Down</span>
        <svg className="w-5 h-5 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
