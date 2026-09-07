import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const colors = {
  charcoal: "#221F1C",
  charcoalSoft: "#33302B",
  concrete: "#EDEAE2",
  concreteMid: "#D8D2C4",
  steel: "#6B6459",
  orange: "#D9531E",
  yellow: "#F2B705",
  ink: "#1A1815",
};

// Replace with real client feedback once you have it
const TESTIMONIALS = [
  {
    quote: "Shree Balaji has been supplying our site for two years now — consistent quality, and the trucks are never late.",
    name: "Rajesh Agarwal",
    role: "Site Manager, Vaishali Nagar Residency",
  },
  {
    quote: "We switched to them after a bad experience with another supplier. Mix design has been spot-on every single pour.",
    name: "Priya Sharma",
    role: "Project Engineer, Ajmer Road Retail Plaza",
  },
  {
    quote: "Reliable, professional, and they actually pick up the phone. That matters more than people think.",
    name: "Vikram Singh",
    role: "Contractor, Kotputli Bridge Widening",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const active = TESTIMONIALS[index];

  return (
    <section style={{ background: colors.concrete }} className="py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Oswald', sans-serif; }
        .body-font { font-family: 'Work Sans', sans-serif; }
        .arrow-btn { transition: background 0.15s ease; }
        .arrow-btn:hover { background: ${colors.orange}; }
        .arrow-btn:hover svg { color: #FFFFFF !important; }
        .dot { transition: background 0.15s ease; cursor: pointer; }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8"
          style={{ background: "rgba(217,83,30,0.08)", border: `1px solid ${colors.orange}` }}
        >
          <span className="body-font text-xs font-medium tracking-wide" style={{ color: "#B8451A" }}>
            CLIENT TESTIMONIALS
          </span>
        </div>

        <Quote size={40} strokeWidth={1.5} style={{ color: colors.orange, margin: "0 auto 24px" }} />

        <p
          className="brand-font font-medium leading-snug"
          style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: colors.ink }}
        >
          "{active.quote}"
        </p>

        <div className="mt-6">
          <div className="brand-font text-base font-semibold" style={{ color: colors.ink }}>
            {active.name}
          </div>
          <div className="body-font text-sm mt-0.5" style={{ color: colors.steel }}>
            {active.role}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={prev} className="arrow-btn flex items-center justify-center w-11 h-11 border" style={{ borderColor: colors.concreteMid }} aria-label="Previous testimonial">
            <ChevronLeft size={18} strokeWidth={2} style={{ color: colors.ink }} />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className="dot w-2 h-2 rounded-full"
                style={{ background: i === index ? colors.orange : colors.concreteMid }}
              />
            ))}
          </div>

          <button onClick={next} className="arrow-btn flex items-center justify-center w-11 h-11 border" style={{ borderColor: colors.concreteMid }} aria-label="Next testimonial">
            <ChevronRight size={18} strokeWidth={2} style={{ color: colors.ink }} />
          </button>
        </div>
      </div>
    </section>
  );
}
