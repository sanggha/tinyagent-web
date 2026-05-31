"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// `text` logos render as a styled wordmark instead of an image — used for
// brands whose square icon assets read too small/illegibly in the row.
type Logo = {
  alt: string;
  src?: string;
  width?: number;
  height?: number;
  text?: string;
};

const logos: Logo[] = [
  { text: "Ray White",                         alt: "Ray White"        },
  { src: "/images/logos/harcourts.svg",        alt: "Harcourts",        width: 220, height: 48  },
  { src: "/images/logos/lj-hooker.svg",        alt: "LJ Hooker",        width: 180, height: 48  },
  { src: "/images/logos/century21.png",        alt: "Century 21",       width: 220, height: 36  },
  { text: "Raine & Horne",                      alt: "Raine & Horne"    },
  { src: "/images/logos/barry-plant.png",      alt: "Barry Plant",      width: 200, height: 40  },
  { src: "/images/logos/first-national.png",   alt: "First National",   width: 240, height: 40  },
  { src: "/images/logos/remax.svg",            alt: "RE/MAX",           width: 160, height: 56  },
  { src: "/images/logos/nelson-alexander.svg", alt: "Nelson Alexander", width: 200, height: 56  },
];

// Duplicate for seamless infinite loop
const track = [...logos, ...logos];

export default function AgencyMarquee() {
  return (
    <section className="py-16 lg:py-20 bg-[#0A0F1E] border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-sm font-medium uppercase tracking-widest"
        >
          Become one of our success stories
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white text-2xl lg:text-3xl font-bold mt-3"
        >
          Agents from Australia&apos;s top agencies trust Tiny Agent.
        </motion.p>
      </div>

      {/* Marquee track */}
      <div
        className="relative flex"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <motion.div
          className="flex items-center gap-16 shrink-0"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {track.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="shrink-0 flex items-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              {logo.text ? (
                <span className="text-white text-2xl font-bold tracking-tight whitespace-nowrap">
                  {logo.text}
                </span>
              ) : (
                <Image
                  src={logo.src!}
                  alt={logo.alt}
                  width={logo.width!}
                  height={logo.height!}
                  className="h-10 w-auto object-contain"
                  unoptimized
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
