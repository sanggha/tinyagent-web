"use client";

import { useEffect, useState } from "react";

/**
 * True only on devices with a precise pointer (mouse/trackpad) that support
 * hover — i.e. desktops/laptops, not touchscreens. SSR-safe: starts `false`
 * and resolves after mount, so server-rendered HTML never assumes hover.
 *
 * Use this to gate hover-only flourishes (tilt, magnetic, spotlight) so touch
 * users never pay for listeners that can't fire usefully.
 */
export function usePointerFine(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return fine;
}
