import { Container } from "@/app/components/ui/container";
import { regulatoryStandards } from "@/app/data/compliance-content";
import { asset } from "@/app/lib/assets";

function StandardList({ start }: { start: number }) {
  return (
    <div>
      {regulatoryStandards.slice(start, start + 3).map((standard) => (
        <article
          className="reveal flex min-h-[121px] gap-2 border-b border-[#dedede] py-6"
          key={standard.title}
        >
          <span className="grid size-5 shrink-0 place-items-center">
            <img
              className="size-4"
              src={asset("compliance/check-circle.svg")}
              alt=""
            />
          </span>
          <div>
            <h3 className="text-lg font-semibold leading-6">
              {standard.title}
            </h3>
            <p className="text-base leading-6 text-muted">
              {standard.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function RegulatoryAlignmentSection() {
  return (
    <section className="relative z-20 -mt-[60px] min-h-[717px] overflow-hidden rounded-t-[48px] bg-[linear-gradient(180deg,#e4f0e7_0%,#fdfdfc_76%)] py-24 max-[820px]:min-h-0 max-[820px]:rounded-t-[36px] max-[820px]:py-20">
      <Container>
        <div className="reveal mx-auto max-w-[779px] text-center">
          <p className="text-sm font-medium leading-[22px] text-brand-700">
            REGULATORY ALIGNMENT
          </p>
          <h2 className="mt-2 text-[40px] font-medium leading-[44px] text-[#0f172a] max-[560px]:text-[32px] max-[560px]:leading-9">
            Aligned with recognized quality
            <br className="max-[560px]:hidden" /> standards and frameworks
          </h2>
        </div>
        <div className="mx-auto mt-11 grid max-w-[1107px] grid-cols-2 gap-12 max-[820px]:grid-cols-1 max-[820px]:gap-0">
          <StandardList start={0} />
          <StandardList start={3} />
        </div>
      </Container>
    </section>
  );
}
