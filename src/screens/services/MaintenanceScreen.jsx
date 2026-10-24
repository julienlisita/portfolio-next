// src/screens/services/MaintenanceScreen.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";
import MaintenanceIncluded from "../../components/services/maintenance/MaintenanceIncluded";
import MaintenanceTerms from "../../components/services/maintenance/MaintenanceTerms";
import MaintenanceOutro from "../../components/services/maintenance/MaintenanceOutro";
import { maintenanceFaq } from "../../data/faqs";
import MaintenanceHero from "@/components/services/maintenance/MaintenanceHero";
import MaintenanceBenefits from "@/components/services/maintenance/MaintenanceBenefits";
import MaintenanceServices from "@/components/services/maintenance/MaintenanceServices";
import MaintenanceSupport from "@/components/services/maintenance/MaintenanceSupport";

export default function MaintenanceScreen() {

  return (
    <>
      <MaintenanceHero />

      <MaintenanceBenefits />

      <MaintenanceServices />

      <MaintenanceSupport />

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
