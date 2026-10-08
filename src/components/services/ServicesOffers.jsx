// src/components/services/ServicesOffers.jsx

import Section from "../layout/Section";
import ServiceCard from "./ServiceCard";
import { Monitor, Layers, LifeBuoy } from "lucide-react";

export default function ServicesOffers() {
  return (
    <Section title="Comment je peux vous aider">
      <p className="text-base sm:text-lg text-gray-300 mb-6">
       Selon votre besoin, je vous accompagne de la création d’un site professionnel clair et rapide jusqu’au développement d’applications et d’outils sur mesure pour simplifier votre activité.
      </p>

      <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          variant="page"
          icon={<Monitor />}
          title="Un site clair pour attirer des clients"
          subtitle="Site vitrine, performance & référencement"
          description="Un site professionnel, rapide et optimisé pour présenter clairement votre activité, inspirer confiance et améliorer votre visibilité sur les moteurs de recherche."
          color={["#5AC8FA", "#007AFF"]}
          link="/services/creation-site-internet"
        />

        <ServiceCard
          variant="page"
          icon={<Layers />}
          title="Des outils pour gagner du temps"
          subtitle="Applications web & outils métier"
          description="Des applications et fonctionnalités sur mesure pour simplifier votre organisation : réservation, espace client, back-office, gestion interne, tableau de bord ou processus spécifique."
          color={["#007AFF", "#4A64D8"]}
          link="/services/creation-site-internet-fonctionnalites-sur-mesure"
        />

        <ServiceCard
          variant="page"
          icon={<LifeBuoy />}
          title="Un suivi pour rester fiable"
          subtitle="Maintenance & évolutions"
          description="Un accompagnement pour maintenir votre site ou application fiable, sécurisé et à jour, corriger les problèmes et le faire évoluer selon vos besoins."
          color={["#4A64D8", "#9B59B6"]}
          link="/services/suivi-et-evolutions"
        />
      </div>
    </Section>
  );
}