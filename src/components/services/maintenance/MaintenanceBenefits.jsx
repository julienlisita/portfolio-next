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

const benefits = [
  {
    id: "security",
    number: "01",
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "Limiter les risques liés aux vulnérabilités, aux composants obsolètes et aux problèmes de configuration.",
    color: "#007AFF",
  },
  {
    id: "reliability",
    number: "02",
    icon: Activity,
    title: "Fiabilité",
    description:
      "Identifier les dysfonctionnements et intervenir pour préserver le bon fonctionnement de votre site.",
    color: "#9B59B6",
  },
  {
    id: "performance",
    number: "03",
    icon: Gauge,
    title: "Performances",
    description:
      "Surveiller les éléments qui peuvent ralentir votre site et maintenir une navigation agréable.",
    color: "#007AFF",
  },
  {
    id: "evolution",
    number: "04",
    icon: RefreshCw,
    title: "Pérennité",
    description:
      "Faire évoluer votre site pour qu'il reste compatible avec les technologies et adapté à vos besoins.",
    color: "#9B59B6",
  },
];

function SecurityVisual() {
  return (
    <div className="relative flex h-36 items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute h-28 w-28 rounded-full border border-[#007AFF]/10"
      />

      <div
        aria-hidden="true"
        className="absolute h-20 w-20 rounded-full border border-[#007AFF]/20"
      />

      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#007AFF]/30 bg-[#007AFF]/10">
        <ShieldCheck
          size={30}
          className="text-[#007AFF]"
          aria-hidden="true"
        />
      </div>

      <div className="absolute bottom-3 right-[22%] flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#252525] px-2.5 py-1.5">
        <Check size={12} className="text-[#007AFF]" />
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
      <div className="w-full max-w-[230px] rounded-xl border border-white/[0.08] bg-[#252525] p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] text-gray-400">
            État du site
          </span>

          <span className="flex items-center gap-1.5 text-[10px] text-[#C79ADD]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9B59B6]" />
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
            stroke="#9B59B6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <motion.circle
            cx="150"
            cy="25"
            r="4"
            fill="#9B59B6"
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
            stroke="#007AFF"
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
            className="text-[#007AFF]"
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

function EvolutionVisual({ reducedMotion }) {
  const versions = ["v1.0", "v1.1", "v1.2"];

  return (
    <div className="flex h-36 items-center justify-center">
      <div className="flex items-center gap-2">
        {versions.map((version, index) => (
          <div key={version} className="flex items-center gap-2">
            <motion.div
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 12 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: reducedMotion ? 0 : index * 0.2,
              }}
              className={`
                flex h-12 w-14 items-center justify-center
                rounded-xl border text-xs font-semibold
                ${
                  index === 2
                    ? "border-[#9B59B6]/40 bg-[#9B59B6]/15 text-[#C79ADD]"
                    : "border-white/10 bg-[#252525] text-gray-400"
                }
              `}
            >
              {version}
            </motion.div>

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
    <motion.article
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 25 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: reducedMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#252525]/70 p-6 transition-colors duration-300 hover:border-white/15 sm:p-7"
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${benefit.color}18`,
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
    </motion.article>
  );
}

export default function MaintenanceBenefits() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="maintenance-benefits" bgColor="#222222">
      <SectionWrapper>
        <SectionHeading
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