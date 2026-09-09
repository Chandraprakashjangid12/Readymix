import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Send, Globe, Download, ChevronRight } from "lucide-react";

const colors = {
  charcoal: "#221F1C",
  charcoalSoft: "#33302B",
  concreteMid: "#D8D2C4",
  steel: "#6B6459",
  orange: "#D9531E",
  orangeDark: "#B8451A",
  yellow: "#F2B705",
  ink: "#1A1815",
};

const GENERAL_LINKS_COL1 = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
];

const GENERAL_LINKS_COL2 = [
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer style={{ background: colors.ink, position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }
        .footer-link { transition: color 0.15s ease, padding-left 0.15s ease; }
        .footer-link:hover { color: #FFFFFF; padding-left: 4px; }
        .social-icon { transition: background 0.15s ease, transform 0.15s ease; }
        .social-icon:hover { background: ${colors.orange}; transform: translateY(-3px); }
        .newsletter-input { transition: border-color 0.15s ease; }
        .newsletter-input:focus { outline: none; border-color: ${colors.orange}; }
        .subscribe-btn { transition: background 0.2s ease; }
        .subscribe-btn:hover { background: ${colors.orangeDark}; }
        .brochure-btn { transition: background 0.2s ease, transform 0.15s ease; }
        .brochure-btn:hover { background: ${colors.orangeDark}; transform: translateY(-2px); }

        /* --- Premium truck animation --- */
        @keyframes stripeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-192px); }
        }
        @keyframes wheelRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes engineIdle {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-1.5px); }
        }
        @keyframes exhaustPuff {
          0%   { opacity: 0; transform: translateY(0) scale(0.6); }
          30%  { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-14px) scale(1.3); }
        }
        .truck-idle {
          animation: engineIdle 2.2s ease-in-out infinite;
        }
        .drum-stripes {
          animation: stripeScroll 1.3s linear infinite;
        }
        .truck-wheel {
          transform-origin: center;
          transform-box: fill-box;
          animation: wheelRotate 1s linear infinite;
        }
        .exhaust-puff {
          animation: exhaustPuff 2.2s ease-out infinite;
          transform-box: fill-box;
        }
        .exhaust-puff.delay {
          animation-delay: 1.1s;
        }
        @media (prefers-reduced-motion: reduce) {
          .truck-idle, .drum-stripes, .truck-wheel, .exhaust-puff { animation: none; }
        }
      `}</style>

      {/* Premium architectural background texture */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.05 }} preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="facade" width="70" height="70" patternUnits="userSpaceOnUse" patternTransform="skewX(-8)">
            <rect width="70" height="70" fill="none" stroke="#FFFFFF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#facade)" />
      </svg>
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${colors.ink} 0%, rgba(26,24,21,0.97) 100%)` }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-[1.15fr_1fr_1.1fr_1.1fr] gap-12">

          {/* Truck illustration + tagline + brochure */}
          <div>
            <div className="truck-idle">
              <svg width="240" height="130" viewBox="0 0 240 130" fill="none" aria-hidden="true">
                <defs>
                  <clipPath id="drumClip">
                    <ellipse cx="140" cy="58" rx="63" ry="30" />
                  </clipPath>
                </defs>

                {/* exhaust puffs */}
                <circle className="exhaust-puff" cx="16" cy="48" r="4" fill={colors.concreteMid} />
                <circle className="exhaust-puff delay" cx="16" cy="48" r="4" fill={colors.concreteMid} />

                {/* cab — bold flat style with thick outline */}
                <path
                  d="M12 58 L12 92 L54 92 L54 42 L40 42 L28 58 Z"
                  fill={colors.orange}
                  stroke={colors.ink}
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <rect x="19" y="49" width="16" height="14" rx="2" fill="#BFE4F5" stroke={colors.ink} strokeWidth="2.5" />
                <line x1="54" y1="60" x2="54" y2="92" stroke={colors.ink} strokeWidth="2" opacity="0.4" />
                <circle cx="16" cy="84" r="3" fill={colors.yellow} stroke={colors.ink} strokeWidth="1.5" />

                {/* chassis connector */}
                <rect x="54" y="76" width="16" height="16" fill={colors.charcoalSoft} stroke={colors.ink} strokeWidth="2" />

                {/* mixer support frame */}
                <rect x="66" y="60" width="140" height="10" rx="2" fill={colors.steel} stroke={colors.ink} strokeWidth="2" />

                {/* mixer barrel — outline stays FIXED (a real drum's silhouette
                    doesn't change as it spins); only the surface stripes inside
                    it move, which is what actually reads as "rotating" */}
                <ellipse cx="140" cy="58" rx="63" ry="30" fill="#FFFFFF" stroke={colors.ink} strokeWidth="3" />

                <g style={{ clipPath: "url(#drumClip)" }}>
                  <rect x="77" y="26" width="126" height="64" fill={colors.orange} />
                  <g className="drum-stripes">
                    {[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                      <rect
                        key={i}
                        x={i * 24 + 60}
                        y="20"
                        width="14"
                        height="80"
                        fill={i % 2 === 0 ? "#FFFFFF" : colors.orangeDark}
                      />
                    ))}
                  </g>
                  {/* moving specular highlight — sells the "cylinder is turning" illusion */}
                  <g className="drum-stripes">
                    {[0, 1, 2].map((i) => (
                      <rect
                        key={`shine-${i}`}
                        x={i * 96 + 60}
                        y="20"
                        width="20"
                        height="80"
                        fill="#FFFFFF"
                        opacity="0.3"
                      />
                    ))}
                  </g>
                  {/* soft top-to-bottom shading so it reads as a rounded cylinder, not a flat disc */}
                  <ellipse cx="140" cy="46" rx="60" ry="14" fill="#FFFFFF" opacity="0.18" />
                  <ellipse cx="140" cy="74" rx="60" ry="12" fill={colors.ink} opacity="0.12" />
                </g>
                {/* redraw the crisp outline on top so the clipped stripes never bleed past it */}
                <ellipse cx="140" cy="58" rx="63" ry="30" fill="none" stroke={colors.ink} strokeWidth="3" />

                {/* brand badge — stays upright and readable, doesn't spin */}
                <circle cx="140" cy="58" r="16" fill="#FFFFFF" stroke={colors.ink} strokeWidth="3" />
                <circle cx="140" cy="58" r="16" fill="none" stroke={colors.orange} strokeWidth="2" />
                <text x="140" y="63" textAnchor="middle" fontSize="11" fontWeight="700" fill={colors.orange} fontFamily="Poppins, sans-serif">SB</text>

                {/* rear discharge chute */}
                <path d="M200 72 L218 90 L207 98 L190 80 Z" fill={colors.steel} stroke={colors.ink} strokeWidth="2.5" strokeLinejoin="round" />

                {/* base platform / bumper */}
                <rect x="54" y="90" width="166" height="12" rx="2" fill={colors.charcoalSoft} stroke={colors.ink} strokeWidth="2.5" />

                {/* wheels — spokes make the spin actually visible */}
                <g className="truck-wheel">
                  <circle cx="38" cy="106" r="17" fill={colors.ink} />
                  <line x1="38" y1="93" x2="38" y2="119" stroke={colors.steel} strokeWidth="2" />
                  <line x1="25" y1="106" x2="51" y2="106" stroke={colors.steel} strokeWidth="2" />
                  <circle cx="38" cy="106" r="7" fill="#FFFFFF" stroke={colors.ink} strokeWidth="2" />
                </g>
                <g className="truck-wheel">
                  <circle cx="104" cy="106" r="17" fill={colors.ink} />
                  <line x1="104" y1="93" x2="104" y2="119" stroke={colors.steel} strokeWidth="2" />
                  <line x1="91" y1="106" x2="117" y2="106" stroke={colors.steel} strokeWidth="2" />
                  <circle cx="104" cy="106" r="7" fill="#FFFFFF" stroke={colors.ink} strokeWidth="2" />
                </g>
                <g className="truck-wheel">
                  <circle cx="192" cy="106" r="17" fill={colors.ink} />
                  <line x1="192" y1="93" x2="192" y2="119" stroke={colors.steel} strokeWidth="2" />
                  <line x1="179" y1="106" x2="205" y2="106" stroke={colors.steel} strokeWidth="2" />
                  <circle cx="192" cy="106" r="7" fill="#FFFFFF" stroke={colors.ink} strokeWidth="2" />
                </g>
              </svg>
            </div>

            <p className="body-font text-[15px] mt-4 leading-relaxed" style={{ color: colors.concreteMid }}>
              One of Rajasthan's leading ready mix concrete manufacturer.
            </p>

            <a
              href="#"
              className="brochure-btn inline-flex items-center gap-2 brand-font text-sm font-medium text-white px-6 py-3.5 mt-6"
              style={{ background: colors.orange }}
            >
              <Download size={15} strokeWidth={2.5} />
              Shree Balaji Brochure
            </a>
          </div>

          {/* General links */}
          <div>
            <div className="brand-font text-2xl font-semibold text-white mb-7">General</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {GENERAL_LINKS_COL1.map((l, i) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="footer-link flex items-center gap-1.5 body-font text-sm"
                  style={{ color: i === 0 ? "#FFFFFF" : colors.concreteMid, fontWeight: i === 0 ? 600 : 400 }}
                >
                  <ChevronRight size={13} strokeWidth={2.5} style={{ color: colors.orange, flexShrink: 0 }} />
                  {l.label}
                </Link>
              ))}
              {GENERAL_LINKS_COL2.map((l) => (
                <Link key={l.label} to={l.to} className="footer-link flex items-center gap-1.5 body-font text-sm" style={{ color: colors.concreteMid }}>
                  <ChevronRight size={13} strokeWidth={2.5} style={{ color: colors.orange, flexShrink: 0 }} />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="brand-font text-2xl font-semibold text-white mb-7">Contact Info</div>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-2.5 body-font text-sm leading-relaxed" style={{ color: colors.concreteMid }}>
                <MapPin size={17} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0, color: colors.orange }} />
                <span>Shree Balaji Ready Mix, Sitapura Industrial Area, Jaipur, Rajasthan – 302022</span>
              </div>
              <a href="tel:+919829000000" className="footer-link flex items-center gap-2.5 body-font text-sm" style={{ color: colors.concreteMid }}>
                <Phone size={17} strokeWidth={2} style={{ color: colors.orange, flexShrink: 0 }} />
                +91 98290 00000
              </a>
              <div>
                <div className="brand-font text-sm font-semibold" style={{ color: colors.orange }}>
                  Open Hours:
                </div>
                <div className="body-font text-sm mt-1.5 leading-relaxed" style={{ color: colors.concreteMid }}>
                  Mon – Sat: 8 am – 7 pm,<br />
                  Sunday: CLOSED
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter + social */}
          <div>
            <div className="brand-font text-2xl font-semibold text-white mb-7">Newsletter</div>
            <p className="body-font text-sm leading-relaxed mb-5" style={{ color: colors.concreteMid }}>
              Subscribe to get our latest updates &amp; news
            </p>

            {subscribed ? (
              <div className="body-font text-sm font-medium" style={{ color: colors.yellow }}>
                Thanks — you're subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-0">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your mail address"
                  className="newsletter-input body-font text-sm px-4 py-3.5 flex-1 border min-w-0"
                  style={{ background: colors.charcoalSoft, borderColor: "transparent", color: "#FFFFFF" }}
                />
                <button
                  type="submit"
                  className="subscribe-btn flex items-center justify-center w-12 shrink-0"
                  style={{ background: colors.orange }}
                  aria-label="Subscribe"
                >
                  <Send size={16} strokeWidth={2.5} className="text-white" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-2.5 mt-7">
              {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="social-icon flex items-center justify-center w-10 h-10"
                  style={{ background: colors.charcoalSoft }}
                  aria-label={label}
                  title={label}
                >
                  <Globe size={17} strokeWidth={2} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: colors.charcoal, borderTop: "1px solid rgba(255,255,255,0.06)" }} className="relative py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-center">
          <span className="body-font text-sm text-center" style={{ color: colors.concreteMid }}>
            {new Date().getFullYear()} © All rights reserved by{" "}
            <span style={{ color: colors.orange, fontWeight: 500 }}>Shree Balaji Ready Mix</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
