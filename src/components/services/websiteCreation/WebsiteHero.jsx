// src/components/services/website/WebsiteHero.jsx

import PageHero from "@/components/layout/PageHero";
import WebsiteMockup from "./WebsiteMockup";

export default function WebsiteHero() {
  return (
    <PageHero
      id="website-hero"
      // eyebrow="CRÉATION DE SITE INTERNET"
      // title="Un site internet à la hauteur de votre activité."
      title="Création de site internet"
      description="Artisan, indépendant ou entreprise, je crée des sites professionnels, rapides et adaptés à votre identité pour valoriser votre savoir-faire et faciliter les prises de contact."
      // primaryAction={{
      //   label: "Parlons de votre projet",
      //   href: "/contact",
      // }}
      // secondaryAction={{
      //   label: "Voir mes réalisations",
      //   href: "/realisations",
      // }}
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