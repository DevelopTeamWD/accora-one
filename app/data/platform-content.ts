export type SolutionCard = {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
};

export type ModuleGroup = {
  icon: string;
  iconClass: string;
  title: string;
  modules: Array<{
    title: string;
    description: string;
  }>;
};

export const connectedQualityCards: SolutionCard[] = [
  {
    icon: "connected-records.svg",
    iconClass: "h-[19px] w-[21px]",
    title: "Connected records",
    description:
      "Seamlessly link deviations to CAPAs, and CAPAs to document changes.",
  },
  {
    icon: "shared-data.svg",
    iconClass: "h-[18px] w-5",
    title: "Shared data",
    description:
      "Eliminate redundant data entry across different quality processes.",
  },
  {
    icon: "complete-history.svg",
    iconClass: "size-[18px]",
    title: "Complete history",
    description:
      "Maintain a comprehensive, traceable audit trail across the entire platform.",
  },
  {
    icon: "centralized-visibility.svg",
    iconClass: "h-[15px] w-[22px]",
    title: "Centralized visibility",
    description:
      "Link documents, training, events, CAPAs, audits and changes in one quality environment.",
  },
];

export const moduleGroups: ModuleGroup[] = [
  {
    icon: "core-modules.svg",
    iconClass: "h-[19.3px] w-[31.3px]",
    title: "Core Quality Modules",
    modules: [
      {
        title: "Document Control",
        description:
          "Manage the entire document lifecycle from creation to obsolescence.",
      },
      {
        title: "Training & Competency",
        description:
          "Automate training assignments based on document changes and role updates.",
      },
      {
        title: "Deviations & CAPA",
        description:
          "Investigate issues, determine root causes, and implement corrective actions.",
      },
      {
        title: "Change Control",
        description:
          "Evaluate, approve, and implement changes in a controlled, traceable manner.",
      },
    ],
  },
  {
    icon: "extended-capabilities.svg",
    iconClass: "h-5 w-[31px]",
    title: "Extended Capabilities",
    modules: [
      {
        title: "Risk Management",
        description: "Identify, assess, and mitigate risks across operations.",
      },
      {
        title: "Audit Management",
        description:
          "Automate training assignments based on document changes and roleupdates.",
      },
      {
        title: "Supplier Quality",
        description:
          "Maintain oversight of supplier quality activities and documentation.",
      },
      {
        title: "Additional Workflows",
        description:
          "Extend the system as quality processes and operational needs evolve.",
      },
    ],
  },
];

export const workflowFeatures = [
  {
    icon: "approval-workflows.svg",
    iconClass: "size-[18px]",
    title: "Approval workflows",
  },
  {
    icon: "roles-permissions.svg",
    iconClass: "h-5 w-[18px]",
    title: "User roles & permissions",
  },
  {
    icon: "review-cycles.svg",
    iconClass: "h-[22px] w-[21.875px]",
    title: "Review cycles",
  },
  {
    icon: "notifications.svg",
    iconClass: "h-[20.05px] w-5",
    title: "Notifications & escalations",
  },
];

export const foundationBenefits = [
  "Pre-validated platform foundation",
  "Reduced validation effort",
  "Structured setup process",
  "Controlled platform updates",
];

export const implementationServices: SolutionCard[] = [
  {
    icon: "support-implementation.svg",
    iconClass: "h-[19.5px] w-[21px]",
    title: "Implementation Support",
    description:
      "Expert guidance to configure the platform to your specific operational needs.",
  },
  {
    icon: "support-documentation.svg",
    iconClass: "h-[21px] w-[16.5px]",
    title: "Documentation Support",
    description:
      "Assistance with migrating and structuring your existing quality documents.",
  },
  {
    icon: "support-training.svg",
    iconClass: "h-[16.2691px] w-[19.9229px]",
    title: "Training & Adoption",
    description:
      "Comprehensive training programs to ensure smooth user adoption.",
  },
  {
    icon: "validation-consulting.svg",
    iconClass: "h-[16.2691px] w-[19.9229px]",
    title: "Validation & Consulting",
    description:
      "Ongoing support to maintain validation status during updates.",
  },
];
