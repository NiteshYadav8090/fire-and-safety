import React, { useState, useEffect } from "react";
import { ShieldCheck, X, Menu, Phone, ChevronRight } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "gallery", label: "Gallery" },
    { id: "projects", label: "Our Work" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: string) => {
    setActivePage(id);
    setIsOpen(false);
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
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white shadow-2xl py-3" : "bg-white lg:bg-white/90 backdrop-blur-sm py-5"}`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => handleLinkClick("home")}
        >
          <img
            src={logoImg}
            alt="Zed-King Logo"
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col -space-y-1">
            <span
              className={`text-xl md:text-2xl font-black tracking-tighter text-blue-900`}
            >
              ZED-KING
            </span>
            <span className="text-[10px] md:text-xs font-bold text-red-600 tracking-[0.2em] uppercase">
              Fire and Safety
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
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
          <button
            onClick={() => handleLinkClick("contact")}
            className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/30 hover:-translate-y-1"
          >
            Get Expert Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-blue-900" />
          ) : (
            <Menu className="text-blue-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu - CHANGES DONE HERE */}
      {/* Added z-[9999] and ensured bg-white is applied strictly */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-white flex flex-col p-8 space-y-6 h-screen w-full overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <img
                src={logoImg}
                alt="Zed-King Logo"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-black text-blue-900 leading-none">
                  ZED-KING
                </span>
                <span className="text-[10px] font-bold text-red-600 tracking-wider">
                  Fire and Safety
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <X className="text-blue-900 w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left font-black text-3xl flex items-center justify-between py-2 border-b border-gray-100 ${activePage === link.id ? "text-red-600" : "text-blue-900"}`}
              >
                {link.label}{" "}
                <ChevronRight
                  className={`opacity-30 ${activePage === link.id ? "text-red-600" : "text-blue-900"}`}
                />
              </button>
            ))}
          </div>

          <div className="pt-4 space-y-4 pb-10">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center text-blue-900 font-bold text-lg bg-blue-50 py-4 rounded-xl"
            >
              <Phone className="mr-3 text-red-600" /> {CONTACT_INFO.phone}
            </a>
            <button
              onClick={() => handleLinkClick("contact")}
              className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-red-700 active:scale-95 transition-transform"
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
