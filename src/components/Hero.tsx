import React from 'react';
import { StarIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="inline-block px-4 py-1 border-l-4 border-brand-accent pl-4">
            <span className="text-brand-accent text-sm font-bold tracking-widest uppercase">
              Sirsa's Premium Fitness Destination
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight uppercase font-logo tracking-wide">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">
              Legacy
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Experience the raw power of <strong>Highberg Fitness</strong>. Premium equipment, expert coaching, and an atmosphere forged for champions.
          </p>

          <div className="p-4 bg-orange-900/20 border border-brand-accent/30 rounded inline-block">
            <p className="text-brand-accent font-bold uppercase text-sm tracking-wide">
              🔥 Limited Offer: Get 20% OFF on 3-Month Membership!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded bg-brand-accent text-white font-bold text-center hover:bg-brand-accentHover transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)] uppercase tracking-wider"
            >
              Book Free Trial
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 rounded border border-white/20 text-white font-bold text-center hover:bg-white/10 hover:border-brand-accent hover:text-brand-accent transition-all uppercase tracking-wider"
            >
              View Plans
            </a>
          </div>
        </div>

        {/* Right Content - Stats Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-full max-w-md">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl filter"></div>
            
            <div className="relative bg-brand-surface border border-white/10 rounded-sm p-6 md:p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded bg-brand-accent flex items-center justify-center text-3xl font-logo text-black shadow-lg">
                  H
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Highberg</h3>
                  <div className="flex items-center text-brand-accent text-sm mt-1">
                    <StarIcon fill="currentColor" className="w-4 h-4 mr-1" />
                    <span className="font-bold">4.9</span>
                    <span className="text-gray-500 ml-1 uppercase text-xs font-semibold">(500+ Reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border-b border-white/5">
                  <span className="text-gray-400 uppercase text-xs font-bold tracking-wider">Active Members</span>
                  <span className="text-white font-bold text-xl font-mono">500+</span>
                </div>
                <div className="flex justify-between items-center p-3 border-b border-white/5">
                  <span className="text-gray-400 uppercase text-xs font-bold tracking-wider">Certified Trainers</span>
                  <span className="text-white font-bold text-xl font-mono">12</span>
                </div>
                <div className="flex justify-between items-center p-3">
                  <span className="text-gray-400 uppercase text-xs font-bold tracking-wider">Opening Hours</span>
                  <span className="text-brand-accent font-bold text-sm">5:00 AM - 10:00 PM</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-brand-accent/20">
                <p className="text-sm text-gray-400 text-center italic">
                  "Makes You Fit."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;