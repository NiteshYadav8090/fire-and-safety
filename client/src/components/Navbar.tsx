
import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Menu, Phone, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'projects', label: 'Our Work' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => handleLinkClick('home')}
        >
          <div className="bg-red-600 p-2.5 rounded-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
            <ShieldCheck className="text-white w-7 h-7" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={`text-xl md:text-2xl font-black tracking-tighter text-blue-900`}>
              ZED-KING
            </span>
            <span className="text-[10px] md:text-xs font-bold text-red-600 tracking-[0.2em] uppercase">
              Fire and Safety
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-bold text-sm uppercase tracking-widest transition-all hover:text-red-600 relative py-2 group ${
                activePage === link.id ? 'text-red-600' : 'text-blue-900'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform origin-left transition-transform duration-300 ${activePage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/30 hover:-translate-y-1"
          >
            Get Expert Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-blue-900" /> : <Menu className="text-blue-900" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white fixed inset-0 z-[100] flex flex-col p-8 space-y-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-blue-900 leading-none">ZED-KING</span>
              <span className="text-xs font-bold text-red-600 tracking-wider">Fire and Safety</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full"><X className="text-blue-900" /></button>
          </div>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-left font-black text-3xl flex items-center justify-between ${activePage === link.id ? 'text-red-600' : 'text-blue-900'}`}
            >
              {link.label} <ChevronRight className="opacity-30" />
            </button>
          ))}
          <div className="pt-8 space-y-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center text-blue-900 font-bold text-lg"><Phone className="mr-3 text-red-600" /> {CONTACT_INFO.phone}</a>
            <button onClick={() => handleLinkClick('contact')} className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-xl shadow-2xl">Book Free Visit</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
