import type { CSSProperties } from "react";
import { Container } from "@/app/components/ui/container";
import { complianceCoverage } from "@/app/data/compliance-content";
import { asset } from "@/app/lib/assets";

const iconAssets = {
  records: {
    masks: [asset("compliance/coverage-records-mask.svg")],
    image: asset("compliance/coverage-records.svg"),
    leafWidth: 159.535,
    leafHeight: 145.454,
    left: 0,
    top: 0,
  },
  integrity: {
    masks: [asset("compliance/coverage-integrity-mask.svg")],
    image: asset("compliance/coverage-integrity.svg"),
    leafWidth: 159.715,
    leafHeight: 145.455,
    left: 0,
    top: 0,
  },
  validation: {
    masks: [
      asset("compliance/coverage-validation-mask-a.svg"),
      asset("compliance/coverage-validation-mask-b.svg"),
    ],
    image: asset("compliance/coverage-validation.svg"),
    leafWidth: 160.031,
    leafHeight: 145.482,
    left: -0.027,
    top: -0.023,
  },
} as const;

function CoverageIcon({ type }: { type: keyof typeof iconAssets }) {
  const icon = iconAssets[type];
  const maskImage = icon.masks
    .map((mask) => `url("${mask}")`)
    .join(", ");
  const style = {
    WebkitMaskImage: maskImage,
    maskImage,
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "160px 145.455px",
    maskSize: "160px 145.455px",
  } as CSSProperties;

  return (
    <div className="relative h-[145.455px] w-40 shrink-0 overflow-hidden">
      <div
        className="absolute"
        style={{
          ...style,
          left: icon.left,
          top: icon.top,
          width: icon.leafWidth,
          height: icon.leafHeight,
        }}
      >
        <img
          className="max-w-none"
          style={{ width: icon.leafWidth, height: icon.leafHeight }}
          src={icon.image}
          alt=""
        />
      </div>
    </div>
  );
}

export function CoverageSection() {
  return (
    <section className="relative z-10 -mt-[60px] min-h-[818px] overflow-hidden rounded-t-[64px] text-white max-[820px]:min-h-0 max-[820px]:rounded-t-[40px]">
      <img
        className="pointer-events-none absolute inset-0 size-full object-cover"
        src={asset("compliance/coverage-background.png")}
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(245deg,rgba(15,23,42,0.94),rgba(0,57,63,0.94)_27%,rgba(15,23,42,0.94))]" />

      <Container className="relative py-[84px] max-[820px]:py-20">
        <div className="reveal mx-auto max-w-[779px] text-center">
          <p className="text-sm font-medium leading-[22px] text-brand-700">
            WHAT THIS PAGE COVERS
          </p>
          <h2 className="mx-auto mt-2 max-w-[638px] text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9">
            A deeper compliance layer beneath the platform
          </h2>
          <p className="mt-4 text-base leading-6 text-[#dedede]">
            The platform page explains Accura modules and implementation. This
            page focuses on the compliance controls, validation support and
            evidence quality teams need to operate with confidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-5 max-[820px]:grid-cols-1">
          {complianceCoverage.map((item) => (
            <article
              className="reveal flex min-h-[348px] flex-col gap-6 rounded-3xl bg-white/10 p-6 backdrop-blur-[2px] max-[820px]:mx-auto max-[820px]:w-full max-[820px]:max-w-[520px] max-[560px]:min-h-0"
              key={item.title}
            >
              <CoverageIcon type={item.key} />
              <div>
                <h3 className="text-2xl font-medium leading-7">{item.title}</h3>
                <p className="mt-4 text-base leading-6 text-[#dedede]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
