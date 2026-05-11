// app/metadata.js

export const metadata = {
  metadataBase: new URL("https://www.julienlisita.com"),
  manifest: '/site.webmanifest',
  title: {
    default:
      "Développeur web à Bordeaux – Sites web & outils pour développer votre activité | Julien Lisita",
    template: "%s | Julien Lisita",
  },

  description:
    "Je conçois des sites web clairs, rapides et évolutifs, avec des outils utiles quand votre activité en a besoin : réservation, espace admin, gestion de contenus. Basé à Bordeaux, disponible à distance.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Sites web & outils sur mesure pour développer votre activité – Julien Lisita",
    description:
      "Des sites clairs, rapides et des outils utiles pour générer des clients et gagner du temps. Développeur web freelance basé à Bordeaux.",
    type: "website",
    url: "/",
    siteName: "Julien Lisita",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julien Lisita – Développeur web à Bordeaux",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sites web & outils sur mesure pour développer votre activité – Julien Lisita",
    description:
      "Développeur web à Bordeaux. Sites clairs, rapides et outils utiles pour générer des clients et simplifier votre organisation.",
    images: ["/og-image.jpg"],
    creator: "@JulienLisita",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};