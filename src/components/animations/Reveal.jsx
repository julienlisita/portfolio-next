// src/components/animations/Reveal.jsx

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  DISTANCE,
  DURATION,
  EASE,
  REDUCED_DURATION,
  VIEWPORT,
} from "@/lib/motion";

/**
 * Masque un élément « sous la ligne de flottaison » une fois le JavaScript
 * chargé, pour que `whileInView` puisse le révéler au défilement.
 *
 * - Rendu serveur et premier rendu client : élément VISIBLE (contenu lisible
 *   sans JavaScript et avant hydratation, aucun impact sur le LCP).
 * - Élément déjà visible (ou au-dessus du viewport) au montage : il reste
 *   visible, sans animation.
 * - Élément en dessous du viewport au montage : masqué instantanément (hors
 *   écran, donc sans scintillement), puis révélé quand il entre dans l'écran.
 *
 * Retourne `[ref, isHidden]`.
 */
export function useRevealGate() {
  const ref = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { top } = element.getBoundingClientRect();

    if (top >= window.innerHeight) {
      setIsHidden(true);
    }
  }, []);

  return [ref, isHidden];
}

/**
 * Variante « sur mesure » de la même mécanique, pour les animations
 * spécifiques (micro-animations d'un mockup, d'un tableau de bord…) qui
 * gardent leur propre chorégraphie mais ne doivent pas masquer leur contenu
 * avant hydratation ou sans JavaScript.
 *
 * Retourne les props à étaler sur un élément `motion.*` :
 *   const props = useGatedInView({ from, to, transition, amount, disabled });
 *   <motion.div {...props}>
 *
 * - from        état masqué (ex. { opacity: 0, x: -12 })
 * - to          état final (ex. { opacity: 1, x: 0 })
 * - transition  transition jouée à l'apparition (délais, durée, ease…)
 * - amount      part visible déclenchant l'animation
 * - disabled    true (ex. reduced motion) : l'élément reste visible, sans animation
 */
export function useGatedInView({
  from,
  to,
  transition,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  disabled = false,
}) {
  const [ref, isHidden] = useRevealGate();
  const hide = isHidden && !disabled;

  return {
    ref,
    initial: false,
    animate: hide ? { ...from, transition: { duration: 0 } } : to,
    whileInView: { ...to, transition },
    viewport: { once, amount },
  };
}

/**
 * Apparition au défilement d'un élément : fondu + translation légère.
 * Rend UN SEUL élément DOM (choisi via `as`) : pas de wrapper supplémentaire.
 *
 * Props (valeurs par défaut dans `src/lib/motion.js`) :
 * - as        balise rendue ("div" par défaut : "section", "p", "h2", "li"…)
 * - y, x      décalage initial en px (y = DISTANCE.md par défaut)
 * - scale     échelle initiale (ex. 0.96) ; ignorée si non fournie
 * - delay     délai en secondes
 * - duration  durée en secondes (DURATION.base par défaut)
 * - amount    part de l'élément visible déclenchant l'animation (0 à 1, ou "some"/"all").
 *             Pour un élément plus haut que l'écran, préférer "some".
 * - once      ne joue l'animation qu'une fois (true par défaut)
 * - className, et toute autre prop HTML (id, aria-*, style…)
 *
 * Reduced motion : avec `MotionConfig reducedMotion="user"` (SiteLayout), les
 * translations et échelles sont neutralisées ; ici, délai supprimé et durée
 * réduite pour ne garder qu'un fondu discret.
 *
 * Ne pas imbriquer un Reveal dans un autre Reveal / RevealGroup sur le même
 * contenu : une seule couche d'animation par élément.
 *
 * @example
 * <Reveal as="p" className="mt-4 text-gray-300">Texte…</Reveal>
 * <Reveal y={DISTANCE.lg} scale={0.96} duration={DURATION.slow}>
 *   <Mockup />
 * </Reveal>
 */
export default function Reveal({
  as = "div",
  y = DISTANCE.md,
  x = 0,
  scale,
  delay = 0,
  duration = DURATION.base,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  children,
  ...props
}) {
  const reduced = useReducedMotion();
  const [ref, isHidden] = useRevealGate();

  const Component = motion[as] ?? motion.div;

  const hidden = {
    opacity: 0,
    y,
    x,
    ...(scale !== undefined && { scale }),
    transition: { duration: 0 },
  };

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    ...(scale !== undefined && { scale: 1 }),
    transition: {
      duration: reduced ? REDUCED_DURATION : duration,
      delay: reduced ? 0 : delay,
      ease: EASE,
    },
  };

  return (
    <Component
      ref={ref}
      initial={false}
      animate={isHidden ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{ hidden, visible }}
      {...props}
    >
      {children}
    </Component>
  );
}
