import React from 'react';
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin, FileCheck } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

const TermsOfService = ({ onBack }: { onBack: () => void }) => {
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
              <ShieldCheck className="h-6 w-6 text-red-500" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-red-300">Legal</span>
          </div>
          <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Terms of <span className="text-red-600">Service</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
            Effective Date: January 1, 2026 | Last Updated: May 2, 2026
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          {/* Introduction */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <p className="text-base leading-relaxed text-slate-200">
              Welcome to <strong className="text-white">Zed-King Fire and Safety</strong>. These Terms of Service ("Terms") govern your use of our website and the fire safety services we provide, including fire extinguisher supply, detection and alarm systems, hydrant and sprinkler installations, annual maintenance contracts (AMC), safety training programs, and fire NOC consultancy. By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>
          </div>

          {/* 1. Services */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">1.</span> Our Services
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-4">Zed-King Fire and Safety provides the following services:</p>
            <ul className="space-y-3 text-sm text-slate-300">
              {[
                "Supply of fire extinguishers (ABC, DCP, Water, Foam, Clean Agent, CO2, Folding System) complying with BIS/ISI standards",
                "Design, installation, and commissioning of fire detection and alarm systems",
                "Hydrant and sprinkler system engineering and deployment",
                "Annual Maintenance Contracts (AMC) for fire safety equipment",
                "Fire safety training, evacuation drills, and first-aid programs",
                "Fire NOC consultancy and compliance documentation support",
                "Safety audits and site risk assessments",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-300 mt-4">
              Service availability, pricing, and scope are subject to site conditions and mutual agreement via a written quotation or service contract.
            </p>
          </div>

          {/* 2. Website Use */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">2.</span> Website Use
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-3">
              Our website is provided for informational purposes and as a channel for service inquiries. You agree to:
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Provide accurate and truthful information when submitting inquiry forms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Not misuse, disrupt, or attempt unauthorized access to the website or its systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Not reproduce, modify, or redistribute website content without prior written consent</span>
              </li>
            </ul>
          </div>

          {/* 3. Inquiry & Booking */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">3.</span> Service Inquiry & Booking
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Submitting an inquiry form on our website does not constitute a binding contract. A service engagement is confirmed only after we provide a written quotation or proposal and you accept it through formal acknowledgment or advance payment. We offer a free initial site inspection within city limits for qualifying projects. Final scope, pricing, and timelines are determined post-inspection and documented in a service agreement.
            </p>
          </div>

          {/* 4. Payment & Fees */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">4.</span> Payment & Fees
            </h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Payment terms will be specified in the quotation or service agreement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Advance payments may be required before work commencement, as per the agreed terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>All prices are in Indian Rupees (INR) and are exclusive of applicable taxes (GST) unless stated otherwise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Late payment may result in suspension of services or AMC coverage</span>
              </li>
            </ul>
          </div>

          {/* 5. AMC Terms */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">5.</span> Annual Maintenance Contract (AMC)
            </h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>AMC coverage begins upon execution of the contract and receipt of the applicable fee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Preventive maintenance visits will be scheduled as per the agreed frequency in the contract</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Emergency on-call support is available 24/7 for active AMC clients</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Replacement parts, consumables, and third-party equipment may be charged separately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>AMC for third-party installed systems is subject to an initial "as-is" audit</span>
              </li>
            </ul>
          </div>

          {/* 6. Limitation of Liability */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">6.</span> Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              While we strive to deliver the highest quality fire safety solutions, our liability is limited as follows:
            </p>
            <ul className="space-y-3 text-sm text-slate-300 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Equipment supplied is covered under manufacturer warranty and applicable BIS/ISI guarantees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>We are not liable for damages arising from client misuse, neglect, or unauthorized modifications to installed systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Fire NOC consultancy support does not guarantee approval, as decisions rest with the Fire Department and regulatory authorities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Our total liability shall not exceed the amount paid by the client for the specific service in question</span>
              </li>
            </ul>
          </div>

          {/* 7. Intellectual Property */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">7.</span> Intellectual Property
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              All content on this website, including text, images, logos, graphics, and design, is the intellectual property of Zed-King Fire and Safety and is protected under applicable copyright and trademark laws. Unauthorized reproduction, distribution, or use of any content is strictly prohibited.
            </p>
          </div>

          {/* 8. Third-Party Links */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">8.</span> Third-Party Links & Services
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Our website may contain links to third-party websites or services (e.g., Google Maps, social media platforms). We are not responsible for the content, privacy practices, or terms of these external sites. Access to third-party links is at your own risk.
            </p>
          </div>

          {/* 9. Privacy & Data */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">9.</span> Privacy & Data Collection
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Information submitted through our inquiry forms (name, phone number, email, site address, and requirements) is used solely for the purpose of responding to your inquiry and providing our services. We do not sell or share your personal data with third parties for marketing purposes. For detailed information, please refer to our Privacy Policy.
            </p>
          </div>

          {/* 10. Termination */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">10.</span> Termination
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We reserve the right to suspend or terminate service engagement if a client breaches these Terms, fails to make timely payments, or engages in conduct that endangers our personnel or operations. AMC contracts can be renewed or terminated as per the terms specified in the individual agreement.
            </p>
          </div>

          {/* 11. Governing Law */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">11.</span> Governing Law & Dispute Resolution
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in <strong className="text-white">Kaithal, Haryana, India</strong>. We encourage amicable resolution through discussion before pursuing formal legal proceedings.
            </p>
          </div>

          {/* 12. Changes to Terms */}
          <div className="rounded-2xl border border-white/10 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="text-red-500">12.</span> Changes to Terms
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices. Updated Terms will be posted on this page with a revised effective date. Continued use of our website or services after such updates constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-red-500/20 bg-[#162541] p-6 md:p-10">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
              <span className="text-red-500">13.</span> Contact Us
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 mb-6">
              If you have any questions or concerns about these Terms of Service, please reach out to us:
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
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
