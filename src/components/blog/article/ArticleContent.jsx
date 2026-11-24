// src/components/blog/article/ArticleContent.jsx

import ReactMarkdown from "react-markdown";

import Section from "../../layout/Section";
import SectionWrapper from "../../layout/SectionWrapper";

export default function ArticleContent({ markdown }) {
  return (
    <Section
      id="article-content"
      aria-label="Contenu de l'article"
    >
      <SectionWrapper>
        <div
          className="
            prose prose-invert
            mx-auto
            max-w-3xl
            text-gray-200
            prose-headings:scroll-mt-24
            prose-headings:text-white
            prose-a:text-accent
            prose-a:transition-colors
            hover:prose-a:text-blue
            prose-strong:text-white
            prose-code:text-accent
          "
        >
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
      </SectionWrapper>
    </Section>
  );
}