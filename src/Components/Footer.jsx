import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

// Matches the color palette used across Hero / TrustSection / Testimonials
const colors = {
  ink: "#1A1815",
  charcoal: "#221F1C",
  charcoalSoft: "#33302B",
  concrete: "#EDEAE2",
  concreteMid: "#D8D2C4",
  steel: "#6B6459",
  orange: "#D9531E",
  orangeDark: "#B8451A",
  yellow: "#F2B705",
  white: "#FFFFFF",
};

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FED576" />
        <stop offset="26%" stopColor="#F47133" />
        <stop offset="61%" stopColor="#BC3081" />
        <stop offset="100%" stopColor="#4C63D2" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igGrad)" />
    <rect x="6.5" y="6.5" width="11" height="11" rx="3.5" fill="none" stroke="#fff" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.6" />
    <circle cx="17.1" cy="6.9" r="1.1" fill="#fff" />
  </svg>
);
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="#1877F2" />
    <path
      fill="#fff"
      d="M15.1 22v-7.8h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V5.14c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.42-3.9 4V11.2H9.3v3h2.66V22h3.14z"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }

        /* Quick link hover — underline slides in + text brightens */
        .footer-link {
          position: relative;
          color: ${colors.concreteMid};
          transition: color 0.2s ease;
        }
        .footer-link::after {
          content: "";
          position: absolute;
          left: 0; bottom: -2px;
          width: 0;
          height: 1.5px;
          background: ${colors.orange};
          transition: width 0.25s ease;
        }
        .footer-link:hover { color: #FFFFFF; }
        .footer-link:hover::after { width: 100%; }

        .social-icon { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .social-icon:hover { transform: translateY(-3px) scale(1.06); }

        /* --- Truck driving across the strip --- */
        .truck-strip {
          position: relative;
          height: 150px;
          overflow: hidden;
          background: linear-gradient(180deg, ${colors.concrete} 0%, ${colors.concreteMid} 100%);
          border-bottom: 4px solid ${colors.orange};
        }
        .skyline { position: absolute; left: 0; right: 0; bottom: 4px; opacity: 0.22; }
        .road-line {
          position: absolute; left: 0; right: 0; bottom: 4px; height: 2px;
          background: repeating-linear-gradient(90deg, ${colors.steel} 0 24px, transparent 24px 44px);
          opacity: 0.35;
        }
        .truck-drive {
          position: absolute;
          bottom: 4px;
          width: 200px;
          height: 112px;
          animation: driveAcross 11s linear infinite;
        }
        @keyframes driveAcross {
          0%   { transform: translateX(calc(100vw + 30px)); }
          100% { transform: translateX(-220px); }
        }
        @keyframes wheelSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes stripeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-192px); }
        }
        @keyframes speedLine {
          0%   { opacity: 0; transform: scaleX(0.4); }
          40%  { opacity: 0.5; }
          100% { opacity: 0; transform: scaleX(1); }
        }
        .truck-wheel { transform-origin: center; transform-box: fill-box; animation: wheelSpin 0.5s linear infinite; }
        .drum-stripes { animation: stripeScroll 0.9s linear infinite; }
        .speed-lines rect { animation: speedLine 0.6s ease-out infinite; }
        .speed-lines rect:nth-child(2) { animation-delay: 0.1s; }
        .speed-lines rect:nth-child(3) { animation-delay: 0.2s; }
        @media (prefers-reduced-motion: reduce) {
          .truck-drive, .truck-wheel, .drum-stripes, .speed-lines rect { animation: none; }
        }
      `}</style>

      {/* ===== Truck driving strip ===== */}
      <div className="truck-strip">
        <svg className="skyline" viewBox="0 0 900 120" preserveAspectRatio="none" width="100%" height="120" aria-hidden="true">
          <rect x="520" y="30" width="40" height="90" fill={colors.charcoalSoft} />
          <rect x="570" y="50" width="30" height="70" fill={colors.charcoalSoft} />
          <rect x="610" y="15" width="45" height="105" fill={colors.charcoalSoft} />
          <rect x="665" y="60" width="28" height="60" fill={colors.charcoalSoft} />
          <rect x="700" y="35" width="36" height="85" fill={colors.charcoalSoft} />
          <rect x="745" y="55" width="26" height="65" fill={colors.charcoalSoft} />
          <rect x="780" y="20" width="42" height="100" fill={colors.charcoalSoft} />
          <line x1="640" y1="10" x2="640" y2="60" stroke={colors.charcoalSoft} strokeWidth="3" />
          <line x1="600" y1="12" x2="690" y2="12" stroke={colors.charcoalSoft} strokeWidth="3" />
          <line x1="640" y1="12" x2="640" y2="30" stroke={colors.charcoalSoft} strokeWidth="2" />
        </svg>

        <div className="road-line" />

        <div className="truck-drive" aria-hidden="true">
          <svg width="200" height="112" viewBox="0 0 240 130" fill="none">
            <defs>
              <clipPath id="drumClip2"><ellipse cx="140" cy="58" rx="63" ry="30" /></clipPath>
            </defs>

            <g className="speed-lines">
              <rect x="-8" y="70" width="18" height="3" rx="1.5" fill={colors.steel} />
              <rect x="-16" y="80" width="14" height="3" rx="1.5" fill={colors.steel} />
              <rect x="-4" y="90" width="20" height="3" rx="1.5" fill={colors.steel} />
            </g>

            <path d="M12 58 L12 92 L54 92 L54 42 L40 42 L28 58 Z" fill="#FFFFFF" stroke={colors.ink} strokeWidth="3" strokeLinejoin="round" />
            <rect x="19" y="49" width="16" height="14" rx="2" fill="#BFE4F5" stroke={colors.ink} strokeWidth="2.5" />
            <rect x="54" y="76" width="16" height="16" fill={colors.concreteMid} stroke={colors.ink} strokeWidth="2" />
            <rect x="66" y="60" width="140" height="10" rx="2" fill={colors.steel} stroke={colors.ink} strokeWidth="2" />

            <ellipse cx="140" cy="58" rx="63" ry="30" fill="#FFFFFF" stroke={colors.ink} strokeWidth="3" />
            <g style={{ clipPath: "url(#drumClip2)" }}>
              <rect x="77" y="26" width="126" height="64" fill={colors.orange} />
              <g className="drum-stripes">
                {[-1,0,1,2,3,4,5,6,7,8,9,10].map((i) => (
                  <rect key={i} x={i * 24 + 60} y="20" width="14" height="80" fill={i % 2 === 0 ? "#FFFFFF" : colors.orangeDark} />
                ))}
              </g>
            </g>
            <ellipse cx="140" cy="58" rx="63" ry="30" fill="none" stroke={colors.ink} strokeWidth="3" />

            <circle cx="140" cy="58" r="17" fill="#FFFFFF" stroke={colors.ink} strokeWidth="3" />
            <text x="140" y="55" textAnchor="middle" fontSize="9" fontWeight="800" fill={colors.ink} fontFamily="Poppins, sans-serif">SB</text>
            <text x="140" y="65" textAnchor="middle" fontSize="4.5" fontWeight="700" fill={colors.orange} fontFamily="Poppins, sans-serif" letterSpacing="0.3">READYMIX</text>

            <path d="M200 72 L218 90 L207 98 L190 80 Z" fill={colors.steel} stroke={colors.ink} strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="54" y="90" width="166" height="12" rx="2" fill={colors.concreteMid} stroke={colors.ink} strokeWidth="2.5" />

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
      </div>

      {/* ===== Main dark footer — same ink tone as Hero / TrustSection stat cards ===== */}
      <div style={{ background: colors.ink }} className="pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {/* Logo + tagline */}
            <div>
              <div className="flex items-center gap-2.5">
                <div
                  className="brand-font flex items-center justify-center w-10 h-10 rounded-md font-extrabold text-sm"
                  style={{ background: colors.orange, color: "#FFFFFF" }}
                >
                  SB
                </div>
                <div className="brand-font leading-tight">
                  <div className="text-white font-bold text-base tracking-wide">SHREE BALAJI</div>
                  <div className="font-bold text-xs tracking-wide" style={{ color: colors.orange }}>READYMIX</div>
                </div>
              </div>
              <p className="body-font text-sm mt-3.5" style={{ color: colors.concreteMid }}>
                Quality Concrete. Reliable Service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="brand-font text-white text-xs font-bold tracking-widest mb-2">QUICK LINKS</div>
              <div className="w-8 h-0.5 mb-3.5" style={{ background: colors.orange }} />
              <div className="flex flex-wrap gap-x-1 gap-y-2 body-font text-sm">
                {QUICK_LINKS.map((l, i) => (
                  <React.Fragment key={l.label}>
                    <Link to={l.to} className="footer-link px-0.5">
                      {l.label}
                    </Link>
                    {i < QUICK_LINKS.length - 1 && <span style={{ color: colors.charcoalSoft }}>|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <div className="brand-font text-white text-xs font-bold tracking-widest mb-2">CONTACT US</div>
              <div className="w-8 h-0.5 mb-3.5" style={{ background: colors.orange }} />
              <div className="flex flex-col gap-2.5 body-font text-sm" style={{ color: colors.concreteMid }}>
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} style={{ color: colors.orange, marginTop: 2, flexShrink: 0 }} />
                  <span>Sitapura Industrial Area, Jaipur, Rajasthan</span>
                </div>
                <a href="tel:+919829000000" className="footer-link flex items-center gap-2.5" style={{ width: "fit-content" }}>
                  <Phone size={16} style={{ color: colors.orange, flexShrink: 0 }} />
                  +91 98290 00000
                </a>
                <a href="mailto:info@shreebalajireadymix.com" className="footer-link flex items-center gap-2.5" style={{ width: "fit-content" }}>
                  <Mail size={16} style={{ color: colors.orange, flexShrink: 0 }} />
                  info@shreebalajireadymix.com
                </a>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <div className="brand-font text-white text-xs font-bold tracking-widest mb-2">FOLLOW US</div>
              <div className="w-8 h-0.5 mb-3.5" style={{ background: colors.orange }} />
              <div className="flex items-center gap-3">
                <a href="#" className="social-icon" aria-label="Instagram">
                  <InstagramIcon width={32} height={32} />
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <FacebookIcon width={32} height={32} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="max-w-7xl mx-auto px-6 md:px-8 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: `1px solid ${colors.charcoalSoft}` }}
        >
          <span className="body-font text-xs" style={{ color: colors.concreteMid }}>
            © {new Date().getFullYear()} Shree Balaji Readymix. All Rights Reserved.
          </span>
          <div className="flex items-center gap-3 body-font text-xs" style={{ color: colors.concreteMid }}>
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <span style={{ color: colors.charcoalSoft }}>|</span>
            <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
