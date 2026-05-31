"use client";

import { useRef } from "react";
import { motion, cubicBezier, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import OutcomeButtons from "./OutcomeButtons";
import TiltCard from "./TiltCard";

const ease = cubicBezier(0.22, 1, 0.36, 1);

const word = (i: number) => ({
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.1 + i * 0.08, ease },
  },
});

const fade = (delay: number) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
});

const AGENTS = [
  "/images/agent-1.jpg",
  "/images/agent-2.jpg",
  "/images/agent-3.jpg",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Text column: drifts down, shrinks and fades as you scroll past.
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  // Phone column: drifts up at a different rate for layered parallax depth.
  const phoneYRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);

  const y = reduce ? "0%" : yRaw;
  const scale = reduce ? 1 : scaleRaw;
  const opacity = reduce ? 1 : opacityRaw;
  const phoneY = reduce ? "0%" : phoneYRaw;

  return (
    <section
      ref={ref}
      className="relative bg-[#0A0F1E] min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-violet-700/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[460px] h-[460px] bg-blue-600/10 rounded-full blur-[90px]" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-24 lg:py-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center">

          {/* ── Text column ── */}
          <motion.div
            style={{ y, scale, opacity }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fade(0.1)}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Real estate advertising, done for you
            </motion.div>

            {/* Headline — word by word */}
            <h1 className="text-[clamp(2.75rem,5.5vw,4.75rem)] font-bold text-white leading-[1.04] tracking-tight mb-7">
              {["Your", "Face."].map((w, i) => (
                <motion.span
                  key={w + i}
                  variants={word(i)}
                  initial="hidden"
                  animate="show"
                  className="inline-block mr-[0.22em]"
                >
                  {w}
                </motion.span>
              ))}
              <br />
              {["Your"].map((w, i) => (
                <motion.span
                  key={w + i}
                  variants={word(i + 2)}
                  initial="hidden"
                  animate="show"
                  className="inline-block mr-[0.22em]"
                >
                  {w}
                </motion.span>
              ))}
              {["Market."].map((w, i) => (
                <motion.span
                  key={w + i}
                  variants={word(i + 3)}
                  initial="hidden"
                  animate="show"
                  className="inline-block mr-[0.22em] gradient-text"
                >
                  {w}
                </motion.span>
              ))}
              <br />
              {["Every", "Door."].map((w, i) => (
                <motion.span
                  key={w + i}
                  variants={word(i + 4)}
                  initial="hidden"
                  animate="show"
                  className="inline-block mr-[0.22em]"
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              variants={fade(0.65)}
              initial="hidden"
              animate="show"
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mb-9"
            >
              Precision ads that put your name in front of every homeowner
              in your area — before they even start thinking about selling.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fade(0.8)}
              initial="hidden"
              animate="show"
              className="mb-12"
            >
              <OutcomeButtons size="lg" className="justify-center lg:justify-start" />
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fade(0.95)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {AGENTS.map((src, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0A0F1E] overflow-hidden">
                    <Image src={src} alt="Australian real estate agent using Tiny Agent" width={36} height={36} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  Trusted by <span className="text-white font-medium">120+ agents</span> across Australia
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Phone reel column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 56, rotate: reduce ? 0 : -2.5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div style={{ y: phoneY }} className="relative">
              {/* Glow behind the device */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-blue-600/25 via-violet-600/15 to-transparent rounded-[3rem] blur-2xl pointer-events-none" />

              <TiltCard
                max={9}
                lift={1.02}
                glareColor="rgba(147,197,253,0.25)"
                className="relative w-[248px] sm:w-[286px] lg:w-[318px] rounded-[2.6rem] border border-white/12 bg-[#0d1117] p-2.5 shadow-2xl shadow-blue-950/60"
              >
                {/* Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-24 h-[22px] bg-[#0d1117] rounded-b-2xl" />

                <div className="relative overflow-hidden rounded-[2rem]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label="Example real estate video ad running on a phone"
                    className="block w-full aspect-[9/16] object-cover"
                  >
                    <source src="/videos/hero-reel.mp4" type="video/mp4" />
                  </video>

                  {/* Live tag */}
                  <div className="absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 bg-black/45 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    LIVE
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1E] to-transparent pointer-events-none" />
    </section>
  );
}
