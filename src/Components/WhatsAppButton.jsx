import React from "react";
import { MessageCircle } from "lucide-react";

// Change the phone number below to your real WhatsApp business number (with country code, no + or spaces)
const WHATSAPP_NUMBER = "919829000000";
const DEFAULT_MESSAGE = "Hi, I'd like a quote for Ready Mix Concrete.";

export default function WhatsAppButton() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
      style={{ background: "#25D366", transition: "transform 0.2s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} className="text-white" />
    </a>
  );
}
