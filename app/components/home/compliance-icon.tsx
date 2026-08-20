import { asset } from "@/app/lib/assets";

export type IconVariant = "part11" | "alcoa" | "audit";

type ComplianceIconProps = {
  variant: IconVariant;
};

export function ComplianceIcon({ variant }: ComplianceIconProps) {
  return (
    <svg
      className="size-16 shrink-0 overflow-visible"
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <use href={asset(`home/compliance-icons.svg#${variant}`)} />
    </svg>
  );
}
