// src/screens/blog/BlogArticleScreen.jsx

import ArticleHeader from "../../components/blog/article/ArticleHeader";
import ArticleContent from "../../components/blog/article/ArticleContent";

export default function BlogArticleScreen({article, markdown,}) {
  return (
    <>
      <ArticleHeader
        title={article.title}
        date={article.date}
        category={article.category}
      />
      <ArticleContent markdown={markdown} />
    </>
  );
}
