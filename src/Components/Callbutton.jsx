import React from "react";
import { Phone } from "lucide-react";

// Change this to your real number (with country code)
const PHONE_NUMBER = "+919829000000";

export default function CallButton() {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
      style={{ background: "#D9531E", transition: "transform 0.2s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      aria-label="Call us now"
    >
      <Phone size={26} strokeWidth={2} className="text-white" />
    </a>
  );
}
