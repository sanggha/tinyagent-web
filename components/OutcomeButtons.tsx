"use client";

import Link from "next/link";
import { Eye, Target } from "lucide-react";
import Magnetic from "./Magnetic";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "onBlue";
  className?: string;
};

const sizes = {
  sm: "px-4 py-2.5 text-sm gap-1.5",
  md: "px-6 py-3.5 text-sm gap-2",
  lg: "px-7 py-4 text-base gap-2",
};

export default function OutcomeButtons({ size = "md", variant = "solid", className = "" }: Props) {
  const s = sizes[size];
  const icon = size === "lg" ? 19 : 16;

  const views =
    variant === "onBlue"
      ? "bg-white hover:bg-blue-50 text-blue-600"
      : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20";
  const leads = "bg-amber-400 hover:bg-amber-300 text-[#0A0F1E] shadow-lg shadow-amber-500/20";

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Magnetic className="w-full sm:w-auto">
        <Link
          href="/#get-views"
          className={`inline-flex w-full items-center justify-center font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${s} ${views}`}
        >
          <Eye size={icon} />
          Get Views
        </Link>
      </Magnetic>
      <Magnetic className="w-full sm:w-auto">
        <Link
          href="/#get-leads"
          className={`inline-flex w-full items-center justify-center font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${s} ${leads}`}
        >
          <Target size={icon} />
          Get Leads
        </Link>
      </Magnetic>
    </div>
  );
}
