// src/app/services/suivi-et-evolutions/page.js

import MaintenanceScreen from "@/screens/services/MaintenanceScreen";

export const metadata = {
  title: "Suivi et evolutions",
  description:
    "Gardez votre site web fiable et évolutif dans le temps : maintenance, corrections, petites améliorations et accompagnement après la mise en ligne.",

  alternates: {
    canonical: "/services/suivi-et-evolutions",
  },
};

export default function MaintenancePage() {
  return <MaintenanceScreen />;
}
