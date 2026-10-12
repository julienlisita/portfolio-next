// src/components/reservations/ReservationForm.jsx

"use client";

import { useMemo, useState } from "react";

import { sendReservation } from "@/app/reservations/actions";
import Button from "@/components/UI/Button";
import FloatingInput from "@/components/form/FloatingInput";
import FloatingTextarea from "@/components/form/FloatingTextarea";

const TZ = "Europe/Paris";
const DAYS_STEP = 5;

function toDateKey(date) {
  const parts = new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const get = (type) => parts.find((part) => part.type === type)?.value;

  return `${get("year")}-${get("month")}-${get("day")}`;
}

function formatDayTitle(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    weekday: "long",
    day: "2-digit",
    month: "long",
  }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function isMorning(slot) {
  const parts = new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    hour: "2-digit",
    hour12: false,
  }).formatToParts(new Date(slot.startAt));

  const hour = Number(
    parts.find((part) => part.type === "hour")?.value ?? 0
  );

  return hour < 12;
}

export default function ReservationForm({ slots }) {
  const groupedSlots = useMemo(() => {
    const map = new Map();

    for (const slot of slots) {
      const dateKey = toDateKey(new Date(slot.startAt));
      const daySlots = map.get(dateKey) ?? [];

      daySlots.push(slot);
      map.set(dateKey, daySlots);
    }

    for (const daySlots of map.values()) {
      daySlots.sort(
        (a, b) => new Date(a.startAt) - new Date(b.startAt)
      );
    }

    const dayKeys = Array.from(map.keys()).sort();

    return {
      map,
      dayKeys,
    };
  }, [slots]);

  const [openDay, setOpenDay] = useState(
    groupedSlots.dayKeys[0] ?? null
  );
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [visibleDaysCount, setVisibleDaysCount] = useState(DAYS_STEP);

  const visibleDayKeys = groupedSlots.dayKeys.slice(
    0,
    visibleDaysCount
  );

  const hasMoreDays =
    visibleDaysCount < groupedSlots.dayKeys.length;

  function toggleDay(dayKey) {
    setOpenDay((currentDay) =>
      currentDay === dayKey ? null : dayKey
    );

    setSelectedSlotId(null);
  }

  return (
    <form
      action={sendReservation}
      className="
        w-full
        bg-[#2a2a2a]
        rounded-2xl
        p-6 sm:p-8
        space-y-8
        transition-all duration-300
        focus-within:shadow-[0_0_14px_rgba(0,122,255,0.35)]
      "
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <section>
        <h2 className="mb-4 text-lg sm:text-xl font-semibold text-white">
          Choisissez un créneau
        </h2>

        {visibleDayKeys.length === 0 ? (
          <p className="text-gray-400">
            Aucun créneau disponible pour le moment.
          </p>
        ) : (
          <div className="space-y-3">
            {visibleDayKeys.map((dayKey) => {
              const daySlots =
                groupedSlots.map.get(dayKey) ?? [];

              const morningSlots =
                daySlots.filter(isMorning);

              const afternoonSlots =
                daySlots.filter((slot) => !isMorning(slot));

              const isOpen = openDay === dayKey;

              return (
                <div
                  key={dayKey}
                  className={`
                    overflow-hidden rounded-xl border
                    bg-[#1f1f1f]
                    transition-all duration-200
                    ${
                      isOpen
                        ? "border-[#5AC8FA] shadow-[0_0_8px_rgba(90,200,250,0.18)]"
                        : "border-[#3a3a3a] hover:border-[#5AC8FA]/60"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggleDay(dayKey)}
                    aria-expanded={isOpen}
                    className="
                      flex w-full
                      items-center justify-between
                      gap-4
                      p-4
                      text-left
                    "
                  >
                    <div>
                      <p className="font-semibold capitalize text-gray-100">
                        {formatDayTitle(dayKey)}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {daySlots.length}{" "}
                        {daySlots.length > 1
                          ? "créneaux disponibles"
                          : "créneau disponible"}
                      </p>
                    </div>

                    <span
                      className="
                        flex h-8 w-8
                        shrink-0
                        items-center justify-center
                        rounded-full
                        text-xl text-[#5AC8FA]
                      "
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#3a3a3a] px-4 pb-5">
                      {morningSlots.length > 0 && (
                        <SlotGroup
                          title="Matin"
                          slots={morningSlots}
                          selectedSlotId={selectedSlotId}
                          onSelect={setSelectedSlotId}
                        />
                      )}

                      {afternoonSlots.length > 0 && (
                        <SlotGroup
                          title="Après-midi"
                          slots={afternoonSlots}
                          selectedSlotId={selectedSlotId}
                          onSelect={setSelectedSlotId}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {hasMoreDays && (
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleDaysCount((count) =>
                      Math.min(
                        groupedSlots.dayKeys.length,
                        count + DAYS_STEP
                      )
                    )
                  }
                  className="
                    rounded-full
                    border border-[#3a3a3a]
                    px-5 py-2.5
                    text-sm font-semibold
                    text-[#5AC8FA]
                    transition-all duration-200
                    hover:border-[#5AC8FA]
                    hover:bg-[#5AC8FA]/5
                  "
                >
                  Voir plus de dates
                </button>
              </div>
            )}

            <input
              type="hidden"
              name="slotId"
              value={selectedSlotId ?? ""}
            />
          </div>
        )}
      </section>

      <div className="space-y-6">
        <FloatingInput
          label="Nom"
          name="clientName"
          type="text"
          required
        />

        <FloatingInput
          label="Email"
          name="clientEmail"
          type="email"
          required
        />

        <FloatingTextarea
          label="Votre projet (optionnel)"
          name="message"
          rows={5}
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          variant="primary"
          disabled={!selectedSlotId || slots.length === 0}
          className="
            disabled:cursor-not-allowed
            disabled:opacity-40
            disabled:hover:scale-100
          "
        >
          {selectedSlotId
            ? "Réserver ce créneau"
            : "Choisir un créneau"}
        </Button>
      </div>
    </form>
  );
}

function SlotGroup({
  title,
  slots,
  selectedSlotId,
  onSelect,
}) {
  return (
    <div className="mt-5">
      <p className="mb-3 text-sm font-semibold text-gray-400">
        {title}
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {slots.map((slot) => {
          const selected = selectedSlotId === slot.id;

          return (
            <button
              key={slot.id}
              type="button"
              onClick={() => onSelect(slot.id)}
              aria-pressed={selected}
              className={`
                rounded-lg
                border
                px-3 py-2.5
                text-sm font-semibold
                transition-all duration-200
                ${
                  selected
                    ? "border-[#5AC8FA] bg-[#5AC8FA]/10 text-[#5AC8FA] shadow-[0_0_8px_rgba(90,200,250,0.2)]"
                    : "border-[#3a3a3a] bg-[#262626] text-gray-200 hover:border-[#5AC8FA]/70 hover:text-[#5AC8FA]"
                }
              `}
            >
              {formatTime(new Date(slot.startAt))}
            </button>
          );
        })}
      </div>
    </div>
  );
}