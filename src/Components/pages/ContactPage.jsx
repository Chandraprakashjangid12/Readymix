import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const colors = {
  charcoal: "#221F1C",
  charcoalSoft: "#33302B",
  concrete: "#EDEAE2",
  concreteMid: "#D8D2C4",
  steel: "#6B6459",
  orange: "#D9531E",
  orangeDark: "#B8451A",
  yellow: "#F2B705",
  ink: "#1A1815",
};

const BRANCHES = [
  { name: "Jaipur — Sitapura", area: "Sitapura Industrial Area, Jaipur", phone: "+91 98290 00001" },
  { name: "Jaipur — Ajmer Road", area: "Ajmer Road, Jaipur", phone: "+91 98290 00002" },
  { name: "Kotputli Plant", area: "NH-48, Kotputli, Rajasthan", phone: "+91 98290 00003" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", branch: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your backend/email service later
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" style={{ background: colors.concrete }} className="py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Oswald', sans-serif; }
        .body-font { font-family: 'Work Sans', sans-serif; }
        .form-input { transition: border-color 0.15s ease; font-family: 'Work Sans', sans-serif; }
        .form-input:focus { outline: none; border-color: ${colors.orange}; }
        .submit-btn { transition: background 0.2s ease; }
        .submit-btn:hover { background: ${colors.orangeDark}; }
        .branch-row { transition: background 0.15s ease; }
        .branch-row:hover { background: rgba(217,83,30,0.06); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
            style={{ background: "rgba(217,83,30,0.08)", border: `1px solid ${colors.orange}` }}
          >
            <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.orangeDark }}>
              GET IN TOUCH
            </span>
          </div>
          <h2
            className="brand-font font-semibold leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: colors.ink }}
          >
            Let's plan your pour.
          </h2>
          <p className="body-font mt-5 leading-relaxed" style={{ color: colors.steel, fontSize: "1.05rem" }}>
            Tell us your grade, quantity, and site location — our team will
            call back with a quote, usually within the hour.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-7 md:p-9" style={{ background: "#FFFFFF", border: `1px solid ${colors.concreteMid}` }}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="body-font text-xs font-medium block mb-2" style={{ color: colors.steel }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-3 text-sm border"
                  style={{ borderColor: colors.concreteMid, color: colors.ink }}
                  placeholder="Ramesh Sharma"
                />
              </div>
              <div>
                <label className="body-font text-xs font-medium block mb-2" style={{ color: colors.steel }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-3 text-sm border"
                  style={{ borderColor: colors.concreteMid, color: colors.ink }}
                  placeholder="+91 98290 00000"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="body-font text-xs font-medium block mb-2" style={{ color: colors.steel }}>
                Preferred Branch
              </label>
              <select
                name="branch"
                value={form.branch}
                onChange={handleChange}
                className="form-input w-full px-4 py-3 text-sm border bg-white"
                style={{ borderColor: colors.concreteMid, color: colors.ink }}
              >
                <option value="">Select a plant</option>
                {BRANCHES.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label className="body-font text-xs font-medium block mb-2" style={{ color: colors.steel }}>
                Requirement Details
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="form-input w-full px-4 py-3 text-sm border resize-none"
                style={{ borderColor: colors.concreteMid, color: colors.ink }}
                placeholder="Grade needed, quantity, site address, delivery date..."
              />
            </div>

            <button
              type="submit"
              className="submit-btn flex items-center justify-center gap-2 brand-font text-sm font-medium tracking-wide text-white px-6 py-3.5 mt-6 w-full sm:w-auto"
              style={{ background: colors.orange }}
            >
              Send Request
              <Send size={15} strokeWidth={2.5} />
            </button>
          </form>

          {/* Contact info + branches */}
          <div className="flex flex-col gap-5">
            <div className="p-6" style={{ background: colors.charcoal }}>
              <div className="flex items-center gap-3 mb-4">
                <Phone size={18} strokeWidth={2} style={{ color: colors.orange }} />
                <a href="tel:+919829000000" className="body-font text-sm text-white">
                  +91 98290 00000
                </a>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Mail size={18} strokeWidth={2} style={{ color: colors.orange }} />
                <a href="mailto:info@shreebalajireadymix.com" className="body-font text-sm text-white break-all">
                  info@shreebalajireadymix.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} strokeWidth={2} style={{ color: colors.orange }} />
                <span className="body-font text-sm" style={{ color: colors.concreteMid }}>
                  Mon – Sat, 8:00 AM – 7:00 PM
                </span>
              </div>
            </div>

            <div style={{ background: "#FFFFFF", border: `1px solid ${colors.concreteMid}` }}>
              <div style={{ background: colors.charcoal }} className="px-5 py-3">
                <span className="brand-font text-xs tracking-[0.2em] text-white/70">OUR PLANTS</span>
              </div>
              {BRANCHES.map((b) => (
                <div key={b.name} className="branch-row flex items-start gap-3 px-5 py-4 border-b last:border-b-0" style={{ borderColor: colors.concrete }}>
                  <MapPin size={16} strokeWidth={2} style={{ color: colors.orange, marginTop: 2 }} />
                  <div>
                    <div className="brand-font text-sm font-medium" style={{ color: colors.ink }}>
                      {b.name}
                    </div>
                    <div className="body-font text-xs mt-0.5" style={{ color: colors.steel }}>
                      {b.area} · {b.phone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
