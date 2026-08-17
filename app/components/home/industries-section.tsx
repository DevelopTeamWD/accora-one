import { Container } from "@/app/components/ui/container";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { industries } from "@/app/data/home-content";
import { asset } from "@/app/lib/assets";

export function IndustriesSection() {
  return (
    <section
      className="min-h-[557px] py-[98px] max-[820px]:py-[76px] max-[560px]:py-16"
      aria-labelledby="industries-title"
    >
      <Container>
        <SectionHeading>
          <span id="industries-title">
            Built for every regulated
            <br />
            life sciences environment
          </span>
        </SectionHeading>
        <div className="grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
          {industries.map((industry) => (
            <article
              className={`reveal flex min-h-[136px] items-center gap-4 rounded-[14px] px-6 py-[30px] shadow-[0_24px_48px_-12px_rgba(16,24,40,0.2)] max-[820px]:min-h-[120px] ${industry.cardClass}`}
              key={industry.icon}
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#00372e]">
                <img
                  className={industry.iconClass}
                  src={asset(industry.icon)}
                  alt=""
                />
              </span>
              <h3 className="text-xl font-semibold leading-7">
                {industry.titleLines.map((line, index) => (
                  <span key={line}>
                    {index > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
