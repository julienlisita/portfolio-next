// src/app/layout.js

import "./globals.css";
import SiteLayout from "@/components/layout/SiteLayout";
import { metadata, viewport } from "./metadata";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.julienlisita.com/#business",
  name: "Julien Lisita",
  jobTitle: "Développeur web",
  description:
    "Développeur web à Bordeaux, création de sites internet et outils sur mesure pour indépendants et entreprises.",
  url: "https://www.julienlisita.com",
  image: "https://www.julienlisita.com/og-image.jpg",
  telephone: "+33623000449",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bordeaux",
    postalCode: "33000",
    addressCountry: "FR",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Bordeaux Métropole",
    },
    {
      "@type": "Country",
      name: "France",
    },
  ],
  sameAs: [
    "https://github.com/julienlisita",
    "https://www.linkedin.com/in/julienlisita/",
    "https://www.facebook.com/profile.php?id=61584478395151",
  ],
};

import {
  Inter,
  Poppins,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export { metadata, viewport };

export default function RootLayout({ children }) {

  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`
        ${inter.variable}
        ${poppins.variable}
        ${spaceGrotesk.variable}
        ${jetBrainsMono.variable}
      `}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}