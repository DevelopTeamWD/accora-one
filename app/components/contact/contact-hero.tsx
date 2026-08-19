import { StaticPageHero } from "@/app/components/ui/static-page-hero";

export function ContactHero() {
  return (
    <StaticPageHero
      eyebrow="TALK TO AN ADVISOR"
      title={
        <>
          Get a free consultation
          <br />
          with our quality experts
        </>
      }
      titleClassName="max-w-[619px]"
      description="Take the first step towards modernising your quality management system."
      menuId="contact-nav-menu"
    />
  );
}
