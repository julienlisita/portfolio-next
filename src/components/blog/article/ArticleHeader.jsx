// src/components/blog/article/ArticleHeader.jsx

import PageTitle from "../../UI/PageTitle";

export default function ArticleHeader({ title, date, category }) {
  return (
    <header className="mb-8">
      <PageTitle>{title}</PageTitle>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
        {date && <span>{date}</span>}

        {category && (
          <>
            <span className="opacity-60">•</span>
            <span className="px-2 py-1 rounded-md bg-[#1e1e1e] text-gray-300 text-xs">
              {category}
            </span>
          </>
        )}
      </div>
    </header>
  );
}