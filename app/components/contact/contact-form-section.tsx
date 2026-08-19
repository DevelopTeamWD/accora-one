"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { asset } from "@/app/lib/assets";

const fields = [
  {
    autoComplete: "name",
    label: "Your Name",
    name: "name",
    required: true,
    type: "text",
  },
  {
    autoComplete: "email",
    label: "Email Address",
    name: "email",
    required: true,
    type: "email",
  },
  {
    autoComplete: "organization",
    label: "Company Name",
    name: "company",
    required: false,
    type: "text",
  },
  {
    autoComplete: "tel",
    label: "Phone Number",
    name: "phone",
    required: false,
    type: "tel",
  },
] as const;

type FieldName = (typeof fields)[number]["name"] | "message";
type FormErrors = Partial<Record<FieldName, string>>;

const namePattern = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+()\d\s.-]+$/;

function validateField(name: FieldName, rawValue: string) {
  const value = rawValue.trim();

  if (name === "name") {
    if (!value) return "Please enter your name.";
    if (value.length < 2) return "Name must contain at least 2 characters.";
    if (value.length > 80) return "Name must not exceed 80 characters.";
    if (!namePattern.test(value)) {
      return "Name can only contain letters, spaces, apostrophes and hyphens.";
    }
  }

  if (name === "email") {
    if (!value) return "Please enter your email address.";
    if (value.length > 254) return "Email address is too long.";
    if (!emailPattern.test(value)) {
      return "Please enter a valid email address, for example name@company.com.";
    }
  }

  if (name === "company" && value.length > 120) {
    return "Company name must not exceed 120 characters.";
  }

  if (name === "phone" && value) {
    const digitCount = value.replace(/\D/g, "").length;

    if (!phonePattern.test(value)) {
      return "Phone number contains unsupported characters.";
    }
    if (digitCount < 7 || digitCount > 15) {
      return "Phone number must contain between 7 and 15 digits.";
    }
  }

  if (name === "message" && value.length > 2000) {
    return "Message must not exceed 2,000 characters.";
  }

  return "";
}

function ContactVisual() {
  return (
    <div className="reveal relative h-[746px] min-w-0 overflow-hidden rounded-3xl bg-brand-950 max-[1100px]:h-[650px] max-[820px]:h-[620px] max-[560px]:h-[500px]">
      <div className="absolute left-[53.5px] top-[102px] h-[463px] w-[842px] rounded-3xl border border-white bg-[linear-gradient(139deg,rgba(255,255,255,0.3)_19%,rgba(153,153,153,0.3)_86%)] p-3 max-[560px]:left-8 max-[560px]:top-16">
        <img
          className="h-[440.867px] w-[816px] max-w-none rounded-2xl object-cover"
          src={asset("contact/product-snapshot.png")}
          alt=""
        />
        <div className="pointer-events-none absolute inset-3 rounded-2xl bg-gradient-to-b from-transparent from-[36%] to-[#f5f5f5] to-[73%]" />
      </div>

      <img
        className="pointer-events-none absolute left-[-35.52px] top-[154.93px] h-[979.053px] w-[979.053px] max-w-none mix-blend-color-dodge"
        src={asset("contact/visual-glow.svg")}
        alt=""
        aria-hidden="true"
      />
      <img
        className="absolute left-[-224.98px] top-[165.06px] h-[580.94px] w-[943.804px] max-w-none object-cover max-[560px]:left-[-255px] max-[560px]:top-[145px]"
        src={asset("contact/consultation-team.png")}
        alt="Quality professionals discussing their work"
      />
    </div>
  );
}

