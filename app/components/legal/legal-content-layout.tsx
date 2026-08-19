import type { ReactNode } from "react";

type LegalContentLayoutProps = {
  children: ReactNode;
};

export function LegalContentLayout({ children }: LegalContentLayoutProps) {
  return (
    <section className="relative z-10 -mt-[60px] min-h-[1642px] rounded-t-[64px] bg-white px-4 py-[120px] max-[820px]:min-h-0 max-[820px]:rounded-t-[40px] max-[820px]:py-20">
      <article className="reveal mx-auto max-w-[840px] text-base leading-6 text-black">
        {children}
      </article>
    </section>
  );
}
