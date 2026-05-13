import React from 'react';
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin, Lock, Eye, Database, UserCheck, Share2, Cookie, Bell } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

const PrivacyPolicy = ({ onBack }: { onBack: () => void }) => {
  return (
    <section className="bg-[#0a1730] pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto mb-10 md:mb-14">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-600/10 p-3 rounded-xl">
              <Lock className="h-6 w-6 text-red-500" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-red-300">Legal</span>
          </div>
          <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Privacy <span className="text-red-600">Policy</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
            Effective Date: January 1, 2026 | Last Updated: May 2, 2026
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          {/* Introduction */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <p className="text-base leading-relaxed text-slate-200">
              At <strong className="text-white">Zed-King Fire and Safety</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, submit an inquiry, or engage our fire safety services. By using our website, you consent to the practices described in this policy.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <Eye className="h-5 w-5 text-red-500" />
              <span>1. Information We Collect</span>
            </h2>
            <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">Information You Provide</h3>
            <ul className="space-y-2 text-sm text-slate-300 mb-6">
              {[
                "Full name and contact details (phone number, email address)",
                "Site address and project location information",
                "Service requirements and project descriptions submitted via inquiry forms",
                "Any additional details shared through phone calls, WhatsApp, or email correspondence",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">Information Automatically Collected</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                "Browser type, device information, and operating system",
                "IP address and approximate geographic location",
                "Pages visited, time spent on the website, and referral sources",
                "Cookies and similar tracking technologies (see Section 8)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <Database className="h-5 w-5 text-red-500" />
              <span>2. How We Use Your Information</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-4">We use the collected information for the following purposes:</p>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                "Responding to your service inquiries and providing quotations",
                "Scheduling and conducting site inspections",
                "Delivering fire safety services including installations, maintenance, and training",
                "Communicating important updates about your projects or AMC coverage",
                "Improving our website experience and service offerings",
                "Complying with legal and regulatory obligations",
                "Processing emergency support requests from AMC clients",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Sharing of Information */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <Share2 className="h-5 w-5 text-red-500" />
              <span>3. Sharing of Information</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-4">
              We do <strong className="text-white">not</strong> sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              {[
                "Service Partners: Limited information may be shared with equipment manufacturers or subcontractors strictly for fulfilling your service requirements",
                "Legal Compliance: We may disclose information if required by law, court order, or government authority",
                "Business Transfer: In the event of a merger, acquisition, or sale of assets, personal data may be transferred as part of the transaction",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Data Storage & Security */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <Lock className="h-5 w-5 text-red-500" />
              <span>4. Data Storage & Security</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-4">
              We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                "Secure storage of inquiry data and client records",
                "Access restricted to authorized personnel only",
                "Regular review of data handling practices",
                "Secure communication channels for sensitive information",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-300 mt-4">
              While we strive to protect your data, no internet-based system is 100% secure. We encourage you to exercise caution when sharing information online.
            </p>
          </div>

          {/* 5. Data Retention */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <Database className="h-5 w-5 text-red-500" />
              <span>5. Data Retention</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including providing our services, maintaining business records, and complying with legal obligations. Inquiry data from users who do not proceed with a service engagement may be retained for up to 12 months for follow-up purposes. Active client data is retained for the duration of the service relationship plus a reasonable period thereafter for record-keeping.
            </p>
          </div>

          {/* 6. Your Rights */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <UserCheck className="h-5 w-5 text-red-500" />
              <span>6. Your Rights</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-4">You have the right to:</p>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                "Request access to the personal information we hold about you",
                "Request correction of inaccurate or incomplete information",
                "Request deletion of your personal data, subject to legal retention requirements",
                "Withdraw consent for marketing communications at any time",
                "Lodge a complaint with the relevant data protection authority if you believe your rights have been violated",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-300 mt-4">
              To exercise any of these rights, please contact us using the information provided in Section 10.
            </p>
          </div>

          {/* 7. Children's Privacy */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <Eye className="h-5 w-5 text-red-500" />
              <span>7. Children's Privacy</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently received information from a child, we will delete it promptly.
            </p>
          </div>

          {/* 8. Cookies & Tracking */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <Cookie className="h-5 w-5 text-red-500" />
              <span>8. Cookies & Tracking Technologies</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-4">
              Our website may use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionalities.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              We may use third-party analytics services (such as Google Analytics) to collect anonymous usage data. These services have their own privacy policies governing data collection.
            </p>
          </div>

          {/* 9. Third-Party Services */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <Share2 className="h-5 w-5 text-red-500" />
              <span>9. Third-Party Services & Links</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-4">
              Our website may include embedded content or links to third-party services, including:
            </p>
            <ul className="space-y-2 text-sm text-slate-300 mb-4">
              {[
                "Google Maps for location display",
                "Social media platforms (Facebook, Instagram, YouTube)",
                "WhatsApp for business communication",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-300">
              We are not responsible for the privacy practices of these external services. We encourage you to review their respective privacy policies before interacting with them.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div className="rounded-2xl border border-red-500/20 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <Mail className="h-5 w-5 text-red-500" />
              <span>10. Contact Us</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-6">
              If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <MapPin className="h-5 w-5 text-red-500 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Phone className="h-5 w-5 text-red-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s|-/g, '')}`} className="hover:text-red-400 transition-colors">{CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Mail className="h-5 w-5 text-red-500 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-red-400 transition-colors break-all">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* 11. Updates to Policy */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <Bell className="h-5 w-5 text-red-500" />
              <span>11. Updates to This Policy</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make significant changes, we will update the "Last Updated" date at the top of this page and notify you through appropriate channels if required. We encourage you to review this policy periodically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
