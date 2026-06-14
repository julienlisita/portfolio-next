// src/app/contact/page.js

import ContactScreen from "@/screens/ContactScreen";

export const metadata = {
  title: "Contact",

  description:
    "Parlons de votre projet web : site vitrine, refonte, réservation en ligne, espace administrateur ou outil sur mesure. Basé à Bordeaux, disponible à distance.",

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactScreen />;
}
