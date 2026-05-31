"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Megaphone, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const offers = [
  {
    anchor: "get-views",
    label: "Get Views",
    name: "Market Presence",
    tagline: "Be the name every homeowner already knows.",
    icon: Megaphone,
    accent: "blue" as const,
    ads: [
      {
        src: "/images/ad-1.png",
        alt: "Instagram ad for a real estate agent asking homeowners 'What's your home worth?'",
      },
      {
        src: "/images/ad-3.png",
        alt: "Facebook feed ad building brand awareness for a local real estate agent",
      },
    ],
  },
  {
    anchor: "get-leads",
    label: "Get Leads",
    name: "Lead Engine",
    tagline: "Turn attention into booked appraisals.",
    icon: Target,
    accent: "amber" as const,
    ads: [
      {
        src: "/images/ad-2.png",
        alt: "Facebook lead-form ad capturing seller enquiries for a real estate agent",
      },
      {
        src: "/images/ad-4.png",
        alt: "Facebook ad targeting homeowners thinking of selling in their suburb",
      },
    ],
  },
];

export default function AdShowcase() {
  return (
    <section id="showcase" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Campaign Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Your ad. <span className="gradient-text">Their feed.</span>
            <br />Every suburb.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 text-lg mt-4"
          >
            Two ways to own your market — pick the outcome you want.
          </motion.p>
        </div>

        {/* Two offer columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {offers.map((offer, i) => {
            const isAmber = offer.accent === "amber";
            return (
              <motion.div
                key={offer.anchor}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col"
              >
                {/* Offer label */}
                <div className={`mb-6 inline-flex items-center gap-3 self-start px-4 py-2.5 rounded-xl border ${
                  isAmber
                    ? "bg-amber-50 border-amber-200"
                    : "bg-blue-50 border-blue-200"
                }`}>
                  <offer.icon
                    size={18}
                    className={isAmber ? "text-amber-500" : "text-blue-600"}
                  />
                  <div>
                    <p className={`font-bold text-sm leading-none ${
                      isAmber ? "text-amber-600" : "text-blue-700"
                    }`}>
                      {offer.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-none">
                      {offer.tagline}
                    </p>
                  </div>
                </div>

                {/* Phone pair */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  {offer.ads.map((ad, j) => (
                    <motion.div
                      key={ad.src}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.12 + j * 0.08 }}
                      className="flex justify-center"
                    >
                      <Image
                        src={ad.src}
                        width={871}
                        height={1844}
                        alt={ad.alt}
                        priority={i === 0 && j === 0}
                        className="w-full h-auto object-contain drop-shadow-xl"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href={`/#${offer.anchor}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                      isAmber
                        ? "text-amber-600 hover:text-amber-500"
                        : "text-blue-600 hover:text-blue-500"
                    }`}
                  >
                    See {offer.label} pricing
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-xs mt-14 max-w-xl mx-auto">
          Example ad creative. Every campaign targets homeowners in the
          agent&apos;s specified suburb and is tailored to their brand.
        </p>
      </div>
    </section>
  );
}
