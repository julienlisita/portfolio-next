"use client";

// src/components/services/website/WebsiteFeatures.jsx

import { motion, useReducedMotion } from "motion/react";

import Section from "@/components/layout/Section";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/layout/SectionHeading";

import {
  Check,
  CheckCircle2,
  Globe2,
  LayoutTemplate,
  Mail,
  Monitor,
  Palette,
  Search,
  Smartphone,
  Tablet,
} from "lucide-react";

// ─────────────────────────────────────────────
// Illustrations
// ─────────────────────────────────────────────

function DesignVisual() {
  return (
    <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#1C1C1C] p-5 sm:p-6">
      {/* Mini navigateur */}
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#292929]">
        <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
          <span className="h-2 w-2 rounded-full bg-[#9B59B6]" />
          <span className="h-2 w-2 rounded-full bg-[#007AFF]" />
          <span className="h-2 w-2 rounded-full bg-[#5AC8FA]" />
        </div>

        <div className="p-4">
          <div className="mb-5 flex items-center justify-between">
            <div className="h-3 w-20 rounded bg-white/70" />

            <div className="flex gap-2">
              <div className="h-2 w-8 rounded bg-white/20" />
              <div className="h-2 w-8 rounded bg-white/20" />
              <div className="h-2 w-8 rounded bg-white/20" />
            </div>
          </div>

          <div className="grid grid-cols-[1fr_0.8fr] items-center gap-4">
            <div>
              <div className="h-3 w-4/5 rounded bg-white/80" />
              <div className="mt-2 h-3 w-3/5 rounded bg-white/60" />

              <div className="mt-4 h-2 w-full rounded bg-white/15" />
              <div className="mt-2 h-2 w-4/5 rounded bg-white/15" />

              <div className="mt-5 h-7 w-24 rounded-md bg-[#5AC8FA]" />
            </div>

            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#5AC8FA]/40 via-[#007AFF]/20 to-[#9B59B6]/30" />
          </div>
        </div>
      </div>

      {/* Palette */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <span className="text-xs text-gray-400">
          Une identité qui vous ressemble
        </span>

        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-[#5AC8FA]" />
          <span className="h-5 w-5 rounded-full bg-[#007AFF]" />
          <span className="h-5 w-5 rounded-full bg-[#9B59B6]" />
          <span className="h-5 w-5 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}

function StructureVisual() {
  return (
    <div className="mt-7 flex flex-col items-center">
      <div className="rounded-lg border border-[#5AC8FA]/40 bg-[#5AC8FA]/10 px-5 py-3 text-sm font-medium text-white">
        Accueil
      </div>

      <div className="h-6 w-px bg-[#5AC8FA]/40" />
      <div className="h-px w-[70%] bg-[#5AC8FA]/40" />

      <div className="flex w-[70%] justify-between">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="h-5 w-px bg-[#5AC8FA]/40"
          />
        ))}
      </div>

      <div className="grid w-full grid-cols-3 gap-2 text-center">
        {["Services", "À propos", "Contact"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/10 bg-[#1C1C1C] px-2 py-3 text-[11px] text-gray-300 sm:text-xs"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactVisual() {
  return (
    <div className="mt-7 rounded-xl border border-white/10 bg-[#1C1C1C] p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium text-white">
          Demande de contact
        </span>

        <Mail size={15} className="text-[#007AFF]" />
      </div>

      <div className="space-y-2.5">
        <div className="h-8 rounded-md border border-white/10 bg-[#292929]" />
        <div className="h-8 rounded-md border border-white/10 bg-[#292929]" />
        <div className="h-14 rounded-md border border-white/10 bg-[#292929]" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
          <CheckCircle2 size={13} className="text-[#007AFF]" />
          Prise de contact simplifiée
        </div>

        <div className="rounded-md bg-[#5AC8FA] px-3 py-2 text-[11px] font-semibold text-[#1C1C1C]">
          Envoyer
        </div>
      </div>
    </div>
  );
}

function SEOVisual() {
  return (
    <div className="mt-7 rounded-xl border border-white/10 bg-[#1C1C1C] p-4">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <Search size={15} className="text-gray-400" />

        <span className="text-xs text-gray-400">
          Recherche de services
        </span>
      </div>

      <div className="pt-4">
        <div className="flex items-center gap-2 text-[11px] text-gray-500">
          <Globe2 size={13} />
          votre-entreprise.fr
        </div>

        <div className="mt-2 h-3 w-4/5 rounded bg-[#5AC8FA]/80" />

        <div className="mt-3 space-y-2">
          <div className="h-2 w-full rounded bg-white/15" />
          <div className="h-2 w-3/4 rounded bg-white/15" />
        </div>
      </div>
    </div>
  );
}

function ResponsiveVisual() {
  const devices = [
    { icon: Monitor, label: "Desktop" },
    { icon: Tablet, label: "Tablette" },
    { icon: Smartphone, label: "Mobile" },
  ];

  return (
    <div className="mt-7 flex items-end justify-center gap-5 sm:gap-8">
      {devices.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#1C1C1C]">
            <Icon size={24} className="text-[#007AFF]" />
          </div>

          <span className="text-[11px] text-gray-400">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function LaunchVisual() {
  return (
    <div className="mt-7 rounded-xl border border-white/10 bg-[#1C1C1C] p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs text-gray-400">
          Mise en ligne du site
        </span>

        <span className="flex items-center gap-1.5 rounded-full bg-[#5AC8FA]/10 px-3 py-1 text-[11px] text-[#5AC8FA]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5AC8FA]" />
          En ligne
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5AC8FA]/10">
          <Globe2 size={20} className="text-[#007AFF]" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">
            votre-entreprise.fr
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Accessible à vos visiteurs
          </p>
        </div>

        <Check
          size={18}
          className="ml-auto shrink-0 text-[#5AC8FA]"
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Composant de bloc
// ─────────────────────────────────────────────

function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
  className = "",
  index,
  reducedMotion,
}) {
  return (
    <motion.article
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 30 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: reducedMotion ? 0 : index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group relative overflow-hidden
        rounded-2xl border border-white/[0.07]
        bg-[#292929] p-6
        transition-colors duration-300
        hover:border-[#5AC8FA]/25
        sm:p-7
        ${className}
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#5AC8FA]/15 bg-[#5AC8FA]/[0.07]">
          <Icon size={21} className="text-[#007AFF]" />
        </div>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-300">
        {description}
      </p>

      {children}
    </motion.article>
  );
}

// ─────────────────────────────────────────────
// Section principale
// ─────────────────────────────────────────────

export default function WebsiteFeatures() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="website-features"
      labelledBy="website-features-title"
      bgColor="#222222"
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-8 max-w-3xl sm:mb-10 lg:mb-12"
        >
          <SectionHeading
            id="website-features-title"
            eyebrow="VOTRE SITE, DE A À Z"
            title="Ce qui est inclus dans votre site."
            description="De la conception à la mise en ligne, je prends en charge les éléments essentiels pour créer un site professionnel, fonctionnel et adapté à votre activité."
          />
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Design : grand bloc */}
          <FeatureCard
            icon={Palette}
            title="Design personnalisé"
            description="Une interface soignée, pensée pour refléter votre identité et mettre en valeur votre activité."
            index={0}
            reducedMotion={reducedMotion}
            className="md:col-span-2"
          >
            <DesignVisual />
          </FeatureCard>

          {/* Structure */}
          <FeatureCard
            icon={LayoutTemplate}
            title="Structure claire"
            description="Des pages organisées pour guider vos visiteurs et rendre vos informations accessibles."
            index={1}
            reducedMotion={reducedMotion}
          >
            <StructureVisual />
          </FeatureCard>

          {/* Contact */}
          <FeatureCard
            icon={Mail}
            title="Formulaire de contact"
            description="Un moyen simple et fiable pour recevoir les demandes de vos futurs clients."
            index={2}
            reducedMotion={reducedMotion}
          >
            <ContactVisual />
          </FeatureCard>

          {/* SEO */}
          <FeatureCard
            icon={Search}
            title="Référencement naturel"
            description="Une base technique optimisée pour aider les moteurs de recherche à comprendre votre site."
            index={3}
            reducedMotion={reducedMotion}
          >
            <SEOVisual />
          </FeatureCard>

          {/* Responsive */}
          <FeatureCard
            icon={Monitor}
            title="Adapté à tous les écrans"
            description="Un affichage optimisé pour les ordinateurs, les tablettes et les smartphones."
            index={4}
            reducedMotion={reducedMotion}
          >
            <ResponsiveVisual />
          </FeatureCard>

          {/* Mise en ligne : bloc large */}
          <FeatureCard
            icon={Globe2}
            title="Mise en ligne"
            description="Je m'occupe de la publication de votre site et vous accompagne dans sa prise en main."
            index={5}
            reducedMotion={reducedMotion}
            className="md:col-span-2 lg:col-span-3"
          >
            <LaunchVisual />
          </FeatureCard>
        </div>
      </SectionWrapper>
    </Section>
  );
}