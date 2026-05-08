// src/components/blog/BlogCard.jsx

import Button from "../UI/Button";
import { estimateReadingTime } from "../../utils/readingTime";

export default function BlogCard({ article }) {
  const readingTime = estimateReadingTime(`${article.title} ${article.excerpt}`);

  return (
    <article className="bg-[#2a2a2a] rounded-xl p-6 border border-[#2f2f2f]">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
          <span>{article.date}</span>
          <span className="opacity-60">•</span>
          <span>{readingTime}</span>

          {article.category && (
            <>
              <span className="opacity-60">•</span>
              <span className="px-2 py-1 rounded-md bg-[#1e1e1e] text-gray-300">
                {article.category}
              </span>
            </>
          )}
        </div>

        <h2 className="text-gray-100 font-semibold text-lg">{article.title}</h2>

        <p className="text-gray-300 text-sm">{article.excerpt}</p>

        <div className="pt-2">
          <Button href={`/blog/${article.slug}`} variant="text">
            Lire l’article ›
          </Button>
        </div>
      </div>
    </article>
  );
}