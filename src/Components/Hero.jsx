import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

// Swap each of these with your own real photos — plant shots, trucks
// pouring, finished projects. Reusing one as a placeholder for all slots
// for now so the slider looks complete; replace filenames as you get them.
import heroImage from "../assets/plant-photo.jpg";
import heroImage1 from "../assets/project2.jpg";
import heroImage2 from "../assets/project2-a.jpg";

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

// Each slide: its own full-bleed image + headline + subtext, exactly like
// a premium construction-industry slider (JaipurReadyMix / RMC style).
const SLIDES = [
  {
    image: heroImage,
    eyebrow: "Trusted Ready Mix Supplier Since 2009",
    headline: ["Concrete strength,", "poured on time,", "every time."],
    sub: "High-grade M-sand and RMC concrete from three plants across Jaipur, delivered by our own fleet.",
  },
  {
    image: heroImage1,
    eyebrow: "Our Own Transit Mixer Fleet",
    headline: ["On the road,", "on schedule,", "on your site."],
    sub: "No third-party delays — our trucks are dispatched directly from our plants to yours.",
  },
  {
    image: heroImage2,
    eyebrow: "Lab-Tested, Every Single Batch",
    headline: ["Quality you can", "build a foundation", "on."],
    sub: "M15 to M40 grades, tested for slump and strength before a single truck leaves the plant.",
  },
];

const SLIDE_DURATION = 4000;

export default function Hero() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((i) => setActive((i + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  return (
    <section
      style={{ background: colors.charcoal, position: "relative", overflow: "hidden" }}
      className="min-h-[560px] md:min-h-[640px] lg:min-h-[720px] flex flex-col"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }
        .hero-cta { transition: background 0.2s ease, transform 0.15s ease; }
        .hero-cta:hover { background: ${colors.orangeDark}; transform: translateY(-2px); }
        .hero-cta-outline { transition: background 0.2s ease, border-color 0.2s ease; }
        .hero-cta-outline:hover { background: rgba(255,255,255,0.1); }

        .slide-bg {
          transition: opacity 1.4s ease-in-out;
          animation: kenBurns 8s ease-out forwards;
        }
        @keyframes kenBurns {
          from { transform: scale(1.12); }
          to   { transform: scale(1); }
        }
        .slide-text > * { animation: heroFadeUp 0.7s ease both; }
        .slide-text > *:nth-child(2) { animation-delay: 0.08s; }
        .slide-text > *:nth-child(3) { animation-delay: 0.16s; }
        .slide-text > *:nth-child(4) { animation-delay: 0.24s; }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .slide-dot { transition: width 0.3s ease, background 0.3s ease; cursor: pointer; }
        .slide-arrow { transition: background 0.2s ease, transform 0.15s ease; }
        .slide-arrow:hover { background: ${colors.orange}; transform: translateY(-50%) scale(1.08); }

        @media (prefers-reduced-motion: reduce) {
          .slide-bg { animation: none !important; }
          .slide-text > * { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* Full-bleed background image slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="slide-bg"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${s.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === active ? 1 : 0,
            zIndex: 1,
          }}
        />
      ))}

      {/* Cinematic gradient overlays for text legibility + brand mood */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(100deg, rgba(26,24,21,0.94) 0%, rgba(26,24,21,0.75) 38%, rgba(26,24,21,0.35) 62%, rgba(26,24,21,0.15) 100%)`,
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, rgba(26,24,21,0.2) 0%, rgba(26,24,21,0) 30%, rgba(26,24,21,0.5) 100%)`,
          zIndex: 2,
        }}
      />
      {/* Orange accent glow, bottom-left, subtle brand touch */}
      <div
        style={{
          position: "absolute",
          left: "-10%",
          bottom: "-20%",
          width: "50%",
          height: "70%",
          background: `radial-gradient(circle, rgba(217,83,30,0.25) 0%, rgba(217,83,30,0) 70%)`,
          zIndex: 2,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full flex-1 flex items-center" style={{ zIndex: 3 }}>
        <div key={active} className="slide-text max-w-2xl py-14 md:py-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-7"
            style={{ background: "rgba(217,83,30,0.16)", border: `1px solid ${colors.orange}`, backdropFilter: "blur(4px)" }}
          >
            <ShieldCheck size={15} strokeWidth={2} style={{ color: colors.orange }} />
            <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.yellow }}>
              {slide.eyebrow}
            </span>
          </div>

          <h1
            className="brand-font font-bold leading-[1.06] tracking-tight text-white"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", textShadow: "0 2px 24px rgba(0,0,0,0.3)" }}
          >
            {slide.headline[0]}
            <br />
            {slide.headline[1]}
            <br />
            <span style={{ color: colors.orange }}>{slide.headline[2]}</span>
          </h1>

          <p
            className="body-font mt-6 max-w-lg leading-relaxed"
            style={{ color: colors.concreteMid, fontSize: "1.1rem" }}
          >
            {slide.sub}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              to="/contact"
              className="hero-cta flex items-center gap-2 brand-font text-sm font-semibold tracking-wide text-white px-7 py-4"
              style={{ background: colors.orange }}
            >
              Request a Quote
              <ArrowRight size={17} strokeWidth={2.5} />
            </Link>
            <a
              href="tel:+919829000000"
              className="hero-cta-outline flex items-center gap-2 brand-font text-sm font-semibold tracking-wide px-7 py-4 border"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.35)", backdropFilter: "blur(4px)" }}
            >
              <Phone size={17} strokeWidth={2.5} />
              Call a Plant Now
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar — normal document flow, always sits below the content, never overlaps */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pb-6" style={{ zIndex: 3 }}>
        <div
          className="hidden md:grid grid-cols-4 gap-6"
          style={{
            background: "rgba(26,24,21,0.55)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "20px 28px",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="brand-font text-2xl lg:text-3xl font-bold text-white">{s.value}</div>
              <div className="body-font text-xs mt-1" style={{ color: colors.concreteMid }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide navigation arrows */}
      <button
        onClick={prev}
        className="slide-arrow hidden lg:flex items-center justify-center w-11 h-11 absolute left-6"
        style={{ top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.12)", zIndex: 4 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} strokeWidth={2.5} className="text-white" />
      </button>
      <button
        onClick={next}
        className="slide-arrow hidden lg:flex items-center justify-center w-11 h-11 absolute right-6"
        style={{ top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.12)", zIndex: 4 }}
        aria-label="Next slide"
      >
        <ChevronRight size={20} strokeWidth={2.5} className="text-white" />
      </button>

      {/* Slide indicator dots */}
      <div className="flex items-center gap-2 absolute right-6 md:right-10" style={{ top: 28, zIndex: 4 }}>
        {SLIDES.map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            className="slide-dot h-1.5 rounded-full"
            style={{
              width: i === active ? 26 : 8,
              background: i === active ? colors.orange : "rgba(255,255,255,0.5)",
            }}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
