// src/screens/services/WebsiteCreationScreen.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";

import WebsiteCreationIntro from "../../components/services/websiteCreation/WebsiteCreationIntro";
import WebsiteCreationAudience from "../../components/services/websiteCreation/WebsiteCreationAudience";
import WebsiteCreationDeliverables from "../../components/services/websiteCreation/WebsiteCreationDeliverables";
import WebsiteCreationWhyAndSeo from "../../components/services/websiteCreation/WebsiteCreationWhyAndSeo";
import PageTitle from "../../components/UI/PageTitle";
import { websiteCreationFaq } from "../../data/faqs";

export default function WebsiteCreationScreen() {

  return (
    <>
      <PageTitle>Création de site internet</PageTitle>
      <WebsiteCreationIntro />
      <WebsiteCreationAudience />
      <WebsiteCreationDeliverables />
      <WebsiteCreationWhyAndSeo />

      <FaqSection title="FAQ — Création de site internet" faq={websiteCreationFaq} ariaLabelledby="faq-vitrine-title" />

      <CtaFinal
        title="Créons un site utile pour votre activité"
        tagline="Un site pensé pour rassurer vos visiteurs et faciliter la prise de contact."
        primary={{ href: "/contact", text: "Discuter du projet" }}
        secondary={{ href: "/tarifs", text: "Voir les tarifs" }}
      />
    </>
  );
}
