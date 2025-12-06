import React from 'react';
import { CheckIcon } from './Icons';

const plans = [
  {
    name: "Monthly",
    price: "₹1,500",
    period: "/month",
    features: ["Unlimited Gym Access", "General Workout Plan", "Locker Access", "Free WiFi"],
    recommended: false
  },
  {
    name: "Quarterly Transformation",
    price: "₹4,000",
    period: "/3 months",
    features: ["All Monthly Features", "Personalized Diet Plan", "Weekly Progress Check", "1 Personal Training Session"],
    recommended: true
  },
  {
    name: "Annual Beast Mode",
    price: "₹12,000",
    period: "/year",
    features: ["All Quarterly Features", "Advanced Supplement Guide", "Priority Support", "Free Highberg T-Shirt"],
    recommended: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-logo uppercase tracking-wide">Membership Plans</h2>
           <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Flexible plans designed for every budget and goal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-sm border transition-transform duration-300 ${
                plan.recommended
                  ? 'bg-brand-surface border-brand-accent shadow-[0_0_30px_rgba(234,88,12,0.15)] transform md:-translate-y-4 z-10'
                  : 'bg-black border-white/10 hover:border-white/30'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white text-xs font-bold px-6 py-2 uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-xl font-bold uppercase tracking-wide mb-2 ${plan.recommended ? 'text-brand-accent' : 'text-white'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-extrabold text-white font-sans">{plan.price}</span>
                <span className="text-gray-500 ml-2 text-sm font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-5 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 rounded-sm font-bold text-center uppercase tracking-widest transition-all ${
                  plan.recommended
                    ? 'bg-brand-accent text-white hover:bg-brand-accentHover shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;