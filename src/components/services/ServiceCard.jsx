"use client";

// src/components/services/ServiceCard.jsx

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  Monitor,
  Layers3,
  ShieldCheck,
  Check,
  Activity,
} from "lucide-react";

/* --------------------------------------------------
   Configuration des couleurs
-------------------------------------------------- */

const themes = {
  website: {
    color: "#5AC8FA",
    glow: "rgba(90, 200, 250, 0.12)",
  },
  application: {
    color: "#007AFF",
    glow: "rgba(0, 122, 255, 0.14)",
  },
  maintenance: {
    color: "#9B59B6",
    glow: "rgba(155, 89, 182, 0.14)",
  },
};

/* --------------------------------------------------
   Illustration : site vitrine
-------------------------------------------------- */

function WebsiteVisual() {
  return (
    <div className="flex h-32 items-center justify-center">
      <div className="w-44 overflow-hidden rounded-lg border border-white/10 bg-[#1C1C1C] shadow-lg">
        {/* Barre navigateur */}

        <div className="flex h-6 items-center gap-1 border-b border-white/[0.06] px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5AC8FA]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />

          <div className="ml-auto h-1 w-10 rounded-full bg-white/10" />
        </div>

        {/* Contenu */}

        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="h-1.5 w-8 rounded-full bg-[#5AC8FA]/70" />

            <div className="flex gap-1.5">
              <div className="h-1 w-4 rounded-full bg-white/20" />
              <div className="h-1 w-4 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div>
              <div className="h-1.5 w-full rounded-full bg-white/70" />
              <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-white/40" />

              <div className="mt-3 h-1 w-full rounded-full bg-white/15" />
              <div className="mt-1 h-1 w-4/5 rounded-full bg-white/15" />

              <div className="mt-3 h-3 w-10 rounded bg-[#5AC8FA]" />
            </div>

            <div className="rounded-md bg-linear-to-br from-[#007AFF]/30 to-[#9B59B6]/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------
   Illustration : application sur mesure
-------------------------------------------------- */

function ApplicationVisual() {
  return (
    <div className="flex h-32 items-center justify-center">
      <div className="w-44 overflow-hidden rounded-lg border border-white/10 bg-[#1C1C1C] shadow-lg">
        {/* Barre supérieure */}

        <div className="flex h-6 items-center justify-between border-b border-white/[0.06] px-2">
          <div className="flex items-center gap-1.5">
            <Layers3
              size={11}
              className="text-[#007AFF]"
              aria-hidden="true"
            />

            <span className="text-[9px] text-gray-400">
              Dashboard
            </span>
          </div>

          <span className="h-1.5 w-1.5 rounded-full bg-[#007AFF]" />
        </div>

        {/* Statistiques */}

        <div className="grid grid-cols-2 gap-2 p-2">
          <div className="rounded-md bg-[#252525] p-2">
            <div className="h-1 w-8 rounded-full bg-white/20" />

            <p className="mt-2 text-sm font-semibold text-white">
              128
            </p>

            <div className="mt-1 h-1 w-10 rounded-full bg-[#007AFF]/50" />
          </div>

          <div className="rounded-md bg-[#252525] p-2">
            <div className="h-1 w-8 rounded-full bg-white/20" />

            <p className="mt-2 text-sm font-semibold text-white">
              24
            </p>

            <div className="mt-1 h-1 w-10 rounded-full bg-[#007AFF]/50" />
          </div>
        </div>

        {/* Progression */}

        <div className="mx-2 mb-2 rounded-md bg-[#252525] p-2">
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-[#007AFF]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------
   Illustration : maintenance
-------------------------------------------------- */

function MaintenanceVisual() {
  return (
    <div className="flex h-32 items-center justify-center">
      <div className="flex w-44 flex-col items-center gap-3">
        {/* Bouclier */}

        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#9B59B6]/25 bg-[#9B59B6]/10">
          <ShieldCheck
            size={30}
            className="text-[#9B59B6]"
            aria-hidden="true"
          />

          <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#2A2A2A] bg-[#007AFF]">
            <Check
              size={11}
              className="text-white"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Indicateurs */}

        <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#1C1C1C] px-3 py-1.5">
          <Activity
            size={12}
            className="text-[#9B59B6]"
            aria-hidden="true"
          />

          <span className="text-[10px] text-gray-300">
            Site opérationnel
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#9B59B6]" />
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------
   Association des illustrations
-------------------------------------------------- */

const visuals = {
  website: WebsiteVisual,
  application: ApplicationVisual,
  maintenance: MaintenanceVisual,
};

const icons = {
  website: Monitor,
  application: Layers3,
  maintenance: ShieldCheck,
};

/* --------------------------------------------------
   Carte de service
-------------------------------------------------- */

export default function ServiceCard({
  title,
  subtitle,
  description,
  link,
  theme,
}) {
  const reducedMotion = useReducedMotion();

  const currentTheme = themes[theme];
  const Visual = visuals[theme];
  const Icon = icons[theme];

  if (!currentTheme || !Visual || !Icon) {
    return null;
  }

  return (
    <motion.article
      whileHover={
        reducedMotion
          ? undefined
          : { y: -4 }
      }
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-2xl
        border border-white/[0.08]
        bg-[#2A2A2A]
        transition-colors duration-300
        hover:border-white/20
      "
    >
      {/* Halo lumineux */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-4
          h-40 w-40 -translate-x-1/2
          rounded-full blur-[65px]
        "
        style={{
          backgroundColor: currentTheme.glow,
        }}
      />

      {/* Contenu */}

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">

        {/* Icône */}

        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
          "
          style={{
            backgroundColor: `${currentTheme.color}18`,
          }}
        >
          <Icon
            size={20}
            style={{ color: currentTheme.color }}
            aria-hidden="true"
          />
        </div>

        {/* Illustration */}

        <div className="mt-4">
          <Visual />
        </div>

        {/* Texte */}

        <div className="mt-5 flex flex-1 flex-col">

          <p
            className="text-[11px] font-semibold tracking-[0.14em]"
            style={{
              color: currentTheme.color,
            }}
          >
            {subtitle}
          </p>

          <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
            {title}
          </h3>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">
            {description}
          </p>

          {/* Lien */}

          <div className="mt-7 border-t border-white/[0.08] pt-5">
            <Link
              href={link}
              className="
                inline-flex items-center gap-2
                text-sm font-semibold text-[#5AC8FA]
                transition-colors duration-300
                hover:text-white
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#5AC8FA]
              "
            >
              Découvrir le service

              <ArrowUpRight
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}