"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "We find the homeowners in your area",
    body: "Using data most agencies can't access, we build a precision audience of every homeowner within your exact target zone — not a broad demographic guess, but the specific streets, postcodes, and property types you want to win.",
    highlight: "Your suburb. Your audience.",
    accent: "blue",
  },
  {
    number: "02",
    title: "We put you in front of them — every day",
    body: "Your name, your face, your track record — appearing in their social feeds consistently. Not once. Not occasionally. Every day, until they have a reason to sell. That's when they'll think of you first.",
    highlight: "Top-of-mind when it counts.",
    accent: "amber",
  },
  {
    number: "03",
    title: "We handle everything. You close the deal.",
    body: "Creative, targeting, optimisation, reporting — all taken care of. You don't need to log in to any platform or understand how any of it works. Qualified enquiries come to you. You focus on converting them.",
    highlight: "Zero admin. All results.",
    accent: "violet",
  },
];

const accentMap: Record<string, { num: string; badge: string; border: string; topBar: string }> = {
  blue: {
    num: "text-blue-500",
    badge: "bg-blue-50 text-blue-600 border border-blue-100",
    border: "hover:border-blue-200",
    topBar: "bg-blue-500",
  },
  amber: {
    num: "text-amber-500",
    badge: "bg-amber-50 text-amber-600 border border-amber-100",
    border: "hover:border-amber-200",
    topBar: "bg-amber-400",
  },
  violet: {
    num: "text-violet-500",
    badge: "bg-violet-50 text-violet-600 border border-violet-100",
    border: "hover:border-violet-200",
    topBar: "bg-violet-500",
  },
};

export default function SolutionSteps() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            What we actually do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Agents who are seen
            <br />
            <span className="gradient-text">win the listing.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            The agents winning the most listings aren&apos;t the ones working
            harder. They&apos;re the ones who made sure every homeowner in their
            area already knew their name before they ever had a reason to sell.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const c = accentMap[p.accent];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm ${c.border} hover:shadow-md transition-all duration-300 group overflow-hidden`}
              >
                {/* Coloured top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${c.topBar}`} />

                {/* Big number */}
                <span className={`block text-6xl font-black mb-6 leading-none ${c.num} opacity-20 group-hover:opacity-40 transition-opacity`}>
                  {p.number}
                </span>

                <h3 className="text-slate-900 font-bold text-xl mb-4 leading-snug">
                  {p.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {p.body}
                </p>

                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${c.badge}`}>
                  {p.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 p-6 rounded-2xl bg-blue-600 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between shadow-xl shadow-blue-600/20"
        >
          <div>
            <p className="text-white font-semibold text-lg">
              The whole thing runs without you lifting a finger.
            </p>
            <p className="text-blue-100 text-sm mt-1">
              We handle the creative, the targeting, the spend, and the reporting. You just take the calls.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
          >
            Get started →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
