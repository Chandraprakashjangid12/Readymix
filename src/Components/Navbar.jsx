import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MapPin, ArrowRight, Mail } from "lucide-react";

const BRANCHES = [
  {
    name: "Jaipur — Sitapura",
    area: "Sitapura Industrial Area, Jaipur",
    phone: "+91 98290 00001",
  },
  {
    name: "Jaipur — Ajmer Road",
    area: "Ajmer Road, Jaipur",
    phone: "+91 98290 00002",
  },
  {
    name: "Kotputli Plant",
    area: "NH-48, Kotputli, Rajasthan",
    phone: "+91 98290 00003",
  },
];

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [branchOpen, setBranchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBranchOpen, setMobileBranchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setBranchOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

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

  return (
    <div style={{ fontFamily: "'Work Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Oswald', sans-serif; }
        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: ${colors.orange};
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .branch-card { transition: background 0.15s ease, border-color 0.15s ease; }
        .branch-card:hover { background: ${colors.concrete}; border-color: ${colors.orange}; }
        .cta-btn { transition: background 0.2s ease, transform 0.15s ease; }
        .cta-btn:hover { background: ${colors.orangeDark}; }
        .mobile-panel { animation: slideDown 0.22s ease; }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Utility strip */}
      <div style={{ background: colors.charcoal }} className="hidden md:block">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between text-xs py-2.5">
          <div className="flex items-center gap-6" style={{ color: colors.concreteMid }}>
            <a href="tel:+919829000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={13} strokeWidth={2} />
              <span>+91 98290 00000</span>
            </a>
            <a href="mailto:info@shreebalajireadymix.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={13} strokeWidth={2} />
              <span>info@shreebalajireadymix.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5" style={{ color: colors.yellow }}>
            <MapPin size={13} strokeWidth={2} />
            <span className="tracking-wide">3 Plants Serving Jaipur &amp; Rajasthan</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        style={{
          background: colors.concrete,
          borderBottom: `1px solid ${colors.concreteMid}`,
          boxShadow: scrolled ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
        }}
        className="sticky top-0 z-50 transition-shadow duration-200"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" fill={colors.charcoal} />
                <path d="M20 2L36 11L20 20L4 11L20 2Z" fill={colors.orange} />
                <path d="M20 20V38L4 29V11L20 20Z" fill={colors.charcoalSoft} />
              </svg>
              <div className="leading-none">
                <div className="brand-font text-xl md:text-2xl font-semibold tracking-tight" style={{ color: colors.ink }}>
                  SHREE BALAJI
                </div>
                <div
                  className="brand-font text-[11px] md:text-xs font-medium tracking-[0.25em]"
                  style={{ color: colors.orange }}
                >
                  READY MIX CONCRETE
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-9">
              <Link to="/" className="nav-link brand-font text-[15px] font-medium tracking-wide" style={{ color: colors.ink }}>
                Home
              </Link>
              <Link to="/about" className="nav-link brand-font text-[15px] font-medium tracking-wide" style={{ color: colors.ink }}>
                About Us
              </Link>
              <Link to="/products" className="nav-link brand-font text-[15px] font-medium tracking-wide" style={{ color: colors.ink }}>
                Products
              </Link>

              {/* Branches dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setBranchOpen((v) => !v)}
                  className="nav-link brand-font text-[15px] font-medium tracking-wide flex items-center gap-1"
                  style={{ color: colors.ink }}
                >
                  Branches
                  <ChevronDown
                    size={16}
                    strokeWidth={2.5}
                    style={{ transform: branchOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
                  />
                </button>

                {branchOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-5 w-[340px] mobile-panel"
                    style={{ background: "#FFFFFF", border: `1px solid ${colors.concreteMid}`, boxShadow: "0 12px 32px rgba(0,0,0,0.14)" }}
                  >
                    <div style={{ background: colors.charcoal }} className="px-5 py-3">
                      <span className="brand-font text-xs tracking-[0.2em] text-white/70">OUR PLANTS</span>
                    </div>
                    <div className="p-2">
                      {BRANCHES.map((b) => (
                        <Link
                          key={b.name}
                          to="/contact"
                          onClick={() => setBranchOpen(false)}
                          className="branch-card flex items-start gap-3 px-3 py-3 border-l-2"
                          style={{ borderColor: "transparent" }}
                        >
                          <MapPin size={16} strokeWidth={2} style={{ color: colors.orange, marginTop: 2 }} />
                          <div>
                            <div className="brand-font text-sm font-medium" style={{ color: colors.ink }}>
                              {b.name}
                            </div>
                            <div className="text-xs mt-0.5" style={{ color: colors.steel }}>
                              {b.area}
                            </div>
                            <div className="text-xs mt-1" style={{ color: colors.steel }}>
                              {b.phone}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/projects" className="nav-link brand-font text-[15px] font-medium tracking-wide" style={{ color: colors.ink }}>
                Projects
              </Link>
              <Link to="/contact" className="nav-link brand-font text-[15px] font-medium tracking-wide" style={{ color: colors.ink }}>
                Contact
              </Link>
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="cta-btn hidden md:flex items-center gap-2 brand-font text-sm font-medium tracking-wide text-white px-5 py-2.5"
                style={{ background: colors.orange }}
              >
                Request a Quote
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden p-2"
                style={{ color: colors.ink }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden mobile-panel" style={{ background: "#FFFFFF", borderTop: `1px solid ${colors.concreteMid}` }}>
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.slice(0, 3).map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="brand-font text-base font-medium py-3 border-b"
                  style={{ color: colors.ink, borderColor: colors.concrete }}
                >
                  {l.label}
                </Link>
              ))}

              {/* Mobile branches accordion */}
              <div className="border-b" style={{ borderColor: colors.concrete }}>
                <button
                  onClick={() => setMobileBranchOpen((v) => !v)}
                  className="w-full flex items-center justify-between brand-font text-base font-medium py-3"
                  style={{ color: colors.ink }}
                >
                  Branches
                  <ChevronDown
                    size={18}
                    style={{ transform: mobileBranchOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
                  />
                </button>
                {mobileBranchOpen && (
                  <div className="pb-3 flex flex-col gap-3">
                    {BRANCHES.map((b) => (
                      <div key={b.name} className="pl-3 border-l-2" style={{ borderColor: colors.orange }}>
                        <div className="brand-font text-sm font-medium" style={{ color: colors.ink }}>
                          {b.name}
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: colors.steel }}>
                          {b.area} · {b.phone}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {NAV_LINKS.slice(3).map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="brand-font text-base font-medium py-3 border-b"
                  style={{ color: colors.ink, borderColor: colors.concrete }}
                >
                  {l.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="cta-btn flex items-center justify-center gap-2 brand-font text-sm font-medium tracking-wide text-white px-5 py-3 mt-4"
                style={{ background: colors.orange }}
              >
                Request a Quote
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
