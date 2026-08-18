import { asset } from "@/app/lib/assets";
import Link from "next/link";

type BrandProps = {
  footer?: boolean;
  tone?: "light" | "dark";
};

export function Brand({ footer = false, tone = "light" }: BrandProps) {
  const variant = footer || tone === "dark" ? "green" : "white";

  console.log("Brand", variant, tone);

  if (footer) {
    return (
      <Link
        className={`inline-flex items-center gap-[7px] ${footer ? "" : "relative z-10"}`}
        href="/"
        aria-label="Accura One home"
      >
        <img
          className={
            footer
              ? "h-[45.185px] w-[40.288px]"
              : "h-10 w-[35px] max-[560px]:h-[35px] max-[560px]:w-[30px]"
          }
          src={asset(`logo-mark-${variant}.svg`)}
          alt=""
        />
        <img
          className={
            footer
              ? "h-[19.124px] w-[105.328px]"
              : "h-[18px] w-[92px] max-[560px]:w-[82px]"
          }
          src={asset(`logo-word-${variant}.svg`)}
          alt="Accura"
        />
      </Link>
    );
  } else {
    return (
      <Link
        className={`inline-flex items-center gap-[7px] relative z-10`}
        href="/"
        aria-label="Accura One home"
      >
        <img className={""} src={asset(`Logo-${variant}.svg`)} alt="" />
      </Link>
    );
  }
}
