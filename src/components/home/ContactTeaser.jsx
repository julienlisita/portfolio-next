// src/components/home/ContactTeaser.jsx

import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import HomeSectionWrapper from "./HomeSectionWrapper";

export default function ContactTeaser()
{
    return (
        <HomeSectionWrapper
            id="contact"
            title="Discutons de votre projet"
            link={{href:"/contact", text:"Page de contact"}}
        > 
            <p className="text-base sm:text-lg lg:text-xl">
                Un projet, une question ou besoin d’un devis ?
                Expliquez-moi votre besoin, je vous réponds simplement avec une solution adaptée.
            </p>
            {/* Coordonnées rapides */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 text-base">
            
            {/* Téléphone */}
            <div className="flex items-center gap-3">
                <Phone className="text-[#007AFF]" size={28} aria-hidden />
                <a
                href="tel:+33623000449"
                className="font-medium hover:text-[#5AC8FA] transition"
                >
                06 23 00 04 49
                </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3">
                <FaWhatsapp className="text-[#007AFF]" size={26} aria-hidden />
                <a
                href="https://wa.me/33623000449?text=Bonjour%20Julien%2C%20je%20souhaite%20des%20informations%20sur%20la%20cr%C3%A9ation%20d%27un%20site%20internet"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-[#5AC8FA] transition"
                >
                Discuter sur WhatsApp
                </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
                <Mail className="text-[#007AFF]" size={28} aria-hidden />
                <a
                href="mailto:contact@julienlisita.com"
                className="font-medium hover:text-[#5AC8FA] transition"
                >
                contact@julienlisita.com
                </a>
            </div>
            </div>
        </HomeSectionWrapper>
    )
}