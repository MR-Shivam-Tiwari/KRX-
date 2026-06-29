import { useState, FormEvent, useEffect } from 'react';
import { CheckCircle2, AlertCircle, History, Trash2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  preselectedServices: string[];
  onClearPreselectedServices: () => void;
}

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  services: string[];
  date: string;
}

export default function Contact({ preselectedServices, onClearPreselectedServices }: ContactProps) {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Local storage inquiries history
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('krx_inquiries');
      if (stored) {
        setInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading inquiries', e);
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim()) {
      setSubmitError('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    // Simulate API call
    setTimeout(() => {
      try {
        const newInquiry: Inquiry = {
          id: 'inquiry-' + Date.now(),
          name,
          email,
          subject,
          message,
          services: [...preselectedServices],
          date: new Date().toLocaleString()
        };

        const updated = [newInquiry, ...inquiries];
        localStorage.setItem('krx_inquiries', JSON.stringify(updated));
        setInquiries(updated);

        setSubmitSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        onClearPreselectedServices();
      } catch (err) {
        setSubmitError('Failed to save inquiry. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }, 1200);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter(i => i.id !== id);
    localStorage.setItem('krx_inquiries', JSON.stringify(updated));
    setInquiries(updated);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-beige-warm border-t border-stone-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Flat, clean contact form matching Screenshot 3 perfectly */}
          <div className="lg:col-span-6">
            <div className="mb-10">
              <span className="text-terracotta text-xs font-bold tracking-[0.25em] uppercase">
                Let's Partner Up
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mt-2 uppercase">
                Initiate Your Project
              </h3>
              <p className="text-stone-600 text-sm font-light mt-3 leading-relaxed">
                Submit your inquiry details below. Our specialists will review your project parameters and respond within 12 business hours.
              </p>
            </div>

            {/* Selected items notification */}
            {preselectedServices.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-5 bg-white border border-stone-200"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-stone-800 tracking-wider uppercase">
                    Selected Items for Inquiry ({preselectedServices.length}):
                  </span>
                  <button 
                    onClick={onClearPreselectedServices}
                    className="text-[11px] text-terracotta hover:underline font-bold uppercase tracking-wider"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {preselectedServices.map(service => (
                    <span key={service} className="text-[10px] font-bold bg-stone-100 text-stone-700 px-3 py-1 border border-stone-200/60 uppercase tracking-wider">
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 text-xs rounded-none flex items-center gap-2 border border-red-100">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Success Message */}
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 text-center bg-white border border-stone-200 flex flex-col items-center"
              >
                <CheckCircle2 className="h-12 w-12 text-terracotta mb-4" />
                <h4 className="text-lg font-bold text-stone-900 uppercase tracking-wide">Inquiry Received</h4>
                <p className="text-xs text-stone-500 mt-3 max-w-sm leading-relaxed">
                  Thank you for reaching out. We have logged your parameters and will reply within 12 business hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 text-xs text-terracotta font-bold hover:underline uppercase tracking-widest"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Your name */}
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold text-stone-700 tracking-[0.2em] uppercase mb-2">
                    Your name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-white border border-stone-200 focus:border-stone-900 px-4 py-3.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* Your email */}
                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold text-stone-700 tracking-[0.2em] uppercase mb-2">
                    Your email <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full bg-white border border-stone-200 focus:border-stone-900 px-4 py-3.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[11px] font-bold text-stone-700 tracking-[0.2em] uppercase mb-2">
                    Subject <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Redesign, custom consultation"
                    required
                    className="w-full bg-white border border-stone-200 focus:border-stone-900 px-4 py-3.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* Your message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold text-stone-700 tracking-[0.2em] uppercase mb-2">
                    Your message (optional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your goals, current metrics, or timeline..."
                    rows={4}
                    className="w-full bg-white border border-stone-200 focus:border-stone-900 px-4 py-3.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-terracotta hover:bg-terracotta-hover disabled:bg-stone-400 text-white font-bold text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-terracotta/10"
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Message'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            )}

            {/* Submission History feature */}
            {inquiries.length > 0 && (
              <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-light">
                  {inquiries.length} saved local inquiry record{inquiries.length > 1 ? 's' : ''}
                </span>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="text-xs text-stone-700 hover:text-terracotta font-bold flex items-center gap-1.5 focus:outline-none cursor-pointer uppercase tracking-wider"
                >
                  {showHistory ? 'Hide Records' : 'View Records'}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sharp, pristine corporate office/visualization block, matching Screenshot 3 */}
          <div className="lg:col-span-6 flex flex-col h-full justify-between">
            <div className="relative aspect-[4/3] lg:aspect-[1.15] border border-stone-200 bg-stone-900 overflow-hidden">
              {/* High-end office meeting illustration matching the 'DIGITAL HUB' visual theme */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="KRX Corporate Boardroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-950/20" />
            </div>

            {/* Location details below photo - clean & authentic */}
            <div className="mt-6 border-l-2 border-terracotta pl-4">
              <h4 className="text-xs font-bold text-stone-900 tracking-[0.15em] uppercase">
                KRX Headquarters
              </h4>
              <p className="text-stone-500 text-xs mt-1 font-light">
                Central Corporate Suite • Global Interface Network
              </p>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 border border-stone-200">
                <span className="text-[10px] font-bold text-stone-400 tracking-wider block uppercase">
                  Direct Inquiries
                </span>
                <span className="text-xs font-bold text-stone-800 mt-1 block">
                  hello@krxagency.com
                </span>
              </div>
              <div className="bg-white p-6 border border-stone-200">
                <span className="text-[10px] font-bold text-stone-400 tracking-wider block uppercase">
                  Active Hours
                </span>
                <span className="text-xs font-bold text-stone-800 mt-1 block">
                  Mon - Fri • 9am - 6pm UTC
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Local Inquiries History Slide Out / Overlay */}
        <AnimatePresence>
          {showHistory && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 bg-white p-6 md:p-8 border border-stone-200 overflow-hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xs font-bold tracking-wider text-stone-900 uppercase">
                  Your Submitted Inquiry Records (Local Device Only)
                </h4>
                <button 
                  onClick={() => {
                    localStorage.removeItem('krx_inquiries');
                    setInquiries([]);
                    setShowHistory(false);
                  }}
                  className="text-xs text-stone-400 hover:text-red-500 flex items-center gap-1 font-semibold uppercase tracking-wider"
                >
                  <Trash2 className="h-3 w-3" />
                  Clear All History
                </button>
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-4 bg-stone-50 border border-stone-200 flex flex-col md:flex-row md:items-start justify-between gap-4 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900">{inq.name}</span>
                        <span className="text-stone-400 font-semibold">•</span>
                        <span className="text-stone-500">{inq.email}</span>
                      </div>
                      <div className="mt-1 font-bold text-stone-800">
                        Subject: <span className="font-medium text-stone-600">{inq.subject}</span>
                      </div>
                      {inq.message && (
                        <p className="mt-2 text-stone-500 leading-relaxed font-light italic">
                          "{inq.message}"
                        </p>
                      )}
                      {inq.services && inq.services.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {inq.services.map(s => (
                            <span key={s} className="bg-stone-200/60 text-stone-700 px-2 py-0.5 rounded text-[9px] font-bold">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-stone-400 block font-medium">
                        {inq.date}
                      </span>
                      <button
                        onClick={() => handleDeleteInquiry(inq.id)}
                        className="text-[10px] text-red-400 hover:text-red-600 font-bold mt-2 hover:underline inline-block cursor-pointer"
                      >
                        Delete Record
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
