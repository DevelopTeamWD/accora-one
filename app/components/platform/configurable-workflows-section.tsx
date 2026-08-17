import { Container } from "@/app/components/ui/container";
import { workflowFeatures } from "@/app/data/platform-content";
import { asset } from "@/app/lib/assets";

export function ConfigurableWorkflowsSection() {
  return (
    <section
      className="border-b border-[#e2e8f0] py-[120px] max-[820px]:py-20"
      aria-labelledby="workflows-title"
    >
      <Container>
        <div className="flex min-h-[612px] items-center gap-12 max-[1100px]:gap-8 max-[820px]:flex-col">
          <div className="reveal w-[590px] shrink-0 overflow-hidden rounded-3xl max-[1100px]:w-1/2 max-[820px]:w-full max-[820px]:max-w-[598px]">
            <img
              className="h-auto w-full"
              src={asset("platform/workflow-diagram.png")}
              alt="Connected quality workflow from initial process through review, audit, risk, incident and change control"
            />
          </div>

          <div className="reveal flex flex-1 flex-col justify-center">
            <h2
              className="text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
              id="workflows-title"
            >
              Configured around how
              <br />
              your organisation works
            </h2>
            <p className="mt-6 text-base leading-6 text-muted">
              Adapt the system to your standard operating procedures, not the
              other way around. Define precise approval paths, granular
              permissions, and automated escalations without writing code.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 max-[560px]:grid-cols-1">
              {workflowFeatures.map((feature) => (
                <article
                  className="flex flex-col items-start gap-1"
                  key={feature.title}
                >
                  <img
                    className={feature.iconClass}
                    src={asset(`platform/${feature.icon}`)}
                    alt=""
                  />
                  <h3 className="pt-1 text-xl font-semibold leading-7 text-[#454545] xl:whitespace-nowrap">
                    {feature.title}
                  </h3>
                  <span className="h-px w-8 bg-brand-700" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
