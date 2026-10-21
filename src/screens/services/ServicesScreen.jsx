// src/screens/services/ServicesScreen.jsx

import PageTitle from "../../components/UI/PageTitle";
import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";

import ServicesIntro from "../../components/services/ServicesIntro";
import ServicesMethod from "../../components/services/ServicesMethod";
import { servicesFaq } from "../../data/faqs";
import ServicesShowcase from "@/components/services/ServicesShowcase";

export default function ServicesScreen() {

  return (
    <>
      <PageTitle>Mes services</PageTitle>

      <ServicesIntro />
      <ServicesShowcase />
      <ServicesMethod />

      <FaqSection title="FAQ — Services" faq={servicesFaq} ariaLabelledby="faq-services" />

      <CtaFinal
        title="Découvrez mes réalisations"
        tagline="Découvrez des projets concrets, du site professionnel aux applications et outils web sur mesure."
        primary={{ href: "/realisations", text: "Voir mes réalisations" }}
        secondary={{ href: "/reservations", text: "Réserver un échange" }}
      />
    </>
  );
}
