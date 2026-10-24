"use client";

// src/components/services/CustomFeatures/CustomFeaturesShowcase.jsx

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  CalendarDays,
  ClipboardList,
  FolderLock,
  Check,
  Clock3,
  ArrowUpRight,
  FileText,
  MessageSquare,
  UserRound,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

const examples = [
  {
    id: "booking",
    number: "01",
    label: "Réservation en ligne",
    title: "Vos clients réservent. Votre planning se met à jour.",
    description:
      "Proposez des créneaux disponibles directement en ligne. Les réservations sont centralisées et les confirmations peuvent être envoyées automatiquement.",
    benefits: [
      "Disponibilités actualisées",
      "Réservations centralisées",
      "Confirmations automatiques",
    ],
    icon: CalendarDays,
    color: "#007AFF",
  },
  {
    id: "requests",
    number: "02",
    label: "Gestion des demandes",
    title: "Toutes vos demandes, au même endroit.",
    description:
      "Retrouvez les demandes de vos clients dans un espace unique, suivez leur avancement et identifiez rapidement les actions à effectuer.",
    benefits: [
      "Demandes organisées",
      "Suivi des statuts",
      "Vue d'ensemble de l'activité",
    ],
    icon: ClipboardList,
    color: "#9B59B6",
  },
  {
    id: "portal",
    number: "03",
    label: "Espace client",
    title: "Un espace dédié à chacun de vos clients.",
    description:
      "Donnez à vos clients un accès personnalisé pour consulter leurs documents, suivre leurs demandes et retrouver les informations importantes.",
    benefits: [
      "Accès personnalisé",
      "Documents centralisés",
      "Suivi simplifié",
    ],
    icon: FolderLock,
    color: "#007AFF",
  },
];

