
import React, { useState } from 'react';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '@/constants';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-red-600 font-black tracking-[0.3em] uppercase text-sm mb-6 block">Inquiry Channel</span>
            <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-8 leading-tight">Let's Secure <br />Your Facility.</h2>
            <p className="text-xl text-gray-500 mb-12">Submit your details for a technical consultation. We respond within 4 business hours.</p>
            
            <div className="space-y-10">
              <div className="flex gap-6 cursor-pointer" onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}>
                <div className="bg-white p-5 rounded-3xl shadow-xl"><Phone className="text-red-600 w-8 h-8" /></div>
                <div>
                  <h4 className="text-gray-400 font-black uppercase text-xs tracking-widest mb-1">Corporate Hotline</h4>
                  <p className="text-2xl font-black text-blue-900">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex gap-6 cursor-pointer" onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}`}>
                <div className="bg-white p-5 rounded-3xl shadow-xl"><Mail className="text-red-600 w-8 h-8" /></div>
                <div>
                  <h4 className="text-gray-400 font-black uppercase text-xs tracking-widest mb-1">Project Inquiries</h4>
                  <p className="text-2xl font-black text-blue-900">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-white p-5 rounded-3xl shadow-xl"><Clock className="text-red-600 w-8 h-8" /></div>
                <div>
                  <h4 className="text-gray-400 font-black uppercase text-xs tracking-widest mb-1">Office Hours</h4>
                  <p className="text-2xl font-black text-blue-900">{CONTACT_INFO.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-20">
                <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"><CheckCircle className="text-green-600 w-12 h-12" /></div>
                <h3 className="text-4xl font-black text-blue-900 mb-4">Request Received!</h3>
                <p className="text-xl text-gray-500 leading-relaxed">A safety advisor has been assigned to your request and will call you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-12 text-red-600 font-black text-sm uppercase tracking-widest border-b-2 border-red-600 pb-1">Submit Another Query</button>
              </div>
            ) : (
              <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-blue-900 uppercase tracking-widest">Full Name</label>
                  <input required type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white p-5 rounded-2xl outline-none transition-all text-lg font-bold text-blue-900" placeholder="Your Name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-blue-900 uppercase tracking-widest">Mobile Number</label>
                    <input required type="tel" className="w-full bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white p-5 rounded-2xl outline-none transition-all text-lg font-bold text-blue-900" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-blue-900 uppercase tracking-widest">Required Service</label>
                    <select required className="w-full bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white p-5 rounded-2xl outline-none transition-all text-lg font-bold text-blue-900 appearance-none cursor-pointer">
                      <option value="" className="text-blue-900">Select Service</option>
                      {SERVICES.map(s => <option key={s.id} value={s.id} className="text-blue-900">{s.title}</option>)}
                      <option value="audit" className="text-blue-900">Safety Audit</option>
                      <option value="noc" className="text-blue-900">Fire NOC</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-blue-900 uppercase tracking-widest">Site Address</label>
                  <input required type="text" className="w-full bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white p-5 rounded-2xl outline-none transition-all text-lg font-bold text-blue-900" placeholder="Full address of the facility" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-blue-900 uppercase tracking-widest">Site Requirements</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-2 border-transparent focus:border-red-600 focus:bg-white p-5 rounded-2xl outline-none transition-all text-lg font-bold text-blue-900" placeholder="Tell us about your facility..."></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-3xl font-black text-2xl shadow-2xl hover:shadow-red-600/30 transition-all transform active:scale-95">
                  Confirm Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
