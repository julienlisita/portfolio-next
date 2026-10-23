// src/screens/HowIWorkScreen.jsx

import Image from "next/image";

import PageHero from "../components/layout/PageHero";

import HowIWorkMethod from "../components/howIWork/HowIWorkMethod";
import HowIWorkNoCodeComparison from "../components/howIWork/HowIWorkNoCodeComparison";
import HowIWorkOutcomes from "../components/howIWork/HowIWorkOutcomes";
import HowIWorkMockups from "../components/howIWork/HowIWorkMockups";
import HowIWorkTechStack from "../components/howIWork/HowIWorkTechStack";

import FaqSection from "../components/patterns/FaqSection";
import CtaFinal from "../components/patterns/CtaFinal";

import { howIWorkFaq } from "../data/faqs";

export default function HowIWorkScreen() {
  return (
    <>
      <PageHero
        id="how-i-work-hero"
        eyebrow="MÉTHODE & EXPERTISE"
        title="Ma méthode & mes choix techniques"
        description="De l’échange initial à la mise en ligne, je vous explique comment je travaille et en quoi mes choix techniques permettent d’obtenir un site fiable, performant et évolutif."
      >
        <div className="flex justify-center">
          <Image
            src="/assets/images/me-working.avif"
            alt="Julien Lisita en train de travailler"
            width={520}
            height={320}
            priority
            sizes="(max-width: 640px) 100vw, 520px"
            className="h-auto w-full max-w-[520px] rounded-xl object-cover shadow-lg"
          />
        </div>
      </PageHero>

      <HowIWorkMethod />

      <HowIWorkNoCodeComparison />

      <HowIWorkOutcomes />

      <HowIWorkMockups />

      <HowIWorkTechStack />

      <FaqSection
        id="how-i-work-faq"
        title="FAQ — Méthode"
        faq={howIWorkFaq}
        ariaLabelledby="faq-skills-title"
      />

      <CtaFinal
        title="Quel budget pour votre projet ?"
        tagline="Découvrez mes tarifs et quelques exemples pour mieux situer le budget correspondant à votre besoin."
        primary={{
          href: "/tarifs",
          text: "Voir les tarifs",
        }}
        secondary={{
          href: "/reservations",
          text: "Réserver un échange",
        }}
      />
    </>
  );
}