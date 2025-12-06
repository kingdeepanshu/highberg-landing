import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-bold text-white tracking-widest font-logo">
              HIGH BERG
            </span>
             <p className="text-xs text-brand-accent uppercase tracking-[0.3em] font-bold mt-1">Fitness Club</p>
          </div>
          
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-brand-accent transition-colors uppercase tracking-wider text-xs font-bold">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors uppercase tracking-wider text-xs font-bold">Terms & Conditions</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Highberg Fitness. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;