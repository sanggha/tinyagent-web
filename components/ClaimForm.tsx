"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import ParticleFieldBg from "@/components/hero-bg/ParticleFieldBg";

const AU_STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

type Pkg = "views" | "leads";

const slide = {
  enter: (d: number) => ({ x: d > 0 ? "55%" : "-55%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? "-55%" : "55%", opacity: 0 }),
};
const ease = [0.22, 1, 0.36, 1] as const;

export default function ClaimForm() {
  const params = useSearchParams();
  const pkg = (params.get("package") as Pkg) ?? "leads";
  const isAmber = pkg === "leads";
  const pkgLabel = isAmber ? "Get Leads" : "Get Views";
  const accent = {
    text: isAmber ? "text-amber-400" : "text-blue-400",
    bg: isAmber
      ? "bg-amber-400 text-[#0A0F1E] shadow-amber-500/25"
      : "bg-blue-600 text-white shadow-blue-500/25",
    pill: isAmber
      ? "text-amber-400 border-amber-400/30 bg-amber-400/10"
      : "text-blue-400 border-blue-500/30 bg-blue-500/10",
    statePick: isAmber
      ? "bg-amber-400 text-[#0A0F1E] border-amber-400"
      : "bg-blue-600 text-white border-blue-600",
  };

  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [state, setState] = useState("");
  const [suburb, setSuburb] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const suburbRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const pickState = (s: string) => {
    setState(s);
    setTimeout(() => go(1), 160);
    setTimeout(() => suburbRef.current?.focus(), 500);
  };

  const nextSuburb = () => {
    if (suburb.trim().length < 2) return;
    go(2);
    setTimeout(() => nameRef.current?.focus(), 500);
  };

  const submit = async () => {
    if (name.trim().length < 1 || submitting) return;
    setSubmitting(true);
    const payload = {
      package: pkgLabel,
      state,
      suburb: suburb.trim(),
      name: name.trim(),
      submittedAt: new Date().toISOString(),
    };
    const url = process.env.NEXT_PUBLIC_LEADS_WEBHOOK_URL;
    if (url) {
      try {
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {}
    }
    setSubmitting(false);
    go(3);
  };

  const suburbValid = suburb.trim().length >= 2;
  const nameValid = name.trim().length >= 1;
  const firstName = name.trim().split(" ")[0];

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-[#0A0F1E] overflow-hidden">
      <ParticleFieldBg />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-5">
        {step > 0 && step < 3 ? (
          <button
            onClick={() => go(step - 1)}
            aria-label="Go back"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft size={15} />
          </button>
        ) : (
          <Link
            href="/"
            aria-label="Back to home"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft size={15} />
          </Link>
        )}

        <Link href="/" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-7 h-7 rounded-md bg-blue-950 border border-blue-800/40 flex items-center justify-center overflow-hidden">
            <Image src="/logo.png" alt="Tiny Agent" width={22} height={22} className="object-contain" />
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">
            Tiny<span className="text-blue-400">Agent</span>
          </span>
        </Link>

        <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${accent.pill}`}>
          {pkgLabel}
        </span>
      </div>

      {/* Step content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-5 py-10 overflow-hidden">
        <div className="w-full max-w-sm">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease }}
            >
              {step === 0 && (
                <StateStep
                  selected={state}
                  onPick={pickState}
                  accent={accent}
                />
              )}
              {step === 1 && (
                <SuburbStep
                  ref={suburbRef}
                  state={state}
                  value={suburb}
                  onChange={setSuburb}
                  onNext={nextSuburb}
                  valid={suburbValid}
                  accent={accent}
                />
              )}
              {step === 2 && (
                <NameStep
                  ref={nameRef}
                  context={`${suburb}, ${state}`}
                  value={name}
                  onChange={setName}
                  onSubmit={submit}
                  valid={nameValid}
                  submitting={submitting}
                  accent={accent}
                />
              )}
              {step === 3 && (
                <SuccessStep
                  firstName={firstName}
                  suburb={suburb}
                  pkgLabel={pkgLabel}
                  isAmber={isAmber}
                  accent={accent}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress dots — steps 0-2 only */}
      {step < 3 && (
        <div className="relative z-10 flex justify-center gap-2 pb-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === step
                  ? `w-6 ${isAmber ? "bg-amber-400" : "bg-blue-500"}`
                  : i < step
                  ? "w-1.5 bg-white/40"
                  : "w-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

// ─── Step components ────────────────────────────────────────────────────

function StateStep({
  selected,
  onPick,
  accent,
}: {
  selected: string;
  onPick: (s: string) => void;
  accent: Record<string, string>;
}) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-white/35 text-xs uppercase tracking-widest mb-5">1 of 3</p>
      <h1 className="text-[2.1rem] sm:text-4xl font-bold text-white text-center leading-[1.1] mb-10">
        Which state<br />are you in?
      </h1>
      <div className="grid grid-cols-4 gap-2.5 w-full">
        {AU_STATES.map((s) => (
          <button
            key={s}
            onClick={() => onPick(s)}
            className={`py-[1.1rem] rounded-2xl font-bold text-base border transition-all duration-150 active:scale-95 ${
              selected === s
                ? `${accent.statePick} border-transparent`
                : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

import { forwardRef } from "react";

const SuburbStep = forwardRef<
  HTMLInputElement,
  {
    state: string;
    value: string;
    onChange: (v: string) => void;
    onNext: () => void;
    valid: boolean;
    accent: Record<string, string>;
  }
>(({ state, value, onChange, onNext, valid, accent }, ref) => (
  <div className="flex flex-col items-center">
    <p className="text-white/35 text-xs uppercase tracking-widest mb-5">2 of 3</p>
    <h1 className="text-[2.1rem] sm:text-4xl font-bold text-white text-center leading-[1.1] mb-3">
      What suburb do you<br />want to own?
    </h1>
    <p className={`${accent.text} text-sm font-semibold mb-10 tracking-wide`}>{state}</p>
    <div className="w-full">
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
        placeholder="e.g. Bondi, Toorak, New Farm"
        autoComplete="off"
        spellCheck={false}
        className="w-full bg-white/[0.06] border border-white/15 text-white text-xl font-medium px-5 py-4 rounded-2xl outline-none focus:border-white/35 placeholder:text-white/20 transition-colors"
      />
      <button
        onClick={onNext}
        disabled={!valid}
        className={`mt-3.5 w-full py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
          valid
            ? `${accent.bg} active:scale-[0.98]`
            : "bg-white/5 text-white/20 cursor-not-allowed shadow-none"
        }`}
      >
        Continue <ArrowRight size={18} />
      </button>
    </div>
  </div>
));
SuburbStep.displayName = "SuburbStep";

const NameStep = forwardRef<
  HTMLInputElement,
  {
    context: string;
    value: string;
    onChange: (v: string) => void;
    onSubmit: () => void;
    valid: boolean;
    submitting: boolean;
    accent: Record<string, string>;
  }
>(({ context, value, onChange, onSubmit, valid, submitting, accent }, ref) => (
  <div className="flex flex-col items-center">
    <p className="text-white/35 text-xs uppercase tracking-widest mb-5">3 of 3</p>
    <h1 className="text-[2.1rem] sm:text-4xl font-bold text-white text-center leading-[1.1] mb-3">
      Last one —<br />what&apos;s your name?
    </h1>
    <p className={`${accent.text} text-sm font-semibold mb-10 tracking-wide`}>{context}</p>
    <div className="w-full">
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
        placeholder="First name"
        autoComplete="given-name"
        className="w-full bg-white/[0.06] border border-white/15 text-white text-xl font-medium px-5 py-4 rounded-2xl outline-none focus:border-white/35 placeholder:text-white/20 transition-colors"
      />
      <button
        onClick={onSubmit}
        disabled={!valid || submitting}
        className={`mt-3.5 w-full py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
          valid && !submitting
            ? `${accent.bg} active:scale-[0.98]`
            : "bg-white/5 text-white/20 cursor-not-allowed shadow-none"
        }`}
      >
        {submitting ? "Submitting…" : <>Claim My Suburb <ArrowRight size={18} /></>}
      </button>
    </div>
  </div>
));
NameStep.displayName = "NameStep";

function SuccessStep({
  firstName,
  suburb,
  pkgLabel,
  isAmber,
  accent,
}: {
  firstName: string;
  suburb: string;
  pkgLabel: string;
  isAmber: boolean;
  accent: Record<string, string>;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 ${
          isAmber ? "bg-amber-400" : "bg-blue-600"
        }`}
      >
        <svg
          className={`w-10 h-10 ${isAmber ? "text-[#0A0F1E]" : "text-white"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.8}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          You&apos;re in, {firstName}!
        </h1>
        <p className="text-white/55 text-lg leading-relaxed max-w-xs mx-auto mb-2">
          We&apos;ll be in touch within 24 hours to get your{" "}
          <span className={accent.text}>{pkgLabel}</span> campaign live in{" "}
          <span className="text-white/80">{suburb}</span>.
        </p>
        <p className="text-white/25 text-sm mb-12">
          One agent per suburb — we move fast.
        </p>
        <Link
          href="/"
          className="text-white/30 hover:text-white/60 text-sm transition-colors"
        >
          ← Back to tinyagent.io
        </Link>
      </motion.div>
    </div>
  );
}
