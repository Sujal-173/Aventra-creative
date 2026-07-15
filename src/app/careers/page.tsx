import type { Metadata } from "next";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { PageCta } from "@/components/marketing/page-cta";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Aventra Creative — freelance collaborations, internships, and future opportunities.",
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
        title="Join Our Journey"
        description="We're growing and looking for talented people."
        crumbs={[{ name: "Home", href: "/" }, { name: "Careers" }]}
      />

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8">
            <p className="text-[15px] leading-relaxed text-[var(--ink-muted)]">
              We&apos;re a solo agency right now — Aventra is founder-led, which means every
              project gets direct attention rather than getting lost in a big-agency handoff
              chain. But we&apos;re always open to talented collaborators and freelancers who want
              to work on real client projects.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {TRACKS.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_4px_15px_rgba(64,45,120,0.02)]">
                <t.icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--ink)]">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Think You Can Add Value?" description="Send your portfolio and let's talk." buttonText="Send Portfolio" href="/careers/apply" />
    </>
  );
}
