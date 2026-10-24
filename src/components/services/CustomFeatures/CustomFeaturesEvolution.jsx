"use client";

// src/components/services/CustomFeatures/CustomFeaturesEvolution.jsx

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  LayoutDashboard,
  Users,
  CalendarDays,
  ClipboardList,
  Workflow,
  BarChart3,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

const steps = [
  {
    id: 1,
    number: "01",
    label: "DÉMARRER",
    title: "L'essentiel pour démarrer",
    description:
      "Nous identifions les fonctionnalités prioritaires pour créer une première version réellement utile à votre activité.",
  },
  {
    id: 2,
    number: "02",
    label: "ENRICHIR",
    title: "De nouvelles possibilités",
    description:
      "Selon vos besoins et les retours des utilisateurs, nous ajoutons progressivement de nouvelles fonctionnalités.",
  },
  {
    id: 3,
    number: "03",
    label: "ÉVOLUER",
    title: "Une solution qui évolue",
    description:
      "Votre application continue de s'adapter à votre organisation, avec des automatisations et des outils plus avancés.",
  },
];

const modules = [
  {
    id: "dashboard",
    label: "Tableau de bord",
    detail: "Vue d'ensemble",
    icon: LayoutDashboard,
    step: 1,
    color: "#007AFF",
  },
  {
    id: "clients",
    label: "Gestion des clients",
    detail: "Informations centralisées",
    icon: Users,
    step: 1,
    color: "#9B59B6",
  },
  {
    id: "booking",
    label: "Réservations",
    detail: "Planning en ligne",
    icon: CalendarDays,
    step: 2,
    color: "#007AFF",
  },
  {
    id: "requests",
    label: "Suivi des demandes",
    detail: "Gestion des dossiers",
    icon: ClipboardList,
    step: 2,
    color: "#9B59B6",
  },
  {
    id: "automation",
    label: "Automatisations",
    detail: "Tâches simplifiées",
    icon: Workflow,
    step: 3,
    color: "#007AFF",
  },
  {
    id: "analytics",
    label: "Statistiques",
    detail: "Indicateurs clés",
    icon: BarChart3,
    step: 3,
    color: "#9B59B6",
  },
];

