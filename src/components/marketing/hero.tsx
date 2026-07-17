"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MousePointer2, Star, Zap } from "lucide-react";
import Link from "next/link";

/**
 * MagneticButton
 * Uses a spring instead of a raw transform so the pull toward the cursor
 * and the snap-back on leave both feel physical rather than linear.
 */
function MagneticButton({
  children,
  className,
  href,
  strength = 0.3,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  return (
    <motion.div style={{ x, y }} whileTap={{ scale: 0.96 }}>
      <Link
        href={href}
        ref={ref}
        onMouseMove={(e) => {
          if (reduceMotion) return;
          const el = ref.current;
          if (!el) return;
          const rect = el.getBoundingClientRect();
          x.set((e.clientX - rect.left - rect.width / 2) * strength);
          y.set((e.clientY - rect.top - rect.height / 2) * strength);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className={className}
      >
        {children}
      </Link>
    </motion.div>
  );
}

const SERVICES = ["Web Design", "Development", "Brand Systems", "Growth"];

const lineVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const wordVariants: Variants = {
  hidden: { y: "110%", rotate: 2 },
  visible: {
    y: "0%",
    rotate: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

// Splits a line into words, each masked in its own overflow-hidden box,
// so words slide up into place independently rather than the whole
// line fading in at once. A tiny rotate on entry keeps it from feeling
// mechanical.
//
// `gradient` applies the brand gradient text treatment directly to each
// word's own element (not an ancestor) — background-clip: text only
// clips against text painted by that exact element, so putting the
// gradient on a wrapper with no text of its own renders nothing.
function AnimatedLine({
  text,
  delay = 0,
  gradient = false,
}: {
  text: string;
  delay?: number;
  gradient?: boolean;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={lineVariants}
      transition={{ delayChildren: delay }}
      className="block"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.3em]">
          <motion.span
            variants={wordVariants}
            className="inline-block"
            style={
              gradient
                ? {
                    backgroundImage:
                      "linear-gradient(135deg, var(--primary-glow), var(--primary))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                  }
                : undefined
            }
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the ambient glows — subtle, so it reads as
  // depth rather than a distraction while reading the headline.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const glowOneY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120]);
  const glowTwoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--bg)] pb-24 pt-32 lg:pb-32 lg:pt-40"
    >
      {/* ambient glows, parallaxed against scroll */}
      <motion.div
        style={{ y: glowOneY }}
        className="pointer-events-none absolute -top-40 left-1/4 -z-0 h-[600px] w-[600px] rounded-full opacity-25 blur-[120px]"
      >
        <div className="h-full w-full rounded-full" style={{ background: "var(--primary)" }} />
      </motion.div>
      <motion.div
        style={{ y: glowTwoY }}
        className="pointer-events-none absolute right-0 top-0 -z-0 h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
      >
        <div className="h-full w-full rounded-full" style={{ background: "var(--accent-blue)" }} />
      </motion.div>

      {/* fine grain overlay — keeps the dark field from feeling flat/plastic */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div
        style={{ opacity: contentFade }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="label-mono mb-5 flex items-center gap-2 text-[var(--primary)]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              </span>
              Aventra Creative — Web Design &amp; Development
            </motion.p>

            <h1
              className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[0.98] tracking-tight text-[var(--ink)]"
              style={{ fontSize: "clamp(2.8rem, 5.7vw, 4.6rem)" }}
            >
              <AnimatedLine text="We build digital" delay={0.1} />
              <AnimatedLine text="experiences that convert." delay={0.24} gradient />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--ink-muted)]"
            >
              We&apos;re a small studio that designs, builds, and ships fast,
              high-craft websites — for founders and teams who need to look
              like a bigger company than they are, without the agency
              overhead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <MagneticButton
                href="/contact"
                className="group flex items-center gap-2 rounded-full text-sm font-medium text-white"
              >
                <span
                  className="flex items-center gap-2 rounded-full px-5 py-3 shadow-[0_8px_24px_-8px_var(--primary)]"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary-glow), var(--primary))",
                  }}
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </MagneticButton>
              <MagneticButton
                href="/portfolio"
                className="group flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] px-5 py-3 text-sm font-medium text-[var(--ink)] shadow-sm hover:border-[var(--primary)]"
              >
                View Our Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </motion.div>

            {/* trust row — a credibility signal directly under the CTAs.
                The second stat mirrors the "Shipped in 0.8s" payoff inside
                the BuildPanel, so the panel's punchline gets reinforced in
                text instead of only living inside the animation. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className="h-6 w-6 rounded-full border-2 border-[var(--bg)]"
                      style={{
                        background: `linear-gradient(135deg, var(--primary-glow), var(--accent-blue))`,
                        opacity: 1 - n * 0.14,
                      }}
                    />
                  ))}
                </div>
                <div className="ml-2 flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star
                      key={n}
                      className="h-3 w-3 fill-[var(--primary)] text-[var(--primary)]"
                    />
                  ))}
                </div>
                <span className="text-[12px] font-medium text-[var(--ink-muted)]">
                  8+ founders shipped with us
                </span>
              </div>
              <span className="h-3 w-px bg-[var(--line)]" />
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" style={{ color: "var(--primary)" }} />
                <span className="text-[12px] font-medium text-[var(--ink-muted)]">
                  Every build ships sub-second
                </span>
              </div>
              <span className="h-3 w-px bg-[var(--line)]" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                {SERVICES.map((s, i) => (
                  <span key={s} className="flex items-center gap-3">
                    {s}
                    {i < SERVICES.length - 1 && (
                      <span className="h-1 w-1 rounded-full bg-[var(--line)]" />
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <BuildPanel />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

type Phase = "skeleton" | "filled" | "click" | "metric";

// The hero's signature moment: a mock browser window that assembles
// itself from a wireframe into a finished, polished page, then "ships"
// with a click — a literal, on-brand stand-in for "we build fast,
// premium digital experiences" instead of a decorative floating badge.
function BuildPanel() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("skeleton");

  useEffect(() => {
    if (reduceMotion) {
      setPhase("filled");
      return;
    }
    const sequence: { phase: Phase; hold: number }[] = [
      { phase: "skeleton", hold: 1000 },
      { phase: "filled", hold: 1500 },
      { phase: "click", hold: 700 },
      { phase: "metric", hold: 1800 },
    ];
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const run = () => {
      setPhase(sequence[i].phase);
      timeout = setTimeout(() => {
        i = (i + 1) % sequence.length;
        run();
      }, sequence[i].hold);
    };
    run();
    return () => clearTimeout(timeout);
  }, [reduceMotion]);

  const built = phase !== "skeleton";
  const clicking = phase === "click" || phase === "metric";

  return (
    <div className="relative">
      {/* soft halo behind the panel so it lifts off the page instead of
          sitting flush against the background glows */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-glow), var(--accent-blue))",
        }}
      />

      <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg-elevated)] shadow-[var(--shadow-lg)]">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--surface)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <div className="ml-3 flex-1 rounded-md bg-[var(--bg)] px-3 py-1 text-[11px] text-[var(--ink-muted)]">
            aventracreative.com
          </div>
        </div>

        {/* canvas */}
        <div className="relative flex h-[calc(100%-42px)] flex-col justify-center gap-4 p-8">
          {/* nav row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5 shrink-0 opacity-90">
                <Image
                  src="/images/logo-icon.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <motion.div
                animate={{ width: built ? 60 : 28 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-2 rounded-full bg-[var(--line)]"
              />
            </div>
            <div className="flex gap-2">
              {[0, 1, 2].map((n) => (
                <motion.div
                  key={n}
                  animate={{ width: built ? 32 : 20 }}
                  transition={{ duration: 0.4, delay: n * 0.05 }}
                  className="h-2 rounded-full bg-[var(--line)]"
                />
              ))}
            </div>
          </div>

          {/* headline block */}
          <div className="space-y-2 pt-2">
            <motion.div
              animate={{ width: built ? "85%" : "60%" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="h-4 rounded-full bg-[var(--line)]"
            />
            <motion.div
              animate={{ width: built ? "55%" : "40%" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-4 rounded-full bg-[var(--line)]"
            />
          </div>

          {/* image block — crossfades from flat skeleton to brand gradient,
              with a slow ambient drift once built so the panel never goes
              fully static */}
          <div className="relative h-20 w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]">
            <motion.div
              initial={false}
              animate={{
                opacity: built ? 1 : 0,
                backgroundPosition: built ? ["0% 50%", "100% 50%"] : "0% 50%",
              }}
              transition={{
                opacity: { duration: 0.6 },
                backgroundPosition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary-glow), var(--accent-blue), var(--primary))",
                backgroundSize: "200% 200%",
              }}
            />
          </div>

          {/* CTA row with cursor that "ships" the page */}
          <div className="relative flex items-center justify-between pt-2">
            <motion.div
              animate={{ width: built ? 96 : 56 }}
              transition={{ duration: 0.4 }}
              className="relative h-8 overflow-hidden rounded-full bg-[var(--line)]"
            >
              <motion.div
                initial={false}
                animate={{ opacity: built ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary-glow), var(--primary))",
                }}
              />
              <AnimatePresence>
                {clicking && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 2.4, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white"
                  />
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              animate={{
                left: clicking ? "20%" : "68%",
                top: clicking ? "50%" : "8%",
                scale: clicking ? 0.85 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-[var(--ink)]"
            >
              <MousePointer2 className="h-4 w-4 drop-shadow" fill="var(--ink)" />
            </motion.div>

            <AnimatePresence>
              {phase === "metric" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="absolute -top-8 right-0 rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3 py-1.5 text-[11px] font-medium text-[var(--ink)] shadow-[var(--shadow-sm)]"
                >
                  Shipped in 0.8s
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}