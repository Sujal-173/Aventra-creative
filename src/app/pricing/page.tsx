import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { PageCta } from "@/components/marketing/page-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for premium websites, SEO, and digital growth support that fits your budget and goals.",
  alternates: { canonical: "/pricing" },
};

const TIERS = [
  {
    name: "Starter",
    price: "₹4,999",
    desc: "Perfect for small businesses",
    features: [
      "Business Website",
      "Responsive Design",
      "Basic SEO",
      "1 Month Support",
      "1 Revision",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "₹9,999",
    desc: "Most popular for growing brands",
    features: [
      "Everything in Starter",
      "Advanced SEO",
      "CMS Integration",
      "Contact Form",
      "2 Months Support",
      "3 Revisions",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "₹19,999",
    desc: "For businesses going all in",
    features: [
      "Everything in Pro",
      "E-commerce",
      "Google Ads Setup",
      "Monthly Support",
      "Unlimited Revisions",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, transparent packages"
        description="Packages designed for bootstrapped businesses, growth-stage brands, and professional teams who want digital work done right."
        crumbs={[{ name: "Home", href: "/" }, { name: "Pricing" }]}
      />

      <section className="bg-[var(--bg)] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={
                  "relative flex flex-col rounded-2xl p-8 " +
                  (t.featured
                    ? "border-2 lg:-translate-y-3 text-white"
                    : "border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] shadow-[var(--shadow-md)]")
                }
                style={
                  t.featured
                    ? { borderColor: "var(--accent)", background: "var(--bg-dark)" }
                    : undefined
                }
              >
                {t.featured && (
                  <span
                    className="label-mono absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[var(--accent-ink)]"
                    style={{ background: "var(--accent)" }}
                  >
                    Most Popular
                  </span>
                )}
                <h3
                  className={
                    "font-display text-lg font-semibold " +
                    (t.featured ? "text-white" : "text-[var(--ink)]")
                  }
                >
                  {t.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">{t.desc}</p>
                <div
                  className={
                    "mt-5 font-display text-4xl font-bold " +
                    (t.featured ? "text-white" : "text-[var(--ink)]")
                  }
                >
                  {t.price}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={
                        "flex items-start gap-2.5 text-sm " +
                        (t.featured ? "text-white/70" : "text-[var(--ink-faint)]")
                      }
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: t.featured ? "var(--accent)" : "var(--accent)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={
                    "mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 " +
                    (t.featured
                      ? "text-[var(--accent-ink)] hover:scale-105 hover:shadow-[var(--shadow-glow)]"
                      : "border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-soft)] hover:scale-105")
                  }
                  style={t.featured ? { background: "var(--accent)" } : undefined}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                Need Something Custom?
              </h3>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                Let&apos;s create a solution that fits your business needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full border border-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
            >
              Let&apos;s Discuss
            </Link>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
