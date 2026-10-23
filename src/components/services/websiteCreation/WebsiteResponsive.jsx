"use client";

// src/components/services/website/WebsiteResponsive.jsx

import { useState } from "react";
import Image from "next/image";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import {
  Monitor,
  Tablet,
  Smartphone,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

// ─────────────────────────────────────────────
// Configuration des appareils
// ─────────────────────────────────────────────

const devices = [
  {
    id: "desktop",
    label: "Ordinateur",
    icon: Monitor,
    width: "100%",
    maxWidth: 720,
    image: "/assets/images/services/lumieredarcachon-desktop.webp",
    alt: "Aperçu du site Lumière d'Arcachon sur ordinateur",
  },
  {
    id: "tablet",
    label: "Tablette",
    icon: Tablet,
    width: "75%",
    maxWidth: 470,
    image: "/assets/images/services/lumieredarcachon-tablet.webp",
    alt: "Aperçu du site Lumière d'Arcachon sur tablette",
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    width: "55%",
    maxWidth: 250,
    image: "/assets/images/services/lumieredarcachon-mobile.webp",
    alt: "Aperçu du site Lumière d'Arcachon sur mobile",
  },
];

// ─────────────────────────────────────────────
// Sélecteur d'appareil
// ─────────────────────────────────────────────

function DeviceSelector({ activeDevice, onChange }) {
  return (
    <div
      role="group"
      aria-label="Choisir un format d'écran"
      className="
        inline-flex flex-wrap items-center
        justify-center gap-1.5
        rounded-xl border border-white/10
        bg-[#252525] p-1.5
      "
    >
      {devices.map((device) => {
        const Icon = device.icon;
        const active = activeDevice === device.id;

        return (
          <button
            key={device.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(device.id)}
            className={`
              relative flex items-center justify-center
              gap-2 rounded-lg px-3 py-2.5
              text-xs font-medium
              transition-colors duration-200
              sm:px-5 sm:text-sm
              ${
                active
                  ? "text-[#1C1C1C]"
                  : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
              }
            `}
          >
            {active && (
              <motion.span
                layoutId="website-responsive-active-device"
                className="
                  absolute inset-0 rounded-lg
                  bg-[#5AC8FA]
                "
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                  duration: 0.3,
                }}
              />
            )}

            <Icon
              size={17}
              className="relative z-10 shrink-0"
              aria-hidden="true"
            />

            <span className="relative z-10">
              {device.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Aperçu de l'appareil
// ─────────────────────────────────────────────

function DevicePreview({ device, reducedMotion }) {
  const isMobile = device.id === "mobile";
  const isTablet = device.id === "tablet";

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        width: device.width,
        maxWidth: device.maxWidth,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative mx-auto
        overflow-hidden
        border border-white/10
        bg-[#252525]
        shadow-[0_25px_70px_rgba(0,0,0,0.45)]
      "
      style={{
        borderRadius: isMobile ? 28 : isTablet ? 20 : 14,
      }}
    >
      {/* Barre supérieure selon l'appareil */}
      {isMobile ? (
        <div
          className="
            flex h-7 items-center justify-center
            bg-[#252525]
          "
        >
          <span className="h-1 w-12 rounded-full bg-white/20" />
        </div>
      ) : (
        <div
          className="
            flex h-9 items-center gap-2
            border-b border-white/[0.06]
            bg-[#2A2A2A] px-3
          "
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#9B59B6]" />
            <span className="h-2 w-2 rounded-full bg-[#007AFF]" />
            <span className="h-2 w-2 rounded-full bg-[#5AC8FA]" />
          </div>

          <div
            className="
              mx-auto h-4 w-1/2
              rounded-md bg-[#1C1C1C]
            "
          />
        </div>
      )}

      {/* Capture */}
      <div
        className={
          isMobile
            ? "relative aspect-[9/17] overflow-hidden"
            : isTablet
              ? "relative aspect-[3/4] overflow-hidden"
              : "relative aspect-[16/10] overflow-hidden"
        }
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={device.id}
            initial={
              reducedMotion
                ? false
                : { opacity: 0, scale: 1.025 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={
              reducedMotion
                ? { opacity: 1 }
                : { opacity: 0, scale: 0.985 }
            }
            transition={{
              duration: reducedMotion ? 0 : 0.3,
            }}
            className="absolute inset-0"
          >
            <Image
              src={device.image}
              alt={device.alt}
              fill
              sizes="(max-width: 640px) 90vw, 720px"
              className="object-contain object-top"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bas du smartphone */}
      {isMobile && (
        <div className="flex h-7 items-center justify-center">
          <span className="h-1 w-10 rounded-full bg-white/20" />
        </div>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Section responsive
// ─────────────────────────────────────────────

export default function WebsiteResponsive() {
  const [activeDevice, setActiveDevice] = useState("desktop");

  const reducedMotion = useReducedMotion();

  const currentDevice =
    devices.find((device) => device.id === activeDevice) ??
    devices[0];

  return (
    <Section
      id="website-responsive"
      labelledBy="website-responsive-title"
      className="relative overflow-hidden"
    >
      <SectionWrapper>
        {/* Introduction */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, y: 28 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl"
        >
          <SectionHeading
            id="website-responsive-title"
            eyebrow="UNE EXPÉRIENCE ADAPTÉE"
            title="Votre site, sur tous les écrans."
            description="Vos clients consultent votre site depuis leur téléphone, leur tablette ou leur ordinateur. Chaque interface est pensée pour offrir une navigation claire et agréable, quel que soit le support utilisé."
            align="center"
          />
        </motion.div>

        {/* Sélecteur */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <DeviceSelector
            activeDevice={activeDevice}
            onChange={setActiveDevice}
          />
        </div>

        {/* Zone de démonstration */}
        <div
          className="
            relative mt-8 flex min-h-[350px]
            items-center justify-center
            overflow-hidden rounded-3xl
            border border-white/[0.06]
            bg-[#1C1C1C]
            px-5 py-8
            sm:mt-10 sm:min-h-[480px]
            sm:px-10 sm:py-10
            lg:min-h-[560px]
          "
        >
          {/* Halo de fond */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-1/2 top-1/2
              h-[350px] w-[500px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-[#5AC8FA]/[0.06]
              blur-[100px]
            "
          />

          {/* Aperçu animé */}
          <div className="relative z-10 w-full">
            <DevicePreview
              device={currentDevice}
              reducedMotion={reducedMotion}
            />
          </div>
        </div>

        {/* Informations complémentaires */}
        <div
          className="
            mt-8 flex flex-col
            items-start justify-between gap-6
            sm:mt-10 sm:flex-row sm:items-center
          "
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={21}
              className="mt-0.5 shrink-0 text-[#5AC8FA]"
              aria-hidden="true"
            />

            <div>
              <p className="text-sm font-semibold text-white sm:text-base">
                Une expérience cohérente sur tous les supports
              </p>

              <p className="mt-1 text-sm leading-relaxed text-gray-400">
                Navigation, contenus et interactions adaptés à chaque
                taille d'écran.
              </p>
            </div>
          </div>

          <a
            href="/realisations"
            className="
              group inline-flex shrink-0
              items-center gap-2
              border-b border-[#5AC8FA]/50 pb-1
              text-sm font-semibold text-[#5AC8FA]
              transition-colors hover:text-white
            "
          >
            Découvrir mes réalisations

            <ArrowUpRight
              size={17}
              aria-hidden="true"
              className="
                transition-transform
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </SectionWrapper>
    </Section>
  );
}