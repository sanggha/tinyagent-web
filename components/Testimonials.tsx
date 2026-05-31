"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "./TiltCard";

const testimonials = [
  {
    quote:
      "We generated 12 vendor enquiries in the first 3 weeks. I've never seen results like this from any advertising platform. The creative quality and targeting is on a completely different level.",
    name: "James Mitchell",
    title: "Principal Agent",
    agency: "Ray White Toorak",
    stat: "12 leads",
    period: "in 3 weeks",
    photo:
      "/images/agent-4.jpg",
  },
  {
    quote:
      "After years on other platforms with zero ROI, we switched to Tiny Agent and got our first lead in 48 hours. The campaign has paid for itself five times over in the first quarter alone.",
    name: "Sarah Chen",
    title: "Senior Sales Agent",
    agency: "Harcourts Brighton",
    stat: "5× ROI",
    period: "first quarter",
    photo:
      "/images/agent-2.jpg",
  },
  {
    quote:
      "The creative they produced was so professional I've been using it across everything — my email signature, listing presentations, social media. It's not just ads, it builds your brand.",
    name: "Marcus Williams",
    title: "Director",
    agency: "McGrath Bondi Junction",
    stat: "78 leads",
    period: "this month",
    photo:
      "/images/agent-1.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Agent Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Real agents.{" "}
            <span className="gradient-text">Real results.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            120+ agents across Australia are running Tiny Agent campaigns.
            Here&apos;s what they&apos;ve seen.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex"
            >
              <TiltCard
                max={9}
                glareColor="rgba(37,99,235,0.10)"
                className="relative w-full p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Stat highlight */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-5">
                <p className="text-blue-600 font-bold text-xl">{t.stat}</p>
                <p className="text-slate-400 text-xs">{t.period}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 shrink-0">
                  <Image
                    src={t.photo}
                    alt={`${t.name}, ${t.title} at ${t.agency}`}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.title}</p>
                  <p className="text-slate-400 text-xs">{t.agency}</p>
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
