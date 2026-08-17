import type { Metadata } from "next";
import { IndustriesSection } from "@/app/components/home/industries-section";
import { RevealOnScroll } from "@/app/components/home/reveal-on-scroll";
import { SiteFooter } from "@/app/components/home/site-footer";
import { ConfigurableWorkflowsSection } from "@/app/components/solutions/configurable-workflows-section";
import { ConnectedQualitySection } from "@/app/components/solutions/connected-quality-section";
import { FoundationSection } from "@/app/components/solutions/foundation-section";
import { ImplementationSupportSection } from "@/app/components/solutions/implementation-support-section";
import { ModularDesignSection } from "@/app/components/solutions/modular-design-section";
import { SolutionsHeroSection } from "@/app/components/solutions/solutions-hero-section";

export const metadata: Metadata = {
  title: "Solutions | Accura One",
  description:
    "Explore Accura One's modular eQMS platform, configurable workflows, connected quality records and implementation support.",
};

export default function SolutionsPage() {
  return (
    <>
      <RevealOnScroll />
      <SolutionsHeroSection />
      <main>
        <ConnectedQualitySection />
        <ModularDesignSection />
        <ConfigurableWorkflowsSection />
        <FoundationSection />
        <ImplementationSupportSection />
        <IndustriesSection compact />
      </main>
      <SiteFooter />
    </>
  );
}
