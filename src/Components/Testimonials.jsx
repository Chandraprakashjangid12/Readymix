import React, { useState, useEffect } from "react";

const colors = {
  charcoal: "#221F1C",
  charcoalSoft: "#33302B",
  concrete: "#EDEAE2",
  cardBg: "#FCEAD2",
  steel: "#6B6459",
  orange: "#D9531E",
  yellow: "#F2B705",
  ink: "#1A1815",
};

// Replace quote/name/role/avatar with real client data once you have it.
// avatar can be a real photo URL, or leave as-is to auto-generate an initials avatar.
const TESTIMONIALS = [
  {
    quote:
      "Shree Balaji has been supplying our site for two years now — consistent quality, and the trucks are never late.",
    name: "Rajesh Agarwal",
    role: "Site Manager, Vaishali Nagar",
    avatar: "https://ui-avatars.com/api/?name=Rajesh+Agarwal&background=D9531E&color=fff&size=128",
  },
  {
    quote:
      "We switched to them after a bad experience with another supplier. Mix design is spot-on every single pour.",
    name: "Priya Sharma",
    role: "Project Engineer, Ajmer Road",
    avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=33302B&color=fff&size=128",
  },
  {
    quote:
      "Reliable, professional, and they actually pick up the phone. That matters more than people think.",
    name: "Vikram Singh",
    role: "Contractor, Kotputli",
    avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=6B6459&color=fff&size=128",
  },
  {
    quote:
      "Timely delivery every time, even during peak season. Their quality control team is genuinely thorough.",
    name: "Anita Desai",
    role: "Civil Engineer, Mansarovar",
    avatar: "https://ui-avatars.com/api/?name=Anita+Desai&background=D9531E&color=fff&size=128",
  },
  {
    quote:
      "Best ready-mix supplier we've worked with in Jaipur. Fair pricing and zero delays on any project.",
    name: "Manoj Khandelwal",
    role: "Builder, Sitapura",
    avatar: "https://ui-avatars.com/api/?name=Manoj+K&background=33302B&color=fff&size=128",
  },
  {
    quote:
      "Good rates, honest billing, and the concrete quality has held up on every slab we've poured.",
    name: "Suresh Meena",
    role: "Site Supervisor, Malviya Nagar",
    avatar: "https://ui-avatars.com/api/?name=Suresh+Meena&background=D9531E&color=fff&size=128",
  },
];

const AUTOPLAY_DELAY = 3500;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [isPaused]);

  const visible = Array.from({ length: cardsToShow }, (_, offset) => {
    const i = (index + offset) % TESTIMONIALS.length;
    return { ...TESTIMONIALS[i], key: i };
  });

  return (
    <section
      style={{ background: "#FFFFFF" }}
      className="py-10 md:py-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }
        .t-card { transition: transform 0.2s ease; animation: fadeIn 0.4s ease; }
        .t-card:hover { transform: translateY(-3px); }
        .dot { transition: background 0.15s ease, transform 0.10s ease; cursor: pointer; }
        .dot:hover { transform: scale(1.1); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2
          className="brand-font font-extrabold text-center mb-7"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", color: colors.ink }}
        >
          Client Testimonials
        </h2>

        <div
          className={`grid gap-5 ${
            cardsToShow === 1
              ? "grid-cols-1"
              : cardsToShow === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {visible.map((t) => (
            <div key={t.key} className="t-card relative pt-7">
              {/* avatar overlaps the top of the card */}
              <img
                src={t.avatar}
                alt={t.name}
                className="absolute left-1/2 -translate-x-1/2 top-0 w-14 h-14 rounded-full border-4 z-10 object-cover"
                style={{ borderColor: "#FFFFFF", boxShadow: "0 3px 8px rgba(0,0,0,0.12)" }}
              />

              <div
                className="rounded-xl pt-9 pb-5 px-5 text-center relative"
                style={{ background: colors.cardBg }}
              >
                <span
                  className="brand-font absolute top-2 left-4 select-none"
                  style={{ fontSize: "1.75rem", color: "rgba(217,83,30,0.25)", lineHeight: 1 }}
                >
                  &ldquo;
                </span>

                <p
                  className="body-font text-xs leading-relaxed"
                  style={{ color: colors.charcoalSoft }}
                >
                  {t.quote}
                </p>

                <div className="mt-3">
                  <div
                    className="brand-font text-xs font-bold uppercase tracking-wide"
                    style={{ color: colors.ink }}
                  >
                    {t.name}
                  </div>
                  <div className="body-font text-[11px] mt-0.5" style={{ color: colors.steel }}>
                    {t.role}
                  </div>
                </div>

                <span
                  className="brand-font absolute bottom-0.5 right-4 select-none"
                  style={{ fontSize: "1.75rem", color: colors.orange, lineHeight: 1 }}
                >
                  &rdquo;
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="dot w-2 h-2 rounded-full"
              style={{ background: i === index ? colors.orange : colors.concrete }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
