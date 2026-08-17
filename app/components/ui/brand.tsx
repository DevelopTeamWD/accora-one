import { asset } from "@/app/lib/assets";
import Link from "next/link";

export function Brand({ footer = false }: { footer?: boolean }) {
  const variant = footer ? "green" : "white";

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
}
