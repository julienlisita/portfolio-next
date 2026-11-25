// src/components/UI/SectionHeading.jsx

import SectionTitle from "../UI/SectionTitle";
import Reveal from "../animations/Reveal";


export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  reveal = false,
}) {
  const isCentered = align === "center";

  // `reveal` : apparition au défilement (désactivée par défaut). Le conteneur
  // reste le même élément <div> : aucun wrapper supplémentaire.
  const Wrapper = reveal ? Reveal : "div";

  return (
    <Wrapper
      className={`
        ${isCentered ? "text-center" : "text-left"}
        ${className}
      `}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <div
          className={`
            mb-4 flex items-center gap-3
            ${isCentered ? "justify-center" : ""}
          `}
        >
          <span
            aria-hidden="true"
            className="h-px w-8 bg-accent"
          />

          <span className="text-xs font-semibold tracking-[0.16em] text-accent">
            {eyebrow}
          </span>
        </div>
      )}

      {/* Titre */}
      <SectionTitle id={id} align={align}>
        {title}
      </SectionTitle>

      {/* Description */}
      {description && (
        <p
          className={`
            mt-4 max-w-2xl
            text-base leading-relaxed text-gray-300
            ${isCentered ? "mx-auto" : ""}
          `}
        >
          {description}
        </p>
      )}
    </Wrapper>
  );
}