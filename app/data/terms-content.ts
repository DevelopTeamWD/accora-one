export type TermsContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "labelled-paragraph"; label: string; text: string }
  | { type: "list"; items: string[] };

export const termsSections: Array<{
  title: string;
  blocks: TermsContentBlock[];
}> = [
  {
    title: "1. Intellectual Property Rights",
    blocks: [
      {
        type: "paragraph",
        text: "Unless otherwise stated, Accura owns all intellectual property rights and materials contained on this Website. This includes, but is not limited to, our logo, brand assets, website design, text, graphics, and code.",
      },
      {
        type: "labelled-paragraph",
        label: "Strict Restriction:",
        text: "You must not copy, reproduce, distribute, or use our logo, content, or any other intellectual property without our express prior written consent.",
      },
      {
        type: "labelled-paragraph",
        label: "Limited Licence:",
        text: "You are granted a limited licence only for purposes of viewing the material contained on this Website for personal, non-commercial use.",
      },
    ],
  },
  {
    title: "2. User Restrictions",
    blocks: [
      {
        type: "paragraph",
        text: "You are specifically restricted from doing any of the following:",
      },
      {
        type: "list",
        items: [
          "Publishing any Website material in any other media without permission.",
          "Selling, sublicensing, or otherwise commercialising any Website material.",
          "Using this Website in any way that is or may be damaging to the Website or Accura.",
          "Using this Website in any way that impacts user access to this Website.",
          "Using this Website contrary to applicable Australian laws and regulations, or in any way that causes harm to the Website, or to any person or business entity.",
        ],
      },
    ],
  },
  {
    title: "3. Contact Form and Communication",
    blocks: [
      {
        type: "paragraph",
        text: "By submitting your details via our online contact form, you agree to provide accurate and truthful information (including your name and email address). You must not use our contact form to send spam, malicious software, or defamatory material.",
      },
    ],
  },
  {
    title: "4. No Warranties",
    blocks: [
      {
        type: "paragraph",
        text: "This Website is provided \"as is,\" with all faults, and Accura expresses no representations or warranties of any kind related to this Website or the materials contained on it. Nothing contained on this Website shall be interpreted as advising you.",
      },
    ],
  },
  {
    title: "5. Australian Consumer Law (ACL) & Limitation of Liability",
    blocks: [
      {
        type: "paragraph",
        text: "Our services come with guarantees that cannot be excluded under the Australian Consumer Law.",
      },
      {
        type: "paragraph",
        text: "To the maximum extent permitted by law, Accura, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way connected with your use of this Website.",
      },
    ],
  },
  {
    title: "6. Indemnification",
    blocks: [
      {
        type: "paragraph",
        text: "You hereby indemnify to the fullest extent Accura from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.",
      },
    ],
  },
  {
    title: "7. Severability",
    blocks: [
      {
        type: "paragraph",
        text: "If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.",
      },
    ],
  },
  {
    title: "8. Variation of Terms",
    blocks: [
      {
        type: "paragraph",
        text: "Accura is permitted to revise these Terms at any time as it sees fit. By using this Website, you are expected to review these Terms on a regular basis to ensure you understand all terms and conditions governing the use of this Website.",
      },
    ],
  },
  {
    title: "9. Governing Law & Jurisdiction",
    blocks: [
      {
        type: "paragraph",
        text: "These Terms will be governed by and interpreted in accordance with the laws of the State of Victoria, Australia, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Australia for the resolution of any disputes.",
      },
    ],
  },
];
