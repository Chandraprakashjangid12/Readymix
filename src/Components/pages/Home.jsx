import React from "react";
import { ArrowRight, ShieldCheck, Clock, Users, Award } from "lucide-react";
import Hero from "../Hero";
import Testimonials from "../Testimonials";

const colors = {
  charcoal: "#221F1C",
  concrete: "#EDEAE2",
  concreteMid: "#D8D2C4",
  steel: "#6B6459",
  orange: "#D9531E",
  yellow: "#F2B705",
  ink: "#1A1815",
};

// "Pillars of Strength" style value strip
const PILLARS = [
  { icon: ShieldCheck, title: "High Quality", desc: "Lab-tested mix design, every batch." },
  { icon: Clock, title: "On-Time Delivery", desc: "Scheduled pours, no waiting around." },
  { icon: Users, title: "Real Support", desc: "Direct coordination with your site team." },
  { icon: Award, title: "15+ Years Trusted", desc: "Contractors across Rajasthan rely on us." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Pillars of strength */}
      <section style={{ background: colors.ink }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 shrink-0" style={{ background: colors.orange }}>
                    <Icon size={20} strokeWidth={2} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {p.title}
                    </div>
                    <div className="text-xs mt-1" style={{ color: colors.concreteMid, fontFamily: "'Work Sans', sans-serif" }}>
                      {p.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA banner */}
      <section style={{ background: colors.orange }} className="py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-2xl md:text-3xl font-semibold text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Ready to schedule your pour?
          </div>
          
              <a       
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3.5"
            style={{ background: colors.ink, color: "#FFFFFF", fontFamily: "'Oswald', sans-serif" }}
          >
            Get a Quote
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </section>
    </>
  );
}