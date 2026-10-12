// src/app/admin/slots/actions.js

"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { fromZonedTime } from "date-fns-tz";

import { requireAdmin } from "@/server/guards/requireAdmin";

import {
  createSlotAdmin,
  deleteSlotAdmin,
  setSlotStatusAdmin,
} from "@/server/services/reservations.service";

const TZ = "Europe/Paris";
const SLOT_DURATION_MINUTES = 30;

/*
 * Création d'un créneau
 *
 * L'administrateur choisit uniquement :
 * - une date
 * - une heure de début
 *
 * La durée est toujours de 30 minutes.
 * Les horaires autorisés vont de 09:00 à 18:30,
 * par intervalles de 30 minutes.
 */
const createSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^(09|1[0-8]):(00|30)$/),
});

export async function createSlotAction(formData) {
  await requireAdmin();

  const parsed = createSchema.safeParse({
    date: formData.get("date"),
    time: formData.get("time"),
  });

  if (!parsed.success) {
    console.error(
      "[createSlotAction] invalid data",
      parsed.error.flatten()
    );
    return;
  }

  const { date, time } = parsed.data;

  try {
    // La date et l'heure saisies correspondent à l'heure de Paris.
    const startAtUtc = fromZonedTime(`${date}T${time}`, TZ);

    // Chaque rendez-vous dure exactement 30 minutes.
    const endAtUtc = new Date(
      startAtUtc.getTime() + SLOT_DURATION_MINUTES * 60 * 1000
    );

    await createSlotAdmin({
      startAt: startAtUtc,
      endAt: endAtUtc,
    });
  } catch (err) {
    console.error("[createSlotAction] error", err);
  }

  revalidatePath("/admin/slots");
}

/*
 * Activation / désactivation d'un créneau
 */
const statusSchema = z.object({
  slotId: z.coerce.number().int().positive(),
  status: z.enum(["AVAILABLE", "DISABLED"]),
});

export async function updateSlotStatusAction(formData) {
  await requireAdmin();

  const parsed = statusSchema.safeParse({
    slotId: formData.get("slotId"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    console.error(
      "[updateSlotStatusAction] invalid payload",
      parsed.error.flatten()
    );
    return;
  }

  const { slotId, status } = parsed.data;

  try {
    await setSlotStatusAdmin(slotId, status);
  } catch (err) {
    console.error("[updateSlotStatusAction] error", err);
  }

  revalidatePath("/admin/slots");
}

/*
 * Suppression d'un créneau
 */
const deleteSchema = z.object({
  slotId: z.coerce.number().int().positive(),
});

export async function deleteSlotAction(formData) {
  await requireAdmin();

  const parsed = deleteSchema.safeParse({
    slotId: formData.get("slotId"),
  });

  if (!parsed.success) {
    console.error(
      "[deleteSlotAction] invalid payload",
      parsed.error.flatten()
    );
    return;
  }

  try {
    await deleteSlotAdmin(parsed.data.slotId);
  } catch (err) {
    console.error("[deleteSlotAction] error", err);
  }

  revalidatePath("/admin/slots");
}