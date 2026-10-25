import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  RefreshCw,
  Gauge,
} from "lucide-react";

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";

// ─────────────────────────────────────────────
// Couleurs de l'identité visuelle
// ─────────────────────────────────────────────

const COLORS = {
  cyan: "#5AC8FA",
  blue: "#007AFF",
  purple: "#9B59B6",
};

// ─────────────────────────────────────────────
// Données des services
// ─────────────────────────────────────────────

const services = [
  {
    number: "01",
    category: "SITE VITRINE",
    title: "Un site professionnel pour valoriser votre activité",
    description:
      "Présentez vos services, inspirez confiance et facilitez les prises de contact grâce à un site clair, rapide et adapté à tous les écrans.",
    benefits: [
      "Un design adapté à votre identité",
      "Une expérience fluide sur mobile et ordinateur",
      "Une base optimisée pour le référencement",
    ],
    href: "/services/creation-site-internet",
    cta: "Découvrir les sites vitrines",
    visual: "website",
    color: COLORS.cyan,
  },
  {
    number: "02",
    category: "APPLICATIONS & OUTILS SUR MESURE",
    title: "Des outils web adaptés à votre façon de travailler",
    description:
      "Réservation en ligne, espace client, gestion interne ou automatisation : je développe des fonctionnalités adaptées à votre activité pour simplifier votre quotidien.",
    benefits: [
      "Des fonctionnalités pensées pour vos besoins",
      "Moins de tâches répétitives",
      "Des outils capables d'évoluer avec votre activité",
    ],
    href: "/services/creation-site-internet-fonctionnalites-sur-mesure",
    cta: "Découvrir les outils sur mesure",
    visual: "application",
    color: COLORS.blue,
  },
  {
    number: "03",
    category: "MAINTENANCE & ÉVOLUTIONS",
    title: "Un accompagnement pour faire évoluer votre site",
    description:
      "Après la mise en ligne, je reste disponible pour assurer le suivi technique de votre site, effectuer des corrections et développer de nouvelles fonctionnalités.",
    benefits: [
      "Corrections et mises à jour",
      "Suivi technique et maintenance",
      "Améliorations selon vos besoins",
    ],
    href: "/services/suivi-et-evolutions",
    cta: "Découvrir la maintenance",
    visual: "maintenance",
    color: COLORS.purple,
  },
];

// ─────────────────────────────────────────────
// Cadre commun des illustrations
// ─────────────────────────────────────────────

