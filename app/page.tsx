import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSteps from "@/components/SolutionSteps";
import AdShowcase from "@/components/AdShowcase";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ProofBar />
      <ProblemSection />
      <SolutionSteps />
      <AdShowcase />
      <Features />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
