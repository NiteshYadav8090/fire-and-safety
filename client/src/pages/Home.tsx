import React from 'react';
import { ArrowRight, Calendar, CheckCircle, Users, Award, Flame, Bell, Droplets, Settings, GraduationCap, FileCheck, PhoneCall } from 'lucide-react';
import { SERVICES, CLIENTS, CONTACT_INFO, GALLERY } from '@/constants';
import SectionTitle from '@/components/SectionTitle';
import BlogSection from '@/components/BlogSection';
import StudentReviewsSection from '@/components/StudentReviewsSection';

import heroMain from "@assets/hero-fire-scene.png";

const heroSlides = [
  {
    image: heroMain,
    eyebrow: "Accredited & Certified Grade-A Provider",
    titleStart: "Complete ",
    titleHighlight: "Fire & Safety",
    titleEnd: " Solutions by Zed-King",
    description:
      "Complete installation, certification, and practical training for industrial and commercial spaces.",
    position: "object-center",
  },
  {
    image: heroMain,
    eyebrow: "Hands-On Fire Drill Execution",
    titleStart: "Practical ",
    titleHighlight: "Emergency Response",
    titleEnd: " Training for Real Site Conditions",
    description:
      "Live drills and evacuation guidance that prepare teams for real emergencies.",
    position: "object-[62%_center] md:object-[68%_center]",
  },
  {
    image: heroMain,
    eyebrow: "Fire Safety Awareness Programs",
    titleStart: "Your Equipment,",
    titleHighlight: "Always Ready.",
    titleEnd: " Always Reliable.",
    description:
      "Audits, live demos, and compliance support delivered by one experienced team.",
    position: "object-[58%_center] md:object-[64%_center]",
  },
  {
    image: heroMain,
    eyebrow: "Annual Maintenance & Equipment Supply",
    titleStart: "Reliable ",
    titleHighlight: "Fire Equipment",
    titleEnd: " Service & AMC Programs",
    description:
      "Reliable equipment service, refilling, testing, and AMC support when it matters most.",
    position: "object-[55%_center] md:object-[60%_center]",
  },
] as const;

const CounterValue = ({
  value,
  suffix = "",
  className,
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const counterRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = counterRef.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    let frameId = 0;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateCount);
      }
    };

    frameId = window.requestAnimationFrame(updateCount);
    return () => window.cancelAnimationFrame(frameId);
  }, [duration, hasStarted, value]);

  return (
    <div ref={counterRef} className={className}>
      {count}
      {suffix}
    </div>
  );
};

