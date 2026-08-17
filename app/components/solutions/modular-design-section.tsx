import { Container } from "@/app/components/ui/container";
import { moduleGroups, type ModuleGroup } from "@/app/data/solutions-content";
import { asset } from "@/app/lib/assets";

function ModuleColumn({ icon, iconClass, title, modules }: ModuleGroup) {
  return (
    <div className="reveal flex flex-col gap-6">
      <div className="flex h-9 items-center">
        <img className={iconClass} src={asset(`solutions/${icon}`)} alt="" />
        <h3 className="text-2xl font-medium leading-7">{title}</h3>
      </div>
      <div className="grid gap-4">
        {modules.map((module) => (
          <article
            className="min-h-[128px] rounded-xl bg-white/10 p-6 backdrop-blur-[2px]"
            key={module.title}
          >
            <h4 className="text-xl font-semibold leading-7">{module.title}</h4>
            <p className="mt-2 text-sm leading-[22px] text-[#dedede]">
              {module.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ModularDesignSection() {
  return (
    <section
      className="relative min-h-[996px] overflow-hidden rounded-[64px] px-0 py-[84px] text-white max-[820px]:rounded-[40px] max-[820px]:py-20"
      id="modules"
      aria-labelledby="modules-title"
    >
      <img
        className="pointer-events-none absolute inset-0 size-full object-cover"
        src={asset("solutions/modular-background.png")}
        alt=""
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(249deg,rgba(15,23,42,0.8),rgba(0,57,63,0.8)_27%,rgba(15,23,42,0.8))]"
        aria-hidden="true"
      />

      <Container className="relative z-[1]">
        <div className="reveal mx-auto max-w-[779px] text-center">
          <p className="mb-2 text-sm font-medium uppercase leading-[22px] text-brand-50">
            Modular by design
          </p>
          <h2
            className="text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
            id="modules-title"
          >
            Start with core modules.
            <br />
            Add optional capabilities when needed
          </h2>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1000px] grid-cols-2 gap-8 max-[820px]:grid-cols-1">
          {moduleGroups.map((group) => (
            <ModuleColumn key={group.title} {...group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
