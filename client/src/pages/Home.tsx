
import React from 'react';
import { ArrowRight, Calendar, CheckCircle, Users, Award, Flame, Bell, Droplets, Settings, GraduationCap, FileCheck, PhoneCall } from 'lucide-react';
import { SERVICES, CLIENTS, CONTACT_INFO } from '@/constants';
import SectionTitle from '@/components/SectionTitle';

import heroBg from "@assets/image_1770818995026.png";

const Home = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            className="w-full h-full object-cover object-center"
            alt="Fire Safety Hero" 
          />
          {/* Mobile: full dark overlay | Desktop: left-to-right gradient */}
          <div className="absolute inset-0 bg-blue-900/85 md:bg-transparent"></div>
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-900/20"></div>
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 z-10 text-white w-full">
          <div className="max-w-2xl lg:max-w-3xl pt-20 sm:pt-24">
            <div className="mb-5 sm:mb-6">
              <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-black tracking-[0.15em] uppercase shadow-lg">
                Authorized Grade-A Provider
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 sm:mb-6 leading-[1.15] tracking-tight">
              Complete{" "}
              <span className="text-red-400">Fire & Safety</span>
              <br />
              Solutions by Zed-King
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-8 sm:mb-10 leading-relaxed font-medium max-w-xl">
              Professional Grade Installation, Government Certification, and Hands-on Staff Training. We engineer safety for critical industrial assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg shadow-2xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-red-600/40 active:scale-95"
              >
                Explore Services <ArrowRight className="ml-3 w-5 h-5" />
              </button>
              <button 
                onClick={() => { setActivePage('contact'); window.scrollTo(0,0); }}
                className="border-2 border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-7 py-4 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all hover:-translate-y-1 active:scale-95"
              >
                Free Safety Audit
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-7 h-11 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/80 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-white py-10 md:py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {[
              { label: 'Years Experience', val: '12+', icon: Calendar },
              { label: 'Success Projects', val: '650+', icon: CheckCircle },
              { label: 'Safety Experts', val: '3+', icon: Users },
              { label: 'Approvals', val: 'Grade-A', icon: Award },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="bg-red-50 p-3 md:p-4 rounded-xl md:rounded-2xl mb-3 md:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-2xl md:text-4xl font-black text-blue-900">{stat.val}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Fire Protection Engineering" 
            subtitle="Industry-leading solutions for factories, residential complexes, and high-rise commercial structures." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((s) => (
              <div key={s.id} className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-[2.5rem] shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-red-50 rounded-bl-[80px] md:rounded-bl-[100px] -mr-6 -mt-6 md:-mr-8 md:-mt-8 group-hover:bg-red-600 transition-colors duration-500"></div>
                <div className="mb-6 md:mb-10 relative z-10">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-900 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    {s.id === 'extinguishers' && <Flame className="w-6 h-6 md:w-auto md:h-auto" />}
                    {s.id === 'alarms' && <Bell className="w-6 h-6 md:w-auto md:h-auto" />}
                    {s.id === 'hydrants' && <Droplets className="w-6 h-6 md:w-auto md:h-auto" />}
                    {s.id === 'amc' && <Settings className="w-6 h-6 md:w-auto md:h-auto" />}
                    {s.id === 'training' && <GraduationCap className="w-6 h-6 md:w-auto md:h-auto" />}
                    {s.id === 'noc' && <FileCheck className="w-6 h-6 md:w-auto md:h-auto" />}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-3 pr-8">{s.title}</h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg leading-relaxed">{s.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <button 
                    onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
                    className="flex items-center text-red-600 font-black tracking-widest uppercase text-xs hover:gap-4 transition-all"
                  >
                    Service Details <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-16 text-center">
             <button 
              onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
              className="bg-blue-900 text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-black hover:bg-blue-800 transition-colors shadow-lg text-sm md:text-base"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionTitle title="Trusted by Global Enterprises" subtitle="We are proud partners with industry leaders across various sectors." />
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {CLIENTS.map(c => (
              <img key={c.name} src={c.logo} alt={c.name} className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Feature */}
      <section className="py-12 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="bg-white/20 p-4 md:p-5 rounded-full animate-pulse shrink-0"><PhoneCall className="w-7 h-7 md:w-10 md:h-10" /></div>
            <div>
              <h3 className="text-xl md:text-3xl font-black">Emergency On-Call Support</h3>
              <p className="text-red-100 text-sm md:text-xl">Technical support available 24/7 for all AMC clients.</p>
            </div>
          </div>
          <div className="text-2xl md:text-4xl font-black bg-white text-red-600 px-6 py-4 md:px-10 md:py-5 rounded-2xl md:rounded-3xl shadow-2xl cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}>
            {CONTACT_INFO.emergency}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
