"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Zap, UserCheck, Lock, Megaphone, Target } from "lucide-react";
import TiltCard from "./TiltCard";

// Two goal-based packages (not tiers). Public copy shows no dollar figures.
// [X]/[Y] highlight numbers are placeholders — confirm real guaranteed counts before launch.
const packages = [
  {
    name: "Get Views",
    anchor: "get-views",
    tagline: "Be the name every homeowner already knows.",
    focus: "Built for maximum reach and top-of-mind awareness across your suburb.",
    icon: Megaphone,
    accent: "blue" as const,
    metric: "10,000+",
    metricUnit: "impressions / month",
    metricNote: "Guaranteed reach — or we keep optimising free.",
    features: [
      "Always-on ads from your own Facebook & Instagram",
      "Maximum reach across every homeowner in your area",
      "Constant presence — you're the name they remember",
      "Fresh creative kept in rotation so you never go stale",
      "Builds your profile, followers and brand",
      "Monthly reach & impressions report",
      "Exclusive — only agent in your suburb",
    ],
  },
  {
    name: "Get Leads",
    anchor: "get-leads",
    tagline: "Turn attention into booked appraisals.",
    focus: "Built to target the homeowners most likely to sell — and drive real enquiries.",
    icon: Target,
    accent: "amber" as const,
    metric: "6+",
    metricUnit: "leads / month",
    metricNote: "Guaranteed leads — or we keep optimising free.",
    features: [
      "Smart targeting to the homeowners most likely to sell",
      "Custom lead-capture landing page built to convert",
      "Every lead straight to your inbox",
      "A/B-tested creative & priority optimisation",
      "Monthly strategy check-in",
      "Runs from your own profile — growth stays yours",
      "Exclusive — only agent in your suburb",
    ],
  },
];

const offerChips = [
  { icon: MapPin, label: "One agent per suburb" },
  { icon: Zap, label: "Live in 24 hours" },
  { icon: UserCheck, label: "Runs from your own profile" },
  { icon: Lock, label: "No lock-in after your first 3 months" },
];

function Check({ accent }: { accent: "blue" | "amber" }) {
  return (
    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${accent === "amber" ? "bg-amber-400" : "bg-blue-600"}`}>
      <svg className={`w-2.5 h-2.5 ${accent === "amber" ? "text-[#0A0F1E]" : "text-white"}`} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden bg-[#070b16]">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Packages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Two ways to <span className="gradient-text">own your market.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-400 text-lg mt-4"
          >
            Go wide for maximum visibility, or go sharp for maximum enquiries.
            Both run from your own profile, fully done-for-you.
          </motion.p>
        </div>

        {/* Package cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {packages.map((pkg, i) => {
            const isAmber = pkg.accent === "amber";
            return (
              <motion.div
                key={pkg.name}
                id={pkg.anchor}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="scroll-mt-28 flex"
              >
                <TiltCard
                  max={10}
                  glareColor={isAmber ? "rgba(252,211,77,0.22)" : "rgba(147,197,253,0.25)"}
                  className={`relative w-full rounded-2xl p-8 border flex flex-col bg-white/[0.03] ${
                    isAmber ? "border-amber-400/30" : "border-blue-500/30"
                  }`}
                >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  isAmber ? "bg-amber-400/10" : "bg-blue-500/10"
                }`}>
                  <pkg.icon size={22} className={isAmber ? "text-amber-400" : "text-blue-400"} />
                </div>

                <h3 className="text-white font-bold text-2xl">{pkg.name}</h3>
                <p className="text-gray-300 text-sm mt-1.5 font-medium">{pkg.tagline}</p>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{pkg.focus}</p>

                {/* Guarantee highlight */}
                <div className="mt-6 mb-7 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5">
                  <p className="text-2xl font-bold tabular-nums leading-none">
                    <span className={isAmber ? "text-amber-400" : "text-blue-400"}>{pkg.metric}</span>
                    <span className="text-sm font-medium text-gray-400 ml-1.5">{pkg.metricUnit}</span>
                  </p>
                  <p className="text-gray-500 text-xs mt-1.5">{pkg.metricNote}</p>
                </div>

                <ul className="space-y-3 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-300 leading-snug">
                      <Check accent={pkg.accent} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://calendly.com/tinyagent/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex w-full justify-center items-center gap-2 font-semibold px-5 py-3.5 rounded-xl transition-all duration-200 text-sm ${
                    isAmber
                      ? "bg-amber-400 hover:bg-amber-300 text-[#0A0F1E] shadow-lg shadow-amber-500/20"
                      : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  }`}
                >
                  Claim Your Suburb
                  <ArrowRight size={16} />
                </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Strong-offer bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4"
        >
          {offerChips.map((chip) => (
            <div key={chip.label} className="flex items-center gap-2 text-gray-300 text-sm">
              <chip.icon size={16} className="text-amber-400 shrink-0" />
              {chip.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