const Home = ({
  setActivePage,
  initialSectionId,
}: {
  setActivePage: (p: string) => void;
  initialSectionId?: string;
}) => {
  const [activeHeroSlide, setActiveHeroSlide] = React.useState(0);
  const [isReducedMotion, setIsReducedMotion] = React.useState(false);

  const showNextHeroSlide = React.useCallback(() => {
    setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
  }, []);

  React.useEffect(() => {
    if (!initialSectionId) return;
    const t = window.setTimeout(() => {
      const el = document.getElementById(`home-${initialSectionId}`);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => window.clearTimeout(t);
  }, [initialSectionId]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  React.useEffect(() => {
    if (isReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      showNextHeroSlide();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isReducedMotion, showNextHeroSlide]);

  const stats = [
    { label: 'Years Experience', value: 12, suffix: '+', icon: Calendar },
    { label: 'Success Projects', value: 650, suffix: '+', icon: CheckCircle },
    { label: 'Safety Experts', value: 3, suffix: '+', icon: Users },
    { label: 'Approvals', text: 'Grade-A', icon: Award },
  ] as const;
  const currentHeroSlide = heroSlides[activeHeroSlide];
  const placementLogos = Array.from({ length: 30 }, (_, index) => CLIENTS[index % CLIENTS.length]);
  const clientRows = [
    placementLogos.slice(0, 10),
    placementLogos.slice(10, 20),
    placementLogos.slice(20, 30),
  ] as const;

  return (
    <div>
      {/* Hero Section â€” mobile: 70vh, tablet: 80vh, desktop: 100vh */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#08172f] pt-8 md:min-h-[760px] md:pt-0">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.eyebrow}
              src={slide.image}
              className={`absolute inset-0 h-full w-full object-cover hero-image-transition ${slide.position} ${
                index === activeHeroSlide ? "scale-100 opacity-100" : "scale-[1.08] opacity-0"
              }`}
              alt={slide.eyebrow}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          ))}
          <div className="absolute inset-0 bg-black/28"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,12,20,0.9)_0%,rgba(7,12,20,0.7)_34%,rgba(7,12,20,0.28)_62%,rgba(7,12,20,0.12)_100%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.24)_100%)]"></div>
        </div>

        <div className="container relative z-10 mx-auto flex w-full px-4 sm:px-5 lg:px-8">
          <div className="flex min-h-[620px] w-full items-center py-20 sm:py-24 md:min-h-[760px] lg:py-28">
            <div className="w-full max-w-4xl">
              <div className="hero-copy-stage items-center">
                <div key={currentHeroSlide.eyebrow} className="hero-slide-copy w-full">
                  <div className="hero-content-rise mb-4 sm:mb-5">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/90 shadow-lg backdrop-blur-md sm:text-xs">
                      {currentHeroSlide.eyebrow}
                    </span>
                  </div>
                  <h1 className="hero-content-rise hero-delay-1 max-w-[860px] text-[clamp(2rem,5vw,4rem)] font-black leading-[1.15] tracking-[2px] text-white">
                    {currentHeroSlide.titleStart}
                    <span className="text-red-600">
                      {currentHeroSlide.titleHighlight}
                    </span>
                    {currentHeroSlide.titleEnd}
                  </h1>
                  <p className="tracking-wide hero-content-rise hero-delay-2 mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 sm:text-lg md:mt-6 md:text-[1.4rem]">
                    {currentHeroSlide.description}
                  </p>
                </div>
              </div>

              <div className="hero-content-rise hero-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => { setActivePage('services'); window.scrollTo(0, 0); }}
                  className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-red-600 px-7 py-4 text-base font-extrabold text-slate-950 shadow-[0_18px_45px_rgba(246,191,51,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffd057] active:scale-95"
                >
                  Explore Services <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={() => { setActivePage('contact'); window.scrollTo(0, 0); }}
                  className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/30 bg-black/25 px-7 py-4 text-base font-extrabold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/12 active:scale-95"
                >
                  Free Safety Audit
                </button>
              </div>

              {/* <div className="hero-content-rise hero-delay-3 mt-10 flex items-center gap-4 text-white/75">
                <span className="text-xs font-extrabold uppercase tracking-[0.35em]">Scroll</span>
                <div className="h-px w-16 bg-white/45"></div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-3 text-white/70">
            <span className="text-[10px] font-bold uppercase tracking-[0.38em]">Scroll</span>
            <div className="flex h-12 w-7 justify-center rounded-full border border-white/35 pt-2">
              <div className="hero-scroll-dot h-3 w-1.5 rounded-full bg-white/85"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-white py-8 md:py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="bg-red-50 p-3 md:p-4 rounded-xl md:rounded-2xl mb-2 md:mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <stat.icon className="w-5 h-5 md:w-8 md:h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                {"value" in stat ? (
                  <CounterValue
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-xl sm:text-2xl md:text-4xl font-black text-blue-900"
                  />
                ) : (
                  <div className="text-xl sm:text-2xl md:text-4xl font-black text-blue-900">{stat.text}</div>
                )}
                <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section
        id="home-services"
        className="py-12 md:py-24 bg-gray-50 scroll-mt-24"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Fire Protection Engineering"
            subtitle="Industry-leading solutions for factories, residential complexes, and high-rise commercial structures."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SERVICES.slice(0, 6).map((s) => (
              <div
                key={s.id}
                className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-[2.5rem] shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 group relative overflow-hidden flex flex-col cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => {
                  setActivePage(`services#${s.id}`);
                  window.scrollTo(0, 0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActivePage(`services#${s.id}`);
                    window.scrollTo(0, 0);
                  }
                }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-red-50 rounded-bl-[60px] md:rounded-bl-[100px] -mr-4 -mt-4 md:-mr-8 md:-mt-8 group-hover:bg-red-600 transition-colors duration-500"></div>
                <div className="mb-5 md:mb-8 relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-900 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    {s.id === 'extinguishers' && <Flame className="w-5 h-5 md:w-6 md:h-6" />}
                    {s.id === 'alarms' && <Bell className="w-5 h-5 md:w-6 md:h-6" />}
                    {s.id === 'hydrants' && <Droplets className="w-5 h-5 md:w-6 md:h-6" />}
                    {s.id === 'amc' && <Settings className="w-5 h-5 md:w-6 md:h-6" />}
                    {s.id === 'training' && <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />}
                    {s.id === 'noc' && <FileCheck className="w-5 h-5 md:w-6 md:h-6" />}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-blue-900 mb-2 pr-6">{s.title}</h3>
                <p className="text-gray-600 mb-5 text-xs sm:text-sm md:text-base leading-relaxed">{s.description}</p>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePage(`services#${s.id}`);
                      window.scrollTo(0, 0);
                    }}
                    className="flex items-center text-red-600 font-black tracking-widest uppercase text-xs hover:gap-3 transition-all"
                  >
                    Service Details <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-14 text-center">
            <button
              onClick={() => { setActivePage('services'); window.scrollTo(0, 0); }}
              className="bg-blue-900 text-white px-7 py-3 md:px-10 md:py-4 rounded-xl font-black hover:bg-blue-800 transition-colors shadow-lg text-sm md:text-base"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="py-12 md:py-24 bg-[#111C33] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionTitle
            title="Trusted by Global Enterprises"
            subtitle="We are proud partners with industry leaders across various sectors."
            light
          />

            <div className="mt-10 space-y-4 md:space-y-5">
              {clientRows.map((row, rowIndex) => (
                <div
                  key={`client-row-${rowIndex + 1}`}
                  className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
                >
                  <div
                    className={`client-logo-track ${
                      rowIndex === 1 ? "client-logo-track-reverse" : "client-logo-track-forward"
                    }`}
                  >
                    {[...row, ...row].map((client, itemIndex) => (
                      <div
                        key={`client-${rowIndex}-${itemIndex}-${client.name}`}
                        className="client-grid-card"
                      >
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="h-24 sm:h-29 md:h-20 w-auto max-w-[110px] sm:max-w-[130px] md:max-w-[145px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      <BlogSection
        onReadArticle={(slug) => {
          setActivePage(`blog/${slug}`);
          window.scrollTo(0, 0);
        }}
      />

      {/* Emergency Feature */}
      <section className="py-10 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
          <div className="w-full md:flex-1">
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center gap-4 pr-0 md:pr-12 text-center md:text-left">
                <div className="bg-white/20 p-3 md:p-5 rounded-full animate-pulse shrink-0">
                  <PhoneCall className="w-6 h-6 md:w-10 md:h-10" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-3xl font-black">Emergency On-Call Support</h3>
                  <p className="text-red-100 text-xs sm:text-sm md:text-xl">Technical support available 24/7 for all AMC clients.</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-xl sm:text-2xl md:text-4xl font-black bg-white text-red-600 px-5 py-3 md:px-10 md:py-5 rounded-2xl md:rounded-3xl shadow-2xl cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}
          >
            {CONTACT_INFO.emergency}
          </div>
        </div>
      </section>

      {/* Training Gallery Marquee */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#05122E] via-[#06183D] to-[#07132E] overflow-hidden">
        <div className="px-4 lg:px-8">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-red-400 font-black tracking-[0.2em] uppercase text-xs sm:text-sm">
                Institute Gallery
              </p>
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-black mt-3">
                Life at ZedKing
              </h2>
              <p className="text-blue-100/90 max-w-3xl mx-auto mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                Glimpses of our vibrant campus life, hands-on practical sessions, and successful events.
              </p>
            </div>

            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="home-marquee-track home-marquee-ltr">
                {[...GALLERY, ...GALLERY].map((item, i) => (
                  <div key={`top-${item.id}-${i}`} className="home-marquee-card">
                    <img src={item.image} alt={`${item.type} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 md:mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="home-marquee-track home-marquee-rtl">
                {[...GALLERY, ...GALLERY].map((item, i) => (
                  <div key={`bottom-${item.id}-${i}`} className="home-marquee-card">
                    <img src={item.image} alt={`${item.type} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StudentReviewsSection />

    </div>
  );
};

export default Home;
