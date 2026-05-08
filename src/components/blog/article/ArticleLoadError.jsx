// src/components/blog/article/ArticleLoadError.jsx

import Section from "../../layout/Section";

export default function ArticleLoadError() {
  return (
    <Section>
      <p className="text-gray-300">
        Le contenu de l’article n’a pas pu être chargé (fichier manquant ou erreur de chargement).
      </p>
    </Section>
  );
}