import React, { useState, useEffect } from "react";
import { X, Menu, Phone, ChevronDown, ChevronRight, Flame, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "@/constants";
import logoImg from "@assets/image_1771058231594.png";

const Navbar = ({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: (p: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
  ];
  const navLinksAfterGallery = [
    { id: "projects", label: "Our Work" },
    { id: "contact", label: "Contact" },
  ];
  const galleryLinks = [
    { id: "gallery-category/Morning%20Parade", label: "Morning Parade" },
    { id: "gallery-category/Classroom", label: "Classroom" },
    { id: "gallery-category/Events", label: "Events" },
    { id: "gallery-category/Project", label: "Project" },
  ];

  const handleLinkClick = (id: string) => {
    setActivePage(id);
    setIsOpen(false);
    setIsGalleryOpen(false);
    window.scrollTo(0, 0);
  };

  // Jab menu open ho to background scroll band karne ke liye (Optional effect)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    // Update: Mobile view ke liye 'bg-white' fix kiya hai taaki transparency issue na ho
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white shadow-2xl" : "bg-white lg:bg-white/90 backdrop-blur-sm"}`}
    >
      <div
        className={`overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white shadow-[0_8px_24px_rgba(220,38,38,0.22)] transition-all duration-500 ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-56 opacity-100 sm:max-h-32"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-2 px-3 py-2 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:max-w-[52%] sm:justify-start">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
              <Flame className="h-3.5 w-3.5 shrink-0" />
            </div>
            <span className="text-[9px] font-black uppercase leading-relaxed tracking-[0.14em] sm:text-[10px] lg:text-xs">
              Complete Fire Safety Solutions for Every Site and Every Stage
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:max-w-[48%] sm:justify-end">
            <div className="hidden items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.1em] ring-1 ring-white/15 lg:flex lg:px-3 lg:text-[10px]">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              <span>Installation, AMC & Compliance Support</span>
            </div>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[9px] font-black text-red-600 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-50 sm:px-3 sm:text-[10px]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-4 lg:px-8 flex justify-between items-center transition-all duration-500 ${isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-4 lg:py-5"}`}>
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => handleLinkClick("home")}
        >
          <img
            src={logoImg}
            alt="Zed-King Logo"
            className="h-9 sm:h-11 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col -space-y-0.5">
            <span className="text-base sm:text-lg lg:text-2xl font-black tracking-tighter text-blue-900">
              ZED-KING
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-red-600 tracking-[0.15em] uppercase">
              Fire and Safety
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-bold text-sm uppercase tracking-widest transition-all hover:text-red-600 relative py-2 group ${
                activePage === link.id ? "text-red-600" : "text-blue-900"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform origin-left transition-transform duration-300 ${activePage === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              ></span>
            </button>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setIsGalleryOpen(true)}
            onMouseLeave={() => setIsGalleryOpen(false)}
          >
            <div
              className={`relative py-2 group flex items-center ${
                activePage.startsWith("gallery") ? "text-red-600" : "text-blue-900"
              }`}
            >
              <button
                onClick={() => handleLinkClick("gallery")}
                className="font-bold text-sm uppercase tracking-widest transition-all hover:text-red-600"
              >
                Gallery
              </button>
              <button
                onClick={() => setIsGalleryOpen((prev) => !prev)}
                className="ml-2 transition-all hover:text-red-600"
                aria-label="Toggle gallery categories"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${isGalleryOpen ? "rotate-180" : ""}`} />
              </button>
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform origin-left transition-transform duration-300 ${activePage.startsWith("gallery") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              ></span>
            </div>
            {isGalleryOpen ? (
              <div className="absolute left-0 top-full w-56 pt-3">
                <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                  {galleryLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-black text-blue-900 hover:bg-blue-50 hover:text-red-600 transition-colors"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {navLinksAfterGallery.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-bold text-sm uppercase tracking-widest transition-all hover:text-red-600 relative py-2 group ${
                activePage === link.id ? "text-red-600" : "text-blue-900"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform origin-left transition-transform duration-300 ${activePage === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              ></span>
            </button>
          ))}
          <button
            onClick={() => handleLinkClick("contact")}
            className="bg-red-600 text-white px-5 py-3 xl:px-8 xl:py-3.5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/30 hover:-translate-y-1"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-blue-900 w-6 h-6" />
          ) : (
            <Menu className="text-blue-900 w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu - CHANGES DONE HERE */}
      {/* Added z-[9999] and ensured bg-white is applied strictly */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-white flex flex-col px-5 pb-7 pt-5 space-y-4 h-screen w-full overflow-y-auto">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              <img
                src={logoImg}
                alt="Zed-King Logo"
                className="h-10 w-auto shrink-0 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[1.45rem] font-black leading-none tracking-tight text-blue-900">
                  ZED-KING
                </span>
                <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">
                  Fire and Safety
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-gray-100 p-1.5 hover:bg-gray-200"
            >
              <X className="h-5 w-5 text-blue-900" />
            </button>
          </div>

          <div className="flex-1 flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between border-b border-gray-100 py-2 text-left text-[1.8rem] font-black leading-[1.05] sm:text-[1.95rem] ${activePage === link.id ? "text-red-600" : "text-blue-900"}`}
              >
                {link.label}{" "}
                <ChevronRight
                  className={`h-5 w-5 shrink-0 opacity-30 sm:h-6 sm:w-6 ${activePage === link.id ? "text-red-600" : "text-blue-900"}`}
                />
              </button>
            ))}
            <div className="border-b border-gray-100 py-2">
              <div className={`flex items-center justify-between ${activePage.startsWith("gallery") ? "text-red-600" : "text-blue-900"}`}>
                <button
                  onClick={() => handleLinkClick("gallery")}
                  className="text-left text-[1.8rem] font-black leading-[1.05] sm:text-[1.95rem]"
                >
                  Gallery
                </button>
                <button
                  onClick={() => setIsGalleryOpen((prev) => !prev)}
                  aria-label="Toggle gallery categories"
                >
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform sm:h-6 sm:w-6 ${isGalleryOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {isGalleryOpen ? (
                <div className="mt-3 space-y-2 pl-2">
                  {galleryLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className="flex w-full items-center justify-between rounded-xl bg-gray-50 px-3.5 py-2.5 text-left text-sm font-bold text-blue-900"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            {navLinksAfterGallery.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between border-b border-gray-100 py-2 text-left text-[1.8rem] font-black leading-[1.05] sm:text-[1.95rem] ${activePage === link.id ? "text-red-600" : "text-blue-900"}`}
              >
                {link.label}{" "}
                <ChevronRight
                  className={`h-5 w-5 shrink-0 opacity-30 sm:h-6 sm:w-6 ${activePage === link.id ? "text-red-600" : "text-blue-900"}`}
                />
              </button>
            ))}
          </div>

          <div className="space-y-3 pb-4 pt-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center rounded-xl bg-blue-50 py-3 text-base font-bold text-blue-900"
            >
              <Phone className="mr-2.5 h-5 w-5 text-red-600" /> {CONTACT_INFO.phone}
            </a>
            <button
              onClick={() => handleLinkClick("contact")}
              className="w-full rounded-2xl bg-red-600 py-4 text-lg font-black text-white shadow-2xl transition-transform hover:bg-red-700 active:scale-95"
            >
              Book Free Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
