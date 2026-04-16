
import React from 'react';
import { ArrowRight, Calendar, CheckCircle, Users, Award, Flame, Bell, Droplets, Settings, GraduationCap, FileCheck, PhoneCall } from 'lucide-react';
import { SERVICES, CLIENTS, CONTACT_INFO } from '@/constants';
import SectionTitle from '@/components/SectionTitle';

import heroBg from "@assets/image_1770818995026.png";

const Home = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            className="w-full h-full object-cover" 
            alt="Fire Safety Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 z-10 text-white">
          <div className="max-w-4xl pt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-black tracking-[0.2em] uppercase shadow-lg shadow-red-600/30">
                Authorized Grade-A Provider
              </span>
              <div className="h-0.5 w-12 bg-white/30 hidden sm:block"></div>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-8 leading-[1.2] tracking-tight">
              Complete <span className="text-red-500">Fire & Safety</span> <br /> Solutions by Zed-King
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-12 leading-relaxed font-medium max-w-2xl">
              Professional Grade Installation, Government Certification, and Hands-on Staff Training. We engineer safety for critical industrial assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center transition-all transform hover:-translate-y-2 hover:shadow-red-600/40"
              >
                Explore Services <ArrowRight className="ml-3 w-6 h-6" />
              </button>
              <button 
                onClick={() => { setActivePage('contact'); window.scrollTo(0,0); }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-2"
              >
                Free Safety Audit
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Years Experience', val: '12+', icon: Calendar },
              { label: 'Success Projects', val: '650+', icon: CheckCircle },
              { label: 'Safety Experts', val: '3+', icon: Users },
              { label: 'Approvals', val: 'Grade-A', icon: Award },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="bg-red-50 p-4 rounded-2xl mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-black text-blue-900">{stat.val}</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Fire Protection Engineering" 
            subtitle="Industry-leading solutions for factories, residential complexes, and high-rise commercial structures." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((s) => (
              <div key={s.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-red-600 transition-colors duration-500"></div>
                <div className="mb-10 relative z-10">
                  <div className="w-20 h-20 bg-blue-900 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    {s.id === 'extinguishers' && <Flame />}
                    {s.id === 'alarms' && <Bell />}
                    {s.id === 'hydrants' && <Droplets />}
                    {s.id === 'amc' && <Settings />}
                    {s.id === 'training' && <GraduationCap />}
                    {s.id === 'noc' && <FileCheck />}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-4 pr-10">{s.title}</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{s.description}</p>
                <div className="mt-auto pt-6 border-t border-gray-50">
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
          <div className="mt-16 text-center">
             <button 
              onClick={() => { setActivePage('services'); window.scrollTo(0,0); }}
              className="bg-blue-900 text-white px-10 py-4 rounded-xl font-black hover:bg-blue-800 transition-colors shadow-lg"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionTitle title="Trusted by Global Enterprises" subtitle="We are proud partners with industry leaders across various sectors." />
          <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {CLIENTS.map(c => (
              <img key={c.name} src={c.logo} alt={c.name} className="h-20 md:h-28 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Feature */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-5 rounded-full animate-pulse"><PhoneCall className="w-10 h-10" /></div>
            <div>
              <h3 className="text-3xl font-black">Emergency On-Call Support</h3>
              <p className="text-red-100 text-xl">Technical support available 24/7 for all AMC clients.</p>
            </div>
          </div>
          <div className="text-4xl font-black bg-white text-red-600 px-10 py-5 rounded-3xl shadow-2xl cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}>
            {CONTACT_INFO.emergency}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
