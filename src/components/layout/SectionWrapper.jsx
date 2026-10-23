// src/components/layout/SectionWrapper.jsx

export default function SectionWrapper({
  children,
  className = "",
  spacing = false,
}) {
  return (
    <div
      className={`
        px-4 sm:px-8 lg:px-24 xl:px-32
        ${spacing ? "space-y-6 sm:space-y-8 lg:space-y-12" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}