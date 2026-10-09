// src/server/services/reservations.service.js

import { reservationSlotRepo } from "../repositories/reservationSlot.repo";
import { reservationRepo } from "../repositories/reservation.repo";

/* -----------------------------------------------------------------------------
 * PUBLIC
 * ---------------------------------------------------------------------------*/

export const listAvailableSlots = () =>
  reservationSlotRepo.listAvailable();

export const createReservationFromPublic = (input) =>
  reservationRepo.createFromPublic(input);

export const createReservationFromPublicSafe = async (input) => {
  try {
    await reservationRepo.createFromPublic(input);

    return { ok: true };
  } catch (err) {
    if (
      err instanceof Error &&
      err.message === "Ce créneau n’est plus disponible."
    ) {
      console.warn(
        "[reservations] slot unavailable in createReservationFromPublicSafe",
        {
          slotId: input.slotId,
        }
      );

      return {
        ok: false,
        reason: "slot-unavailable",
      };
    }

    console.error(
      "[reservations] unexpected error in createReservationFromPublicSafe",
      err
    );

    return {
      ok: false,
      reason: "unknown-error",
    };
  }
};

export const getSlotById = (id) =>
  reservationSlotRepo.findById(id);

/* -----------------------------------------------------------------------------
 * ADMIN - SLOTS
 * ---------------------------------------------------------------------------*/

export const listAllSlotsAdmin = () =>
  reservationSlotRepo.listAll();

export const createSlotAdmin = (data) =>
  reservationSlotRepo.create({
    startAt: data.startAt,
    endAt: data.endAt,
  });

export const setSlotStatusAdmin = async (id, status) => {
  const slot = await reservationSlotRepo.findById(id);

  if (!slot) {
    console.warn("[setSlotStatusAdmin] slot not found", id);
    throw new Error("SLOT_NOT_FOUND");
  }

  if (slot.status === "BOOKED" && status !== "BOOKED") {
    console.warn(
      "[setSlotStatusAdmin] attempt to change status on a booked slot - refused",
      {
        id,
        currentStatus: slot.status,
        requested: status,
      }
    );

    throw new Error("SLOT_BOOKED_HAS_RESERVATION");
  }

  return reservationSlotRepo.updateStatus(id, status);
};

export const deleteSlotAdmin = (id) =>
  reservationSlotRepo.deleteIfNoReservation(id);

/* -----------------------------------------------------------------------------
 * ADMIN - RESERVATIONS
 * ---------------------------------------------------------------------------*/

export const listAllReservationsAdmin = () =>
  reservationRepo.listAll();

export const listUpcomingReservationsAdmin = () =>
  reservationRepo.listUpcoming();

export const cancelReservationAdmin = (id) =>
  reservationRepo.cancel(id);

/* -----------------------------------------------------------------------------
 * RATE LIMIT
 * ---------------------------------------------------------------------------*/

const RESERVATION_RATE_LIMIT_WINDOW_MS = 2 * 60 * 1000;

export async function isReservationRateLimited(ip) {
  if (!ip) {
    console.warn(
      "[isReservationRateLimited] IP manquante, rate-limit non appliquée"
    );

    return false;
  }

  const since = new Date(
    Date.now() - RESERVATION_RATE_LIMIT_WINDOW_MS
  );

  const count = await reservationRepo.countRecentByIp(ip, since);

  return count >= 1;
}