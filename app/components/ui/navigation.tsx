"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Brand } from "@/app/components/ui/brand";
import { Container } from "@/app/components/ui/container";
import { PrimaryButton } from "@/app/components/ui/primary-button";

type NavigationItemKey = "platform" | "compliance" | "about";

type NavigationProps = {
  consultationHref?: string;
  menuId?: string;
  theme?: "dark" | "light";
};

const navigationItems: Array<{
  key: NavigationItemKey;
  label: string;
  href: string;
}> = [
  { key: "platform", label: "Platform", href: "/platform" },
  { key: "compliance", label: "Compliance", href: "/compliance" },
  { key: "about", label: "About", href: "/about" },
];

export function Navigation({
  consultationHref = "#contact",
  menuId = "primary-nav-menu",
  theme = "dark",
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Đóng menu khi resize màn hình lên desktop
  useEffect(() => {
    const closeDesktopMenu = () => {
      if (window.innerWidth > 820) setMenuOpen(false);
    };

    window.addEventListener("resize", closeDesktopMenu);
    return () => window.removeEventListener("resize", closeDesktopMenu);
  }, []);

  // Toggle body class để khóa scroll khi mở menu mobile
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  const lightTheme = theme === "light";

  return (
    <Container
      className={`relative z-20 flex h-[78px] items-center justify-between ${
        lightTheme ? "text-ink" : "text-white"
      }`}
    >
      <Brand tone={lightTheme ? "dark" : "light"} />

      {/* Mobile Menu Overlay */}
      <div
        className={`flex flex-1 items-center justify-center max-[820px]:fixed max-[820px]:inset-0 max-[820px]:flex-col max-[820px]:bg-brand-950/98 max-[820px]:px-6 max-[820px]:pb-10 max-[820px]:pt-[90px] max-[820px]:transition-all ${
          menuOpen
            ? "max-[820px]:z-10 max-[820px]:visible max-[820px]:opacity-100"
            : "max-[820px]:invisible max-[820px]:-z-10 max-[820px]:opacity-0"
        }`}
        id={menuId}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex items-center gap-10 max-[820px]:flex-col max-[820px]:gap-[26px]"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`border-b py-1 font-medium transition max-[820px]:text-[28px] max-[820px]:text-white ${
                  isActive
                    ? "border-brand-700 text-brand-700"
                    : "border-transparent hover:border-brand-700 hover:text-brand-700"
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Actions (Button + Burger Menu) */}
      <div className="flex items-center justify-end gap-4">
        <div onClick={closeMenu}>
          <PrimaryButton href={consultationHref} small>
            Book a Consultation
          </PrimaryButton>
        </div>

        {/* Burger Button */}
        <button
          className={`relative z-20 hidden size-[42px] rounded-full bg-transparent p-[9px] max-[820px]:block ${
            menuOpen || !lightTheme
              ? "border border-white/40"
              : "border border-ink/25"
          }`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={toggleMenu}
        >
          <span className="sr-only">
            {menuOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>

          {/* Top Bar */}
          <span
            className={`my-[5px] block h-px w-full transition-transform duration-300 ${
              menuOpen || !lightTheme ? "bg-white" : "bg-ink"
            } ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
          />
          {/* Middle Bar */}
          <span
            className={`my-[5px] block h-px w-full transition-opacity duration-300 ${
              menuOpen || !lightTheme ? "bg-white" : "bg-ink"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          {/* Bottom Bar */}
          <span
            className={`my-[5px] block h-px w-full transition-transform duration-300 ${
              menuOpen || !lightTheme ? "bg-white" : "bg-ink"
            } ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>
    </Container>
  );
}
