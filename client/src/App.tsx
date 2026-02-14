
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import BlogSection from './components/BlogSection';
import SectionTitle from './components/SectionTitle';
import FAQItem from './components/FAQItem';
import { PROJECTS, CERTIFICATIONS, FAQ, CONTACT_INFO } from './constants';
import { MessageCircle, Phone, MapPin, Award, Users, CheckCircle, Settings, FileCheck, PhoneCall } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const handleLinkClick = (id: string) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'services': return <Services setActivePage={setActivePage} />;
      case 'gallery': return <GalleryPage />;
      case 'projects': return (
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="Corporate Case Studies" subtitle="A visual journey through our large-scale safety deployments." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {PROJECTS.map(p => (
                <div key={p.id} className="group relative rounded-[2.5rem] overflow-hidden h-[400px] shadow-2xl">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/10 to-transparent p-12 flex flex-col justify-end">
                    <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest w-fit mb-4">{p.industry}</span>
                    <h3 className="text-3xl font-black text-white mb-2">{p.title}</h3>
                    <p className="text-white/70 text-lg flex items-center"><MapPin className="w-5 h-5 mr-2 text-red-500" /> {p.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
      case 'contact': return (
        <div>
          <ContactPage />
          <section className="pb-32 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <SectionTitle title="Frequently Asked" subtitle="Common safety concerns and our expert answers." />
              <div className="bg-white rounded-3xl">
                {FAQ.map((item, i) => <FAQItem key={i} item={item} />)}
              </div>
            </div>
          </section>
        </div>
      );
      case 'about': return (
        <section className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Mission & Vision Section */}
            <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
              <div className="lg:w-1/2 space-y-10">
                <div className="inline-flex items-center gap-4 bg-red-50 px-6 py-3 rounded-2xl border border-red-100">
                  <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                  <span className="text-red-600 font-black tracking-widest uppercase text-sm">Established Since 2012</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-blue-900 leading-[1.1] tracking-tight">
                  Protecting What <span className="text-red-600 underline decoration-red-600/20 underline-offset-8">Matters Most.</span>
                </h2>
                <p className="text-2xl text-gray-600 leading-relaxed font-medium">
                  At Zed-King Fire and Safety, we don't just supply equipment—we engineer peace of mind. With over a decade of expertise, we've become the trusted partner for complex industrial and residential safety systems.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 border-y border-gray-100">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-blue-900 font-black text-2xl">Our Vision</h4>
                    <p className="text-gray-500 leading-relaxed font-medium">To lead India's fire safety revolution through smart technology and zero-compromise engineering standards.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="text-blue-900 font-black text-2xl">Our Mission</h4>
                    <p className="text-gray-500 leading-relaxed font-medium">Delivering end-to-end lifecycle safety management—from government NOC approvals to high-intensity training sessions.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-red-600/5 rounded-[4rem] blur-3xl group-hover:bg-red-600/10 transition-colors"></div>
                <div className="relative">
                  <div className="absolute -top-10 -right-10 bg-red-600 text-white p-8 rounded-3xl shadow-2xl z-20 transform hover:scale-110 transition-transform">
                    <p className="text-5xl font-black">12+</p>
                    <p className="font-bold text-xs uppercase tracking-widest opacity-80">Years of Trust</p>
                  </div>
                  <img 
                    src="https://lh3.googleusercontent.com/p/AF1QipPIy8ueAKET2L2nQZ81XiB9kjmflF-LJB1zbvqr=s1000" 
                    alt="Headquarters" 
                    className="rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative z-10 w-full object-cover h-[600px] border-8 border-white group-hover:rotate-1 transition-transform duration-700" 
                  />
                  <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 z-20 flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-blue-900" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-blue-900">650+</p>
                      <p className="font-bold text-gray-400 uppercase text-xs tracking-widest">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="py-24 bg-gray-50 rounded-[4rem] px-8 lg:px-20 mb-32">
              <SectionTitle title="The Zed-King Standard" subtitle="Our core pillars that define every project we undertake." />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                {[
                  { title: "Precision Engineering", desc: "Every system is designed to the millimeter, ensuring 100% reliability in crisis situations.", icon: Settings },
                  { title: "Legal Compliance", desc: "We navigate the complex landscape of government NOCs and fire codes so you don't have to.", icon: FileCheck },
                  { title: "Continuous Support", desc: "Our AMC and emergency support teams are available 24/7 to keep your assets protected.", icon: PhoneCall }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black text-blue-900 mb-4">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Row */}
            <div className="flex flex-wrap justify-center gap-16 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="flex items-center gap-5 grayscale hover:grayscale-0 transition-all">
                  <img src={cert.image} alt={cert.title} className="w-16 h-16 object-contain" />
                  <div className="hidden sm:block">
                    <p className="font-black text-blue-900 text-sm uppercase tracking-tighter">{cert.title}</p>
                    <p className="text-xs text-gray-400 font-bold">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {renderPage()}
        {activePage === 'home' && <BlogSection />}
      </main>

      <Footer setActivePage={setActivePage} />

      {/* Persistent Action Hub */}
      <div className="fixed bottom-10 right-10 flex flex-col space-y-6 z-40">
        <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all group relative"
          title="Chat on WhatsApp"
        >
          <span className="absolute right-full mr-4 bg-white text-green-600 px-4 py-2 rounded-xl text-sm font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat With Us</span>
          <MessageCircle className="w-8 h-8" />
        </a>
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="bg-red-600 text-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(220,38,38,0.4)] hover:scale-110 active:scale-95 transition-all group relative"
          title="Direct Call"
        >
          <span className="absolute right-full mr-4 bg-white text-red-600 px-4 py-2 rounded-xl text-sm font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Immediate Call</span>
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
