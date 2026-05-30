import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Tiny Agent Terms of Service — the terms that govern the use of our real estate advertising services, including engagement, fees, guarantees, and liability.",
};

/*
 * NOTE FOR OPERATOR: Insert your registered operating entity and ABN in clause 1/24
 * (e.g. "Tiny Agent Pty Ltd (ABN 00 000 000 000)"). These Terms reflect a make-good
 * (not money-back) performance guarantee and a pro-business protective stance. Have an
 * Australian solicitor review before relying on them — the Australian Consumer Law and
 * the unfair contract terms regime apply to standard-form small-business contracts.
 */

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
        <p className="text-gray-500 text-sm mb-10">Last updated: May 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8">

          <section>
            <p className="text-gray-400 leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) form a binding agreement between you (&ldquo;you&rdquo;, &ldquo;the Client&rdquo;) and Tiny Agent (&ldquo;Tiny Agent&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). They govern your use of this website and any advertising services you engage us to provide. Please read them carefully. By using this website, requesting a proposal, or engaging our services, you agree to these Terms. If you do not agree, do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Definitions</h2>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li><span className="text-gray-300">&ldquo;Services&rdquo;</span> means the digital advertising services described in clause 3 and confirmed in your Order.</li>
              <li><span className="text-gray-300">&ldquo;Order&rdquo;</span> means the proposal, quote, package selection, or written confirmation that sets out the specific Services, fees, package, suburb/target area, term, and any performance figures applicable to you.</li>
              <li><span className="text-gray-300">&ldquo;Management Fee&rdquo;</span> means the fee payable to Tiny Agent for performing the Services, separate from Ad Spend.</li>
              <li><span className="text-gray-300">&ldquo;Ad Spend&rdquo;</span> means the media budget paid to advertising platforms (such as Meta) to run your campaigns.</li>
              <li><span className="text-gray-300">&ldquo;Platform&rdquo;</span> means any third-party advertising platform used to deliver the Services, including Facebook and Instagram (Meta).</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-3">
              If there is any inconsistency, your Order prevails over these Terms to the extent of the inconsistency for the specific matter it addresses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Eligibility</h2>
            <p className="text-gray-400 leading-relaxed">
              The Services are intended for licensed or registered real estate professionals operating in Australia, using them for business purposes. By engaging us, you confirm that you hold any licences, registrations, and authorisations required to operate as a real estate agent or representative in your jurisdiction, and that the information you provide to us is accurate and current.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. The Services</h2>
            <p className="text-gray-400 leading-relaxed">
              Tiny Agent provides done-for-you digital advertising campaign management for real estate agents in Australia. This may include audience targeting, ad creative production using your brand assets, campaign setup, ongoing optimisation, lead delivery, and periodic reporting. The specific scope, deliverables, and any performance figures are confirmed in your Order before a campaign commences. We may use subcontractors and the Platforms to deliver the Services. We may improve or change our methods, tools, and creative approaches at any time, provided the agreed Services are still delivered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Suburb exclusivity</h2>
            <p className="text-gray-400 leading-relaxed">
              Where your Order includes suburb or area exclusivity (for example, our &ldquo;one agent per suburb&rdquo; model), we will not knowingly onboard a competing agent for the same agreed area while your engagement is active and your account is in good standing. Exclusivity applies only to the specific area stated in your Order, applies only while fees are paid and the engagement continues, and ends when your engagement ends. Exclusivity does not guarantee any particular result and is not a representation about the activities of agents we are not engaged by.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Engagement term and renewal</h2>
            <p className="text-gray-400 leading-relaxed">
              Unless your Order states otherwise, all engagements require an initial minimum term of three (3) months. Good advertising takes time to establish and optimise, and the initial term reflects this. After the initial term, the Services continue on a month-to-month basis until either party gives at least thirty (30) days&rsquo; written notice of termination. Termination does not relieve you of the obligation to pay fees accrued up to the effective date of termination, including the balance of any committed initial term.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Fees, billing and payment</h2>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>Management Fees are agreed in writing in your Order and are invoiced <span className="text-gray-300">monthly in advance</span>.</li>
              <li>Unless stated otherwise, fees are in Australian dollars and are exclusive of GST, which will be added where applicable.</li>
              <li>You authorise us (or our payment processor) to charge your nominated payment method on each billing date. You are responsible for keeping your payment details current.</li>
              <li>Invoices are payable on receipt unless a different due date is stated. Amounts not paid when due may accrue interest and reasonable recovery costs, and we may suspend or stop the Services until payment is made.</li>
              <li>Except where required by the Australian Consumer Law or expressly stated in your Order, <span className="text-gray-300">Management Fees are non-refundable</span>, including for periods already elapsed or work already performed. Pausing or cancelling mid-cycle does not entitle you to a refund of fees for that cycle.</li>
              <li>You agree not to initiate chargebacks or payment disputes for amounts validly owing. If you believe an invoice is incorrect, contact us first and we will work with you to resolve it in good faith.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Advertising and media spend</h2>
            <p className="text-gray-400 leading-relaxed">
              Ad Spend is <span className="text-gray-300">separate from</span> Management Fees and is agreed in your Order. Depending on the arrangement, Ad Spend may be billed to your own Platform account or collected by us and applied to your campaigns. Ad Spend is consumed by the Platform as your ads run and is generally non-recoverable once spent. Platform pricing, auction dynamics, delivery, and reach are controlled by the Platform and are outside our control. You are responsible for ensuring sufficient funds or limits are available for agreed Ad Spend.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Performance guarantee</h2>
            <p className="text-gray-400 leading-relaxed mb-3">
              Where your Order states a guaranteed performance figure (for example, a monthly reach/impressions target or a monthly lead target), that guarantee is a <span className="text-gray-300">service make-good</span>, not a money-back guarantee. If we do not meet the stated figure in a given billing month, our sole obligation, and your sole remedy, is to <span className="text-gray-300">continue optimising and running your campaign at no additional Management Fee</span> until the figure is met or as otherwise stated in your Order.
            </p>
            <p className="text-gray-400 leading-relaxed mb-3">Any guarantee is conditional on all of the following:</p>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>your account being current and all fees and agreed Ad Spend paid on time;</li>
              <li>you maintaining the minimum agreed Ad Spend for the full month without unauthorised pauses;</li>
              <li>you providing required assets, approvals, and Platform access promptly;</li>
              <li>you not making changes to the campaign, targeting, creative, or Platform account without our agreement;</li>
              <li>you responding to and handling leads reasonably and promptly; and</li>
              <li>no Platform outage, policy change, account restriction, suspension, or other event outside our reasonable control affecting delivery.</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-3">
              Guaranteed figures relate to advertising metrics (such as reach, impressions, or enquiries) only. We do not guarantee sales, listings, appraisals secured, conversions, revenue, or return on investment. A &ldquo;lead&rdquo; means an enquiry generated through the campaign; we do not warrant the quality, intent, accuracy, or commercial value of any lead.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Your responsibilities</h2>
            <p className="text-gray-400 leading-relaxed mb-3">You agree to:</p>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>provide accurate, current information about your agency, target area, licensing, and brand;</li>
              <li>supply required assets (such as photos, logos, and copy points) in a timely manner, and grant the access we reasonably need to deliver the Services;</li>
              <li>ensure all materials and instructions you provide are lawful, accurate, not misleading, and do not infringe any third party&rsquo;s rights;</li>
              <li>comply with all laws applicable to you, including real estate, advertising, privacy, and consumer protection laws, and the Platforms&rsquo; terms and policies;</li>
              <li>obtain any consents required for the use of any people, properties, or content in your materials; and</li>
              <li>promptly and lawfully follow up on and handle leads delivered to you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Account access and page ownership</h2>
            <p className="text-gray-400 leading-relaxed">
              Where ads run from your own Facebook and Instagram presence, you retain ownership of your Platform accounts, pages, followers, and engagement. To deliver the Services, you grant us the access (such as partner, admin, or advertiser access) we reasonably require, and you may revoke that access at any time, though doing so may prevent us from delivering the Services and may affect any guarantee. You are responsible for the security of your accounts and for any content published from them other than the agreed campaign creative we produce.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Third-party platforms</h2>
            <p className="text-gray-400 leading-relaxed">
              The Services rely on third-party Platforms that we do not own or control. Your campaigns are subject to the Platforms&rsquo; terms, policies, review processes, pricing, and availability. We are not responsible or liable for any Platform act or omission, including ad disapprovals, account restrictions or suspensions, policy or algorithm changes, price changes, outages, data loss, or changes to features or targeting options. Where a Platform issue affects delivery, we will use reasonable efforts to assist, but this is outside our control and does not constitute a breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Intellectual property</h2>
            <p className="text-gray-400 leading-relaxed">
              Campaign creative we produce specifically for you using your brand assets becomes your property once the relevant fees are paid. We retain ownership of all methodologies, systems, templates, tools, know-how, and pre-existing or underlying materials used to deliver the Services, and of any general improvements to them. You grant us a non-exclusive licence to use your brand assets and campaign materials to deliver the Services and, unless you tell us otherwise in writing, to reference your campaign and non-confidential results in our own marketing and portfolio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Confidentiality</h2>
            <p className="text-gray-400 leading-relaxed">
              Each party may receive confidential information from the other. Each party agrees to keep the other&rsquo;s confidential information confidential and to use it only to perform or receive the Services, except where disclosure is required by law. This clause does not prevent us from describing the general nature of the Services or from using results as permitted under clause 12.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14. Disclaimers</h2>
            <p className="text-gray-400 leading-relaxed">
              We perform the Services with due care and skill. Other than as expressly stated in these Terms, your Order, or as required by law, we make no warranties or representations, express or implied, about the Services or any results. Any forward-looking statements, examples, case studies, testimonials, or figures shown on our website or in our marketing are illustrative only, reflect particular circumstances, and are not promises or guarantees of any particular outcome for you. Advertising results depend on many factors outside our control, including market conditions, competition, your offering, your follow-up, and Platform behaviour.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">15. Australian Consumer Law</h2>
            <p className="text-gray-400 leading-relaxed">
              Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy that applies to you under the Australian Consumer Law or any other law that cannot lawfully be excluded (&ldquo;Non-excludable Rights&rdquo;). Where our liability for failing to comply with a Non-excludable Right can be limited, our liability is limited, at our option, to re-supplying the relevant Services or paying the cost of having them re-supplied. The other limitations in these Terms apply only to the extent permitted by law and subject to your Non-excludable Rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">16. Limitation of liability</h2>
            <p className="text-gray-400 leading-relaxed">
              To the maximum extent permitted by law and subject to clause 15, our total aggregate liability arising out of or in connection with the Services or these Terms (whether in contract, tort including negligence, statute, or otherwise) is limited to the total Management Fees paid by you to us in the three (3) months immediately before the event giving rise to the liability. To the maximum extent permitted by law, we are not liable for any indirect, special, incidental, or consequential loss, or for any loss of profit, revenue, listings, sales, goodwill, opportunity, data, or anticipated savings. We are not liable for Ad Spend consumed by the Platforms. Nothing in these Terms limits liability for fraud or for any liability that cannot be limited by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">17. Indemnity</h2>
            <p className="text-gray-400 leading-relaxed">
              You indemnify us against any loss, damage, cost, or claim we suffer or incur arising from your breach of these Terms, your misuse of the Services, your follow-up or dealings with leads, your products or services, or any content, materials, or instructions you provide to us (including any claim that they are unlawful, misleading, or infringe a third party&rsquo;s rights), except to the extent caused by our own breach or negligence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">18. Termination and suspension</h2>
            <p className="text-gray-400 leading-relaxed">
              Either party may terminate as set out in clause 5. Either party may also terminate immediately by written notice if the other commits a material breach that is not remedied within fourteen (14) days of notice, or becomes insolvent. We may suspend or terminate the Services immediately if you fail to pay amounts when due, breach these Terms, or if a Platform requires it. On termination, you must pay all fees accrued up to the effective date, including any committed but unbilled portion of the initial term. Clauses that by their nature should survive termination (including fees owing, intellectual property, confidentiality, disclaimers, liability, and indemnity) survive.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">19. Force majeure</h2>
            <p className="text-gray-400 leading-relaxed">
              We are not liable for any failure or delay in performing the Services to the extent caused by events beyond our reasonable control, including Platform outages or policy changes, internet or infrastructure failures, acts of government, natural events, or industrial action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">20. Privacy</h2>
            <p className="text-gray-400 leading-relaxed">
              We handle personal information in accordance with our{" "}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</Link>. You are responsible for handling any leads and personal information you receive in accordance with applicable privacy laws, including the Privacy Act 1988 (Cth) where it applies to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">21. Changes to these Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update these Terms from time to time. The current version will always be available on this page with the &ldquo;Last updated&rdquo; date. Material changes affecting an active engagement will take effect at your next renewal, or earlier if required by law or if you agree. Your continued use of the website or Services after changes take effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">22. General</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms, together with your Order and our Privacy Policy, are the entire agreement between us and supersede any prior understanding on their subject matter. If any provision is found to be invalid or unenforceable, it is severed and the rest remains in force. A failure or delay in exercising a right is not a waiver of it. You may not assign or transfer your rights or obligations without our written consent; we may assign or subcontract ours. Notices must be in writing and sent to the contact details below or as otherwise notified.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">23. Governing law</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms are governed by the laws of Victoria, Australia. Each party submits to the exclusive jurisdiction of the courts of Victoria and the courts that hear appeals from them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">24. Contact</h2>
            <p className="text-gray-400 leading-relaxed">
              For questions about these Terms, contact us at{" "}
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
