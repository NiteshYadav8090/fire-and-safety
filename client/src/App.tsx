
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
        <section className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            {/* Header / Intro Section */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
              <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 bg-red-50 px-4 py-2 rounded-xl border border-red-100">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                  <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Since 2012</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 leading-[1.1] tracking-tight">
                  The Gold Standard in <br />
                  <span className="text-red-600">Fire & Safety.</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  With over 12 years of experience, Zed-King Fire and Safety has been at the forefront of protecting industrial assets and residential communities. We combine engineering excellence with a passion for human safety.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-10 py-8 border-y border-gray-100">
                   {[
                     { label: 'Projects Done', val: '650+' },
                     { label: 'Safety Experts', val: '3+' },
                     { label: 'Years Experience', val: '12+' }
                   ].map((stat, i) => (
                     <div key={i} className="text-center lg:text-left">
                       <p className="text-3xl font-black text-blue-900">{stat.val}</p>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                     </div>
                   ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipPIy8ueAKET2L2nQZ81XiB9kjmflF-LJB1zbvqr=s1000" 
                  alt="Our Main Facility" 
                  className="rounded-[2rem] shadow-2xl w-full object-cover h-[400px] md:h-[500px] border-4 border-white" 
                />
              </div>
            </div>

            {/* Our Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 py-16 bg-gray-50 rounded-[3rem] px-8 lg:px-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-blue-900">Our Story</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Our journey began in 2012 with a single mission: to provide uncompromising safety solutions to a rapidly industrializing region. Starting with simple extinguisher supplies, we've evolved into a complete fire engineering consultancy.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Today, we handle complex multi-site projects, ensuring everything from advanced detection systems to high-pressure hydrants works in perfect harmony. Our growth is built on the trust of hundreds of local and corporate clients.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <Award className="w-10 h-10 text-red-600 mb-4" />
                    <h4 className="font-black text-blue-900">Grade-A Provider</h4>
                    <p className="text-xs text-gray-500 font-bold mt-2">Government Authorized</p>
                 </div>
                 <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <CheckCircle className="w-10 h-10 text-blue-900 mb-4" />
                    <h4 className="font-black text-blue-900">100% Compliance</h4>
                    <p className="text-xs text-gray-500 font-bold mt-2">BIS & IS Standards</p>
                 </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="mb-32">
              <SectionTitle title="Our Leadership" subtitle="The experts behind our zero-compromise safety standards." />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-16 max-w-4xl mx-auto">
                {[
                  { name: "Sunil Kumar", role: "Founder & Safety Director", img: "/images/team/leader1.png" },
                  { name: "Anil Sharma", role: "Head of Operations", img: "/images/team/leader2.png" }
                ].map((member, i) => (
                  <div key={i} className="group text-center">
                    <div className="relative mb-6 inline-block">
                      <div className="absolute inset-0 bg-red-600 rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform -z-10 opacity-10"></div>
                      <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-[2.5rem] shadow-xl border-4 border-white grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                    <h4 className="text-2xl font-black text-blue-900">{member.name}</h4>
                    <p className="text-red-600 font-bold text-sm uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Row */}
            <div className="flex flex-wrap justify-center gap-10 opacity-50 hover:opacity-100 transition-opacity pb-10">
              {CERTIFICATIONS.map((cert, i) => (
                <img key={i} src={cert.image} alt={cert.title} className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all" />
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
