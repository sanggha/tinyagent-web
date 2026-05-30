"use client";

import { motion } from "framer-motion";

const included = [
  {
    title: "Every homeowner in your suburb, reached directly",
    body: "We identify every homeowner within your target area using location, property ownership, and behavioural data. No wasted spend on people outside your market.",
  },
  {
    title: "Ads that stop the scroll",
    body: "Scroll-stopping creative built around your name, your brand, and a message that speaks directly to homeowners in your area — designed to drive enquiries, not just views.",
  },
  {
    title: "We run it all — you never touch a dashboard",
    body: "Launch, daily optimisation, budget allocation, audience testing, creative rotation — all handled. You'll never need to log into any platform.",
  },
  {
    title: "A landing page built to convert",
    body: "A custom page for each campaign that captures enquiries and turns browsers into booked appraisals. Built and maintained by us.",
  },
  {
    title: "Every lead straight to your inbox",
    body: "Every enquiry is sent directly to your email the moment it comes in. No platform to check, no leads lost in a system.",
  },
  {
    title: "Plain-English results, every month",
    body: "A clear monthly report showing how many homeowners saw your ads, how many enquired, and exactly what we're changing to improve results.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: heading + summary checklist (sticky on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4">
              What you get
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Everything done.
              <br />
              <span className="gradient-text">Nothing to manage.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              You focus on meeting vendors and closing listings. We run the
              entire advertising operation in the background.
            </p>

            {/* Summary checklist */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <p className="text-slate-900 font-semibold mb-4">Everything included:</p>
              <ul className="space-y-2.5">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: detail cards */}
          <div className="space-y-4">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex gap-5 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-semibold text-base mb-1.5">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
