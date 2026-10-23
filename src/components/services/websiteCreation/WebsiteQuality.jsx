"use client";

// src/components/services/website/WebsiteQuality.jsx

import { motion, useReducedMotion } from "motion/react";

import Link from "next/link";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

import {
  Activity,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Gauge,
  GitBranch,
  Globe2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

// ─────────────────────────────────────────────
// Données
// ─────────────────────────────────────────────

const qualities = [
  {
    number: "01",
    icon: Gauge,
    title: "Performance",
    description:
      "Un site conçu pour charger rapidement et offrir une navigation fluide, sur ordinateur comme sur mobile.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "Une conception attentive aux bonnes pratiques de sécurité pour limiter les risques et protéger les échanges.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Évolutivité",
    description:
      "Une base technique structurée pour faciliter les améliorations et l'ajout de fonctionnalités selon vos besoins.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Maintenance",
    description:
      "Après la mise en ligne, je peux également assurer le suivi, les mises à jour et les évolutions de votre site.",
  },
];

// ─────────────────────────────────────────────
// Animation commune
// ─────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1];

// ─────────────────────────────────────────────
// Petit indicateur de statut
// ─────────────────────────────────────────────

function StatusBadge({ children }) {
  return (
    <div
      className="
        inline-flex items-center gap-2
        rounded-full border border-[#5AC8FA]/20
        bg-[#5AC8FA]/[0.07]
        px-3 py-1.5
      "
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#5AC8FA]" />

      <span className="text-[11px] font-medium text-[#5AC8FA]">
        {children}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
// Illustration — Performance
// ─────────────────────────────────────────────

function PerformancePanel({ reducedMotion }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#292929] p-5">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Gauge size={17} className="text-[#5AC8FA]" />

          <span className="text-sm font-semibold text-white">
            Performance
          </span>
        </div>

        <StatusBadge>Optimisation</StatusBadge>
      </div>

      <div className="grid grid-cols-[auto_1fr] items-center gap-6">
        {/* Jauge circulaire */}
        <div className="relative flex h-28 w-28 items-center justify-center">
          <svg
            viewBox="0 0 120 120"
            className="h-full w-full -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="8"
            />

            <motion.circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#5AC8FA"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="301.59"
              initial={
                reducedMotion
                  ? { strokeDashoffset: 90 }
                  : { strokeDashoffset: 301.59 }
              }
              whileInView={{
                strokeDashoffset: 90,
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reducedMotion ? 0 : 1.4,
                delay: reducedMotion ? 0 : 0.2,
                ease,
              }}
            />
          </svg>

          <div className="absolute text-center">
            <Zap
              size={24}
              className="mx-auto text-[#5AC8FA]"
            />

            <span className="mt-1 block text-[10px] text-gray-400">
              Rapidité
            </span>
          </div>
        </div>

        {/* Indicateurs */}
        <div className="space-y-4">
          <div>
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-gray-300">
                Chargement
              </span>

              <Check size={14} className="text-[#5AC8FA]" />
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: reducedMotion ? "85%" : 0 }}
                whileInView={{ width: "85%" }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 1.2,
                  delay: 0.3,
                  ease,
                }}
                className="h-full rounded-full bg-[#5AC8FA]"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-gray-300">
                Fluidité
              </span>

              <Check size={14} className="text-[#5AC8FA]" />
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: reducedMotion ? "92%" : 0 }}
                whileInView={{ width: "92%" }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 1.2,
                  delay: 0.45,
                  ease,
                }}
                className="h-full rounded-full bg-[#5AC8FA]"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-gray-300">
                Expérience mobile
              </span>

              <Check size={14} className="text-[#5AC8FA]" />
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: reducedMotion ? "90%" : 0 }}
                whileInView={{ width: "90%" }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 1.2,
                  delay: 0.6,
                  ease,
                }}
                className="h-full rounded-full bg-[#5AC8FA]"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[11px] leading-relaxed text-gray-500">
        Illustration des points d'attention techniques, sans
        représentation de scores mesurés.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// Illustration — Sécurité
// ─────────────────────────────────────────────

