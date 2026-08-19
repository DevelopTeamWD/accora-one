import { LegalContentLayout } from "@/app/components/legal/legal-content-layout";
import { termsSections } from "@/app/data/terms-content";

export function TermsContent() {
  return (
    <LegalContentLayout>
      <p className="mb-[14px]">
        Welcome to Accura (accura.one). These Terms and Conditions
        (&quot;Terms&quot;) govern your use of our marketing website located at{" "}
        <a
          className="font-bold underline"
          href="https://accura.one/"
          rel="noreferrer"
          target="_blank"
        >
          https://accura.one
        </a>{" "}
        (&quot;Website&quot;).
      </p>
      <p className="mb-[14px]">
        By accessing or using our Website, you agree to be bound by these Terms.
        If you do not agree with any part of these Terms, you must stop using the
        Website immediately.
      </p>

      {termsSections.map((section) => (
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

            if (block.type === "labelled-paragraph") {
              return (
                <p className="mb-[14px]" key={`${section.title}-${index}`}>
                  <strong>{block.label}</strong> {block.text}
                </p>
              );
            }

            return (
              <p className="mb-[14px]" key={`${section.title}-${index}`}>
                {block.text}
              </p>
            );
          })}
        </section>
      ))}
    </LegalContentLayout>
  );
}
