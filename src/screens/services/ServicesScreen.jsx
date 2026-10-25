// src/screens/services/ServicesScreen.jsx

import PageHero from "@/components/layout/PageHero";

import ServicesShowcase from "@/components/services/ServicesShowcase";
import ServicesMethod from "@/components/services/ServicesMethod";

import FaqSection from "@/components/patterns/FaqSection";
import CtaFinal from "@/components/patterns/CtaFinal";

import { servicesFaq } from "@/data/faqs";

export default function ServicesScreen() {
  return (
    <>
      <PageHero
        id="services-hero"
        eyebrow="MES PRESTATIONS"
        title="Mes services"
        description="Je vous aide à créer un site web clair, utile et évolutif, pensé pour développer votre activité, générer des demandes et simplifier votre organisation."
      />

      <ServicesShowcase />

      <ServicesMethod />

      <FaqSection
        id="faq-services"
        title="FAQ — Services"
        faq={servicesFaq}
        ariaLabelledby="faq-services-title"
      />

      <CtaFinal
        title="Découvrez mes réalisations"
        tagline="Découvrez des projets concrets, du site professionnel aux applications et outils web sur mesure."
        primary={{
          href: "/realisations",
          text: "Voir mes réalisations",
        }}
        secondary={{
          href: "/reservations",
          text: "Réserver un échange",
        }}
      />
    </>
  );
}