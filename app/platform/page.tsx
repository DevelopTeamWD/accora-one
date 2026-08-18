import type { Metadata } from "next";
import { IndustriesSection } from "@/app/components/home/industries-section";
import { ConfigurableWorkflowsSection } from "@/app/components/platform/configurable-workflows-section";
import { ConnectedQualitySection } from "@/app/components/platform/connected-quality-section";
import { FoundationSection } from "@/app/components/platform/foundation-section";
import { ImplementationSupportSection } from "@/app/components/platform/implementation-support-section";
import { ModularDesignSection } from "@/app/components/platform/modular-design-section";
import { SolutionsHeroSection } from "@/app/components/platform/platform-hero-section";

export const metadata: Metadata = {
  title: "Platform | Accura One",
  description:
    "Explore Accura One's modular eQMS platform, configurable workflows, connected quality records and implementation support.",
};

export default function platformPage() {
  return (
    <>
      <SolutionsHeroSection />
      <main>
        <ConnectedQualitySection />
        <ModularDesignSection />
        <ConfigurableWorkflowsSection />
        <FoundationSection />
        <ImplementationSupportSection />
        <IndustriesSection compact />
      </main>
    </>
  );
}
