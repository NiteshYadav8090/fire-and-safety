
import React from 'react';
import { Flame, Bell, Droplets, Settings, GraduationCap, FileCheck, Award, CheckCircle, ChevronRight, Info } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { SERVICES } from '@/constants';
import fireFightingImg from "@assets/image_1770636296505.png"

const Services = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  const handleLinkClick = (id: string) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 lg:mb-16 rounded-2xl lg:rounded-[3rem] overflow-hidden shadow-2xl h-48 sm:h-72 md:h-96 lg:h-[500px] relative">
          <img src={fireFightingImg} alt="Fire Safety in Action" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white">Advanced Fire Fighting Technology</h2>
          </div>
        </div>
        <SectionTitle title="Industrial Grade Services" subtitle="Specialized solutions for every critical infrastructure." />
        <div className="grid grid-cols-1 gap-8 lg:gap-16">
          {SERVICES.map((s, idx) => (
            <div key={s.id} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white rounded-2xl lg:rounded-[3rem] p-6 lg:p-12 shadow-xl border border-gray-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 rounded-xl lg:rounded-[2rem] overflow-hidden shadow-2xl h-56 sm:h-72 md:h-80 lg:h-96">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 md:p-4 bg-red-600 rounded-xl md:rounded-2xl text-white shadow-lg shrink-0">
                    {s.id === 'extinguishers' && <Flame />}
                    {s.id === 'alarms' && <Bell />}
                    {s.id === 'hydrants' && <Droplets />}
                    {s.id === 'amc' && <Settings />}
                    {s.id === 'training' && <GraduationCap />}
                    {s.id === 'noc' && <FileCheck />}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-blue-900">{s.title}</h3>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">{s.longDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <h4 className="text-red-600 font-black uppercase text-xs tracking-widest mb-3 flex items-center"><Award className="w-4 h-4 mr-2" /> Key Features</h4>
                    <ul className="space-y-2">
                      {s.benefits.map(b => <li key={b} className="flex items-start text-blue-900 font-bold text-sm"><CheckCircle className="w-4 h-4 mr-2 text-green-500 shrink-0 mt-0.5" /> {b}</li>)}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl">
                    <h4 className="text-red-600 font-black uppercase text-xs tracking-widest mb-3 flex items-center"><Info className="w-4 h-4 mr-2" /> Sectors</h4>
                    <ul className="space-y-2">
                      {s.industries.map(i => <li key={i} className="flex items-center text-blue-900 font-bold text-sm"><ChevronRight className="w-4 h-4 mr-1 text-red-300 shrink-0" /> {i}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="pt-4">
                  <button onClick={() => handleLinkClick('contact')} className="bg-blue-900 text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-black shadow-lg hover:bg-red-600 transition-colors text-sm md:text-base">Book Consultation</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
