// src/server/repositories/reservation.repo.js

import { prisma } from "@/lib/prisma";

export const reservationRepo = {
  async createFromPublic(input) {
    return prisma.$transaction(async (tx) => {
      const now = new Date();

      const slot = await tx.reservationSlot.findUnique({
        where: { id: input.slotId },
      });

      if (!slot || slot.status !== "AVAILABLE" || slot.startAt < now) {
        console.warn("[reservationRepo.createFromPublic] slot invalid", {
          slotExists: !!slot,
          status: slot?.status,
          startAt: slot?.startAt,
          now,
        });

        throw new Error("Ce créneau n’est plus disponible.");
      }

      const reservation = await tx.reservation.create({
        data: {
          slotId: slot.id,
          clientName: input.clientName,
          clientEmail: input.clientEmail,
          message: input.message,
          clientIp: input.clientIp ?? null,
        },
      });

      await tx.reservationSlot.update({
        where: { id: slot.id },
        data: { status: "BOOKED" },
      });

      return reservation;
    });
  },

  listAll() {
    return prisma.reservation.findMany({
      include: {
        slot: {
          select: {
            startAt: true,
            endAt: true,
            status: true,
            id: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  },

  listUpcoming() {
    const now = new Date();

    return prisma.reservation.findMany({
      where: {
        slot: {
          startAt: { gte: now },
        },
      },
      include: {
        slot: {
          select: {
            startAt: true,
            endAt: true,
            status: true,
            id: true,
          },
        },
      },
      orderBy: {
        slot: {
          startAt: "asc",
        },
      },
    });
  },

  async cancel(id) {
    return prisma.$transaction(async (tx) => {
      const reservation = await tx.reservation.findUnique({
        where: { id },
      });

      if (!reservation) {
        throw new Error("RESERVATION_NOT_FOUND");
      }

      await tx.reservationSlot.update({
        where: { id: reservation.slotId },
        data: { status: "AVAILABLE" },
      });

      return tx.reservation.delete({
        where: { id },
      });
    });
  },

  countRecentByIp(ip, since) {
    return prisma.reservation.count({
      where: {
        clientIp: ip,
        createdAt: {
          gte: since,
        },
      },
    });
  },
};