// src/components/howIWork/TechCard.jsx

export default function TechCard({
  icon: Icon,
  name,
  description,
  color = "#007AFF",
}) {
  return (
    <div
      className="
        flex flex-col items-center
        rounded-2xl
        border border-[#333]
        bg-[#2a2a2a]
        p-4
        text-center text-gray-200
        shadow-[0_0_6px_rgba(0,0,0,0.4)]
        transition-all duration-300
        hover:border-[var(--color)]
        hover:shadow-[0_0_14px_var(--color)]
      "
      style={{ "--color": color }}
    >
      {Icon && (
        <Icon
          aria-hidden="true"
          className="mb-3 h-10 w-10 transition-colors duration-300"
          style={{ color }}
        />
      )}

      <h4 className="mb-1 text-base font-semibold text-gray-100 sm:text-lg">
        {name}
      </h4>

      {description && (
        <p className="text-sm leading-relaxed text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}