function VisualFrame({ children, color = COLORS.blue }) {
  return (
    <div
      className="
        relative isolate flex min-h-[300px]
        items-center justify-center
        overflow-hidden rounded-3xl
        border border-white/[0.06]
        bg-[#1C1C1C]
        p-6
        sm:min-h-[380px] sm:p-10
        lg:min-h-[430px]
      "
    >
      {/* Halo personnalisé selon le service */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[70%] w-[70%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full blur-[90px]
        "
        style={{
          backgroundColor: color,
          opacity: 0.12,
        }}
      />

      {/* Halo secondaire plus diffus */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-20 -right-20
          h-56 w-56 rounded-full
          blur-[100px]
        "
        style={{
          backgroundColor: color,
          opacity: 0.06,
        }}
      />

      <div className="relative z-10 w-full max-w-lg">
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Illustration 1 — Site vitrine
// Mockup ordinateur + smartphone
// Couleur dominante : cyan
// ─────────────────────────────────────────────

function WebsiteVisual({ color }) {
  return (
    <VisualFrame color={color}>
      <div className="relative mx-auto w-full max-w-[440px] pb-10 pr-8 sm:pb-12 sm:pr-12">
        {/* Ordinateur */}
        <div
          className="
            overflow-hidden rounded-xl
            border-[5px] border-[#252525]
            bg-[#252525]
            shadow-[0_25px_60px_rgba(0,0,0,0.4)]
          "
        >
          {/* Barre navigateur */}
          <div className="flex h-8 items-center gap-1.5 bg-[#2A2A2A] px-3">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />

            <div className="ml-3 h-4 flex-1 rounded-md bg-[#1C1C1C] px-3">
              <div className="mt-1.5 h-1 w-1/2 rounded bg-white/15" />
            </div>
          </div>

          {/* Capture desktop */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#163B70]/10">
            <Image
              src="/assets/images/services/ccs-desktop.webp"
              alt="Aperçu du site Compagnie Care & Services sur ordinateur"
              fill
              loading="eager"
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 440px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Pied de l'ordinateur */}
        <div className="mx-auto h-5 w-16 bg-linear-to-b from-[#353535] to-[#252525]" />

        <div className="mx-auto h-1.5 w-28 rounded-full bg-[#353535]" />

        {/* Smartphone */}
        <div
          className="
            absolute bottom-0 right-0
            w-[25%] min-w-[70px]
            overflow-hidden rounded-[16px]
            border-[4px] border-[#252525]
            bg-[#252525]
            shadow-[0_15px_40px_rgba(0,0,0,0.5)]
          "
        >
          <div className="flex h-4 items-center justify-center bg-[#252525]">
            <span className="h-1 w-6 rounded-full bg-white/20" />
          </div>

          <div className="relative aspect-[9/17] overflow-hidden">
            <Image
              src="/assets/images/services/ccs-mobile.webp"
              alt="Aperçu mobile du site Compagnie Care & Services"
              fill
              loading="lazy"
              sizes="120px"
              className="object-cover object-top"
            />
          </div>

          <div className="flex h-4 items-center justify-center">
            <span className="h-1 w-5 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

// ─────────────────────────────────────────────
// Illustration 2 — Application sur mesure
// Capture réelle dans une fenêtre navigateur
// Couleur dominante : bleu électrique
// ─────────────────────────────────────────────

function ApplicationVisual({ color }) {
  return (
    <VisualFrame color={color}>
      <div className="relative mx-auto w-full max-w-[460px] py-5">
        {/* Halo derrière la fenêtre */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -inset-4 rounded-3xl blur-2xl
          "
          style={{
            backgroundColor: color,
            opacity: 0.08,
          }}
        />

        {/* Fenêtre navigateur */}
        <div
          className="
            relative overflow-hidden rounded-xl
            border border-white/10
            bg-[#252525]
            shadow-[0_25px_60px_rgba(0,0,0,0.45)]
          "
        >
          {/* Barre navigateur */}
          <div
            className="
              flex h-10 items-center gap-2
              border-b border-white/[0.06]
              bg-[#2A2A2A] px-4
            "
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: color }}
            />

            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />

            <div
              className="
                ml-3 flex h-5 flex-1 items-center
                rounded-md border border-white/[0.04]
                bg-[#1C1C1C] px-3
              "
            >
              <span className="h-1 w-1/3 rounded-full bg-white/15" />
            </div>
          </div>

          {/* Capture de l'application */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#163B70]/10">
            <Image
              src="/assets/images/services/application-desktop.webp"
              alt="Exemple d'interface d'application web développée sur mesure"
              fill
              loading="lazy"
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 460px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Élément graphique flottant */}
        <div
          aria-hidden="true"
          className="
            absolute -bottom-1 -right-2
            flex items-center gap-2
            rounded-xl border border-white/10
            bg-[#2A2A2A] px-4 py-3
            shadow-[0_12px_35px_rgba(0,0,0,0.35)]
            sm:-right-4
          "
        >
          <div
            className="
              flex h-8 w-8 items-center justify-center
              rounded-lg
            "
            style={{
              backgroundColor: `${color}20`,
            }}
          >
            <CheckCircle2
              size={18}
              style={{ color }}
            />
          </div>

          <div>
            <p className="text-xs font-medium text-white">
              Fonctionnalités sur mesure
            </p>

            <p className="text-[10px] text-gray-400">
              Adaptées à votre activité
            </p>
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

// ─────────────────────────────────────────────
// Illustration 3 — Maintenance
// Interface graphique sobre
// Couleur dominante : violet
// ─────────────────────────────────────────────

function MaintenanceVisual({ color }) {
  const indicators = [
    {
      label: "Performance",
      icon: Gauge,
      width: "88%",
    },
    {
      label: "Maintenance",
      icon: RefreshCw,
      width: "76%",
    },
    {
      label: "Sécurité",
      icon: ShieldCheck,
      width: "94%",
    },
  ];

  return (
    <VisualFrame color={color}>
      <div
        className="
          mx-auto w-full max-w-[400px]
          rounded-2xl border border-white/10
          bg-[#252525] p-6 sm:p-8
          shadow-[0_25px_60px_rgba(0,0,0,0.35)]
        "
      >
        {/* En-tête */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm text-gray-400">
              Suivi technique
            </p>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              État du site
            </h3>
          </div>

          <ShieldCheck
            size={34}
            strokeWidth={1.8}
            className="shrink-0"
            style={{ color }}
          />
        </div>

        {/* Encadré de suivi */}
        <div
          className="
            mb-8 flex items-center gap-4
            rounded-xl p-4 sm:p-5
          "
          style={{
            border: `1px solid ${color}33`,
            backgroundColor: `${color}0D`,
          }}
        >
          <CheckCircle2
            size={28}
            className="shrink-0"
            style={{ color }}
          />

          <div>
            <p className="text-base font-semibold text-white">
              Suivi régulier
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Fiabilité et évolutions
            </p>
          </div>
        </div>

        {/* Indicateurs */}
        <div className="space-y-7">
          {indicators.map(({ label, icon: Icon, width }) => (
            <div key={label}>
              <div className="mb-3 flex items-center gap-3">
                <Icon
                  size={19}
                  strokeWidth={1.8}
                  style={{ color }}
                />

                <span className="text-sm font-medium text-gray-300 sm:text-base">
                  {label}
                </span>
              </div>

              {/* Barre de progression décorative */}
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full"
                  style={{
                    width,
                    background: `linear-gradient(
                      90deg,
                      ${COLORS.blue},
                      ${color}
                    )`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

// ─────────────────────────────────────────────
// Association des visuels
// ─────────────────────────────────────────────

const visuals = {
  website: WebsiteVisual,
  application: ApplicationVisual,
  maintenance: MaintenanceVisual,
};

// ─────────────────────────────────────────────
// Séparateur technologique
// ─────────────────────────────────────────────

function ServiceSeparator({ from, to }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-12 items-center justify-center"
    >
      {/* Halo diffus */}
      <div
        className="
          pointer-events-none absolute
          h-8 w-3/4 max-w-2xl
          rounded-full opacity-15 blur-xl
        "
        style={{
          background: `linear-gradient(90deg, ${from}, ${to})`,
        }}
      />

      {/* Ligne dégradée */}
      <div
        className="relative h-[3px] w-full max-w-3xl"
        style={{
          background: `linear-gradient(
            90deg,
            ${from}00 0%,
            ${from}60 25%,
            ${from} 45%,
            ${to} 55%,
            ${to}60 75%,
            ${to}00 100%
          )`,
          clipPath:
            "polygon(0 50%, 35% 25%, 50% 0, 65% 25%, 100% 50%, 65% 75%, 50% 100%, 35% 75%)",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// Titre de prestation
// ─────────────────────────────────────────────

function ServiceTitle({ title }) {
  return (
    <h2
      className="
        max-w-xl text-2xl font-bold
        leading-tight tracking-tight text-white
        sm:text-3xl lg:text-4xl
      "
    >
      {title}
    </h2>
  );
}

// ─────────────────────────────────────────────
// Composant principal
// ─────────────────────────────────────────────

export default function ServicesShowcase() {
  return (
    <Section
      id="services-showcase"
      bgColor="#222222"
      aria-label="Mes prestations"
    >
      <SectionWrapper>
        {services.map((service, index) => {
          const Visual = visuals[service.visual];
          const reversed = index % 2 !== 0;
          const nextService = services[index + 1];

          return (
            <Fragment key={service.number}>
              <article
                className="
                  grid items-center gap-10
                  lg:grid-cols-2 lg:gap-16
                "
              >
                {/* Texte */}
                <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                  {/* Numéro et catégorie */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-sm font-bold text-[#5AC8FA]">
                      {service.number}
                    </span>

                    <span className="h-px w-8 bg-[#5AC8FA]" />

                    <span className="text-xs font-semibold tracking-[0.15em] text-[#5AC8FA]">
                      {service.category}
                    </span>
                  </div>

                  {/* Titre */}
                  <ServiceTitle title={service.title} />

                  {/* Description */}
                  <p
                    className="
                      mt-6 max-w-xl
                      text-base leading-relaxed
                      text-gray-300 sm:text-lg
                    "
                  >
                    {service.description}
                  </p>

                  {/* Bénéfices */}
                  <ul className="mt-7 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="
                          flex items-start gap-3
                          text-sm text-gray-300
                          sm:text-base
                        "
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-[#007AFF]"
                          aria-hidden="true"
                        />

                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="
                      group mt-9 inline-flex items-center gap-2
                      border-b border-[#5AC8FA]/50 pb-1
                      text-base font-semibold text-[#5AC8FA]
                      transition-colors duration-300
                      hover:border-white/60 hover:text-white
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#5AC8FA]
                    "
                  >
                    {service.cta}

                    <ArrowUpRight
                      size={19}
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                      aria-hidden="true"
                    />
                  </Link>
                </div>

                {/* Illustration */}
                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <Visual color={service.color} />
                </div>
              </article>

              {/* Séparateur */}
              {nextService && (
                <div className="my-14 sm:my-20 lg:my-24">
                  <ServiceSeparator
                    from={service.color}
                    to={nextService.color}
                  />
                </div>
              )}
            </Fragment>
          );
        })}
      </SectionWrapper>
    </Section>
  );
}