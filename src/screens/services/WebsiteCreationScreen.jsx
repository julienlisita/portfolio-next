// src/screens/services/WebsiteCreationScreen.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";
import PageTitle from "../../components/UI/PageTitle";
import { websiteCreationFaq } from "../../data/faqs";
import WebsiteHero from "@/components/services/websiteCreation/WebsiteHero";
import WebsiteResponsive from "@/components/services/websiteCreation/WebsiteResponsive";
import WebsiteBenefits from "@/components/services/websiteCreation/WebsiteBenefits";
import WebsiteFeatures from "@/components/services/websiteCreation/WebsiteFeatures";
import WebsiteQuality from "@/components/services/websiteCreation/WebsiteQuality";

export default function WebsiteCreationScreen() {

  return (
    <>
      <WebsiteHero />
      <WebsiteBenefits />
      <WebsiteResponsive />
      <WebsiteFeatures />
      <WebsiteQuality />
      <FaqSection title="FAQ — Création de site internet" faq={websiteCreationFaq} ariaLabelledby="faq-vitrine-title" />

      <CtaFinal
        title="Découvrez des projets concrets"
        tagline="Découvrez des sites et projets réalisés pour voir comment ces solutions prennent forme."
        primary={{ href: "/realisations", text: "Voir mes réalisations" }}
        secondary={{ href: "/reservations", text: "Réserver un échange" }}
      />
    </>
  );
}
