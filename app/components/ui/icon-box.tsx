import type { ReactNode } from "react";

export function IconBox({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`grid size-11 shrink-0 place-items-center rounded-xl ${dark ? "bg-brand-950" : "bg-brand-150"}`}
    >
      {children}
    </span>
  );
}
