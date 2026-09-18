// import React, { useState } from "react";
// import { ArrowUpRight, Building2, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

// // Import your project photos here, e.g.:
// // import p1a from "../assets/project1-a.jpg";
// // import p1b from "../assets/project1-b.jpg";
// // import p2a from "../assets/project2-a.jpg";

// const colors = {
//   charcoal: "#221F1C",
//   charcoalSoft: "#33302B",
//   concrete: "#EDEAE2",
//   concreteMid: "#D8D2C4",
//   steel: "#6B6459",
//   orange: "#D9531E",
//   orangeDark: "#B8451A",
//   yellow: "#F2B705",
//   ink: "#1A1815",
// };

// const CATEGORIES = ["All", "Residential", "Commercial", "Infrastructure"];

// // Each project now takes an ARRAY of images in "images", not a single "image".
// // Add as many photos per project as you like — the popup will let visitors
// // swipe/click through all of them.
// const PROJECTS = [
//   { name: "Vaishali Nagar Residency", location: "Vaishali Nagar, Jaipur", category: "Residential", grade: "M25", volume: "1,200 m³", images: [] },
//   { name: "Sitapura Warehouse Complex", location: "Sitapura Industrial Area, Jaipur", category: "Commercial", grade: "M30", volume: "3,400 m³", images: [] },
//   { name: "NH-48 Flyover Support Piers", location: "NH-48, Kotputli", category: "Infrastructure", grade: "M40", volume: "5,000 m³", images: [] },
//   { name: "Malviya Nagar Apartments", location: "Malviya Nagar, Jaipur", category: "Residential", grade: "M25", volume: "950 m³", images: [] },
//   { name: "Ajmer Road Retail Plaza", location: "Ajmer Road, Jaipur", category: "Commercial", grade: "M30", volume: "2,100 m³", images: [] },
//   { name: "Kotputli Bridge Widening", location: "Kotputli, Rajasthan", category: "Infrastructure", grade: "M35", volume: "4,200 m³", images: [] },
// ];

// export default function Projects() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [activeProject, setActiveProject] = useState(null); // holds the project object when gallery is open
//   const [activeIndex, setActiveIndex] = useState(0); // which photo inside that project is showing

//   const filtered =
//     activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

//   const openGallery = (project) => {
//     setActiveProject(project);
//     setActiveIndex(0);
//   };

//   const closeGallery = () => {
//     setActiveProject(null);
//   };

//   const nextImage = () => {
//     if (!activeProject) return;
//     setActiveIndex((i) => (i + 1) % activeProject.images.length);
//   };

//   const prevImage = () => {
//     if (!activeProject) return;
//     setActiveIndex((i) => (i - 1 + activeProject.images.length) % activeProject.images.length);
//   };

//   return (
//     <section id="projects" style={{ background: colors.concrete }} className="py-20 md:py-28">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
//         .brand-font { font-family: 'Poppins', sans-serif; }
//         .body-font { font-family: 'Inter', sans-serif; }
//         .filter-pill { transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease; cursor: pointer; }
//         .project-card { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: pointer; }
//         .project-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(0,0,0,0.12); }
//         .project-overlay { transition: opacity 0.25s ease; }
//         .thumb { transition: border-color 0.15s ease, opacity 0.15s ease; cursor: pointer; }
//         .thumb:hover { opacity: 0.85; }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-6 md:px-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
//           <div className="max-w-xl">
//             <div
//               className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
//               style={{ background: "rgba(217,83,30,0.08)", border: `1px solid ${colors.orange}` }}
//             >
//               <span className="body-font text-xs font-medium tracking-wide" style={{ color: colors.orangeDark }}>
//                 OUR WORK
//               </span>
//             </div>
//             <h2
//               className="brand-font font-semibold leading-[1.1] tracking-tight"
//               style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: colors.ink }}
//             >
//               Poured, cured,
//               <br />
//               standing strong.
//             </h2>
//           </div>

