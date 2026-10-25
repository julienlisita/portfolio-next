"use client";

// src/components/home/ServicesPreview.jsx

import { motion, useReducedMotion } from "motion/react";

import ServiceCard from "@/components/services/ServiceCard";
import HomeSectionWrapper from "./HomeSectionWrapper";

const services = [
  {
    title: "Un site clair pour attirer des clients",
    subtitle: "SITE VITRINE",
    description:
      "Un site professionnel, rapide et optimisé pour présenter votre activité, inspirer confiance et améliorer votre visibilité sur Google.",
    theme: "website",
    link: "/services/creation-site-internet",
  },
  {
    title: "Des outils pour gagner du temps",
    subtitle: "APPLICATIONS & OUTILS SUR MESURE",
    description:
      "Des solutions sur mesure pour simplifier votre organisation : réservation, espace client, back-office, gestion interne ou processus spécifique.",
    theme: "application",
    link: "/services/creation-site-internet-fonctionnalites-sur-mesure",
  },
  {
    title: "Un suivi pour rester fiable",
    subtitle: "MAINTENANCE & ACCOMPAGNEMENT",
    description:
      "Un accompagnement pour maintenir votre site ou application fiable, sécurisé et à jour, et le faire évoluer selon vos besoins.",
    theme: "maintenance",
    link: "/services/suivi-et-evolutions",
  },
];

export default function ServicesPreview() {
  const reducedMotion = useReducedMotion();

  return (
    <HomeSectionWrapper
      id="service"
      eyebrow="MES PRESTATIONS"
      title="Comment je peux vous aider"
      description="Selon votre besoin, je vous accompagne de la création d'un site professionnel clair et rapide jusqu'au développement d'applications et d'outils sur mesure pour simplifier votre activité."
      link={{
        href: "/services",
        text: "Voir tous les services",
      }}
    >
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.theme}
            className="h-full min-w-0"
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.6,
              delay: reducedMotion ? 0 : index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ServiceCard
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              link={service.link}
              theme={service.theme}
            />
          </motion.div>
        ))}
      </div>
    </HomeSectionWrapper>
  );
}