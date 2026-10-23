// src/components/contact/ContactDetails.jsx

import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { LuLinkedin, LuGithub, LuFacebook } from "react-icons/lu";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61584478395151",
    Icon: LuFacebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julienlisita",
    Icon: LuLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/julienlisita",
    Icon: LuGithub,
  },
];

export default function ContactDetails() {
  return (
    <div className="space-y-6">
      {/* Coordonnées */}
      <div className="rounded-2xl bg-[#2a2a2a] p-6">
        <h3 className="mb-5 text-lg font-semibold text-white">
          Mes coordonnées
        </h3>

        <address className="not-italic">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone
                size={20}
                aria-hidden="true"
                className="shrink-0 text-[#5AC8FA]"
              />

              <a
                href="tel:+33623000449"
                className="text-sm text-gray-200 transition-colors hover:text-[#5AC8FA] sm:text-base"
              >
                06 23 00 04 49
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaWhatsapp
                size={20}
                aria-hidden="true"
                className="shrink-0 text-[#5AC8FA]"
              />

              <a
                href="https://wa.me/33623000449"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-200 transition-colors hover:text-[#5AC8FA] sm:text-base"
              >
                Discuter sur WhatsApp
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={20}
                aria-hidden="true"
                className="shrink-0 text-[#5AC8FA]"
              />

              <a
                href="mailto:contact@julienlisita.com"
                className="break-all text-sm text-gray-200 transition-colors hover:text-[#5AC8FA] sm:text-base"
              >
                contact@julienlisita.com
              </a>
            </li>
          </ul>
        </address>
      </div>

      {/* Réseaux sociaux */}
      <div className="rounded-2xl bg-[#2a2a2a] p-6">
        <h3 className="mb-5 text-lg font-semibold text-white">
          Réseaux
        </h3>

        <ul className="flex items-center justify-around">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Retrouvez-moi sur ${label}`}
                className="
                  inline-flex
                  rounded-lg p-2
                  text-gray-300
                  transition-colors
                  hover:text-[#5AC8FA]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#5AC8FA]
                "
              >
                <Icon size={28} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}