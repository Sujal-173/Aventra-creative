"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Briefcase, Star, UserCheck, Users } from "lucide-react";
import Link from "next/link";

const TRUST_LOGOS = ["Google", "Microsoft", "Webflow", "Notion", "Slack", "Stripe"];

const STATS = [
  { icon: Users, value: "8+", label: "Happy Clients" },
  { icon: Briefcase, value: "10+", label: "Projects Completed" },
  { icon: UserCheck, value: "1+", label: "Years Experience" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
];

function MagneticButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setPos({
          x: (e.clientX - rect.left - rect.width / 2) * 0.3,
          y: (e.clientY - rect.top - rect.height / 2) * 0.3,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={className + " transition-transform duration-200 ease-out"}
    >
      {children}
    </Link>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-32 lg:pb-24 lg:pt-36">
      {/* Ambient purple glow, low-cost CSS gradients — no image weight on LCP */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 -z-0 h-[600px] w-[600px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 -z-0 h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
        style={{ background: "var(--accent-blue)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="label-mono mb-4 text-[var(--primary)]">We build digital experiences</p>
            <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.02] tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)" }}>
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="block"
              >
                We Build
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="block"
                style={{ background: "linear-gradient(135deg, var(--primary-glow), var(--primary))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
              >
                Digital Experiences.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--ink-muted)]"
            >
              We help businesses grow online with modern websites, SEO, and digital
              solutions that deliver real results.
            </motion.p>

            {/* Group C: flex-col on mobile to prevent 360px overflow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <MagneticButton
                href="/contact"
                className="group flex items-center gap-2 rounded-lg text-sm font-medium text-white"
              >
                <span
                  className="flex items-center gap-2 rounded-lg px-5 py-3"
                  style={{ background: "linear-gradient(135deg, var(--primary-glow), var(--primary))" }}
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </MagneticButton>
              <MagneticButton
                href="/portfolio"
                className="group flex items-center gap-2 rounded-lg border border-[var(--line-dark)] bg-white px-5 py-3 text-sm font-medium text-[var(--ink)] shadow-sm hover:border-[var(--primary)]"
              >
                View Our Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </motion.div>

            {/* Group D: Wrap trust logos in <ul><li> for semantic list (WCAG 1.3.1) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <p className="label-mono text-zinc-600">Trusted by businesses worldwide</p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Trusted by">
                {TRUST_LOGOS.map((name) => (
                  <li key={name} className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-zinc-600">
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.72 }}
              className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
            >
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-[var(--line)] bg-white p-3 shadow-[var(--shadow-sm)] sm:p-3.5">
                  <s.icon className="h-4 w-4 text-[var(--primary-glow)]" />
                  <div className="mt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--ink)]">{s.value}</div>
                  <div className="text-[11px] leading-tight text-zinc-500">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <NetworkMark />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Founder-led visual with the brand treatment from the supplied direction. */
function NetworkMark() {
  return (
    <div className="relative flex aspect-[4/3.4] w-full items-center justify-center overflow-hidden rounded-3xl border border-[var(--line)] bg-[linear-gradient(145deg,#f9f7ff_0%,#eee8ff_65%,#ddd1ff_100%)] shadow-[var(--shadow-lg)]">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(to_right,#6d42eb_1px,transparent_1px),linear-gradient(to_bottom,#6d42eb_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Ambient glow, centered behind the logo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[70px]"
        style={{ background: "radial-gradient(circle, #9b7aff, transparent 70%)" }}
      />

      {/* Logo, animated and centered within the card */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-[70%] w-[60%] items-center justify-center"
      >
        <Image
          src="/images/logo-icon.png"
          alt="Aventra Creative logo"
          fill
          className="object-contain drop-shadow-[0_20px_35px_rgba(62,31,128,0.24)]"
          sizes="(max-width: 1024px) 100vw, 560px"
          priority
        />
      </motion.div>

      {/* Decorative floating chips */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 top-8 h-8 w-8 rounded-lg border border-[var(--primary)]/20 bg-white/70 backdrop-blur"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-10 left-8 h-5 w-5 rounded-md border border-[var(--primary)]/20 bg-white/70 backdrop-blur"
      />
    </div>
  );
}