// src/components/animations/RevealGroup.jsx

"use client";

import { Children } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  DISTANCE,
  DURATION,
  EASE,
  REDUCED_DURATION,
  STAGGER,
  STAGGER_MAX_TOTAL,
  VIEWPORT,
} from "@/lib/motion";
import { useRevealGate } from "./Reveal";

/**
 * Groupe dont les enfants `RevealItem` apparaissent successivement au
 * défilement. Rend UN SEUL élément DOM (choisi via `as`).
 *
 * Props (valeurs par défaut dans `src/lib/motion.js`) :
 * - as       balise du conteneur ("div" par défaut : "ul", "section"…)
 * - stagger  pas entre deux items en secondes (STAGGER par défaut). Il est
 *            réduit automatiquement pour que le décalage cumulé ne dépasse
 *            pas STAGGER_MAX_TOTAL, quel que soit le nombre d'items.
 * - delay    délai avant le premier item
 * - amount   part du GROUPE visible déclenchant l'animation (0,2 par défaut).
 *            Pour un groupe plus haut que l'écran, préférer "some".
 * - once     ne joue qu'une fois (true par défaut)
 * - className, et toute autre prop HTML.
 *
 * Les `RevealItem` doivent être des descendants directs du groupe (ou de
 * wrappers non animés) : ils héritent de l'état du groupe.
 *
 * @example
 * <RevealGroup className="grid gap-6 md:grid-cols-3">
 *   {items.map((item) => (
 *     <RevealItem key={item.id}>
 *       <Card {...item} />
 *     </RevealItem>
 *   ))}
 * </RevealGroup>
 */
export function RevealGroup({
  as = "div",
  stagger = STAGGER,
  delay = 0,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  children,
  ...props
}) {
  const reduced = useReducedMotion();
  const [ref, isHidden] = useRevealGate();

  const Component = motion[as] ?? motion.div;

  const count = Children.toArray(children).length;
  const step =
    count > 1 ? Math.min(stagger, STAGGER_MAX_TOTAL / (count - 1)) : 0;

  return (
    <Component
      ref={ref}
      initial={false}
      animate={isHidden ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { transition: { staggerChildren: 0 } },
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : step,
            delayChildren: reduced ? 0 : delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Élément d'un `RevealGroup`. Rend UN SEUL élément DOM (choisi via `as`).
 *
 * Props :
 * - as        balise ("div" par défaut : "li", "article"…)
 * - y, x      décalage initial en px (y = DISTANCE.md par défaut)
 * - scale     échelle initiale (optionnelle)
 * - duration  durée en secondes (DURATION.base par défaut)
 * - className, et toute autre prop HTML.
 *
 * Le délai de chaque item est géré par le groupe (stagger).
 */
export function RevealItem({
  as = "div",
  y = DISTANCE.md,
  x = 0,
  scale,
  duration = DURATION.base,
  children,
  ...props
}) {
  const reduced = useReducedMotion();

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
      ease: EASE,
    },
  };

  return (
    <Component variants={{ hidden, visible }} {...props}>
      {children}
    </Component>
  );
}

export default RevealGroup;
