import { ComplianceSection } from "@/app/components/home/compliance-section";
import { HeroSection } from "@/app/components/home/hero-section";
import { IndustriesSection } from "@/app/components/home/industries-section";
import { SolutionsSection } from "@/app/components/home/solutions-section";
import { TrustSection } from "@/app/components/home/trust-section";
import { WhyChangeSection } from "@/app/components/home/why-change-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main>
        <TrustSection />
        <WhyChangeSection />
        <SolutionsSection />
        <ComplianceSection />
        <IndustriesSection />
      </main>
    </>
  );
}
