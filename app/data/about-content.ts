export const teamPrinciples = [
  {
    key: "expert",
    title: "Guided by expert",
    description:
      "Shaped by advisors with quality, validation and life sciences experience.",
  },
  {
    key: "trust",
    title: "Focused on long-term trust",
    description: "Built for teams that need confidence beyond launch day.",
  },
  {
    key: "context",
    title: "Built with regulated context",
    description:
      "Designed around how quality decisions, records and responsibilities actually work.",
  },
] as const;

export const advisors = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  name: "Advisor Name",
  role: "Quality & regulatory advisor",
  description:
    "Brings perspective on quality systems, regulatory expectations and the operational discipline needed in regulated environments.",
}));

export const purposeCards = [
  {
    icon: "purpose-mission.svg",
    iconWidth: 38.486,
    title: "Simplify quality so teams can focus on what matters",
    description:
      "Our mission is to dramatically reduce the operational overhead of quality management. We build tools that automate administrative burden, allowing quality professionals and scientific teams to redirect their energy toward safety, efficacy, and innovation.",
  },
  {
    icon: "purpose-vision.svg",
    iconWidth: 38.4974,
    title: "Accessible quality management for every growing organization.",
    description:
      "We envision an audit-ready world where world-class quality systems are not gated by prohibitive costs or archaic implementations. Every life sciences company, regardless of stage, deserves software that inherently protects their data and processes.",
  },
] as const;

export const corePillars = [
  {
    icon: "pillar-fast.svg",
    iconWidth: 23.02,
    iconHeight: 23.027,
    title: "Fast to Implement",
    description:
      "Pre-configured workflows mean you are up and running in weeks, not months.",
  },
  {
    icon: "pillar-compliant.svg",
    iconWidth: 18.75,
    iconHeight: 23.678,
    title: "Compliant at the Core",
    description:
      "Built to automatically meet FDA 21 CFR Part 11 and EU Annex 11 requirements.",
  },
  {
    icon: "pillar-intuitive.svg",
    iconWidth: 20.418,
    iconHeight: 24.519,
    title: "Intuitive",
    description:
      "A consumer-grade user experience that requires near-zero training for end-users.",
  },
  {
    icon: "pillar-modular.svg",
    iconWidth: 22.788,
    iconHeight: 23.606,
    title: "Modular & Scaleable",
    description:
      "Start with what you need, seamlessly add modules as your organization grows.",
  },
] as const;
