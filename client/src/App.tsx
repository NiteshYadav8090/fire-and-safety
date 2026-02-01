
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
import { MessageCircle, Phone, MapPin } from 'lucide-react';

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
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 space-y-8">
                <div className="bg-red-50 p-6 rounded-3xl border border-red-100 inline-block">
                  <span className="text-red-600 font-black tracking-widest uppercase">Since 2012</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-blue-900 leading-[1.1]">The Name You Trust For <span className="text-red-600">Total Protection.</span></h2>
                <p className="text-2xl text-gray-600 leading-relaxed">
                  We don't just sell equipment; we build resilient safety architectures. With over 12 years of core engineering experience, Zed-King Fire and Safety is the gold standard in life safety.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-gray-100">
                  <div>
                    <h4 className="text-blue-900 font-black text-xl mb-4">Our Vision</h4>
                    <p className="text-gray-500">To make India disaster-resilient through innovation, training, and zero-compromise safety standards.</p>
                  </div>
                  <div>
                    <h4 className="text-blue-900 font-black text-xl mb-4">Our Mission</h4>
                    <p className="text-gray-500">Providing end-to-end fire safety management for high-risk assets using cutting-edge IoT and hardware.</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-12">
                   {CERTIFICATIONS.map((cert, i) => (
                      <div key={i} className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                        <img src={cert.image} alt={cert.title} className="w-12 h-12" />
                        <div>
                          <p className="font-black text-blue-900 text-sm uppercase">{cert.title}</p>
                          <p className="text-xs text-gray-400 font-bold">{cert.issuer}</p>
                        </div>
                      </div>
                   ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="bg-red-600 w-full h-full absolute top-8 left-8 rounded-[3rem] -z-10"></div>
                <img src="/images/about/team.png" alt="Our Team" className="rounded-[3rem] shadow-2xl" />
                <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                  <p className="text-6xl font-black text-red-600">12+</p>
                  <p className="font-bold text-blue-900 uppercase tracking-widest">Years of Trust</p>
                </div>
              </div>
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
