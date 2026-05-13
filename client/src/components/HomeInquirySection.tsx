import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import InquiryForm from "@/components/InquiryForm";
import { CONTACT_INFO } from "@/constants";

export default function HomeInquirySection() {
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Request a Quick Callback"
          subtitle="Share your details and we’ll contact you for a site visit or consultation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start max-w-6xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-lg p-6 md:p-8">
              <div
                className="flex gap-4 md:gap-5 cursor-pointer"
                onClick={() => (window.location.href = `tel:${CONTACT_INFO.phone}`)}
              >
                <div className="bg-red-50 text-red-600  p-4 rounded-full hover:bg-red-600 hover:text-gray-100 shrink-0">
                  <Phone className=" w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 font-black uppercase text-xs tracking-widest mb-1">
                    Call Us
                  </p>
                  <p className="text-lg md:text-xl font-black text-blue-900 break-all">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>

              <div
                className="flex gap-4 md:gap-5 cursor-pointer mt-6"
                onClick={() => (window.location.href = `mailto:${CONTACT_INFO.email}`)}
              >
                <div className="bg-red-50 text-red-600  p-4 rounded-full hover:bg-red-600 hover:text-gray-100 shrink-0">
                  <Mail className="  w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 font-black uppercase text-xs tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-base md:text-xl font-black text-blue-900 break-all">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-5 mt-6">
                <div className="bg-red-50 text-red-600  p-4 rounded-full hover:bg-red-600 hover:text-gray-100 shrink-0">
                  <Clock className="  w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 font-black uppercase text-xs tracking-widest mb-1">
                    Working Hours
                  </p>
                  <p className="text-base md:text-xl font-black text-blue-900">
                    {CONTACT_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 bg-white">
              <div className="bg-blue-900 px-5 py-3 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <p className="text-white font-black text-xs uppercase tracking-widest">
                  Our Location - Kaithal, Haryana
                </p>
              </div>
              <iframe
                title="Zed-King Fire and Safety Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.347011470906!2d76.42000018623047!3d29.79840852819153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911e1a738dd0fe1%3A0x375f8e3f8aa269fc!2sZed%20King%20Institute%20Fire%20and%20Safety!5e1!3m2!1sen!2sin!4v1777531237069!5m2!1sen!2sin"
                width="100%"
                height="479"
                style={{ border: 0, display: "block", height: "437px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          <InquiryForm compact source="Home page callback form" />
        </div>
      </div>
    </section>
  );
}

