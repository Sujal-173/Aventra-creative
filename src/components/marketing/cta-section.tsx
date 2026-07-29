import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-dark)] px-8 py-20 text-center text-white sm:px-16 shadow-[var(--shadow-lg)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(circle at center, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 75%)",
          }}
        />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20 blur-[110px]"
          style={{ background: "var(--accent)" }}
        />
        <div className="relative">
          <span className="eyebrow justify-center">Ready to collaborate</span>
          <h2
            className="mx-auto mt-4 max-w-2xl font-display font-semibold tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Your competitors already have a website. Give yours a reason to win.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/60">
            Share your business goals and we&rsquo;ll recommend how to turn your digital presence into a growth engine.
          </p>
          <Link href="/contact" className="btn-primary mt-9 !px-7">
            Book a consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
