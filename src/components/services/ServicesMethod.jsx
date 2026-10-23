"use client";

// src/components/services/ServicesMethod.jsx

import { useEffect, useId, useRef, useState } from "react";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import {
  MessagesSquare,
  PenTool,
  Code2,
  Rocket,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import Section from "../layout/Section";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../layout/SectionHeading";

import Button from "../UI/Button";

// ─────────────────────────────────────────────
// Données des étapes
// ─────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Échange initial",
    description:
      "Nous clarifions vos besoins, vos objectifs et les priorités du projet.",
    icon: MessagesSquare,
    color: "#5AC8FA",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Je vous propose une structure claire, un parcours cohérent et une direction visuelle adaptée.",
    icon: PenTool,
    color: "#007AFF",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Je développe le site ou les fonctionnalités, avec des points réguliers pour valider l’avancement.",
    icon: Code2,
    color: "#5265E8",
  },
  {
    number: "04",
    title: "Mise en ligne",
    description:
      "Votre site est publié, testé et accessible sur tous les supports.",
    icon: Rocket,
    color: "#7960D9",
  },
  {
    number: "05",
    title: "Suivi & maintenance",
    description:
      "Je peux rester disponible pour les ajustements, la maintenance ou les futures évolutions.",
    icon: Wrench,
    color: "#9B59B6",
  },
];

// ─────────────────────────────────────────────
// Positions des étapes sur desktop
// ─────────────────────────────────────────────

const desktopPositions = [
  "ml-[6%]",
  "ml-[65%]",
  "ml-[20%]",
  "ml-[72%]",
  "ml-[35%]",
];

// ─────────────────────────────────────────────
// Utilitaires
// ─────────────────────────────────────────────

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function buildPath(points, desktop) {
  if (points.length < 2) return "";

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let index = 1; index < points.length; index++) {
    const previous = points[index - 1];
    const current = points[index];

    if (desktop) {
      const middleY = (previous.y + current.y) / 2;

      path += `
        C ${previous.x} ${middleY},
          ${current.x} ${middleY},
          ${current.x} ${current.y}
      `;
    } else {
      path += ` L ${current.x} ${current.y}`;
    }
  }

  return path;
}

// Calcule les seuils correspondant à la longueur
// réelle du chemin SVG.
function getPathThresholds(path, points) {
  if (!path || points.length < 2) {
    return steps.map(
      (_, index) => index / (steps.length - 1)
    );
  }

  const namespace = "http://www.w3.org/2000/svg";

  const pathElement = document.createElementNS(
    namespace,
    "path"
  );

  pathElement.setAttribute("d", path);

  const totalLength = pathElement.getTotalLength();

  if (!totalLength) {
    return steps.map(
      (_, index) => index / (steps.length - 1)
    );
  }

  const thresholds = [0];

  let previousLength = 0;

  for (let index = 1; index < points.length - 1; index++) {
    const target = points[index];

    let bestLength = previousLength;
    let bestDistance = Infinity;

    // 80 échantillons au lieu de 1200
    const samples = 80;

    for (let sample = 0; sample <= samples; sample++) {
      const length =
        previousLength +
        ((totalLength - previousLength) * sample) /
          samples;

      const point = pathElement.getPointAtLength(length);

      const distance =
        (point.x - target.x) ** 2 +
        (point.y - target.y) ** 2;

      if (distance < bestDistance) {
        bestDistance = distance;
        bestLength = length;
      }
    }

    previousLength = bestLength;

    thresholds.push(bestLength / totalLength);
  }

  thresholds.push(1);

  return thresholds;
}

// ─────────────────────────────────────────────
// Mesure des centres des bulles
// ─────────────────────────────────────────────

function usePathGeometry(containerRef, nodeRefs, desktop) {
  const [geometry, setGeometry] = useState({
    width: 0,
    height: 0,
    points: [],
    path: "",
    thresholds: [],
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const nodes = nodeRefs.current;

      if (
        nodes.length !== steps.length ||
        nodes.some((node) => !node)
      ) {
        return;
      }

      const points = nodes.map((node) => {
        const rect = node.getBoundingClientRect();

        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      });

      const path = buildPath(points, desktop);

      setGeometry({
        width: containerRect.width,
        height: containerRect.height,
        points,
        path,
        thresholds: desktop
          ? getPathThresholds(path, points)
          : points.map((point) =>
              clamp(
                (point.y - points[0].y) /
                  (points[points.length - 1].y - points[0].y)
              )
            ),
      });
    };

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(container);

    nodeRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [containerRef, nodeRefs, desktop]);

  return geometry;
}

// ─────────────────────────────────────────────
// Progression persistante au scroll
// ─────────────────────────────────────────────

