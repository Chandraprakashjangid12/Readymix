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
    tag: "M15 – M40 Grades",
    desc: "Batch-tested RMC for slabs, footings, columns, and structural pours — available in every standard grade with custom mix design on request.",
  },
  {
    icon: Mountain,
    name: "M-Sand",
    tag: "Manufactured Sand",
    desc: "Consistent particle size and zero silt content — a reliable, eco-friendly alternative to river sand for plastering and concrete work.",
  },
  {
    icon: Waves,
    name: "Plaster Sand",
    tag: "Fine Graded",
    desc: "Finely graded sand purpose-built for smooth plastering finishes, screened to remove impurities and oversized particles.",
  },
  {
    icon: Package,
    name: "Aggregates & Grit",
    tag: "10mm / 20mm / 40mm",
    desc: "Crushed stone aggregates in multiple sizes for concrete, road base, and drainage work — sourced and quality-checked in-house.",
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
    <section id="products" style={{ background: colors.charcoal }} className="py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Oswald', sans-serif; }
        .body-font { font-family: 'Work Sans', sans-serif; }
        .product-card { transition: border-color 0.2s ease, transform 0.2s ease; }
        .product-card:hover { border-color: ${colors.orange}; transform: translateY(-4px); }
        .grade-pill { transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease; cursor: pointer; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
            style={{ background: "rgba(217,83,30,0.12)", border: `1px solid ${colors.orange}` }}
          >
            <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.yellow }}>
              WHAT WE SUPPLY
            </span>
          </div>
          <h2
            className="brand-font font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Materials built for
            <br />
            every grade of work.
          </h2>
          <p className="body-font mt-5 leading-relaxed" style={{ color: colors.concreteMid, fontSize: "1.05rem" }}>
            From foundation-grade concrete to fine plastering sand — every batch
            is tested before it leaves our plants.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PRODUCTS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="product-card p-6 flex flex-col"
                style={{ background: colors.charcoalSoft, border: `1px solid rgba(255,255,255,0.08)` }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-5"
                  style={{ background: colors.orange }}
                >
                  <Icon size={22} strokeWidth={2} className="text-white" />
                </div>
                <div className="brand-font text-lg font-semibold text-white mb-1">{p.name}</div>
                <div className="body-font text-xs font-medium mb-3" style={{ color: colors.yellow }}>
                  {p.tag}
                </div>
                <p className="body-font text-sm leading-relaxed flex-1" style={{ color: colors.concreteMid }}>
                  {p.desc}
                </p>
                <Link
                  to="/contact"
                  className="body-font text-sm font-medium mt-5 inline-flex items-center gap-1.5"
                  style={{ color: colors.orange }}
                >
                  Request Quote
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* RMC grade selector */}
        <div className="p-8 md:p-10" style={{ background: colors.concrete }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <div className="brand-font text-xl font-semibold" style={{ color: colors.ink }}>
                RMC Grade Guide
              </div>
              <div className="body-font text-sm mt-1" style={{ color: colors.steel }}>
                Tap a grade to see where it's typically used
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 brand-font text-sm font-medium tracking-wide text-white px-5 py-3 self-start"
              style={{ background: colors.orange }}
            >
              Not Sure Which Grade? Ask Us
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {RMC_GRADES.map((g) => (
              <button
                key={g.grade}
                onClick={() => setActiveGrade(g.grade)}
                className="grade-pill brand-font text-sm font-medium px-5 py-2.5 border"
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
