import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed z-40 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-transform hover:-translate-y-1"
      style={{
        background: "#D9531E",
        bottom: "200px", // apne call/whatsapp buttons ke upar rakha hai, taaki overlap na ho
        right: "24px",
        transition: "transform 0.2s ease, opacity 0.2s ease",
      }}
    >
      <ArrowUp size={25} color="#fff" strokeWidth={2.5} />
    </button>
  );
}
