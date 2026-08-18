import type { Metadata } from "next";
import { AuditReadinessSection } from "@/app/components/compliance/audit-readiness-section";
import { ComplianceHero } from "@/app/components/compliance/compliance-hero";
import { CoverageSection } from "@/app/components/compliance/coverage-section";
import { DataIntegritySection } from "@/app/components/compliance/data-integrity-section";
import { ElectronicRecordsSection } from "@/app/components/compliance/electronic-records-section";
import { RegulatoryAlignmentSection } from "@/app/components/compliance/regulatory-alignment-section";
import { ValidationLifecycleSection } from "@/app/components/compliance/validation-lifecycle-section";

export const metadata: Metadata = {
  title: "Compliance & Validation | Accura One",
  description:
    "Explore Accura One's compliance controls, ALCOA+ data integrity support, validation lifecycle and audit readiness capabilities.",
};

export default function CompliancePage() {
  return (
    <>
      <ComplianceHero />
      <main>
        <CoverageSection />
        <RegulatoryAlignmentSection />
        <ElectronicRecordsSection />
        <DataIntegritySection />
        <ValidationLifecycleSection />
        <AuditReadinessSection />
      </main>
    </>
  );
}
