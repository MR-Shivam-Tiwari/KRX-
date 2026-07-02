import { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  preselectedServices: string[];
  onClearPreselectedServices: () => void;
}

export default function Contact({ preselectedServices, onClearPreselectedServices }: ContactProps) {
  const emailAddress = "info@krxservices.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoUrl = preselectedServices.length > 0 
    ? `mailto:${emailAddress}?subject=Inquiry regarding ${encodeURIComponent(preselectedServices[0])}&body=Hi KRX Team,%0A%0AI would like to discuss: ${encodeURIComponent(preselectedServices[0])}.`
    : `mailto:${emailAddress}?subject=Project Consultation with KRX`;

  return (
    <section 
      id="contact" 
      className="py-24 bg-white border-t border-stone-200"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        
        <span className="text-terracotta text-xs font-bold tracking-[0.25em] uppercase block mb-4">
          Contact us
        </span>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight uppercase mb-6">
          Let's Work Together
        </h2>
        
        <p className="text-stone-600 text-sm font-light leading-relaxed mb-10 max-w-md mx-auto">
          Interested in a growth partnership or consulting with a specialist? Reach out directly via email. We read every message and respond within 12 business hours.
        </p>

        {/* Selected Service Context Alert */}
        <AnimatePresence>
          {preselectedServices.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-8 inline-flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-full px-4 py-1.5 text-xs text-stone-700"
            >
              <span>Interested in: <span className="font-bold text-stone-900">{preselectedServices[0]}</span></span>
              <button 
                onClick={onClearPreselectedServices}
                className="text-[10px] uppercase font-bold text-stone-400 hover:text-stone-900 ml-1 underline cursor-pointer"
              >
                Clear
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary Email Link */}
        <div className="mb-10">
          <a 
            href={mailtoUrl}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 hover:text-terracotta transition-colors tracking-tight font-mono inline-block border-b-2 border-stone-950/10 hover:border-terracotta pb-1"
          >
            {emailAddress}
          </a>
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-center gap-6 text-xs font-bold tracking-[0.2em] uppercase">
          <a 
            href={mailtoUrl}
            className="text-stone-800 hover:text-terracotta transition-colors flex items-center gap-1 cursor-pointer py-2"
          >
            <span>Send Email</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          
          <span className="text-stone-300">|</span>
          
          <button 
            onClick={handleCopy}
            className="text-stone-800 hover:text-terracotta transition-colors cursor-pointer py-2 flex items-center gap-1.5"
          >
            {copied ? (
              <span className="text-emerald-600">Copied</span>
            ) : (
              <span>Copy Address</span>
            )}
          </button>
        </div>

        <p className="text-[11px] text-stone-400 font-medium mt-12 uppercase tracking-wider">
          Direct Specialist Inbox • No automated queues
        </p>

      </div>
    </section>
  );
}
