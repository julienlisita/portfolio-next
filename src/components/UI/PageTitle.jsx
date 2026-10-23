// src/components/UI/PageTitle.jsx

export default function PageTitle({
  id,
  children,
  className = "",
  spacing = true,
}) {
  return (
    <h1
      id={id}
      className={`
        ${spacing ? "mt-12 sm:mt-16 lg:mt-24" : ""}
        text-3xl sm:text-4xl lg:text-5xl
        font-heading font-bold text-gray-100
        text-center
        ${className}
      `}
    >
      {children}
    </h1>
  );
}