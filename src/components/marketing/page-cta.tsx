import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageCta({
  title = "Ready to move your project forward?",
  description = "Launch a refined digital experience backed by strategy, design, and measurable performance.",
  buttonText = "Get in touch",
  href = "/contact",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <section className="bg-[var(--bg)] px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[var(--line-strong)] px-8 py-10 sm:flex-row sm:items-center sm:px-12"
          style={{ background: "var(--bg-dark)" }}
        >
          <div>
            <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
            <p className="mt-1.5 text-sm text-white/60">{description}</p>
          </div>
          <Link href={href} className="btn-primary group shrink-0 !px-7">
            {buttonText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
