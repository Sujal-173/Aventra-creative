import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aventra Creative — email, WhatsApp, or send a message directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's Build Something Together"
        description="Tell us about your project and we'll get back within one business day."
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <section className="bg-white pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@aventracreative.com", href: "mailto:" + (process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@aventracreative.com") },
              { icon: MessageCircle, label: "Phone / WhatsApp", value: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 XXXXX XXXXX", href: process.env.NEXT_PUBLIC_WHATSAPP_LINK || "#" },
              { icon: MapPin, label: "Location", value: "Indore, Madhya Pradesh, India", href: "https://maps.google.com/?q=Indore" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--primary)]/30 hover:shadow-[0_8px_30px_rgba(91,33,231,0.03)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--primary-soft)" }}>
                  <c.icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                </span>
                <div>
                  <div className="label-mono text-zinc-500">{c.label}</div>
                  <div className="mt-1 text-sm text-[var(--ink)] font-medium">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
              <iframe
                title="Aventra Creative location"
                src="https://maps.google.com/maps?q=Indore,Madhya%20Pradesh,India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="h-56 w-full grayscale contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[0_8px_30px_rgba(91,33,231,0.02)]">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
