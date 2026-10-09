// src/app/admin/slots/actions.js

"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { fromZonedTime } from "date-fns-tz";

import {
  createSlotAdmin,
  deleteSlotAdmin,
  setSlotStatusAdmin,
} from "@/server/services/reservations.service";

const TZ = "Europe/Paris";

const createSchema = z.object({
  startAt: z.string().min(1),
  endAt: z.string().min(1),
});

export async function createSlotAction(formData) {
  const parsed = createSchema.safeParse({
    startAt: formData.get("startAt"),
    endAt: formData.get("endAt"),
  });

  if (!parsed.success) {
    console.error(
      "[createSlotAction] invalid data",
      parsed.error.flatten()
    );
    return;
  }

  const { startAt, endAt } = parsed.data;

  try {
    const startAtUtc = fromZonedTime(startAt, TZ);
    const endAtUtc = fromZonedTime(endAt, TZ);

    await createSlotAdmin({
      startAt: startAtUtc,
      endAt: endAtUtc,
    });
  } catch (err) {
    console.error("[createSlotAction] error", err);
  }

  revalidatePath("/admin/slots");
}

const statusSchema = z.object({
  slotId: z.coerce.number().int().positive(),
  status: z.enum(["AVAILABLE", "DISABLED"]),
});

export async function updateSlotStatusAction(formData) {
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

const deleteSchema = z.object({
  slotId: z.coerce.number().int().positive(),
});

export async function deleteSlotAction(formData) {
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