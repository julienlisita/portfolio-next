"use client";

// src/components/services/CustomFeatures/CustomFeaturesMockup.jsx

import { motion, useReducedMotion } from "motion/react";

import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Settings,
  Bell,
  CheckCircle2,
  ArrowUpRight,
  Clock3,
  TrendingUp,
  Menu,
} from "lucide-react";

const navigation = [
  { icon: LayoutDashboard, label: "Vue d'ensemble", active: true },
  { icon: Users, label: "Clients" },
  { icon: CalendarDays, label: "Réservations" },
  { icon: Settings, label: "Paramètres" },
];

const requests = [
  {
    initials: "ML",
    name: "Marie Laurent",
    subject: "Demande de rendez-vous",
    status: "Confirmé",
    statusColor: "blue",
  },
  {
    initials: "TD",
    name: "Thomas Dubois",
    subject: "Nouvelle demande",
    status: "À traiter",
    statusColor: "violet",
  },
  {
    initials: "SC",
    name: "Sophie Caron",
    subject: "Suivi de dossier",
    status: "En cours",
    statusColor: "blue",
  },
];

function StatusBadge({ status, color }) {
  const styles =
    color === "violet"
      ? "bg-[#9B59B6]/15 text-[#C79ADD]"
      : "bg-[#007AFF]/15 text-[#76B4FF]";

  return (
    <span
      className={`
        inline-flex items-center rounded-full
        px-2.5 py-1 text-[10px] font-medium
        sm:text-xs
        ${styles}
      `}
    >
      {status}
    </span>
  );
}

function StatCard({ icon: Icon, label, value, color, detail }) {
  return (
    <div
      className="
        rounded-xl border border-white/[0.06]
        bg-[#252525] p-3
        sm:p-4
      "
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] text-gray-400 sm:text-xs">
          {label}
        </span>

        <Icon
          size={16}
          style={{ color }}
          aria-hidden="true"
        />
      </div>

      <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
        {detail}
      </p>
    </div>
  );
}

