import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RevealOnScroll } from "@/app/components/home/reveal-on-scroll";
import { SiteFooter } from "@/app/components/home/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accura One | Quality Management Made Simple",
  description:
    "Accura One is a cloud-native electronic quality management system for regulated life sciences teams.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white font-geist text-ink antialiased">
        <RevealOnScroll />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
