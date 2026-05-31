"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { usePointerFine } from "@/hooks/usePointerFine";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees (bold default ~12). */
  max?: number;
  /** Hover scale. */
  lift?: number;
  /** Show the moving cursor spotlight. */
  glare?: boolean;
  /** Spotlight colour — light glare on dark cards, soft tint on light cards. */
  glareColor?: string;
};

/**
 * Premium hover card: tilts in 3D toward the cursor with a soft spotlight that
 * tracks the pointer. Spring-smoothed so it feels weighted, not twitchy.
 *
 * Hover-only by nature, so it's gated to precise pointers and disabled under
 * reduced motion — in those cases it renders a plain styled <div> with zero
 * listeners or transforms. The card's visual classes (radius, bg, border,
 * padding) are passed through `className`, so it drops in as a replacement for
 * an existing card container.
 */
export default function TiltCard({
  children,
  className = "",
  max = 12,
  lift = 1.03,
  glare = true,
  glareColor = "rgba(255,255,255,0.22)",
}: Props) {
  const reduce = useReducedMotion();
  const fine = usePointerFine();
  const ref = useRef<HTMLDivElement>(null);

  // Normalised pointer position within the card (0..1), centre = 0.5.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springCfg = { stiffness: 200, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springCfg);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springCfg);

  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, ${glareColor}, transparent 55%)`;

  // No hover available (touch) or reduced motion → static styled container.
  if (reduce || !fine) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      whileHover={{ scale: lift }}
      transition={{ scale: { duration: 0.3, ease: "easeOut" } }}
      className={`group/tilt relative ${className}`}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
        />
      )}
    </motion.div>
  );
}
