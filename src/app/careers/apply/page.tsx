import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/page-header";
import { ApplicationForm } from "@/components/careers/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to collaborate with Aventra Creative on premium web, SEO, and brand projects.",
  alternates: { canonical: "/careers/apply" },
  openGraph: {
    title: "Apply | Aventra Creative",
    description:
      "Submit your profile, portfolio, and availability to join our project team.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join us"
        title="Apply to collaborate"
        description="Share your portfolio, experience, and availability to join our freelance or internship project team."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
          { name: "Apply" },
        ]}
      />

      <section className="bg-[var(--bg)] pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
