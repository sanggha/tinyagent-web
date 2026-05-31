"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How quickly can you launch a campaign?",
    a: "Fast. Once we have the basic info we need from you — your target area, a few photos, and your contact details — we can have your campaign live within 24 hours. Most agents are surprised how quickly it moves.",
  },
  {
    q: "Whose Facebook page do the ads run from?",
    a: "Yours. Every ad runs from your own Facebook and Instagram, so all the followers, comments, shares and growth build your profile and your audience — not ours. Other services run ads from an account they control, which means the moment you stop, you walk away with nothing. With us, you're building an asset you keep.",
  },
  {
    q: "What's the minimum commitment?",
    a: "We ask for an initial 3-month engagement. Good advertising takes time to optimise — the first month establishes the baseline, the second improves it, and by the third you're seeing real momentum. After that, it's month-to-month.",
  },
  {
    q: "How do I receive my leads?",
    a: "Every enquiry comes directly to your email inbox — no platform to log into, no complicated system. When someone fills in their details, you get an email straight away.",
  },
  {
    q: "Do I need to provide photos or appear on camera?",
    a: "A good headshot is usually all you need. We build compelling campaigns around professional photos you already have — no video shoot required. If you want to explore custom video content down the track, that's something we can discuss once you're up and running.",
  },
  {
    q: "Which areas do you operate in?",
    a: "Australia-wide. Whether you're in Sydney, Melbourne, Brisbane, Perth, Adelaide, or a regional centre, we can build a campaign that reaches homeowners in your specific area.",
  },
  {
    q: "What does the monthly report include?",
    a: "A clear, plain-English summary: how many homeowners saw your ads, how many enquired, and what we're changing next month to improve results. Nothing technical — just what matters.",
  },
  {
    q: "Do I need to understand how the advertising platform works?",
    a: "Not at all. You'll never need to log in anywhere or understand any of the technical side. We handle the entire campaign — you only hear from us when there are results to share.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Questions agents ask
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-500 text-lg"
          >
            Everything you need to know before booking a call.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden"
            >
              <button
                id={`faq-trigger-${i}`}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-slate-800 font-medium text-sm sm:text-base">{faq.q}</span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${open === i ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
