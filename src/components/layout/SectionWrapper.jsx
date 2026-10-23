// src/components/layout/SectionWrapper.jsx

export default function SectionWrapper({
  children,
  className = "",
  spacing = false,
}) {
  return (
    <div
      className={`
        mx-auto w-full max-w-7xl
        px-4 sm:px-8 lg:px-12
        ${spacing ? "space-y-6 sm:space-y-8 lg:space-y-12" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}