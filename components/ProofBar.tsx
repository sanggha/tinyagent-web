"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 3,
    suffix: "×",
    label: "more vendor leads vs. static image campaigns",
  },
  {
    value: 48,
    suffix: "hrs",
    label: "from sign-up to live ads in homeowners' feeds",
  },
  {
    value: 200,
    suffix: "K+",
    label: "homeowners reachable within a 5km metro radius",
  },
  {
    value: 94,
    suffix: "%",
    label: "of Australian homeowners active on social media daily",
  },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setVisible(true);
          const duration = 1600;
          const steps = 60;
          let current = 0;
          const timer = setInterval(() => {
            current += target / steps;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      {Math.floor(count)}{suffix}
    </span>
  );
}

export default function ProofBar() {
  return (
    <section className="py-12 lg:py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-slate-200">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:px-10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-2 tabular-nums tracking-tight">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-slate-500 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
