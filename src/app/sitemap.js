// src/app/sitemap.js

import { projects } from "@/data/projectsData";
import { articles } from "@/data/articles";

export default function sitemap() {
  const baseUrl = "https://www.julienlisita.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/site-vitrine`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/fonctionnalites-sur-mesure`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/maintenance`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: new Date(),
    },
      ...projects.map((project) => ({
      url: `${baseUrl}/realisations/${project.slug}`,
      lastModified: new Date(),

    })),
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/comment-je-travaille`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
      ...articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.date ?? new Date()),
    })),
  ];
}