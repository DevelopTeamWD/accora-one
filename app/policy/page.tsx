import type { Metadata } from "next";
import { PolicyContent } from "@/app/components/policy/policy-content";
import { PolicyHero } from "@/app/components/policy/policy-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Accura One",
  description:
    "Read how Accura One collects, uses, stores and safeguards personal information.",
};

export default function PolicyPage() {
  return (
    <>
      <PolicyHero />
      <main>
        <PolicyContent />
      </main>
    </>
  );
}
