// src/components/layout/SiteLayout.jsx

"use client";

import { usePathname } from "next/navigation";
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <HeaderWrapper />
      <main
        className={
          (
            isHome
              ? "scroll-smooth bg-[#222222] pb-16 sm:pb-20 lg:pb-24"
              : "px-4 sm:px-8 lg:px-24 xl:px-32 bg-[#222222] pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 text-gray-200"
          ) + " grow"
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
}