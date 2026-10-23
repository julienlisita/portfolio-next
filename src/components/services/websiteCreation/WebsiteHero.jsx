// src/components/services/website/WebsiteHero.jsx

import PageHero from "@/components/layout/PageHero";
import WebsiteMockup from "./WebsiteMockup";

export default function WebsiteHero() {
  return (
    <PageHero
      id="website-hero"
      eyebrow="CRÉATION DE SITE INTERNET"
      title="Un site internet à la hauteur de votre activité."
      description="Artisan, indépendant ou entreprise, je crée des sites professionnels, rapides et adaptés à votre identité pour valoriser votre savoir-faire et faciliter les prises de contact."
      caption={
        <>
          <span>Une réalisation concrète</span>
          <span className="text-gray-600">—</span>
          <span className="text-gray-300">
            Compagnie Care & Services
          </span>
        </>
      }
    >
      <WebsiteMockup />
    </PageHero>
  );
}