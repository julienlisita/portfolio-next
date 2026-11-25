"use client";

// src/components/services/website/WebsiteQuality.jsx

import { motion, useReducedMotion } from "motion/react";

import Link from "next/link";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import Reveal, { useGatedInView } from "@/components/animations/Reveal";
import { DISTANCE, DURATION, EASE as ease, STAGGER } from "@/lib/motion";

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
// Petit indicateur de statut
// ─────────────────────────────────────────────

function StatusBadge({ children }) {
  return (
    <div
      className="
        inline-flex items-center gap-2
        rounded-full border border-accent/20
        bg-accent/[0.07]
        px-3 py-1.5
      "
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />

      <span className="text-[11px] font-medium text-accent">
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
    <div className="rounded-xl border border-white/[0.08] bg-surface-soft p-5">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Gauge size={17} className="text-blue" />

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
              stroke="var(--color-accent)"
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
              className="mx-auto text-accent"
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

              <Check size={14} className="text-accent" />
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
                className="h-full rounded-full bg-accent"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-gray-300">
                Fluidité
              </span>

              <Check size={14} className="text-accent" />
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
                className="h-full rounded-full bg-accent"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-gray-300">
                Expérience mobile
              </span>

              <Check size={14} className="text-accent" />
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
                className="h-full rounded-full bg-accent"
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

function SecurityCheck({ icon: Icon, label, index, reducedMotion }) {
  // Animation spécifique conservée ; contenu visible sans JavaScript.
  const motionProps = useGatedInView({
    from: { opacity: 0, x: -12 },
    to: { opacity: 1, x: 0 },
    transition: {
      duration: reducedMotion ? 0 : 0.5,
      delay: reducedMotion ? 0 : 0.2 + index * 0.15,
    },
    amount: 0.5,
    disabled: reducedMotion,
  });

  return (
    <motion.div
      {...motionProps}
      className="
        flex items-center justify-between
        rounded-lg border border-white/[0.05]
        bg-surface-deep px-3 py-3
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
        className="text-accent"
      />
    </motion.div>
  );
}

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
    <div className="rounded-xl border border-white/[0.08] bg-surface-soft p-5">
      <div className="mb-5 flex items-center gap-2">
        <ShieldCheck size={17} className="text-blue" />

        <span className="text-sm font-semibold text-white">
          Sécurité & fiabilité
        </span>
      </div>

      <div className="space-y-3">
        {checks.map(({ icon, label }, index) => (
          <SecurityCheck
            key={label}
            icon={icon}
            label={label}
            index={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Illustration — Évolutivité
// ─────────────────────────────────────────────

function EvolutionModule({ icon: Icon, index, reducedMotion }) {
  // Animation spécifique conservée ; contenu visible sans JavaScript.
  const motionProps = useGatedInView({
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    transition: {
      duration: reducedMotion ? 0 : 0.45,
      delay: reducedMotion ? 0 : 0.25 + index * 0.15,
    },
    amount: 0.5,
    disabled: reducedMotion,
  });

  return (
    <motion.div
      {...motionProps}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-lg border border-white/10
        bg-surface-deep
      "
    >
      <Icon size={17} className="text-gray-300" />
    </motion.div>
  );
}

function EvolutionPanel({ reducedMotion }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-surface-soft p-5">
      <div className="mb-5 flex items-center gap-2">
        <GitBranch size={17} className="text-blue" />

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
            rounded-xl border border-accent/30
            bg-accent/10
          "
        >
          <Globe2 size={21} className="text-accent" />
        </div>

        {/* Ligne */}
        <div className="h-px min-w-3 flex-1 bg-white/15" />

        {/* Modules */}
        <div className="flex gap-2">
          {[Code2, Mail, Activity].map((Icon, index) => (
            <EvolutionModule
              key={index}
              icon={Icon}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
        <CheckCircle2 size={14} className="text-accent" />

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
    <Reveal
      y={DISTANCE.lg}
      scale={0.97}
      duration={DURATION.slow}
      amount={0.15}
      className="
        relative overflow-hidden
        rounded-2xl border border-white/[0.08]
        bg-surface-deep
        p-4 shadow-[0_30px_90px_rgba(0,0,0,0.25)]
        sm:p-6
      "
    >
      {/* Barre supérieure */}
      <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
            <Activity size={20} className="text-blue" />
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
    </Reveal>
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
            <Reveal>
              <SectionHeading
                id="website-quality-title"
                eyebrow="QUALITÉ & PÉRENNITÉ"
                title="Un site conçu pour durer."
                description="Un site internet ne doit pas seulement être esthétique. Il doit aussi être fiable, agréable à utiliser et capable d'évoluer avec votre activité."
              />
            </Reveal>

            {/* Arguments */}
            <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
              {qualities.map(
                ({ number, icon: Icon, title, description }, index) => (
                  <Reveal
                    key={number}
                    x={-20}
                    y={0}
                    delay={index * STAGGER}
                    className="flex items-start gap-4"
                  >
                    <span className="pt-1 text-sm font-semibold text-accent">
                      {number}
                    </span>

                    <div className="min-w-0 flex-1 border-b border-white/10 pb-6">
                      <div className="flex items-center gap-3">
                        <Icon
                          size={20}
                          className="shrink-0 text-blue"
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
                  </Reveal>
                )
              )}
            </div>

            {/* Lien vers la maintenance */}
            <Reveal y={DISTANCE.sm} delay={0.2} className="mt-8">
              <Link
                href="/services/suivi-et-evolutions"
                className="
                  group inline-flex items-center gap-2
                  border-b border-accent/50 pb-1
                  text-sm font-semibold text-accent
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
            </Reveal>
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
                bg-accent/[0.045]
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