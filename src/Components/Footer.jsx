import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const colors = {
  charcoal: "#221F1C",
  concreteMid: "#D8D2C4",
  steel: "#6B6459",
  orange: "#D9531E",
  yellow: "#F2B705",
};

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: colors.charcoal, borderTop: "1px solid rgba(255,255,255,0.08)" }} className="pt-14 pb-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Oswald', sans-serif; }
        .body-font { font-family: 'Work Sans', sans-serif; }
        .footer-link { transition: color 0.15s ease; }
        .footer-link:hover { color: #FFFFFF; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" fill="#33302B" />
                <path d="M20 2L36 11L20 20L4 11L20 2Z" fill={colors.orange} />
              </svg>
              <div className="brand-font text-lg font-semibold text-white tracking-tight">
                SHREE BALAJI
              </div>
            </div>
            <p className="body-font text-sm leading-relaxed" style={{ color: colors.concreteMid }}>
              Premium ready-mix concrete and construction materials, delivered
              from three plants across Jaipur and Rajasthan.
            </p>
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

          {/* Contact */}
          <div>
            <div className="brand-font text-sm font-semibold text-white mb-4 tracking-wide">CONTACT</div>
            <div className="flex flex-col gap-3">
              <a href="tel:+917790961018" className="footer-link flex items-center gap-2.5 body-font text-sm" style={{ color: colors.concreteMid }}>
                <Phone size={15} strokeWidth={2} />
                +91 7790961018
              </a>
              <a href="mailto:info@shreebalajireadymix.com" className="footer-link flex items-center gap-2.5 body-font text-sm" style={{ color: colors.concreteMid }}>
                <Mail size={15} strokeWidth={2} />
                info@shreebalajireadymix.com
              </a>
              <div className="flex items-center gap-2.5 body-font text-sm" style={{ color: colors.concreteMid }}>
                <MapPin size={15} strokeWidth={2} />
                3 Plants — Jaipur & Rajasthan
              </div>
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
