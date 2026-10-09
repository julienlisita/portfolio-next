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

  return formatter.formatRange(new Date(start), new Date(end));
}

export default async function SlotsAdminPage() {
  const slots = await listAllSlotsAdmin();

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
                htmlFor="startAt"
                className="mb-2 block text-sm text-gray-300"
              >
                Début
              </label>

              <input
                id="startAt"
                type="datetime-local"
                name="startAt"
                required
                className="rounded-lg border border-[#444] bg-[#1f1f1f] px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="endAt"
                className="mb-2 block text-sm text-gray-300"
              >
                Fin
              </label>

              <input
                id="endAt"
                type="datetime-local"
                name="endAt"
                required
                className="rounded-lg border border-[#444] bg-[#1f1f1f] px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-white px-4 py-2 font-medium text-black"
            >
              Ajouter
            </button>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">
            Créneaux
          </h2>

          {slots.length === 0 ? (
            <p className="text-gray-400">
              Aucun créneau pour le moment.
            </p>
          ) : (
            <div className="space-y-3">
              {slots.map((slot) => (
                <article
                  key={slot.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#333] bg-[#252525] p-4"
                >
                  <div>
                    <p className="font-medium">
                      {formatSlot(slot.startAt, slot.endAt)}
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      {slot.status}
                    </p>
                  </div>

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

                        <button className="rounded-lg border border-[#555] px-3 py-2 text-sm">
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

                        <button className="rounded-lg border border-[#555] px-3 py-2 text-sm">
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

                        <button className="rounded-lg border border-red-900 px-3 py-2 text-sm text-red-400">
                          Supprimer
                        </button>
                      </form>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}