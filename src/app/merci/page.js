// src/app/merci/page.js

import ThanksScreen from "@/screens/ThanksScreen";

export const metadata = {
  title: "Merci",
  
  description:
    "Merci pour votre message. Je reviens vers vous rapidement pour échanger sur votre projet.",

  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return <ThanksScreen />;
}
