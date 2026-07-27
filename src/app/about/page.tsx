import type { Metadata } from "next";
import Image from "next/image";
import {
  Compass,
  Sparkles,
  Target,
  Star,
  Briefcase,
  Users,
  Rocket,
  ShieldCheck,
  Code2,
  Layers,
  Lightbulb,
  Palette,
  Brush,
  ClipboardList,
  Linkedin,
  Github,
  Instagram,
  Mail,
} from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { PageCta } from "@/components/marketing/page-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aventra Creative helps ambitious businesses launch websites and digital experiences that look premium and deliver measurable results.",
  alternates: { canonical: "/about" },
};

const FOUNDERS = [
  {
    name: "Sujal Patidar",
    role: "Founder & CEO",
    title: "Full Stack Developer",
    image: "/images/founder-sujal.png",
    bio: "I turn ideas into digital products. With a strong background in full stack development, I lead the technical strategy, development, and innovation at Aventra Creative.",
    skills: [
      { label: "Full Stack Development", icon: Code2 },
      { label: "System Architecture", icon: Layers },
      { label: "Problem Solving", icon: Lightbulb },
      { label: "Product Strategy", icon: Target },
    ],
    socials: [
      { icon: Linkedin, href: process.env.FOUNDER_LINKEDIN_URL, label: "LinkedIn" },
      { icon: Github, href: process.env.FOUNDER_GITHUB_URL, label: "GitHub" },
      { icon: Instagram, href: process.env.FOUNDER_INSTAGRAM_URL, label: "Instagram" },
      { icon: Mail, href: process.env.FOUNDER_EMAIL_URL, label: "Email" },
    ],
  },
  {
    name: "Kuldeep Patidar",
    role: "Co-Founder",
    title: "Design & Client Management",
    image: "/images/founder-kuldeep.png",
    bio: "I focus on creating meaningful designs that connect brands with people and managing client relationships to ensure smooth communication and successful project delivery.",
    skills: [
      { label: "UI/UX Design", icon: Palette },
      { label: "Brand & Visual Design", icon: Brush },
      { label: "Client Management", icon: Users },
      { label: "Project Coordination", icon: ClipboardList },
    ],
    socials: [
      { icon: Linkedin, href: process.env.CO_FOUNDER_LINKEDIN_URL, label: "LinkedIn" },
      { icon: Instagram, href: process.env.CO_FOUNDER_INSTAGRAM_URL, label: "Instagram" },
      { icon: Mail, href: process.env.CO_FOUNDER_EMAIL_URL, label: "Email" },
    ],
  },
];

const STATS = [
  { v: "1+", l: "Years Experience", icon: Star },
  { v: "15+", l: "Projects Completed", icon: Briefcase },
  { v: "10+", l: "Happy Clients", icon: Users },
  { v: "10+", l: "Industries Served", icon: Rocket },
  { v: "100%", l: "Client Satisfaction", icon: ShieldCheck },
];

const JOURNEY = [
  {
    year: "2026",
    title: "Founded",
    detail:
      "Aventra Creative was established to help businesses build high-performance websites, improve their online presence, and generate more leads.",
  },
  {
    year: "2026",
    title: "First Client",
    detail:
      "Successfully delivered our first client website with a focus on performance, responsive design, and SEO best practices.",
  },
  {
    year: "2026",
    title: "Service Expansion",
    detail:
      "Expanded from web development to include branding, UI/UX design, local SEO, website maintenance, and digital marketing solutions.",
  },
  {
    year: "Today",
    title: "Growing Every Day",
    detail:
      "Partnering with startups and local businesses to create fast, modern, and conversion-focused digital experiences.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="We are a team of creatives, designers, and developers."
        description="We help ambitious brands build digital products that are beautiful, functional, and result-driven. Our mission is to empower businesses to grow through powerful digital solutions."
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="bg-[var(--bg)] pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="label-mono text-[var(--primary)]">Our Founders</span>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {FOUNDERS.map((f) => (
              <div
                key={f.name}
                className="card grid grid-cols-1 overflow-hidden sm:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="relative aspect-[4/5] sm:aspect-auto">
                  <Image
                    src={f.image}
                    alt={`${f.name}, ${f.role} at Aventra Creative`}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-7">
                  <span className="label-mono text-[var(--primary)]">
                    {f.role}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--ink)]">
                    {f.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--primary)]">
                    {f.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {f.bio}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {f.skills.map((skill) => (
                      <span
                        key={skill.label}
                        className="flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--ink-muted)]"
                      >
                        <skill.icon
                          className="h-3 w-3"
                          style={{ color: "var(--primary)" }}
                        />
                        {skill.label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    {f.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={`${f.name} on ${s.label}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--ink)] transition-colors hover:text-[var(--primary)]"
                        style={{ background: "var(--primary-soft)" }}
                      >
                        <s.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {STATS.map((s) => (
              <div key={s.l} className="card flex flex-col items-center p-5 text-center">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: "var(--primary-soft)" }}
                >
                  <s.icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                </div>
                <div className="mt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--ink)]">
                  {s.v}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-[var(--ink-muted)]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "Deliver impactful digital solutions that drive growth.",
              },
              {
                icon: Compass,
                title: "Our Vision",
                desc: "To be a global creative agency known for excellence.",
              },
              {
                icon: Sparkles,
                title: "Our Values",
                desc: "Innovation, transparency, and client success.",
              },
            ].map((v) => (
              <div key={v.title} className="card p-7">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "var(--primary-soft)" }}
                >
                  <v.icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--ink)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="label-mono text-[var(--primary)]">Milestones</span>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--ink)] lg:text-3xl">
            Our Journey
          </h2>

          <div className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-[9px] hidden h-px bg-[var(--line)] lg:block" />
            {JOURNEY.map((j,index) => (
              <div key={index} className="relative pl-6">
                <span
                  className="absolute left-0 top-1.5 h-3 w-3 rounded-full ring-4"
                  style={{
                    background: "var(--primary)",
                    boxShadow: "0 0 0 4px var(--bg)",
                  }}
                />
                <p className="text-sm font-bold text-[var(--primary)]">{j.year}</p>
                <h3 className="mt-1 font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-[var(--ink)]">
                  {j.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--ink-muted)]">
                  {j.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Let's Build Something Amazing Together"
        description="Have a project in mind? Let's discuss how we can help your business grow."
        buttonText="Start a Project"
      />
    </>
  );
}
