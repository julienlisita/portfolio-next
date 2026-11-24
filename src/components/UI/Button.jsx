// src/components/UI/Button.jsx

import Link from "next/link";

export default function Button({
  variant = "secondary",
  size = "default",
  className = "",
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    text-center font-semibold
    rounded-full border
    transition duration-300 transform
  `;

  const sizes = {
    default: `
      px-6 py-3 text-sm
      sm:px-5 sm:py-2.5 sm:text-base
      lg:px-6 lg:py-3 lg:text-lg
      min-w-32
      hover:scale-105 active:scale-105
    `,
    sm: `
      px-3 py-1.5 text-sm
      sm:px-4 sm:py-2 sm:text-sm
      min-w-0
      hover:scale-100 active:scale-100
    `,
  };

  const variantStyles = {
    primary: `
      text-canvas
      bg-accent
      border-accent
      hover:bg-canvas
      hover:text-accent
      hover:shadow-[0_0_10px_2px_var(--color-accent)]
      active:bg-accent-strong
      active:text-canvas
    `,
    secondary: `
      text-accent
      bg-canvas
      border-accent
      hover:bg-accent-strong
      hover:text-canvas
      hover:shadow-[0_0_8px_2px_var(--color-accent)]
      active:bg-accent-strong
      active:text-canvas
    `,
    text: `
      px-0 py-0
      min-w-0
      border-none
      rounded-none
      bg-transparent
      text-accent
      font-medium
      hover:text-accent-strong
      hover:shadow-none
      hover:scale-100
      transition-colors
    `,
  };

  const mergedClassName = `${baseStyles} ${sizes[size]} ${variantStyles[variant]} ${className}`;

  const newProps = {
    ...props,
    className: mergedClassName,
  };

  if (props.href?.startsWith("/")) {
    return <Link {...newProps} />;
  }

  if (props.href) {
    return <a {...newProps} />;
  }

  return <button {...newProps} />;
}