"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Slide = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const slides: Slide[] = [
  {
    src: "/images/ad-1.png",
    width: 871,
    height: 1844,
    alt: "Instagram ad for a real estate agent asking 'What's your home worth?' with a free property appraisal call-to-action",
  },
  {
    src: "/images/ad-2.png",
    width: 871,
    height: 1844,
    alt: "Facebook lead-form ad for a real estate agent offering a free property appraisal within 24 hours",
  },
  {
    src: "/images/ad-3.png",
    width: 871,
    height: 1844,
    alt: "Facebook ad for a real estate agent asking homeowners 'What's your home worth?' in their suburb",
  },
  {
    src: "/images/ad-4.png",
    width: 871,
    height: 1844,
    alt: "Facebook feed ad for a real estate agent promoting a free home appraisal alongside local property news",
  },
];

export default function AdShowcase() {
  return (
    <section id="showcase" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center max-w-2xl mx-auto">
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
            className="text-gray-600 text-lg mt-4"
          >
            Scroll-stopping ads that put your listing agent directly into
            homeowners&apos; feeds across Australia.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-md lg:max-w-none mx-auto">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex justify-center"
            >
              <Image
                src={slide.src}
                width={slide.width}
                height={slide.height}
                alt={slide.alt}
                priority={i === 0}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-12 max-w-xl mx-auto">
          Example ad creative. Every campaign targets homeowners in the
          agent&apos;s specified suburb and is tailored to their brand.
        </p>
      </div>
    </section>
  );
}
