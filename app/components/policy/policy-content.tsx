import {
  privacyPolicyIntro,
  privacyPolicySections,
} from "@/app/data/privacy-policy-content";
import { LegalContentLayout } from "@/app/components/legal/legal-content-layout";

export function PolicyContent() {
  return (
    <LegalContentLayout>
      <p className="mb-[14px]">{privacyPolicyIntro}</p>

      {privacyPolicySections.map((section) => (
        <section key={section.title}>
          <h2 className="mb-[14px] text-base font-bold leading-6">
            {section.title}
          </h2>
          {section.blocks.map((block, index) => {
            if (block.type === "list") {
              return (
                <ul
                  className="mb-[14px] list-disc space-y-0 pl-6"
                  key={`${section.title}-${index}`}
                >
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p
                className={`mb-[14px] ${
                  block.type === "subheading" ? "font-normal" : ""
                }`}
                key={`${section.title}-${index}`}
              >
                {block.text}
              </p>
            );
          })}
        </section>
      ))}

      <section>
        <h2 className="mb-[14px] text-base font-bold leading-6">
          7. Contact Us
        </h2>
        <p className="mb-[14px]">
          For any questions or privacy-related requests, please contact us at:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Business Name: <strong>Accura</strong>
          </li>
          <li>
            Email:{" "}
            <a
              className="font-bold underline"
              href="mailto:hello@accura.one"
            >
              hello@accura.one
            </a>
          </li>
          <li>
            Website:{" "}
            <a className="font-bold underline" href="https://accura.one/">
              https://accura.one
            </a>
          </li>
        </ul>
      </section>
    </LegalContentLayout>
  );
}
