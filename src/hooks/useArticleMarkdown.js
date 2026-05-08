// src/hooks/useArticleMarkdown.js

import { useEffect, useState } from "react";
import frontMatter from "front-matter";

export default function useArticleMarkdown(slug) {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;
    setIsLoading(true);

    fetch(`/content/blog/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Fichier introuvable");
        return res.text();
      })
      .then((text) => {
        if (!isMounted) return;
        const { body } = frontMatter(text);
        setMarkdown(body);
        setError(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setMarkdown("");
        setError(true);
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { markdown, error, isLoading };
}