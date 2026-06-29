import { Service } from '../data';
import { X, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onInquire: (service: Service) => void;
}

export default function ServiceDetailModal({ service, onClose, onInquire }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
      >
        {/* Banner Image */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-stone-100">
          <img 
            src={service.image} 
            alt={service.title} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-stone-800 p-1.5 rounded-full shadow-md hover:scale-105 transition-all focus:outline-none cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Heading content positioned over dark gradient bottom of image */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-bold text-white/80 bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20 uppercase tracking-widest inline-block">
              {service.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-2 leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Service Meta Row */}
          <div className="flex justify-between items-center bg-stone-50 p-4 rounded-xl border border-stone-100">
            <div>
              <span className="text-[10px] font-bold text-stone-400 tracking-wider uppercase block">
                Service Level
              </span>
              <span className="text-sm font-bold text-stone-800 mt-0.5 block">
                Premium Bespoke Framework
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-bold text-stone-400 tracking-wider uppercase block">
                Est. Duration
              </span>
              <span className="text-xs font-bold text-stone-800 mt-0.5 block">
                30 - 45 Days Delivery
              </span>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold text-stone-800 tracking-wider uppercase mb-2">
              Overview & Scope
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
              {service.fullDesc}
            </p>
          </div>

          {/* Deliverables / Checklist */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-stone-800 tracking-wider uppercase mb-3">
                Key Strategic Deliverables
              </h4>
              <ul className="space-y-2.5">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-stone-700">
                    <span className="p-0.5 bg-beige-warm text-terracotta rounded-full shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3px]" />
                    </span>
                    <span className="leading-relaxed font-medium">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Bottom Action Footer */}
        <div className="p-6 border-t border-stone-100 bg-stone-50/50 flex items-center justify-center">
          <button
            onClick={() => onInquire(service)}
            className="w-full py-4 bg-terracotta hover:bg-terracotta-hover text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-colors cursor-pointer text-center shadow-md shadow-terracotta/10 hover:shadow-terracotta/20"
          >
            Inquire About This Service
          </button>
        </div>
      </motion.div>
    </div>
  );
}
