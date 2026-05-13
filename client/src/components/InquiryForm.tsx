import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { CONTACT_INFO, SERVICES } from "@/constants";

type InquiryFormStatus = "idle" | "submitting" | "success" | "error";

type InquiryFormValues = {
  fullName: string;
  mobileNumber: string;
  serviceId: string;
  siteAddress: string;
  siteRequirements: string;
};

const defaultValues: InquiryFormValues = {
  fullName: "",
  mobileNumber: "",
  serviceId: "",
  siteAddress: "",
  siteRequirements: "",
};

export default function InquiryForm({
  compact = false,
  dark = false,
  source = "Website enquiry form",
}: {
  compact?: boolean;
  dark?: boolean;
  source?: string;
}) {
  const [formValues, setFormValues] = useState<InquiryFormValues>(defaultValues);
  const [status, setStatus] = useState<InquiryFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof InquiryFormValues, value: string) => {
    setFormValues((currentValues) => ({ ...currentValues, [field]: value }));
  };

  const resetForm = () => {
    setFormValues(defaultValues);
    setStatus("idle");
    setErrorMessage("");
  };

  const getInquiryMessage = () => {
    const selectedService = SERVICES.find((service) => service.id === formValues.serviceId);

    return [
      "New Enquiry / Callback Request",
      "",
      `Name: ${formValues.fullName}`,
      `Phone: ${formValues.mobileNumber}`,
      `Service: ${selectedService?.title ?? formValues.serviceId}`,
      `Site Address: ${formValues.siteAddress}`,
      `Requirements: ${formValues.siteRequirements || "No extra requirements added."}`,
      `Submitted From: ${source}`,
    ].join("\n");
  };

  const openWhatsAppDraft = () => {
    const message = getInquiryMessage();
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openEmailDraft = () => {
    const message = getInquiryMessage();
    const subject = "New Enquiry - Zed-King Fire & Safety";
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    setStatus("success");
  };

  return (
    <div
      className={`${
        dark
          ? "border border-white/10 bg-[#162541] text-white shadow-[0_24px_60px_rgba(2,6,23,0.35)]"
          : "border border-gray-100 bg-white text-blue-900 shadow-2xl"
      } ${
        compact ? "p-6 sm:p-8 lg:p-10" : "p-6 sm:p-10 lg:p-12"
      } rounded-2xl lg:rounded-[2rem]`}
    >
      {status === "success" ? (
        <div className="text-center py-10 md:py-16">
          <div className={`${dark ? "bg-emerald-500/12" : "bg-green-100"} w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-inner`}>
            <CheckCircle className={`${dark ? "text-emerald-300" : "text-green-600"} w-10 h-10 md:w-12 md:h-12`} />
          </div>
          <h3 className={`text-2xl md:text-4xl font-black mb-4 ${dark ? "text-white" : "text-blue-900"}`}>
            Request Received!
          </h3>
          <p className={`text-base md:text-xl leading-relaxed ${dark ? "text-slate-300" : "text-gray-500"}`}>
            Choose how you want to send your enquiry. We'll get back to you promptly.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-3 md:gap-4 max-w-xl mx-auto">
            <button
              type="button"
              onClick={openWhatsAppDraft}
              className={`rounded-2xl py-4 px-6 font-black text-base shadow-2xl transition-all transform active:scale-95 ${
                dark
                  ? "bg-emerald-400 text-slate-950 hover:brightness-105"
                  : "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-600/30"
              }`}
            >
              Send on WhatsApp
            </button>

            <button
              type="button"
              onClick={openEmailDraft}
              className={`rounded-2xl py-4 px-6 font-black text-base shadow-2xl transition-all transform active:scale-95 ${
                dark
                  ? "bg-white/10 text-white hover:bg-white/14 border border-white/10"
                  : "bg-white text-blue-900 hover:bg-gray-50 border border-gray-100"
              }`}
            >
              Send via Email
            </button>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className={`mt-8 md:mt-10 font-black text-sm uppercase tracking-widest border-b-2 pb-1 ${dark ? "border-amber-400 text-amber-300" : "border-red-600 text-red-600"}`}
          >
            Submit Another Query
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 md:space-y-8"
        >
          <div className="mb-6 space-y-2">
            <h3 className={`text-2xl md:text-4xl font-black ${dark ? "text-white" : "text-blue-900"}`}>
              Enquiry / Feedback Form
            </h3>
            <p className={`${dark ? "text-slate-300" : "text-gray-500"} text-sm md:text-base leading-relaxed`}>
              Share your query with us and our team will get back to you promptly.
            </p>
          </div>

          <div className="space-y-2">
            <label className={`text-sm font-black uppercase tracking-widest ${dark ? "text-slate-300" : "text-blue-900"}`}>
              Full Name
            </label>
            <input
              required
              name="fullName"
              type="text"
              value={formValues.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              className={`w-full rounded-xl md:rounded-2xl border p-4 md:p-5 outline-none transition-all text-base font-bold ${
                dark
                  ? "border-white/10 bg-white/10 text-white placeholder:text-slate-400 focus:border-red-400 focus:bg-white/14"
                  : "border-transparent bg-gray-50 text-blue-900 focus:border-red-600 focus:bg-white"
              }`}
              placeholder="Your Name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            <div className="space-y-2">
              <label className={`text-sm font-black uppercase tracking-widest ${dark ? "text-slate-300" : "text-blue-900"}`}>
                Mobile Number
              </label>
              <input
                required
                name="mobileNumber"
                type="tel"
                value={formValues.mobileNumber}
                onChange={(event) => updateField("mobileNumber", event.target.value)}
                className={`w-full rounded-xl md:rounded-2xl border p-4 md:p-5 outline-none transition-all text-base font-bold ${
                  dark
                    ? "border-white/10 bg-white/10 text-white placeholder:text-slate-400 focus:border-red-400 focus:bg-white/14"
                    : "border-transparent bg-gray-50 text-blue-900 focus:border-red-600 focus:bg-white"
                }`}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div className="space-y-2">
              <label className={`text-sm font-black uppercase tracking-widest ${dark ? "text-slate-300" : "text-blue-900"}`}>
                Required Service
              </label>
              <select
                required
                name="serviceId"
                value={formValues.serviceId}
                onChange={(event) => updateField("serviceId", event.target.value)}
                className={`w-full appearance-none cursor-pointer rounded-xl md:rounded-2xl border p-4 md:p-5 outline-none transition-all text-base font-bold ${
                  dark
                    ? "border-white/10 bg-white/10 text-white focus:border-red-400 focus:bg-white/14"
                    : "border-transparent bg-gray-50 text-blue-900 focus:border-red-600 focus:bg-white"
                }`}
              >
                <option value="" className="text-blue-900">
                  Select Service
                </option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="text-blue-900">
                    {s.title}
                  </option>
                ))}
                <option value="audit" className="text-blue-900">
                  Safety Audit
                </option>
                <option value="noc" className="text-blue-900">
                  Fire NOC
                </option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className={`text-sm font-black uppercase tracking-widest ${dark ? "text-slate-300" : "text-blue-900"}`}>
              Site Address
            </label>
            <input
              required
              name="siteAddress"
              type="text"
              value={formValues.siteAddress}
              onChange={(event) => updateField("siteAddress", event.target.value)}
              className={`w-full rounded-xl md:rounded-2xl border p-4 md:p-5 outline-none transition-all text-base font-bold ${
                dark
                  ? "border-white/10 bg-white/10 text-white placeholder:text-slate-400 focus:border-red-400 focus:bg-white/14"
                  : "border-transparent bg-gray-50 text-blue-900 focus:border-red-600 focus:bg-white"
              }`}
              placeholder="Full address of the facility"
            />
          </div>

          <div className="space-y-2">
            <label className={`text-sm font-black uppercase tracking-widest ${dark ? "text-slate-300" : "text-blue-900"}`}>
              Site Requirements
            </label>
            <textarea
              name="siteRequirements"
              rows={4}
              value={formValues.siteRequirements}
              onChange={(event) => updateField("siteRequirements", event.target.value)}
              className={`w-full rounded-xl md:rounded-2xl border p-4 md:p-5 outline-none transition-all text-base font-bold ${
                dark
                  ? "border-white/10 bg-white/10 text-white placeholder:text-slate-400 focus:border-red-400 focus:bg-white/14"
                  : "border-transparent bg-gray-50 text-blue-900 focus:border-red-600 focus:bg-white"
              }`}
              placeholder="Tell us about your facility..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className={`w-full rounded-2xl py-4 md:py-5 font-black text-lg shadow-2xl transition-all transform active:scale-95 ${
              dark
                ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 hover:brightness-105"
                : "bg-red-600 text-white hover:bg-red-700 hover:shadow-red-600/30"
            } ${status === "submitting" ? "cursor-wait opacity-75" : ""}`}
          >
            {status === "submitting" ? "Sending Enquiry..." : "Submit Enquiry"}
          </button>

          {status === "error" && (
            <p className={`text-sm font-bold ${dark ? "text-amber-200" : "text-red-600"}`}>
              {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
