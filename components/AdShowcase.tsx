"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

// Parallax is a desktop-only flourish: below 1024px the grid is 2-up and the
// vertically stacked phones would drift into each other. Gate it to the lg
// breakpoint that drives the single-row 4-up layout. SSR-safe (starts false).
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

const ads = [
  {
    src: "/images/ad-1.png",
    alt: "Instagram ad for a real estate agent asking homeowners 'What's your home worth?'",
  },
  {
    src: "/images/ad-2.png",
    alt: "Facebook lead-form ad capturing seller enquiries for a real estate agent",
  },
  {
    src: "/images/ad-3.png",
    alt: "Facebook feed ad building brand awareness for a local real estate agent",
  },
  {
    src: "/images/ad-4.png",
    alt: "Facebook ad targeting homeowners thinking of selling in their suburb",
  },
];

type Ad = { src: string; alt: string };

// Per-phone scroll parallax: each column drifts at a different rate as the
// section moves through the viewport, for a layered, premium depth effect.
// Scroll-linked transforms are disabled under reduced motion.
const depths = [56, -44, 36, -56];

function AdPhone({ ad, i, parallax }: { ad: Ad; i: number; parallax: boolean }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const depth = depths[i % depths.length];
  const yRaw = useTransform(scrollYProgress, [0, 1], [depth, -depth]);
  const y = reduce || !parallax ? 0 : yRaw;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="flex justify-center"
    >
      <motion.div
        style={{ y }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="w-full"
      >
        <Image
          src={ad.src}
          width={871}
          height={1844}
          alt={ad.alt}
          priority={i === 0}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </motion.div>
    </motion.div>
  );
}

export default function AdShowcase() {
  const isDesktop = useIsDesktop();
  return (
    <section id="showcase" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14 text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Campaign Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Your ad. <span className="gradient-text">Their feed.</span>
            <br />Every suburb.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 text-lg mt-4"
          >
            Scroll-stopping ads that put your name directly into
            homeowners&apos; feeds across Australia.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ads.map((ad, i) => (
            <AdPhone key={ad.src} ad={ad} i={i} parallax={isDesktop} />
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-12 max-w-xl mx-auto">
          Example ad creative. Every campaign targets homeowners in the
          agent&apos;s specified suburb and is tailored to their brand.
        </p>
      </div>
    </section>
  );
}
