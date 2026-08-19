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

      <div className="reveal absolute left-1/2 top-[511px] z-[3] h-[510px] w-[min(calc(100%_-_80px),925px)] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/90 bg-[linear-gradient(140deg,rgba(255,255,255,0.38),rgba(170,170,170,0.2))] p-3 shadow-[0_30px_80px_rgba(0,25,29,0.35)] max-[820px]:top-[545px] max-[820px]:h-[360px] max-[820px]:w-[calc(100%_-_32px)] max-[820px]:rounded-[18px] max-[820px]:p-2 max-[560px]:top-[585px] max-[560px]:h-[260px]">
        <img
          className="h-auto w-full rounded-2xl"
          src={asset("hero-product.png")}
          alt="Accura document control interface"
        />
        <div
          className="absolute inset-x-3 bottom-0 top-[42%] rounded-b-2xl bg-gradient-to-b from-transparent to-[rgba(245,245,245,0.98)] max-[820px]:inset-x-2"
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
