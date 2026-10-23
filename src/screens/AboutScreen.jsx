// src/screens/AboutScreen.jsx

import Image from "next/image";

import PageHero from "../components/layout/PageHero";

import AboutIntro from "../components/about/AboutIntro";
import AboutJourney from "../components/about/AboutJourney";
import AboutMethod from "../components/about/AboutMethod";
import AboutRole from "../components/about/AboutRole";

import CtaFinal from "../components/patterns/CtaFinal";
import FaqSection from "../components/patterns/FaqSection";

import { aboutFaq } from "../data/faqs";

export default function AboutScreen() {
  return (
    <>
      <PageHero
        id="about-hero"
        eyebrow="À PROPOS"
        title="Développeur web freelance"
        description="Je conçois des sites et applications web adaptés aux besoins des indépendants et des entreprises, avec une approche fondée sur la clarté, la fiabilité et l'accompagnement."
      >
        <div className="flex justify-center">
          <Image
            src="/assets/images/profile-pic.avif"
            alt="Portrait de Julien Lisita, développeur web freelance"
            width={208}
            height={208}
            priority
            sizes="(min-width: 768px) 208px, (min-width: 640px) 160px, 128px"
            className="
              h-32 w-32
              rounded-full object-cover shadow-lg
              sm:h-40 sm:w-40
              md:h-52 md:w-52
            "
          />
        </div>
      </PageHero>

      <AboutIntro />

      <AboutRole />

      <AboutJourney />

      <AboutMethod />

      <FaqSection
        id="about-faq"
        title="FAQ — À propos"
        faq={aboutFaq}
        ariaLabelledby="faq-about-title"
      />

      <CtaFinal
        title="Parlons de votre projet"
        tagline="Une idée ou un besoin à concrétiser ? Choisissez la façon la plus simple pour en discuter."
        primary={{
          href: "/contact",
          text: "M'envoyer un message",
        }}
        secondary={{
          href: "/reservations",
          text: "Réserver un échange",
        }}
      />
    </>
  );
}