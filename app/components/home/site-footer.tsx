"use client";

import { Brand } from "@/app/components/ui/brand";
import { asset } from "@/app/lib/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";

const productLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/compliance", label: "Compliance" },
] as const;

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const footerCtaRoutes = ["/", "/platform", "/compliance", "/about"];

function FooterCta() {
  return (
    <div className="relative overflow-hidden text-center">
      <img
        className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-none -translate-x-1/2 object-cover opacity-80 mix-blend-plus-lighter"
        src={asset("pattern.png")}
        alt=""
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-8 py-25 max-[820px]:px-4">
        <h2 className="w-full max-w-[978px] text-[44px] font-bold leading-[48px] tracking-[0.44px] max-[560px]:text-[36px] max-[560px]:leading-10">
          Ready to simplify
          <br />
          your quality management?
        </h2>
        <Link
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-base font-medium leading-6 text-white transition hover:-translate-y-0.5 hover:bg-[#00ad6c]"
          href="/contact"
        >
          Book a Consultation
        </Link>
      </div>
    </div>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  const showCta = footerCtaRoutes.includes(pathname);

  return (
    <footer
      className={`${
        showCta ? "min-h-[750px]" : "min-h-[384px]"
      } overflow-hidden rounded-t-[64px] bg-brand-950 text-white max-[820px]:rounded-t-[40px]`}
      id="site-footer"
    >
      {showCta ? <FooterCta /> : null}

      <div className="mx-auto flex w-full max-w-[996px] flex-col gap-6 py-[60px] max-[1100px]:max-w-none max-[1100px]:px-12 max-[820px]:px-4 max-[560px]:py-12">
        <div className="grid min-h-[196px] grid-cols-[484px_1fr] gap-8 max-[820px]:grid-cols-1 max-[820px]:gap-10">
          <div className="flex flex-col items-start gap-4">
            <Brand footer />
            <p className="max-w-[440px] text-sm leading-[22px] text-white">
              A cloud-native electronic Quality Management System (eQMS)
              purpose-built for regulated life sciences organisations, helping
              teams simplify quality management while maintaining compliance and
              audit readiness.
            </p>
          </div>
          <div className="flex justify-end gap-[103px] pt-6 max-[820px]:justify-start max-[560px]:justify-between max-[560px]:gap-10">
            <div className="flex min-w-[120px] flex-col gap-4">
              {productLinks.map((link) => (
                <Link
                  className="text-base leading-6 text-brand-50 transition hover:text-white"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex min-w-[120px] flex-col gap-4">
              {companyLinks.map((link) => (
                <Link
                  className="text-base leading-6 text-brand-50 transition hover:text-white"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex min-h-11 items-end justify-between border-t border-[#6f8587] pt-5 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-6">
          <div className="flex items-center gap-5">
            <span className="text-sm leading-[22px] text-brand-50">
              Social link:
            </span>
            <a href="#" aria-label="LinkedIn">
              <img
                className="size-6"
                src={asset("social-linkedin.svg")}
                alt=""
              />
            </a>
          </div>
          <div className="flex items-center gap-[30px] text-sm text-brand-50 max-[560px]:flex-wrap max-[560px]:gap-x-5 max-[560px]:gap-y-3">
            <Link className="transition hover:text-white" href="/policy">
              Privacy Policy
            </Link>
            <a className="transition hover:text-white" href="#">
              Terms of Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
