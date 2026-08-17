import { Navigation } from "@/app/components/ui/navigation";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import { asset } from "@/app/lib/assets";

export function SolutionsHeroSection() {
  return (
    <header
      className="relative h-[878px] overflow-hidden rounded-b-[64px] bg-brand-950 text-white max-[820px]:h-[820px] max-[820px]:rounded-b-[40px] max-[560px]:h-[780px]"
      id="top"
    >
      <img
        className="pointer-events-none absolute inset-0 size-full object-cover"
        src={asset("/platform/hero-solution.png")}
        alt=""
        aria-hidden="true"
      />

      <Navigation menuId="solutions-nav-menu" />

      <div className="reveal absolute left-1/2 top-[142px] z-10 w-[min(calc(100%_-_40px),820px)] -translate-x-1/2 text-center max-[820px]:top-[130px] max-[560px]:top-[118px]">
        <h1 className="text-5xl font-semibold leading-[68px] tracking-[0.02em] max-[820px]:text-[42px] max-[820px]:leading-[1.2] max-[560px]:text-[34px]">
          A modular eQMS platform
          <br />
          built for regulated quality teams
        </h1>
        <p className="mx-auto mt-4 max-w-[780px] text-lg leading-7 max-[560px]:text-base max-[560px]:leading-6">
          Accura combines key quality processes and compliance support in one
          platform. Start with your current needs and expand as your system
          evolves.
        </p>
        <div className="mt-4 flex items-center justify-center gap-5 max-[560px]:flex-col max-[560px]:gap-2.5">
          <PrimaryButton href="#contact">Book a Consultation</PrimaryButton>
          <a
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-white/10"
            href="#modules"
          >
            Explore Modules
            <img
              className="size-4 rotate-[-90deg] px-[3.2px] py-[2.4px]"
              src={asset("arrow-white.svg")}
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="reveal absolute left-1/2 top-[502px] z-[3] h-[510px] w-[min(calc(100%_-_80px),925px)] -translate-x-1/2 overflow-hidden rounded-3xl border border-white bg-[linear-gradient(139deg,rgba(255,255,255,0.3),rgba(153,153,153,0.3))] p-3 shadow-[0_30px_80px_rgba(0,25,29,0.35)] max-[820px]:top-[530px] max-[820px]:h-[360px] max-[820px]:w-[calc(100%_-_32px)] max-[820px]:rounded-[18px] max-[820px]:p-2 max-[560px]:top-[555px] max-[560px]:h-[260px]">
        <img
          className="size-full rounded-2xl object-cover object-top"
          src={asset("platform/hero-product.png")}
          alt="Accura risk evaluation interface"
        />
        <div
          className="absolute inset-x-3 bottom-0 top-[42%] rounded-b-2xl bg-gradient-to-b from-transparent to-[rgba(245,245,245,0.98)] max-[820px]:inset-x-2"
          aria-hidden="true"
        />
      </div>

      <div className="reveal absolute left-[30.18%] top-[598px] z-[4] w-[57.5%] rounded-2xl border border-[#dedede] bg-white/95 p-2.5 shadow-[0_0_64px_rgba(0,0,0,0.16)] max-[820px]:hidden">
        <img
          className="h-auto w-full"
          src={asset("platform/hero-linked-record.png")}
          alt="Linked risk assessment record"
        />
      </div>
    </header>
  );
}
