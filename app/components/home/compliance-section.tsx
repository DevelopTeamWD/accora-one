import { Container } from "@/app/components/ui/container";
import { SectionHeading } from "@/app/components/ui/section-heading";
import {
  complianceCards,
  type ComplianceItem,
} from "@/app/data/home-content";
import { asset } from "@/app/lib/assets";

function ComplianceCard({
  visualClass,
  image,
  alt,
  title,
  description,
}: ComplianceItem) {
  return (
    <article className="reveal max-[820px]:mx-auto max-[820px]:max-w-[560px]">
      <div
        className={`grid h-[300px] place-items-center overflow-hidden rounded-3xl px-4 py-[37px] max-[560px]:h-[230px] ${visualClass}`}
      >
        <img
          className="max-h-[181px] w-full rounded-md border border-[#e2e2e2] object-cover shadow-[0_0_0_10px_rgba(222,222,222,0.38),0_12px_35px_rgba(0,0,0,0.08)]"
          src={asset(image)}
          alt={alt}
        />
      </div>
      <h3 className="mx-1 mb-2 mt-5 text-2xl font-medium leading-7 max-[560px]:text-[21px]">
        {title}
      </h3>
      <p className="mx-1 text-base leading-6">{description}</p>
    </article>
  );
}

export function ComplianceSection() {
  return (
    <section
      className="relative min-h-[814px] overflow-hidden rounded-[64px] bg-brand-950 py-[120px] text-white max-[820px]:rounded-[40px] max-[560px]:py-20"
      id="compliance"
      aria-labelledby="compliance-title"
    >
      <div className="absolute bottom-0 right-0 opacity-[0.05]" aria-hidden="true">
        <img src={asset("a.png")} alt="" />
      </div>
      <Container>
        <SectionHeading kicker="Uncompromising rigor" light>
          <span id="compliance-title">Continuous Compliance, Assured.</span>
        </SectionHeading>
        <div className="relative grid grid-cols-3 gap-5 max-[820px]:grid-cols-1">
          {complianceCards.map((card) => (
            <ComplianceCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
