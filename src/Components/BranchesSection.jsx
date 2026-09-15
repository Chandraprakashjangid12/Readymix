import React from "react";
import { MapPin, Phone, Navigation } from "lucide-react";

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
  {
    name: "Jaipur — Sitapura",
    address: "Sitapura Industrial Area, Jaipur, Rajasthan – 302022",
    phone: "+91 98290 00001",
    directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Sitapura+Industrial+Area+Jaipur",
  },
  {
    name: "Jaipur — Ajmer Road",
    address: "Ajmer Road, Jaipur, Rajasthan",
    phone: "+91 98290 00002",
    directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Ajmer+Road+Jaipur",
  },
  {
    name: "Kotputli Plant",
    address: "NH-48, Kotputli, Rajasthan",
    phone: "+91 98290 00003",
    directionsLink: "https://www.google.com/maps/dir/?api=1&destination=Kotputli+Rajasthan",
  },
];

export default function BranchesSection() {
  return (
    <section style={{ background: colors.ink }} className="py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }
        .branch-card { transition: transform 0.2s ease, border-color 0.2s ease; }
        .branch-card:hover { transform: translateY(-4px); border-color: ${colors.orange}; }
        .directions-link { transition: background 0.2s ease; }
        .directions-link:hover { background: ${colors.orangeDark}; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
            style={{ background: "rgba(217,83,30,0.12)", border: `1px solid ${colors.orange}` }}
          >
            <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.yellow }}>
              OUR PLANTS
            </span>
          </div>
          <h2
            className="brand-font font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Three plants, one standard.
          </h2>
          <p className="body-font mt-5 leading-relaxed" style={{ color: colors.concreteMid, fontSize: "1.05rem" }}>
            Wherever your site is across Jaipur and Rajasthan, there's a Shree Balaji plant close by.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BRANCHES.map((b) => (
            <div
              key={b.name}
              className="branch-card p-7"
              style={{ background: colors.charcoalSoft, border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-5" style={{ background: colors.orange }}>
                <MapPin size={22} strokeWidth={2} className="text-white" />
              </div>

              <div className="brand-font text-lg font-semibold text-white mb-3">{b.name}</div>

              <div className="flex items-start gap-2.5 body-font text-sm mb-3 leading-relaxed" style={{ color: colors.concreteMid }}>
                <MapPin size={15} strokeWidth={2} style={{ color: colors.orange, marginTop: 2, flexShrink: 0 }} />
                {b.address}
              </div>

              <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 body-font text-sm mb-6" style={{ color: colors.concreteMid }}>
                <Phone size={15} strokeWidth={2} style={{ color: colors.orange, flexShrink: 0 }} />
                {b.phone}
              </a>

              <a
                href={b.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-link flex items-center justify-center gap-2 brand-font text-sm font-medium text-white px-5 py-3 w-full"
                style={{ background: colors.orange }}
              >
                <Navigation size={15} strokeWidth={2.5} />
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