export function ContactFormSection() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [showErrorSummary, setShowErrorSummary] = useState(false);

  const updateFieldError = (name: FieldName, value: string) => {
    const error = validateField(name, value);

    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };

      if (error) nextErrors[name] = error;
      else delete nextErrors[name];

      return nextErrors;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: FormErrors = {};
    const fieldNames: FieldName[] = [
      ...fields.map((field) => field.name),
      "message",
    ];

    fieldNames.forEach((name) => {
      const error = validateField(name, String(formData.get(name) ?? ""));
      if (error) nextErrors[name] = error;
    });

    if (Object.keys(nextErrors).length === 0) {
      setErrors({});
      setShowErrorSummary(false);
      return;
    }

    event.preventDefault();
    setErrors(nextErrors);
    setShowErrorSummary(true);

    const firstInvalidField = fieldNames.find((name) => nextErrors[name]);
    if (firstInvalidField) {
      requestAnimationFrame(() => {
        document.getElementById(`contact-${firstInvalidField}`)?.focus();
      });
    }
  };

  return (
    <section className="relative z-10 -mt-[60px] min-h-[986px] rounded-t-[64px] bg-white px-[120px] py-[120px] max-[1100px]:px-12 max-[820px]:min-h-0 max-[820px]:rounded-t-[40px] max-[820px]:px-4 max-[820px]:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,536px)_minmax(0,600px)] gap-16 max-[1100px]:grid-cols-2 max-[1100px]:gap-8 max-[820px]:grid-cols-1">
        <ContactVisual />

        <form
          className="reveal flex min-h-[746px] flex-col gap-5 rounded-3xl bg-gradient-to-b from-brand-25 to-white px-7 py-6 max-[820px]:min-h-0 max-[560px]:px-5"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          noValidate
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="hidden">
            Do not fill this out if you are human:
            <input name="bot-field" />
          </label>

          <h2 className="text-[32px] font-medium leading-9 max-[560px]:text-[28px] max-[560px]:leading-8">
            Let us know a little about you below
          </h2>

          {showErrorSummary ? (
            <div
              className="rounded-lg border border-[#cc3333] bg-[#fff5f5] px-4 py-3 text-sm leading-[22px] text-[#8f1717]"
              role="alert"
            >
              Please review the highlighted fields before sending your message.
            </div>
          ) : null}

          {fields.map((field) => {
            const error = errors[field.name];
            const errorId = `contact-${field.name}-error`;

            return (
              <label className="flex flex-col gap-1" key={field.name}>
                <span className="flex h-[26px] items-center gap-1 text-base font-medium leading-6 text-muted">
                  {field.label}
                  {field.required ? (
                    <span className="font-normal text-[#990000]">*</span>
                  ) : null}
                </span>
                <input
                  className={`h-14 rounded-lg border bg-white px-4 text-base text-ink outline-none transition focus:ring-2 ${
                    error
                      ? "border-[#cc3333] focus:border-[#cc3333] focus:ring-[#cc3333]/15"
                      : "border-[#c4c4c4] focus:border-brand-700 focus:ring-brand-700/15"
                  }`}
                  aria-describedby={error ? errorId : undefined}
                  aria-invalid={Boolean(error)}
                  aria-required={field.required}
                  autoComplete={field.autoComplete}
                  id={`contact-${field.name}`}
                  name={field.name}
                  type={field.type}
                  onBlur={(event) =>
                    updateFieldError(field.name, event.currentTarget.value)
                  }
                  onChange={(event) => {
                    if (errors[field.name]) {
                      updateFieldError(field.name, event.currentTarget.value);
                    }
                  }}
                />
                {error ? (
                  <span
                    className="text-sm leading-5 text-[#a32121]"
                    id={errorId}
                    role="alert"
                  >
                    {error}
                  </span>
                ) : null}
              </label>
            );
          })}

          <label className="flex min-h-[154px] flex-1 flex-col gap-1">
            <span className="flex h-[26px] items-center text-base font-medium leading-6 text-muted">
              Tell us about your quality management needs
            </span>
            <textarea
              className={`min-h-[124px] flex-1 resize-none rounded-lg border bg-white p-4 text-base text-ink outline-none transition focus:ring-2 ${
                errors.message
                  ? "border-[#cc3333] focus:border-[#cc3333] focus:ring-[#cc3333]/15"
                  : "border-[#c4c4c4] focus:border-brand-700 focus:ring-brand-700/15"
              }`}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              aria-invalid={Boolean(errors.message)}
              id="contact-message"
              name="message"
              onBlur={(event) =>
                updateFieldError("message", event.currentTarget.value)
              }
              onChange={(event) => {
                if (errors.message) {
                  updateFieldError("message", event.currentTarget.value);
                }
              }}
            />
            {errors.message ? (
              <span
                className="text-sm leading-5 text-[#a32121]"
                id="contact-message-error"
                role="alert"
              >
                {errors.message}
              </span>
            ) : null}
          </label>

          <button
            className="flex h-11 w-full items-center justify-center rounded-full bg-brand-700 px-6 text-base font-medium leading-6 text-white transition hover:bg-[#00ad6c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
