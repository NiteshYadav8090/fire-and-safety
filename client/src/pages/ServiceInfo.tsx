import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bell,
  CheckCircle,
  ChevronRight,
  Droplets,
  FileCheck,
  Flame,
  GraduationCap,
  Settings,
} from "lucide-react";
import { SERVICES } from "@/constants";

export default function ServiceInfoPage({
  serviceId,
  setActivePage,
}: {
  serviceId: string;
  setActivePage: (p: string) => void;
}) {
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-blue-900">
              Service Not Found
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Requested service details are not available.
            </p>
            <button
              onClick={() => {
                setActivePage("services");
                window.scrollTo(0, 0);
              }}
              className="mt-8 bg-blue-900 text-white px-7 py-3 rounded-xl font-black hover:bg-blue-800 transition-colors"
            >
              Back To Services
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <button
          onClick={() => {
            setActivePage(`services#${service.id}`);
            window.scrollTo(0, 0);
          }}
          className="inline-flex items-center gap-2 text-blue-900 font-black text-sm uppercase tracking-widest hover:text-red-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back To Services
        </button>

        <div className="bg-white rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden">
          <div className="h-56 sm:h-72 md:h-96">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 md:p-4 bg-red-600 rounded-xl md:rounded-2xl text-white shadow-lg shrink-0">
                {service.id === "extinguishers" && <Flame />}
                {service.id === "alarms" && <Bell />}
                {service.id === "hydrants" && <Droplets />}
                {service.id === "amc" && <Settings />}
                {service.id === "training" && <GraduationCap />}
                {service.id === "noc" && <FileCheck />}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-blue-900 leading-tight">
                {service.title}
              </h1>
            </div>

            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
              {service.longDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-8">
              <div className="bg-gray-50 p-5 md:p-7 rounded-xl md:rounded-2xl">
                <h3 className="text-red-600 font-black uppercase text-xs tracking-widest mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {service.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start text-blue-900 font-bold text-sm md:text-base"
                    >
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 shrink-0 mt-1" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-5 md:p-7 rounded-xl md:rounded-2xl">
                <h3 className="text-red-600 font-black uppercase text-xs tracking-widest mb-3 flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Suitable Sectors
                </h3>
                <ul className="space-y-2">
                  {service.industries.map((i) => (
                    <li
                      key={i}
                      className="flex items-center text-blue-900 font-bold text-sm md:text-base"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-400 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setActivePage("contact");
                  window.scrollTo(0, 0);
                }}
                className="bg-blue-900 text-white px-8 py-3 rounded-xl font-black hover:bg-red-600 transition-colors text-sm md:text-base"
              >
                Book Consultation
              </button>
              <button
                onClick={() => {
                  setActivePage("services");
                  window.scrollTo(0, 0);
                }}
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-xl font-black border border-blue-900/20 hover:bg-blue-50 transition-colors text-sm md:text-base"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
