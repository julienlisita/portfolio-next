// src/app/admin/slots/page.js

import {
  createSlotAction,
  deleteSlotAction,
  updateSlotStatusAction,
} from "./actions";

import { listAllSlotsAdmin } from "@/server/services/reservations.service";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Administration – Créneaux",
};

const TZ = "Europe/Paris";

/*
 * Horaires disponibles :
 * 09:00, 09:30, 10:00... jusqu'à 18:30.
 *
 * Chaque rendez-vous dure 30 minutes,
 * donc le dernier se termine à 19:00.
 */
const TIMES = Array.from({ length: 20 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 30;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
});

/*
 * Retourne une clé YYYY-MM-DD en heure de Paris.
 * Elle permet de regrouper les créneaux par journée.
 */
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

/*
 * Exemple :
 * lundi 12 octobre 2026
 */
function formatDay(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/*
 * Exemple :
 * 14:30
 */
function formatTime(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

/*
 * Trie les créneaux chronologiquement
 * puis les regroupe par journée.
 */
function groupSlotsByDay(slots) {
  const grouped = new Map();

  const sortedSlots = [...slots].sort(
    (a, b) => new Date(a.startAt) - new Date(b.startAt)
  );

  for (const slot of sortedSlots) {
    const key = toDateKey(slot.startAt);

    if (!grouped.has(key)) {
      grouped.set(key, []);
    }

    grouped.get(key).push(slot);
  }

  return Array.from(grouped.entries());
}

/*
 * Libellés affichés dans l'interface.
 */
function getStatusLabel(status) {
  switch (status) {
    case "AVAILABLE":
      return "Disponible";

    case "BOOKED":
      return "Réservé";

    case "DISABLED":
      return "Désactivé";

    default:
      return status;
  }
}

/*
 * Couleurs des statuts.
 */
function getStatusClasses(status) {
  switch (status) {
    case "AVAILABLE":
      return "border-green-900/60 bg-green-950/30 text-green-400";

    case "BOOKED":
      return "border-[#5AC8FA]/40 bg-[#5AC8FA]/10 text-[#5AC8FA]";

    case "DISABLED":
      return "border-gray-700 bg-gray-800/50 text-gray-400";

    default:
      return "border-gray-700 text-gray-400";
  }
}

/*
 * Affichage des créneaux regroupés par journée.
 *
 * Dans l'historique, les actions sont volontairement
 * masquées puisqu'il n'est plus utile de modifier
 * un ancien créneau.
 */
function SlotsByDay({ groupedSlots, historical = false }) {
  return (
    <div className="space-y-8">
      {groupedSlots.map(([dayKey, daySlots]) => (
        <div key={dayKey}>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-semibold capitalize text-gray-100">
              {formatDay(daySlots[0].startAt)}
            </h3>

            <span className="text-sm text-gray-500">
              {daySlots.length}{" "}
              {daySlots.length > 1 ? "créneaux" : "créneau"}
            </span>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#333] bg-[#252525]">
            {daySlots.map((slot) => (
              <article
                key={slot.id}
                className="
                  flex flex-col gap-4
                  border-b border-[#333]
                  p-4
                  last:border-b-0
                  sm:flex-row sm:items-center sm:justify-between
                "
              >
                <div className="flex flex-wrap items-center gap-4">
                  <p className="min-w-28 font-medium text-white">
                    {formatTime(slot.startAt)}

                    <span className="mx-2 text-gray-600">
                      →
                    </span>

                    {formatTime(slot.endAt)}
                  </p>

                  <span
                    className={`
                      rounded-full border
                      px-2.5 py-1
                      text-xs font-medium
                      ${getStatusClasses(slot.status)}
                    `}
                  >
                    {getStatusLabel(slot.status)}
                  </span>
                </div>

                {!historical && (
                  <div className="flex flex-wrap gap-2">
                    {slot.status === "DISABLED" && (
                      <form action={updateSlotStatusAction}>
                        <input
                          type="hidden"
                          name="slotId"
                          value={slot.id}
                        />

                        <input
                          type="hidden"
                          name="status"
                          value="AVAILABLE"
                        />

                        <button
                          type="submit"
                          className="
                            rounded-lg
                            border border-[#555]
                            px-3 py-2
                            text-sm
                            transition
                            hover:border-[#5AC8FA]
                          "
                        >
                          Rendre disponible
                        </button>
                      </form>
                    )}

                    {slot.status === "AVAILABLE" && (
                      <form action={updateSlotStatusAction}>
                        <input
                          type="hidden"
                          name="slotId"
                          value={slot.id}
                        />

                        <input
                          type="hidden"
                          name="status"
                          value="DISABLED"
                        />

                        <button
                          type="submit"
                          className="
                            rounded-lg
                            border border-[#555]
                            px-3 py-2
                            text-sm
                            transition
                            hover:border-[#5AC8FA]
                          "
                        >
                          Désactiver
                        </button>
                      </form>
                    )}

                    {slot.status !== "BOOKED" && (
                      <form action={deleteSlotAction}>
                        <input
                          type="hidden"
                          name="slotId"
                          value={slot.id}
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
                          Supprimer
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function SlotsAdminPage() {
  const slots = await listAllSlotsAdmin();

  const now = new Date();

  /*
   * On considère un créneau comme passé lorsque
   * son heure de fin est dépassée.
   */
  const upcomingSlots = slots.filter(
    (slot) => new Date(slot.endAt) >= now
  );

  const pastSlots = slots.filter(
    (slot) => new Date(slot.endAt) < now
  );

  /*
   * À venir :
   * du plus proche au plus éloigné.
   */
  const groupedUpcomingSlots =
    groupSlotsByDay(upcomingSlots);

  /*
   * Historique :
   * journées les plus récentes en premier.
   *
   * Les heures restent dans l'ordre chronologique
   * à l'intérieur de chaque journée.
   */
  const groupedPastSlots =
    groupSlotsByDay(pastSlots).reverse();

  return (
    <main className="min-h-screen bg-[#1f1f1f] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl space-y-10">
        <header>
          <p className="mb-2 text-sm text-gray-400">
            Administration
          </p>

          <h1 className="text-3xl font-bold">
            Créneaux de réservation
          </h1>
        </header>

        {/* Création */}
        <section className="rounded-xl border border-[#333] bg-[#252525] p-6">
          <h2 className="mb-5 text-xl font-semibold">
            Ajouter un créneau
          </h2>

          <form
            action={createSlotAction}
            className="flex flex-wrap items-end gap-4"
          >
            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-sm text-gray-300"
              >
                Date
              </label>

              <input
                id="date"
                type="date"
                name="date"
                required
                className="
                  rounded-lg
                  border border-[#444]
                  bg-[#1f1f1f]
                  px-3 py-2
                "
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="mb-2 block text-sm text-gray-300"
              >
                Heure
              </label>

              <select
                id="time"
                name="time"
                required
                defaultValue=""
                className="
                  rounded-lg
                  border border-[#444]
                  bg-[#1f1f1f]
                  px-3 py-2
                "
              >
                <option value="" disabled>
                  Choisir
                </option>

                {TIMES.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="
                rounded-lg
                bg-white
                px-4 py-2
                font-medium text-black
                transition
                hover:bg-gray-200
              "
            >
              Ajouter
            </button>
          </form>
        </section>

        {/* Créneaux à venir */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              Créneaux à venir
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              {upcomingSlots.length}{" "}
              {upcomingSlots.length > 1
                ? "créneaux"
                : "créneau"}
            </p>
          </div>

          {groupedUpcomingSlots.length === 0 ? (
            <p className="text-gray-400">
              Aucun créneau à venir.
            </p>
          ) : (
            <SlotsByDay
              groupedSlots={groupedUpcomingSlots}
            />
          )}
        </section>

        {/* Historique */}
        {pastSlots.length > 0 && (
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
                    {pastSlots.length} ancien
                    {pastSlots.length > 1 ? "s" : ""}{" "}
                    créneau
                    {pastSlots.length > 1 ? "x" : ""}
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
                <SlotsByDay
                  groupedSlots={groupedPastSlots}
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