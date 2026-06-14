// src/app/not-found.js

import NotFoundScreen from "@/screens/NotFoundScreen";

export const metadata = {
  title: "Page introuvable",
  
  description:
    "La page demandée n’existe pas ou a été déplacée.",
  
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return <NotFoundScreen />;
}