function BookingPreview() {
  const days = [
    { day: "Lun", date: "12" },
    { day: "Mar", date: "13" },
    { day: "Mer", date: "14" },
    { day: "Jeu", date: "15" },
    { day: "Ven", date: "16" },
  ];

  const slots = ["09:00", "10:30", "14:00", "15:30"];

  return (
    <div className="w-full max-w-md">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Prendre rendez-vous</p>
          <h4 className="mt-1 text-lg font-semibold text-white">
            Choisissez un créneau
          </h4>
        </div>

        <CalendarDays size={22} className="text-[#007AFF]" />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {days.map(({ day, date }, index) => (
          <div
            key={date}
            className={`
              rounded-xl border px-1 py-3 text-center
              ${
                index === 2
                  ? "border-[#5AC8FA]/60 bg-[#5AC8FA]/10"
                  : "border-white/[0.06] bg-white/[0.03]"
              }
            `}
          >
            <p className="text-[10px] text-gray-400">{day}</p>
            <p
              className={`mt-1 text-sm font-semibold ${
                index === 2 ? "text-[#5AC8FA]" : "text-white"
              }`}
            >
              {date}
            </p>
          </div>
        ))}
      </div>

      <p className="mb-3 mt-6 text-xs font-medium text-gray-300">
        Créneaux disponibles
      </p>

      <div className="grid grid-cols-2 gap-3">
        {slots.map((slot, index) => (
          <div
            key={slot}
            className={`
              flex items-center justify-center gap-2
              rounded-lg border px-3 py-3 text-sm
              ${
                index === 1
                  ? "border-[#5AC8FA] bg-[#5AC8FA]/10 text-[#5AC8FA]"
                  : "border-white/10 bg-[#252525] text-gray-300"
              }
            `}
          >
            <Clock3 size={14} />
            {slot}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-[#007AFF]/10 p-4">
        <div>
          <p className="text-xs font-medium text-white">
            Mercredi 14 octobre
          </p>
          <p className="mt-1 text-[11px] text-gray-400">
            Rendez-vous à 10h30
          </p>
        </div>

        <Check size={18} className="text-[#5AC8FA]" />
      </div>
    </div>
  );
}

function RequestsPreview() {
  const requests = [
    {
      name: "Création d'un devis",
      client: "Sophie Martin",
      status: "À traiter",
      color: "#9B59B6",
    },
    {
      name: "Demande d'intervention",
      client: "Thomas Bernard",
      status: "En cours",
      color: "#007AFF",
    },
    {
      name: "Suivi de prestation",
      client: "Marie Laurent",
      status: "Terminé",
      color: "#5AC8FA",
    },
  ];

  return (
    <div className="w-full max-w-md">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Gestion de l'activité</p>
          <h4 className="mt-1 text-lg font-semibold text-white">
            Demandes clients
          </h4>
        </div>

        <ClipboardList size={22} className="text-[#9B59B6]" />
      </div>

      <div className="space-y-3">
        {requests.map((request) => (
          <div
            key={request.name}
            className="
              flex items-center justify-between gap-3
              rounded-xl border border-white/[0.06]
              bg-[#252525] p-4
            "
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                {request.name}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {request.client}
              </p>
            </div>

            <span
              className="shrink-0 rounded-full px-2.5 py-1 text-[10px]"
              style={{
                color: request.color,
                backgroundColor: `${request.color}18`,
              }}
            >
              {request.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#9B59B6]/10 p-4">
        <MessageSquare size={18} className="text-[#9B59B6]" />

        <p className="text-xs text-gray-300">
          3 demandes suivies dans votre espace
        </p>
      </div>
    </div>
  );
}

function PortalPreview() {
  const documents = [
    { name: "Devis signé.pdf", date: "12 octobre" },
    { name: "Compte-rendu.pdf", date: "10 octobre" },
    { name: "Facture.pdf", date: "8 octobre" },
  ];

  return (
    <div className="w-full max-w-md">
      <div className="mb-6 flex items-center gap-3">
        <div
          className="
            flex h-11 w-11 items-center justify-center
            rounded-xl bg-[#007AFF]/15
          "
        >
          <UserRound size={21} className="text-[#007AFF]" />
        </div>

        <div>
          <p className="text-xs text-gray-400">Espace personnel</p>
          <h4 className="text-base font-semibold text-white">
            Bonjour, Marie
          </h4>
        </div>
      </div>

      <div className="mb-5 rounded-xl border border-[#007AFF]/20 bg-[#007AFF]/10 p-4">
        <p className="text-xs text-gray-400">Votre dossier</p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-white">
            Prestation en cours
          </p>

          <span className="rounded-full bg-[#007AFF]/20 px-2 py-1 text-[10px] text-[#76B4FF]">
            En cours
          </span>
        </div>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-linear-to-r from-[#007AFF] to-[#9B59B6]" />
        </div>
      </div>

      <p className="mb-3 text-xs font-medium text-gray-300">
        Mes documents
      </p>

      <div className="space-y-2">
        {documents.map((document) => (
          <div
            key={document.name}
            className="
              flex items-center gap-3 rounded-lg
              border border-white/[0.06]
              bg-[#252525] p-3
            "
          >
            <FileText size={17} className="text-[#9B59B6]" />

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-white">
                {document.name}
              </p>
              <p className="mt-0.5 text-[10px] text-gray-500">
                {document.date}
              </p>
            </div>

            <ArrowUpRight size={15} className="text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

const previews = {
  booking: BookingPreview,
  requests: RequestsPreview,
  portal: PortalPreview,
};

export default function CustomFeaturesShowcase() {
  const [activeId, setActiveId] = useState("booking");
  const reducedMotion = useReducedMotion();

  const activeExample = examples.find((item) => item.id === activeId);
  const ActivePreview = previews[activeId];

  return (
    <Section id="custom-features-showcase" bgColor="#222222">
      <SectionWrapper>
        <SectionHeading
          eyebrow="DES SOLUTIONS CONCRÈTES"
          title="Imaginez ce que votre application pourrait faire."
          description="Chaque activité a ses besoins. Voici quelques exemples d'outils que nous pouvons concevoir pour simplifier votre organisation et améliorer l'expérience de vos clients."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Colonne gauche */}

          <div>
            <div
              role="tablist"
              aria-label="Exemples d'applications web"
              className="flex flex-wrap gap-2"
            >
              {examples.map((example) => {
                const Icon = example.icon;
                const active = example.id === activeId;

                return (
                  <button
                    key={example.id}
                    type="button"
                    role="tab"
                    id={`tab-${example.id}`}
                    aria-selected={active}
                    aria-controls={`panel-${example.id}`}
                    onClick={() => setActiveId(example.id)}
                    className={`
                      inline-flex items-center gap-2
                      rounded-xl border px-4 py-3
                      text-xs font-medium transition-all
                      sm:text-sm
                      ${
                        active
                          ? "border-[#5AC8FA]/50 bg-[#5AC8FA]/10 text-[#5AC8FA]"
                          : "border-white/10 bg-[#252525] text-gray-400 hover:border-white/20 hover:text-white"
                      }
                    `}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {example.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={reducedMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-10"
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: activeExample.color }}
                >
                  {activeExample.number} / 03
                </span>

                <h3 className="mt-4 max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  {activeExample.title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-300">
                  {activeExample.description}
                </p>

                <div className="mt-7 space-y-3">
                  {activeExample.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <Check
                        size={17}
                        className="shrink-0 text-[#5AC8FA]"
                        aria-hidden="true"
                      />

                      <span className="text-sm text-gray-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Colonne droite */}

          <div
            role="tabpanel"
            id={`panel-${activeId}`}
            aria-labelledby={`tab-${activeId}`}
            className="
              relative flex min-h-[430px]
              items-center justify-center
              overflow-hidden rounded-3xl
              border border-white/[0.06]
              bg-[#1C1C1C] p-5
              sm:p-8 lg:min-h-[500px]
            "
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-12 rounded-full opacity-15 blur-[90px]"
              style={{ backgroundColor: activeExample.color }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, scale: 0.96, y: 15 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  reducedMotion
                    ? undefined
                    : { opacity: 0, scale: 0.98, y: -10 }
                }
                transition={{ duration: 0.3 }}
                className="
                  relative z-10 flex w-full
                  items-center justify-center
                "
              >
                <ActivePreview />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500 sm:text-sm">
          Interfaces illustratives — chaque application est conçue selon les besoins du projet.
        </p>
      </SectionWrapper>
    </Section>
  );
}