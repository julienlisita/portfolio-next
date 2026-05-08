// src/app/layout.js

import "./globals.css";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata = {
  title: "Julien Lisita — Création de sites web à Bordeaux",
  description:
    "Développeur web à Bordeaux. Création de sites web clairs, rapides et évolutifs pour indépendants, artisans et petites entreprises.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}