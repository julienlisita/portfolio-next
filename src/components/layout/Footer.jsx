// src/components/layout/Footer.jsx

import Link from "next/link";
import { LuLinkedin, LuGithub, LuFacebook } from "react-icons/lu";

export default function Footer() {
  const year = new Date().getFullYear();
  

  return (
    <footer className="bg-[#222222] border-t border-gray-600 text-white">
      <div className="px-4 sm:px-8 py-8 space-y-6 max-w-6xl mx-auto">
        {/* Bloc haut */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/logos/site/logo.png"
              alt="Logo Julien Lisita"
              className="h-10 sm:h-11 lg:h-12 w-auto"
              loading="lazy"
              decoding="async"
            />
            <span className="text-sm sm:text-base font-medium text-gray-100 whitespace-nowrap">
              Julien Lisita
            </span>
          </div>

          {/* Liens (structurés) */}
          <div className="w-full sm:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {/* Essentiel */}
            <nav aria-label="Liens principaux" className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400">Navigation</p>
              <div className="flex flex-col gap-2">
                <Link className="hover:underline" href="/">Accueil</Link>
                <Link className="hover:underline" href="/services">Services</Link>
                <Link className="hover:underline" href="/realisations">Réalisations</Link>
                <Link className="hover:underline" href="/tarifs">Tarifs</Link>
                <Link className="hover:underline" href="/a-propos">À propos</Link>
                <Link className="hover:underline font-semibold text-white" href="/contact">Contact</Link>
              </div>
            </nav>

            {/* Ressources */}
            <nav aria-label="Ressources" className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400">Ressources</p>
              <div className="flex flex-col gap-2">
                <Link className="hover:underline" href="/comment-je-travaille">Comment je travaille</Link>
                <Link className="hover:underline" href="/blog">Blog</Link>
              </div>
            </nav>

            {/* Profil / Technique */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-gray-400">Réseaux</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/julienlisita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-moi sur LinkedIn"
                  className="rounded-md p-2 hover:outline-1 hover:outline-[#5AC8FA] hover:shadow-[0_0_10px_#5AC8FA]"
                >
                  <LuLinkedin className="h-6 w-6" aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/julienlisita"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir mon GitHub"
                  className="rounded-md p-2 hover:outline-1 hover:outline-[#5AC8FA] hover:shadow-[0_0_10px_#5AC8FA]"
                >
                  <LuGithub className="h-6 w-6" aria-hidden="true" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61584478395151"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-moi sur Facebook"
                  className="rounded-md p-2 hover:outline-1 hover:outline-[#5AC8FA] hover:shadow-[0_0_10px_#5AC8FA]"
                >
                  <LuFacebook className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="w-full h-px bg-gray-600/40" />

        {/* Bloc bas */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-300">
          <p className="text-xs sm:text-sm text-center sm:text-left opacity-80">
            © {year} Julien LISITA — Développeur Web à Bordeaux (EI)
          </p>

          <nav aria-label="Liens légaux" className="flex items-center gap-x-4 text-xs sm:text-sm">
            <Link className="hover:underline" href="/mentions-legales">
              Mentions légales & confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}