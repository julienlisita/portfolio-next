// src/screens/services/MaintenanceScreen.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";
import PageTitle from "../../components/UI/PageTitle";
import MaintenanceIntro from "../../components/services/maintenance/MaintenanceIntro";
import MaintenanceIncluded from "../../components/services/maintenance/MaintenanceIncluded";
import MaintenanceTerms from "../../components/services/maintenance/MaintenanceTerms";
import MaintenanceOutro from "../../components/services/maintenance/MaintenanceOutro";
import { maintenanceFaq } from "../../data/faqs";

export default function MaintenanceScreen() {

  return (
    <>
      <PageTitle>Suivi & maintenance du site</PageTitle>
      <MaintenanceIntro />
      <MaintenanceIncluded />
      <MaintenanceTerms />
      <MaintenanceOutro />

      <FaqSection title="FAQ — Suivi & maintenance" faq={maintenanceFaq} ariaLabelledby="faq-support-title" />

      <CtaFinal
        title="Gardons votre site fiable dans la durée"
        tagline="Corrections, suivi et petites évolutions pour éviter les blocages et faire avancer votre site avec votre activité."
        primary={{ href: "/contact", text: "Demander un suivi" }}
        secondary={{ href: "/tarifs", text: "Voir les tarifs" }}
      />
    </>
  );
}
