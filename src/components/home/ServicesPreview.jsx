// src/components/home/ServicesPreview.jsx

'use client';

import { Monitor, Layers, LifeBuoy } from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import HomeSectionWrapper from "./HomeSectionWrapper";
import { motion } from "framer-motion";

export default function ServicesPreview() {
  const services = [
    {
      title: "Un site clair pour attirer des clients",
      subtitle: "Site vitrine, performance & référencement",
      icon: <Monitor />,
      description:
        "Un site professionnel, rapide et optimisé pour présenter votre activité, inspirer confiance et améliorer votre visibilité sur Google.",
      color: ["#5AC8FA", "#007AFF"],
      link: "/services/creation-site-internet",
    },
    {
      title: "Des outils pour gagner du temps",
      subtitle: "Applications web & outils métier",
      icon: <Layers />,
      description:
        "Des solutions sur mesure pour simplifier votre organisation : réservation, espace client, back-office, gestion interne ou processus spécifique.",
      color: ["#007AFF", "#4A64D8"],
      link: "/services/creation-site-internet-fonctionnalites-sur-mesure",
    },
    {
      title: "Un suivi pour rester fiable", 
      subtitle: "Maintenance & évolutions",
      icon: <LifeBuoy />,
      description:
        "Un accompagnement pour maintenir votre site ou application fiable, sécurisé et à jour, et le faire évoluer selon vos besoins.",
      color: ["#4A64D8", "#9B59B6"],
      link: "/services/suivi-et-evolutions",
    },
  ];

  return (
    <HomeSectionWrapper
      id="service"
      title="Comment je peux vous aider"
      link={{ href: "/services", text: "Voir les services ›" }}
    >
      <p className="text-base sm:text-lg lg:text-xl">
         Selon votre besoin, je vous accompagne de la création d’un site professionnel clair et rapide jusqu’au développement d’applications et d’outils sur mesure pour simplifier votre activité.
      </p>

      <div className="w-full grid gap-6 sm:gap-7 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="overflow-x-clip"
            initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.15 + i * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </HomeSectionWrapper>
  );
}