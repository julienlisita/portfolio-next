// src/components/blog/BlogList.jsx

import Section from "../layout/Section";
import BlogCard from "./BlogCard";

export default function BlogList({ articles }) {
  return (
    <Section className="space-y-4">
      {articles.map((article) => (
        <BlogCard key={article.slug} article={article} />
      ))}
    </Section>
  );
}