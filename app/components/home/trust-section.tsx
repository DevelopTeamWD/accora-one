import { trustStandards } from "@/app/data/home-content";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8 25.6C19.8692 25.6 25.6 19.8692 25.6 12.8C25.6 5.73075 19.8692 0 12.8 0C5.73075 0 0 5.73075 0 12.8C0 19.8692 5.73075 25.6 12.8 25.6ZM18.9705 9.90581C19.3603 9.36982 19.2418 8.61932 18.7058 8.22952C18.1698 7.83971 17.4193 7.95821 17.0295 8.49419L11.4555 16.1585L8.44853 13.1515C7.9799 12.6828 7.2201 12.6828 6.75147 13.1515C6.28284 13.6201 6.28284 14.3799 6.75147 14.8485L10.7515 18.8485C10.9996 19.0967 11.344 19.2238 11.6939 19.1963C12.0437 19.1689 12.3641 18.9896 12.5705 18.7058L18.9705 9.90581Z"
        fill="#00995E"
      />
    </svg>
  );
}

export function TrustSection() {
  return (
    <section
      className="grid min-h-[332px] place-items-center py-[94px] max-[820px]:py-[74px]"
      aria-labelledby="trust-title"
    >
      <div className="mx-auto w-full max-w-[1026px] px-6 max-[820px]:px-4">
        <h2
          className="mb-6 text-center text-base font-medium uppercase text-[#454545]"
          id="trust-title"
        >
          Designed to support regulated quality environments
        </h2>
        <div className="grid grid-cols-4 gap-2 max-[820px]:grid-cols-2 max-[560px]:grid-cols-1">
          {trustStandards.map((label) => (
            <div
              className="flex min-h-[90px] flex-col items-center justify-center gap-[13px] rounded-[7px] bg-[#f3f3f3] p-4 text-center text-sm text-[#414141] max-[560px]:min-h-[72px] max-[560px]:flex-row max-[560px]:justify-start max-[560px]:text-left"
              key={label}
            >
              <span className="grid size-6 place-items-center">
                <CheckIcon />
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
