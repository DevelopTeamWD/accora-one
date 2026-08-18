import { Navigation } from "@/app/components/ui/navigation";
import { asset } from "@/app/lib/assets";

export function ComplianceHero() {
  return (
    <header id="top">
      <div className="relative z-30 bg-white ">
        <Navigation theme="light" menuId="compliance-nav-menu" />
      </div>

      <div className="relative h-[530px] overflow-hidden bg-gradient-to-b from-white to-brand-50 max-[820px]:h-[500px]">
        <img
          className="pointer-events-none absolute left-[-205px] top-[131px] h-[438px] w-[660px] opacity-25 max-[820px]:left-[-390px]"
          src={asset("compliance/hero-pattern-left.png")}
          alt=""
          aria-hidden="true"
        />
        <img
          className="pointer-events-none absolute right-[-205px] top-[21px] h-[438px] w-[660px] opacity-25 max-[820px]:right-[-390px]"
          src={asset("compliance/hero-pattern-right.png")}
          alt=""
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute left-1/2 top-[192px] h-[475.919px] w-[477.678px] -translate-x-1/2 max-[820px]:top-[250px] max-[820px]:scale-75">
          <img
            className="absolute left-[-0.5%] top-0 h-[511.319px] w-[510.478px] max-w-none"
            src={asset("compliance/hero-shield.svg")}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="reveal relative z-10 mx-auto flex w-[min(calc(100%_-_32px),692px)] flex-col items-center pt-24 text-center max-[820px]:pt-20">
          <p className="text-sm leading-[22px] text-brand-700">
            COMPLIANCE &amp; VALIDATION
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-[58px] tracking-[0.02em] max-[820px]:text-[40px] max-[820px]:leading-[48px] max-[560px]:text-[34px] max-[560px]:leading-10">
            Compliance confidence for regulated quality teams
          </h1>
          <p className="mt-4 text-lg leading-7 text-muted max-[560px]:text-base max-[560px]:leading-6">
            Accura supports electronic records, data integrity, audit trails and
            validation activities across the quality system lifecycle. Built for
            life sciences teams that need confidence in every record, approval
            and change.
          </p>
        </div>
      </div>
    </header>
  );
}
