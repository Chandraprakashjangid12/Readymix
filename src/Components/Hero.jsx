import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Clock, ShieldCheck, MapPinned } from "lucide-react";
// Change this path/filename to match your actual image inside src/assets
import heroImage from "../assets/plant-photo.jpg";

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

const STATS = [
  { label: "Years in Business", value: "15+" },
  { label: "Cubic Meters Delivered", value: "2M+" },
  { label: "Active Plants", value: "3" },
  { label: "Projects Completed", value: "800+" },
];

export default function Hero() {
  return (
    <section style={{ background: colors.charcoal, position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Oswald', sans-serif; }
        .body-font { font-family: 'Work Sans', sans-serif; }
        .hero-cta { transition: background 0.2s ease, transform 0.15s ease; }
        .hero-cta:hover { background: ${colors.orangeDark}; }
        .hero-cta-outline { transition: background 0.2s ease, border-color 0.2s ease; }
        .hero-cta-outline:hover { background: rgba(255,255,255,0.08); }
        .aggregate-dot { fill: rgba(255,255,255,0.06); }
      `}</style>

      {/* Aggregate texture background */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.5 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="aggregate" width="46" height="46" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="8" r="1.6" className="aggregate-dot" />
            <circle cx="24" cy="20" r="2.2" className="aggregate-dot" />
            <circle cx="38" cy="6" r="1.2" className="aggregate-dot" />
            <circle cx="14" cy="34" r="1.8" className="aggregate-dot" />
            <circle cx="34" cy="38" r="1.3" className="aggregate-dot" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#aggregate)" />
      </svg>

      {/* Diagonal orange accent slab */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "-20%",
          width: "60%",
          height: "160%",
          background: colors.orange,
          opacity: 0.08,
          transform: "rotate(-8deg)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          {/* Left: copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-7"
              style={{ background: "rgba(217,83,30,0.12)", border: `1px solid ${colors.orange}` }}
            >
              <ShieldCheck size={15} strokeWidth={2} style={{ color: colors.orange }} />
              <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.yellow }}>
                Trusted Ready Mix Supplier Since 2009
              </span>
            </div>

            <h1
              className="brand-font font-semibold leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Concrete strength,
              <br />
              poured on time,
              <br />
              <span style={{ color: colors.orange }}>every time.</span>
            </h1>

            <p
              className="body-font mt-6 max-w-md leading-relaxed"
              style={{ color: colors.concreteMid, fontSize: "1.05rem" }}
            >
              Shree Balaji Ready Mix supplies high-grade M-sand and RMC concrete
              from three plants across Jaipur, engineered for consistency and
              delivered by our own fleet — straight to your site, on schedule.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9">
              <Link
                to="/contact"
                className="hero-cta flex items-center gap-2 brand-font text-sm font-medium tracking-wide text-white px-6 py-3.5"
                style={{ background: colors.orange }}
              >
                Request a Quote
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <a
                href="tel:+919829000000"
                className="hero-cta-outline flex items-center gap-2 brand-font text-sm font-medium tracking-wide px-6 py-3.5 border"
                style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.3)" }}
              >
                <Phone size={16} strokeWidth={2.5} />
                Call a Plant Now
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="brand-font text-2xl md:text-3xl font-semibold text-white">{s.value}</div>
                  <div className="body-font text-xs mt-1" style={{ color: colors.steel }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: real hero image panel */}
          <div className="relative">
            <div
              className="relative w-full aspect-[4/5] overflow-hidden"
              style={{ border: `1px solid rgba(255,255,255,0.1)` }}
            >
              <img
                src={heroImage}
                alt="Shree Balaji Ready Mix plant and fleet"
                className="w-full h-full object-cover"
              />

              {/* subtle dark gradient at bottom so floating chips/text stay readable */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)`,
                }}
              />

              {/* corner accent */}
              <div style={{ position: "absolute", top: 0, left: 0, width: 56, height: 6, background: colors.orange }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: 6, height: 56, background: colors.orange }} />
            </div>

            {/* Floating branch chip */}
            <div
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 px-5 py-4"
              style={{ background: colors.orange }}
            >
              <MapPinned size={22} strokeWidth={2} className="text-white shrink-0" />
              <div className="body-font text-white leading-tight">
                <div className="text-sm font-semibold">3 Plants Live</div>
                <div className="text-xs opacity-90">Jaipur &amp; Rajasthan</div>
              </div>
            </div>

            {/* Floating delivery chip */}
            <div
              className="absolute -top-6 -right-4 hidden sm:flex items-center gap-3 px-5 py-4"
              style={{ background: "#FFFFFF" }}
            >
              <Clock size={22} strokeWidth={2} style={{ color: colors.orange }} className="shrink-0" />
              <div className="body-font leading-tight" style={{ color: colors.ink }}>
                <div className="text-sm font-semibold">On-Time Delivery</div>
                <div className="text-xs" style={{ color: colors.steel }}>
                  Guaranteed pour schedule
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
