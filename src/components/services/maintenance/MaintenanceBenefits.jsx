"use client";

// src/components/services/maintenance/MaintenanceBenefits.jsx

import { motion, useReducedMotion } from "motion/react";

import {
  ShieldCheck,
  Activity,
  Gauge,
  RefreshCw,
  Check,
  AlertCircle,
  ArrowUpRight,
  Clock3,
  Sparkles,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import Reveal, { useGatedInView } from "@/components/animations/Reveal";
import { STAGGER } from "@/lib/motion";
import { alpha } from "@/utils/color";

const benefits = [
  {
    id: "security",
    number: "01",
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "Limiter les risques liés aux vulnérabilités, aux composants obsolètes et aux problèmes de configuration.",
    color: "var(--color-blue)",
  },
  {
    id: "reliability",
    number: "02",
    icon: Activity,
    title: "Fiabilité",
    description:
      "Identifier les dysfonctionnements et intervenir pour préserver le bon fonctionnement de votre site.",
    color: "var(--color-blue)",
  },
  {
    id: "performance",
    number: "03",
    icon: Gauge,
    title: "Performances",
    description:
      "Surveiller les éléments qui peuvent ralentir votre site et maintenir une navigation agréable.",
    color: "var(--color-blue)",
  },
  {
    id: "evolution",
    number: "04",
    icon: RefreshCw,
    title: "Pérennité",
    description:
      "Faire évoluer votre site pour qu'il reste compatible avec les technologies et adapté à vos besoins.",
    color: "var(--color-blue)",
  },
];

function SecurityVisual() {
  return (
    <div className="relative flex h-36 items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute h-28 w-28 rounded-full border border-blue/10"
      />

      <div
        aria-hidden="true"
        className="absolute h-20 w-20 rounded-full border border-blue/20"
      />

      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-blue/30 bg-blue/10">
        <ShieldCheck
          size={30}
          className="text-blue"
          aria-hidden="true"
        />
      </div>

      <div className="absolute bottom-3 right-[22%] flex items-center gap-1.5 rounded-lg border border-white/10 bg-surface px-2.5 py-1.5">
        <Check size={12} className="text-blue" />
        <span className="text-[10px] text-gray-300">
          Vérification OK
        </span>
      </div>
    </div>
  );
}

function ReliabilityVisual({ reducedMotion }) {
  return (
    <div className="relative flex h-36 items-center justify-center">
      <div className="w-full max-w-[230px] rounded-xl border border-white/[0.08] bg-surface p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] text-gray-400">
            État du site
          </span>

          <span className="flex items-center gap-1.5 text-[10px] text-violet-light">
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
            En ligne
          </span>
        </div>

        <svg
          viewBox="0 0 200 45"
          className="h-12 w-full overflow-visible"
          aria-hidden="true"
        >
          <path
            d="M0 25 H35 L45 12 L60 35 L75 20 H110 L122 8 L138 32 L150 25 H200"
            fill="none"
            stroke="var(--color-violet)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <motion.circle
            cx="150"
            cy="25"
            r="4"
            fill="var(--color-violet)"
            animate={
              reducedMotion
                ? undefined
                : { opacity: [1, 0.3, 1] }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </svg>
      </div>
    </div>
  );
}

function PerformanceVisual({ reducedMotion }) {
  return (
    <div className="relative flex h-36 items-center justify-center">
      <div className="relative flex h-28 w-28 items-center justify-center">
        <svg
          viewBox="0 0 120 120"
          className="-rotate-90"
          aria-hidden="true"
        >
          <circle
            cx="60"
            cy="60"
            r="48"
            fill="none"
            stroke="#333333"
            strokeWidth="8"
          />

          <motion.circle
            cx="60"
            cy="60"
            r="48"
            fill="none"
            stroke="var(--color-blue)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="301.6"
            initial={{
              strokeDashoffset: reducedMotion ? 45 : 301.6,
            }}
            whileInView={{
              strokeDashoffset: 45,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reducedMotion ? 0 : 1.5,
              ease: "easeOut",
            }}
          />
        </svg>

        <div className="absolute flex flex-col items-center">
          <Gauge
            size={24}
            className="text-blue"
            aria-hidden="true"
          />

          <span className="mt-1 text-[10px] text-gray-400">
            Performances
          </span>
        </div>
      </div>
    </div>
  );
}

function VersionChip({ version, index, reducedMotion }) {
  // Animation spécifique conservée ; contenu visible sans JavaScript.
  const motionProps = useGatedInView({
    from: { opacity: 0, y: 12 },
    to: { opacity: 1, y: 0 },
    transition: {
      duration: 0.4,
      delay: reducedMotion ? 0 : index * 0.2,
    },
    amount: 0,
    disabled: reducedMotion,
  });

  return (
    <motion.div
      {...motionProps}
      className={`
        flex h-12 w-14 items-center justify-center
        rounded-xl border text-xs font-semibold
        ${
          index === 2
            ? "border-violet/40 bg-violet/15 text-violet-light"
            : "border-white/10 bg-surface text-gray-400"
        }
      `}
    >
      {version}
    </motion.div>
  );
}

function EvolutionVisual({ reducedMotion }) {
  const versions = ["v1.0", "v1.1", "v1.2"];

  return (
    <div className="flex h-36 items-center justify-center">
      <div className="flex items-center gap-2">
        {versions.map((version, index) => (
          <div key={version} className="flex items-center gap-2">
            <VersionChip
              version={version}
              index={index}
              reducedMotion={reducedMotion}
            />

            {index < versions.length - 1 && (
              <ArrowUpRight
                size={15}
                className="text-gray-600"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals = {
  security: SecurityVisual,
  reliability: ReliabilityVisual,
  performance: PerformanceVisual,
  evolution: EvolutionVisual,
};

function BenefitCard({ benefit, index, reducedMotion }) {
  const Icon = benefit.icon;
  const Visual = visuals[benefit.id];

  return (
    <Reveal
      as="article"
      delay={(index % 2) * STAGGER}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/70 p-6 transition-colors duration-300 hover:border-white/15 sm:p-7"
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${alpha(benefit.color, "18")}`,
          }}
        >
          <Icon
            size={20}
            style={{ color: benefit.color }}
            aria-hidden="true"
          />
        </div>

        <span className="text-xs font-medium text-gray-600">
          {benefit.number}
        </span>
      </div>

      <Visual reducedMotion={reducedMotion} />

      <h3 className="mt-4 text-xl font-semibold text-white">
        {benefit.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-400">
        {benefit.description}
      </p>
    </Reveal>
  );
}

export default function MaintenanceBenefits() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="maintenance-benefits" bgColor="canvas">
      <SectionWrapper>
        <SectionHeading
          reveal
          eyebrow="POURQUOI ENTRETENIR SON SITE ?"
          title="Un site performant aujourd'hui. Et demain."
          description="La mise en ligne n'est pas la fin d'un projet web. Un suivi adapté permet de prévenir certains problèmes, de maintenir le bon fonctionnement de votre site et de le faire évoluer dans le temps."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}