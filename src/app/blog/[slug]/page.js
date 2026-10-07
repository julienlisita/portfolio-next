// src/app/blog/[slug]/page.js

import { notFound } from "next/navigation";
import BlogArticleScreen from "@/screens/blog/BlogArticleScreen";
import { articles } from "@/data/articles";
import { getArticleMarkdown } from "@/lib/blog";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));

}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = articles.find((p) => p.slug === slug);
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

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((article) => article.slug === slug);
  if (!article) {
    notFound();
  }

  const markdown = getArticleMarkdown(slug);

  if (!markdown) {
    notFound();
  }
  return <BlogArticleScreen 
      article={article}
      markdown={markdown}
      />;
}
