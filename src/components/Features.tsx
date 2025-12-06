import React from 'react';
import { DumbbellIcon, UsersIcon, ScaleIcon, MedalIcon } from './Icons';

const features = [
  {
    icon: <UsersIcon className="w-8 h-8 text-brand-accent" />,
    title: "Certified Trainers",
    description: "Expert guidance from certified professionals to help you reach your goals safely."
  },
  {
    icon: <DumbbellIcon className="w-8 h-8 text-brand-accent" />,
    title: "Modern Equipment",
    description: "Top-tier machinery and free weights for a complete bodybuilding experience."
  },
  {
    icon: <ScaleIcon className="w-8 h-8 text-brand-accent" />,
    title: "Diet & Nutrition",
    description: "Customized meal plans designed to complement your workout regime."
  },
  {
    icon: <MedalIcon className="w-8 h-8 text-brand-accent" />,
    title: "Supplements Store",
    description: "Authentic supplements and guidance available right at the front desk."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-darker relative">
       {/* Background accent */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase font-logo tracking-wide">Why Highberg?</h2>
          <div className="h-1 w-24 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We provide everything you need to succeed, from expert coaching to a motivating environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brand-surface border border-white/5 rounded-sm p-8 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-brand-accent/30 group"
            >
              <div className="w-16 h-16 rounded bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-accent transition-colors shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;