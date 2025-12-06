import React from 'react';
import { WhatsAppIcon } from './Icons';

const FloatingButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
      aria-label="Join on WhatsApp"
    >
      <span className="mr-3 px-3 py-1.5 bg-white text-brand-darker text-sm font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        Join on WhatsApp
      </span>
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <WhatsAppIcon className="w-8 h-8 fill-current" />
      </div>
    </a>
  );
};

export default FloatingButton;