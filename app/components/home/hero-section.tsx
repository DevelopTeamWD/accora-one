import { asset } from "@/app/lib/assets";
import { Navigation } from "@/app/components/ui/navigation";
import { PrimaryButton } from "@/app/components/ui/primary-button";

export function HeroSection() {
  return (
    <header
      className="relative h-[878px] overflow-hidden rounded-b-[64px] bg-brand-950 text-white max-[820px]:h-[820px] max-[820px]:rounded-b-[40px] max-[560px]:h-[790px]"
      id="top"
    >
      <img
        className="pointer-events-none absolute inset-0 size-full max-w-none object-cover object-center"
        src={asset("hero-background.png")}
        alt=""
        aria-hidden="true"
      />
      <Navigation />

      <div className="reveal relative z-[2] mx-auto mt-16 w-[min(calc(100%_-_40px),610px)] text-center max-[820px]:mt-[52px] max-[560px]:mt-9">
        <p className="mb-[19px] inline-flex rounded-full bg-brand-150 px-4 py-0.5 text-base font-medium leading-6 text-[#2b2b2b] max-[560px]:text-[13px] max-[560px]:leading-5">
          Cloud-Native eQMS for Life Sciences
        </p>
        <h1 className="flex flex-col text-5xl leading-[1.42] tracking-[0.02em] max-[820px]:gap-1 max-[820px]:text-[clamp(38px,10vw,48px)] max-[820px]:leading-[1.16] max-[560px]:text-[38px]">
          <strong className="font-bold">Quality Management</strong>
          <span className="font-normal text-brand-50">Made Simple</span>
        </h1>
        <p className="mx-auto mb-[18px] mt-[13px] max-w-[603px] text-lg leading-7 max-[560px]:text-base max-[560px]:leading-6">
          Streamline documents, training, and CAPAs in a unified, modern
          platform built specifically for the rigor of Life Sciences.
        </p>
        <div className="flex items-center justify-center gap-5 max-[560px]:flex-col max-[560px]:gap-2.5">
          <span className="max-[560px]:w-[210px]">
            <PrimaryButton href="/contact">Book a Consultation</PrimaryButton>
          </span>
          <a
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white px-[17px] py-[9px] text-sm font-medium transition hover:-translate-y-0.5 hover:bg-white/10 max-[560px]:w-[210px]"
            href="#solutions"
          >
            Explore Platform
            <img
              className="size-4 rotate-[-90deg] px-[3.2px] py-[2.4px]"
              src={asset("arrow-white.svg")}
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="hero-product-composite">
        <img
          className="reveal block size-full max-w-none"
          src={asset("hero-product-composite.svg")}
          alt="Accura document control interface with scrollbar guides"
        />
      </div>
    </header>
  );
}
