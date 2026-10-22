"use client";

// src/components/services/website/WebsiteHero.jsx

import Link from "next/link";

import { motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, ArrowRight } from "lucide-react";

import WebsiteMockup from "./WebsiteMockup";

export default function WebsiteHero() {
  const reducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      aria-labelledby="website-hero-title"
      className="
        relative isolate overflow-hidden
        bg-transparent
        pb-16 pt-20
        sm:pb-24 sm:pt-28
        lg:pb-32 lg:pt-32
      "
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: reducedMotion ? 0 : 0.12,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Catégorie */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-[#5AC8FA]" />

            <span
              className="
                text-xs font-semibold
                tracking-[0.18em] text-[#5AC8FA]
                sm:text-sm
              "
            >
              CRÉATION DE SITE INTERNET
            </span>

            <span className="h-px w-8 bg-[#5AC8FA]" />
          </motion.div>

          {/* Titre */}
          <motion.h1
            id="website-hero-title"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="
              mx-auto max-w-4xl
              text-4xl font-bold
              leading-[1.12] tracking-tight text-white
              sm:text-5xl lg:text-6xl
            "
          >
            Un site internet à la hauteur de votre activité.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="
              mx-auto mt-7 max-w-2xl
              text-base leading-relaxed text-gray-300
              sm:text-lg
            "
          >
            Artisan, indépendant ou entreprise, je crée des sites
            professionnels, rapides et adaptés à votre identité pour
            valoriser votre savoir-faire et faciliter les prises de
            contact.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="
              mt-9 flex flex-col
              items-center justify-center gap-4
              sm:flex-row
            "
          >
            {/* CTA principal */}
            <Link
              href="/contact"
              className="
                group inline-flex min-h-12
                items-center justify-center gap-2
                rounded-xl bg-[#5AC8FA]
                px-6 py-3
                text-sm font-semibold text-[#1C1C1C]
                transition-all duration-300
                hover:bg-[#83D6FB]
                hover:shadow-[0_0_30px_rgba(90,200,250,0.2)]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#5AC8FA]
              "
            >
              Parlons de votre projet

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>

            {/* CTA secondaire */}
            <Link
              href="/realisations"
              className="
                group inline-flex min-h-12
                items-center justify-center gap-2
                rounded-xl border border-white/15
                px-6 py-3
                text-sm font-medium text-white
                transition-all duration-300
                hover:border-white/30
                hover:bg-white/[0.04]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#5AC8FA]
              "
            >
              Voir mes réalisations

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Présentation visuelle */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <WebsiteMockup />
        </div>

        {/* Légende */}
        <div
          className="
            mt-7 flex flex-wrap
            items-center justify-center gap-x-3 gap-y-2
            text-center text-xs text-gray-400
            sm:text-sm
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#5AC8FA]" />

          <span>
            Une réalisation concrète
          </span>

          <span className="text-gray-600">—</span>

          <span className="text-gray-300">
            Compagnie Care & Services
          </span>
        </div>
      </div>
    </section>
  );
}