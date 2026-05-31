import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import ProblemSection from "@/components/ProblemSection";
import AdShowcase from "@/components/AdShowcase";
import AgencyMarquee from "@/components/AgencyMarquee";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Real Estate Advertising for Australian Agents",
  description:
    "Done-for-you Facebook & Instagram advertising for Australian real estate agents. Get in front of every homeowner in your suburb and turn attention into booked appraisals. One agent per suburb. Live within 24 hours.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <AdShowcase />
      <AgencyMarquee />
      <ProofBar />
      <ProblemSection />
      <Features />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
