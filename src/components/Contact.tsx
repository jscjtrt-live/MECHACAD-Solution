import React from "react";
import { useState, type ChangeEvent, type FormEvent } from "react";
// import { Resend } from 'resend';

// const resend = new Resend('re_xxxxxxxxx');
const WHATSAPP_NUM = "0756133530";
const PHONE_NUM = "075 613 3530";

// const { data, error } = await resend.contacts.create({
//   email: 'steve.wozniak@gmail.com',
//   firstName: 'Steve',
//   lastName: 'Wozniak',
//   unsubscribed: false,
// });

const SERVICES_LIST = [
  "3D Modeling - Character/Figurine",
  "3D Modeling - Engineering CAD",
  "3D Modeling - General Design",
  "3D Printing - FDM",
  "3D Printing - Resin",
  "Laser Cutting - Metal",
  "Laser Cutting - Acrylic",
  "Laser Engraving",
  "PLC Programming & Automation",
  "Other / Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello MechaCAD Solutions!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0ABudget: ${form.budget}%0A%0AProject Details:%0A${form.message}`;
    window.open(
      `https://wa.me/94${WHATSAPP_NUM.replace(/\D/g, "").slice(1)}?text=${msg}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-carbon-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-brand-500" />
            <span className="text-brand-400 font-mono text-sm tracking-widest uppercase">
              Get In Touch
            </span>
            <div className="h-px w-10 bg-brand-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Start Your Project
          </h2>
          <p className="text-silver-500 text-lg max-w-xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours
            with a detailed quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="bg-carbon-800 border border-green-700/40 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-green-700/20 border border-green-600/40 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-xl">
                    {PHONE_NUM}
                  </div>
                  <div className="text-green-400 text-sm">
                    WhatsApp & Phone Available
                  </div>
                </div>
              </div>
              <a
                href={`https://wa.me/94${WHATSAPP_NUM.replace(/\D/g, "").slice(1)}?text=Hello%20MechaCAD%20Solutions!%20I'd%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white py-3.5 rounded-lg font-semibold transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact details */}
            <div className="bg-carbon-800 border border-carbon-700 rounded-xl p-6 space-y-5">
              <h3 className="text-white font-semibold text-lg">
                Direct Contact
              </h3>

              {[
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  label: "Phone / WhatsApp",
                  value: PHONE_NUM,
                },
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  label: "Email",
                  value: "info@mechacad.lk",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  label: "Location",
                  value: "Sri Lanka",
                },
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  label: "Response Time",
                  value: "Within 24 Hours",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-900/30 border border-brand-700/30 rounded-lg flex items-center justify-center text-brand-400 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-silver-500 text-xs mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Process steps */}
            <div className="bg-carbon-800/60 border border-carbon-700/40 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">How It Works</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Share Your Concept",
                    desc: "Send us your idea, sketch, or requirement",
                  },
                  {
                    step: "02",
                    title: "Free Consultation",
                    desc: "We discuss feasibility and provide a quote",
                  },
                  {
                    step: "03",
                    title: "Design & Manufacture",
                    desc: "We create your project with precision",
                  },
                  {
                    step: "04",
                    title: "Perfect Delivery",
                    desc: "Receive your finished product, ready to use",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-brand-500/15 border border-brand-500/30 rounded flex items-center justify-center text-brand-400 font-mono text-xs flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        {item.title}
                      </div>
                      <div className="text-silver-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-carbon-800 border border-green-600/40 rounded-xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-700/20 border border-green-600/40 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-silver-400 mb-6">
                  We've opened WhatsApp for you. We'll respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-500 hover:bg-brand-400 text-carbon-900 px-6 py-3 rounded-lg font-bold transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-carbon-800 border border-carbon-700 rounded-xl p-8 space-y-5"
              >
                <h3 className="text-white font-bold text-xl mb-2">
                  Tell Us About Your Project
                </h3>
                <p className="text-silver-500 text-sm mb-6">
                  Fill in the details and we'll send it straight to WhatsApp.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-silver-400 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-carbon-900 border border-carbon-600 focus:border-brand-500 rounded-lg px-4 py-3 text-white placeholder-carbon-500 text-sm transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-silver-400 text-sm font-medium mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07X XXX XXXX"
                      className="w-full bg-carbon-900 border border-carbon-600 focus:border-brand-500 rounded-lg px-4 py-3 text-white placeholder-carbon-500 text-sm transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-silver-400 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-carbon-900 border border-carbon-600 focus:border-brand-500 rounded-lg px-4 py-3 text-white placeholder-carbon-500 text-sm transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-silver-400 text-sm font-medium mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-carbon-900 border border-carbon-600 focus:border-brand-500 rounded-lg px-4 py-3 text-white text-sm transition-colors duration-200"
                  >
                    <option value="" className="bg-carbon-900 text-silver-500">
                      Select a service...
                    </option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s} className="bg-carbon-900">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-silver-400 text-sm font-medium mb-2">
                    Estimated Budget (LKR)
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-carbon-900 border border-carbon-600 focus:border-brand-500 rounded-lg px-4 py-3 text-white text-sm transition-colors duration-200"
                  >
                    <option value="" className="bg-carbon-900">
                      Not sure yet
                    </option>
                    <option value="Under 5,000" className="bg-carbon-900">
                      Under LKR 5,000
                    </option>
                    <option value="5,000 - 20,000" className="bg-carbon-900">
                      LKR 5,000 - 20,000
                    </option>
                    <option value="20,000 - 50,000" className="bg-carbon-900">
                      LKR 20,000 - 50,000
                    </option>
                    <option value="50,000 - 100,000" className="bg-carbon-900">
                      LKR 50,000 - 100,000
                    </option>
                    <option value="Above 100,000" className="bg-carbon-900">
                      Above LKR 100,000
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-silver-400 text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project... Include dimensions, materials, quantity, timeline, and any specific requirements."
                    className="w-full bg-carbon-900 border border-carbon-600 focus:border-brand-500 rounded-lg px-4 py-3 text-white placeholder-carbon-500 text-sm transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-400 text-carbon-900 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:shadow-brand-glow"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="text-silver-600 text-xs text-center">
                  By submitting, you'll be redirected to WhatsApp. We respond
                  within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
