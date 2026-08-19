export const complianceCoverage = [
  {
    key: "records",
    title: "Electronic records & signatures",
    description:
      "Controls that support secure records, approvals and accountable user actions.",
  },
  {
    key: "integrity",
    title: "Data integrity principles",
    description:
      "Controls that support secure records, approvals and accountable user actions.",
  },
  {
    key: "validation",
    title: "Validation & audit evidence",
    description:
      "Documentation, change control and audit trail support across the system lifecycle.",
  },
] as const;

export const regulatoryStandards = [
  {
    title: "FDA 21 CFR Part 11",
    description:
      "Electronic records, electronic signatures and controlled system access.",
  },
  {
    title: "EU GMP Annex 11",
    description:
      "Computerised systems used in regulated pharmaceutical environments.",
  },
  {
    title: "GAMP 5 / CSA",
    description:
      "Risk-based computer software assurance and modern validation practices.",
  },
  {
    title: "ALCOA+ Data Integrity",
    description:
      "Reliable, complete and available data throughout the record lifecycle.",
  },
  {
    title: "ISO 15189 / ISO 17025",
    description:
      "Quality and competence requirements for laboratories and testing environments.",
  },
  {
    title: "ISO 13485",
    description:
      "Quality management expectations for medical device organisations.",
  },
] as const;

export const electronicRecordControls = [
  "Electronic signatures",
  "User authentication",
  "Role-based access controls",
  "Audit trails",
  "Version history",
  "Controlled approvals",
] as const;

export const alcoaPrinciples = [
  {
    title: "Attributable",
    description: "Actions and records are linked to identified users.",
    pattern: [
      ".........",
      "...###...",
      "...###...",
      "...###...",
      "...#.....",
      "..#####..",
      ".#######.",
      ".#######.",
      "..#####..",
    ],
  },
  {
    title: "Legible",
    description: "Information remains clear, readable and accessible.",
    pattern: [
      "..#####..",
      "..#...#..",
      "..#####..",
      "..#...#..",
      "..#####..",
      "..#...#..",
      "..#####..",
      "..#...#..",
      "..#####..",
    ],
  },
  {
    title: "Contemporaneous",
    description: "Activities are captured with time-based context.",
    accent: true,
    pattern: [
      "...###...",
      "..#####..",
      ".##...##.",
      "##..#..##",
      "##..#..##",
      "##..#####",
      ".##...##.",
      "..#####..",
      "...###...",
    ],
  },
  {
    title: "Original",
    description: "Records maintain source integrity and lifecycle history.",
    pattern: [
      "..####...",
      "..#..##..",
      "..#..##..",
      "..#...#..",
      "..#####..",
      "..#...#..",
      "..#...#..",
      "..#...#..",
      "..#####..",
    ],
  },
  {
    title: "Accurate",
    description: "Information remains reliable, controlled and reviewable.",
    pattern: [
      "...###...",
      "..##.##..",
      ".#.....#.",
      "##.######",
      "#..#.#..#",
      "######.##",
      ".#.#...#.",
      "..##.##..",
      "...###...",
    ],
  },
  {
    title: "Plus",
    description: "Complete, consistent, enduring and available.",
    pattern: [
      "....#....",
      "....#....",
      "....#....",
      "....#....",
      "#########",
      "....#....",
      "....#....",
      "....#....",
      "....#....",
    ],
  },
] as const;

export const validationSteps = [
  {
    number: "01",
    title: "Implementation planning",
    description: "Define intended use, scope and quality process requirements.",
  },
  {
    number: "02",
    title: "Configuration control",
    description:
      "Set up workflows, roles, permissions under controlled governance.",
  },
  {
    number: "03",
    title: "Qualification evidence",
    description:
      "Use supporting documentation and test evidence for deployment.",
  },
  {
    number: "04",
    title: "Controlled change",
    description:
      "Maintain confidence through release management and change impact review.",
  },
] as const;

export const auditReadinessBenefits = [
  "Traceable quality records",
  "Complete activity history",
  "Controlled documentation",
  "Faster evidence access",
  "Inspection readiness",
  "Transparent workflows",
] as const;
