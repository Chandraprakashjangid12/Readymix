import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Factory, Users, Award } from "lucide-react";

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

const VALUES = [
  {
    icon: Factory,
    title: "Own Batching Plants",
    desc: "Three fully automated plants across Jaipur, so quality control stays in our hands, not a supplier's.",
  },
  {
    icon: CheckCircle2,
    title: "Lab-Tested Mix Design",
    desc: "Every batch is tested for slump, strength grade, and consistency before it leaves the plant.",
  },
  {
    icon: Users,
    title: "Dedicated Site Support",
    desc: "Our team coordinates pour schedules directly with your site engineer — no third-party delays.",
  },
  {
    icon: Award,
    title: "15+ Years of Trust",
    desc: "From residential builds to large infrastructure projects, contractors across Rajasthan rely on us.",
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: colors.concrete }} className="py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Oswald', sans-serif; }
        .body-font { font-family: 'Work Sans', sans-serif; }
        .value-card { transition: border-color 0.2s ease, transform 0.2s ease; }
        .value-card:hover { border-color: ${colors.orange}; transform: translateY(-3px); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: narrative */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
              style={{ background: "rgba(217,83,30,0.08)", border: `1px solid ${colors.orange}` }}
            >
              <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.orangeDark }}>
                ABOUT SHREE BALAJI
              </span>
            </div>

            <h2
              className="brand-font font-semibold leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: colors.ink }}
            >
              Built on concrete.
              <br />
              Run on discipline.
            </h2>

            <p className="body-font mt-6 leading-relaxed" style={{ color: colors.steel, fontSize: "1.05rem" }}>
              Shree Balaji Ready Mix started with a single plant and a simple
              promise — deliver concrete that meets spec, every single time.
              Today, we run three plants across Jaipur and Rajasthan, supplying
              RMC and M-sand to residential builders, contractors, and
              infrastructure projects who can't afford a delayed or inconsistent
              pour.
            </p>

            <p className="body-font mt-4 leading-relaxed" style={{ color: colors.steel, fontSize: "1.05rem" }}>
              We're not the biggest supplier in the state — we're the one
              contractors call back for the next project, because the mix design
              was right, the truck showed up on time, and someone actually
              answered the phone.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 brand-font text-sm font-medium tracking-wide text-white px-6 py-3.5 mt-8"
              style={{ background: colors.orange }}
            >
              Talk to Our Team
            </Link>
          </div>

          {/* Right: value cards grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="value-card p-6"
                  style={{ background: "#FFFFFF", border: `1px solid ${colors.concreteMid}` }}
                >
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 mb-4"
                    style={{ background: colors.charcoal }}
                  >
                    <Icon size={20} strokeWidth={2} style={{ color: colors.orange }} />
                  </div>
                  <div className="brand-font text-base font-semibold mb-2" style={{ color: colors.ink }}>
                    {v.title}
                  </div>
                  <div className="body-font text-sm leading-relaxed" style={{ color: colors.steel }}>
                    {v.desc}
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
