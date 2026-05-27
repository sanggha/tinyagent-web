import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Tiny Agent Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
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
          <span className="text-gray-600 text-sm ml-2">/ Privacy Policy</span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: May 2025</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. About us</h2>
            <p className="text-gray-400 leading-relaxed">
              Tiny Agent (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website tinyagent.io and provides digital advertising services to real estate agents across Australia. This Privacy Policy explains how we collect, use, disclose, and protect your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information we collect</h2>
            <p className="text-gray-400 leading-relaxed mb-3">We may collect the following personal information:</p>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>Name, email address, and phone number (when you book a call or submit an enquiry)</li>
              <li>Business name, agency, and suburb (to set up advertising campaigns)</li>
              <li>Photos and brand assets you provide for campaign creative</li>
              <li>Usage data and analytics from your visits to tinyagent.io (via cookies and similar technologies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How we use your information</h2>
            <p className="text-gray-400 leading-relaxed mb-3">We use your personal information to:</p>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>Set up, manage, and optimise your advertising campaigns</li>
              <li>Communicate with you about your campaigns and results</li>
              <li>Respond to enquiries and provide customer support</li>
              <li>Send monthly performance reports and relevant updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third parties</h2>
            <p className="text-gray-400 leading-relaxed">
              To deliver advertising campaigns, we work with third-party platforms including Meta (Facebook and Instagram). Your campaign creative and targeting parameters are shared with these platforms as required to run your ads. We may also use Calendly to manage bookings, and analytics tools to understand website usage. These parties have their own privacy policies which govern their use of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data storage and security</h2>
            <p className="text-gray-400 leading-relaxed">
              We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access. Data is stored on secure servers. We retain your information for as long as necessary to provide our services and meet legal obligations, then securely delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your rights</h2>
            <p className="text-gray-400 leading-relaxed">
              You have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at the address below. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
            <p className="text-gray-400 leading-relaxed">
              Our website uses cookies and similar technologies to improve your experience and analyse usage. You can control cookie settings through your browser. Disabling cookies may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact us</h2>
            <p className="text-gray-400 leading-relaxed">
              For privacy enquiries or complaints, please contact us at{" "}
              <span className="text-blue-400">hello&#64;tinyagent.io</span>. If you are unsatisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.
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
