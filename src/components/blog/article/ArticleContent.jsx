// src/components/blog/article/ArticleContent.jsx

import ReactMarkdown from "react-markdown";

export default function ArticleContent({ markdown }) {
  return (
    <section className="prose prose-invert max-w-none text-gray-200">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );
}