import type { Metadata } from "next";
import { AboutHero } from "@/app/components/about/about-hero";
import { AdvisorsSection } from "@/app/components/about/advisors-section";
import { CorePillarsSection } from "@/app/components/about/core-pillars-section";
import { PurposeSection } from "@/app/components/about/purpose-section";
import { QualityPartnerSection } from "@/app/components/about/quality-partner-section";
import { TeamPrinciplesSection } from "@/app/components/about/team-principles-section";

export const metadata: Metadata = {
  title: "About | Accura One",
  description:
    "Meet the people, advisors and principles behind Accura One's quality management platform for regulated teams.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <main>
        <TeamPrinciplesSection />
        <AdvisorsSection />
        <PurposeSection />
        <CorePillarsSection />
        <QualityPartnerSection />
      </main>
    </>
  );
}
