import type { Metadata } from "next";
import { ContactFormSection } from "@/app/components/contact/contact-form-section";
import { ContactHero } from "@/app/components/contact/contact-hero";

export const metadata: Metadata = {
  title: "Contact | Accura One",
  description:
    "Talk to Accura One's quality experts about modernising your quality management system.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <main>
        <ContactFormSection />
      </main>
    </>
  );
}
