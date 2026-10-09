// src/app/reservations/merci/page.js

import Link from "next/link";

export const metadata = {
  title: "Réservation confirmée",
};

export default function ReservationThankYouPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#1f1f1f] px-6 text-white">
      <div className="max-w-xl text-center">
        <h1 className="mb-4 text-3xl font-bold">
          Votre rendez-vous est réservé !
        </h1>

        <p className="mb-8 text-gray-300">
          Votre réservation a bien été enregistrée. Je reviendrai vers
          vous avec les informations nécessaires pour notre échange.
        </p>

        <Link
          href="/"
          className="inline-block rounded-lg bg-white px-5 py-3 font-medium text-black"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}