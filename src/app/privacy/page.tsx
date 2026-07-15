import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Aventra Creative's privacy policy covering data collection, cookies, and third-party processors.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" crumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-[15px] leading-relaxed text-[var(--ink-muted)] lg:px-8">
          <p>
            This page is a placeholder. Aventra Creative will publish a full privacy policy
            covering data collection, cookies, and third-party processors (analytics, hosting,
            and form submission) before this site accepts real client data.
          </p>
        </div>
      </section>
    </>
  );
}
