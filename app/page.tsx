"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const asset = (name: string) => `/assets/${name}`;

type ModuleItem = {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
};

type ComplianceItem = {
  visualClass: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

type IndustryItem = {
  cardClass: string;
  icon: string;
  iconClass: string;
  title: ReactNode;
};

const modules: ModuleItem[] = [
  {
    icon: "module-document.svg",
    iconClass: "h-[19px] w-[15px]",
    title: "Document Control",
    description:
      "Create, review, approve and distribute controlled documents with version history and electronic signatures.",
  },
  {
    icon: "module-training.svg",
    iconClass: "h-[16.269px] w-[19.923px]",
    title: "Training Management",
    description:
      "Automate role-based training assignments and competency assessments.",
  },
  {
    icon: "module-capa.svg",
    iconClass: "h-[17.5px] w-[20.269px]",
    title: "Quality Events (CAPA)",
    description:
      "Investigate deviations and manage corrective actions seamlessly.",
  },
  {
    icon: "module-supplier.svg",
    iconClass: "size-[19px]",
    title: "Supplier Quality",
    description:
      "Qualify and monitor suppliers with integrated scorecards and audits.",
  },
  {
    icon: "module-audit.svg",
    iconClass: "h-[17px] w-[19px]",
    title: "Audit Management",
    description:
      "Plan, execute, and report on internal and external audits efficiently.",
  },
  {
    icon: "module-change.svg",
    iconClass: "h-[17px] w-[17.045px]",
    title: "Change Control",
    description:
      "Evaluate and manage changes to processes, equipment, and systems.",
  },
];

const complianceCards: ComplianceItem[] = [
  {
    visualClass: "bg-gradient-to-b from-[#f6fefb] from-[35%] to-[#c9e8de]",
    image: "compliance-part11.png",
    alt: "Part 11 electronic signature audit interface",
    title: "FDA 21 CFR Part 11 & EU Annex 11",
    description:
      "Native electronic signatures, password authentication, and comprehensive version control.",
  },
  {
    visualClass: "bg-gradient-to-b from-[#fdfaf7] from-[35%] to-[#f9efe2]",
    image: "compliance-alcoa.png",
    alt: "Controlled document detail interface",
    title: "ALCOA & Principles",
    description:
      "Data integrity ensured: Attributable, Legible, Contemporaneous, Original, and Accurate.",
  },
  {
    visualClass: "bg-gradient-to-b from-[#f6f8fd] from-[35%] to-[#e4eafa]",
    image: "compliance-audit.png",
    alt: "Automated audit trail interface",
    title: "Automated Audit Trails",
    description:
      "Every action is immutably logged with timestamp, user ID, and detailed event descriptions.",
  },
];

const industries: IndustryItem[] = [
  {
    cardClass: "bg-brand-25",
    icon: "industry-biotech.svg",
    iconClass: "h-[27.779px] w-[19.673px]",
    title: (
      <>
        Biotechnology &<br />
        Biopharma
      </>
    ),
  },
  {
    cardClass: "bg-[#e3f5fc]",
    icon: "industry-medical.svg",
    iconClass: "h-[27.75px] w-[28.5px]",
    title: "Medical Devices",
  },
  {
    cardClass: "bg-[#e4eafa]",
    icon: "industry-pharma.svg",
    iconClass: "h-[25.327px] w-[19.5px]",
    title: "Pharmaceuticals",
  },
  {
    cardClass: "bg-[#f9efe2]",
    icon: "industry-lab.svg",
    iconClass: "h-[29.625px] w-[27.75px]",
    title: "Laboratories",
  },
];

function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1443px] px-[120px] max-[1100px]:px-12 max-[820px]:px-4 ${className}`}
    >
      {children}
    </div>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  const variant = footer ? "green" : "white";

  return (
    <a
      className={`inline-flex items-center gap-[7px] ${footer ? "" : "relative z-10"}`}
      href="#top"
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
    </a>
  );
}

function SectionHeading({
  kicker,
  children,
  light = false,
  className = "",
}: {
  kicker?: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
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

function PrimaryButton({
  children,
  href,
  small = false,
}: {
  children: ReactNode;
  href: string;
  small?: boolean;
}) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full border border-transparent bg-[#00ad6c] font-medium text-white shadow-[0_10px_25px_rgba(0,173,108,0.18)] transition hover:-translate-y-0.5 hover:bg-[#00bf77] ${small ? "min-h-9 px-4 py-[7px] text-sm" : "min-h-10 px-[17px] py-[9px] text-sm"}`}
      href={href}
    >
      {children}
    </a>
  );
}

