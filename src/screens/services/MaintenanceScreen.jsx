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

      <FaqSection
        id="maintenance-faq"
        title="Vos questions sur la maintenance."
        description="Intervention ponctuelle, suivi régulier, tarifs ou maintenance d'un site existant : retrouvez les réponses aux questions les plus fréquentes."
        faq={maintenanceFaq}
      />

      <CtaFinal
        title="Besoin d'un coup de main pour votre site ?"
        tagline="Un problème à résoudre, une modification à prévoir ou simplement besoin d'un accompagnement technique ? Parlons de votre site et trouvons une solution adaptée."
        primary={{
          href: "/contact",
          text: "Discuter de mon besoin",
        }}
      />
    </>
  );
}
