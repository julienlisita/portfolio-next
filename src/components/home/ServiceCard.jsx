// ServiceCard.jsx

import Button from "../UI/Button";

export default function ServiceCard({
  icon,
  title,
  subtitle,
  description,
  color,
  link,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${color[0]}, ${color[1]})`,
  };

  return (
    <div className="bg-[#2a2a2a] w-full text-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
      {/* Bandeau haut */}
      <div
        className="w-full h-28 flex flex-col items-center justify-center space-y-1 px-3"
        style={gradientStyle}
      >
        <div className="text-3xl">{icon}</div>

        <h3 className="text-lg font-semibold text-white text-center leading-tight">
          {title}
        </h3>

        {subtitle && (
          <p className="text-xs text-white/80 text-center leading-snug">
            {subtitle}
          </p>
        )}
      </div>

      {/* Corps */}
      <div className="p-6 pt-4 flex flex-col flex-1">
        <p className="text-base text-left text-gray-200 flex-1">
          {description}
        </p>

        {link && (
          <div className="mt-4 flex justify-center">
            <Button to={link} variant="text">
              Découvrir ›
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}