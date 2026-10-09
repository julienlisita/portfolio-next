// src/server/repositories/reservationSlot.repo.js

import { prisma } from "@/lib/prisma";

export const reservationSlotRepo = {
  listAvailable() {
    return prisma.reservationSlot.findMany({
      where: {
        status: "AVAILABLE",
        startAt: { gte: new Date() },
      },
      orderBy: { startAt: "asc" },
    });
  },

  findById(id) {
    return prisma.reservationSlot.findUnique({
      where: { id },
    });
  },

  updateStatus(id, status) {
    return prisma.reservationSlot.update({
      where: { id },
      data: { status },
    });
  },

  listAll() {
    return prisma.reservationSlot.findMany({
      orderBy: { startAt: "asc" },
    });
  },

  create(data) {
    return prisma.reservationSlot.create({ data });
  },

  async deleteIfNoReservation(id) {
    const existing = await prisma.reservation.findFirst({
      where: { slotId: id },
    });

    if (existing) {
      return false;
    }

    await prisma.reservationSlot.delete({
      where: { id },
    });

    return true;
  },
};