//           {/* Category filters */}
//           <div className="flex flex-wrap gap-2.5">
//             {CATEGORIES.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className="filter-pill brand-font text-sm font-medium px-4 py-2 border"
//                 style={{
//                   background: activeCategory === cat ? colors.orange : "#FFFFFF",
//                   color: activeCategory === cat ? "#FFFFFF" : colors.ink,
//                   borderColor: activeCategory === cat ? colors.orange : colors.concreteMid,
//                 }}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Project grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map((p) => {
//             const coverImage = p.images && p.images.length > 0 ? p.images[0] : null;
//             return (
//               <div
//                 key={p.name}
//                 className="project-card group"
//                 style={{ background: "#FFFFFF", border: `1px solid ${colors.concreteMid}` }}
//                 onClick={() => openGallery(p)}
//               >
//                 {/* Cover image — tap opens the full gallery for this project */}
//                 <div
//                   className="relative aspect-[4/3] flex items-center justify-center overflow-hidden"
//                   style={{ background: `linear-gradient(155deg, ${colors.charcoalSoft} 0%, ${colors.ink} 100%)` }}
//                 >
//                   {coverImage ? (
//                     <img src={coverImage} alt={p.name} className="w-full h-full object-cover" />
//                   ) : (
//                     <Building2 size={56} strokeWidth={1} style={{ color: "rgba(255,255,255,0.15)" }} />
//                   )}

//                   <div
//                     className="project-overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
//                     style={{ background: "rgba(217,83,30,0.9)" }}
//                   >
//                     <div className="flex items-center gap-2 text-white brand-font text-sm font-medium">
//                       {p.images && p.images.length > 1 ? `View ${p.images.length} Photos` : "View Details"}
//                       <ArrowUpRight size={16} strokeWidth={2.5} />
//                     </div>
//                   </div>

//                   <div className="absolute top-3 left-3 px-3 py-1" style={{ background: colors.orange }}>
//                     <span className="body-font text-xs font-medium text-white">{p.category}</span>
//                   </div>
//                 </div>

//                 {/* Details — image → name → location → details → CTA */}
//                 <div className="p-5">
//                   <div className="brand-font text-base font-semibold mb-1.5" style={{ color: colors.ink }}>
//                     {p.name}
//                   </div>
//                   <div className="flex items-center gap-1.5 body-font text-xs mb-3" style={{ color: colors.steel }}>
//                     <MapPin size={12} strokeWidth={2} style={{ color: colors.orange }} />
//                     {p.location}
//                   </div>
//                   <div className="flex items-center gap-4 body-font text-xs pt-3" style={{ color: colors.steel, borderTop: `1px solid ${colors.concrete}` }}>
//                     <span>Grade: <span style={{ color: colors.ink, fontWeight: 500 }}>{p.grade}</span></span>
//                     <span>Volume: <span style={{ color: colors.ink, fontWeight: 500 }}>{p.volume}</span></span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Fullscreen gallery popup */}
//       {activeProject && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
//           style={{ background: "rgba(10,9,8,0.92)" }}
//           onClick={closeGallery}
//         >
//           <button
//             onClick={closeGallery}
//             className="absolute top-5 right-5 md:top-8 md:right-8 p-2"
//             style={{ color: "#FFFFFF" }}
//             aria-label="Close gallery"
//           >
//             <X size={28} strokeWidth={2} />
//           </button>

//           <div
//             className="relative w-full max-w-4xl"
//             onClick={(e) => e.stopPropagation()} // clicking inside the image area shouldn't close it
//           >
//             <div className="brand-font text-white text-lg font-medium mb-4 text-center">
//               {activeProject.name}
//             </div>

//             <div className="relative aspect-[4/3] md:aspect-[16/9] flex items-center justify-center" style={{ background: colors.charcoalSoft }}>
//               {activeProject.images && activeProject.images.length > 0 ? (
//                 <img
//                   src={activeProject.images[activeIndex]}
//                   alt={`${activeProject.name} photo ${activeIndex + 1}`}
//                   className="w-full h-full object-contain"
//                 />
//               ) : (
//                 <div className="body-font text-sm text-center px-6" style={{ color: colors.concreteMid }}>
//                   No photos added yet for this project. Add images to the "images" array in Projects.jsx.
//                 </div>
//               )}

