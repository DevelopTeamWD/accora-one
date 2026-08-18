import { Container } from "@/app/components/ui/container";
import { alcoaPrinciples } from "@/app/data/compliance-content";
import { asset } from "@/app/lib/assets";

function DotMatrixIcon({
  pattern,
  accent,
}: {
  pattern: readonly string[];
  accent?: boolean;
}) {
  return (
    <span className="relative block size-10 shrink-0" aria-hidden="true">
      {pattern.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "#" ? (
            <img
              className="absolute size-[2.7px] max-w-none"
              src={asset("compliance/alcoa-dot.svg")}
              style={{ left: 2.65 + x * 4, top: 2.65 + y * 4 }}
              alt=""
              key={`${x}-${y}`}
            />
          ) : null,
        ),
      )}
      {accent ? (
        <img
          className="absolute left-[18.45px] top-[18.45px] size-[3.1px] max-w-none"
          src={asset("compliance/alcoa-dot-accent.svg")}
          alt=""
        />
      ) : null}
    </span>
  );
}

export function DataIntegritySection() {
  return (
    <section className="bg-[linear-gradient(180deg,#fff_0%,#e6f7ee_50%,#fff_100%)] py-20" aria-labelledby="alcoa-title">
      <Container>
        <div className="reveal mx-auto max-w-[692px] text-center">
          <p className="text-sm leading-[22px] text-brand-700">
            DATA INTEGRITY BY DESIGN
          </p>
          <h2
            className="mt-4 text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
            id="alcoa-title"
          >
            Support ALCOA+ principles across quality records
          </h2>
          <p className="mt-4 text-base leading-6 text-muted">
            Trusted data is the foundation of regulated quality management. We
            help quality records remain reliable, complete and traceable
            throughout their lifecycle.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[934px] grid-cols-2 gap-4 max-[820px]:grid-cols-1">
          {alcoaPrinciples.map((principle) => (
            <article
              className="reveal flex min-h-[152px] gap-5 rounded-[20px] border border-[#dedede] bg-white px-7 py-[30px]"
              key={principle.title}
            >
              <DotMatrixIcon
                pattern={principle.pattern}
                accent={"accent" in principle ? principle.accent : false}
              />
              <div>
                <h3 className="text-2xl font-medium leading-7 text-[#151a21] max-[560px]:text-xl">
                  {principle.title}
                </h3>
                <p className="mt-4 text-base leading-6 text-[#525252]">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
