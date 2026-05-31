"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { usePointerFine } from "@/hooks/usePointerFine";

type Props = {
  children: ReactNode;
  className?: string;
  /** How strongly the element pulls toward the cursor (0–1). */
  strength?: number;
};

/**
 * Magnetic hover: the wrapped element drifts toward the cursor while hovered,
 * then springs back on leave. Used on primary CTAs for a tactile, premium feel.
 *
 * Hover-only, so it's gated to precise pointers and disabled under reduced
 * motion — otherwise it's a plain inline-flex passthrough. Renders inline-flex
 * so it never disrupts surrounding button-row layout.
 */
export default function Magnetic({ children, className = "", strength = 0.4 }: Props) {
  const reduce = useReducedMotion();
  const fine = usePointerFine();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springCfg = { stiffness: 250, damping: 18, mass: 0.2 };
  const sx = useSpring(x, springCfg);
  const sy = useSpring(y, springCfg);

  if (reduce || !fine) {
    return <div className={`inline-flex ${className}`}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
}