function EvolutionStep({ step, activeStep, onSelect }) {
  const active = step.id === activeStep;
  const completed = step.id < activeStep;

  return (
    <button
      type="button"
      onClick={() => onSelect(step.id)}
      aria-pressed={active}
      className={`
        group relative flex w-full items-start gap-5
        rounded-2xl border p-5 text-left
        transition-all duration-300
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#5AC8FA]
        sm:p-6
        ${
          active
            ? "border-[#5AC8FA]/35 bg-[#5AC8FA]/[0.06]"
            : "border-white/[0.06] bg-[#252525]/50 hover:border-white/15"
        }
      `}
    >
      {/* Numéro */}

      <div
        className={`
          flex h-11 w-11 shrink-0 items-center justify-center
          rounded-xl border text-sm font-semibold
          transition-colors duration-300
          ${
            active
              ? "border-[#5AC8FA]/40 bg-[#5AC8FA]/10 text-[#5AC8FA]"
              : completed
                ? "border-[#007AFF]/30 bg-[#007AFF]/10 text-[#007AFF]"
                : "border-white/10 bg-white/[0.03] text-gray-500"
          }
        `}
      >
        {completed ? <Check size={18} aria-hidden="true" /> : step.number}
      </div>

      {/* Contenu */}

      <div className="min-w-0 flex-1">
        <span
          className={`
            text-[10px] font-semibold tracking-[0.16em]
            ${active ? "text-[#5AC8FA]" : "text-gray-500"}
          `}
        >
          {step.label}
        </span>

        <h3
          className={`
            mt-2 text-base font-semibold transition-colors
            sm:text-lg
            ${active ? "text-white" : "text-gray-300"}
          `}
        >
          {step.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {step.description}
        </p>
      </div>

      {/* Indicateur */}

      <ArrowRight
        size={18}
        aria-hidden="true"
        className={`
          mt-1 shrink-0 transition-all duration-300
          ${
            active
              ? "translate-x-1 text-[#5AC8FA]"
              : "text-gray-600 group-hover:translate-x-1"
          }
        `}
      />
    </button>
  );
}

function ApplicationModule({ module, reducedMotion }) {
  const Icon = module.icon;

  return (
    <motion.div
      layout={!reducedMotion}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              scale: 0.9,
              y: 15,
            }
      }
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={
        reducedMotion
          ? undefined
          : {
              opacity: 0,
              scale: 0.9,
              y: -10,
            }
      }
      transition={{
        duration: reducedMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex min-w-0 items-start gap-3
        rounded-xl border border-white/[0.07]
        bg-[#252525] p-4
        sm:p-5
      "
    >
      <div
        className="
          flex h-10 w-10 shrink-0
          items-center justify-center rounded-xl
        "
        style={{
          backgroundColor: `${module.color}18`,
        }}
      >
        <Icon
          size={19}
          style={{ color: module.color }}
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold text-white sm:text-sm">
          {module.label}
        </p>

        <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
          {module.detail}
        </p>
      </div>
    </motion.div>
  );
}

function ApplicationPreview({ activeStep, reducedMotion }) {
  const visibleModules = modules.filter(
    (module) => module.step <= activeStep
  );

  return (
    <div className="relative w-full">
      {/* Halo décoratif */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -inset-8
          rounded-full bg-[#007AFF]/10
          blur-[90px]
        "
      />

      {/* Fenêtre de l'application */}

      <div
        className="
          relative overflow-hidden rounded-2xl
          border border-white/10 bg-[#1C1C1C]
          shadow-[0_30px_80px_rgba(0,0,0,0.3)]
        "
      >
        {/* Barre de fenêtre */}

        <div
          className="
            flex h-11 items-center justify-between
            border-b border-white/[0.06]
            bg-[#252525] px-4
          "
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#9B59B6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#007AFF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5AC8FA]" />
          </div>

          <span className="text-[10px] text-gray-500">
            mon-application.app
          </span>

          <div className="w-10" />
        </div>

        {/* Contenu */}

        <div className="p-5 sm:p-7">
          <div className="mb-7 flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] text-gray-500">
                Mon espace de gestion
              </p>

              <h4 className="mt-1 text-lg font-semibold text-white">
                Mon application
              </h4>
            </div>

            <div
              className="
                rounded-full border border-[#007AFF]/20
                bg-[#007AFF]/10 px-3 py-1.5
                text-[10px] font-medium text-[#76B4FF]
              "
            >
              Version {activeStep}.0
            </div>
          </div>

          {/* Modules évolutifs */}

          <motion.div
            layout={!reducedMotion}
            className="
              grid min-h-[210px] grid-cols-1
              content-start gap-3
              sm:grid-cols-2
            "
          >
            <AnimatePresence initial={false} mode="popLayout">
              {visibleModules.map((module) => (
                <ApplicationModule
                  key={module.id}
                  module={module}
                  reducedMotion={reducedMotion}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pied de l'interface */}

          <div
            className="
              mt-6 flex items-center justify-between
              gap-3 border-t border-white/[0.06] pt-5
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#007AFF]" />

              <span className="text-[11px] text-gray-400">
                {visibleModules.length} modules disponibles
              </span>
            </div>

            <span className="text-[11px] text-gray-500">
              Évolutive
            </span>
          </div>
        </div>
      </div>

      {/* Message sous la fenêtre */}

      <div className="mt-6 flex items-center justify-center gap-2">
        <Sparkles
          size={16}
          className="text-[#9B59B6]"
          aria-hidden="true"
        />

        <p className="text-center text-xs text-gray-400">
          Votre application s'enrichit à chaque étape.
        </p>
      </div>
    </div>
  );
}

export default function CustomFeaturesEvolution() {
  const [activeStep, setActiveStep] = useState(1);
  const reducedMotion = useReducedMotion();

  return (
    <Section id="custom-features-evolution" bgColor="#222222">
      <SectionWrapper>
        <SectionHeading
          eyebrow="UNE SOLUTION ÉVOLUTIVE"
          title="Une application qui grandit avec votre activité."
          description="Pas besoin de tout développer dès le départ. Nous commençons par les fonctionnalités essentielles, puis faisons évoluer votre application selon vos besoins, vos retours et vos priorités."
        />

        <div
          className="
            mt-14 grid items-center gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
          "
        >
          {/* Étapes interactives */}

          <div className="space-y-4">
            {steps.map((step) => (
              <EvolutionStep
                key={step.id}
                step={step}
                activeStep={activeStep}
                onSelect={setActiveStep}
              />
            ))}
          </div>

          {/* Aperçu évolutif */}

          <ApplicationPreview
            activeStep={activeStep}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Message complémentaire */}

        <p
          className="
            mx-auto mt-12 max-w-2xl
            text-center text-sm leading-relaxed
            text-gray-400
          "
        >
          Chaque projet est différent : les fonctionnalités et les étapes
          de développement sont définies ensemble, selon vos objectifs
          et votre budget.
        </p>
      </SectionWrapper>
    </Section>
  );
}