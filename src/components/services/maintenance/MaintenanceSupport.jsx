"use client";

// src/components/services/maintenance/MaintenanceSupport.jsx

import { motion, useReducedMotion } from "motion/react";

import {
  Wrench,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ArrowUpRight,
  ShieldCheck,
  RefreshCw,
  FileCheck2,
  Info,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

const supportOptions = [
  {
    id: "one-time",
    number: "01",
    eyebrow: "BESOIN OCCASIONNEL",
    title: "Intervention ponctuelle",
    description:
      "Un problème à résoudre ou une modification à effectuer ? Je vous accompagne sur un besoin précis, sans engagement récurrent.",
    icon: Wrench,
    color: "#007AFF",
    features: [
      "Diagnostic et intervention ciblée",
      "Corrections ou modifications définies ensemble",
      "Devis adapté à la demande",
      "Aucun engagement récurrent",
    ],
  },
  {
    id: "recurring",
    number: "02",
    eyebrow: "ACCOMPAGNEMENT CONTINU",
    title: "Suivi régulier",
    description:
      "Pour les sites qui nécessitent une attention dans la durée, nous définissons ensemble un accompagnement adapté à leur environnement technique.",
    icon: CalendarDays,
    color: "#9B59B6",
    features: [
      "Vérifications techniques planifiées",
      "Maintenance selon les besoins du site",
      "Suivi des interventions réalisées",
      "Périmètre et fréquence convenus ensemble",
    ],
  },
];

function OneTimeVisual() {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden">
      {/* Halo */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          h-40 w-40 rounded-full
          bg-[#007AFF]/10 blur-[60px]
        "
      />

      {/* Ticket d'intervention */}

      <div
        className="
          relative w-full max-w-[280px]
          rounded-xl border border-white/[0.08]
          bg-[#1C1C1C] p-4
          shadow-[0_15px_40px_rgba(0,0,0,0.2)]
        "
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Wrench
              size={16}
              className="text-[#007AFF]"
              aria-hidden="true"
            />

            <span className="text-xs font-semibold text-white">
              Intervention #024
            </span>
          </div>

          <span
            className="
              rounded-full bg-[#007AFF]/10
              px-2 py-1 text-[10px]
              text-[#76B4FF]
            "
          >
            Résolu
          </span>
        </div>

        <div className="my-4 h-px bg-white/[0.06]" />

        <p className="text-xs font-medium text-gray-300">
          Correction d'un formulaire
        </p>

        <p className="mt-2 text-[11px] leading-relaxed text-gray-500">
          Diagnostic et correction du problème rencontré.
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock3
              size={13}
              className="text-gray-500"
              aria-hidden="true"
            />

            <span className="text-[10px] text-gray-500">
              Intervention terminée
            </span>
          </div>

          <CheckCircle2
            size={18}
            className="text-[#007AFF]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

function RecurringVisual() {
  const tasks = [
    {
      icon: ShieldCheck,
      label: "Vérification de sécurité",
      done: true,
    },
    {
      icon: RefreshCw,
      label: "Contrôle technique",
      done: true,
    },
    {
      icon: FileCheck2,
      label: "Compte rendu",
      done: false,
    },
  ];

  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden">
      {/* Halo */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          h-40 w-40 rounded-full
          bg-[#9B59B6]/10 blur-[60px]
        "
      />

      {/* Suivi des interventions */}

      <div
        className="
          relative w-full max-w-[280px]
          rounded-xl border border-white/[0.08]
          bg-[#1C1C1C] p-4
          shadow-[0_15px_40px_rgba(0,0,0,0.2)]
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-gray-500">
              Suivi technique
            </p>

            <p className="mt-1 text-xs font-semibold text-white">
              Interventions planifiées
            </p>
          </div>

          <CalendarDays
            size={18}
            className="text-[#9B59B6]"
            aria-hidden="true"
          />
        </div>

        <div className="mt-4 space-y-3">
          {tasks.map(({ icon: Icon, label, done }) => (
            <div
              key={label}
              className="
                flex items-center justify-between gap-3
                rounded-lg border border-white/[0.05]
                bg-[#252525] px-3 py-2.5
              "
            >
              <div className="flex min-w-0 items-center gap-2">
                <Icon
                  size={14}
                  className="shrink-0 text-[#9B59B6]"
                  aria-hidden="true"
                />

                <span className="truncate text-[11px] text-gray-300">
                  {label}
                </span>
              </div>

              {done ? (
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-[#007AFF]"
                  aria-hidden="true"
                />
              ) : (
                <Clock3
                  size={15}
                  className="shrink-0 text-gray-500"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visuals = {
  "one-time": OneTimeVisual,
  recurring: RecurringVisual,
};

function SupportCard({ option, index, reducedMotion }) {
  const Icon = option.icon;
  const Visual = visuals[option.id];

  return (
    <motion.article
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 30,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: reducedMotion ? 0 : index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-3xl
        border border-white/[0.07]
        bg-[#252525]/70 p-6
        transition-colors duration-300
        hover:border-white/15
        sm:p-8
      "
    >
      {/* En-tête */}

      <div className="flex items-start justify-between gap-4">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-xl
          "
          style={{
            backgroundColor: `${option.color}18`,
          }}
        >
          <Icon
            size={23}
            style={{ color: option.color }}
            aria-hidden="true"
          />
        </div>

        <span className="text-xs font-medium text-gray-600">
          {option.number}
        </span>
      </div>

      <div className="mt-7">
        <span
          className="text-[11px] font-semibold tracking-[0.16em]"
          style={{
            color: option.color,
          }}
        >
          {option.eyebrow}
        </span>

        <h3 className="mt-3 text-2xl font-semibold text-white">
          {option.title}
        </h3>

        <p className="mt-4 min-h-[72px] text-sm leading-relaxed text-gray-400">
          {option.description}
        </p>
      </div>

      {/* Illustration */}

      <Visual />

      {/* Prestations */}

      <div className="mt-4 flex-1 border-t border-white/[0.07] pt-6">
        <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Ce que cela peut comprendre
        </p>

        <ul className="space-y-4">
          {option.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-[#5AC8FA]"
                aria-hidden="true"
              />

              <span className="text-sm leading-relaxed text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Conclusion */}

      <div className="mt-8 flex items-center gap-2 border-t border-white/[0.07] pt-5">
        <span className="text-sm font-medium text-gray-300">
          Une solution adaptée à votre besoin
        </span>

        <ArrowUpRight
          size={16}
          className="ml-auto text-gray-500"
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
}

export default function MaintenanceSupport() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="maintenance-support" bgColor="#222222">
      <SectionWrapper>
        <SectionHeading
          eyebrow="UN ACCOMPAGNEMENT FLEXIBLE"
          title="Un accompagnement à votre rythme."
          description="Un besoin ponctuel ou un suivi dans la durée ? Je vous propose une solution adaptée à votre site, à vos priorités et à votre budget, sans vous imposer de formule inutile."
        />

        {/* Deux modalités */}

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {supportOptions.map((option, index) => (
            <SupportCard
              key={option.id}
              option={option}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Précision importante */}

        <div
          className="
            mx-auto mt-10 flex max-w-3xl
            items-start gap-4 rounded-2xl
            border border-white/[0.07]
            bg-[#252525]/60 p-5
            sm:items-center sm:p-6
          "
        >
          <Info
            size={21}
            className="mt-0.5 shrink-0 text-[#9B59B6] sm:mt-0"
            aria-hidden="true"
          />

          <p className="text-sm leading-relaxed text-gray-400">
            J'accompagne les sites que je développe et peux également
            étudier la maintenance d'un site existant, après une
            vérification de son environnement technique. Le périmètre
            des interventions est toujours défini à l'avance.
          </p>
        </div>
      </SectionWrapper>
    </Section>
  );
}