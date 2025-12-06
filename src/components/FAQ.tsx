import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const faqs = [
  { q: "What are your gym timings?", a: "We are open from 5:00 AM to 10:00 PM, Monday to Saturday. Sunday timing is 6:00 AM to 12:00 PM." },
  { q: "Do you offer personal training?", a: "Yes, we have certified personal trainers available for 1-on-1 coaching to help you achieve faster results." },
  { q: "Is there a diet plan included?", a: "All quarterly and annual memberships come with a complementary customized diet consultation every month." },
  { q: "Can I freeze my membership?", a: "Yes, annual members can freeze their membership for up to 30 days in case of travel or medical reasons." },
  { q: "Do you have separate timings for ladies?", a: "We have a mixed gym environment with a strict code of conduct, but we do offer a dedicated ladies-only batch in the afternoon (12 PM - 3 PM)." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-logo uppercase tracking-wide">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-brand-surface border border-white/10 rounded-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-bold">{item.q}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-brand-accent' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-0">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;