import { Container } from "@/app/components/ui/container";
import {
  connectedQualityCards,
  type SolutionCard,
} from "@/app/data/platform-content";
import { asset } from "@/app/lib/assets";

function ConnectedQualityCard({
  icon,
  iconClass,
  title,
  description,
}: SolutionCard) {
  return (
    <article className="reveal flex min-h-[218px] flex-col gap-4 rounded-[20px] border border-[#e0e6eb] bg-white p-5">
      <span className="grid size-11 place-items-center rounded-xl bg-brand-950">
        <img className={iconClass} src={asset(`platform/${icon}`)} alt="" />
      </span>
      <h3 className="text-2xl font-medium leading-7 max-[1100px]:text-xl">
        {title}
      </h3>
      <p className="text-base leading-6 text-muted">{description}</p>
    </article>
  );
}

export function ConnectedQualitySection() {
  return (
    <section
      className="py-[120px] max-[820px]:py-20"
      aria-labelledby="connected-title"
    >
      <Container>
        <div className="flex items-start justify-between gap-[150px] max-[1100px]:gap-16 max-[820px]:flex-col max-[820px]:gap-10">
          <div className="reveal max-w-[571px] flex-1">
            <p className="mb-2 text-sm font-medium uppercase leading-[22px] text-brand-700">
              Why this page exists
            </p>
            <h2
              className="text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
              id="connected-title"
            >
              From disconnected quality work to one connected operating system
            </h2>
            <p className="mt-4 text-base leading-6 text-muted">
              Quality processes are easier to control when documents, training,
              CAPAs, deviations, audits and changes are connected.
            </p>
          </div>
          <img
            className="reveal h-[226px] w-[482px] rounded-2xl object-cover max-[820px]:h-auto max-[820px]:w-full"
            src={asset("platform/connected-quality.png")}
            alt="Scientist inspecting a laboratory sample"
          />
        </div>

        <div className="mt-14 grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
          {connectedQualityCards.map((card) => (
            <ConnectedQualityCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
