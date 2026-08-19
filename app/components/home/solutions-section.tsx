import { Container } from "@/app/components/ui/container";
import { IconBox } from "@/app/components/ui/icon-box";
import { SectionHeading } from "@/app/components/ui/section-heading";
import {
  modules,
  pillars,
  type ModuleItem,
  type PillarItem,
} from "@/app/data/home-content";
import { asset } from "@/app/lib/assets";

function PillarCard({ icon, iconClass, title, description }: PillarItem) {
  return (
    <article className="reveal">
      <IconBox dark>
        <img className={iconClass} src={asset(icon)} alt="" />
      </IconBox>
      <h3 className="mb-1.5 mt-2.5 text-xl font-semibold leading-7 text-brand-950">
        {title}
      </h3>
      <p className="text-base leading-6 text-muted">{description}</p>
    </article>
  );
}

function PillarColumn({ items }: { items: PillarItem[] }) {
  return (
    <div className="grid gap-[50px] max-[820px]:row-start-2 max-[560px]:row-auto">
      {items.map((item) => (
        <PillarCard key={item.title} {...item} />
      ))}
    </div>
  );
}

function ModuleCard({ icon, iconClass, title, description }: ModuleItem) {
  return (
    <article className="reveal flex min-h-[248px] flex-col gap-5 rounded-[20px] border border-brand-150 bg-white px-7 py-[30px] transition duration-200 hover:-translate-y-1 hover:border-brand-700 hover:shadow-[0_16px_32px_rgba(0,57,63,0.09)] max-[560px]:min-h-[230px]">
      <div className="flex items-center gap-4">
        <IconBox>
          <img className={iconClass} src={asset(icon)} alt="" />
        </IconBox>
        <h3 className="text-2xl font-medium leading-7 text-brand-950 max-[1100px]:text-xl">
          {title}
        </h3>
      </div>
      <p className="flex-1 text-base leading-6 text-muted">{description}</p>
      <a
        className="inline-flex items-center gap-1.5 self-start text-base font-medium"
        href="/contact"
      >
        Learn More
        <img
          className="size-3 rotate-[-90deg] px-[2.4px] py-[1.8px]"
          src={asset("module-arrow.svg")}
          alt=""
        />
      </a>
    </article>
  );
}

export function SolutionsSection() {
  return (
    <section
      className="min-h-[1572px] bg-[linear-gradient(to_bottom,#fff_0%,#f0faf4_20%,#ecf9f2_50%,#f0faf4_80%,#fff_100%)] pb-24 pt-[120px] max-[820px]:pt-[90px]"
      id="solutions"
      aria-labelledby="pillars-title"
    >
      <Container>
        <SectionHeading kicker="Our core pillars">
          <span id="pillars-title">
            One connected CAPA workflow.
            <br />
            Every decision traceable.
          </span>
        </SectionHeading>
        <div className="mb-[122px] grid grid-cols-[276px_minmax(420px,1fr)_278px] items-center gap-8 max-[1100px]:grid-cols-[1fr_1.4fr_1fr] max-[1100px]:gap-[22px] max-[820px]:grid-cols-2 max-[560px]:mb-20 max-[560px]:grid-cols-1">
          <PillarColumn items={pillars.slice(0, 2)} />
          <div className="reveal grid min-h-[326px] place-items-center rounded-[20px] border border-white bg-[linear-gradient(145deg,rgba(255,255,255,0.75),rgba(181,229,209,0.45))] p-[13px] shadow-[0_8px_18px_rgba(0,57,63,0.12)] max-[820px]:col-span-2 max-[820px]:row-start-1 max-[820px]:mx-auto max-[820px]:max-w-[600px] max-[560px]:col-span-1 max-[560px]:min-h-[210px]">
            <img
              className="w-full rounded-xl"
              src={asset("dashboard-product.png")}
              alt="Accura quality management dashboard"
            />
          </div>
          <PillarColumn items={pillars.slice(2)} />
        </div>

        <div aria-labelledby="modules-title">
          <h2
            className="mb-14 text-center text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
            id="modules-title"
          >
            One platform, connected modules
          </h2>
          <div className="grid grid-cols-3 gap-5 max-[820px]:grid-cols-2 max-[560px]:grid-cols-1">
            {modules.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
