import { Container } from "@/app/components/ui/container";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { accuraBenefits, traditionalReality } from "@/app/data/home-content";
import { asset } from "@/app/lib/assets";

type ComparisonCardProps = {
  title: string;
  items: string[];
  positive?: boolean;
};

function ComparisonCard({ title, items, positive = false }: ComparisonCardProps) {
  return (
    <article
      className={`reveal min-h-[294px] rounded-3xl p-10 max-[560px]:min-h-0 max-[560px]:px-[22px] max-[560px]:py-7 ${positive ? "bg-brand-950 text-white" : "bg-[#f5f5f5]"}`}
    >
      <h3 className="mb-8 text-2xl font-medium leading-7">{title}</h3>
      <ul className="grid list-none gap-4 p-0">
        {items.map((item) => (
          <li
            className={`flex items-center gap-2 text-base leading-6 max-[560px]:items-start max-[560px]:text-[15px] ${positive ? "" : "text-muted"}`}
            key={item}
          >
            <img
              className={`size-5 shrink-0 ${positive ? "p-[1.875px]" : "p-0.5"}`}
              src={asset(
                positive ? "status-positive.svg" : "status-negative.svg",
              )}
              alt=""
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function WhyChangeSection() {
  return (
    <section
      className="min-h-[638px] pb-[120px] pt-[60px] max-[820px]:pb-[76px]"
      id="about"
      aria-labelledby="why-title"
    >
      <Container>
        <SectionHeading kicker="Why change">
          <span id="why-title">
            Move from disconnected quality work
            <br className="max-[560px]:hidden" />
            to one traceable operating system.
          </span>
        </SectionHeading>
        <div className="grid grid-cols-2 gap-5 max-[820px]:grid-cols-1">
          <ComparisonCard title="Traditional Reality" items={traditionalReality} />
          <ComparisonCard title="With Accura" items={accuraBenefits} positive />
        </div>
      </Container>
    </section>
  );
}
