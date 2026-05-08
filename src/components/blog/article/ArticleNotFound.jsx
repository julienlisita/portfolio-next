// src/components/blog/article/ArticleNotFound.jsx

import Link from "next/link";
import Section from "../../layout/Section";

export default function ArticleNotFound() {
  return (
    <Section>
      <p className="text-gray-300">Article non trouvé.</p>
      <p className="mt-4">
        <Link href="/blog" className="text-blue-400 underline">
          ← Retour au blog
        </Link>
      </p>
    </Section>
  );
}