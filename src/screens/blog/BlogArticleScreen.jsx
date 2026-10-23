// src/screens/blog/BlogArticleScreen.jsx

import ArticleHeader from "../../components/blog/article/ArticleHeader";
import ArticleContent from "../../components/blog/article/ArticleContent";
import BlogCta from "../../components/blog/BlogCta";

export default function BlogArticleScreen({ article, markdown }) {
  return (
    <>
      <article>
        <ArticleHeader
          title={article.title}
          date={article.date}
          category={article.category}
        />

        <ArticleContent markdown={markdown} />
      </article>

      <BlogCta />
    </>
  );
}