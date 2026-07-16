import type { Metadata } from "next";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { PageCta } from "@/components/marketing/page-cta";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Aventra Creative — freelance collaborations, internships, and future opportunities.",
  alternates: { canonical: "/careers" },
};

const TRACKS = [
  {
    icon: Users,
    title: "Freelancers",
    desc: "For designers and developers who want project-based collaboration on real client work.",
  },
  {
    icon: GraduationCap,
    title: "Internships",
    desc: "Hands-on experience shipping production websites — not busywork, real client projects.",
  },
  {
    icon: Briefcase,
    title: "Future Opportunities",
    desc: "As Aventra grows, full-time roles will open first to people already in our network.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join us"
        title="Careers & collaborations"
        description="Work directly with a founder-led digital studio on high-impact website, SEO, and brand projects."
        crumbs={[{ name: "Home", href: "/" }, { name: "Careers" }]}
      />

      <section className="bg-[var(--bg)] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8">
            <p className="text-[15px] leading-relaxed text-[var(--ink-muted)]">
              Aventra Creative is a founder-led studio where every project gets
              direct attention from strategy to delivery. We're looking for
              collaborators who deliver dependable work, communicate clearly, and
              care about launching results.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {TRACKS.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_4px_15px_rgba(64,45,120,0.02)]"
              >
                <t.icon
                  className="h-5 w-5"
                  style={{ color: "var(--primary)" }}
                />
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--ink)]">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Think you can add value?"
        description="Send your portfolio and tell us how you help ambitious clients grow."
        buttonText="Apply now"
        href="/careers/apply"
      />
    </>
  );
}
