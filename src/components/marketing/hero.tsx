"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Gauge, Layers, Users } from "lucide-react";
import Link from "next/link";

function HeroButton({ children, className, href }: { children: React.ReactNode; className: string; href: string }) {
  return (
    <Link
      href={href}
      className={
        "transition-transform duration-200 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] " +
        className
      }
    >
      {children}
    </Link>
  );
}

const lineVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function AnimatedLine({ text, delay = 0, accent = false }: { text: string; delay?: number; accent?: boolean }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        transition={{ delay }}
        className="inline-block"
        style={accent ? { color: "var(--accent)" } : undefined}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-44">
      {/* Signature: a single warm signal-glow anchored top-left — the one
          bold accent in an otherwise disciplined near-black canvas */}
      <div
        className="pointer-events-none absolute -top-52 left-[-10%] -z-0 h-[640px] w-[640px] rounded-full opacity-[0.14] blur-[130px]"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="pointer-events-none absolute right-[-8%] top-24 -z-0 h-[420px] w-[420px] rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: "var(--accent-2)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-6"
            >
              Founder-led digital agency · Indore, India
            </motion.p>

            <h1
              className="font-display font-semibold leading-[1.0] tracking-tight text-[var(--ink)]"
              style={{ fontSize: "clamp(2.75rem, 5.6vw, 4.5rem)" }}
            >
              <AnimatedLine text="Websites built" delay={0.08} />
              <AnimatedLine text="to rank, load fast," delay={0.18} />
              <AnimatedLine text="and convert." delay={0.3} accent />
            </h1>

            <motion.p
              data-speakable="summary"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 max-w-lg text-[16px] leading-relaxed text-[var(--ink-muted)]"
            >
              Aventra Creative is a founder-led digital agency in Indore that designs,
              builds, and ships premium websites, SEO, and growth systems for
              ambitious businesses in India and worldwide.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <HeroButton href="/contact" className="btn-primary group text-[15px] !px-6 !py-3.5">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </HeroButton>
              <HeroButton href="/portfolio" className="btn-secondary group text-[15px] !px-6 !py-3.5">
                View our work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </HeroButton>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex items-center gap-3 border-t border-[var(--line)] pt-6 text-[13px] text-[var(--ink-muted)]"
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              Currently taking on 2 new projects for Q3 2026
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <HeroPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Signature visual: a "growth signal" panel — an animated line chart that
// draws itself on load, standing in for what the agency actually sells
// (measurable growth), instead of a generic gradient screenshot mockup.
function HeroPanel() {
  const reduceMotion = useReducedMotion();
  const metrics = [
    { icon: Gauge, value: "95+", label: "PageSpeed" },
    { icon: Layers, value: "10+", label: "Projects shipped" },
    { icon: Users, value: "100%", label: "Client satisfaction" },
  ];

  const points = "0,90 40,78 80,82 120,58 160,64 200,36 240,42 280,14 320,20";

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] shadow-[var(--shadow-lg)]">
        <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3.5">
          <div className="flex items-center gap-2 text-[11px] text-[var(--ink-faint)]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--success)" }} />
            Organic traffic — last 90 days
          </div>
          <span className="label-mono text-[10px] text-[var(--accent)]">+164%</span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden px-5 py-6">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />
          <svg viewBox="0 0 320 100" className="relative h-full w-full" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.polygon
              points={`0,100 ${points} 320,100`}
              fill="url(#heroFill)"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <motion.polyline
              points={points}
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-3 divide-x divide-[var(--line)] border-t border-[var(--line)]">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-1 px-3 py-5 text-center">
              <m.icon className="h-4 w-4" style={{ color: "var(--accent)" }} />
              <span className="font-display text-xl font-bold text-[var(--ink)]">{m.value}</span>
              <span className="text-[11px] text-[var(--ink-faint)]">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
