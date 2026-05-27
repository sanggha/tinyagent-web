import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 mb-12">
        <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/40 flex items-center justify-center overflow-hidden">
          <Image src="/logo.png" alt="Tiny Agent" width={32} height={32} className="object-contain" />
        </div>
        <span className="text-white font-semibold text-xl tracking-tight">
          Tiny<span className="text-blue-400">Agent</span>
        </span>
      </Link>

      {/* 404 */}
      <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-4">404</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
        Page not found
      </h1>
      <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Head back home and we&apos;ll get you sorted.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/25"
        >
          Back to Homepage
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-200"
        >
          Book a Free Strategy Call
        </Link>
      </div>
    </div>
  );
}
