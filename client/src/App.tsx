
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeInquirySection from './components/HomeInquirySection';
import Home from './pages/Home';
import About from '@assets/about.png';
import Services from './pages/Services';
import ServiceInfoPage from './pages/ServiceInfo';
import GalleryPage from './pages/Gallery';
import GalleryCategoryPage from './pages/GalleryCategory';
import ContactPage from './pages/Contact';
import BlogPostPage from './pages/BlogPost';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SectionTitle from './components/SectionTitle';
import FAQItem from './components/FAQItem';
import { PROJECTS, CERTIFICATIONS, FAQ, CONTACT_INFO } from './constants';
import { MessageCircle, Phone, MapPin, CheckCircle, Settings, FileCheck, PhoneCall, ShieldCheck, Users, Award, ArrowUpRight } from 'lucide-react';

import poojaSinghImg from "@assets/image_1771253056187.webp";
import balvinderDhullImg from "@assets/image_1771253075746.png";
import nareshRavishImg from "@assets/image_1771253115856.png";
import hero from "@assets/galaxy.webp";
import classRoomImg from "@assets/Perade2.JPG";

const ACTIVE_PAGE_STORAGE_KEY = "zedking-active-page";

export default function App() {
  const [activePage, setActivePage] = useState(() => {
    if (typeof window === "undefined") {
      return "home";
    }

    return window.localStorage.getItem(ACTIVE_PAGE_STORAGE_KEY) || "home";
  });
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
const testimonials = [
    {
      quote: "Hamari school mein Fire NOC aur installation ka kaam ZED-King Fire and Safety ne kiya. Team ne sab kuch bahut systematically handle kiya – survey se lekar final installation tak. Process bilkul smooth rahi aur school routine bhi affect nahi hua.",
      name: "Chaudhary Rakesh Chahal",
      company: "PAI INTERNATIONAL SCHOOL, KAITHAL"
    },
    {
      quote: "Kaafi time se fire safety system lagwana pending tha. ZED-King Fire se baat ki toh laga sahi jagah contact kiya. Team ne pehle school ka proper survey kiya, koi unnecessary cheez suggest nahi ki – sirf jo zaroori tha wohi bataya. Isi baat ne trust banaya.",
      name: "S. Arora",
      company: "Gourav Public School, Kaithal"
    },
    {
      quote: "Fire NOC ke liye jo documentation aur government process hoti hai woh hamesha ek sar dard raha. ZED-King Fire ki team ne poora process handle kiya – bas zaroori documents dene the, baaki sab unhone sambhala. Expected time se pehle NOC bhi mil gayi.",
      name: "Mr. Amarjyot Bhandari",
      company: "Amar Public School, Kaithal"
    },
    {
      quote: "University jaise bade campus ke liye experienced team chahiye thi. ZED-King Fire ne poora campus assess kiya – academic blocks, admin area, hostels – aur ek proper structured plan ke saath kaam kiya. Campus operations bilkul disturb nahi hui.",
      name: "Prof. Dr. Shamim Ahmed",
      company: "NIILM University, Kaithal"
    },
    {
      quote: "Bio Gas Plant mein fire safety ka risk level hi alag hota hai. ZED-King Fire ne poore plant ka thorough assessment kiya – high risk zones, gas areas, machinery – sab dhyan mein rakh ke plan banaya. Plant operations bhi affect nahi hui puri process mein.",
      name: "Dushyant Chautala",
      company: "Bio Gas Plant"
    },
    {
      quote: "Annual maintenance contract ke under inka follow-up bahut consistent raha. Preventive checks time pe hote hain, koi cheez miss nahi hoti. Isi wajah se hamare operations mein downtime almost zero raha – yeh sabse badi baat hai.",
      name: "A. Bhatia",
      company: "Maintenance Head, Logistics Park"
    },
    {
      quote: "Documentation, safety signages aur evacuation planning sab standards ke hisaab se professionally deliver hua. Inspectors ne bhi kaam ki quality appreciate ki. ZED-King Fire ne poora compliance process hassle-free bana diya.",
      name: "D. Kulkarni",
      company: "Project Lead, Commercial Complex"
    }
  ];
  const leadershipMembers = [
    { name: "Balvinder Dhull", role: "Chairman", img: balvinderDhullImg },
    { name: "Pooja Singh", role: "Managing Director", img: poojaSinghImg },
    { name: "Naresh Sir", role: "Managing Director", img: nareshRavishImg },
    { name: "Mr. Pardeep", role: "Fire & Safety Supervisor", img: "/images/team/leader1.png" },
    { name: "Mr. Partap", role: "Fire Instructor", img: "/images/team/leader2.png" },
    { name: "Mr. Ankush", role: "Lab Attendant", img: "/images/team/leader3.png" },
    { name: "Ms. Varsha", role: "Accountant", img: "/images/team/varsha.webp" },
    { name: "Ms. Ishu", role: "Counsellor", img: "/images/team/ishu.webp" },
    { name: "Ms. Tamanna", role: "Counsellor", img: "/images/team/tamanna.webp" },
  ];
  const journeyMilestones = [
    {
      year: "2012",
      title: "Foundation Built",
      desc: "Zed-King started with a focused mission to deliver dependable extinguisher supply and frontline fire safety support in the region.",
      image: "/images/about/team.png",
      align: "left",
    },
    {
      year: "2016",
      title: "System Expansion",
      desc: "We expanded into alarms, hydrants, and compliance-focused installations for factories, institutions, and commercial facilities.",
      image: "/images/gallery/installation-1.png",
      align: "right",
    },
    {
      year: "2020",
      title: "Engineering Scale",
      desc: "Our team began executing larger multi-site deployments with stronger design coordination, testing discipline, and AMC coverage.",
      image: "/images/gallery/audit-1.png",
      align: "left",
    },
    {
      year: "Today",
      title: "Trusted Safety Partner",
      desc: "Today we support clients with end-to-end fire protection, staff training, NOC guidance, and rapid-response maintenance services.",
      image: "/images/gallery/training-1.png",
      align: "right",
    },
  ];
  const storyHighlights = [
    {
      title: "Government Aligned",
      desc: "Work delivered with compliance-first planning and disciplined execution.",
      icon: ShieldCheck,
    },
    {
      title: "650+ Projects",
      desc: "Installations, audits, refilling, training, and annual maintenance support.",
      icon: Users,
    },
    {
      title: "24/7 Support",
      desc: "Fast response for service requests, testing needs, and on-site fire safety support.",
      icon: ArrowUpRight,
    },
    {
      title: "Trusted Across Sectors",
      desc: "Factories, offices, institutions, warehouses, and residential properties.",
      icon: Award,
    },
  ];
  const storyQuickActions = [
    "Site inspection planning",
    "AMC and system upkeep",
    "Training and compliance help",
  ];
  const handleLinkClick = (id: string) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.localStorage.setItem(ACTIVE_PAGE_STORAGE_KEY, activePage);
  }, [activePage]);

  useEffect(() => {
    if (activePage !== 'about') {
      setYearsCount(0);
      setProjectsCount(0);
      return;
    }

    const duration = 1600;
    const targets = {
      years: 12,
      projects: 650,
    };
    const startTime = performance.now();

    let animationFrame = 0;

    const animateCounts = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setYearsCount(Math.round(targets.years * easedProgress));
      setProjectsCount(Math.round(targets.projects * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateCounts);
      }
    };

    animationFrame = window.requestAnimationFrame(animateCounts);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [activePage]);

  const renderPage = () => {
    if (activePage.startsWith('blog/')) {
      const slug = activePage.replace('blog/', '');
      return (
        <BlogPostPage
          slug={slug}
          onBack={() => {
            setActivePage('home');
            window.scrollTo(0, 0);
          }}
        />
      );
    }

    if (activePage.startsWith("home#")) {
      const initialSectionId = activePage.split("#")[1] || undefined;
      return <Home setActivePage={setActivePage} initialSectionId={initialSectionId} />;
    }

    if (activePage.startsWith("services#")) {
      const initialServiceId = activePage.split("#")[1] || undefined;
      return (
        <Services setActivePage={setActivePage} initialServiceId={initialServiceId} />
      );
    }

    if (activePage.startsWith("gallery#")) {
      const initialType = activePage.split("#")[1] || undefined;
      return <GalleryPage initialType={initialType} />;
    }

    if (activePage.startsWith("gallery-category/")) {
      const category = decodeURIComponent(activePage.replace("gallery-category/", ""));
      return <GalleryCategoryPage category={category} setActivePage={setActivePage} />;
    }

    if (activePage.startsWith("service/")) {
      const serviceId = activePage.replace("service/", "");
      return <ServiceInfoPage serviceId={serviceId} setActivePage={setActivePage} />;
    }

    switch(activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'services': return <Services setActivePage={setActivePage} />;
      case 'gallery': return <GalleryPage />;
      case 'projects': return (
        <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle title="Corporate Case Studies" subtitle="A visual journey through our large-scale safety deployments." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {PROJECTS.map(p => (
                <div key={p.id} className="group relative rounded-2xl cursor-pointer lg:rounded-[2.5rem] overflow-hidden h-56 sm:h-72 md:h-80 lg:h-[300px] shadow-2xl">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/10 to-transparent p-5 md:p-10 flex flex-col justify-end">
                    <span className="bg-red-600 text-white px-3 py-1 font-extrabold rounded-full text-[10px] uppercase tracking-widest w-fit mb-2">{p.industry}.</span>
                    <h3 className="text-xl md:text-xl font-black text-white mb-1 md:mb-1">{p.title}</h3>
                    <p className="text-white/70 text-sm text-justify md:text-lg flex items-center"><MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 text-red-500 shrink-0" /> {p.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center md:mt-14">
              <button
                type="button"
                onClick={() => handleLinkClick("gallery-category/Project")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 px-7 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-600 active:scale-95 md:px-10 md:py-4 md:text-base"
              >
                More View <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>
        </section>
      );
      case 'contact': return (
        <div>
          <ContactPage />
          <section className="pt-16 pb-16 md:pt-24 md:pb-32 bg-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <SectionTitle title="Frequently Asked" subtitle="Common safety concerns and our expert answers." />
              <div className="bg-white rounded-3xl">
                {FAQ.map((item, i) => <FAQItem key={i} item={item} />)}
              </div>
            </div>
          </section>
        </div>
      );
      case 'terms-of-service': return <TermsOfService onBack={() => { setActivePage('home'); window.scrollTo(0, 0); }} />;
      case 'privacy-policy': return <PrivacyPolicy onBack={() => { setActivePage('home'); window.scrollTo(0, 0); }} />;
      case 'about': return (
        <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            {/* Mission & Vision Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center mb-16 md:mb-24 lg:mb-32">
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <div className="bg-red-50 px-5 py-4 rounded-2xl border border-red-100 inline-block">
                  <span className="text-red-600 font-black tracking-widest uppercase text-sm">Since 2012</span>
                </div>
                <h2 className="about-hero-title text-xl sm:text-xl md:text-2xl lg:text-5xl tracking-wide font-black text-blue-900 leading-[1.1]">
                  <span className="about-hero-word about-hero-word-1">Trusted</span>{" "}
                  <span className="about-hero-word about-hero-word-2 about-hero-highlight">Fire Safety Solutions</span>
                  <br className="hidden sm:block" />
                  <span className="about-hero-word about-hero-word-3">for</span>{" "}
                  <span className="about-hero-word about-hero-word-4 about-hero-word-accent">Every Site.</span>
                  <span className="about-hero-title-line" aria-hidden="true"></span>
                </h2>
                <p className="text-sm sm:text-base text-justify md:text-xl lg:text-base tracking-normal text-gray-600 leading-relaxed">
                  Zed-King Fire and Safety provides dependable fire protection solutions for factories, commercial spaces, institutions, and homes with certified systems, compliance-focused support, and maintenance services you can rely on.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-4">
                  <div className="group rounded-2xl border border-blue-300 bg-gradient-to-br from-[#f8fbff] to-white p-3 md:p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_45px_rgba(29,78,216,0.16)]">
                    <div className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-blue-900">
                      Our Vision
                    </div>
                    <p className="text-gray-500 text-justify text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-blue-900">
                      To build safer workplaces and communities through disciplined fire protection, stronger awareness, and reliable on-ground execution.
                    </p>
                  </div>
                  <div className="group rounded-2xl border border-red-300 bg-gradient-to-br from-[#fff8f8] to-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_20px_45px_rgba(220,38,38,0.16)]">
                    <div className="mb-4 inline-flex rounded-full bg-red-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-red-600">
                      Our Mission
                    </div>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed transition-colors duration-300 group-hover:text-red-700">
                      To deliver complete fire safety solutions from design and installation to approvals, training, AMC, and emergency support with quality, speed, and accountability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative group mt-8 lg:mt-0">
                <div className="absolute -inset-4 bg-red-600/5 rounded-[4rem] blur-3xl"></div>
                <div className="relative px-8 sm:px-10 lg:px-0 mt-6">
                  <div className="absolute -top-3 -right-1 sm:-top-6 sm:-right-4 lg:-top-10 lg:-right-10 bg-red-600 text-white p-3 sm:p-5 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl z-20">
                    <p className="text-2xl sm:text-3xl md:text-5xl font-black">{yearsCount}+</p>
                    <p className="font-bold text-[10px] sm:text-xs uppercase tracking-widest opacity-80">Years of Trust</p>
                  </div>
                  <img
                    src={hero}
                    alt="Headquarters"
                    className="rounded-2xl md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative z-10 w-full object-cover h-56 sm:h-72 md:h-[450px] lg:h-[600px] border-4 md:border-8 border-white"
                  />
                  <div className="absolute -bottom-3 -left-1 sm:-bottom-6 sm:-left-4 lg:-bottom-10 lg:-left-10 bg-white p-3 sm:p-5 md:p-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] shadow-2xl border border-gray-100 z-20 flex items-center gap-3 md:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-50 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-900" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-blue-900">{projectsCount}+</p>
                      <p className="font-bold text-gray-400 uppercase text-[10px] sm:text-xs tracking-widest">Projects Completed</p>
                    </div> 
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story Section */}
            <div className="mb-16 md:mb-24 lg:mb-32">
              <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-900 tracking-tight">Our Story</h2>
                <p className="mt-4 text-base  md:text-xl text-gray-500">
                  Building trust, strengthening preparedness, and protecting sites since 2012.
                </p>
                <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-red-600"></div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 md:gap-12 xl:gap-16 items-start">
                <div>
                  <p className="text-base sm:text-lg md:text-[1rem] text-gray-600 text-no leading-relaxed text-justify">
                    Founded with a mission to make fire protection more dependable and accessible, <span className="font-black text-blue-900">Zed-King Fire and Safety</span> has grown into a trusted partner for installations, maintenance, audits, training, and compliance support. Over the years, we have helped clients create safer buildings through practical system planning, responsive service, and quality that holds up on the ground.
                  </p>

                  <div className="mt-3 md:mt-5">
                    <h3 className="text-2xl md:text-3xl font-black text-blue-900 mb-5 md:mb-7">Achievements &amp; Impact</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                      {storyHighlights.map((item, i) => (
                        <div key={i} className="rounded-2xl md:rounded-[1.75rem]   border border-blue-100 bg-gradient-to-br from-[#f7fbff] to-[#eef5ff] p-3 md:p-4 shadow-sm hover:shadow-lg transition-all">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center text-[#2463eb] mb-4">
                            <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                          </div>
                          <h4 className="text-lg md:text-xl font-semibold text-blue-900">{item.title}</h4>
                          <p className="mt-2 text-sm md:text-[1rem]  text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 md:-inset-2 rounded-[1.5rem]  blur-2xl opacity-90"></div>
                  <div className="relative rounded-[2rem] md:rounded-[1.5rem]  p-4 md:p-6 shadow-[0_30px_70px_rgba(15,23,42,0.14)]">
                    <div className="relative overflow-hidden rounded-[0.5rem] md:rounded-[1rem]">
                      <img
                        src={About}
                        alt="Zed-King Fire and Safety story"
                        className="h-[360px] w-full object-cover object-top transition-transform duration-700 sm:h-[230px] md:h-[360px]"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/15 to-transparent"></div> */}
                    </div>
                    <div className="mt-4 md:mt-5 rounded-[1.25rem] border border-red-100 bg-gradient-to-r from-red-50 via-white to-blue-50 p-4 md:p-5 shadow-sm">
                      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                          <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.24em] text-red-600">Quick Support</p>
                          <h4 className="mt-2 text-xl md:text-2xl font-black text-blue-900">Need the right fire safety setup?</h4>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {storyQuickActions.map((item, i) => (
                              <span
                                key={i}
                                className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs md:text-sm font-bold text-blue-900"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => handleLinkClick("contact")}
                          className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-700"
                        >
                          Talk to Our Team
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Division Section */}
            <div className="mb-16 md:mb-24 lg:mb-32">
              <div className="grid grid-cols-1 items-start gap-8 md:gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:gap-16">
                <div className="overflow-hidden rounded-[1.25rem] md:rounded-[2rem] border border-gray-100 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                  <img
                    src={classRoomImg}
                    alt="Zed-King training classroom"
                    className="h-[280px] w-full object-cover sm:h-[360px] md:h-[400px] xl:h-[400px]"
                  />
                </div>

                <div className="pt-1 md:pt-2">
                  <div className=" text-lg leading-[1.8] text-slate-600 md:text-[1.18rem] ">
                    <p className='text-base sm:text-lg md:text-[1rem] text-gray-600 text-no leading-relaxed text-justify'>
                      {/* Currently, Zed-King Group of Institute operates four branches across Kaithal, specializing in <span className="font-black text-blue-900">Fire & Safety Services training</span> . This flagship program is designed to provide practical knowledge, industry-relevant skills, and government-authorised certifications, preparing students for successful careers in fire safety and emergency services. */}
                     <span className="font-black text-blue-900"> ZED-KING Fire and Safety</span> is a leading training and safety solutions division unde the Zed-King Group of Institute, dedicated to building skilled professionals and delivering complete fire protection services for industries, commercial buildings, hospitals, schools, factories, and construction sectors. Our mission is to promote safety awareness, emergency preparedness, and professional excellence through advanced practical training and reliable safety services.
              </p>


                    <p className='mt-4 text-base sm:text-lg md:text-[1rem] text-gray-600 text-no leading-relaxed text-justify'>
                      We provide government-approved <span className="font-black text-blue-900"> Fire &amp; Industrial Safety Training Programs </span>, including Diploma and Certificate Courses designed to combine classroom learning with real-time practical exposure. Students receive hands-on training in firefighting techniques, rescue operations, disaster management, first aid, evacuation procedures, industrial hazard control, and emergency response management, helping them become industry-ready safety professionals.
                    </p>

                    <p className='mt-4 text-base sm:text-lg md:text-[1rem] text-gray-600 text-no leading-relaxed text-justify'>

                    </p>

                    
                     
                    {/* <p>
                      With a track record of training more than <span className="font-black text-blue-900">20,000 students</span>, we take pride in the success of our alumni who are now working in leading government and private organizations across the country. We also collaborate with the NIELIT department to organize <span className="font-black text-blue-900">Mega Job Fairs</span>, ensuring that students get direct employment opportunities immediately after completing their courses.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="mb-16 md:mb-24 lg:mb-32">
              <SectionTitle title="Our Leadership" subtitle="The people leading our quality standards, field execution, and long-term client trust." />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-10 md:mt-16 max-w-6xl mx-auto">
                {leadershipMembers.map((member, i) => (
                  <div key={i} className="group text-center">
                    <div className="relative mb-5 md:mb-6 inline-block">
                      <div className="absolute inset-0 bg-red-600 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform -z-10 opacity-10"></div>
                      <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[20rem]  lg:h-[23rem] object-cover rounded-[2rem] shadow-xl border-4 border-white transition-all duration-500" 
                      />
                    </div>
                    <h4 className="text-xl md:text-2xl font-black text-blue-900">{member.name}</h4>
                    <p className="text-red-600 font-bold text-xs md:text-sm uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Journey / Timeline Section */}
            <div className="mb-16 md:mb-24 lg:mb-32">
              <SectionTitle
                title="Our Journey"
                subtitle="Key phases that shaped Zed-King into a dependable fire and safety partner."
              />
              <div className="relative mt-10 md:mt-16 max-w-6xl mx-auto">
                <div className="space-y-10 md:space-y-14">
                  {journeyMilestones.map((item, i) => (
                    <div
                      key={i}
                      className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_90px_minmax(0,1fr)] items-center gap-6 md:gap-8"
                    >
                      {item.align === "left" ? (
                        <>
                          <div className="order-1 text-center lg:text-right px-2 md:px-6">
                            <h3 className="text-2xl md:text-3xl font-black text-blue-900">{item.title}</h3>
                            <p className="text-sm md:text-base text-gray-400 font-medium mt-1">{item.year}</p>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4 max-w-xl ml-auto">
                              {item.desc}
                            </p>
                          </div>
                          <div className="order-2 hidden lg:flex items-center justify-center self-stretch">
                            <div className="relative flex h-full items-center justify-center">
                              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-blue-100 rounded-full"></div>
                              <div className="relative z-10 w-7 h-7 rounded-full bg-[#9fc4e3] border-4 border-white shadow-[0_0_0_4px_rgba(191,219,254,0.8)]"></div>
                            </div>
                          </div>
                          <div className="order-3">
                            <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 bg-white">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 md:h-56 object-cover"
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="order-3 lg:order-1">
                            <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 bg-white">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 md:h-56 object-cover"
                              />
                            </div>
                          </div>
                          <div className="order-2 hidden lg:flex items-center justify-center self-stretch">
                            <div className="relative flex h-full items-center justify-center">
                              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-blue-100 rounded-full"></div>
                              <div className="relative z-10 w-7 h-7 rounded-full bg-[#9fc4e3] border-4 border-white shadow-[0_0_0_4px_rgba(191,219,254,0.8)]"></div>
                            </div>
                          </div>
                          <div className="order-1 lg:order-3 text-center lg:text-left px-2 md:px-6">
                            <h3 className="text-2xl md:text-3xl font-black text-blue-900">{item.title}</h3>
                            <p className="text-sm md:text-base text-gray-400 font-medium mt-1">{item.year}</p>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4 max-w-xl">
                              {item.desc}
                            </p>
                          </div>
                        </>
                      )}
                      <div className="lg:hidden mx-auto w-5 h-5 rounded-full bg-[#9fc4e3] border-4 border-white shadow-[0_0_0_4px_rgba(191,219,254,0.7)]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="py-12 md:py-24 bg-gray-50 rounded-2xl md:rounded-[4rem] px-6 md:px-12 lg:px-20 mb-16 md:mb-24 lg:mb-32">
              <SectionTitle title="The Zed-King Standard" subtitle="The principles that guide every installation, inspection, and support visit we deliver." />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-8 md:mt-16">
                {[
                  { title: "Practical System Planning", desc: "We recommend equipment and layouts based on real site conditions, risk points, access routes, and day-to-day operations.", icon: Settings },
                  { title: "Compliance You Can Track", desc: "From inspections and NOC support to documentation readiness, we help clients stay clear, prepared, and audit-friendly.", icon: FileCheck },
                  { title: "Support Beyond Installation", desc: "Our team stays involved with AMC, testing, staff guidance, and responsive service so protection does not stop after handover.", icon: PhoneCall }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 rounded-xl md:rounded-2xl flex items-center justify-center text-red-600 mb-5 md:mb-6">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-3 md:mb-4">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Testimonials Section */}
            <div className="mb-16 md:mb-24 lg:mb-32">
              <SectionTitle title="Client Confidence" subtitle="What our clients value most about working with Zed-King." />
              <div className="relative mt-8 md:mt-14">
                <div className="testimonial-marquee overflow-hidden py-2">
                  <div className="testimonial-marquee-track">
                    {[...testimonials, ...testimonials].map((item, i) => (
                      <div key={i} className="testimonial-marquee-card bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-2 mb-4">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <span key={starIndex} className="text-red-600 text-lg leading-none">★</span>
                          ))}
                        </div>
                        <p className="text-gray-600 text-xs md:text-[0.875rem] tracking-wide text-justify leading-relaxed font-medium mb-5 md:mb-6">"{item.quote}"</p>
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-blue-900 font-black text-base md:text-md">{item.name}</p>
                          <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider mt-1">{item.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-white to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-white to-transparent"></div>
              </div>
            </div>
            {/* Certifications Row */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 pb-6 md:pb-10">
               {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                    <img src={cert.image} alt={cert.title} className="w-10 h-10 md:w-12 md:h-12" />
                    <div>
                      <p className="font-black text-blue-900 text-xs md:text-sm uppercase">{cert.title}</p>
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
      
      <main className="pt-[32px] sm:pt-[42px] lg:pt-[32px]">
        {renderPage()}
      </main>

      {activePage === 'home' && <HomeInquirySection />}

      <Footer setActivePage={setActivePage} />

      {/* Persistent Action Hub */}
      <div className="fixed bottom-6 right-4 sm:bottom-10 sm:right-10 flex flex-col space-y-4 sm:space-y-6 z-40">
        <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-button floating-contact-button--whatsapp group relative"
          title="Chat on WhatsApp"
        >
          <span className="floating-contact-glow" />
          <span className="floating-contact-tooltip floating-contact-tooltip--whatsapp">Chat With Us</span>
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="floating-contact-button floating-contact-button--call group relative"
          title="Direct Call"
        >
          <span className="floating-contact-glow" />
          <span className="floating-contact-tooltip floating-contact-tooltip--call">Immediate Call</span>
          <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
    </div>
  );
}
