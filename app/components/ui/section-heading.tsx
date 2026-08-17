import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker?: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  kicker,
  children,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`reveal mx-auto mb-14 w-full max-w-[720px] text-center max-[560px]:mb-10 ${className}`}
    >
      {kicker ? (
        <p
          className={`mb-2 text-sm font-semibold uppercase leading-[22px] ${light ? "text-brand-50" : "text-brand-700"}`}
        >
          {kicker}
        </p>
      ) : null}
      <h2 className="text-[40px] font-medium leading-[1.1] max-[820px]:text-4xl max-[560px]:text-[32px] max-[560px]:leading-9">
        {children}
      </h2>
    </div>
  );
}
