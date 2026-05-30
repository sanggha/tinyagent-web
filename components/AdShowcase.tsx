"use client";

import { motion } from "framer-motion";

const campaigns = [
  { agentName: "Sarah Chen",      agency: "Harcourts",    suburb: "Brighton, VIC",    reach: "218,400", leads: "64",  platform: "Facebook"  },
  { agentName: "Marcus Williams", agency: "McGrath",       suburb: "Bondi, NSW",       reach: "304,700", leads: "91",  platform: "Instagram" },
  { agentName: "Emma Rodriguez",  agency: "Barry Plant",   suburb: "St Kilda, VIC",    reach: "187,200", leads: "52",  platform: "Facebook"  },
  { agentName: "David Thompson",  agency: "Ray White",     suburb: "Toorak, VIC",      reach: "261,900", leads: "78",  platform: "Instagram" },
  { agentName: "Jessica Park",    agency: "LJ Hooker",     suburb: "Manly, NSW",       reach: "195,600", leads: "57",  platform: "Facebook"  },
  { agentName: "Ryan O'Brien",    agency: "Jellis Craig",  suburb: "South Yarra, VIC", reach: "242,100", leads: "69",  platform: "Instagram" },
];

export default function AdShowcase() {
  return (
    <section id="showcase" className="py-24 lg:py-32 relative overflow-hidden bg-[#070b16]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
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
            className="text-gray-400 text-lg mt-4 max-w-xl"
          >
            Every campaign runs from the Tiny Agent page — delivering your listing agent directly into homeowners&apos; feeds across Australia.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {campaigns.map((c, i) => (
            <motion.div
              key={c.agentName}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-white font-semibold text-sm">{c.agentName}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{c.agency} · {c.suburb}</p>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  c.platform === "Facebook"
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-pink-400 bg-pink-400/10"
                }`}>
                  {c.platform}
                </span>
              </div>

              <div className="flex items-end gap-6">
                <div>
                  <p className="text-amber-400 font-bold text-3xl tabular-nums leading-none">{c.leads}</p>
                  <p className="text-gray-500 text-xs mt-1">leads generated</p>
                </div>
                <div className="pb-0.5">
                  <p className="text-blue-400 font-semibold text-lg tabular-nums leading-none">{c.reach}</p>
                  <p className="text-gray-500 text-xs mt-1">homeowners reached</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-600 text-xs mt-8"
        >
          All campaigns target homeowners in the agent&apos;s specified suburb. Agent names and campaign data shown are illustrative examples.
        </motion.p>
      </div>
    </section>
  );
}