function SecurityPanel({ reducedMotion }) {
  const checks = [
    {
      icon: LockKeyhole,
      label: "Connexion sécurisée",
    },
    {
      icon: ShieldCheck,
      label: "Bonnes pratiques",
    },
    {
      icon: Code2,
      label: "Code structuré",
    },
  ];

  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#292929] p-5">
      <div className="mb-5 flex items-center gap-2">
        <ShieldCheck size={17} className="text-[#5AC8FA]" />

        <span className="text-sm font-semibold text-white">
          Sécurité & fiabilité
        </span>
      </div>

      <div className="space-y-3">
        {checks.map(({ icon: Icon, label }, index) => (
          <motion.div
            key={label}
            initial={
              reducedMotion
                ? false
                : { opacity: 0, x: -12 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: reducedMotion ? 0 : 0.5,
              delay: reducedMotion ? 0 : 0.2 + index * 0.15,
            }}
            className="
              flex items-center justify-between
              rounded-lg border border-white/[0.05]
              bg-[#1C1C1C] px-3 py-3
            "
          >
            <div className="flex items-center gap-3">
              <Icon size={16} className="text-gray-400" />

              <span className="text-xs text-gray-300">
                {label}
              </span>
            </div>

            <CheckCircle2
              size={16}
              className="text-[#5AC8FA]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Illustration — Évolutivité
// ─────────────────────────────────────────────

function EvolutionPanel({ reducedMotion }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#292929] p-5">
      <div className="mb-5 flex items-center gap-2">
        <GitBranch size={17} className="text-[#5AC8FA]" />

        <span className="text-sm font-semibold text-white">
          Évolutivité
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Bloc initial */}
        <div
          className="
            flex h-12 w-12 shrink-0
            items-center justify-center
            rounded-xl border border-[#5AC8FA]/30
            bg-[#5AC8FA]/10
          "
        >
          <Globe2 size={21} className="text-[#5AC8FA]" />
        </div>

        {/* Ligne */}
        <div className="h-px min-w-3 flex-1 bg-white/15" />

        {/* Modules */}
        <div className="flex gap-2">
          {[Code2, Mail, Activity].map((Icon, index) => (
            <motion.div
              key={index}
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, scale: 0.8 }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reducedMotion ? 0 : 0.45,
                delay: reducedMotion ? 0 : 0.25 + index * 0.15,
              }}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-lg border border-white/10
                bg-[#1C1C1C]
              "
            >
              <Icon size={17} className="text-gray-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
        <CheckCircle2 size={14} className="text-[#5AC8FA]" />

        Des fonctionnalités à ajouter selon vos besoins
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tableau de bord complet
// ─────────────────────────────────────────────

function QualityDashboard({ reducedMotion }) {
  return (
    <motion.div
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 35, scale: 0.97 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.8,
        ease,
      }}
      className="
        relative overflow-hidden
        rounded-2xl border border-white/[0.08]
        bg-[#1C1C1C]
        p-4 shadow-[0_30px_90px_rgba(0,0,0,0.25)]
        sm:p-6
      "
    >
      {/* Barre supérieure */}
      <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5AC8FA]/10">
            <Activity size={20} className="text-[#5AC8FA]" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Qualité technique
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Les fondations de votre site
            </p>
          </div>
        </div>

        <StatusBadge>Conception soignée</StatusBadge>
      </div>

      <div className="space-y-4">
        <PerformancePanel reducedMotion={reducedMotion} />

        <div className="grid gap-4 xl:grid-cols-2">
          <SecurityPanel reducedMotion={reducedMotion} />

          <EvolutionPanel reducedMotion={reducedMotion} />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Section principale
// ─────────────────────────────────────────────

export default function WebsiteQuality() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="website-quality"
      labelledBy="website-quality-title"
      className="relative overflow-hidden"
    >
      <SectionWrapper>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Contenu */}
          <div className="min-w-0">
            {/* En-tête */}
            <motion.div
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reducedMotion ? 0 : 0.7,
                ease,
              }}
            >
              <SectionHeading
                id="website-quality-title"
                eyebrow="QUALITÉ & PÉRENNITÉ"
                title="Un site conçu pour durer."
                description="Un site internet ne doit pas seulement être esthétique. Il doit aussi être fiable, agréable à utiliser et capable d'évoluer avec votre activité."
              />
            </motion.div>

            {/* Arguments */}
            <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
              {qualities.map(
                ({ number, icon: Icon, title, description }, index) => (
                  <motion.div
                    key={number}
                    initial={
                      reducedMotion
                        ? false
                        : { opacity: 0, x: -20 }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.6,
                      delay: reducedMotion ? 0 : index * 0.08,
                      ease,
                    }}
                    className="flex items-start gap-4"
                  >
                    <span className="pt-1 text-sm font-semibold text-[#5AC8FA]">
                      {number}
                    </span>

                    <div className="min-w-0 flex-1 border-b border-white/10 pb-6">
                      <div className="flex items-center gap-3">
                        <Icon
                          size={20}
                          className="shrink-0 text-[#5AC8FA]"
                          aria-hidden="true"
                        />

                        <h3 className="text-lg font-semibold text-white sm:text-xl">
                          {title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-300 sm:text-base">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>

            {/* Lien vers la maintenance */}
            <motion.div
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 0.6,
                delay: reducedMotion ? 0 : 0.2,
              }}
              className="mt-8"
            >
              <Link
                href="/services/suivi-et-evolutions"
                className="
                  group inline-flex items-center gap-2
                  border-b border-[#5AC8FA]/50 pb-1
                  text-sm font-semibold text-[#5AC8FA]
                  transition-colors hover:text-white
                "
              >
                Découvrir l'accompagnement et la maintenance

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="
                    shrink-0 transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </motion.div>
          </div>

          {/* Tableau de bord */}
          <div className="relative min-w-0">
            {/* Halo subtil */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-1/2 top-1/2
                h-[60%] w-[75%]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-[#5AC8FA]/[0.045]
                blur-[90px]
              "
            />

            <div className="relative">
              <QualityDashboard reducedMotion={reducedMotion} />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}