// src/components/common/SkillCard.jsx

'use client';

import { motion, useReducedMotion } from "framer-motion";

export default function SkillCard({ title, icons = [], description = "" }) {
  const prefersReducedMotion = useReducedMotion();

  // Accepte string ou array pour description
  const lines = Array.isArray(description)
    ? description
    : (description.includes("\n")
        ? description.split("\n")
        : description.split(/\. +/).map(s => s.trim()).filter(Boolean)
      ).map(s => (/\.$/.test(s) ? s : s + "."));

  return (
    <div className="relative pl-10 text-gray-200">
      {/* Lueur subtile (s'anime) */}
      <motion.div
        className="absolute left-0 top-0 h-full w-1 bg-linear-to-t from-[#9B59B6] to-[#007AFF] blur-[6px] z-10 pointer-events-none origin-top"
        initial={{ scaleY: 0, opacity: 0.6 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        transition={
          prefersReducedMotion ? {} : { delay: 0.35, duration: 0.5, ease: "easeOut" }
        }
        viewport={{ once: true, amount: 0.4 }}
      />

      {/* Trait net (s'anime légèrement après la lueur) */}
      <motion.div
        className="absolute left-0 top-0 h-full w-1 bg-linear-to-t from-[#9B59B6] to-[#007AFF] z-20 origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={
          prefersReducedMotion ? {} : { delay: 0.42, duration: 0.5, ease: "easeOut" }
        }
        viewport={{ once: true, amount: 0.4 }}
      />

      {/* Contenu (visible tout de suite, pas d’animation) */}
      <div className="relative z-30">
        <h3 className="text-lg font-semibold text-gray-100 mb-2">{title}</h3>

        <div className="space-y-1.5 mb-4">
          {lines.map((line, i) => (
            <p key={i} className="text-base text-gray-300">
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[#9B59B6] text-[28px]">
          {icons.map((Icon, i) => (
            <span key={i}>{Icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}