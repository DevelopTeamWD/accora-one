import { ComplianceIcon } from "@/app/components/home/compliance-icon";
import { Container } from "@/app/components/ui/container";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { complianceCards, type ComplianceItem } from "@/app/data/home-content";
import { asset } from "@/app/lib/assets";

function ComplianceCard({ icon, title, description }: ComplianceItem) {
  return (
    <article className="reveal flex min-w-0 flex-col items-start gap-5 border-r border-[#175e41] p-6 last:border-r-0 max-[820px]:border-b max-[820px]:border-r-0 max-[820px]:py-10 max-[820px]:last:border-b-0 max-[560px]:px-2">
      <ComplianceIcon variant={icon} />
      <div className="flex flex-col gap-4 p-1">
        <h3 className="text-2xl font-medium leading-7">{title}</h3>
        <p className="text-base font-medium leading-6">{description}</p>
      </div>
    </article>
  );
}

export function ComplianceSection() {
  return (
    <section
      className="relative min-h-[654px] overflow-hidden rounded-[64px] bg-brand-950 py-[120px] text-white max-[820px]:min-h-0 max-[820px]:rounded-[40px] max-[560px]:py-20"
      id="compliance"
      aria-labelledby="compliance-title"
    >
      <img
        className="pointer-events-none absolute top-[120px] right-[0px] h-auto w-[40.82%] max-w-none opacity-[0.06] max-[820px]:bottom-[-8%] max-[820px]:right-[-30%] max-[820px]:h-auto max-[820px]:w-[90%]"
        src={asset("a.png")}
        alt=""
        aria-hidden="true"
      />
      <Container>
        <SectionHeading kicker="Uncompromising rigor" light>
          <span id="compliance-title">Continuous Compliance, Assured</span>
        </SectionHeading>
        <div className="relative grid grid-cols-3 max-[820px]:mx-auto max-[820px]:max-w-[600px] max-[820px]:grid-cols-1">
          {complianceCards.map((card) => (
            <ComplianceCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
