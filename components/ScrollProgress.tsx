"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient progress bar pinned to the top of the viewport, scaling with
 * page scroll. Spring-smoothed so it glides rather than ticks. Purely
 * decorative (aria-hidden) and harmless under reduced-motion (it's a position
 * indicator, not vestibular motion).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-amber-400"
    />
  );
}
