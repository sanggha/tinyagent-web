"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "./TiltCard";

const problems = [
  "You're invisible to 80% of future sellers",
  "Paying for impressions, not conversations",
  "Reaching the wrong people at the wrong time",
  "Generic ads that blend into the background",
  "No optimisation — same ad, months on end",
];

export default function ProblemSection() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

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
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Most real estate ads
              <br />
              <span className="text-slate-500">never get results.</span>
            </motion.h2>

            <div className="space-y-2">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3 py-2.5 border-b border-slate-200 last:border-0"
                >
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <p className="text-slate-700 font-medium text-sm">{p}</p>
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
            <TiltCard
              max={10}
              glareColor="rgba(37,99,235,0.10)"
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white"
            >
              {/* Post header */}
              <div className="p-3.5 border-b border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src="/images/generic-agent.jpg"
                    alt="Generic real estate agent in a typical low-impact ad"
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
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-slate-200 mb-3">
                  <Image
                    src="/images/generic-agent.jpg"
                    alt="Generic real estate agent in a typical low-impact ad"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover grayscale opacity-60"
                  />
                </div>
                <p className="text-slate-700 font-bold text-lg text-center">John Smith</p>
                <p className="text-slate-400 text-sm text-center">Licensed Real Estate Agent</p>
                <div className="mt-3 border-t border-slate-200 w-full pt-3 text-center space-y-1">
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
              <div className="p-3.5 bg-white border-t border-slate-100">
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
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
