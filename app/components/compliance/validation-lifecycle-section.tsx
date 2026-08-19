import { Container } from "@/app/components/ui/container";
import { validationSteps } from "@/app/data/compliance-content";
import { asset } from "@/app/lib/assets";

export function ValidationLifecycleSection() {
  return (
    <section className="relative overflow-hidden rounded-[64px] bg-brand-950 py-20 text-white max-[820px]:rounded-[40px]">
      <img
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-10 mix-blend-hard-light"
        src={asset("compliance/validation-background.png")}
        alt=""
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="reveal max-w-[790px]">
          <p className="text-sm font-medium leading-[22px] text-brand-50">
            VALIDATION LIFECYCLE
          </p>
          <h2 className="mt-2 text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9">
            Validation support from
            <br className="max-[560px]:hidden" /> implementation through
            <br className="max-[560px]:hidden" />
            ongoing change
          </h2>
          <p className="mt-4 text-base leading-6 text-[#dedede]">
            Accura provides a validation-ready foundation with supporting
            documentation, controlled configuration and release management
            practices to help teams maintain confidence as the system evolves.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-4 gap-8 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
          {validationSteps.map((step) => (
            <article
              className="reveal border-t-2 border-[#c4c4c4] pt-[26px]"
              key={step.title}
            >
              <p className="text-xl font-semibold leading-7 text-brand-700">
                {step.number}
              </p>
              <h3 className="pt-2 text-lg font-semibold leading-6">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-6 text-[#dedede]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
