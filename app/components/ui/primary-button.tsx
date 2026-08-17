import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href: string;
  small?: boolean;
};

export function PrimaryButton({
  children,
  href,
  small = false,
}: PrimaryButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full border border-transparent bg-[#00ad6c] font-medium text-white shadow-[0_10px_25px_rgba(0,173,108,0.18)] transition hover:-translate-y-0.5 hover:bg-[#00bf77] ${small ? "min-h-9 px-4 py-[7px] text-sm" : "min-h-10 px-[17px] py-[9px] text-sm"}`}
      href={href}
    >
      {children}
    </a>
  );
}
