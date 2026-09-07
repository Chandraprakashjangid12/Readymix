import React, { useState } from "react";
import { Phone, Mail, MapPin, Globe, Send } from "lucide-react";

const colors = {
  charcoal: "#221F1C",
  charcoalSoft: "#33302B",
  concreteMid: "#D8D2C4",
  steel: "#6B6459",
  orange: "#D9531E",
  orangeDark: "#B8451A",
  yellow: "#F2B705",
};

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const BRANCHES = [
  "Jaipur — Sitapura Industrial Area",
  "Jaipur — Ajmer Road",
  "Kotputli Plant, NH-48",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // Hook this up to your email service later
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer style={{ background: colors.charcoal, borderTop: "1px solid rgba(255,255,255,0.08)" }} className="pt-16 pb-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Oswald', sans-serif; }
        .body-font { font-family: 'Work Sans', sans-serif; }
        .footer-link { transition: color 0.15s ease; }
        .footer-link:hover { color: #FFFFFF; }
        .social-icon { transition: background 0.15s ease; }
        .social-icon:hover { background: ${colors.orange}; }
        .newsletter-input { transition: border-color 0.15s ease; }
        .newsletter-input:focus { outline: none; border-color: ${colors.orange}; }
        .subscribe-btn { transition: background 0.2s ease; }
        .subscribe-btn:hover { background: ${colors.orangeDark}; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Newsletter strip */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-7 md:p-9 mb-14"
          style={{ background: colors.charcoalSoft }}
        >
          <div>
            <div className="brand-font text-xl font-semibold text-white">Stay Updated</div>
            <div className="body-font text-sm mt-1" style={{ color: colors.concreteMid }}>
              Get updates on new plants, capacity, and pricing — no spam.
            </div>
          </div>
          {subscribed ? (
            <div className="body-font text-sm font-medium" style={{ color: colors.yellow }}>
              Thanks — you're subscribed!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="newsletter-input body-font text-sm px-4 py-3 flex-1 md:w-64 border"
                style={{ background: "#FFFFFF", borderColor: "transparent", color: colors.charcoal }}
              />
              <button
                type="submit"
                className="subscribe-btn flex items-center justify-center gap-2 brand-font text-sm font-medium text-white px-5 py-3 shrink-0"
                style={{ background: colors.orange }}
              >
                <Send size={15} strokeWidth={2.5} />
              </button>
            </form>
          )}
        </div>

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" fill={colors.charcoalSoft} />
                <path d="M20 2L36 11L20 20L4 11L20 2Z" fill={colors.orange} />
              </svg>
              <div className="brand-font text-lg font-semibold text-white tracking-tight">SHREE BALAJI</div>
            </div>
            <p className="body-font text-sm leading-relaxed" style={{ color: colors.concreteMid }}>
              Premium ready-mix concrete and construction materials, delivered
              from three plants across Jaipur and Rajasthan since 2009.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {["Facebook", "Instagram", "LinkedIn"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="social-icon flex items-center justify-center w-9 h-9"
                  style={{ background: colors.charcoalSoft }}
                  aria-label={label}
                  title={label}
                >
                  <Globe size={16} strokeWidth={2} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="brand-font text-sm font-semibold text-white mb-4 tracking-wide">QUICK LINKS</div>
            <div className="flex flex-col gap-2.5">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} className="footer-link body-font text-sm" style={{ color: colors.concreteMid }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Branches */}
          <div>
            <div className="brand-font text-sm font-semibold text-white mb-4 tracking-wide">OUR PLANTS</div>
            <div className="flex flex-col gap-3">
              {BRANCHES.map((b) => (
                <div key={b} className="flex items-start gap-2.5 body-font text-sm" style={{ color: colors.concreteMid }}>
                  <MapPin size={14} strokeWidth={2} style={{ marginTop: 3, flexShrink: 0, color: colors.orange }} />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="brand-font text-sm font-semibold text-white mb-4 tracking-wide">CONTACT</div>
            <div className="flex flex-col gap-3">
              <a href="tel:+919829000000" className="footer-link flex items-center gap-2.5 body-font text-sm" style={{ color: colors.concreteMid }}>
                <Phone size={15} strokeWidth={2} />
                +91 98290 00000
              </a>
              <a href="mailto:info@shreebalajireadymix.com" className="footer-link flex items-center gap-2.5 body-font text-sm break-all" style={{ color: colors.concreteMid }}>
                <Mail size={15} strokeWidth={2} />
                info@shreebalajireadymix.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="body-font text-xs" style={{ color: colors.steel }}>
            © {new Date().getFullYear()} Shree Balaji Ready Mix. All rights reserved.
          </span>
          <span className="body-font text-xs" style={{ color: colors.steel }}>
            Trusted Ready Mix Supplier Since 2009
          </span>
        </div>
      </div>
    </footer>
  );
}
