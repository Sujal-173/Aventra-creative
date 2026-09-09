"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Gauge, HeadphonesIcon, Layers } from "lucide-react";

const STATS = [
  { icon: Layers, value: 10, suffix: "+", label: "Projects Completed" },
  { icon: Award, value: 100, suffix: "%", label: "Client Satisfaction" },
  { icon: Clock, value: 3, suffix: "+", label: "Years Experience" },
  { icon: Gauge, value: 95, suffix: "+", label: "PageSpeed Score" },
  { icon: HeadphonesIcon, value: null, suffix: "24/7", label: "Support Available" },
];

function StatValue({ value, suffix }: { value: number | null; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === null) return;
    const duration = 1000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {value === null ? suffix : `${display}${suffix}`}
    </span>
  );
}

export function MiniStatsBar() {
  return (
    <div className="card grid grid-cols-2 gap-6 p-6 sm:grid-cols-3 lg:grid-cols-5 lg:p-8">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="flex items-center gap-3"
        >
          <s.icon className="h-5 w-5 shrink-0" style={{ color: "var(--accent)" }} />
          <div>
            <p className="font-display text-lg font-bold leading-tight text-[var(--ink)]">
              <StatValue value={s.value} suffix={s.suffix} />
            </p>
            <p className="text-[11px] leading-tight text-[var(--ink-muted)]">{s.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
