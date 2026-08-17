import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1443px] px-[120px] max-[1100px]:px-12 max-[820px]:px-4 ${className}`}
    >
      {children}
    </div>
  );
}
