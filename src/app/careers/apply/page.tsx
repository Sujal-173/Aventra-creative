import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/page-header";
import { ApplicationForm } from "@/components/careers/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply",
  description: "Join Aventra Creative — Submit your application to collaborate with us.",
  alternates: { canonical: "/careers/apply" },
  openGraph: {
    title: "Apply | Aventra Creative",
    description: "Submit your details, portfolio, and resume to join Aventra Creative.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join us"
        title="Careers Application"
        description="Apply to join our freelance network or internship program."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
          { name: "Apply" },
        ]}
      />

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
