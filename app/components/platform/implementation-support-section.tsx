import { Container } from "@/app/components/ui/container";
import {
  implementationServices,
  type SolutionCard,
} from "@/app/data/platform-content";
import { asset } from "@/app/lib/assets";

function SupportCard({ icon, iconClass, title, description }: SolutionCard) {
  return (
    <article className="reveal flex min-h-[276px] flex-col gap-5 rounded-[20px] border border-[#dedede] bg-[#f5f5f5] px-7 py-[30px]">
      <div className="flex flex-col gap-4">
        <span className="grid size-11 place-items-center rounded-xl bg-brand-150">
          <img className={iconClass} src={asset(`platform/${icon}`)} alt="" />
        </span>
        <h3 className="text-2xl font-medium leading-7 max-[1100px]:text-xl">
          {title}
        </h3>
      </div>
      <p className="text-base leading-6 text-muted">{description}</p>
    </article>
  );
}

export function ImplementationSupportSection() {
  return (
    <section
      className="py-[120px] max-[820px]:py-20"
      aria-labelledby="support-title"
    >
      <Container>
        <h2
          className="reveal text-center text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
          id="support-title"
        >
          Support for setup, documentation,
          <br />
          training and onboarding
        </h2>
        <div className="mt-12 grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
          {implementationServices.map((service) => (
            <SupportCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
