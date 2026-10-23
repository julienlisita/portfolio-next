// src/components/blog/article/ArticleHeader.jsx

import PageHero from "../../layout/PageHero";

import { formatDate } from "@/utils/formatDate";

export default function ArticleHeader({ title, date, category }) {
  return (
    <PageHero
      id="article-hero"
      eyebrow="BLOG"
      title={title}
    >
      {(date || category) && (
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-400">
          {date && (
            <time dateTime={date}>
              {formatDate(date)}
            </time>
          )}

          {date && category && (
            <span aria-hidden="true" className="opacity-60">
              •
            </span>
          )}

          {category && (
            <span className="rounded-md bg-[#2a2a2a] px-3 py-1 text-xs text-gray-300">
              {category}
            </span>
          )}
        </div>
      )}
    </PageHero>
  );
}