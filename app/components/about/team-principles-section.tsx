import { Container } from "@/app/components/ui/container";
import { teamPrinciples } from "@/app/data/about-content";
import { asset } from "@/app/lib/assets";

const principleAssets = {
  expert: {
    background: "team-card-expert.png",
    icon: "team-icon-expert.svg",
    iconWidth: 116,
    iconHeight: 116,
    iconTop: 18,
    iconLeft: 18,
  },
  trust: {
    background: "team-card-trust.png",
    icon: "team-icon-trust.svg",
    iconWidth: 106,
    iconHeight: 121,
    iconTop: 21,
    iconLeft: 26,
  },
  context: {
    background: "team-card-context.png",
    icon: "team-icon-context.svg",
    iconWidth: 129,
    iconHeight: 129,
    iconTop: 11,
    iconLeft: 12,
  },
} as const;

export function TeamPrinciplesSection() {
  return (
    <section className="relative z-10 -mt-[60px] min-h-[923px] overflow-hidden rounded-t-[64px] bg-white pb-40 pt-[120px] max-[820px]:min-h-0 max-[820px]:rounded-t-[40px] max-[820px]:py-20">
      <img
        className="pointer-events-none absolute left-[-373px] top-[461px] h-[593px] w-[945px]"
        src={asset("about/team-pattern.png")}
        alt=""
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="reveal mx-auto max-w-[793px] text-center">
          <p className="text-sm leading-[22px] text-brand-700">WHO WE ARE</p>
          <h2 className="mt-4 text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9">
            A multidisciplinary team with quality, validation and technology
            roots
          </h2>
          <p className="mt-6 text-base leading-6 text-muted">
            Accura was founded and guided by people who have worked across
            regulated life sciences, software engineering, quality assurance,
            validation and laboratory operations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-5 max-[820px]:grid-cols-1">
          {teamPrinciples.map((principle) => {
            const visual = principleAssets[principle.key];
            return (
              <article
                className="reveal relative flex min-h-[381px] flex-col items-center justify-center gap-[45px] overflow-hidden rounded-3xl bg-brand-950 p-6 text-white max-[820px]:mx-auto max-[820px]:w-full max-[820px]:max-w-[520px]"
                key={principle.title}
              >
                {principle.key === "expert" ? (
                  <div className="absolute inset-0 overflow-hidden opacity-20">
                    <img
                      className="absolute left-[-132.24%] top-0 h-full w-[251.9%] max-w-none"
                      src={asset(`about/${visual.background}`)}
                      alt=""
                    />
                  </div>
                ) : (
                  <img
                    className="absolute inset-0 size-full object-cover opacity-20"
                    src={asset(`about/${visual.background}`)}
                    alt=""
                  />
                )}
                <h3 className="relative w-full text-2xl font-medium leading-7">
                  {principle.title}
                </h3>
                <span className="relative block size-[150px] shrink-0" aria-hidden="true">
                  <img
                    className="absolute max-w-none"
                    src={asset(`about/${visual.icon}`)}
                    style={{
                      width: visual.iconWidth,
                      height: visual.iconHeight,
                      left: visual.iconLeft,
                      top: visual.iconTop,
                    }}
                    alt=""
                  />
                </span>
                <p className="relative w-full border-t border-white pt-4 text-base leading-6">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