export default function CustomFeaturesMockup() {
  const reducedMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: reducedMotion
      ? false
      : { opacity: 0, y: 24 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.2,
    },

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
        className="
          pointer-events-none absolute
          -left-10 top-1/4
          h-64 w-64 rounded-full
          bg-[#007AFF]/15 blur-[100px]
          sm:h-96 sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-10 bottom-0
          h-64 w-64 rounded-full
          bg-[#9B59B6]/15 blur-[100px]
          sm:h-96 sm:w-96
        "
      />

      {/* Interface principale */}

      <motion.div
        {...entrance()}
        className="
          relative overflow-hidden rounded-2xl
          border border-white/10
          bg-[#1C1C1C]
          shadow-[0_30px_90px_rgba(0,0,0,0.45)]
        "
      >

        {/* Barre supérieure */}

        <div
          className="
            flex h-11 items-center justify-between
            border-b border-white/[0.06]
            bg-[#252525] px-4
            sm:h-12 sm:px-5
          "
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#9B59B6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#007AFF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5AC8FA]" />
          </div>

          <div
            className="
              rounded-md border border-white/[0.06]
              bg-[#1C1C1C] px-4 py-1
              text-[10px] text-gray-500
              sm:text-xs
            "
          >
            mon-espace.app
          </div>

          <div className="w-12" />
        </div>

        {/* Application */}

        <div className="flex min-h-[350px] sm:min-h-[460px]">

          {/* Navigation latérale */}

          <aside
            className="
              hidden w-48 shrink-0
              border-r border-white/[0.06]
              bg-[#202020] p-4
              md:block lg:w-56
            "
          >
            <div className="mb-10 flex items-center gap-3">
              <div
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg
                  bg-linear-to-br
                  from-[#007AFF] to-[#9B59B6]
                  font-bold text-white
                "
              >
                A
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Mon activité
                </p>

                <p className="text-[10px] text-gray-500">
                  Espace de gestion
                </p>
              </div>
            </div>

            <nav aria-label="Navigation illustrative">
              <ul className="space-y-2">
                {navigation.map(({ icon: Icon, label, active }) => (
                  <li key={label}>
                    <div
                      className={`
                        flex items-center gap-3 rounded-lg
                        px-3 py-2.5 text-xs
                        ${
                          active
                            ? "bg-[#5AC8FA]/10 text-[#5AC8FA]"
                            : "text-gray-500"
                        }
                      `}
                    >
                      <Icon size={16} aria-hidden="true" />
                      <span>{label}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Contenu principal */}

          <div className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">

            {/* En-tête du tableau de bord */}

            <motion.div
              {...entrance(0.15)}
              className="flex items-start justify-between gap-4"
            >
              <div>
                <p className="text-[10px] text-gray-500 sm:text-xs">
                  Lundi 12 octobre
                </p>

                <h3
                  className="
                    mt-1 text-lg font-semibold text-white
                    sm:text-2xl
                  "
                >
                  Tableau de bord
                </h3>

                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                  Bienvenue dans votre espace.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Bell
                  size={18}
                  className="text-gray-400"
                  aria-hidden="true"
                />

                <div
                  className="
                    hidden h-8 w-8 items-center justify-center
                    rounded-full bg-[#007AFF]/20
                    text-xs font-semibold text-[#76B4FF]
                    sm:flex
                  "
                >
                  JD
                </div>
              </div>
            </motion.div>

            {/* Indicateurs */}

            <motion.div
              {...entrance(0.3)}
              className="
                mt-6 grid grid-cols-2 gap-3
                lg:grid-cols-3 lg:gap-4
              "
            >
              <StatCard
                icon={Users}
                label="Clients"
                value="128"
                detail="Clients enregistrés"
                color="#007AFF"
              />

              <StatCard
                icon={CalendarDays}
                label="Réservations"
                value="24"
                detail="Ce mois-ci"
                color="#9B59B6"
              />

              <div className="col-span-2 lg:col-span-1">
                <StatCard
                  icon={TrendingUp}
                  label="Demandes"
                  value="+18 %"
                  detail="Sur les 30 derniers jours"
                  color="#007AFF"
                />
              </div>
            </motion.div>

            {/* Demandes récentes */}

            <motion.div
              {...entrance(0.45)}
              className="
                mt-5 overflow-hidden rounded-xl
                border border-white/[0.06]
                bg-[#252525]
              "
            >
              <div
                className="
                  flex items-center justify-between
                  border-b border-white/[0.06]
                  px-4 py-4
                "
              >
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Demandes récentes
                  </h4>

                  <p className="mt-1 text-[10px] text-gray-500">
                    Suivez votre activité en un coup d'œil
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-[#5AC8FA]"
                  aria-hidden="true"
                />
              </div>

              <div className="divide-y divide-white/[0.05]">
                {requests.map((request) => (
                  <div
                    key={request.initials}
                    className="
                      flex items-center justify-between
                      gap-3 px-4 py-3
                    "
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className="
                          flex h-8 w-8 shrink-0
                          items-center justify-center
                          rounded-full bg-white/[0.06]
                          text-[10px] font-medium
                          text-gray-300
                        "
                      >
                        {request.initials}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-white">
                          {request.name}
                        </p>

                        <p className="truncate text-[10px] text-gray-500">
                          {request.subject}
                        </p>
                      </div>
                    </div>

                    <StatusBadge
                      status={request.status}
                      color={request.statusColor}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Notification flottante */}

      <motion.div
        initial={
          reducedMotion
            ? false
            : { opacity: 0, y: 30, scale: 0.9 }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: reducedMotion ? 0 : 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative z-10
          mx-auto -mt-5
          flex w-fit max-w-[calc(100%-2rem)]
          items-center gap-3
          rounded-xl border border-white/10
          bg-[#2A2A2A] px-4 py-3
          shadow-[0_15px_45px_rgba(0,0,0,0.45)]
          sm:absolute sm:-bottom-6 sm:-right-5
          sm:mx-0 sm:mt-0 sm:max-w-none
          sm:px-5 sm:py-4
        "
      >
        <div
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl bg-[#9B59B6]/15
          "
        >
          <CheckCircle2
            size={21}
            className="text-[#9B59B6]"
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-xs font-semibold text-white sm:text-sm">
            Nouvelle réservation confirmée
          </p>

          <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
            Notification envoyée automatiquement
          </p>
        </div>
      </motion.div>
    </div>
  );
}