import { Container } from "@/app/components/ui/container";
import { purposeCards } from "@/app/data/about-content";
import { asset } from "@/app/lib/assets";

export function PurposeSection() {
  return (
    <section className="relative min-h-[622px] overflow-hidden rounded-[64px] bg-brand-950 py-20 text-white max-[820px]:min-h-0 max-[820px]:rounded-[40px]">
      <img
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-10 mix-blend-hard-light"
        src={asset("about/purpose-background.png")}
        alt=""
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="reveal text-center">
          <p className="text-sm font-medium leading-[22px] text-[#d4f7e8]">
            PURPOSE IN ACTION, VISION IN FOCUS
          </p>
          <h2 className="mt-2 text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9">
            Why Accura exists
          </h2>
          <p className="mx-auto mt-4 max-w-[790px] text-base leading-6 text-[#dbf0eb]">
            We help regulated teams make quality work easier to operate, easier
            to explain and easier to trust.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[952px] grid-cols-2 gap-8 max-[820px]:grid-cols-1">
          {purposeCards.map((card) => (
            <article
              className="reveal flex min-h-[288px] flex-col gap-4 rounded-[20px] bg-white/10 p-6"
              key={card.title}
            >
              <div className="flex min-h-[84px] flex-col justify-center gap-4">
                <span className="relative block size-11" aria-hidden="true">
                  <img
                    className="absolute left-[2.75px] top-[2.75px] h-[38.5px] max-w-none"
                    src={asset(`about/${card.icon}`)}
                    style={{ width: card.iconWidth }}
                    alt=""
                  />
                </span>
                <h3 className="text-lg font-semibold leading-6">
                  {card.title}
                </h3>
              </div>
              <p className="text-base leading-6 text-[#dedede]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
