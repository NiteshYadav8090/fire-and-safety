
import React from 'react';
import { ShieldCheck, ChevronRight, MapPin, Phone, Mail, Instagram, Youtube, Facebook } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '@/constants';
import logoImg from "@assets/logo.png";

const Footer = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  const handleLinkClick = (id: string) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  const socialLinks = [
    { icon: Facebook, url: CONTACT_INFO.socials.facebook, color: 'hover:bg-blue-600' },
    { icon: Instagram, url: CONTACT_INFO.socials.instagram, color: 'hover:bg-pink-600' },
    { icon: Youtube, url: CONTACT_INFO.socials.youtube, color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="bg-blue-950 text-white pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20 lg:mb-24">
          <div className="space-y-6 md:space-y-8 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
             <img src={logoImg} alt="Zed-King Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter">ZED-KING</span>
                <span className="text-[10px] font-bold text-red-600 tracking-wider">Fire and Safety</span>
              </div>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              ISO 9001:2015 certified leader in Fire Safety Engineering. We provide total peace of mind through BIS approved technologies and Grade-A expertise.
            </p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${social.color} hover:border-transparent transition-all cursor-pointer group`}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-black mb-5 md:mb-8 border-b border-white/10 pb-4">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-base">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'about', label: 'About Us' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'projects', label: 'Our Work' },
                { id: 'contact', label: 'Contact' }
              ].map(link => (
                <li key={link.id} onClick={() => handleLinkClick(link.id)} className="hover:text-red-500 transition-colors cursor-pointer flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform shrink-0" /> {link.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-black mb-5 md:mb-8 border-b border-white/10 pb-4">Major Services</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-base">
              {SERVICES.map(s => (
                <li key={s.id} onClick={() => handleLinkClick(`services#${s.id}`)} className="hover:text-red-500 transition-colors cursor-pointer">{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-black mb-5 md:mb-8 border-b border-white/10 pb-4">Official Contact</h4>
            <ul className="space-y-5 text-gray-400">
              <li className="flex gap-3 md:gap-4">
                <MapPin className="text-red-600 w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">{CONTACT_INFO.address}</span>
              </li>
              <li className="space-y-3">
                <div className="flex gap-3 md:gap-4 cursor-pointer" onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}>
                  <Phone className="text-red-600 w-5 h-5 shrink-0" />
                  <span className="text-sm md:text-base font-medium text-white break-all">{CONTACT_INFO.phone}</span>
                </div>
                {CONTACT_INFO.additionalPhones?.map((num, i) => (
                  <div key={i} className="flex gap-3 cursor-pointer pl-8" onClick={() => window.location.href = `tel:${num.replace(/\s+/g, '')}`}>
                    <span className="text-sm md:text-base font-medium text-white break-words">{num}</span>
                  </div>
                ))}
              </li>
              <li className="flex gap-3 md:gap-4 cursor-pointer" onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}`}>
                <Mail className="text-red-600 w-5 h-5 shrink-0" />
                <span className="text-sm md:text-base  font-medium break-all">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-gray-500 text-xs font-bold tracking-widest uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} Zed-King Fire and Safety. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => { setActivePage('privacy-policy'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-red-500 transition-colors text-xs font-bold tracking-widest uppercase cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => { setActivePage('terms-of-service'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-red-500 transition-colors text-xs font-bold tracking-widest uppercase cursor-pointer">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
