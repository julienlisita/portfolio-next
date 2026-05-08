// src/components/layout/HeaderWrapper.jsx

'use client';

import { useEffect, useState } from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function HeaderWrapper() {
  const [showHeader, setShowHeader] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      // Sur toutes les pages sauf Home, on affiche toujours le header
      setShowHeader(true);
      return;
    }

    const landingSection = document.getElementById("landing");

    const handleScroll = () => {
      if (!landingSection) return;
      const rect = landingSection.getBoundingClientRect();

      // On affiche le Header si le haut de la section est en dehors de l'écran
      const isPastLanding = rect.bottom <= 100;

      setShowHeader(isPastLanding);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // pour gérer si on recharge la page scrollée

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      {showHeader && (
        <div className="fixed top-0 left-0 w-full z-50 transition-opacity duration-300">
          <Header />
        </div>
      )}
    </>
  );
}