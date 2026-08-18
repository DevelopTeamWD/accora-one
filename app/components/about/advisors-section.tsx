import { Container } from "@/app/components/ui/container";
import { advisors } from "@/app/data/about-content";

export function AdvisorsSection() {
  return (
    <section className="relative z-20 -mt-[60px] min-h-[900px] overflow-hidden rounded-t-[48px] bg-[linear-gradient(180deg,#e4f0e7_0%,#fdfdfc_76%)] py-24 max-[820px]:min-h-0 max-[820px]:rounded-t-[36px] max-[820px]:py-20">
      <Container>
        <div className="reveal mx-auto max-w-[860px] text-center">
          <p className="text-sm leading-[22px] text-brand-700">
            GUIDED BY EXPERIENCE
          </p>
          <h2 className="mt-[13px] text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9">
            Advisors and team members who understand regulated environments
          </h2>
          <p className="mx-auto mt-[13px] max-w-[660px] text-base leading-6 text-muted">
            Accura&apos;s direction is informed by people with practical exposure
            to life sciences quality systems, validation expectations,
            laboratory realities and modern software delivery.
          </p>
        </div>

        <div className="mx-auto mt-11 flex max-w-[977px] flex-wrap justify-center gap-5">
          {advisors.map((advisor) => (
            <article
              className="reveal flex min-h-[230px] w-[312.25px] flex-col gap-4 rounded-3xl border border-[#dedede] bg-white p-6"
              key={advisor.id}
            >
              <div className="flex gap-[14px]">
                <div className="grid h-[72px] w-[82px] shrink-0 place-items-center rounded-[20px] border border-dashed border-[#b8c9c4] bg-[#ecf1f0] text-xs text-[#525c52]">
                  Placeholder
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-7">
                    {advisor.name}
                  </h3>
                  <p className="text-sm font-medium leading-[22px] text-brand-700">
                    {advisor.role}
                  </p>
                </div>
              </div>
              <p className="text-[15px] leading-[23px] text-[#525c52]">
                {advisor.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
