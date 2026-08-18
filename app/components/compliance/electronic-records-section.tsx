import { Container } from "@/app/components/ui/container";
import { electronicRecordControls } from "@/app/data/compliance-content";
import { asset } from "@/app/lib/assets";

export function ElectronicRecordsSection() {
  return (
    <section className="py-20" aria-labelledby="records-title">
      <Container>
        <div className="grid min-h-[520px] grid-cols-2 overflow-hidden rounded-3xl border border-[#dedede] max-[820px]:grid-cols-1">
          <div className="reveal flex flex-col justify-center p-11 max-[560px]:p-7">
            <p className="text-sm font-medium leading-[22px] text-brand-700">
              CONTROLLED ELECTRONIC RECORDS
            </p>
            <h2
              className="mt-2 text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
              id="records-title"
            >
              Records, approvals and signatures with complete accountability
            </h2>
            <p className="mt-4 text-base leading-6 text-muted">
              The platform enhances quality control with electronic signatures,
              verified users, role-based permissions, and audit trails for
              traceable actions across records and workflows.
            </p>
          </div>

          <div className="reveal flex flex-col items-center justify-center gap-8 border-l border-[#dedede] p-11 max-[820px]:border-l-0 max-[820px]:border-t max-[560px]:p-7">
            <img
              className="h-[200px] w-[170px]"
              src={asset("compliance/records-shield.svg")}
              alt="Shield protecting a controlled electronic record"
            />
            <div className="flex max-w-[530px] flex-wrap justify-center gap-3">
              {electronicRecordControls.map((control) => (
                <span
                  className="rounded-full bg-brand-50 px-[18px] py-[9px] text-lg font-semibold leading-6 text-[#454545] max-[560px]:text-base"
                  key={control}
                >
                  {control}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
