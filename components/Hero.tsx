"use client";

import { useEffect, useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Play, ThumbsUp, MessageCircle, Share2,
  MoreHorizontal, Home, Users, Plus, Bell, Menu, Search,
} from "lucide-react";

const smoothEase = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: smoothEase },
  }),
};

function LiveAdMockup() {
  const [reach, setReach] = useState(2418);

  useEffect(() => {
    const t = setInterval(() => {
      setReach((n) => n + Math.floor(Math.random() * 8 + 3));
    }, 900);
    return () => clearInterval(t);
  }, []);

  return (
    /* Fixed at proper phone proportions — ~19:9 aspect ratio */
    <div className="relative w-[288px] sm:w-[300px]">
      {/* Physical side buttons */}
      <div className="absolute -left-[4px] top-[68px] w-[4px] h-[24px] bg-[#252525] rounded-l-sm z-10" />
      <div className="absolute -left-[4px] top-[100px] w-[4px] h-[36px] bg-[#252525] rounded-l-sm z-10" />
      <div className="absolute -left-[4px] top-[144px] w-[4px] h-[36px] bg-[#252525] rounded-l-sm z-10" />
      <div className="absolute -right-[4px] top-[112px] w-[4px] h-[52px] bg-[#252525] rounded-r-sm z-10" />

      {/* Phone frame */}
      <div className="relative bg-[#0d0d0d] rounded-[40px] border-[5px] border-[#1e1e1e] shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-[14px] bg-[#0d0d0d] rounded-full z-20" />

        {/* Screen */}
        <div className="bg-[#f0f2f5] pt-7">
          {/* Facebook chrome header */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-white">
            <span className="text-blue-600 font-black text-[18px] leading-none">f</span>
            <div className="flex items-center gap-1.5">
              {[Search, MessageCircle, Bell].map((Icon, i) => (
                <div key={i} className="w-[22px] h-[22px] bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon size={10} className="text-gray-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Sponsored ad card */}
          <div className="bg-white mt-[2px] overflow-hidden">
            {/* Post header */}
            <div className="flex items-center gap-2 px-2.5 pt-2.5 pb-1.5">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center shrink-0">
                <Image src="/logo.png" alt="Tiny Agent" width={24} height={24} className="object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold text-gray-900 leading-tight">Tiny Agent</p>
                <p className="text-[9px] text-gray-400">Sponsored</p>
              </div>
              <MoreHorizontal size={12} className="text-gray-400 shrink-0" />
            </div>

            {/* Ad copy */}
            <div className="px-2.5 pb-1.5">
              <p className="text-[9px] text-gray-700 leading-snug">
                Thinking of selling in Toorak? Meet James Mitchell — Ray White&apos;s #1 agent in your area this year.
              </p>
            </div>

            {/* Agent photo */}
            <div className="relative w-full overflow-hidden" style={{ height: "160px" }}>
              <div className="ken-burns absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop&crop=faces&q=80"
                  alt="Agent"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 8%" }}
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                <Play size={12} fill="white" className="text-white ml-0.5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="text-white font-bold text-[11px] leading-tight">James Mitchell</p>
                <p className="text-white/70 text-[9px]">Ray White Toorak · Top Agent 2024</p>
              </div>
            </div>

            {/* CTA strip */}
            <div className="px-2.5 py-2 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div>
                <p className="text-[8px] text-gray-400 uppercase tracking-wide">tinyagent.io</p>
                <p className="text-[9px] font-bold text-gray-900">Free Market Appraisal</p>
              </div>
              <button className="bg-blue-600 text-white text-[8px] font-semibold px-2.5 py-1 rounded shrink-0">
                Book Now
              </button>
            </div>

            {/* Reactions */}
            <div className="px-2.5 py-1 flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                <span className="text-[11px]">👍</span>
                <span className="text-[11px] -ml-0.5">❤️</span>
                <span className="text-[8px] text-gray-500 ml-1">1.2k</span>
              </div>
              <span className="text-[8px] text-gray-400 tabular-nums">{reach.toLocaleString()} reached</span>
            </div>

            {/* Actions row */}
            <div className="flex items-center border-t border-gray-100">
              {[ThumbsUp, MessageCircle, Share2].map((Icon, i) => (
                <button key={i} className="flex-1 flex items-center justify-center gap-1 py-1.5 text-gray-500">
                  <Icon size={10} />
                  <span className="text-[8px] font-medium">{["Like", "Comment", "Share"][i]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Facebook bottom nav */}
          <div className="flex items-center justify-around px-3 pt-1.5 pb-1 bg-white mt-[2px]">
            <Home size={14} className="text-blue-600" />
            <Users size={14} className="text-gray-400" />
            <div className="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center">
              <Plus size={12} className="text-gray-600" />
            </div>
            <Bell size={14} className="text-gray-400" />
            <Menu size={14} className="text-gray-400" />
          </div>

          {/* Home indicator */}
          <div className="flex justify-center py-1.5 bg-white">
            <div className="w-16 h-[3px] bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    /* Hero stays dark — premium entrance */
    <section className="relative bg-[#0A0F1E] min-h-[720px] md:min-h-[780px] lg:min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-3xl" />
      </div>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-12 lg:py-0">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Real estate advertising, done for you
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Your Face.
              <br />
              <span className="gradient-text">Your Market.</span>
              <br />
              Every Door.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg"
            >
              We run precision video ads that put your name in front of every
              homeowner in your area — before they even start thinking about
              selling.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Book a Free Strategy Call
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-blue-600/30 flex items-center justify-center">
                  <Play size={11} fill="white" className="text-white ml-0.5" />
                </div>
                See How It Works
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=48&h=48&fit=crop&crop=face&q=80",
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=48&h=48&fit=crop&crop=face&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face&q=80",
                ].map((src, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0F1E] overflow-hidden">
                    <Image src={src} alt="Agent" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
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
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: smoothEase }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-90" />
              <LiveAdMockup />

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="hidden sm:flex absolute -right-6 top-20 items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-xl border border-slate-100"
              >
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                  <span className="text-green-500 text-sm font-bold">↑</span>
                </div>
                <div>
                  <p className="text-slate-800 text-xs font-semibold">47 new leads</p>
                  <p className="text-slate-400 text-[10px]">this week</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="hidden sm:flex absolute -left-8 bottom-24 items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-xl border border-slate-100"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 text-sm">🎯</span>
                </div>
                <div>
                  <p className="text-slate-800 text-xs font-semibold">5km radius</p>
                  <p className="text-slate-400 text-[10px]">hyper-local</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
