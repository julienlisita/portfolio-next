// src/app/realisations/[slug]/page.js

import PortfolioDetailScreen from "@/screens/portfolio/RealisationDetailScreen";
import { projects } from "@/data/projectsData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));

}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Réalisation introuvable",
    };
  }

  const description =
    project.description ||
    `Découvrez le projet ${project.title} réalisé par Julien Lisita.`;

  return {
    title: project.title,

    description,

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

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

   if (!project) {
    notFound();
  }
  return <PortfolioDetailScreen project={project}/>;
}
