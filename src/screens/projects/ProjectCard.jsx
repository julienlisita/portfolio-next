// src/components/portfolio/ProjectCard.jsx

'use client';

import { motion } from "framer-motion";
import Button from "../../components/UI/Button";

export default function ProjectCard({
  slug,
  cardImage,
  title,
  description,
  technos,
  clientType,
  category,
}) {
  const categoryLabel =
    category === "vitrines"
      ? "Site vitrine"
      : category === "web"
      ? "Sur mesure"
      : null;

  return (
    <motion.div
      initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
      whileInView={{
        boxShadow:
          "0px 0px 18px rgba(155, 89, 182, 0.6), 0px 0px 18px rgba(0, 122, 255, 0.6)",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{
        boxShadow: { duration: 1.6, ease: "easeOut", delay: 0.6 },
        scale: { duration: 0.3, ease: "easeOut" },
      }}
      viewport={{ once: true }}
      className="w-full rounded-xl bg-[#2a2a2a] overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={cardImage}
          alt={`Aperçu du projet ${title}`}
          className="h-48 w-full object-cover"
          loading="lazy"
          decoding="async"
        />

        {/* Badge catégorie (optionnel) */}
        {categoryLabel && (
          <span className="absolute top-3 left-3 text-xs bg-black/60 text-white px-2 py-1 rounded-md">
            {categoryLabel}
          </span>
        )}
      </div>

      {/* Contenu */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg text-white font-semibold mb-1">
          {title}
        </h3>

        {/* Ligne clientType (optionnelle, très utile) */}
        {clientType && (
          <p className="text-xs text-gray-400 mb-2">{clientType}</p>
        )}

        <p className="text-sm sm:text-base text-gray-200 mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        {technos?.length > 0 && (
          <div className="hidden sm:flex flex-wrap gap-2 pb-3">
            {technos.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-[#1f1f1f] text-gray-300 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Bouton */}
        <div className="mt-4 flex justify-center">
          <Button
           to={`/realisations/${slug}`} variant="text">
            Voir le projet ›
          </Button>
        </div>
      </div>
    </motion.div>
  );
}