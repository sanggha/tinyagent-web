"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  src: string;
  width: number;
  height: number;
  alt: string;
  platform: "Facebook" | "Instagram";
};

const slides: Slide[] = [
  {
    src: "/images/ad-1.png",
    width: 853,
    height: 1844,
    platform: "Instagram",
    alt: "Instagram ad for a real estate agent asking 'What's your home worth?' with a free property appraisal call-to-action",
  },
  {
    src: "/images/ad-2.png",
    width: 864,
    height: 1821,
    platform: "Facebook",
    alt: "Facebook lead-form ad for a real estate agent offering a free property appraisal within 24 hours",
  },
  {
    src: "/images/ad-3.png",
    width: 853,
    height: 1844,
    platform: "Facebook",
    alt: "Facebook ad for a real estate agent asking homeowners 'What's your home worth?' in their suburb",
  },
  {
    src: "/images/ad-4.png",
    width: 871,
    height: 1806,
    platform: "Facebook",
    alt: "Facebook feed ad for a real estate agent promoting a free home appraisal alongside local property news",
  },
  {
    src: "/images/ad-5.png",
    width: 1024,
    height: 1536,
    platform: "Instagram",
    alt: "Instagram ad for a real estate agent targeting homeowners thinking of selling in their local suburb",
  },
];

const AUTOPLAY_MS = 5000;

export default function AdShowcase() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  const prev = useCallback(() => goTo(index - 1), [index, goTo]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduceMotion, paused]);

  return (
    <section
      id="showcase"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#070b16]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Campaign Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Your ad. <span className="gradient-text">Their feed.</span>
            <br />Every suburb.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-400 text-lg mt-4"
          >
            Scroll-stopping ads that put your listing agent directly into
            homeowners&apos; feeds across Australia.
          </motion.p>
        </div>

        <div
          className="relative flex items-center justify-center gap-3 sm:gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous ad"
            className="shrink-0 z-10 grid place-items-center w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.12] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="relative w-full max-w-[300px] h-[600px] overflow-hidden">
            <motion.div
              className="flex h-full"
              animate={{ x: `-${index * 100}%` }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className="shrink-0 w-full h-full flex items-center justify-center"
                  aria-hidden={i !== index}
                >
                  <Image
                    src={slide.src}
                    width={slide.width}
                    height={slide.height}
                    alt={slide.alt}
                    priority={i === 0}
                    className="h-full w-auto object-contain drop-shadow-2xl"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next ad"
            className="shrink-0 z-10 grid place-items-center w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.12] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-8">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ad ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-amber-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8 max-w-xl mx-auto">
          Example ad creative. Every campaign targets homeowners in the
          agent&apos;s specified suburb and is tailored to their brand.
        </p>
      </div>
    </section>
  );
}
