"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
  {
    title: "You're invisible to 80% of future sellers",
    detail: "Most vendors aren't on property portals yet — they're scrolling social media. If you're not there, you don't exist to them.",
  },
  {
    title: "Paying for impressions, not conversations",
    detail: "Thousands of views. Zero calls. Most real estate advertising is built to look active, not generate leads.",
  },
  {
    title: "Reaching the wrong people at the wrong time",
    detail: "Broad audiences of 'potential sellers' — not the homeowner two streets over who's ready to list.",
  },
  {
    title: "Generic ads that blend into the background",
    detail: "A plain photo and a phone number. No targeting, no story, no reason to enquire.",
  },
  {
    title: "No optimisation — same ad, months on end",
    detail: "Ad fatigue sets in after a few weeks. Results quietly drop to zero while spend keeps running.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Problem list */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4"
            >
              The Problem
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight"
            >
              Most real estate ads
              <br />
              <span className="text-slate-500">never get results.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-500 mb-10 text-lg leading-relaxed"
            >
              Agents spend thousands every year and struggle to point to a
              single listing it directly won them. Here&apos;s why.
            </motion.p>

            <div className="space-y-3">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">{p.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{p.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Example of a generic/bad real estate ad */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-32 max-w-sm mx-auto lg:mx-0"
          >
            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-3">
              Typical real estate ad
            </p>

            {/* Facebook-style ad card — muted/desaturated */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
              {/* Post header */}
              <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces&q=60"
                    alt="Generic agent"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover grayscale opacity-60"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-800 text-xs font-semibold">John Smith Real Estate</p>
                  <p className="text-slate-400 text-[10px]">Sponsored · <span className="text-slate-400">🌐</span></p>
                </div>
                <span className="text-slate-400 text-[10px] border border-slate-200 px-2 py-0.5 rounded shrink-0">Ad</span>
              </div>

              {/* Static generic image */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 flex flex-col items-center justify-center p-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-slate-200 mb-3">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&q=60"
                    alt="Generic agent"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover grayscale opacity-60"
                  />
                </div>
                <p className="text-slate-700 font-bold text-lg text-center">John Smith</p>
                <p className="text-slate-400 text-sm text-center">Licensed Real Estate Agent</p>
                <div className="mt-4 border-t border-slate-200 w-full pt-4 text-center space-y-1">
                  <p className="text-slate-600 text-sm font-medium">Thinking of selling?</p>
                  <p className="text-slate-400 text-sm">📞 0412 345 678</p>
                  <p className="text-slate-300 text-xs">johnsmithre.com.au</p>
                </div>
              </div>

              {/* URL strip */}
              <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between bg-slate-50">
                <div>
                  <p className="text-slate-600 text-xs font-medium">John Smith Real Estate</p>
                  <p className="text-slate-400 text-[10px]">johnsmithre.com.au</p>
                </div>
                <button className="bg-slate-200 text-slate-500 text-[10px] font-semibold px-3 py-1.5 rounded cursor-default">
                  Learn More
                </button>
              </div>

              {/* Campaign stats */}
              <div className="p-4 bg-white border-t border-slate-100">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Reach", value: "1,204" },
                    { label: "Clicks", value: "8" },
                    { label: "Leads", value: "0" },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                      <p className="text-slate-400 text-[10px] mb-1">{s.label}</p>
                      <p className={`font-bold text-lg ${s.value === "0" ? "text-slate-400" : "text-slate-600"}`}>{s.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-[10px] text-center mt-3">$800 spent · 0 vendor enquiries · 3 months</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
