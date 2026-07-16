import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aventra Creative to discuss your next website, SEO, or brand initiative.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Start your next digital growth project."
        description="Share your goals and we’ll recommend the best website, SEO, or brand solution to move your business forward."
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <section className="bg-[var(--bg)] pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value:
                  process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
                  "hello@aventracreative.com",
                href:
                  "mailto:" +
                  (process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
                    "hello@aventracreative.com"),
              },
              {
                icon: MessageCircle,
                label: "Phone / WhatsApp",
                value:
                  process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98765 43210",
                href:
                  process.env.NEXT_PUBLIC_WHATSAPP_LINK ||
                  "https://wa.me/919876543210",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Indore, Madhya Pradesh, India",
                href: "https://maps.google.com/?q=Indore",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-start gap-4 rounded-[1.35rem] border border-[var(--line)] bg-[var(--bg-elevated)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/30 hover:shadow-[0_12px_35px_rgba(91,33,231,0.06)]"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: "var(--primary-soft)" }}
                >
                  <c.icon
                    className="h-5 w-5"
                    style={{ color: "var(--primary)" }}
                  />
                </span>
                <div>
                  <div className="label-mono text-[var(--ink-faint)]">
                    {c.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[var(--ink)]">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-[var(--bg-elevated)]">
              <iframe
                title="Aventra Creative location"
                src="https://maps.google.com/maps?q=Indore,Madhya%20Pradesh,India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="h-56 w-full grayscale contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--bg-elevated)] p-8 shadow-[0_20px_60px_rgba(91,33,231,0.06)]">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
