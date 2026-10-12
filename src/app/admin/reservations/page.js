// src/app/admin/reservations/page.js

import { cancelReservationAction } from "./actions";

import { listAllReservationsAdmin } from "@/server/services/reservations.service";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Administration – Réservations",
};

const TZ = "Europe/Paris";

function toDateKey(date) {
  const parts = new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(date));

  const get = (type) =>
    parts.find((part) => part.type === type)?.value;

  return `${get("year")}-${get("month")}-${get("day")}`;
}

function formatDay(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function formatTime(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function groupReservationsByDay(reservations) {
  const grouped = new Map();

  const sortedReservations = [...reservations].sort(
    (a, b) =>
      new Date(a.slot.startAt) - new Date(b.slot.startAt)
  );

  for (const reservation of sortedReservations) {
    const key = toDateKey(reservation.slot.startAt);

    if (!grouped.has(key)) {
      grouped.set(key, []);
    }

    grouped.get(key).push(reservation);
  }

  return Array.from(grouped.entries());
}

function ReservationsByDay({
  groupedReservations,
  historical = false,
}) {
  return (
    <div className="space-y-8">
      {groupedReservations.map(
        ([dayKey, dayReservations]) => (
          <div key={dayKey}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold capitalize text-gray-100">
                {formatDay(
                  dayReservations[0].slot.startAt
                )}
              </h3>

              <span className="text-sm text-gray-500">
                {dayReservations.length}{" "}
                {dayReservations.length > 1
                  ? "réservations"
                  : "réservation"}
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#333] bg-[#252525]">
              {dayReservations.map((reservation) => (
                <article
                  key={reservation.id}
                  className="
                    border-b border-[#333]
                    p-5
                    last:border-b-0
                  "
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      {/* Heure */}
                      <div className="mb-4">
                        <span
                          className="
                            inline-flex
                            rounded-lg
                            border border-[#5AC8FA]/30
                            bg-[#5AC8FA]/10
                            px-3 py-1.5
                            text-sm font-semibold
                            text-[#5AC8FA]
                          "
                        >
                          {formatTime(
                            reservation.slot.startAt
                          )}

                          <span className="mx-2 opacity-50">
                            →
                          </span>

                          {formatTime(
                            reservation.slot.endAt
                          )}
                        </span>
                      </div>

                      {/* Client */}
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {reservation.clientName}
                        </h4>

                        <a
                          href={`mailto:${reservation.clientEmail}`}
                          className="text-sm text-[#5AC8FA] hover:underline"
                        >
                          {reservation.clientEmail}
                        </a>
                      </div>

                      {/* Projet */}
                      {reservation.message && (
                        <div className="mt-4">
                          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                            Projet
                          </p>

                          <p className="max-w-2xl whitespace-pre-wrap text-sm leading-relaxed text-gray-300">
                            {reservation.message}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Actions uniquement pour les rendez-vous à venir */}
                    {!historical && (
                      <form
                        action={cancelReservationAction}
                        className="shrink-0"
                      >
                        <input
                          type="hidden"
                          name="reservationId"
                          value={reservation.id}
                        />

                        <button
                          type="submit"
                          className="
                            rounded-lg
                            border border-red-900
                            px-3 py-2
                            text-sm text-red-400
                            transition
                            hover:bg-red-950/30
                          "
                        >
                          Annuler la réservation
                        </button>
                      </form>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default async function ReservationsAdminPage() {
  const reservations = await listAllReservationsAdmin();

  const now = new Date();

  /*
   * Un rendez-vous reste "à venir" jusqu'à
   * la fin du créneau.
   */
  const upcomingReservations = reservations.filter(
    (reservation) =>
      new Date(reservation.slot.endAt) >= now
  );

  const pastReservations = reservations.filter(
    (reservation) =>
      new Date(reservation.slot.endAt) < now
  );

  /*
   * Rendez-vous à venir :
   * du plus proche au plus éloigné.
   */
  const groupedUpcomingReservations =
    groupReservationsByDay(upcomingReservations);

  /*
   * Historique :
   * jours les plus récents en premier.
   */
  const groupedPastReservations =
    groupReservationsByDay(pastReservations).reverse();

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

        {/* Rendez-vous à venir */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              Rendez-vous à venir
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              {upcomingReservations.length}{" "}
              {upcomingReservations.length > 1
                ? "réservations"
                : "réservation"}
            </p>
          </div>

          {groupedUpcomingReservations.length === 0 ? (
            <p className="text-gray-400">
              Aucun rendez-vous à venir.
            </p>
          ) : (
            <ReservationsByDay
              groupedReservations={
                groupedUpcomingReservations
              }
            />
          )}
        </section>

        {/* Historique */}
        {pastReservations.length > 0 && (
          <section className="border-t border-[#333] pt-8">
            <details className="group">
              <summary
                className="
                  flex cursor-pointer
                  list-none
                  items-center justify-between
                  gap-4
                "
              >
                <div>
                  <h2 className="text-xl font-semibold">
                    Historique
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    {pastReservations.length} ancienne
                    {pastReservations.length > 1
                      ? "s"
                      : ""}{" "}
                    réservation
                    {pastReservations.length > 1
                      ? "s"
                      : ""}
                  </p>
                </div>

                <span
                  className="
                    text-2xl text-[#5AC8FA]
                    transition-transform
                    group-open:rotate-45
                  "
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <div className="mt-6">
                <ReservationsByDay
                  groupedReservations={
                    groupedPastReservations
                  }
                  historical
                />
              </div>
            </details>
          </section>
        )}
      </div>
    </main>
  );
}