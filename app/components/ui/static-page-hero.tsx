import type { ReactNode } from "react";
import { Navigation } from "@/app/components/ui/navigation";
import { asset } from "@/app/lib/assets";

type StaticPageHeroProps = {
  compact?: boolean;
  description: string;
  descriptionClassName?: string;
  eyebrow?: string;
  menuId: string;
  title: ReactNode;
  titleClassName?: string;
};

export function StaticPageHero({
  compact = false,
  description,
  descriptionClassName = "max-w-[798px]",
  eyebrow,
  menuId,
  title,
  titleClassName = "max-w-[715px]",
}: StaticPageHeroProps) {
  return (
    <header id="top">
      <div className="relative z-30 bg-white shadow-[0_0_22px_rgba(0,0,0,0.1)]">
        <Navigation theme="light" menuId={menuId} />
      </div>

      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-brand-50 px-4 pt-14 ${
          compact
            ? "h-[362px] pb-[110px] max-[820px]:h-[330px] max-[820px]:pb-20"
            : "h-[496px] pb-[130px] max-[820px]:h-[460px] max-[820px]:pb-24"
        }`}
      >
        <img
          className="pointer-events-none absolute left-[-205px] top-[131px] h-[438px] w-[660px] opacity-25 max-[820px]:left-[-430px]"
          src={asset("about/hero-pattern-left.png")}
          alt=""
          aria-hidden="true"
        />
        <img
          className="pointer-events-none absolute right-[-205px] top-[21px] h-[438px] w-[660px] opacity-25 max-[820px]:right-[-430px]"
          src={asset("about/hero-pattern-right.png")}
          alt=""
          aria-hidden="true"
        />

        <div className="reveal relative z-10 flex w-full flex-col items-center gap-6 text-center">
          {eyebrow ? (
            <p className="text-sm font-medium leading-[22px] text-brand-700">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`text-5xl font-bold leading-[58px] tracking-[0.02em] max-[820px]:text-[40px] max-[820px]:leading-[48px] max-[560px]:text-[34px] max-[560px]:leading-10 ${titleClassName}`}
          >
            {title}
          </h1>
          <p
            className={`text-base leading-6 text-muted ${descriptionClassName}`}
          >
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}
