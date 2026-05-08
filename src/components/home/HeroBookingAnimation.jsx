"use client";

import { motion } from "framer-motion";
import { CalendarDays, CheckCircle, MousePointerClick } from "lucide-react";

export default function HeroBookingAnimation() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-[#5AC8FA]/25 bg-white p-3 sm:p-4 shadow-xl shadow-[#5AC8FA]/10">
      
      <div className="relative h-44 sm:h-60 lg:h-72 overflow-hidden rounded-2xl bg-[#007AFF]/5 p-3 sm:p-4">
        
        {/* Étape 1 : site vitrine */}
        <motion.div
          className="absolute inset-3 sm:inset-4 rounded-2xl bg-white p-3 sm:p-4 shadow-sm"
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: [1, 1, 0, 0, 1],
            y: [0, 0, -16, -16, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            times: [0, 0.28, 0.36, 0.9, 1],
            ease: "easeInOut",
          }}
        >
          <div className="mb-3 h-20 sm:h-24 rounded-xl bg-slate-200" />

          <div className="space-y-2">
            <div className="h-2.5 sm:h-3 w-3/4 rounded-full bg-slate-300" />
            <div className="h-2.5 sm:h-3 w-1/2 rounded-full bg-slate-200" />
          </div>

          <motion.button
            className="mt-4 sm:mt-6 flex items-center gap-2 rounded-full bg-[#007AFF] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white shadow-md shadow-[#007AFF]/20"
            animate={{ scale: [1, 1, 0.96, 1] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              times: [0, 0.2, 0.24, 0.28],
            }}
          >
            Prendre rendez-vous
            <MousePointerClick size={15} />
          </motion.button>
        </motion.div>

        {/* Étape 2 : choix du créneau */}
        <motion.div
          className="absolute inset-3 sm:inset-4 rounded-2xl bg-white p-3 sm:p-4 shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: [0, 0, 1, 1, 0],
            y: [16, 16, 0, 0, -16],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            times: [0, 0.32, 0.42, 0.68, 0.78],
            ease: "easeInOut",
          }}
        >
          <div className="mb-3 flex items-center gap-2">
            <CalendarDays size={16} className="text-[#007AFF]" />
            <h4 className="text-sm sm:text-base font-semibold text-slate-900">
              Choisir un créneau
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {["09:30", "11:00", "14:00", "16:30"].map((slot, index) => (
              <motion.div
                key={slot}
                className="rounded-xl border border-slate-200 px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium text-slate-700"
                animate={
                  index === 2
                    ? {
                        backgroundColor: [
                          "#ffffff",
                          "#ffffff",
                          "#007AFF",
                          "#007AFF",
                        ],
                        color: ["#334155", "#334155", "#ffffff", "#ffffff"],
                        scale: [1, 1, 1.04, 1],
                      }
                    : undefined
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  times: [0, 0.48, 0.56, 0.66],
                }}
              >
                {slot}
              </motion.div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 rounded-xl bg-[#5AC8FA]/10 p-2 sm:p-3 text-xs sm:text-sm text-slate-600">
            Créneau sélectionné.
          </div>
        </motion.div>

        {/* Étape 3 : confirmation */}
        <motion.div
          className="absolute inset-3 sm:inset-4 flex flex-col items-center justify-center rounded-2xl bg-white p-4 sm:p-6 text-center shadow-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: [0, 0, 1, 1, 0],
            scale: [0.96, 0.96, 1, 1, 0.96],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            times: [0, 0.68, 0.78, 0.9, 1],
            ease: "easeInOut",
          }}
        >
          <CheckCircle
            size={38}
            className="mb-3 text-[#007AFF] sm:size-[46px]"
          />

          <h4 className="text-base sm:text-lg font-semibold text-slate-900">
            Rendez-vous confirmé
          </h4>

          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Confirmation envoyée, organisation simplifiée.
          </p>
        </motion.div>
      </div>
    </div>
  );
}