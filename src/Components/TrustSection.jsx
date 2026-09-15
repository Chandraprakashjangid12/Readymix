import React from "react";
import { Star, Award, ShieldCheck, TrendingUp } from "lucide-react";

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

// Update this with your real Google rating + review count once you have your
// Google Business Profile set up (and add a real "reviewsLink" to it below)
const GOOGLE_RATING = {
  score: 4.8,
  count: 210,
  reviewsLink: "#",
};

const STATS = [
  { icon: TrendingUp, value: "15+", label: "Years of Experience" },
  { icon: Award, value: "800+", label: "Projects Completed" },
  { icon: ShieldCheck, value: "3", label: "Automated Plants" },
  { icon: Star, value: "4.8★", label: "Google Rating" },
];

// Replace with your real certifications / quality standards
const CERTIFICATIONS = ["ISO 9001:2015 Certified", "BIS Compliant Mix Design", "IS 4926 Ready Mix Standard"];

export default function TrustSection() {
  return (
    <section style={{ background: colors.concrete }} className="py-16 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }
        .trust-stat { transition: transform 0.2s ease; }
        .trust-stat:hover { transform: translateY(-3px); }
        .reviews-link { transition: color 0.15s ease; }
        .reviews-link:hover { color: ${colors.orangeDark}; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          {/* Google rating badge */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14" style={{ background: "#FFFFFF", border: `1px solid ${colors.concreteMid}` }}>
              <svg width="26" height="26" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="brand-font text-2xl font-bold" style={{ color: colors.ink }}>
                  {GOOGLE_RATING.score}
                </span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill={colors.yellow} strokeWidth={0} />
                  ))}
                </div>
              </div>
              <a href={GOOGLE_RATING.reviewsLink} className="reviews-link body-font text-sm" style={{ color: colors.steel }}>
                Based on {GOOGLE_RATING.count}+ Google reviews
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-3">
            {CERTIFICATIONS.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 px-4 py-2"
                style={{ background: "#FFFFFF", border: `1px solid ${colors.concreteMid}` }}
              >
                <ShieldCheck size={15} strokeWidth={2} style={{ color: colors.orange }} />
                <span className="body-font text-xs font-medium" style={{ color: colors.ink }}>
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="trust-stat flex flex-col items-center text-center p-6"
                style={{ background: colors.ink }}
              >
                <Icon size={22} strokeWidth={2} style={{ color: colors.orange }} className="mb-3" />
                <div className="brand-font text-2xl font-bold text-white">{s.value}</div>
                <div className="body-font text-xs mt-1" style={{ color: colors.concreteMid }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
