import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from './Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', slot: 'Morning', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', phone: '', slot: 'Morning', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-brand-darker relative">
       <div className="absolute inset-0 bg-brand-surface/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 font-logo uppercase tracking-wide">Visit Highberg</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-black p-8 md:p-10 rounded-sm border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide border-l-4 border-brand-accent pl-4">Start Your Journey</h3>
            {isSubmitted ? (
              <div className="bg-brand-accent/20 border border-brand-accent text-brand-accent p-6 rounded text-center">
                <p className="font-bold text-lg">Message Sent!</p>
                <p className="text-sm mt-2">We'll call you back shortly to schedule your visit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-brand-surface border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-brand-surface border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="ENTER PHONE NUMBER"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Preferred Time Slot</label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({...formData, slot: e.target.value})}
                    className="w-full bg-brand-surface border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  >
                    <option value="Morning" className="bg-black">Morning (5AM - 11AM)</option>
                    <option value="Afternoon" className="bg-black">Afternoon (12PM - 4PM)</option>
                    <option value="Evening" className="bg-black">Evening (4PM - 10PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-brand-surface border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="Tell us about your goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-accent text-white font-bold py-4 rounded-sm hover:bg-brand-accentHover transition-colors shadow-lg shadow-brand-accent/20 uppercase tracking-widest text-sm"
                >
                  Request Call Back
                </button>
              </form>
            )}
          </div>

          {/* Map and Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-black p-10 rounded-sm border border-white/10">
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-brand-accent mr-5 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">Address</h4>
                    <p className="text-gray-400 mt-1 leading-relaxed">Highberg Fitness, Agrasain Colony, Sector 20, Sirsa, Haryana 125055</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-brand-accent mr-5 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">Phone</h4>
                    <p className="text-gray-400 mt-1">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="w-6 h-6 text-brand-accent mr-5 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">Email</h4>
                    <p className="text-gray-400 mt-1">contact@highbergfitness.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-80 rounded-sm overflow-hidden bg-brand-surface border border-white/10 relative group">
               {/* In a real app, embed Google Maps iframe here */}
               <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                 <div className="text-center">
                    <MapPinIcon className="w-10 h-10 text-brand-accent mx-auto mb-3" />
                    <p className="text-gray-500 font-bold uppercase tracking-widest">
                    Google Maps
                    </p>
                    <p className="text-gray-600 text-xs mt-1">Sirsa, Haryana</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;