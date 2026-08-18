import { Navigation } from "@/app/components/ui/navigation";
import { asset } from "@/app/lib/assets";

export function AboutHero() {
  return (
    <header id="top">
      <div className="relative z-30 bg-white shadow-[0_0_22px_rgba(0,0,0,0.1)]">
        <Navigation theme="light" menuId="about-nav-menu" />
      </div>

      <div className="relative flex h-[530px] items-center justify-center overflow-hidden bg-gradient-to-b from-white to-brand-50 px-4 pb-[130px] pt-14 max-[820px]:h-[500px]">
        <img
          className="pointer-events-none absolute left-[-205px] top-[131px] h-[438px] w-[660px] opacity-25 max-[820px]:left-[-390px]"
          src={asset("about/hero-pattern-left.png")}
          alt=""
          aria-hidden="true"
        />
        <img
          className="pointer-events-none absolute right-[-205px] top-[21px] h-[438px] w-[660px] opacity-25 max-[820px]:right-[-390px]"
          src={asset("about/hero-pattern-right.png")}
          alt=""
          aria-hidden="true"
        />

        <div className="reveal relative z-10 flex w-[min(100%,798px)] flex-col items-center gap-6 text-center">
          <p className="text-sm leading-[22px] text-brand-700">ABOUT ACCURA</p>
          <h1 className="max-w-[740px] text-5xl font-bold leading-[58px] tracking-[0.02em] max-[820px]:text-[40px] max-[820px]:leading-[48px] max-[560px]:text-[34px] max-[560px]:leading-10">
            Built by people who understand regulated quality from the inside
          </h1>
          <p className="text-base leading-6 text-muted">
            Accura unites experts in software engineering, quality assurance,
            validation, and regulated life sciences. Our product is crafted by
            those who understand the daily challenges faced by quality teams.
          </p>
        </div>
      </div>
    </header>
  );
}
