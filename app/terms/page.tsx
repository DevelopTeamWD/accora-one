import type { Metadata } from "next";
import { TermsContent } from "@/app/components/terms/terms-content";
import { TermsHero } from "@/app/components/terms/terms-hero";

export const metadata: Metadata = {
  title: "Terms & Conditions | Accura One",
  description:
    "Read the terms and conditions governing your use of the Accura One website.",
};

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <main>
        <TermsContent />
      </main>
    </>
  );
}
