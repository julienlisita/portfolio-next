// src/utils/color.js

/**
 * Applique une opacité à une couleur CSS (hex ou var(--color-*)).
 * `hexAlpha` est l'octet alpha en hexadécimal ("18", "33"…), ce qui permet
 * de remplacer directement l'ancienne écriture `${color}18`.
 */
export function alpha(color, hexAlpha) {
  const percent = Math.round((parseInt(hexAlpha, 16) / 255) * 1000) / 10;

  return `color-mix(in srgb, ${color} ${percent}%, transparent)`;
}
