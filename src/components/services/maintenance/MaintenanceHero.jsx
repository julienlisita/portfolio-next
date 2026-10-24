// src/components/services/maintenance/MaintenanceHero.jsx

import PageHero from "@/components/layout/PageHero";
import MaintenanceMockup from "./MaintenanceMockup";

export default function MaintenanceHero() {
  return (
    <PageHero
      id="maintenance-hero"
      eyebrow="MAINTENANCE & ACCOMPAGNEMENT"
      title="Votre site reste entre de bonnes mains."
      description="Mises à jour, corrections, suivi technique et évolutions : je vous accompagne pour garder un site fiable, performant et adapté à vos besoins."
      caption="Exemple illustratif d'un espace de suivi technique"
    >
      <MaintenanceMockup />
    </PageHero>
  );
}