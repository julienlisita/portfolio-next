"use client";

// src/components/services/maintenance/MaintenanceServices.jsx

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  ShieldCheck,
  Wrench,
  Sparkles,
  Check,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

const services = [
  {
    id: "technical",
    number: "01",
    icon: ShieldCheck,
    title: "Maintenance technique",
    subtitle: "Préserver le bon fonctionnement",
    description:
      "Un suivi adapté aux technologies de votre site pour limiter les risques techniques et maintenir son bon fonctionnement.",
    items: [
      "Mises à jour techniques lorsque nécessaires",
      "Vérification du fonctionnement du site",
      "Contrôle des éléments de sécurité",
      "Sauvegardes selon la solution d'hébergement",
      "Vérification des formulaires et fonctionnalités essentielles",
    ],
    color: "#007AFF",
  },
  {
    id: "fixes",
    number: "02",
    icon: Wrench,
    title: "Corrections & dépannage",
    subtitle: "Résoudre les problèmes rencontrés",
    description:
      "Un problème d'affichage, une fonctionnalité qui ne répond plus ou un comportement inattendu ? J'analyse la situation et propose une intervention adaptée.",
    items: [
      "Diagnostic des dysfonctionnements",
      "Correction de bugs",
      "Résolution de problèmes d'affichage",
      "Vérification du responsive",
      "Tests après intervention",
    ],
    color: "#007AFF",
  },
  {
    id: "evolution",
    number: "03",
    icon: Sparkles,
    title: "Modifications & évolutions",
    subtitle: "Faire évoluer votre site",
    description:
      "Votre activité évolue, votre site aussi. Je peux vous accompagner pour apporter des modifications ou développer de nouvelles fonctionnalités.",
    items: [
      "Modification de contenus et de visuels",
      "Ajout ou adaptation de sections",
      "Améliorations de l'interface",
      "Optimisations ciblées",
      "Développement de nouvelles fonctionnalités",
    ],
    color: "#007AFF",
  },
];

function ServicePanel({ service, active, onSelect, reducedMotion }) {
  const Icon = service.icon;

  return (
    <motion.article
      layout={!reducedMotion}
      transition={{
        layout: {
          duration: reducedMotion ? 0 : 0.45,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className={`
        relative min-w-0 overflow-hidden rounded-2xl
        border transition-colors duration-300
        ${
          active
            ? "border-[#5AC8FA]/30 bg-[#252525]"
            : "border-white/[0.07] bg-[#252525]/50 hover:border-white/15"
        }
      `}
      style={{
        flex: active ? 1.65 : 1,
      }}
    >
      {/* Bouton d'ouverture */}

      <button
        type="button"
        onClick={onSelect}
        aria-expanded={active}
        aria-controls={`maintenance-panel-${service.id}`}
        className="
          flex w-full items-start justify-between gap-4
          p-5 text-left
          focus-visible:outline-2
          focus-visible:outline-offset-[-3px]
          focus-visible:outline-[#5AC8FA]
          sm:p-6
        "
      >
        <div className="min-w-0">
          <div
            className="
              mb-6 flex h-12 w-12 items-center justify-center
              rounded-xl
            "
            style={{
              backgroundColor: `${service.color}18`,
            }}
          >
            <Icon
              size={23}
              style={{ color: service.color }}
              aria-hidden="true"
            />
          </div>

          <span className="text-xs font-semibold tracking-widest text-gray-500">
            {service.number}
          </span>

          <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
            {service.title}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {service.subtitle}
          </p>
        </div>

        <ChevronDown
          size={19}
          aria-hidden="true"
          className={`
            mt-1 shrink-0 text-[#5AC8FA]
            transition-transform duration-300
            ${active ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Contenu développé */}

      <motion.div
        id={`maintenance-panel-${service.id}`}
        initial={false}
        animate={{
          height: active ? "auto" : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: reducedMotion ? 0 : 0.35,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
        aria-hidden={!active}
        inert={!active}
      >
        <div className="px-5 pb-6 sm:px-6">
          <div className="mb-5 h-px bg-white/[0.07]" />

          <p className="text-sm leading-relaxed text-gray-300">
            {service.description}
          </p>

          <ul className="mt-6 space-y-3">
            {service.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-[#007AFF]"
                  aria-hidden="true"
                />

                <span className="text-sm leading-relaxed text-gray-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function MaintenanceServices() {
  const [activeId, setActiveId] = useState("technical");
  const reducedMotion = useReducedMotion();

  return (
    <Section id="maintenance-services" bgColor="#1C1C1C">
      <SectionWrapper>
        <SectionHeading
          eyebrow="MES INTERVENTIONS"
          title="Un accompagnement adapté aux besoins de votre site."
          description="Suivi technique, résolution de problèmes ou améliorations : j'interviens selon les besoins de votre site et les priorités de votre activité."
        />

        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-start">
          {services.map((service) => (
            <ServicePanel
              key={service.id}
              service={service}
              active={activeId === service.id}
              onSelect={() =>
                setActiveId((current) =>
                  current === service.id ? null : service.id
                )
              }
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Précision commerciale */}

        <div
          className="
            mx-auto mt-10 max-w-3xl
            rounded-xl border border-white/[0.06]
            bg-[#252525]/60 px-5 py-4
            text-center
          "
        >
          <p className="text-sm leading-relaxed text-gray-400">
            Les interventions sont définies selon les caractéristiques de
            votre site. Les modifications importantes et les nouvelles
            fonctionnalités peuvent faire l'objet d'un devis spécifique.
          </p>
        </div>
      </SectionWrapper>
    </Section>
  );
}