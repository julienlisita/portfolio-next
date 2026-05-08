// src/components/contact/ContactDetails.jsx

import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { LuLinkedin, LuGithub, LuFacebook } from "react-icons/lu";

export default function ContactDetails() {
  return (
    <div className="space-y-6">
      {/* Coordonnées */}
      <div className="bg-[#2a2a2a] rounded-2xl p-6 text-base sm:text-lg">
        <h3 className="text-white font-semibold text-lg mb-5">
          Mes coordonnées
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="text-[#007AFF]" />
            <a href="tel:+33623000449" className="font-medium hover:text-[#5AC8FA] transition">
              06 23 00 04 49
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-[#007AFF]" size={22} />
            <a
              href="https://wa.me/33623000449"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5AC8FA] transition"
            >
              Discuter sur WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-[#007AFF]" />
            <a
              href="mailto:contact@julienlisita.com"
              className="font-medium hover:text-[#5AC8FA] transition"
            >
              contact@julienlisita.com
            </a>
          </div>
        </div>
      </div>

      {/* Réseaux */}
      <div className="bg-[#2a2a2a] rounded-2xl p-6">
        <h3 className="text-white font-semibold text-lg mb-4">Réseaux</h3>
        <div className="flex justify-between px-4">
          <a href="https://www.facebook.com/profile.php?id=61584478395151" target="_blank" rel="noopener noreferrer">
            <LuFacebook size={34} />
          </a>
          <a href="https://www.linkedin.com/in/julienlisita" target="_blank" rel="noopener noreferrer">
            <LuLinkedin size={34} />
          </a>
          <a href="https://github.com/julienlisita" target="_blank" rel="noopener noreferrer">
            <LuGithub size={34} />
          </a>
        </div>
      </div>
    </div>
  );
}