// src/app/comment-je-travaille/page.js

import HowIWorkScreen from "@/screens/HowIWorkScreen";

export const metadata = {
  title: "Comment je travaille",
  
  description:
    "Découvrez ma méthode de travail : échanges, structure du projet, développement, suivi et choix techniques pour créer des sites web clairs, rapides et évolutifs.",

  alternates: {
    canonical: "/comment-je-travaille",
  },
};

export default function HowIWorkPage() {
  return <HowIWorkScreen />;
}
