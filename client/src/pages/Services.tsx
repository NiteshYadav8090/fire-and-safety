
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
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 rounded-[3rem] overflow-hidden shadow-2xl h-[500px] relative">
          <img src={fireFightingImg} alt="Fire Safety in Action" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
            <h2 className="text-4xl font-black text-white">Advanced Fire Fighting Technology</h2>
          </div>
        </div>
        <SectionTitle title="Industrial Grade Services" subtitle="Specialized solutions for every critical infrastructure." />
        <div className="grid grid-cols-1 gap-16">
          {SERVICES.map((s, idx) => (
            <div key={s.id} className={`flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-gray-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl h-96">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-red-600 rounded-2xl text-white shadow-lg">
                    {s.id === 'extinguishers' && <Flame />}
                    {s.id === 'alarms' && <Bell />}
                    {s.id === 'hydrants' && <Droplets />}
                    {s.id === 'amc' && <Settings />}
                    {s.id === 'training' && <GraduationCap />}
                    {s.id === 'noc' && <FileCheck />}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-blue-900">{s.title}</h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">{s.longDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h4 className="text-red-600 font-black uppercase text-xs tracking-widest mb-4 flex items-center"><Award className="w-4 h-4 mr-2" /> Key Features</h4>
                    <ul className="space-y-3">
                      {s.benefits.map(b => <li key={b} className="flex items-center text-blue-900 font-bold"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> {b}</li>)}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h4 className="text-red-600 font-black uppercase text-xs tracking-widest mb-4 flex items-center"><Info className="w-4 h-4 mr-2" /> Sectors</h4>
                    <ul className="space-y-3">
                      {s.industries.map(i => <li key={i} className="flex items-center text-blue-900 font-bold"><ChevronRight className="w-4 h-4 mr-1 text-red-300" /> {i}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="pt-6">
                  <button onClick={() => handleLinkClick('contact')} className="bg-blue-900 text-white px-10 py-4 rounded-xl font-black shadow-lg hover:bg-red-600 transition-colors">Book Consultation</button>
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
