import { Container } from "@/app/components/ui/container";
import { auditReadinessBenefits } from "@/app/data/compliance-content";
import { asset } from "@/app/lib/assets";

export function AuditReadinessSection() {
  return (
    <section className="py-[120px] max-[820px]:py-20" aria-labelledby="audit-title">
      <Container>
        <div className="flex items-center gap-[100px] max-[1100px]:gap-12 max-[820px]:flex-col">
          <div className="reveal flex-1">
            <p className="text-sm font-medium leading-[22px] text-brand-700">
              AUDIT READINESS
            </p>
            <h2
              className="mt-2 text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
              id="audit-title"
            >
              Find the evidence you need before, during and after audits
            </h2>
            <p className="mt-4 text-base leading-6 text-muted">
              We help quality teams access records, approvals, activity history
              and supporting evidence more quickly, reducing the manual burden
              of audit preparation.
            </p>
          </div>

          <div className="reveal relative flex h-[431px] w-[648px] shrink-0 items-center justify-center overflow-hidden rounded-3xl px-[53px] py-[47px] max-[1100px]:w-[54%] max-[820px]:h-[380px] max-[820px]:w-full max-[560px]:h-[330px] max-[560px]:px-5">
            <img
              className="absolute inset-0 size-full object-cover"
              src={asset("compliance/audit-background.png")}
              alt="Laboratory glassware used during quality inspection"
            />
            <div className="absolute inset-0 bg-[rgba(12,64,78,0.3)] mix-blend-screen" />
            <div className="relative flex flex-wrap justify-center gap-[17px]">
              {auditReadinessBenefits.map((benefit) => (
                <span
                  className="rounded-full bg-brand-50 px-[18px] py-[9px] text-lg font-semibold leading-6 text-brand-950 max-[560px]:text-base"
                  key={benefit}
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
