export type ModuleItem = {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
};

export type ComplianceItem = {
  visualClass: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

export type IndustryItem = {
  cardClass: string;
  icon: string;
  iconClass: string;
  titleLines: string[];
};

export type PillarItem = {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
};

export const trustStandards = [
  "FDA 21 CFR Part 11",
  "GAMP 5 / CSA",
  "ISO 13485",
  "ALCOA & Data Integrity",
];

export const traditionalReality = [
  "Paper-based approvals delaying time-to-market.",
  "Fragmented files scattered across disjointed systems.",
  "Stressful, manual audit preparation.",
  "Prone to error manual spreadsheets tracking training.",
];

export const accuraBenefits = [
  "Instant Part 11 compliant e-signatures.",
  "A unified single source of truth for all QMS data.",
  "Real-time, comprehensive audit trails.",
  "Automated workflows ensuring constant compliance.",
];

export const pillars: PillarItem[] = [
  {
    icon: "pillar-fast.svg",
    iconClass: "h-[23.027px] w-[23.02px]",
    title: "Fast to Implement",
    description:
      "Pre-configured workflows mean you are up and running in weeks, not months.",
  },
  {
    icon: "pillar-intuitive.svg",
    iconClass: "h-[24.519px] w-[20.418px]",
    title: "Intuitive",
    description:
      "A consumer-grade user experience that requires near-zero training for end-users.",
  },
  {
    icon: "pillar-compliant.svg",
    iconClass: "h-[23.678px] w-[18.75px]",
    title: "Compliant at the Core",
    description:
      "Built to automatically meet FDA 21 CFR Part 11 and EU Annex 11 requirements.",
  },
  {
    icon: "pillar-modular.svg",
    iconClass: "h-[23.606px] w-[22.788px]",
    title: "Modular & Scalable",
    description:
      "Start with what you need, seamlessly add modules as your organization grows.",
  },
];

export const modules: ModuleItem[] = [
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

export const complianceCards: ComplianceItem[] = [
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

export const industries: IndustryItem[] = [
  {
    cardClass: "bg-brand-25",
    icon: "industry-biotech.svg",
    iconClass: "h-[27.779px] w-[19.673px]",
    titleLines: ["Biotechnology &", "Biopharma"],
  },
  {
    cardClass: "bg-[#e3f5fc]",
    icon: "industry-medical.svg",
    iconClass: "h-[27.75px] w-[28.5px]",
    titleLines: ["Medical Devices"],
  },
  {
    cardClass: "bg-[#e4eafa]",
    icon: "industry-pharma.svg",
    iconClass: "h-[25.327px] w-[19.5px]",
    titleLines: ["Pharmaceuticals"],
  },
  {
    cardClass: "bg-[#f9efe2]",
    icon: "industry-lab.svg",
    iconClass: "h-[29.625px] w-[27.75px]",
    titleLines: ["Laboratories"],
  },
];
