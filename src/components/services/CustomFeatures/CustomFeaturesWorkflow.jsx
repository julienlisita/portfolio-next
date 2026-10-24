"use client";

// src/components/services/CustomFeatures/CustomFeaturesWorkflow.jsx

import { motion, useReducedMotion } from "motion/react";

import {
  Mail,
  CalendarDays,
  FileSpreadsheet,
  MessageSquare,
  LayoutDashboard,
  Users,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

const scatteredTools = [
  {
    icon: Mail,
    label: "Emails",
    detail: "Demandes clients",
    color: "#007AFF",
  },
  {
    icon: FileSpreadsheet,
    label: "Tableaux",
    detail: "Suivi manuel",
    color: "#9B59B6",
  },
  {
    icon: CalendarDays,
    label: "Agenda",
    detail: "Rendez-vous",
    color: "#007AFF",
  },
  {
    icon: MessageSquare,
    label: "Messages",
    detail: "Échanges",
    color: "#9B59B6",
  },
];

const centralizedFeatures = [
  {
    icon: Users,
    label: "Clients",
  },
  {
    icon: CalendarDays,
    label: "Réservations",
  },
  {
    icon: ClipboardList,
    label: "Demandes",
  },
  {
    icon: CheckCircle2,
    label: "Suivi",
  },
];

function ScatteredTools({ reducedMotion }) {
  return (
    <div className="relative w-full max-w-sm">

      {/* Halo */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-8
          rounded-full bg-[#9B59B6]/10
          blur-[70px]
        "
      />

      {/* Outils dispersés */}

      <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
        {scatteredTools.map((tool, index) => {
          const Icon = tool.icon;

          const offsets = [
            { x: -12, y: -10 },
            { x: 12, y: -5 },
            { x: -8, y: 12 },
            { x: 14, y: 10 },
          ];

          return (
            <motion.div
              key={tool.label}
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      x: offsets[index].x,
                      y: offsets[index].y,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.65,
                delay: reducedMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                rounded-2xl border border-white/[0.08]
                bg-[#252525] p-4
                shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                sm:p-5
              "
            >
              <div
                className="
                  mb-4 flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                "
                style={{
                  backgroundColor: `${tool.color}18`,
                }}
              >
                <Icon
                  size={20}
                  style={{ color: tool.color }}
                  aria-hidden="true"
                />
              </div>

              <p className="text-sm font-semibold text-white">
                {tool.label}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {tool.detail}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Étiquette */}

      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#9B59B6]" />

        <span className="text-xs text-gray-400">
          Informations dispersées
        </span>
      </div>
    </div>
  );
}

function CentralizedApp({ reducedMotion }) {
  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 25,
              scale: 0.95,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.75,
        delay: reducedMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full max-w-sm"
    >

      {/* Halo */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-8
          rounded-full bg-[#007AFF]/15
          blur-[80px]
        "
      />

      {/* Application */}

      <div
        className="
          relative overflow-hidden rounded-2xl
          border border-[#007AFF]/20
          bg-[#252525]
          shadow-[0_25px_60px_rgba(0,0,0,0.3)]
        "
      >

        {/* En-tête */}

        <div
          className="
            flex items-center gap-3
            border-b border-white/[0.06]
            bg-[#2A2A2A] px-5 py-4
          "
        >
          <div
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg
              bg-linear-to-br
              from-[#007AFF] to-[#9B59B6]
            "
          >
            <LayoutDashboard
              size={19}
              className="text-white"
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Mon application
            </p>

            <p className="text-[10px] text-gray-400">
              Espace de gestion centralisé
            </p>
          </div>

          <CheckCircle2
            size={19}
            className="ml-auto text-[#007AFF]"
            aria-hidden="true"
          />
        </div>

        {/* Fonctionnalités */}

        <div className="grid grid-cols-2 gap-3 p-5">
          {centralizedFeatures.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="
                flex items-center gap-2
                rounded-xl border border-white/[0.06]
                bg-[#1C1C1C] px-3 py-4
              "
            >
              <Icon
                size={17}
                className="shrink-0 text-[#007AFF]"
                aria-hidden="true"
              />

              <span className="text-xs font-medium text-gray-300">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* État */}

        <div className="border-t border-white/[0.06] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#007AFF]" />

            <p className="text-xs text-gray-300">
              Toutes vos informations au même endroit
            </p>
          </div>
        </div>
      </div>

      {/* Étiquette */}

      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#007AFF]" />

        <span className="text-xs text-gray-400">
          Une organisation centralisée
        </span>
      </div>
    </motion.div>
  );
}

function ConnectionArrow({ reducedMotion }) {
  return (
    <div
      aria-hidden="true"
      className="
        relative flex shrink-0
        items-center justify-center
        py-6 lg:px-2 lg:py-0
      "
    >
      {/* Ligne verticale sur mobile */}

      <div
        className="
          absolute h-20 w-px
          bg-linear-to-b
          from-[#9B59B6]/30
          via-[#007AFF]
          to-[#007AFF]/30
          lg:hidden
        "
      />

      {/* Ligne horizontale sur desktop */}

      <div
        className="
          absolute hidden h-px w-24
          bg-linear-to-r
          from-[#9B59B6]/30
          via-[#007AFF]
          to-[#007AFF]/30
          lg:block
        "
      />

      {/* Flèche */}

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, 5, 0],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative z-10 flex h-11 w-11
          items-center justify-center
          rounded-full
          border border-[#007AFF]/30
          bg-[#1C1C1C]
          shadow-[0_0_30px_rgba(0,122,255,0.12)]
        "
      >
        <ArrowRight
          size={20}
          className="rotate-90 text-[#007AFF] lg:rotate-0"
        />
      </motion.div>
    </div>
  );
}

export default function CustomFeaturesWorkflow() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="custom-features-workflow"
      bgColor="#1C1C1C"
    >
      <SectionWrapper>

        <SectionHeading
          eyebrow="SIMPLIFIEZ VOTRE ORGANISATION"
          title="Moins d'outils dispersés. Plus de temps pour votre activité."
          description="Emails, tableaux, agendas, messages… Lorsque les informations sont réparties entre plusieurs outils, leur gestion devient vite chronophage. Une application sur mesure permet de réunir l'essentiel dans un espace adapté à votre organisation."
        />

        {/* Composition visuelle */}

        <div
          className="
            mt-14 flex flex-col
            items-center justify-center
            gap-4 lg:flex-row lg:gap-8
          "
        >
          <ScatteredTools reducedMotion={reducedMotion} />

          <ConnectionArrow reducedMotion={reducedMotion} />

          <CentralizedApp reducedMotion={reducedMotion} />
        </div>

        {/* Message final */}

        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto mt-14 flex max-w-2xl
            items-start gap-4
            rounded-2xl
            border border-white/[0.06]
            bg-[#252525] p-5
            sm:items-center sm:p-6
          "
        >
          <Sparkles
            size={23}
            className="mt-0.5 shrink-0 text-[#9B59B6] sm:mt-0"
            aria-hidden="true"
          />

          <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
            L'objectif n'est pas d'ajouter un outil de plus, mais de créer
            une solution qui s'intègre naturellement à votre manière
            de travailler.
          </p>
        </motion.div>

      </SectionWrapper>
    </Section>
  );
}