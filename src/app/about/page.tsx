import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Rocket, Target } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { PageCta } from "@/components/marketing/page-cta";

export const metadata: Metadata = {
  title: "About",
  description: "Aventra Creative is a digital agency founded by Sujal Patidar, built to bridge the gap between beautiful design and measurable business results.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="About Aventra Creative"
        description="We are a digital agency focused on creating modern, fast, and result-driven websites."
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative mx-auto aspect-square w-full h-full
             max-w-sm overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)]">
              <Image
                src="/images/founder-sujal.png"
                alt="Sujal Patidar, Founder & Full Stack Developer at Aventra Creative"
                fill
                sizes="(max-width: 1024px) 384px, 420px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <span className="label-mono text-[var(--primary)]">My Story</span>
              <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--ink)] lg:text-3xl">
                Sujal Patidar — Founder & Full Stack Developer
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink-muted)]">
                I started Aventra Creative because I kept seeing the same problem: businesses
                spending real money on websites that never generated a single lead. Not because
                the businesses weren&apos;t good — because the websites weren&apos;t built to work.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-muted)]">
                With over a year of hands-on experience building and shipping production
                websites, applications, and SEO strategy, Aventra Creative exists to close that
                gap — combining design that looks credible with engineering that actually
                converts.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { v: "1+", l: "Years Experience" },
                  { v: "8+", l: "Clients Served" },
                  { v: "10+", l: "Projects Completed" },
                  { v: "98%", l: "Client Satisfaction" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_4px_15px_rgba(64,45,120,0.02)]">
                    <div className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--ink)]">{s.v}</div>
                    <div className="mt-1 text-[11px] leading-tight text-[var(--ink-muted)]">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Target, title: "Mission", desc: "Empower businesses through exceptional digital experiences." },
              { icon: Compass, title: "Vision", desc: "Become one of India's leading creative technology agencies." },
              { icon: Rocket, title: "How We Work", desc: "Real timelines, transparent communication, results you can measure." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_4px_15px_rgba(64,45,120,0.02)]">
                <v.icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--ink)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Have a project in mind?" description="Let's create something amazing together." />
    </>
  );
}
