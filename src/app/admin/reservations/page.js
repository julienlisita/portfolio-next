// src/app/admin/reservations/page.js

import { cancelReservationAction } from "./actions";

import { listAllReservationsAdmin } from "@/server/services/reservations.service";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Administration – Réservations",
};

const TZ = "Europe/Paris";

function formatSlot(start, end) {
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.formatRange(
    new Date(start),
    new Date(end)
  );
}

export default async function ReservationsAdminPage() {
  const reservations = await listAllReservationsAdmin();

  return (
    <main className="min-h-screen bg-[#1f1f1f] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl space-y-10">
        <header>
          <p className="mb-2 text-sm text-gray-400">
            Administration
          </p>

          <h1 className="text-3xl font-bold">
            Réservations
          </h1>
        </header>

        {reservations.length === 0 ? (
          <p className="text-gray-400">
            Aucune réservation pour le moment.
          </p>
        ) : (
          <div className="space-y-4">
            {reservations.map((reservation) => (
              <article
                key={reservation.id}
                className="rounded-xl border border-[#333] bg-[#252525] p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="space-y-2">
                    <div>
                      <h2 className="text-lg font-semibold">
                        {reservation.clientName}
                      </h2>

                      <a
                        href={`mailto:${reservation.clientEmail}`}
                        className="text-sm text-cyan-400 hover:underline"
                      >
                        {reservation.clientEmail}
                      </a>
                    </div>

                    <p className="text-sm text-gray-300">
                      {formatSlot(
                        reservation.slot.startAt,
                        reservation.slot.endAt
                      )}
                    </p>

                    {reservation.message && (
                      <div className="pt-2">
                        <p className="mb-1 text-xs uppercase tracking-wide text-gray-500">
                          Projet
                        </p>

                        <p className="max-w-2xl whitespace-pre-wrap text-sm text-gray-300">
                          {reservation.message}
                        </p>
                      </div>
                    )}
                  </div>

                  <form action={cancelReservationAction}>
                    <input
                      type="hidden"
                      name="reservationId"
                      value={reservation.id}
                    />

                    <button
                      type="submit"
                      className="rounded-lg border border-red-900 px-3 py-2 text-sm text-red-400 hover:bg-red-950/30"
                    >
                      Annuler la réservation
                    </button>
                  </form>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}