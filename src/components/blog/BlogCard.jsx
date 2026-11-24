// src/components/blog/BlogCard.jsx

import Button from "../UI/Button";

import { estimateReadingTime } from "../../utils/readingTime";
import { formatDate } from "@/utils/formatDate";

export default function BlogCard({ article }) {
  const readingTime = estimateReadingTime(
    `${article.title} ${article.excerpt}`
  );

  return (
    <article
      className="
        flex h-full flex-col
        rounded-xl
        border border-line-subtle
        bg-surface-raised
        p-5 sm:p-6
        transition-colors duration-300
        hover:border-line-hover
      "
    >
      {/* Métadonnées */}
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-400">
        <time dateTime={article.date}>
          {formatDate(article.date)}
        </time>

        <span aria-hidden="true" className="opacity-60">
          •
        </span>

        <span>{readingTime}</span>

        {article.category && (
          <>
            <span aria-hidden="true" className="opacity-60">
              •
            </span>

            <span className="rounded-md bg-surface-admin px-2 py-1 text-gray-300">
              {article.category}
            </span>
          </>
        )}
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col">
        <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-100">
          {article.title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
          {article.excerpt}
        </p>

        {/* Lien */}
        <div className="mt-auto">
          <Button
            href={`/blog/${article.slug}`}
            variant="text"
          >
            Lire l’article ›
          </Button>
        </div>
      </div>
    </article>
  );
}