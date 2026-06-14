// src/app/realisations/[slug]/page.js

import PortfolioDetailScreen from "@/screens/portfolio/RealisationDetailScreen";
import { projects } from "@/data/projectsData";

export async function generateMetadata({ params }) {

  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Réalisation introuvable",
    };
  }

  return {
    title: project.title,
    
    description:
      project.description ||
      `Découvrez le projet ${project.title} réalisé par Julien Lisita.`,
    
    alternates: {
      canonical: `/realisations/${project.slug}`,
    },

    openGraph: {
      title: project.title,
      description:
        project.description ||
        `Découvrez le projet ${project.title} réalisé par Julien Lisita.`,
      url: `/realisations/${project.slug}`,
      type: "article",
      images: project.image
        ? [
            {
              url: project.image,
            },
          ]
        : [],
    },
  };
}

export default function ProjectDetailPage() {
  return <PortfolioDetailScreen />;
}
