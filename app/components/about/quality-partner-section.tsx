import { Container } from "@/app/components/ui/container";
import { asset } from "@/app/lib/assets";

export function QualityPartnerSection() {
  return (
    <section className="min-h-[543px] py-[120px] max-[820px]:min-h-0 max-[820px]:py-20">
      <Container>
        <div className="flex items-center gap-[100px] max-[1100px]:gap-12 max-[820px]:flex-col">
          <div className="reveal flex-1">
            <p className="text-sm font-medium leading-[22px] text-brand-700">
              BEYOND THE SOFTWARE
            </p>
            <h2 className="mt-2 text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9">
              A quality partner for regulated teams
            </h2>
            <p className="mt-4 text-base leading-6 text-muted">
              Software is only half the equation. We provide comprehensive
              validation templates, white-glove onboarding, and ongoing support
              from quality specialists who understand the nuances of GxP
              environments.
            </p>
          </div>

          <div className="reveal relative flex h-[303px] w-[648px] shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-brand-950 max-[1100px]:w-[54%] max-[820px]:w-full max-[560px]:h-[330px]">
            <img
              className="absolute left-0 top-[-159.5px] h-[971.2px] w-[648px] max-w-none"
              src={asset("about/partner-background.png")}
              alt="Laboratory glassware"
            />
            <div className="relative flex w-[340px] flex-col items-center gap-7 max-[560px]:w-[280px]">
              <img
                className="h-[54.987px] w-[66.619px]"
                src={asset("about/quote-mark.svg")}
                alt=""
              />
              <p className="text-5xl font-medium leading-[48px] tracking-[0.01em] text-white max-[560px]:text-[40px] max-[560px]:leading-[44px]">
                Your success
                <br /> is our success
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
