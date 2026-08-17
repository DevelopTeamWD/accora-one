import { Brand } from "@/app/components/ui/brand";
import { Container } from "@/app/components/ui/container";
import { asset } from "@/app/lib/assets";

const socialLinks = [
  { label: "LinkedIn", icon: "social-linkedin.svg" },
  { label: "Telegram", icon: "social-telegram.svg" },
  { label: "Facebook", icon: "social-facebook.svg" },
];

const legalLinks = ["Privacy Policy", "Terms of Use", "Disclosure"];

function FooterPattern() {
  return (
    <img
      className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-none -translate-x-1/2 object-cover opacity-80 mix-blend-plus-lighter"
      src={asset("pattern.png")}
      alt=""
      aria-hidden="true"
    />
  );
}

export function SiteFooter() {
  return (
    <footer
      className="min-h-[750px] overflow-hidden rounded-t-[64px] bg-brand-950 text-white max-[820px]:rounded-t-[40px]"
      id="contact"
    >
      <div className="relative overflow-hidden text-center">
        <FooterPattern />
        <div className="relative z-[1] mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-8 py-25 max-[820px]:px-4">
          <h2 className="w-full max-w-[978px] text-[44px] font-bold leading-[48px] tracking-[0.44px] max-[560px]:text-[36px] max-[560px]:leading-10">
            Ready to simplify
            <br />
            your quality management?
          </h2>
          <a
            className="inline-flex h-12 items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-base font-medium leading-6 text-white transition hover:-translate-y-0.5 hover:bg-[#00ad6c]"
            href="mailto:hello@accura.one"
          >
            Book a Consultation
          </a>
        </div>
      </div>

      <Container className="py-[60px] max-[560px]:py-12">
        <div className="grid min-h-[196px] grid-cols-2 gap-8 max-[820px]:grid-cols-1">
          <div>
            <Brand footer />
            <p className="mt-4 max-w-[440px] text-sm leading-[22px] text-brand-50">
              A cloud-native electronic Quality Management System (eQMS)
              purpose-built for regulated life sciences organisations, helping
              teams simplify quality management while maintaining compliance
              and audit readiness.
            </p>
          </div>
          <div className="flex justify-end gap-[103px] pb-6 pt-6 max-[820px]:justify-start max-[560px]:justify-between max-[560px]:gap-10">
            <div className="flex min-w-[120px] flex-col gap-4">
              <h3 className="mb-1 text-lg font-semibold leading-6">
                Privacy Policy
              </h3>
              <a className="text-base leading-6 text-brand-50" href="#about">
                How it works
              </a>
              <a
                className="text-base leading-6 text-brand-50"
                href="/solutions"
              >
                Solutions
              </a>
              <a
                className="text-base leading-6 text-brand-50"
                href="#compliance"
              >
                Compliance
              </a>
            </div>
            <div className="flex min-w-[120px] flex-col gap-4">
              <h3 className="mb-1 text-lg font-semibold leading-6">Company</h3>
              <a className="text-base leading-6 text-brand-50" href="#about">
                About
              </a>
              <a
                className="text-base leading-6 text-brand-50"
                href="mailto:hello@accura.one"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="flex min-h-11 items-end justify-between border-t border-brand-150/35 pt-5 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-6">
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a href="#" aria-label={link.label} key={link.label}>
                <img className="size-6" src={asset(link.icon)} alt="" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-[30px] text-sm text-brand-50 max-[560px]:flex-wrap max-[560px]:gap-x-5 max-[560px]:gap-y-3">
            {legalLinks.map((label) => (
              <a href="#" key={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
