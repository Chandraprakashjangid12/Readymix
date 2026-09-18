import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Mountain, Waves, Package } from "lucide-react";

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

const PRODUCTS = [
  {
    icon: Layers,
    name: "Ready Mix Concrete",
    tag: "M15 – M40",
    desc: "Batch-tested RMC for every structural grade.",
  },
  {
    icon: Mountain,
    name: "M-Sand",
    tag: "Manufactured Sand",
    desc: "Consistent grade, zero silt, eco-friendly.",
  },
  {
    icon: Waves,
    name: "Plaster Sand",
    tag: "Fine Graded",
    desc: "Screened fine sand for smooth finishes.",
  },
  {
    icon: Package,
    name: "Aggregates & Grit",
    tag: "10 / 20 / 40mm",
    desc: "Crushed stone, quality-checked in-house.",
  },
];

const RMC_GRADES = [
  { grade: "M15", use: "PCC, leveling courses" },
  { grade: "M20", use: "Residential slabs, footings" },
  { grade: "M25", use: "RCC columns, beams" },
  { grade: "M30", use: "Commercial structures" },
  { grade: "M35", use: "Heavy load-bearing work" },
  { grade: "M40", use: "Industrial & infrastructure" },
];

export default function Products() {
  const [activeGrade, setActiveGrade] = useState("M25");

  return (
    <section id="products" style={{ background: colors.charcoal }} className="py-16 md:py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }

        /* subtle "dancing" bounce on hover — springy but restrained */
        .product-card {
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
                      border-color 0.25s ease,
                      box-shadow 0.35s ease;
        }
        .product-card:hover {
          transform: translateY(-8px) scale(1.015);
          border-color: ${colors.orange};
          box-shadow: 0 16px 32px rgba(0,0,0,0.28);
        }
        .product-icon {
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.25s ease;
        }
        .product-card:hover .product-icon {
          transform: translateY(-3px) rotate(-4deg);
          background: ${colors.orangeDark};
        }
        .quote-link { transition: gap 0.2s ease, color 0.2s ease; }
        .quote-link:hover { gap: 8px; color: ${colors.yellow}; }
        .quote-link svg { transition: transform 0.2s ease; }
        .quote-link:hover svg { transform: translateX(2px); }

        .grade-pill { transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease; cursor: pointer; }
        .grade-pill:hover { transform: translateY(-2px); }
        .ask-btn { transition: background 0.2s ease, transform 0.2s ease; }
        .ask-btn:hover { background: ${colors.orangeDark}; transform: translateY(-2px); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header — trimmed to essentials */}
        <div className="max-w-xl mb-10 md:mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-5"
            style={{ background: "rgba(217,83,30,0.12)", border: `1px solid ${colors.orange}` }}
          >
            <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.yellow }}>
              WHAT WE SUPPLY
            </span>
          </div>
          <h2
            className="brand-font font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.6rem)" }}
          >
            Materials built for every grade of work.
          </h2>
        </div>

        {/* Product cards — compact, clean */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {PRODUCTS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="product-card p-6 rounded-xl flex flex-col"
                style={{ background: colors.charcoalSoft, border: `1px solid rgba(255,255,255,0.08)` }}
              >
                <div
                  className="product-icon inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4"
                  style={{ background: colors.orange }}
                >
                  <Icon size={20} strokeWidth={2} className="text-white" />
                </div>
                <div className="brand-font text-base font-semibold text-white mb-1">{p.name}</div>
                <div className="body-font text-xs font-medium mb-2.5" style={{ color: colors.yellow }}>
                  {p.tag}
                </div>
                <p className="body-font text-sm leading-relaxed flex-1" style={{ color: colors.concreteMid }}>
                  {p.desc}
                </p>
                <Link
                  to="/contact"
                  className="quote-link body-font text-sm font-medium mt-4 inline-flex items-center gap-1.5"
                  style={{ color: colors.orange }}
                >
                  Request Quote
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* RMC grade selector — kept, tightened */}
        <div className="p-6 md:p-8 rounded-xl" style={{ background: colors.concrete }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">
            <div>
              <div className="brand-font text-lg font-semibold" style={{ color: colors.ink }}>
                RMC Grade Guide
              </div>
              <div className="body-font text-sm mt-0.5" style={{ color: colors.steel }}>
                Tap a grade to see where it's typically used
              </div>
            </div>
            <Link
              to="/contact"
              className="ask-btn inline-flex items-center gap-2 brand-font text-sm font-medium tracking-wide text-white px-5 py-2.5 rounded-md self-start"
              style={{ background: colors.orange }}
            >
              Not Sure? Ask Us
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-5">
            {RMC_GRADES.map((g) => (
              <button
                key={g.grade}
                onClick={() => setActiveGrade(g.grade)}
                className="grade-pill brand-font text-sm font-medium px-4 py-2 rounded-md border"
                style={{
                  background: activeGrade === g.grade ? colors.orange : "#FFFFFF",
                  color: activeGrade === g.grade ? "#FFFFFF" : colors.ink,
                  borderColor: activeGrade === g.grade ? colors.orange : colors.concreteMid,
                }}
              >
                {g.grade}
              </button>
            ))}
          </div>

          <div className="body-font text-sm px-1" style={{ color: colors.steel }}>
            <span className="font-semibold" style={{ color: colors.ink }}>
              {activeGrade}:
            </span>{" "}
            {RMC_GRADES.find((g) => g.grade === activeGrade)?.use}
          </div>
        </div>
      </div>
    </section>
  );
}
