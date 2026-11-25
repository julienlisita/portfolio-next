"use client";

// src/components/services/maintenance/MaintenanceProcess.jsx

import { motion, useReducedMotion } from "motion/react";

import {
  MessageSquareText,
  SearchCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { STAGGER } from "@/lib/motion";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Votre demande",
    description:
      "Vous m'expliquez le problème rencontré ou la modification souhaitée.",
    color: "var(--color-blue)",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Diagnostic",
    description:
      "J'analyse la situation et vous propose une intervention adaptée, avec un périmètre défini.",
    color: "var(--color-violet)",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Intervention",
    description:
      "Après votre accord, je réalise les corrections ou modifications convenues.",
    color: "var(--color-blue)",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Vérification",
    description:
      "Je vérifie le résultat et vous informe des actions effectuées.",
    color: "var(--color-violet)",
  },
];

function ProcessStep({ step, index }) {
  const Icon = step.icon;

  return (
    <Reveal
      as="li"
      delay={index * STAGGER}
      className="
        relative flex gap-6
        md:flex-col md:gap-0
      "
    >
      {/* Repère de la timeline */}

      <div className="relative z-10 shrink-0">
        <div
          className="
            flex h-14 w-14 items-center justify-center
            rounded-2xl border border-white/10
            bg-surface
            shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          "
        >
          <Icon
            size={24}
            style={{ color: step.color }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Contenu */}

      <div className="min-w-0 flex-1 pb-10 md:mt-7 md:pb-0">
        <span
          className="
            text-xs font-semibold tracking-[0.16em]
          "
          style={{ color: step.color }}
        >
          ÉTAPE {step.number}
        </span>

        <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
          {step.title}
        </h3>

        <p
          className="
            mt-3 max-w-xs text-sm leading-relaxed
            text-gray-400
          "
        >
          {step.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function MaintenanceProcess() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="maintenance-process"
      bgColor="surface-deep"
    >
      <SectionWrapper>
        <SectionHeading
          reveal
          eyebrow="UN PROCESSUS CLAIR"
          title="De votre demande à sa résolution."
          description="Un problème technique ou une modification à effectuer ? Je vous accompagne à chaque étape, du premier échange jusqu'à la vérification du résultat."
        />

        <div className="relative mt-16">

          {/* Ligne verticale — mobile */}

          <div
            aria-hidden="true"
            className="
              absolute bottom-12 left-7 top-7
              w-px bg-white/10
              md:hidden
            "
          >
            <motion.div
              initial={{ height: reducedMotion ? "100%" : "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 1.6,
                ease: "easeInOut",
              }}
              className="
                w-full bg-linear-to-b
                from-blue
                via-violet
                to-blue
              "
            />
          </div>

          {/* Ligne horizontale — desktop */}

          <div
            aria-hidden="true"
            className="
              absolute left-7 right-[12.5%] top-7
              hidden h-px bg-white/10
              md:block
            "
          >
            <motion.div
              initial={{ width: reducedMotion ? "100%" : "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 1.6,
                ease: "easeInOut",
              }}
              className="
                h-full bg-linear-to-r
                from-blue
                via-violet
                to-blue
              "
            />
          </div>

          {/* Étapes */}

          <ol
            className="
              relative grid grid-cols-1
              md:grid-cols-4 md:gap-8
            "
          >
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </ol>
        </div>

        {/* Message complémentaire */}

        <div
          className="
            mx-auto mt-8 flex max-w-3xl
            items-start gap-4 rounded-2xl
            border border-white/[0.07]
            bg-surface/60 p-5
            sm:mt-12 sm:items-center sm:p-6
          "
        >
          <ArrowRight
            size={20}
            className="mt-0.5 shrink-0 text-violet sm:mt-0"
            aria-hidden="true"
          />

          <p className="text-sm leading-relaxed text-gray-400">
            Chaque intervention est adaptée à la situation.
            Le diagnostic permet de préciser les actions nécessaires
            avant de commencer les travaux.
          </p>
        </div>
      </SectionWrapper>
    </Section>
  );
}