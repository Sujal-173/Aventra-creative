"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

const words = ["Strategy.", "Design.", "Code.", "Growth."];

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -45]);

  return (
    <section ref={section} className="hero-shell">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid" />

      <div className="aw-container relative z-10 grid min-h-[min(900px,100svh)] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.08fr_.92fr] lg:pb-24 lg:pt-28">
        <motion.div style={{ y: copyY }}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, ease }}
            className="availability"
          >
            <span className="availability-dot" />
            Accepting two Q3 projects
            <span className="text-white/25">·</span>
            Indore → Worldwide
          </motion.div>

          <h1 className="hero-title" aria-label="Digital experiences designed to outperform">
            <span className="hero-line"><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: .85, delay: .05, ease }}>Digital experiences</motion.span></span>
            <span className="hero-line"><motion.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: .85, delay: .13, ease }}>designed to</motion.span></span>
            <span className="hero-line"><motion.span className="hero-accent" initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: .85, delay: .21, ease }}>outperform.</motion.span></span>
          </h1>

          <motion.p
            data-speakable="summary"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .42, ease }}
            className="mt-7 max-w-[590px] text-[17px] leading-8 text-white/58 sm:text-lg"
          >
            Aventra is an independent digital studio building high-converting websites,
            distinctive brands and growth systems for ambitious businesses.
          </motion.p>

          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .52, ease }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnetic strength={0.2}>
              <Link href="/contact" className="hero-primary group">
                Start your project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <Link href="/portfolio" className="hero-secondary group">
              Explore selected work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .7 }} className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/42">
            {["95+ PageSpeed", "SEO-ready builds", "Founder-led delivery"].map((item) => (
              <span key={item} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[var(--accent)]" />{item}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: visualY }} initial={reduceMotion ? false : { opacity: 0, scale: .96, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .22, ease }} className="hero-visual-wrap">
          <div className="hero-visual">
            <div className="visual-topbar">
              <div className="flex gap-1.5"><i /><i /><i /></div>
              <span>aventra / growth-system</span>
              <span className="live-label"><b />LIVE</span>
            </div>
            <div className="visual-stage">
              <div className="visual-kicker"><Sparkles className="h-3.5 w-3.5" /> BUILT FOR MOMENTUM</div>
              <div className="visual-word-stack">
                {words.map((word, i) => (
                  <motion.span key={word} initial={reduceMotion ? false : { opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55, delay: .55 + i * .09, ease }} className={i === words.length - 1 ? "active" : ""}>{word}</motion.span>
                ))}
              </div>
              <div className="visual-ring ring-one" />
              <div className="visual-ring ring-two" />
              <motion.div className="visual-signal" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}><span /></motion.div>
            </div>
            <div className="visual-metrics">
              <div><span>Performance</span><strong>95+</strong></div>
              <div><span>Organic growth</span><strong>+164%</strong></div>
              <div><span>Satisfaction</span><strong>100%</strong></div>
            </div>
          </div>
          <motion.div animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="floating-note">10+ launches<br/><span>and counting</span></motion.div>
        </motion.div>
      </div>

      <div className="hero-scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  );
}
