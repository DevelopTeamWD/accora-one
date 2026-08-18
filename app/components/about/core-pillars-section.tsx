import { corePillars } from "@/app/data/about-content";
import { asset } from "@/app/lib/assets";

export function CorePillarsSection() {
  return (
    <section className="min-h-[737px] px-4 pb-[60px] pt-[120px] max-[820px]:min-h-0 max-[820px]:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal mx-auto max-w-[704px] text-center">
          <p className="text-sm font-medium leading-[22px] text-brand-700">
            OUR CORE PILLARS
          </p>
          <h2 className="mx-auto mt-2 max-w-[568px] text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9">
            Principles that guide every feature we ship
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-[960px] grid-cols-2 overflow-hidden rounded-3xl border border-[#dedede] max-[820px]:grid-cols-1">
          {corePillars.map((pillar, index) => (
            <article
              className={`reveal min-h-[190px] p-6 ${
                index % 2 === 0 ? "border-r border-[#dedede]" : ""
              } ${index < 2 ? "border-b border-[#dedede]" : ""} max-[820px]:border-r-0 max-[820px]:border-b max-[820px]:last:border-b-0`}
              key={pillar.title}
            >
              <span className="relative grid size-11 place-items-center rounded-xl bg-brand-950">
                <img
                  className="max-w-none"
                  src={asset(`about/${pillar.icon}`)}
                  style={{ width: pillar.iconWidth, height: pillar.iconHeight }}
                  alt=""
                />
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-7 text-brand-950">
                {pillar.title}
              </h3>
              <p className="mt-2 text-base leading-6 text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
