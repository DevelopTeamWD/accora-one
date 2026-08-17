import { Container } from "@/app/components/ui/container";
import { foundationBenefits } from "@/app/data/platform-content";
import { asset } from "@/app/lib/assets";

export function FoundationSection() {
  return (
    <section
      className="relative min-h-[634px] overflow-hidden rounded-[64px] bg-brand-950 py-20 text-white max-[820px]:min-h-[600px] max-[820px]:rounded-[40px] max-[560px]:py-16"
      aria-labelledby="foundation-title"
    >
      <img
        className="pointer-events-none absolute bottom-[12.6%] right-[8.3%] w-[74.8%] max-w-[1079px] max-[820px]:bottom-8 max-[820px]:right-0 max-[820px]:w-full max-[820px]:opacity-60"
        src={asset("platform/foundation-graph.svg")}
        alt=""
        aria-hidden="true"
      />
      <Container className="relative z-[1]">
        <div className="reveal max-w-[790px]">
          <p className="mb-2 text-sm font-medium uppercase leading-[22px] text-brand-50">
            Modular by design
          </p>
          <h2
            className="text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
            id="foundation-title"
          >
            Pre-validated foundation
            <br />
            for easier setup and faster adoption
          </h2>
          <p className="mt-4 max-w-[790px] text-base leading-6 text-[#dedede]">
            Accura is built to reduce the effort required to launch and maintain
            a compliant quality system. With a validation-ready foundation and
            structured setup approach, teams can move from implementation to
            adoption with greater confidence.
          </p>

          <div className="mt-14 flex max-w-[672px] flex-wrap gap-2 max-[560px]:mt-10">
            {foundationBenefits.map((benefit) => (
              <span
                className="rounded-full bg-white/10 px-[18px] py-[9px] text-lg font-semibold leading-6 max-[560px]:text-base"
                key={benefit}
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
