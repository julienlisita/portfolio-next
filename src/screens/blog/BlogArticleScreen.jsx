// src/screens/blog/BlogArticleScreen.jsx

'use client';

import { articles } from "../../data/articles";

import useArticleMarkdown from "../../hooks/useArticleMarkdown";

import ArticleHeader from "../../components/blog/article/ArticleHeader";
import ArticleContent from "../../components/blog/article/ArticleContent";
import ArticleNotFound from "../../components/blog/article/ArticleNotFound";
import ArticleLoadError from "../../components/blog/article/ArticleLoadError";
import { useParams } from "next/navigation";

export default function BlogArticleScreen() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  const { markdown, error, isLoading } = useArticleMarkdown(slug);

  if (!article) return <ArticleNotFound />;

  return (
    <>
      <ArticleHeader
        title={article.title}
        date={article.date}
        category={article.category}
      />

      {error && <ArticleLoadError />}

      {!error && !isLoading && <ArticleContent markdown={markdown} />}

      {!error && isLoading && (
        <p className="text-sm text-gray-400">Chargement…</p>
      )}
    </>
  );
}
