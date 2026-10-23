"use client";

// src/components/services/website/WebsiteBenefits.jsx

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// ─────────────────────────────────────────────
// Données
// ─────────────────────────────────────────────

const benefits = [
  {
    id: "trust",
    number: "01",
    title: "Inspirer confiance",
    description:
      "Présentez votre activité, votre savoir-faire et vos réalisations à travers un site professionnel qui reflète votre identité.",
    icon: ShieldCheck,
  },
  {
    id: "visibility",
    number: "02",
    title: "Gagner en visibilité",
    description:
      "Permettez à vos futurs clients de découvrir vos services et de vous trouver plus facilement sur les moteurs de recherche.",
    icon: Globe2,
  },
  {
    id: "contact",
    number: "03",
    title: "Faciliter les contacts",
    description:
      "Guidez vos visiteurs vers une prise de contact simple, qu'il s'agisse d'une demande de devis, d'un appel ou d'un message.",
    icon: Mail,
  },
];

// ─────────────────────────────────────────────
// Illustration 1 — Confiance
// ─────────────────────────────────────────────

function TrustPreview() {
  return (
    <div className="w-full max-w-[390px] overflow-hidden rounded-2xl border border-white/10 bg-[#252525] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5AC8FA]/10">
            <Sparkles size={16} className="text-[#5AC8FA]" />
          </div>

          <span className="text-sm font-semibold text-white">
            Votre entreprise
          </span>
        </div>

        <span className="rounded-full bg-[#5AC8FA]/10 px-3 py-1 text-[10px] font-medium text-[#5AC8FA]">
          Site professionnel
        </span>
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-[#343434] to-[#1C1C1C] sm:h-40">
          <div className="text-center">
            <Sparkles
              size={30}
              strokeWidth={1.5}
              className="mx-auto text-[#5AC8FA]"
            />

            <p className="mt-3 text-sm font-semibold text-white">
              Votre savoir-faire en valeur
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-3 flex items-center gap-2 text-[#5AC8FA]">
            <CheckCircle2 size={16} />

            <span className="text-xs font-medium">
              Une présentation soignée
            </span>
          </div>

          <div className="h-2 w-4/5 rounded-full bg-white/15" />
          <div className="mt-2 h-2 w-full rounded-full bg-white/10" />
          <div className="mt-2 h-2 w-3/5 rounded-full bg-white/10" />
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex -space-x-2">
            {["A", "B", "C"].map((letter) => (
              <div
                key={letter}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#252525] bg-[#414141] text-xs font-semibold text-white"
              >
                {letter}
              </div>
            ))}
          </div>

          <span className="flex items-center gap-1.5 text-xs text-gray-300">
            <ShieldCheck
              size={15}
              className="text-[#5AC8FA]"
            />
            Une image professionnelle
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Illustration 2 — Visibilité
// ─────────────────────────────────────────────

function VisibilityPreview() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#252525] p-5 shadow-2xl sm:p-7">
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1C1C1C] px-4 py-3">
        <Search
          size={18}
          className="shrink-0 text-gray-400"
        />

        <span className="min-w-0 flex-1 truncate text-sm text-gray-300">
          artisan près de chez moi
        </span>

        <span className="text-xs text-gray-500">⌕</span>
      </div>

      <div className="mt-7">
        <p className="mb-5 text-xs text-gray-500">
          Exemple illustratif de résultat de recherche
        </p>

        <div className="rounded-xl border border-[#5AC8FA]/25 bg-[#5AC8FA]/[0.04] p-5">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Globe2 size={14} />
            <span>votre-entreprise.fr</span>
          </div>

          <h3 className="mt-3 text-base font-semibold text-[#5AC8FA] sm:text-lg">
            Votre entreprise — Votre savoir-faire
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            Découvrez nos prestations et notre expertise.
            Contactez-nous pour discuter de votre projet.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Prestations", "Réalisations", "Contact"].map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
          <MapPin
            size={15}
            className="shrink-0 text-[#5AC8FA]"
          />

          <span>
            Une présence en ligne pour votre activité locale
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Illustration 3 — Contact
// ─────────────────────────────────────────────

function ContactPreview() {
  return (
    <div className="w-full max-w-[390px] rounded-2xl border border-white/10 bg-[#252525] p-5 shadow-2xl sm:p-7">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-[#5AC8FA]">
            PRENDRE CONTACT
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            Parlons de votre projet
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5AC8FA]/10">
          <Mail size={20} className="text-[#5AC8FA]" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="mb-2 h-2 w-16 rounded-full bg-white/20" />
          <div className="h-10 rounded-lg border border-white/10 bg-[#1C1C1C]" />
        </div>

        <div>
          <div className="mb-2 h-2 w-24 rounded-full bg-white/20" />
          <div className="h-10 rounded-lg border border-white/10 bg-[#1C1C1C]" />
        </div>

        <div>
          <div className="mb-2 h-2 w-20 rounded-full bg-white/20" />
          <div className="h-20 rounded-lg border border-white/10 bg-[#1C1C1C]" />
        </div>

        <div className="flex h-10 items-center justify-center gap-2 rounded-lg bg-[#5AC8FA] text-sm font-semibold text-[#1C1C1C]">
          Envoyer ma demande
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-lg border border-[#5AC8FA]/20 bg-[#5AC8FA]/[0.05] px-3 py-3">
        <Check
          size={16}
          className="shrink-0 text-[#5AC8FA]"
        />

        <span className="text-xs text-gray-300">
          Un parcours simple pour vos futurs clients
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Illustrations par bénéfice
// ─────────────────────────────────────────────

const previews = {
  trust: TrustPreview,
  visibility: VisibilityPreview,
  contact: ContactPreview,
};

// ─────────────────────────────────────────────
// Section principale
// ─────────────────────────────────────────────

export default function WebsiteBenefits() {
  const [activeBenefit, setActiveBenefit] = useState("trust");
  const reducedMotion = useReducedMotion();

  const ActivePreview = previews[activeBenefit];

  return (
    <Section
      id="website-benefits"
      labelledBy="website-benefits-title"
      bgColor="#222222"
      className="relative overflow-hidden"
    >
      <SectionWrapper>
        {/* En-tête */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
          }}
          className="mb-8 max-w-3xl sm:mb-10 lg:mb-12"
        >
          <SectionHeading
            id="website-benefits-title"
            eyebrow="LES BÉNÉFICES"
            title="Bien plus qu'une présence en ligne."
            description="Votre site internet est un véritable outil pour développer votre activité. Il doit vous aider à être visible, à inspirer confiance et à transformer les visites en opportunités."
          />
        </motion.div>

        {/* Contenu */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Liste des bénéfices */}
          <div className="min-w-0 border-t border-white/10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const active = activeBenefit === benefit.id;

              return (
                <button
                  key={benefit.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveBenefit(benefit.id)}
                  className="
                    group relative w-full
                    border-b border-white/10
                    py-5 text-left sm:py-7
                  "
                >
                  {/* Barre active */}
                  {active && (
                    <motion.span
                      layoutId="website-benefit-indicator"
                      className="
                        absolute bottom-0 left-0 top-0
                        w-[2px] bg-[#5AC8FA]
                      "
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 35,
                        duration: reducedMotion ? 0 : undefined,
                      }}
                    />
                  )}

                  <div className="flex items-start gap-4 pl-4 sm:gap-5 sm:pl-5">
                    <span
                      className={`pt-1 text-sm font-semibold ${
                        active
                          ? "text-[#5AC8FA]"
                          : "text-gray-500"
                      }`}
                    >
                      {benefit.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`
                            text-lg font-semibold
                            transition-colors sm:text-xl
                            ${
                              active
                                ? "text-white"
                                : "text-gray-400 group-hover:text-white"
                            }
                          `}
                        >
                          {benefit.title}
                        </h3>

                        <Icon
                          size={21}
                          aria-hidden="true"
                          className={
                            active
                              ? "shrink-0 text-[#5AC8FA]"
                              : "shrink-0 text-gray-500"
                          }
                        />
                      </div>

                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.p
                            key={benefit.id}
                            initial={
                              reducedMotion
                                ? false
                                : { opacity: 0, height: 0, y: -6 }
                            }
                            animate={{
                              opacity: 1,
                              height: "auto",
                              y: 0,
                            }}
                            exit={
                              reducedMotion
                                ? { opacity: 0, height: 0 }
                                : { opacity: 0, height: 0, y: -6 }
                            }
                            transition={{
                              duration: reducedMotion ? 0 : 0.3,
                            }}
                            className="overflow-hidden text-sm leading-relaxed text-gray-300 sm:text-base"
                          >
                            <span className="block pt-4">
                              {benefit.description}
                            </span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Illustration dynamique */}
          <div
            className="
              relative flex min-h-[350px]
              items-center justify-center
              overflow-hidden rounded-3xl
              border border-white/[0.06]
              bg-[#1C1C1C]
              px-5 py-8
              sm:min-h-[440px] sm:px-8
            "
          >
            {/* Halo */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-1/2 top-1/2
                h-[300px] w-[350px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full bg-[#5AC8FA]/[0.055]
                blur-[90px]
              "
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBenefit}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 16, scale: 0.97 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -12, scale: 0.98 }
                }
                transition={{
                  duration: reducedMotion ? 0 : 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 flex w-full justify-center"
              >
                <ActivePreview />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}