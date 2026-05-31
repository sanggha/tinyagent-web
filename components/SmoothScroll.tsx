"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Momentum smooth-scrolling via Lenis — DESKTOP ONLY.
 *
 * Deliberately disabled on touch devices (native OS momentum is better there)
 * and when the user prefers reduced motion. On those, this renders a passthrough
 * and the browser's native scroll handles everything.
 *
 * Lenis drives the real window scroll position, so Framer Motion's `useScroll`
 * and IntersectionObservers keep working with zero changes.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    // Touch / reduced-motion → leave native scrolling untouched.
    if (reduce || !finePointer) return;

    const lenis = new Lenis({
      duration: 1.05,
      // expo-out — quick start, long graceful glide (the "premium" weight)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      autoRaf: false,
      // Let nested scroll containers (e.g. opt-out regions) behave natively.
      prevent: (node) => node.hasAttribute("data-lenis-prevent"),
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Route same-page hash links (e.g. /#pricing) through Lenis so anchor
    // navigation glides instead of jumping, and clears the fixed-nav offset.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const anchor = (e.target as HTMLElement | null)?.closest?.(
        'a[href*="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
        return; // navigating to a different page — let the router handle it
      }
      if (!url.hash || url.hash === "#") return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
