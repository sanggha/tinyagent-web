"use client";

import { useState, useRef, useEffect, useMemo, forwardRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Plus, X, MapPin } from "lucide-react";
import Image from "next/image";
import ParticleFieldBg from "@/components/hero-bg/ParticleFieldBg";
import { useSuburbs, type Suburb } from "@/lib/useSuburbs";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local (and in Vercel env settings).
// Free key tied to matt@tinyagent.io — get it at https://web3forms.com
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

// Step indices: 0 suburbs · 1 name · 2 contact · 3 success
const SUCCESS_STEP = 3;

type Pkg = "views" | "leads";

const slide = {
  enter: (d: number) => ({ x: d > 0 ? "55%" : "-55%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? "-55%" : "55%", opacity: 0 }),
};
const ease = [0.22, 1, 0.36, 1] as const;

function summariseAreas(suburbs: Suburb[]) {
  if (suburbs.length === 0) return "";
  if (suburbs.length === 1) return `${suburbs[0].name}, ${suburbs[0].state}`;
  return `${suburbs[0].name} +${suburbs.length - 1} more`;
}

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
    chip: isAmber
      ? "bg-amber-400/15 border-amber-400/40 text-amber-200"
      : "bg-blue-500/15 border-blue-400/40 text-blue-200",
    ring: isAmber ? "focus:border-amber-400/60" : "focus:border-blue-400/60",
  };

  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [suburbs, setSuburbs] = useState<Suburb[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const latest = useRef({ suburbs, name, phone, email, step });
  latest.current = { suburbs, name, phone, email, step };
  const nameEmailSentRef = useRef(false);
  const submittedRef = useRef(false);
  const partialSentRef = useRef(false);

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const addSuburb = (s: Suburb) =>
    setSuburbs((prev) => (prev.some((p) => p.id === s.id) ? prev : [...prev, s]));
  const removeSuburb = (id: string) =>
    setSuburbs((prev) => prev.filter((p) => p.id !== id));

  const areaList = (list: Suburb[]) =>
    list.map((s) => `${s.name}, ${s.state}`).join(" · ");
  const stateList = (list: Suburb[]) =>
    [...new Set(list.map((s) => s.state))].join(", ");

  const nextSuburbs = () => {
    if (suburbs.length < 1) return;
    go(1);
    setTimeout(() => nameRef.current?.focus(), 500);
  };

  // ── Name captured → email the lead immediately ───────────────────
  const nextName = () => {
    if (name.trim().length < 1) return;

    if (ACCESS_KEY && !nameEmailSentRef.current) {
      nameEmailSentRef.current = true;
      const data = {
        access_key: ACCESS_KEY,
        subject: `📇 New lead — ${summariseAreas(suburbs)} (${pkgLabel})`,
        from_name: "Tiny Agent — Claim Form",
        Status: "NAME CAPTURED — contact details pending",
        Package: pkgLabel,
        Suburbs: areaList(suburbs),
        States: stateList(suburbs),
        Name: name.trim(),
        Phone: "— (not yet provided)",
        Email: "— (not yet provided)",
        Captured_at: new Date().toLocaleString("en-AU"),
        botcheck: false,
      };
      try {
        fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
          keepalive: true,
        }).catch(() => {});
      } catch {
        /* best-effort */
      }
    }

    go(2);
    setTimeout(() => phoneRef.current?.focus(), 500);
  };

  // ── Abandonment beacon (only before the name email has fired) ─────
  useEffect(() => {
    const sendPartial = () => {
      const { suburbs, name, step } = latest.current;
      if (submittedRef.current || nameEmailSentRef.current || partialSentRef.current)
        return;
      if (!suburbs.length) return;
      if (!ACCESS_KEY) return;
      partialSentRef.current = true;

      const stepName = ["suburbs", "name"][step] ?? "suburbs";
      const data = {
        access_key: ACCESS_KEY,
        subject: `⚠️ Partial enquiry (abandoned) — ${summariseAreas(suburbs)}`,
        from_name: "Tiny Agent — Claim Form",
        Status: `INCOMPLETE — left on "${stepName}" step`,
        Package: pkgLabel,
        Suburbs: areaList(suburbs),
        States: stateList(suburbs),
        Name: name.trim() || "—",
        Captured_at: new Date().toLocaleString("en-AU"),
        botcheck: false,
      };
      try {
        navigator.sendBeacon(
          WEB3FORMS_ENDPOINT,
          new Blob([JSON.stringify(data)], { type: "application/json" })
        );
      } catch {
        /* best-effort only */
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") sendPartial();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", sendPartial);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", sendPartial);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pkgLabel]);

  // ── Final submission (with phone + email) ────────────────────────
  const submit = async () => {
    if (!phoneValid || !emailValid || submitting) return;
    setSubmitting(true);
    submittedRef.current = true;

    if (ACCESS_KEY) {
      const data = {
        access_key: ACCESS_KEY,
        subject: `🎯 New enquiry (complete) — ${summariseAreas(suburbs)} (${pkgLabel})`,
        from_name: "Tiny Agent — Claim Form",
        Status: "COMPLETE — full contact details",
        Package: pkgLabel,
        Suburbs: areaList(suburbs),
        States: stateList(suburbs),
        Name: name.trim(),
        Phone: phone.trim(),
        Email: email.trim(),
        Submitted_at: new Date().toLocaleString("en-AU"),
        botcheck: false,
      };
      try {
        await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
      } catch {
        /* don't block the user on a network hiccup */
      }
    }

    setSubmitting(false);
    go(SUCCESS_STEP);
  };

  const suburbsValid = suburbs.length >= 1;
  const nameValid = name.trim().length >= 1;
  const phoneValid = phone.replace(/\D/g, "").length >= 8;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const contactValid = phoneValid && emailValid;
  const firstName = name.trim().split(" ")[0];

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-[#0A0F1E] overflow-hidden">
      <ParticleFieldBg />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-5">
        {step > 0 && step < SUCCESS_STEP ? (
          <button
            onClick={() => go(step - 1)}
            aria-label="Go back"
            className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
          >
            <ArrowLeft size={15} />
          </button>
        ) : (
          <Link
            href="/"
            aria-label="Back to home"
            className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
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
      <div className="relative z-10 flex-1 flex items-start sm:items-center justify-center px-5 py-8 overflow-x-hidden overflow-y-auto">
        <div className="relative w-full max-w-sm">
          <div className="absolute -inset-x-6 -inset-y-8 rounded-[2rem] bg-[#0A0F1E]/60 backdrop-blur-[2px] -z-10" />
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
                <SuburbsStep
                  selected={suburbs}
                  onAdd={addSuburb}
                  onRemove={removeSuburb}
                  onNext={nextSuburbs}
                  valid={suburbsValid}
                  accent={accent}
                />
              )}
              {step === 1 && (
                <NameStep
                  ref={nameRef}
                  context={areaList(suburbs)}
                  value={name}
                  onChange={setName}
                  onNext={nextName}
                  valid={nameValid}
                  accent={accent}
                />
              )}
              {step === 2 && (
                <ContactStep
                  ref={phoneRef}
                  firstName={firstName}
                  phone={phone}
                  email={email}
                  onPhone={setPhone}
                  onEmail={setEmail}
                  onSubmit={submit}
                  phoneValid={phoneValid}
                  emailValid={emailValid}
                  valid={contactValid}
                  submitting={submitting}
                  accent={accent}
                />
              )}
              {step === SUCCESS_STEP && (
                <SuccessStep
                  firstName={firstName}
                  areasLabel={
                    suburbs.length === 1 ? suburbs[0].name : "your suburbs"
                  }
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
      {step < SUCCESS_STEP && (
        <div className="relative z-10 flex justify-center gap-2 pb-8 pt-2">
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

// ─── Suburbs step (multi-select autocomplete + nearby) ──────────────────

function SuburbsStep({
  selected,
  onAdd,
  onRemove,
  onNext,
  valid,
  accent,
}: {
  selected: Suburb[];
  onAdd: (s: Suburb) => void;
  onRemove: (id: string) => void;
  onNext: () => void;
  valid: boolean;
  accent: Record<string, string>;
}) {
  const { ready, search, nearby } = useSuburbs();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(
    () => (query.trim().length >= 2 ? search(query) : []),
    [query, search]
  );
  const suggestions = useMemo(
    () => nearby(selected, 6),
    [selected, nearby]
  );

  const pick = (s: Suburb) => {
    onAdd(s);
    setQuery("");
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Step 1 of 3</p>
      <h1 className="text-[2rem] sm:text-4xl font-bold text-white text-center leading-[1.1] mb-2.5">
        Which suburbs do<br />you sell in?
      </h1>
      <p className="text-white/45 text-sm text-center mb-7 max-w-[18rem]">
        Add one or a few — we&apos;ll suggest neighbouring areas as you go.
      </p>

      {/* Selected chips */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 w-full mb-3">
          {selected.map((s) => (
            <span
              key={s.id}
              className={`inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-full border text-sm font-medium ${accent.chip}`}
            >
              {s.name}
              <span className="text-white/40 text-xs">{s.state}</span>
              <button
                onClick={() => onRemove(s.id)}
                aria-label={`Remove ${s.name}`}
                className="ml-0.5 w-4 h-4 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={11} />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Search input + dropdown */}
      <div className="w-full relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) {
              e.preventDefault();
              pick(results[0]);
            }
          }}
          placeholder="Start typing a suburb…"
          autoComplete="off"
          spellCheck={false}
          className={`w-full bg-white/[0.08] border border-white/25 text-white text-lg font-medium px-5 py-4 rounded-2xl outline-none focus:bg-white/[0.12] placeholder:text-white/30 transition-colors ${accent.ring}`}
        />

        {open && query.trim().length >= 2 && (
          <ul className="absolute left-0 right-0 top-full mt-2 z-30 max-h-60 overflow-y-auto rounded-2xl border border-white/15 bg-[#0c1322] shadow-2xl shadow-black/50">
            {results.length > 0 ? (
              results.map((s) => (
                <li key={s.id}>
                  <button
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => pick(s)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/[0.06] transition-colors"
                  >
                    <span className="text-white text-[15px] font-medium">{s.name}</span>
                    <span className="text-white/40 text-xs font-semibold tracking-wide">{s.state}</span>
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-white/40 text-sm">
                {ready ? "No matches — keep typing" : "Loading suburbs…"}
              </li>
            )}
          </ul>
        )}
      </div>

      {/* Nearby suggestions */}
      {suggestions.length > 0 && (
        <div className="w-full mt-4">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <MapPin size={12} className={accent.text} /> Nearby — tap to add
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s.id}
                onClick={() => onAdd(s)}
                className="inline-flex items-center gap-1 pl-2.5 pr-3 py-1.5 rounded-full border border-white/15 bg-white/[0.05] text-white/80 text-sm hover:bg-white/[0.12] hover:text-white hover:border-white/30 transition-all"
              >
                <Plus size={13} className={accent.text} />
                {s.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onNext}
        disabled={!valid}
        className={`mt-7 w-full py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
          valid
            ? `${accent.bg} active:scale-[0.98]`
            : "bg-white/[0.06] text-white/25 cursor-not-allowed shadow-none"
        }`}
      >
        {selected.length > 1 ? `Continue with ${selected.length} suburbs` : "Continue"}
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

// ─── Name step ──────────────────────────────────────────────────────────

const NameStep = forwardRef<
  HTMLInputElement,
  {
    context: string;
    value: string;
    onChange: (v: string) => void;
    onNext: () => void;
    valid: boolean;
    accent: Record<string, string>;
  }
>(({ context, value, onChange, onNext, valid, accent }, ref) => (
  <div className="flex flex-col items-center">
    <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Step 2 of 3</p>
    <h1 className="text-[2.1rem] sm:text-4xl font-bold text-white text-center leading-[1.1] mb-3">
      And your name?
    </h1>
    <p className={`${accent.text} text-sm font-semibold mb-9 tracking-wide text-center max-w-[18rem] leading-snug`}>
      {context}
    </p>
    <div className="w-full">
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
        placeholder="First name"
        autoComplete="given-name"
        className="w-full bg-white/[0.08] border border-white/25 text-white text-xl font-medium px-5 py-4 rounded-2xl outline-none focus:border-white/50 focus:bg-white/[0.12] placeholder:text-white/30 transition-colors"
      />
      <button
        onClick={onNext}
        disabled={!valid}
        className={`mt-3.5 w-full py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
          valid
            ? `${accent.bg} active:scale-[0.98]`
            : "bg-white/[0.06] text-white/25 cursor-not-allowed shadow-none"
        }`}
      >
        Continue <ArrowRight size={18} />
      </button>
    </div>
  </div>
));
NameStep.displayName = "NameStep";

// ─── Contact step ─────────────────────────────────────────────────────────

const ContactStep = forwardRef<
  HTMLInputElement,
  {
    firstName: string;
    phone: string;
    email: string;
    onPhone: (v: string) => void;
    onEmail: (v: string) => void;
    onSubmit: () => void;
    phoneValid: boolean;
    emailValid: boolean;
    valid: boolean;
    submitting: boolean;
    accent: Record<string, string>;
  }
>(
  (
    { firstName, phone, email, onPhone, onEmail, onSubmit, phoneValid, emailValid, valid, submitting, accent },
    ref
  ) => (
    <div className="flex flex-col items-center">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-5">Step 3 of 3</p>
      <h1 className="text-[2.1rem] sm:text-4xl font-bold text-white text-center leading-[1.1] mb-3">
        How do we reach you?
      </h1>
      <p className="text-white/45 text-sm text-center mb-9 max-w-[17rem]">
        {firstName ? `Thanks, ${firstName}. ` : ""}We&apos;ll only use this to set up your campaign.
      </p>
      <div className="w-full space-y-3">
        <input
          ref={ref}
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => onPhone(e.target.value)}
          placeholder="Mobile number"
          autoComplete="tel"
          className={`w-full bg-white/[0.08] border text-white text-xl font-medium px-5 py-4 rounded-2xl outline-none focus:bg-white/[0.12] placeholder:text-white/30 transition-colors ${
            phone.length > 0 && !phoneValid
              ? "border-red-400/60 focus:border-red-400"
              : "border-white/25 focus:border-white/50"
          }`}
        />
        <input
          type="email"
          inputMode="email"
          value={email}
          onChange={(e) => onEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSubmit()}
          placeholder="Email address"
          autoComplete="email"
          spellCheck={false}
          className={`w-full bg-white/[0.08] border text-white text-xl font-medium px-5 py-4 rounded-2xl outline-none focus:bg-white/[0.12] placeholder:text-white/30 transition-colors ${
            email.length > 0 && !emailValid
              ? "border-red-400/60 focus:border-red-400"
              : "border-white/25 focus:border-white/50"
          }`}
        />
        <button
          onClick={onSubmit}
          disabled={!valid || submitting}
          className={`!mt-3.5 w-full py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
            valid && !submitting
              ? `${accent.bg} active:scale-[0.98]`
              : "bg-white/[0.06] text-white/25 cursor-not-allowed shadow-none"
          }`}
        >
          {submitting ? "Securing your spot…" : <>Claim my suburb <ArrowRight size={18} /></>}
        </button>
      </div>
    </div>
  )
);
ContactStep.displayName = "ContactStep";

// ─── Success step ─────────────────────────────────────────────────────────

function SuccessStep({
  firstName,
  areasLabel,
  pkgLabel,
  isAmber,
  accent,
}: {
  firstName: string;
  areasLabel: string;
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
        <p className="text-white/60 text-lg leading-relaxed max-w-xs mx-auto mb-2">
          We&apos;ll be in touch within 24 hours to get your{" "}
          <span className={accent.text}>{pkgLabel}</span> campaign live in{" "}
          <span className="text-white/90">{areasLabel}</span>.
        </p>
        <p className="text-white/30 text-sm mb-12">
          One agent per suburb — we move fast.
        </p>
        <Link
          href="/"
          className="text-white/35 hover:text-white/70 text-sm transition-colors"
        >
          ← Back to tinyagent.io
        </Link>
      </motion.div>
    </div>
  );
}
