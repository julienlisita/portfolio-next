import "./globals.css";

export const metadata = {
  title: "Julien Lisita — Création de sites web à Bordeaux",
  description:
    "Développeur web à Bordeaux. Création de sites web clairs, rapides et évolutifs pour indépendants, artisans et petites entreprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>

  );

}