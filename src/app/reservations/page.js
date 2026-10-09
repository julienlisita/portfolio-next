// src/app/reservations/page.js

import ReservationForm from "@/components/reservations/ReservationForm";

import { listAvailableSlots } from "@/server/services/reservations.service";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Réserver un échange",
  description:
    "Choisissez un créneau pour échanger au sujet de votre projet web.",
};

const errors = {
  "too-many-requests":
    "Une réservation vient déjà d’être effectuée. Merci de patienter quelques minutes.",

  "slot-unavailable":
    "Ce créneau n’est plus disponible. Choisissez-en un autre.",

  unknown:
    "Une erreur est survenue. Merci de réessayer.",
};

export default async function ReservationsPage({ searchParams }) {
  const params = await searchParams;

  const errorMessage = params?.error
    ? errors[params.error]
    : null;

  const slots = await listAvailableSlots();

  return (
    <main className="min-h-screen bg-[#1f1f1f] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="mb-2 text-sm text-gray-400">
            Discutons de votre projet
          </p>

          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Réserver un échange
          </h1>

          <p className="max-w-2xl text-gray-300">
            Choisissez le créneau qui vous convient pour un premier
            échange autour de votre projet.
          </p>
        </header>

        {errorMessage && (
          <div className="mb-6 rounded-lg border border-red-900 bg-red-950/30 p-4 text-red-300">
            {errorMessage}
          </div>
        )}

        <ReservationForm slots={slots} />
      </div>
    </main>
  );
}