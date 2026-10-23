// src/components/UI/SectionHeading.jsx

import SectionTitle from "../UI/SectionTitle";


export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const isCentered = align === "center";

  return (
    <div
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
            className="h-px w-8 bg-[#5AC8FA]"
          />

          <span className="text-xs font-semibold tracking-[0.16em] text-[#5AC8FA]">
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
    </div>
  );
}