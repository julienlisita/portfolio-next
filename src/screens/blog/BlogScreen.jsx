// src/screens/blog/BlogScreen.jsx

'use client';

import { useState } from "react";
import Pagination from "../../components/navigation/Pagination";
import PageTitle from "../../components/UI/PageTitle";
import { articles } from "../../data/articles";

import BlogIntro from "../../components/blog/BlogIntro";
import BlogList from "../../components/blog/BlogList";
import BlogCta from "../../components/blog/BlogCta";

export default function BlogScreen() {
  const articlesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = articles.slice(start, start + articlesPerPage);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <>
      <PageTitle>Blog</PageTitle>

      <BlogIntro />

      <BlogList articles={paginatedArticles} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <BlogCta />
    </>
  );
}