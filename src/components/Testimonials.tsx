import { TESTIMONIALS } from '../data';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-white border-y border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Centered Heading Block matching Screenshot 3 */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Discover Top Products Effortlessly
          </h2>
          <p className="mt-4 text-stone-500 text-sm md:text-base leading-relaxed">
            Hear directly from our customers about their positive experiences and satisfaction with KRX's offerings.
          </p>
        </div>

        {/* 3-Column Testimonial Layout matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Star Rating Block */}
              <div className="flex items-center gap-1 mb-6 text-[#8c4f3e]">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 fill-current stroke-current" 
                  />
                ))}
              </div>

              {/* Quote Block */}
              <blockquote className="text-stone-700 text-sm md:text-base font-medium leading-relaxed mb-8 flex-1 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Profile Block */}
              <div className="flex flex-col items-center mt-auto">
                <div className="h-14 w-14 rounded-full overflow-hidden mb-3 border-2 border-stone-100 shadow-sm">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="text-sm font-bold text-stone-900 tracking-tight">
                  {testimonial.name}
                </h4>
                <span className="text-xs text-stone-500 font-semibold mt-1">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
