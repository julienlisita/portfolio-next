// src/components/services/ServicesOffers.jsx

import Section from "../layout/Section";
import ServiceCard from "./ServiceCard";
import { Monitor, Layers, LifeBuoy } from "lucide-react";

export default function ServicesOffers() {
  return (
    <Section title="Comment je peux vous aider">
      <p className="text-base sm:text-lg text-gray-300 mb-6">
       Selon votre besoin, je peux vous aider à attirer des clients, mettre en place des outils de gestion ou assurer le suivi technique de votre site.
      </p>

      <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          variant="page"
          icon={<Monitor />}
          title="Un site clair pour attirer des clients"
          subtitle="Site vitrine & visibilité"
          description="Un site professionnel pour présenter votre activité, inspirer confiance et guider vos visiteurs vers une prise de contact, une demande de devis ou une candidature."
          color={["#5AC8FA", "#007AFF"]}
          link="/services/creation-site-internet"
        />

        <ServiceCard
          variant="page"
          icon={<Layers />}
          title="Des outils pour gagner du temps"
          subtitle="Espace admin, réservation, outils métier"
          description="Des outils connectés à votre site pour gérer des créneaux, contenus, demandes ou espaces clients, selon votre activité."
          color={["#007AFF", "#9B59B6"]}
          link="/services/creation-site-internet-fonctionnalites-sur-mesure"
        />

        <ServiceCard
          variant="page"
          icon={<LifeBuoy />}
          title="Un suivi pour rester fiable"
          subtitle="Maintenance, sécurité, améliorations"
          description="Un accompagnement après la mise en ligne pour garder votre site fiable, rapide et à jour, avec des ajustements possibles selon vos besoins."
          color={["#9B59B6", "#FF66B2"]}
          link="/services/suivi-et-evolutions"
        />
      </div>
    </Section>
  );
}