function useJourneyProgress(containerRef, geometry) {
  const { scrollY } = useScroll();

  const maxProgress = useMotionValue(0);

  const smoothProgress = useSpring(maxProgress, {
    stiffness: 110,
    damping: 32,
    mass: 0.4,
  });

  useEffect(() => {
    if (geometry.points.length < 2) return;

    const update = () => {
      const container = containerRef.current;

      if (!container) return;

      const rect = container.getBoundingClientRect();
      const triggerY = window.innerHeight * 0.75;

      const firstY = rect.top + geometry.points[0].y;

      const lastY =
        rect.top + geometry.points[geometry.points.length - 1].y;

      const current = clamp(
        (triggerY - firstY) / (lastY - firstY)
      );

      if (current > maxProgress.get()) {
        maxProgress.set(current);
      }
    };

    update();

    const unsubscribe = scrollY.on("change", update);

    window.addEventListener("resize", update);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", update);
    };
  }, [containerRef, geometry, maxProgress, scrollY]);

  return smoothProgress;
}

// ─────────────────────────────────────────────
// Étape animée
// ─────────────────────────────────────────────

function AnimatedStep({
  step,
  progress,
  threshold,
  setNodeRef,
  mobile = false,
  reducedMotion = false,
}) {
  const Icon = step.icon;

  const [revealed, setRevealed] = useState(false);

  useMotionValueEvent(progress, "change", (value) => {
    if (reducedMotion || revealed) return;

    if (value >= threshold) {
      setRevealed(true);
    }
  });

  useEffect(() => {
    if (reducedMotion || progress.get() >= threshold) {
      setRevealed(true);
    }
  }, [progress, threshold, reducedMotion]);

  const visible = reducedMotion || revealed;

  return (
    <article
      className={
        mobile
          ? "relative flex items-start gap-6 sm:gap-8"
          : "relative z-10 max-w-[340px]"
      }
    >
      {/* Bulle */}
      <motion.div
        ref={setNodeRef}
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.8,
        }}
        transition={{
          duration: reducedMotion ? 0 : 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          relative z-10 flex shrink-0
          items-center justify-center
          rounded-full p-[2px]
          ${
            mobile
              ? "h-20 w-20 sm:h-24 sm:w-24"
              : "mb-6 h-24 w-24"
          }
        `}
        style={{
          background: `linear-gradient(
            135deg,
            ${step.color},
            ${step.color}55
          )`,
          boxShadow: visible
            ? `0 0 35px ${step.color}25`
            : "none",
        }}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#343434]">
          <Icon
            size={mobile ? 30 : 32}
            strokeWidth={1.6}
            style={{ color: step.color }}
            aria-hidden="true"
          />
        </div>

        {!mobile && (
          <span
            className="
              absolute -right-2 -top-2
              flex h-8 w-8 items-center justify-center
              rounded-full border border-white/10
              bg-[#414141] text-xs font-bold text-white
            "
          >
            {step.number}
          </span>
        )}
      </motion.div>

      {/* Numéro et texte */}
      <motion.div
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : 18,
        }}
        transition={{
          duration: reducedMotion ? 0 : 0.5,
          delay: visible && !reducedMotion ? 0.12 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={mobile ? "min-w-0 pt-1 sm:pt-3" : "max-w-[320px]"}
      >
        {mobile && (
          <span
            className="mb-2 block text-xs font-bold tracking-widest"
            style={{ color: step.color }}
          >
            ÉTAPE {step.number}
          </span>
        )}

        <h3
          className={
            mobile
              ? "mb-2 text-lg font-semibold text-white sm:text-xl"
              : "mb-3 text-xl font-semibold text-white"
          }
        >
          {step.title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
          {step.description}
        </p>
      </motion.div>
    </article>
  );
}

// ─────────────────────────────────────────────
// Tracé SVG desktop
// ─────────────────────────────────────────────

function DesktopAnimatedPath({
  geometry,
  progress,
  reducedMotion,
}) {
  const { width, height, path } = geometry;

  const id = useId().replace(/:/g, "");
  const gradientId = `journey-gradient-${id}`;

  if (!path || !width || !height) return null;

  return (
    <svg
      aria-hidden="true"
      className="
        pointer-events-none absolute inset-0
        h-full w-full overflow-visible
      "
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#5AC8FA" />
          <stop offset="25%" stopColor="#007AFF" />
          <stop offset="50%" stopColor="#5265E8" />
          <stop offset="75%" stopColor="#7960D9" />
          <stop offset="100%" stopColor="#9B59B6" />
        </linearGradient>
      </defs>

      {/* Ligne de fond */}
      <path
        d={path}
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeOpacity="0.08"
      />

      {/* Halo progressif */}
      <motion.path
        d={path}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="10"
        strokeOpacity="0.18"
        strokeLinecap="round"
        initial={false}
        style={{
          pathLength: reducedMotion ? 1 : progress,
        }}
      />

      {/* Fil coloré */}
      <motion.path
        d={path}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="3"
        strokeLinecap="round"
        initial={false}
        style={{
          pathLength: reducedMotion ? 1 : progress,
        }}
      />
    </svg>
  );
}

// ─────────────────────────────────────────────
// Tracé CSS mobile / tablette
// ─────────────────────────────────────────────

function MobileAnimatedPath({
  geometry,
  progress,
  reducedMotion,
}) {
  const { points } = geometry;

  const height =
    points.length >= 2
      ? points[points.length - 1].y - points[0].y
      : 0;

  const fillHeight = useTransform(
    progress,
    (value) => `${clamp(value) * 100}%`
  );

  if (points.length < 2 || height <= 0) {
    return null;
  }

  const gradient =
    "linear-gradient(to bottom, #5AC8FA 0%, #007AFF 25%, #5265E8 50%, #7960D9 75%, #9B59B6 100%)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute z-0"
      style={{
        left: points[0].x,
        top: points[0].y,
        height,
        width: 3,
        transform: "translateX(-50%)",
      }}
    >
      {/* Ligne de fond */}
      <div className="absolute inset-0 rounded-full bg-white/10" />

      {/* Conteneur qui révèle progressivement le dégradé */}
      <motion.div
        className="absolute inset-x-0 top-0 overflow-hidden"
        style={{
          height: reducedMotion ? "100%" : fillHeight,
        }}
      >
        {/* Fil coloré : dégradé non compressé */}
        <div
          className="absolute left-0 top-0 w-full rounded-full"
          style={{
            height,
            background: gradient,
          }}
        />
      </motion.div>

      {/* Halo lumineux progressif */}
      <motion.div
        className="
          absolute left-1/2 top-0
          w-[9px] -translate-x-1/2
          overflow-hidden opacity-20 blur-[4px]
        "
        style={{
          height: reducedMotion ? "100%" : fillHeight,
        }}
      >
        <div
          className="absolute left-0 top-0 w-full"
          style={{
            height,
            background: gradient,
          }}
        />
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Parcours commun desktop / mobile
// ─────────────────────────────────────────────

function Journey({
  mobile = false,
  reducedMotion = false,
}) {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);

  const geometry = usePathGeometry(
    containerRef,
    nodeRefs,
    !mobile
  );

  const progress = useJourneyProgress(
    containerRef,
    geometry
  );

  return (
    <div
      ref={containerRef}
      className={
        mobile
          ? "relative mt-14 lg:hidden"
          : "relative mx-auto mt-20 hidden max-w-5xl lg:block"
      }
    >
      {mobile ? (
        <MobileAnimatedPath
          geometry={geometry}
          progress={progress}
          reducedMotion={reducedMotion}
        />
      ) : (
        <DesktopAnimatedPath
          geometry={geometry}
          progress={progress}
          reducedMotion={reducedMotion}
        />
      )}

      <div
        className={
          mobile
            ? "relative space-y-14"
            : "relative"
        }
      >
        {steps.map((step, index) => {
          const threshold =
            geometry.thresholds[index] ??
            index / (steps.length - 1);

          if (mobile) {
            return (
              <AnimatedStep
                key={step.number}
                step={step}
                progress={progress}
                threshold={threshold}
                mobile
                reducedMotion={reducedMotion}
                setNodeRef={(node) => {
                  nodeRefs.current[index] = node;
                }}
              />
            );
          }

          return (
            <div
              key={step.number}
              className="min-h-[250px]"
            >
              <div className={desktopPositions[index]}>
                <AnimatedStep
                  step={step}
                  progress={progress}
                  threshold={threshold}
                  reducedMotion={reducedMotion}
                  setNodeRef={(node) => {
                    nodeRefs.current[index] = node;
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Composant principal
// ─────────────────────────────────────────────

export default function ServicesMethod() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="services-method"
      labelledBy="services-method-title"
    >
      <SectionWrapper>
        <SectionHeading
          id="services-method-title"
          eyebrow="MON ACCOMPAGNEMENT"
          title="Ma méthode de travail"
          description="De notre premier échange jusqu'à la mise en ligne, chaque étape est pensée pour faire avancer votre projet sereinement, avec une vision claire de son évolution."
          align="left"
        />

        {/* Desktop : zigzag animé */}
        <Journey reducedMotion={reducedMotion} />

        {/* Mobile / tablette : ligne verticale animée */}
        <Journey mobile reducedMotion={reducedMotion} />

        {/* Lien vers la méthode détaillée */}
        <div
          className="
            mt-16 flex flex-col gap-4
            border-t border-white/10 pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-sm text-gray-300 sm:text-base">
            Découvrez plus en détail mon approche et mes choix techniques.
          </p>

          <Button
            variant="text"
            href="/comment-je-travaille"
          >
            <span className="inline-flex items-center gap-2">
              Comment je travaille

              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </span>
          </Button>
        </div>
      </SectionWrapper>
    </Section>
  );
}