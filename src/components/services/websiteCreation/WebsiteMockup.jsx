"use client";

// src/components/services/website/WebsiteMockup.jsx

import Image from "next/image";

import { motion, useReducedMotion } from "motion/react";

export default function WebsiteMockup() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-5xl">
    {/* Halo cyan derrière les mockups */}
    <div
    aria-hidden="true"
    className="
        pointer-events-none absolute
        left-1/2 top-[48%]
        h-[65%] w-[80%]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-[#5AC8FA]/[0.12]
        blur-[110px]
    "
    />

      {/* Composition */}
      <div className="relative pb-12 pr-8 sm:pb-16 sm:pr-16 lg:pr-24">
        {/* Fenêtre desktop */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, y: 45, scale: 0.96 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative overflow-hidden rounded-xl
            border border-white/10
            bg-[#1C1C1C]
            shadow-[0_30px_90px_rgba(0,0,0,0.45)]
            sm:rounded-2xl
          "
        >
          {/* Barre navigateur */}
          <div
            className="
              flex h-9 items-center gap-2
              border-b border-white/[0.06]
              bg-[#2A2A2A] px-3
              sm:h-11 sm:px-5
            "
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#9B59B6]" />
              <span className="h-2 w-2 rounded-full bg-[#007AFF]" />
              <span className="h-2 w-2 rounded-full bg-[#5AC8FA]" />
            </div>

            {/* Barre d'adresse */}
            <div
              className="
                mx-auto flex h-5 w-[55%]
                items-center justify-center
                rounded-md border border-white/[0.05]
                bg-[#1C1C1C]
                sm:h-6
              "
            >
              <span className="text-[9px] text-gray-500 sm:text-xs">
                compagniecareetservices.fr
              </span>
            </div>
          </div>

          {/* Capture desktop */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/assets/images/services/ccs-desktop.webp"
              alt="Site internet Compagnie Care & Services sur ordinateur"
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 1000px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Smartphone */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, x: 35, y: 20, scale: 0.9 }
          }
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            delay: reducedMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute bottom-0 right-0 z-10
            w-[24%] min-w-[85px]
            overflow-hidden rounded-[18px]
            border-[5px] border-[#252525]
            bg-[#252525]
            shadow-[0_25px_65px_rgba(0,0,0,0.55)]
            sm:rounded-[28px] sm:border-[7px]
          "
        >
          {/* Haut du téléphone */}
          <div className="flex h-5 items-center justify-center sm:h-7">
            <span className="h-1 w-8 rounded-full bg-white/20" />
          </div>

          {/* Capture mobile */}
          <div className="relative aspect-[9/18] overflow-hidden">
            <Image
              src="/assets/images/services/ccs-mobile.webp"
              alt="Version mobile du site Compagnie Care & Services"
              fill
              priority
              sizes="(max-width: 640px) 100px, (max-width: 1024px) 180px, 240px"
              className="object-cover object-top"
            />
          </div>

          {/* Bas du téléphone */}
          <div className="flex h-5 items-center justify-center sm:h-7">
            <span className="h-1 w-8 rounded-full bg-white/20" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}