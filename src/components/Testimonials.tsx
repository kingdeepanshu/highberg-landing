import React from 'react';
import { StarIcon } from './Icons';

const testimonials = [
  { name: "Vikas Bishnoi", text: "Best gym in Sirsa hands down. The equipment is top notch and the vibe is very motivating." },
  { name: "Anjali Mehta", text: "I was afraid to lift weights initially, but the trainers here made me feel so comfortable. Great experience!" },
  { name: "Suresh Kumar", text: "Clean, spacious, and professional. The air conditioning works great which is a must in summers." }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-16 font-logo uppercase tracking-wide">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-surface p-8 rounded-sm border border-white/5 hover:border-brand-accent/30 transition-colors">
              <div className="flex text-brand-accent mb-4">
                {[...Array(5)].map((_, idx) => (
                  <React.Fragment key={idx}>
                    <StarIcon fill="currentColor" className="w-5 h-5" />
                  </React.Fragment>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-bold text-black mr-3">
                  {t.name.charAt(0)}
                </div>
                <span className="text-white font-bold text-sm uppercase tracking-wide">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;