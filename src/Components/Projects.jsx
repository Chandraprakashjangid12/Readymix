import React, { useState } from "react";
import { ArrowUpRight, Building2, X, ChevronLeft, ChevronRight } from "lucide-react";

// Import your project photos here, e.g.:
// import p1a from "../assets/project1-a.jpg";
// import p1b from "../assets/project1-b.jpg";
// import p2a from "../assets/project2-a.jpg";

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

const CATEGORIES = ["All", "Residential", "Commercial", "Infrastructure"];

// Each project now takes an ARRAY of images in "images", not a single "image".
// Add as many photos per project as you like — the popup will let visitors
// swipe/click through all of them.
const PROJECTS = [
  { name: "Vaishali Nagar Residency", category: "Residential", grade: "M25", volume: "1,200 m³", images: [] },
  { name: "Sitapura Warehouse Complex", category: "Commercial", grade: "M30", volume: "3,400 m³", images: [] },
  { name: "NH-48 Flyover Support Piers", category: "Infrastructure", grade: "M40", volume: "5,000 m³", images: [] },
  { name: "Malviya Nagar Apartments", category: "Residential", grade: "M25", volume: "950 m³", images: [] },
  { name: "Ajmer Road Retail Plaza", category: "Commercial", grade: "M30", volume: "2,100 m³", images: [] },
  { name: "Kotputli Bridge Widening", category: "Infrastructure", grade: "M35", volume: "4,200 m³", images: [] },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null); // holds the project object when gallery is open
  const [activeIndex, setActiveIndex] = useState(0); // which photo inside that project is showing

  const filtered =
    activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  const openGallery = (project) => {
    setActiveProject(project);
    setActiveIndex(0);
  };

  const closeGallery = () => {
    setActiveProject(null);
  };

  const nextImage = () => {
    if (!activeProject) return;
    setActiveIndex((i) => (i + 1) % activeProject.images.length);
  };

  const prevImage = () => {
    if (!activeProject) return;
    setActiveIndex((i) => (i - 1 + activeProject.images.length) % activeProject.images.length);
  };

  return (
    <section id="projects" style={{ background: colors.concrete }} className="py-20 md:py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .brand-font { font-family: 'Poppins', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }
        .filter-pill { transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease; cursor: pointer; }
        .project-card { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: pointer; }
        .project-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(0,0,0,0.12); }
        .project-overlay { transition: opacity 0.25s ease; }
        .thumb { transition: border-color 0.15s ease, opacity 0.15s ease; cursor: pointer; }
        .thumb:hover { opacity: 0.85; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
              style={{ background: "rgba(217,83,30,0.08)", border: `1px solid ${colors.orange}` }}
            >
              <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.orangeDark }}>
                OUR WORK
              </span>
            </div>
            <h2
              className="brand-font font-semibold leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: colors.ink }}
            >
              Poured, cured,
              <br />
              standing strong.
            </h2>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="filter-pill brand-font text-sm font-medium px-4 py-2 border"
                style={{
                  background: activeCategory === cat ? colors.orange : "#FFFFFF",
                  color: activeCategory === cat ? "#FFFFFF" : colors.ink,
                  borderColor: activeCategory === cat ? colors.orange : colors.concreteMid,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const coverImage = p.images && p.images.length > 0 ? p.images[0] : null;
            return (
              <div
                key={p.name}
                className="project-card group"
                style={{ background: "#FFFFFF", border: `1px solid ${colors.concreteMid}` }}
                onClick={() => openGallery(p)}
              >
                {/* Cover image — tap opens the full gallery for this project */}
                <div
                  className="relative aspect-[4/3] flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(155deg, ${colors.charcoalSoft} 0%, ${colors.ink} 100%)` }}
                >
                  {coverImage ? (
                    <img src={coverImage} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <Building2 size={56} strokeWidth={1} style={{ color: "rgba(255,255,255,0.15)" }} />
                  )}

                  <div
                    className="project-overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    style={{ background: "rgba(217,83,30,0.9)" }}
                  >
                    <div className="flex items-center gap-2 text-white brand-font text-sm font-medium">
                      {p.images && p.images.length > 1 ? `View ${p.images.length} Photos` : "View Details"}
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 px-3 py-1" style={{ background: colors.orange }}>
                    <span className="body-font text-xs font-medium text-white">{p.category}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="brand-font text-base font-semibold mb-2" style={{ color: colors.ink }}>
                    {p.name}
                  </div>
                  <div className="flex items-center gap-4 body-font text-xs" style={{ color: colors.steel }}>
                    <span>Grade: <span style={{ color: colors.ink, fontWeight: 500 }}>{p.grade}</span></span>
                    <span>Volume: <span style={{ color: colors.ink, fontWeight: 500 }}>{p.volume}</span></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen gallery popup */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(10,9,8,0.92)" }}
          onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            className="absolute top-5 right-5 md:top-8 md:right-8 p-2"
            style={{ color: "#FFFFFF" }}
            aria-label="Close gallery"
          >
            <X size={28} strokeWidth={2} />
          </button>

          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()} // clicking inside the image area shouldn't close it
          >
            <div className="brand-font text-white text-lg font-medium mb-4 text-center">
              {activeProject.name}
            </div>

            <div className="relative aspect-[4/3] md:aspect-[16/9] flex items-center justify-center" style={{ background: colors.charcoalSoft }}>
              {activeProject.images && activeProject.images.length > 0 ? (
                <img
                  src={activeProject.images[activeIndex]}
                  alt={`${activeProject.name} photo ${activeIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="body-font text-sm text-center px-6" style={{ color: colors.concreteMid }}>
                  No photos added yet for this project. Add images to the "images" array in Projects.jsx.
                </div>
              )}

              {/* Prev / Next arrows — only show if more than 1 photo */}
              {activeProject.images && activeProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 md:left-4 p-2"
                    style={{ background: "rgba(255,255,255,0.1)", color: "#FFFFFF" }}
                  >
                    <ChevronLeft size={24} strokeWidth={2} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 md:right-4 p-2"
                    style={{ background: "rgba(255,255,255,0.1)", color: "#FFFFFF" }}
                  >
                    <ChevronRight size={24} strokeWidth={2} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {activeProject.images && activeProject.images.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                {activeProject.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="thumb w-16 h-16 overflow-hidden border-2"
                    style={{ borderColor: idx === activeIndex ? colors.orange : "transparent" }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