//               {/* Prev / Next arrows — only show if more than 1 photo */}
//               {activeProject.images && activeProject.images.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-2 md:left-4 p-2"
//                     style={{ background: "rgba(255,255,255,0.1)", color: "#FFFFFF" }}
//                   >
//                     <ChevronLeft size={24} strokeWidth={2} />
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-2 md:right-4 p-2"
//                     style={{ background: "rgba(255,255,255,0.1)", color: "#FFFFFF" }}
//                   >
//                     <ChevronRight size={24} strokeWidth={2} />
//                   </button>
//                 </>
//               )}
//             </div>

//             {/* Thumbnail strip */}
//             {activeProject.images && activeProject.images.length > 1 && (
//               <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
//                 {activeProject.images.map((img, idx) => (
//                   <div
//                     key={idx}
//                     onClick={() => setActiveIndex(idx)}
//                     className="thumb w-16 h-16 overflow-hidden border-2"
//                     style={{ borderColor: idx === activeIndex ? colors.orange : "transparent" }}
//                   >
//                     <img src={img} alt="" className="w-full h-full object-cover" />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
import React, { useState } from "react";
// import p1a from "../../assets/p1.jpeg";
import p1a from "../../assets/p1.jpeg";
import p1b from "../../assets/p2.jpeg";
import p2a from "../../assets/p3.jpeg";
import p2b from "../../assets/p4.jpeg";
import q1a from "./q1.jpeg";
import q1b from "./q2.jpeg";
import ra from "../../assets/r1.jpeg";
import sa from "../../assets/s1.jpeg";
import ta from "../../assets/t1.jpeg";
import ua from "../../assets/u1.jpeg";




import {
  ArrowUpRight,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Layers3,
  Truck,
} from "lucide-react";

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
  white: "#FFFFFF",
};


// Add your project images here
const PROJECTS = [
  {
    name: "Vaishali Nagar Residency",
    category: "Residential",
    location: "Jaipur",
    grade: "M25",
    volume: "1,200 m³",
    images: [p1a, p1b, p2a, p2b], // Add your images here
  },
  {
    name: "Sitapura Warehouse Complex",
    category: "Commercial",
    location: "Jaipur",
    grade: "M30",
    volume: "3,400 m³",
    images: [q1a, q1b], // Add your images here
  },
  {
    name: "NH-48 Flyover Support Piers",
    category: "Infrastructure",
    location: "Rajasthan",
    grade: "M40",
    volume: "5,000 m³",
    images: [ra],
  },
  {
    name: "Malviya Nagar Apartments",
    category: "Residential",
    location: "Jaipur",
    grade: "M25",
    volume: "950 m³",
    images: [sa],
  },
  {
    name: "Ajmer Road Retail Plaza",
    category: "Commercial",
    location: "Jaipur",
    grade: "M30",
    volume: "2,100 m³",
    images: [ta],
  },
  {
    name: "Kotputli Bridge Widening",
    category: "Infrastructure",
    location: "Kotputli",
    grade: "M35",
    volume: "4,200 m³",
    images: [ua],
  },
];

const CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Infrastructure",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (project) => project.category === activeCategory
        );

  const openGallery = (project) => {
    setActiveProject(project);
    setActiveIndex(0);
  };

  const closeGallery = () => {
    setActiveProject(null);
  };

  const nextImage = () => {
    if (!activeProject?.images?.length) return;

    setActiveIndex(
      (index) => (index + 1) % activeProject.images.length
    );
  };

  const prevImage = () => {
    if (!activeProject?.images?.length) return;

    setActiveIndex(
      (index) =>
        (index - 1 + activeProject.images.length) %
        activeProject.images.length
    );
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: colors.concrete }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        .brand-font {
          font-family: 'Poppins', sans-serif;
        }

        .body-font {
          font-family: 'Inter', sans-serif;
        }

        .project-card {
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .project-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 45px rgba(34, 31, 28, 0.14);
          border-color: rgba(217, 83, 30, 0.45) !important;
        }

        .project-image {
          transition:
            transform 0.55s ease,
            filter 0.4s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.06);
          filter: brightness(0.8);
        }

        .project-overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .filter-button {
          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease,
            border-color 0.25s ease;
        }

        .filter-button:hover {
          transform: translateY(-2px);
        }

        .project-icon {
          transition: transform 0.35s ease;
        }

        .project-card:hover .project-icon {
          transform: translateY(-4px) rotate(-3deg);
        }

        .gallery-image {
          animation: galleryFade 0.3s ease;
        }

        @keyframes galleryFade {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* ================= HERO ================= */}
        <div className="relative mb-12 overflow-hidden rounded-3xl">
          <div
            className="relative px-7 py-12 md:px-12 md:py-16"
            style={{
              background: `
                radial-gradient(
                  circle at 85% 20%,
                  rgba(217,83,30,0.28),
                  transparent 32%
                ),
                linear-gradient(
                  135deg,
                  ${colors.charcoal} 0%,
                  ${colors.charcoalSoft} 100%
                )
              `,
            }}
          >
            {/* Decorative circles */}
            <div
              className="absolute -right-20 -top-20 w-64 h-64 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />

            <div
              className="absolute -right-5 -top-5 w-40 h-40 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />

            <div className="relative max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full"
                style={{
                  background: "rgba(217,83,30,0.15)",
                  border: "1px solid rgba(217,83,30,0.5)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: colors.orange }}
                />

                <span
                  className="body-font text-xs font-semibold tracking-[0.16em]"
                  style={{ color: "#F7B19A" }}
                >
                  OUR PROJECTS
                </span>
              </div>

              <h1
                className="brand-font font-semibold leading-[1.08] tracking-tight text-white"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                }}
              >
                Built to last.
                <br />

                <span style={{ color: colors.orange }}>
                  Delivered with precision.
                </span>
              </h1>

              <p
                className="body-font mt-5 max-w-xl text-sm md:text-base leading-7"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                Explore our ready-mix concrete projects across
                residential, commercial and infrastructure
                developments.
              </p>
            </div>
          </div>
        </div>

        {/* ================= FILTERS ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

          <div>
            <p
              className="body-font text-xs uppercase tracking-[0.16em] font-semibold"
              style={{ color: colors.steel }}
            >
              Explore our work
            </p>

            <h2
              className="brand-font text-xl md:text-2xl font-semibold mt-1"
              style={{ color: colors.ink }}
            >
              Featured Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="filter-button body-font text-xs md:text-sm font-medium px-4 py-2.5 rounded-full border"
                  style={{
                    background: active
                      ? colors.orange
                      : colors.white,
                    color: active
                      ? colors.white
                      : colors.ink,
                    borderColor: active
                      ? colors.orange
                      : colors.concreteMid,
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredProjects.map((project, index) => {
            const coverImage =
              project.images?.length > 0
                ? project.images[0]
                : null;

            return (
              <article
                key={project.name}
                className="project-card group overflow-hidden rounded-2xl border bg-white"
                style={{
                  borderColor: colors.concreteMid,
                }}
                onClick={() => openGallery(project)}
              >
                {/* Image */}
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{
                    background: `
                      linear-gradient(
                        145deg,
                        ${colors.charcoalSoft},
                        ${colors.ink}
                      )
                    `,
                  }}
                >
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={project.name}
                      className="project-image w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Building2
                        className="project-icon"
                        size={62}
                        strokeWidth={1}
                        style={{
                          color: "rgba(255,255,255,0.18)",
                        }}
                      />
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div
                    className="project-overlay absolute inset-0 flex items-end p-5"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(20,18,16,0.9))",
                    }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="brand-font text-sm font-medium text-white">
                        View Project
                      </span>

                      <span
                        className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{
                          background: colors.orange,
                        }}
                      >
                        <ArrowUpRight
                          size={17}
                          color="white"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="body-font text-[11px] font-semibold px-3 py-1.5 rounded-full text-white"
                      style={{
                        background: "rgba(34,31,28,0.78)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Project number */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="body-font text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        color: colors.ink,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="brand-font text-base md:text-lg font-semibold leading-snug"
                    style={{ color: colors.ink }}
                  >
                    {project.name}
                  </h3>

                  <div
                    className="flex items-center gap-1.5 mt-2 body-font text-xs"
                    style={{ color: colors.steel }}
                  >
                    <MapPin size={13} />

                    {project.location}
                  </div>

                  <div
                    className="h-px my-4"
                    style={{
                      background: colors.concreteMid,
                    }}
                  />

                  <div className="grid grid-cols-2 gap-3">

                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          background: "rgba(217,83,30,0.09)",
                          color: colors.orange,
                        }}
                      >
                        <Layers3 size={15} />
                      </div>

                      <div>
                        <p
                          className="body-font text-[10px]"
                          style={{ color: colors.steel }}
                        >
                          Concrete Grade
                        </p>

                        <p
                          className="brand-font text-xs font-semibold"
                          style={{ color: colors.ink }}
                        >
                          {project.grade}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          background: "rgba(217,83,30,0.09)",
                          color: colors.orange,
                        }}
                      >
                        <Truck size={15} />
                      </div>

                      <div>
                        <p
                          className="body-font text-[10px]"
                          style={{ color: colors.steel }}
                        >
                          Volume
                        </p>

                        <p
                          className="brand-font text-xs font-semibold"
                          style={{ color: colors.ink }}
                        >
                          {project.volume}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div
            className="py-16 text-center rounded-2xl border"
            style={{
              background: colors.white,
              borderColor: colors.concreteMid,
            }}
          >
            <Building2
              size={42}
              className="mx-auto mb-4"
              style={{ color: colors.steel }}
            />

            <h3
              className="brand-font font-semibold"
              style={{ color: colors.ink }}
            >
              No projects found
            </h3>

            <p
              className="body-font text-sm mt-2"
              style={{ color: colors.steel }}
            >
              Please select another category.
            </p>
          </div>
        )}
      </div>

      {/* ================= FULLSCREEN GALLERY ================= */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(10,9,8,0.94)",
            backdropFilter: "blur(10px)",
          }}
          onClick={closeGallery}
        >
          {/* Close */}
          <button
            onClick={closeGallery}
            className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: colors.white,
            }}
            aria-label="Close gallery"
          >
            <X size={23} />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Title */}
            <div className="mb-4 text-center">
              <p
                className="body-font text-xs uppercase tracking-[0.18em]"
                style={{ color: "#F7B19A" }}
              >
                {activeProject.category}
              </p>

              <h3 className="brand-font text-white text-xl md:text-2xl font-semibold mt-1">
                {activeProject.name}
              </h3>
            </div>

            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center"
              style={{
                background: colors.charcoalSoft,
              }}
            >
              {activeProject.images?.length > 0 ? (
                <img
                  key={activeIndex}
                  src={activeProject.images[activeIndex]}
                  alt={`${activeProject.name} ${
                    activeIndex + 1
                  }`}
                  className="gallery-image w-full h-full object-contain"
                />
              ) : (
                <div className="text-center px-6">
                  <Building2
                    size={60}
                    className="mx-auto mb-4"
                    style={{
                      color: "rgba(255,255,255,0.15)",
                    }}
                  />

                  <p
                    className="body-font text-sm"
                    style={{
                      color: colors.concreteMid,
                    }}
                  >
                    Project photos will appear here.
                  </p>

                  <p
                    className="body-font text-xs mt-2"
                    style={{
                      color: colors.steel,
                    }}
                  >
                    Add images to the project's
                    <br />
                    <strong>"images"</strong> array.
                  </p>
                </div>
              )}

              {/* Navigation */}
              {activeProject.images?.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      color: colors.white,
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      color: colors.white,
                    }}
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Project info */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 mt-4">

              <div
                className="rounded-xl p-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="body-font text-[10px]"
                  style={{ color: colors.steel }}
                >
                  Location
                </p>

                <p className="brand-font text-xs md:text-sm text-white mt-1">
                  {activeProject.location}
                </p>
              </div>

              <div
                className="rounded-xl p-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="body-font text-[10px]"
                  style={{ color: colors.steel }}
                >
                  Grade
                </p>

                <p className="brand-font text-xs md:text-sm text-white mt-1">
                  {activeProject.grade}
                </p>
              </div>

              <div
                className="rounded-xl p-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="body-font text-[10px]"
                  style={{ color: colors.steel }}
                >
                  Volume
                </p>

                <p className="brand-font text-xs md:text-sm text-white mt-1">
                  {activeProject.volume}
                </p>
              </div>

            </div>

            {/* Thumbnails */}
            {activeProject.images?.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {activeProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="w-16 h-12 md:w-20 md:h-14 overflow-hidden rounded-lg border-2"
                    style={{
                      borderColor:
                        index === activeIndex
                          ? colors.orange
                          : "transparent",
                    }}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
