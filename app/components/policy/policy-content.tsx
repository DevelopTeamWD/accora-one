import {
  privacyPolicyIntro,
  privacyPolicySections,
} from "@/app/data/privacy-policy-content";

export function PolicyContent() {
  return (
    <section className="relative z-10 -mt-[60px] min-h-[1642px] rounded-t-[64px] bg-white px-4 py-[120px] max-[820px]:min-h-0 max-[820px]:rounded-t-[40px] max-[820px]:py-20">
      <article className="reveal mx-auto max-w-[840px] text-base leading-6 text-black">
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
            For any questions or privacy-related requests, please contact us
            at:
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
              <a
                className="font-bold underline"
                href="https://accura.one/"
              >
                https://accura.one
              </a>
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
}
