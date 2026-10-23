// src/components/UI/SectionTitle.jsx

const alignmentClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function SectionTitle({
  id,
  children,
  className = "",
  align = "center",
  focusable = false,
}) {
  return (
    <h2
      id={id}
      tabIndex={focusable ? -1 : undefined}
      className={`
        text-2xl sm:text-3xl
        font-bold
        text-white
        ${alignmentClasses[align] ?? alignmentClasses.left}
        ${className}
      `}
    >
      {children}
    </h2>
  );
}