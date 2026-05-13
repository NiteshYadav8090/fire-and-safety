import React from 'react';
import { Clock3, ExternalLink, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';
import InquiryForm from '@/components/InquiryForm';

const ContactPage = () => {
  const phoneNumbers = [CONTACT_INFO.phone, ...(CONTACT_INFO.additionalPhones ?? [])];
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: CONTACT_INFO.socials.facebook, accent: 'text-blue-300' },
    { name: 'Instagram', icon: Instagram, url: CONTACT_INFO.socials.instagram, accent: 'text-pink-300' },
    { name: 'YouTube', icon: Youtube, url: CONTACT_INFO.socials.youtube, accent: 'text-red-300' },
  ] as const;

  const infoCards = [
    {
      title: 'Address',
      icon: MapPin,
      accent: 'text-blue-300',
      body: [CONTACT_INFO.address],
    },
    {
      title: 'Phone',
      icon: Phone,
      accent: 'text-emerald-300',
      body: phoneNumbers,
    },
    {
      title: 'Email',
      icon: Mail,
      accent: 'text-[#dc2626]',
      body: [CONTACT_INFO.email],
    },
    {
      title: 'Office Hours',
      icon: Clock3,
      accent: 'text-[#dc2626]',
      body: [CONTACT_INFO.workingHours],
    },
  ] as const;

  return (
    <section className="bg-[#0a1730] pb-16 pt-28 md:pb-20 md:pt-32 lg:pb-24 lg:pt-36">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 md:mb-12">
          <span className="mb-3 block text-xs font-black uppercase tracking-[0.3em] text-red-300 transition-colors duration-300 hover:text-red-200">
            Contact Us
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:via-[#dc2626] hover:to-white sm:text-4xl md:text-5xl">
            Reach Our Fire & Safety Team
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
            Same contact details, cleaner layout. Share your enquiry and we will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-white/10 bg-[#162541] p-5 shadow-[0_18px_45px_rgba(2,6,23,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-[#dc2626]/30 hover:shadow-[0_25px_60px_rgba(220,38,38,0.15)] cursor-pointer"
              onClick={() => {
                if (card.title === 'Address') {
                  window.open('https://maps.google.com/?q=Zed%20King%20Institute%20Fire%20and%20Safety%20Kaithal', '_blank');
                }
              }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                <card.icon className={`h-6 w-6 ${card.accent} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor]`} />
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#dc2626] transition-colors duration-300 group-hover:text-[#b91c1c]">
                {card.title}
              </p>
              <div className="mt-2 space-y-1.5">
                {card.title === 'Phone'
                  ? card.body.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s|-/g, '')}`}
                        className="block text-sm font-semibold leading-relaxed text-slate-100 transition-colors duration-300 hover:text-emerald-300 sm:text-base"
                      >
                        {phone}
                      </a>
                    ))
                  : card.title === 'Email'
                    ? card.body.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="block text-sm font-semibold leading-relaxed text-slate-100 transition-colors duration-300 break-all hover:text-[#dc2626] sm:text-base"
                        >
                          {email}
                        </a>
                      ))
                    : card.body.map((line) => (
                        <p key={line} className="text-sm font-semibold leading-relaxed text-slate-100 transition-colors duration-300 group-hover:text-white sm:text-base">
                          {line}
                        </p>
                      ))}
              </div>
              {card.title === 'Address' && (
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-black text-[#dc2626]">
                  Open in Maps <ExternalLink className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_1fr]">
          <InquiryForm dark source="Contact page enquiry form" />

          <div className="space-y-5">
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#162541] shadow-[0_18px_45px_rgba(2,6,23,0.25)] transition-all duration-300 hover:border-[#dc2626]/30 hover:shadow-[0_25px_60px_rgba(220,38,38,0.12)]">
              <div className="overflow-hidden">
                <iframe
                  title="Zed-King Fire and Safety Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.347011470906!2d76.42000018623047!3d29.79840852819153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911e1a738dd0fe1%3A0x375f8e3f8aa269fc!2sZed%20King%20Institute%20Fire%20and%20Safety!5e1!3m2!1sen!2sin!4v1777531237069!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', transition: 'transform 0.5s ease' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[320px] w-full transition-transform duration-500 group-hover:scale-105 md:h-[360px]"
                />
              </div>
              <div className="border-t border-white/8 px-5 py-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#dc2626]/10 transition-all duration-300 group-hover:bg-[#dc2626]/20">
                    <MapPin className="h-4 w-4 text-[#dc2626] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-relaxed text-slate-100">
                      {CONTACT_INFO.address}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Zed%20King%20Institute%20Fire%20and%20Safety%20Kaithal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/maps mt-2 inline-flex items-center gap-2 text-sm font-black text-[#dc2626] transition-all hover:text-[#b91c1c]"
                    >
                      View on Google Maps <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/maps:translate-x-0.5 group-hover/maps:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group/timing rounded-2xl border border-white/10 bg-[#162541] p-5 shadow-[0_18px_45px_rgba(2,6,23,0.25)] transition-all duration-300 hover:border-[#dc2626]/30 hover:shadow-[0_25px_60px_rgba(220,38,38,0.12)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#dc2626]/20 to-[#dc2626]/5 shadow-inner transition-all duration-300 group-hover/timing:scale-110 group-hover/timing:shadow-[0_0_15px_rgba(220,38,38,0.25)]">
                  <Clock3 className="h-4 w-4 text-[#dc2626] transition-transform duration-300 group-hover/timing:rotate-12" />
                </div>
                <h3 className="text-2xl font-black text-white">Office Timings</h3>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 transition-colors duration-300 hover:border-[#dc2626]/20">
                  <p className="text-sm font-semibold text-slate-300">Monday - Saturday</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-white">{CONTACT_INFO.workingHours}</span>
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300 transition-all duration-300 hover:scale-105 hover:bg-emerald-500/25">
                      Open
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 transition-colors duration-300 hover:border-[#dc2626]/20">
                  <p className="text-sm font-semibold text-slate-300">Emergency Helpline</p>
                  <a href={`tel:${CONTACT_INFO.emergency.replace(/\s|-/g, '')}`} className="text-sm font-black text-white hover:text-emerald-300 transition-colors">{CONTACT_INFO.emergency}</a>
                </div>
                <div className="flex items-center justify-between gap-4 transition-colors duration-300">
                  <p className="text-sm font-semibold text-slate-300">Email Support</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-black text-white break-all text-right hover:text-[#dc2626] transition-colors">{CONTACT_INFO.email}</a>
                </div>
              </div>

              <div className="mt-6 border-t border-white/8 pt-5">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                  Social Presence
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 transition-all duration-300 group-hover/social:scale-110 group-hover/social:bg-white/10">
                        <social.icon className={`h-4 w-4 ${social.accent} transition-transform duration-300 group-hover/social:scale-110`} />
                      </div>
                      <span className="transition-colors duration-300 group-hover/social:text-white">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