function IconBox({
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

function FooterPattern() {
  return (
    <img
      className="pointer-events-none absolute left-1/2 top-0 h-full w-full object-cover max-w-none -translate-x-1/2 opacity-80 mix-blend-plus-lighter"
      src={asset("pattern.png")}
      alt=""
      aria-hidden="true"
    />
  );
}

function ModuleCard({ icon, iconClass, title, description }: ModuleItem) {
  return (
    <article className="reveal flex min-h-[248px] flex-col gap-5 rounded-[20px] border border-brand-150 bg-white px-7 py-[30px] transition duration-200 hover:-translate-y-1 hover:border-brand-700 hover:shadow-[0_16px_32px_rgba(0,57,63,0.09)] max-[560px]:min-h-[230px]">
      <div className="flex items-center gap-4">
        <IconBox>
          <img className={iconClass} src={asset(icon)} alt="" />
        </IconBox>
        <h3 className="text-2xl font-medium leading-7 text-brand-950 max-[1100px]:text-xl">
          {title}
        </h3>
      </div>
      <p className="flex-1 text-base leading-6 text-muted">{description}</p>
      <a
        className="inline-flex items-center gap-1.5 self-start text-base font-medium"
        href="#contact"
      >
        Learn More
        <img
          className="size-3 rotate-[-90deg] px-[2.4px] py-[1.8px]"
          src={asset("module-arrow.svg")}
          alt=""
        />
      </a>
    </article>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeDesktopMenu = () => {
      if (window.innerWidth > 820) setMenuOpen(false);
    };
    window.addEventListener("resize", closeDesktopMenu);
    return () => window.removeEventListener("resize", closeDesktopMenu);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className="relative h-[878px] overflow-hidden rounded-b-[64px] bg-brand-950 text-white max-[820px]:h-[820px] max-[820px]:rounded-b-[40px] max-[560px]:h-[790px]"
        id="top"
      >
        <img
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover object-center"
          src={asset("hero-background.png")}
          alt=""
          aria-hidden="true"
        />
        <Shell className="relative z-10 flex h-[78px] items-center justify-between">
          <Brand />

          <div
            className={`flex flex-1 items-center justify-center gap-40 max-[1100px]:gap-[70px] max-[820px]:fixed max-[820px]:inset-0 max-[820px]:flex-col max-[820px]:justify-center max-[820px]:gap-[38px] max-[820px]:bg-brand-950/98 max-[820px]:px-6 max-[820px]:pb-10 max-[820px]:pt-[90px] max-[820px]:transition-opacity ${menuOpen ? "max-[820px]:z-10 max-[820px]:opacity-100" : "max-[820px]:pointer-events-none max-[820px]:-z-10 max-[820px]:opacity-0"}`}
            id="nav-menu"
          >
            <div className="flex items-center gap-10 max-[820px]:flex-col max-[820px]:gap-[26px]">
              <a
                className="border-b border-brand-700 py-[5px] font-medium text-brand-700 max-[820px]:text-[28px]"
                href="#solutions"
                onClick={closeMenu}
              >
                Solutions
              </a>
              <a
                className="border-b border-transparent py-[5px] font-medium transition hover:border-brand-700 hover:text-brand-700 max-[820px]:text-[28px]"
                href="#compliance"
                onClick={closeMenu}
              >
                Compliance
              </a>
              <a
                className="border-b border-transparent py-[5px] font-medium transition hover:border-brand-700 hover:text-brand-700 max-[820px]:text-[28px]"
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <span onClick={closeMenu}>
              <PrimaryButton href="#contact" small>
                Book a Consultation
              </PrimaryButton>
            </span>
            <button
              className="relative z-20 hidden size-[42px] rounded-full border border-white/40 bg-transparent p-[9px] max-[820px]:block"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span
                className={`my-[5px] block h-px w-full bg-white transition ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`my-[5px] block h-px w-full bg-white transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`my-[5px] block h-px w-full bg-white transition ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </Shell>

        <div className="reveal relative z-[2] mx-auto mt-16 w-[min(calc(100%_-_40px),610px)] text-center max-[820px]:mt-[52px] max-[560px]:mt-9">
          <p className="mb-[19px] inline-flex rounded-full bg-brand-150 px-4 py-0.5 text-base font-medium leading-6 text-[#2b2b2b] max-[560px]:text-[13px] max-[560px]:leading-5">
            Cloud-Native eQMS for Life Sciences
          </p>
          <h1 className="flex flex-col text-5xl leading-[1.42] tracking-[0.02em] max-[820px]:gap-1 max-[820px]:text-[clamp(38px,10vw,48px)] max-[820px]:leading-[1.16] max-[560px]:text-[38px]">
            <strong className="font-bold">Quality Management</strong>
            <span className="font-normal text-brand-50">Made Simple.</span>
          </h1>
          <p className="mx-auto mb-[18px] mt-[13px] max-w-[603px] text-lg leading-7 max-[560px]:text-base max-[560px]:leading-6">
            Streamline documents, training, and CAPAs in a unified, modern
            platform built specifically for the rigor of Life Sciences.
          </p>
          <div className="flex items-center justify-center gap-5 max-[560px]:flex-col max-[560px]:gap-2.5">
            <span className="max-[560px]:w-[210px]">
              <PrimaryButton href="#contact">Book a Consultation</PrimaryButton>
            </span>
            <a
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white px-[17px] py-[9px] text-sm font-medium transition hover:-translate-y-0.5 hover:bg-white/10 max-[560px]:w-[210px]"
              href="#solutions"
            >
              Explore Platform
              <img
                className="size-4 rotate-[-90deg] px-[3.2px] py-[2.4px]"
                src={asset("arrow-white.svg")}
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="reveal absolute left-1/2 top-[511px] z-[3] h-[510px] w-[min(calc(100%_-_80px),925px)] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/90 bg-[linear-gradient(140deg,rgba(255,255,255,0.38),rgba(170,170,170,0.2))] p-3 shadow-[0_30px_80px_rgba(0,25,29,0.35)] max-[820px]:top-[545px] max-[820px]:h-[360px] max-[820px]:w-[calc(100%_-_32px)] max-[820px]:rounded-[18px] max-[820px]:p-2 max-[560px]:top-[585px] max-[560px]:h-[260px]">
          <img
            className="h-auto w-full rounded-2xl"
            src={asset("hero-product.png")}
            alt="Accura document control interface"
          />
          <div
            className="absolute inset-x-3 bottom-0 top-[42%] rounded-b-2xl bg-gradient-to-b from-transparent to-[rgba(245,245,245,0.98)] max-[820px]:inset-x-2"
            aria-hidden="true"
          />
        </div>
      </header>

      <main>
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
              {[
                "FDA 21 CFR Part 11",
                "GAMP 5 / CSA",
                "ISO 13485",
                "ALCOA & Data Integrity",
              ].map((label) => (
                <div
                  className="flex min-h-[90px] flex-col items-center justify-center gap-[13px] rounded-[7px] bg-[#f3f3f3] p-4 text-center text-sm text-[#414141] max-[560px]:min-h-[72px] max-[560px]:flex-row max-[560px]:justify-start max-[560px]:text-left"
                  key={label}
                >
                  <span className="grid size-6 place-items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8 25.6C19.8692 25.6 25.6 19.8692 25.6 12.8C25.6 5.73075 19.8692 0 12.8 0C5.73075 0 0 5.73075 0 12.8C0 19.8692 5.73075 25.6 12.8 25.6ZM18.9705 9.90581C19.3603 9.36982 19.2418 8.61932 18.7058 8.22952C18.1698 7.83971 17.4193 7.95821 17.0295 8.49419L11.4555 16.1585L8.44853 13.1515C7.9799 12.6828 7.2201 12.6828 6.75147 13.1515C6.28284 13.6201 6.28284 14.3799 6.75147 14.8485L10.7515 18.8485C10.9996 19.0967 11.344 19.2238 11.6939 19.1963C12.0437 19.1689 12.3641 18.9896 12.5705 18.7058L18.9705 9.90581Z"
                        fill="#00995E"
                      />
                    </svg>
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="min-h-[638px] pb-[120px] pt-[60px] max-[820px]:pb-[76px]"
          id="about"
          aria-labelledby="why-title"
        >
          <Shell>
            <SectionHeading kicker="Why change">
              <span id="why-title">
                Move from disconnected quality work
                <br className="max-[560px]:hidden" />
                to one traceable operating system.
              </span>
            </SectionHeading>
            <div className="grid grid-cols-2 gap-5 max-[820px]:grid-cols-1">
              <article className="reveal min-h-[294px] rounded-3xl bg-[#f5f5f5] p-10 max-[560px]:min-h-0 max-[560px]:px-[22px] max-[560px]:py-7">
                <h3 className="mb-8 text-2xl font-medium leading-7">
                  Traditional Reality
                </h3>
                <ul className="grid list-none gap-4 p-0">
                  {[
                    "Paper-based approvals delaying time-to-market.",
                    "Fragmented files scattered across disjointed systems.",
                    "Stressful, manual audit preparation.",
                    "Prone to error manual spreadsheets tracking training.",
                  ].map((item) => (
                    <li
                      className="flex items-center gap-2 text-base leading-6 text-muted max-[560px]:items-start max-[560px]:text-[15px]"
                      key={item}
                    >
                      <img
                        className="size-5 shrink-0 p-0.5"
                        src={asset("status-negative.svg")}
                        alt=""
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="reveal min-h-[294px] rounded-3xl bg-brand-950 p-10 text-white max-[560px]:min-h-0 max-[560px]:px-[22px] max-[560px]:py-7">
                <h3 className="mb-8 text-2xl font-medium leading-7">
                  With Accura
                </h3>
                <ul className="grid list-none gap-4 p-0">
                  {[
                    "Instant Part 11 compliant e-signatures.",
                    "A unified single source of truth for all QMS data.",
                    "Real-time, comprehensive audit trails.",
                    "Automated workflows ensuring constant compliance.",
                  ].map((item) => (
                    <li
                      className="flex items-center gap-2 text-base leading-6 max-[560px]:items-start max-[560px]:text-[15px]"
                      key={item}
                    >
                      <img
                        className="size-5 shrink-0 p-[1.875px]"
                        src={asset("status-positive.svg")}
                        alt=""
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Shell>
        </section>

        <section
          className="min-h-[1572px] bg-[linear-gradient(to_bottom,#fff_0%,#f0faf4_20%,#ecf9f2_50%,#f0faf4_80%,#fff_100%)] pb-24 pt-[120px] max-[820px]:pt-[90px]"
          id="solutions"
          aria-labelledby="pillars-title"
        >
          <Shell>
            <SectionHeading kicker="Our core pillars">
              <span id="pillars-title">
                One connected CAPA workflow.
                <br />
                Every decision traceable.
              </span>
            </SectionHeading>
            <div className="mb-[122px] grid grid-cols-[276px_minmax(420px,1fr)_278px] items-center gap-8 max-[1100px]:grid-cols-[1fr_1.4fr_1fr] max-[1100px]:gap-[22px] max-[820px]:grid-cols-2 max-[560px]:mb-20 max-[560px]:grid-cols-1">
              <div className="grid gap-[50px] max-[820px]:row-start-2 max-[560px]:row-auto">
                <article className="reveal">
                  <IconBox dark>
                    <img
                      className="h-[23.027px] w-[23.02px]"
                      src={asset("pillar-fast.svg")}
                      alt=""
                    />
                  </IconBox>
                  <h3 className="mb-1.5 mt-2.5 text-xl font-semibold leading-7 text-brand-950">
                    Fast to Implement
                  </h3>
                  <p className="text-base leading-6 text-muted">
                    Pre-configured workflows mean you are up and running in
                    weeks, not months.
                  </p>
                </article>
                <article className="reveal">
                  <IconBox dark>
                    <img
                      className="h-[24.519px] w-[20.418px]"
                      src={asset("pillar-intuitive.svg")}
                      alt=""
                    />
                  </IconBox>
                  <h3 className="mb-1.5 mt-2.5 text-xl font-semibold leading-7 text-brand-950">
                    Intuitive
                  </h3>
                  <p className="text-base leading-6 text-muted">
                    A consumer-grade user experience that requires near-zero
                    training for end-users.
                  </p>
                </article>
              </div>
              <div className="reveal grid min-h-[326px] place-items-center rounded-[20px] border border-white bg-[linear-gradient(145deg,rgba(255,255,255,0.75),rgba(181,229,209,0.45))] p-[13px] shadow-[0_8px_18px_rgba(0,57,63,0.12)] max-[820px]:col-span-2 max-[820px]:row-start-1 max-[820px]:mx-auto max-[820px]:max-w-[600px] max-[560px]:col-span-1 max-[560px]:min-h-[210px]">
                <img
                  className="w-full rounded-xl"
                  src={asset("dashboard-product.png")}
                  alt="Accura quality management dashboard"
                />
              </div>
              <div className="grid gap-[50px] max-[820px]:row-start-2 max-[560px]:row-auto">
                <article className="reveal">
                  <IconBox dark>
                    <img
                      className="h-[23.678px] w-[18.75px]"
                      src={asset("pillar-compliant.svg")}
                      alt=""
                    />
                  </IconBox>
                  <h3 className="mb-1.5 mt-2.5 text-xl font-semibold leading-7 text-brand-950">
                    Compliant at the Core
                  </h3>
                  <p className="text-base leading-6 text-muted">
                    Built to automatically meet FDA 21 CFR Part 11 and EU Annex
                    11 requirements.
                  </p>
                </article>
                <article className="reveal">
                  <IconBox dark>
                    <img
                      className="h-[23.606px] w-[22.788px]"
                      src={asset("pillar-modular.svg")}
                      alt=""
                    />
                  </IconBox>
                  <h3 className="mb-1.5 mt-2.5 text-xl font-semibold leading-7 text-brand-950">
                    Modular & Scalable
                  </h3>
                  <p className="text-base leading-6 text-muted">
                    Start with what you need, seamlessly add modules as your
                    organization grows.
                  </p>
                </article>
              </div>
            </div>

            <div aria-labelledby="modules-title">
              <h2
                className="mb-14 text-center text-[40px] font-medium leading-[44px] max-[560px]:text-[32px] max-[560px]:leading-9"
                id="modules-title"
              >
                One platform, connected modules
              </h2>
              <div className="grid grid-cols-3 gap-5 max-[820px]:grid-cols-2 max-[560px]:grid-cols-1">
                {modules.map((module) => (
                  <ModuleCard key={module.title} {...module} />
                ))}
              </div>
            </div>
          </Shell>
        </section>

        <section
          className="relative min-h-[814px] overflow-hidden rounded-[64px] bg-brand-950 py-[120px] text-white max-[820px]:rounded-[40px] max-[560px]:py-20"
          id="compliance"
          aria-labelledby="compliance-title"
        >
          <div
            className="absolute bottom-0 right-0 opacity-[0.05]"
            aria-hidden="true"
          >
            <img src={asset("/a.png")} alt="" />
          </div>
          <Shell>
            <SectionHeading kicker="Uncompromising rigor" light>
              <span id="compliance-title">Continuous Compliance, Assured.</span>
            </SectionHeading>
            <div className="relative grid grid-cols-3 gap-5 max-[820px]:grid-cols-1">
              {complianceCards.map((card) => (
                <article
                  className="reveal max-[820px]:mx-auto max-[820px]:max-w-[560px]"
                  key={card.title}
                >
                  <div
                    className={`grid h-[300px] place-items-center overflow-hidden rounded-3xl px-4 py-[37px] max-[560px]:h-[230px] ${card.visualClass}`}
                  >
                    <img
                      className="max-h-[181px] w-full rounded-md border border-[#e2e2e2] object-cover shadow-[0_0_0_10px_rgba(222,222,222,0.38),0_12px_35px_rgba(0,0,0,0.08)]"
                      src={asset(card.image)}
                      alt={card.alt}
                    />
                  </div>
                  <h3 className="mx-1 mb-2 mt-5 text-2xl font-medium leading-7 max-[560px]:text-[21px]">
                    {card.title}
                  </h3>
                  <p className="mx-1 text-base leading-6">{card.description}</p>
                </article>
              ))}
            </div>
          </Shell>
        </section>

        <section
          className="min-h-[557px] py-[98px] max-[820px]:py-[76px] max-[560px]:py-16"
          aria-labelledby="industries-title"
        >
          <Shell>
            <SectionHeading>
              <span id="industries-title">
                Built for every regulated
                <br />
                life sciences environment
              </span>
            </SectionHeading>
            <div className="grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
              {industries.map((industry) => (
                <article
                  className={`reveal flex min-h-[136px] items-center gap-4 rounded-[14px] px-6 py-[30px] shadow-[0_24px_48px_-12px_rgba(16,24,40,0.2)] max-[820px]:min-h-[120px] ${industry.cardClass}`}
                  key={industry.icon}
                >
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#00372e]">
                    <img
                      className={industry.iconClass}
                      src={asset(industry.icon)}
                      alt=""
                    />
                  </span>
                  <h3 className="text-xl font-semibold leading-7">
                    {industry.title}
                  </h3>
                </article>
              ))}
            </div>
          </Shell>
        </section>
      </main>

      <footer
        className="min-h-[750px] overflow-hidden rounded-t-[64px] bg-brand-950 text-white max-[820px]:rounded-t-[40px]"
        id="contact"
      >
        <div className="relative overflow-hidden text-center">
          <FooterPattern />
          <div className="relative z-[1] mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-8 py-25 max-[820px]:px-4">
            <h2 className="w-full max-w-[978px] text-[44px] font-bold leading-[48px] tracking-[0.44px] max-[560px]:text-[36px] max-[560px]:leading-10">
              Ready to simplify
              <br />
              your quality management?
            </h2>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-base font-medium leading-6 text-white transition hover:-translate-y-0.5 hover:bg-[#00ad6c]"
              href="mailto:hello@accura.one"
            >
              Book a Consultation
            </a>
          </div>
        </div>
        <Shell className="py-[60px] max-[560px]:py-12">
          <div className="grid min-h-[196px] grid-cols-2 gap-8 max-[820px]:grid-cols-1">
            <div>
              <Brand footer />
              <p className="mt-4 max-w-[440px] text-sm leading-[22px] text-brand-50">
                A cloud-native electronic Quality Management System (eQMS)
                purpose-built for regulated life sciences organisations, helping
                teams simplify quality management while maintaining compliance
                and audit readiness.
              </p>
            </div>
            <div className="flex justify-end gap-[103px] pt-6 pb-6 max-[820px]:justify-start max-[560px]:justify-between max-[560px]:gap-10">
              <div className="flex min-w-[120px] flex-col gap-4">
                <h3 className="mb-1 text-lg font-semibold leading-6">
                  Privacy Policy
                </h3>
                <a className="text-base leading-6 text-brand-50" href="#about">
                  How it works
                </a>
                <a
                  className="text-base leading-6 text-brand-50"
                  href="#solutions"
                >
                  Solutions
                </a>
                <a
                  className="text-base leading-6 text-brand-50"
                  href="#compliance"
                >
                  Compliance
                </a>
              </div>
              <div className="flex min-w-[120px] flex-col gap-4">
                <h3 className="mb-1 text-lg font-semibold leading-6">
                  Company
                </h3>
                <a className="text-base leading-6 text-brand-50" href="#about">
                  About
                </a>
                <a
                  className="text-base leading-6 text-brand-50"
                  href="mailto:hello@accura.one"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="flex min-h-11 items-end justify-between border-t border-brand-150/35 pt-5 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-6">
            <div className="flex items-center gap-5">
              <a href="#" aria-label="LinkedIn">
                <img
                  className="size-6"
                  src={asset("social-linkedin.svg")}
                  alt=""
                />
              </a>
              <a href="#" aria-label="Telegram">
                <img
                  className="size-6"
                  src={asset("social-telegram.svg")}
                  alt=""
                />
              </a>
              <a href="#" aria-label="Facebook">
                <img
                  className="size-6"
                  src={asset("social-facebook.svg")}
                  alt=""
                />
              </a>
            </div>
            <div className="flex items-center gap-[30px] text-sm text-brand-50 max-[560px]:flex-wrap max-[560px]:gap-x-5 max-[560px]:gap-y-3">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Disclosure</a>
            </div>
          </div>
        </Shell>
      </footer>
    </>
  );
}
