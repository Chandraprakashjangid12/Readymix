import React from "react";
import { Factory, TrendingUp, Award, Truck } from "lucide-react";

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

// Edit these milestones with your company's real history
const MILESTONES = [
  { year: "2009", icon: Factory, text: "Shree Balaji Ready Mix founded with a single batching plant in Jaipur." },
  { year: "2013", icon: TrendingUp, text: "Crossed 500,000 m³ of RMC supplied to residential and commercial builders across Jaipur." },
  { year: "2017", icon: Truck, text: "Expanded to a second plant and built our own transit mixer fleet for faster, reliable delivery." },
  { year: "2021", icon: Award, text: "Opened our third plant in Kotputli, extending coverage across Rajasthan." },
  { year: "2026", icon: Factory, text: "Operating 3 plants, serving contractors and infrastructure projects state-wide." },
];

export default function Timeline() {
  return (
    <section style={{ background: colors.charcoal }} className="py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }
        .timeline-line { background: rgba(255,255,255,0.12); }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="max-w-xl mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
            style={{ background: "rgba(217,83,30,0.12)", border: `1px solid ${colors.orange}` }}
          >
            <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.yellow }}>
              OUR JOURNEY
            </span>
          </div>
          <h2 className="brand-font font-semibold leading-[1.1] tracking-tight text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            How far we've come.
          </h2>
        </div>

        <div className="relative pl-8 md:pl-10">
          <div className="timeline-line absolute left-0 top-2 bottom-2 w-[2px]" />
          <div className="flex flex-col gap-12">
            {MILESTONES.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.year} className="relative">
                  <div
                    className="absolute -left-8 md:-left-10 flex items-center justify-center w-8 h-8 -translate-x-1/2"
                    style={{ background: colors.orange }}
                  >
                    <Icon size={15} strokeWidth={2} className="text-white" />
                  </div>
                  <div className="pl-4">
                    <div className="brand-font text-xl font-semibold text-white mb-1">{m.year}</div>
                    <p className="body-font text-sm leading-relaxed" style={{ color: colors.concreteMid }}>
                      {m.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
