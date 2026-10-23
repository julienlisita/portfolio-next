// src/components/blog/BlogList.jsx

"use client";

import { useState } from "react";

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

import Pagination from "../navigation/Pagination";

import BlogCard from "./BlogCard";

import { articles } from "../../data/articles";

const ARTICLES_PER_PAGE = 10;

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const start = (currentPage - 1) * ARTICLES_PER_PAGE;

  const paginatedArticles = articles.slice(
    start,
    start + ARTICLES_PER_PAGE
  );

  return (
    <Section
      id="blog-articles"
      labelledBy="blog-articles-title"
    >
      <SectionWrapper>
        <SectionHeading
          id="blog-articles-title"
          eyebrow="PUBLICATIONS"
          title="Tous les articles"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {paginatedArticles.length > 0 ? (
          <>
            <div className="grid gap-6 xl:grid-cols-2">
              {paginatedArticles.map((article) => (
                <BlogCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 sm:mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-400">
            Aucun article disponible pour le moment.
          </p>
        )}
      </SectionWrapper>
    </Section>
  );
}