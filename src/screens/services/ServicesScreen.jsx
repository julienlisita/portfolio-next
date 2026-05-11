// src/screens/services/ServicesScreen.jsx

import PageTitle from "../../components/UI/PageTitle";
import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";

import ServicesIntro from "../../components/services/ServicesIntro";
import ServicesOffers from "../../components/services/ServicesOffers";
import ServicesMethod from "../../components/services/ServicesMethod";
import { servicesFaq } from "../../data/faqs";

export default function ServicesScreen() {

  return (
    <>
      <PageTitle>Mes services</PageTitle>

      <ServicesIntro />
      <ServicesOffers />
      <ServicesMethod />

      <FaqSection title="FAQ — Services" faq={servicesFaq} ariaLabelledby="faq-services" />

      <CtaFinal
        title="Discutons de votre besoin"
        tagline="Vous avez un projet, un site à améliorer ou une fonctionnalité à ajouter ? Échangeons simplement pour voir quelle solution serait la plus utile."
        primary={{ href: "/contact", text: "Discuter du projet" }}
        secondary={{ href: "/realisations", text: "Voir des réalisations" }}
      />
    </>
  );
}
