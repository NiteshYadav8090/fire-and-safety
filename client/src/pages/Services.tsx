
import React from 'react';
import { Flame, Bell, Droplets, Settings, GraduationCap, FileCheck, Award, CheckCircle, ChevronRight, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { SERVICES } from '@/constants';

const fireFightingImg = "/images/gallery/installation-1.png";

const Services = ({
  setActivePage,
  initialServiceId,
}: {
  setActivePage: (p: string) => void;
  initialServiceId?: string;
}) => {
  const [highlightId, setHighlightId] = React.useState<string | null>(null);

  const handleLinkClick = (id: string) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (!initialServiceId) return;

    // Let layout paint first so scroll lands correctly.
    const t = window.setTimeout(() => {
      const el = document.getElementById(`service-${initialServiceId}`);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setHighlightId(initialServiceId);
      window.setTimeout(() => setHighlightId(null), 1400);
    }, 50);

    return () => window.clearTimeout(t);
  }, [initialServiceId]);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 lg:mb-16 rounded-2xl lg:rounded-[3rem] overflow-hidden shadow-2xl h-48 sm:h-72 md:h-96 lg:h-[500px] relative"
        >
          <motion.img
            src={fireFightingImg}
            alt="Fire Safety in Action"
            className="w-full h-full object-cover"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/35 via-transparent to-red-700/25" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="inline-block bg-red-600 text-white px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-black tracking-[0.12em] uppercase shadow-lg mb-3"
            >
              Industrial Protection Suite
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              Advanced Fire Fighting Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
              className="text-white/85 text-xs sm:text-sm md:text-lg mt-2 max-w-2xl font-medium"
            >
              Engineered systems for early detection, rapid response, and resilient business continuity.
            </motion.p>
          </div>
        </motion.div>
        <SectionTitle title="Industrial Grade Services" subtitle="Specialized solutions for every critical infrastructure." />
        <div className="grid grid-cols-1 gap-8 lg:gap-16">
          {SERVICES.map((s, idx) => (
            <div
              key={s.id}
              id={`service-${s.id}`}
              className={`flex scroll-mt-28 flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white rounded-2xl lg:rounded-[3rem] p-6 lg:p-12 shadow-xl border border-gray-100 transition-[box-shadow,transform,border-color] duration-500 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} ${highlightId === s.id ? 'ring-2 ring-red-500/40 border-red-200 shadow-2xl' : ''}`}
            >
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-blue-900">{s.title}</h3>
                </div>
                <p className="text-sm md:text-base lg:text-xl text-gray-600 leading-relaxed">{s.longDescription}</p>
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
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => handleLinkClick('contact')} className="bg-blue-900 text-white px-8 py-3 md:px-10 md:py-4 rounded-xl font-black shadow-lg hover:bg-red-600 transition-colors text-sm md:text-base">Book Consultation</button>
                    <button onClick={() => handleLinkClick(`service/${s.id}`)} className="bg-white text-blue-900 px-8 py-3 md:px-10 md:py-4 rounded-xl font-black border border-blue-900/20 shadow-sm hover:bg-blue-50 transition-colors text-sm md:text-base">View Details</button>
                  </div>
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
