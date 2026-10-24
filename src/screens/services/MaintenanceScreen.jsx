// src/screens/services/MaintenanceScreen.jsx

import FaqSection from "../../components/patterns/FaqSection";
import CtaFinal from "../../components/patterns/CtaFinal";
import { maintenanceFaq } from "../../data/faqs";
import MaintenanceHero from "@/components/services/maintenance/MaintenanceHero";
import MaintenanceBenefits from "@/components/services/maintenance/MaintenanceBenefits";
import MaintenanceServices from "@/components/services/maintenance/MaintenanceServices";
import MaintenanceSupport from "@/components/services/maintenance/MaintenanceSupport";
import MaintenanceProcess from "@/components/services/maintenance/MaintenanceProcess";

export default function MaintenanceScreen() {

  return (
    <>
      <MaintenanceHero />

      <MaintenanceBenefits />

      <MaintenanceServices />

      <MaintenanceSupport />

      <MaintenanceProcess />

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
