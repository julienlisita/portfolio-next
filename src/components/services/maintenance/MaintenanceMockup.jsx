"use client";

// src/components/services/maintenance/MaintenanceMockup.jsx

import { motion, useReducedMotion } from "motion/react";

import {
  Activity,
  ShieldCheck,
  DatabaseBackup,
  Gauge,
  CheckCircle2,
  Clock3,
  Wrench,
  Globe2,
} from "lucide-react";

const indicators = [
  {
    icon: ShieldCheck,
    label: "Sécurité",
    value: "Protégé",
    detail: "Certificat SSL actif",
    color: "#007AFF",
  },
  {
    icon: DatabaseBackup,
    label: "Sauvegardes",
    value: "À jour",
    detail: "Dernière sauvegarde réussie",
    color: "#9B59B6",
  },
  {
    icon: Gauge,
    label: "Performances",
    value: "Optimisé",
    detail: "Suivi des performances",
    color: "#007AFF",
  },
];

const interventions = [
  {
    icon: CheckCircle2,
    title: "Vérification de sécurité",
    date: "Aujourd'hui",
    status: "Terminé",
  },
  {
    icon: CheckCircle2,
    title: "Sauvegarde du site",
    date: "Hier",
    status: "Terminé",
  },
  {
    icon: Wrench,
    title: "Mise à jour technique",
    date: "12 octobre",
    status: "Terminé",
  },
];

export default function MaintenanceMockup() {
  const reducedMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.65,
      delay: reducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Halos décoratifs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-1/4 h-72 w-72 rounded-full bg-[#007AFF]/15 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#9B59B6]/15 blur-[100px]"
      />

      {/* Interface de supervision */}
      <motion.div
        {...entrance()}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1C1C1C] shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
      >
        {/* Barre de fenêtre */}
        <div className="flex h-12 items-center justify-between border-b border-white/[0.06] bg-[#252525] px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#9B59B6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#007AFF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5AC8FA]" />
          </div>

          <span className="text-[10px] text-gray-500 sm:text-xs">
            suivi-technique.app
          </span>

          <div className="w-12" />
        </div>

        <div className="p-4 sm:p-7 lg:p-9">
          {/* En-tête */}
          <motion.div
            {...entrance(0.15)}
            className="flex flex-wrap items-start justify-between gap-4"
          >
            <div>
              <p className="text-xs text-gray-400">
                Tableau de suivi
              </p>

              <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                État de votre site
              </h3>

              <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                Une vue d'ensemble de votre site internet.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#007AFF]/20 bg-[#007AFF]/10 px-3 py-2">
              <motion.span
                animate={
                  reducedMotion
                    ? undefined
                    : { opacity: [1, 0.4, 1] }
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-[#007AFF]"
              />

              <span className="text-xs font-medium text-[#76B4FF]">
                Site opérationnel
              </span>
            </div>
          </motion.div>

          {/* Carte principale */}
          <motion.div
            {...entrance(0.3)}
            className="mt-7 flex flex-col gap-5 rounded-xl border border-white/[0.06] bg-[#252525] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/15">
                <Globe2
                  size={24}
                  className="text-[#007AFF]"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Mon site internet
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Site vitrine professionnel
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-[#007AFF]"
                aria-hidden="true"
              />

              <span className="text-xs text-gray-300">
                Fonctionnement normal
              </span>
            </div>
          </motion.div>

          {/* Indicateurs */}
          <motion.div
            {...entrance(0.45)}
            className="mt-4 grid gap-3 sm:grid-cols-3"
          >
            {indicators.map(({ icon: Icon, label, value, detail, color }) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.06] bg-[#252525] p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400">{label}</p>

                  <Icon
                    size={18}
                    style={{ color }}
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-4 text-lg font-semibold text-white">
                  {value}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {detail}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Historique */}
          <motion.div
            {...entrance(0.6)}
            className="mt-4 overflow-hidden rounded-xl border border-white/[0.06] bg-[#252525]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
              <div className="flex items-center gap-2">
                <Activity
                  size={17}
                  className="text-[#9B59B6]"
                  aria-hidden="true"
                />

                <h4 className="text-sm font-semibold text-white">
                  Dernières interventions
                </h4>
              </div>

              <Clock3
                size={16}
                className="text-gray-500"
                aria-hidden="true"
              />
            </div>

            <div className="divide-y divide-white/[0.05]">
              {interventions.map(({ icon: Icon, title, date, status }) => (
                <div
                  key={title}
                  className="flex items-center justify-between gap-3 px-5 py-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon
                      size={17}
                      className="shrink-0 text-[#007AFF]"
                      aria-hidden="true"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-white sm:text-sm">
                        {title}
                      </p>

                      <p className="mt-1 text-[10px] text-gray-500">
                        {date}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#007AFF]/10 px-3 py-1 text-[10px] text-[#76B4FF]">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}