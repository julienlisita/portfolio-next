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
        tagline="Découvrez les formules de suivi et les tarifs pour choisir l’accompagnement adapté à votre site."
        primary={{ href: "/tarifs", text: "Voir les tarifs" }}
        secondary={{ href: "/reservations", text: "Réserver un échange" }}
      />
    </>
  );
}
