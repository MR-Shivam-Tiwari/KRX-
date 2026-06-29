import { Service } from '../data';
import { X, Trash2, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Service[];
  onRemoveFromCart: (id: string) => void;
  onProceedToInquiry: () => void;
}

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveFromCart, onProceedToInquiry }: CartDrawerProps) {
  if (!isOpen) return null;

  // Calculate total monthly price
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      const priceNum = parseFloat(item.price.replace(/[$,]/g, ''));
      return acc + priceNum;
    }, 0);
    return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-stone-100 flex items-center justify-between">
            <h3 className="text-sm font-black tracking-widest text-stone-900 uppercase">
              Inquiry Bundle ({cartItems.length})
            </h3>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-stone-50 text-stone-400 hover:text-stone-700 transition-colors focus:outline-none cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 px-4">
                <div className="p-4 rounded-full bg-beige-warm text-terracotta mb-4">
                  <X className="h-6 w-6" />
                </div>
                <h4 className="text-sm font-bold text-stone-900">Your bundle is empty</h4>
                <p className="text-xs text-stone-500 mt-2 max-w-xs leading-relaxed">
                  Select premium services from our expert listings to assemble your bespoke growth package.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs tracking-wider uppercase rounded-full transition-colors"
                >
                  Browse Items
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-4 rounded-xl border border-stone-100 bg-stone-50/50 flex items-start gap-4 transition-all hover:border-stone-200"
                  >
                    <div className="h-16 w-16 rounded-lg overflow-hidden bg-stone-200 shrink-0 border border-stone-200/50">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 truncate tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-stone-400 font-semibold mt-0.5">
                        {item.category}
                      </p>
                      <div className="text-xs font-bold text-stone-900 mt-2">
                        {item.price} <span className="text-[9px] font-normal text-stone-400">/ project</span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="p-1 text-stone-300 hover:text-red-500 rounded transition-colors cursor-pointer"
                      title="Remove from bundle"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Calculations and Proceed button */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-100 px-6 py-6 bg-stone-50/50 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-500 font-semibold tracking-wide uppercase">
                  Est. Total Project Value
                </span>
                <span className="text-lg font-extrabold text-stone-900">
                  {calculateTotal()}
                </span>
              </div>
              <p className="text-[10px] text-stone-400 leading-relaxed font-medium">
                Note: Standard corporate services operate on milestone deliverables. No payments are processed on this layout.
              </p>

              <button
                onClick={onProceedToInquiry}
                className="w-full py-4 bg-terracotta hover:bg-terracotta-hover text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg shadow-terracotta/10 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                Proceed to Inquiry
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
