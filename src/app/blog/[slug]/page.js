// src/app/blog/[slug]/page.js

import BlogArticleScreen from "@/screens/blog/BlogArticleScreen";
import { articles } from "@/data/articles";

export async function generateMetadata({ params }) {

  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: "Article introuvable",
    };
  }
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      type: "article",
      images: article.cover
        ? [
            {
              url: article.cover,
            },
          ]
        : [],
    },
  };
}

export default function ArticlePage() {
  return <BlogArticleScreen />;
}
