// src/app/mentions-legales/page.js

import LegalAndPrivacyScreen from "@/screens/LegalAndPrivacyScreen";

export const metadata = {
  title: "Mentions legales & confidentialité",
  
  description:
    "Mentions légales, informations sur l’éditeur du site et politique de confidentialité du site julienlisita.com.",

  alternates: {
    canonical: "/mentions-legales",

  },
};

export default function LegalAndPrivacyPage() {
  return <LegalAndPrivacyScreen />;
}
