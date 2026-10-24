"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SkillCard({
  title,
  icons = [],
  description = "",
}) {
  const prefersReducedMotion = useReducedMotion();

  const animation = prefersReducedMotion
    ? { scaleY: 1, opacity: 1 }
    : { scaleY: 1, opacity: 1 };

  return (
    <div className="relative h-full pl-6 sm:pl-8 text-gray-200">
      {/* Lueur du trait */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-0 top-0
          h-full w-1
          origin-top
          bg-linear-to-t
          from-[#9B59B6] to-[#007AFF]
          blur-[6px]
        "
        initial={
          prefersReducedMotion
            ? false
            : { scaleY: 0, opacity: 0.6 }
        }
        whileInView={animation}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                delay: 0.35,
                duration: 0.5,
                ease: "easeOut",
              }
        }
        viewport={{ once: true, amount: 0.4 }}
      />

      {/* Trait principal */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-0 top-0
          h-full w-1
          origin-top
          bg-linear-to-t
          from-[#9B59B6] to-[#007AFF]
        "
        initial={
          prefersReducedMotion
            ? false
            : { scaleY: 0 }
        }
        whileInView={{ scaleY: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                delay: 0.42,
                duration: 0.5,
                ease: "easeOut",
              }
        }
        viewport={{ once: true, amount: 0.4 }}
      />

      {/* Contenu */}
      <div className="relative flex h-full flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-400">
          {description}
        </p>

        {/* Technologies */}
        <div
          className="
            mt-4
            flex flex-wrap items-center
            gap-4 sm:gap-5
            text-[#9B59B6]
            text-2xl sm:text-[28px]
          "
        >
          {icons.map((icon, index) => (
            <span key={index} aria-hidden="true">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}