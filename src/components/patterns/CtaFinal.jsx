// src/components/common/CtaFinal.jsx

import { motion } from "framer-motion";
import Button from "../UI/Button";
import Section from "../layout/Section";

export default function CtaFinal({title, tagline, primary, secondary}) {
  return (
    <motion.div
      // Apparition identique au ContactForm
      initial={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
      whileInView={{
        boxShadow:
          "0px 0px 12px rgba(90,200,250,0.4), 0px 0px 12px rgba(90,200,250,0.4)",
      }}
      transition={{ delay: 1 }}
      viewport={{ once: true }}

      // Pulse au hover (respire tant que l'utilisateur survole)
      whileHover={{
        boxShadow: [
          "0px 0px 10px rgba(90,200,250,0.35), 0px 0px 10px rgba(90,200,250,0.35)",
          "0px 0px 18px rgba(90,200,250,0.55), 0px 0px 18px rgba(90,200,250,0.55)",
          "0px 0px 10px rgba(90,200,250,0.35), 0px 0px 10px rgba(90,200,250,0.35)",
        ],
        transition: { duration: 1.2, repeat: Infinity },
      }}
      className="rounded-xl"
    >
      <Section className="text-center bg-linear-to-r from-[#1e1e1e] to-[#2a2a2a] rounded-xl px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-gray-100">{title}</h2>
        <p className="mt-4 mb-6 text-base sm:text-lg lg:text-xl text-gray-300">
         {tagline}
        </p>
        <div className="flex flex-row gap-4 flex-wrap justify-center  items-center">
            <Button to={primary.href} variant="primary" className="w-auto">
            {primary.text}
            </Button>
            {secondary && (
            <Button to={secondary.href} variant="secondary" className="w-auto">
                {secondary.text}
            </Button>
            )}
        </div>
      </Section>
    </motion.div>
  );
}