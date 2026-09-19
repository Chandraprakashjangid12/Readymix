import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, ArrowRight, Info } from "lucide-react";

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

// Rough thumb-rule cement-bag estimate per m³ by grade (for reference only —
// actual mix design varies by project, always confirm with our team).
const GRADE_FACTORS = {
  M15: 6.0,
  M20: 7.0,
  M25: 8.0,
  M30: 9.0,
};

export default function ConcreteCalculator() {
  const [unit, setUnit] = useState("m"); // "m" or "ft"
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("");
  const [grade, setGrade] = useState("M20");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const L = parseFloat(length);
    const W = parseFloat(width);
    const T = parseFloat(thickness);

    if (!L || !W || !T) {
      setResult({ error: true });
      return;
    }

    // convert feet → meters if needed (thickness is usually given in inches when unit is ft,
    // but to keep this simple we treat all three fields consistently in the chosen unit)
    const toMeters = unit === "ft" ? 0.3048 : 1;
    const volume = L * toMeters * (W * toMeters) * (T * toMeters);
    const withWastage = volume * 1.05; // +5% standard wastage allowance
    const bags = withWastage * GRADE_FACTORS[grade];

    setResult({
      volume: withWastage.toFixed(2),
      bags: Math.round(bags),
      error: false,
    });
  };

  return (
    <section style={{ background: colors.concrete }} className="py-16 md:py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }

        .calc-input {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .calc-input:focus {
          outline: none;
          border-color: ${colors.orange};
          box-shadow: 0 0 0 3px rgba(217,83,30,0.12);
        }
        .unit-toggle { transition: background 0.2s ease, color 0.2s ease; cursor: pointer; }
        .grade-pill { transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease; cursor: pointer; }
        .grade-pill:hover { transform: translateY(-1px); }
        .calc-btn { transition: background 0.2s ease, transform 0.2s ease; }
        .calc-btn:hover { background: ${colors.orangeDark}; transform: translateY(-2px); }
        .result-card { animation: fadeUp 0.35s ease; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-5"
            style={{ background: "rgba(217,83,30,0.08)", border: `1px solid ${colors.orange}` }}
          >
            <Calculator size={13} style={{ color: colors.orangeDark }} />
            <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.orangeDark }}>
              QUICK ESTIMATE
            </span>
          </div>
          <h2
            className="brand-font font-semibold leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)", color: colors.ink }}
          >
            Concrete Quantity Calculator
          </h2>
          <p className="body-font mt-3 text-sm" style={{ color: colors.steel }}>
            Enter your slab or footing dimensions to get an approximate concrete volume and cement estimate.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden"
          style={{ border: `1px solid ${colors.concreteMid}` }}
        >
          {/* Inputs */}
          <div className="p-7 md:p-9" style={{ background: "#FFFFFF" }}>
            {/* Unit toggle */}
            <div className="flex items-center gap-2 mb-6">
              {["m", "ft"].map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className="unit-toggle brand-font text-xs font-semibold px-4 py-2 rounded-md"
                  style={{
                    background: unit === u ? colors.ink : colors.concrete,
                    color: unit === u ? "#FFFFFF" : colors.steel,
                  }}
                >
                  {u === "m" ? "Meters" : "Feet"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="body-font text-xs font-medium block mb-1.5" style={{ color: colors.steel }}>
                  Length ({unit})
                </label>
                <input
                  type="number"
                  min="0"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="e.g. "
                  className="calc-input body-font text-sm w-full px-3.5 py-2.5 border rounded-md"
                  style={{ borderColor: colors.concreteMid, color: colors.ink }}
                />
              </div>
              <div>
                <label className="body-font text-xs font-medium block mb-1.5" style={{ color: colors.steel }}>
                  Width ({unit})
                </label>
                <input
                  type="number"
                  min="0"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="e.g. "
                  className="calc-input body-font text-sm w-full px-3.5 py-2.5 border rounded-md"
                  style={{ borderColor: colors.concreteMid, color: colors.ink }}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="body-font text-xs font-medium block mb-1.5" style={{ color: colors.steel }}>
                Thickness / Depth ({unit})
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={thickness}
                onChange={(e) => setThickness(e.target.value)}
                placeholder={unit === "m" ? "e.g. " : "e.g. "}
                className="calc-input body-font text-sm w-full px-3.5 py-2.5 border rounded-md"
                style={{ borderColor: colors.concreteMid, color: colors.ink }}
              />
            </div>

            <div className="mb-7">
              <label className="body-font text-xs font-medium block mb-2" style={{ color: colors.steel }}>
                Concrete Grade
              </label>
              <div className="flex flex-wrap gap-2">
                {Object.keys(GRADE_FACTORS).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGrade(g)}
                    className="grade-pill brand-font text-xs font-medium px-3.5 py-2 border rounded-md"
                    style={{
                      background: grade === g ? colors.orange : colors.concrete,
                      color: grade === g ? "#FFFFFF" : colors.ink,
                      borderColor: grade === g ? colors.orange : colors.concreteMid,
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calculate}
              className="calc-btn w-full brand-font text-sm font-semibold text-white py-3.5 rounded-md flex items-center justify-center gap-2"
              style={{ background: colors.orange }}
            >
              <Calculator size={16} strokeWidth={2.5} />
              Calculate Estimate
            </button>
          </div>

          {/* Result panel */}
          <div className="p-7 md:p-9 flex flex-col justify-center" style={{ background: colors.ink }}>
            {!result && (
              <div className="text-center body-font text-sm" style={{ color: colors.concreteMid }}>
                Fill in the dimensions and hit calculate to see your estimate here.
              </div>
            )}

            {result && result.error && (
              <div className="text-center body-font text-sm" style={{ color: colors.yellow }}>
                Please enter valid length, width, and thickness values.
              </div>
            )}

            {result && !result.error && (
              <div className="result-card">
                <div className="body-font text-xs tracking-wide mb-1" style={{ color: colors.concreteMid }}>
                  ESTIMATED CONCRETE REQUIRED
                </div>
                <div className="brand-font font-bold text-white mb-6" style={{ fontSize: "2.4rem", lineHeight: 1 }}>
                  {result.volume} <span className="text-lg font-medium" style={{ color: colors.concreteMid }}>m³</span>
                </div>

                <div className="flex items-center justify-between py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="body-font text-sm" style={{ color: colors.concreteMid }}>Concrete Grade</span>
                  <span className="brand-font text-sm font-semibold text-white">{grade}</span>
                </div>
                <div className="flex items-center justify-between py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="body-font text-sm" style={{ color: colors.concreteMid }}>Approx. Cement Bags</span>
                  <span className="brand-font text-sm font-semibold text-white">~{result.bags} bags</span>
                </div>

                <div className="flex items-start gap-2 mt-5 body-font text-xs" style={{ color: colors.concreteMid }}>
                  <Info size={14} style={{ marginTop: 1, flexShrink: 0, color: colors.orange }} />
                  <span>Includes 5% wastage allowance. This is a rough estimate — actual mix design and quantity depend on site conditions.</span>
                </div>

                <Link
                  to="/contact"
                  className="brand-font text-sm font-medium mt-6 inline-flex items-center gap-1.5"
                  style={{ color: colors.orange }}
                >
                  Get an Exact Quote From Us
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
