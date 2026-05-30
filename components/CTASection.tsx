"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import OutcomeButtons from "./OutcomeButtons";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-[#0A0F1E] to-[#0A0F1E]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Ready to own
          <br />
          <span className="gradient-text">your local market?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Pick your goal — more eyes on your name, or more enquiries in your
          inbox. We&apos;ll build the campaign around it and have you live in
          your suburb within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <OutcomeButtons size="lg" />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = ["mailto:", "hello", "@", "tinyagent.io"].join("");
            }}
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 text-lg cursor-pointer"
          >
            <Mail size={18} />
            Send us an email
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 text-gray-500 text-sm"
        >
          No lock-in contracts. No setup fees. Live within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
