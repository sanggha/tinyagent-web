import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Tiny Agent Terms of Service — the terms that govern use of our advertising services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      {/* Nav */}
      <header className="border-b border-white/[0.06] bg-[#080d18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800/40 flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="Tiny Agent" width={24} height={24} className="object-contain" />
            </div>
            <span className="text-white font-semibold tracking-tight">
              Tiny<span className="text-blue-400">Agent</span>
            </span>
          </Link>
          <span className="text-gray-600 text-sm ml-2">/ Terms of Service</span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: May 2025</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement</h2>
            <p className="text-gray-400 leading-relaxed">
              By engaging Tiny Agent for advertising services or using this website, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree, do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p className="text-gray-400 leading-relaxed">
              Tiny Agent provides digital advertising campaign management services for real estate agents in Australia. This includes audience targeting, ad creative production, campaign setup, optimisation, lead delivery, and monthly reporting. The specific scope of services will be confirmed in writing before any campaign commences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Engagement and fees</h2>
            <p className="text-gray-400 leading-relaxed">
              All engagements require an initial 3-month term, after which services continue on a month-to-month basis unless either party provides 30 days&rsquo; written notice of termination. Fees are agreed in writing prior to campaign launch and are invoiced monthly in advance. Ad spend (media budget paid to Meta/Facebook) is separate from Tiny Agent management fees and will be agreed upon separately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Client obligations</h2>
            <p className="text-gray-400 leading-relaxed mb-3">You agree to:</p>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>Provide accurate information about your agency, target area, and brand</li>
              <li>Supply necessary assets (photos, logos) in a timely manner</li>
              <li>Ensure that all provided materials comply with applicable laws and do not infringe third-party rights</li>
              <li>Promptly follow up on leads delivered to you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual property</h2>
            <p className="text-gray-400 leading-relaxed">
              Campaign creative produced by Tiny Agent using your brand assets remains your property once fees are paid. Tiny Agent retains ownership of methodologies, templates, and systems used to produce campaign assets. You grant Tiny Agent a licence to use your brand assets solely for the purpose of delivering agreed services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Results and warranties</h2>
            <p className="text-gray-400 leading-relaxed">
              While we work hard to deliver strong results, Tiny Agent does not guarantee a specific number of leads, sales, or return on investment. Digital advertising results depend on many factors outside our control including market conditions, ad platform policies, and competition. We warrant that services will be performed with reasonable skill and care.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of liability</h2>
            <p className="text-gray-400 leading-relaxed">
              To the maximum extent permitted by law, Tiny Agent&rsquo;s liability is limited to the total fees paid in the 3 months prior to the relevant claim. We are not liable for indirect, consequential, or special losses. Nothing in these terms limits liability for fraud or liability that cannot be limited by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Governing law</h2>
            <p className="text-gray-400 leading-relaxed">
              These terms are governed by the laws of Victoria, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Victoria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
            <p className="text-gray-400 leading-relaxed">
              For questions about these terms, contact us at{" "}
              <span className="text-blue-400">hello&#64;tinyagent.io</span>.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
