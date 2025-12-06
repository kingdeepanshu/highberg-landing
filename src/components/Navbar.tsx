import React, { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Plans', href: '#pricing' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            {/* Logo text mimicking the image */}
            <div className="flex flex-col leading-none">
                <span className="font-logo text-2xl md:text-3xl text-white tracking-widest drop-shadow-md group-hover:text-brand-accent transition-colors">
                    HIGH BERG
                </span>
                <span className="text-[0.6rem] md:text-xs font-bold text-brand-accent tracking-[0.2em] text-center uppercase -mt-1">
                    Fitness Club
                </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors duration-200 uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-transform hover:scale-105 shadow-[0_0_15px_rgba(234,88,12,0.5)] uppercase tracking-wider"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-brand-accent focus:outline-none transition-colors"
            >
              {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-surface border-t border-white/10 absolute w-full left-0 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-bold text-slate-300 hover:text-brand-accent hover:bg-white/5 uppercase tracking-wide border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-6 px-5 py-4 rounded bg-brand-accent text-white font-bold uppercase tracking-wider shadow-lg"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;