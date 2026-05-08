// src/components/layout/Header.jsx

'use client';

import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import useToggle from "../../hooks/useToggle";
import Button from "../UI/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const { state: isOpen, toggleState } = useToggle(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const baseLink =
    "px-2 py-1 rounded-md transition " +
    "hover:outline-1 hover:outline-[#5AC8FA] hover:shadow-[0_0_8px_#5AC8FA]";

  const activeLink = "text-[#5AC8FA] font-semibold shadow-[0_0_8px_#5AC8FA]";

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      html.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  // Ferme le menu si navigation
  useEffect(() => {
    if (isOpen) toggleState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="mx-auto max-w-screen-7xl px-3 sm:px-4">
        {/* Capsule flottante */}
        <div
          className="
            h-14 sm:h-16
            flex items-center justify-between
            px-3 sm:px-4
            backdrop-blur
            bg-[#1e1e1e]/85
            border border-[#2f2f2f]
            rounded-2xl
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          "
        >
          {/* Logo */}
          <Link href="/" aria-label="Retour à l’accueil" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/logos/site/logo.png"
              alt="Logo Julien Lisita"
              className="h-9 sm:h-10 w-auto"
              loading="eager"
              decoding="async"
            />
            <span className="text-sm sm:text-base font-medium text-gray-100">
              Julien Lisita
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-6 text-gray-100">
            <Link href="/" className={`${baseLink} ${isActive("/") ? activeLink : ""}`}>
              Accueil
            </Link>
            <Link href="/services" className={`${baseLink} ${isActive("/services") ? activeLink : ""}`}>
              Services
            </Link>
            <Link
              href="/realisations"
              className={`${baseLink} ${isActive("/realisations") ? activeLink : ""}`}
            >
              Réalisations
            </Link>
            <Link href="/tarifs" className={`${baseLink} ${isActive("/tarifs") ? activeLink : ""}`}>
              Tarifs
            </Link>
            <Link href="/a-propos" className={`${baseLink} ${isActive("/a-propos") ? activeLink : ""}`}>
              À propos
            </Link>
          </nav>

          {/* Actions à droite */}
          <div className="flex items-center gap-2">
            {/* CTA Contact – taille maîtrisée */}
            <Button
              to="/contact"
              variant="primary" size="sm"
              aria-label="Me contacter"
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Discuter du projet</span>
            </Button>

            {/* Burger menu (mobile) */}
            <button
              type="button"
              className="
                lg:hidden
                p-2
                rounded-full
                transition
                hover:ring-2 hover:ring-[#5AC8FA]/50
                hover:shadow-[0_0_8px_#5AC8FA]
                focus-visible:ring-2 focus-visible:ring-[#5AC8FA]
              "
              onClick={toggleState}
              aria-label="Ouvrir le menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-7 w-7 text-gray-100" />
              ) : (
                <Menu className="h-7 w-7 text-gray-100" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          id="mobile-menu"
          className={[
            "lg:hidden mt-2",
            "bg-[#1e1e1e]/95 backdrop-blur",
            "border border-[#2f2f2f]",
            "rounded-2xl",
            "overflow-hidden transition-[max-height,opacity,transform] duration-300",
            isOpen
              ? "max-h-130 opacity-100 translate-y-0 py-3"
              : "max-h-0 opacity-0 -translate-y-1 py-0",
          ].join(" ")}
        >
          <nav className="flex flex-col text-gray-100 px-3">
            <Link
              href="/"
              onClick={toggleState}
              className={`text-center py-3 border-b border-[#2a2a2a] ${baseLink} ${
                isActive("/") ? activeLink : ""
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              onClick={toggleState}
              className={`text-center py-3 border-b border-[#2a2a2a] ${baseLink} ${
                isActive("/services") ? activeLink : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/realisations"
              onClick={toggleState}
              className={`text-center py-3 border-b border-[#2a2a2a] ${baseLink} ${
                isActive("/realisations") ? activeLink : ""
              }`}
            >
              Réalisations
            </Link>
            <Link
              href="/tarifs"
              onClick={toggleState}
              className={`text-center py-3 border-b border-[#2a2a2a] ${baseLink} ${
                isActive("/tarifs") ? activeLink : ""
              }`}
            >
              Tarifs
            </Link>
            <Link
              href="/a-propos"
              onClick={toggleState}
              className={`text-center py-3 ${baseLink} ${
                isActive("/a-propos") ? activeLink : ""
              }`}
            >
              À propos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}