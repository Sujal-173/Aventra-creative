"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function SiteExperience() {
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let raf = 0;
    const updateScroll = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (event: PointerEvent) => {
      if (!glowRef.current) return;
      glowRef.current.animate(
        { transform: `translate3d(${event.clientX - 220}px, ${event.clientY - 220}px, 0)` },
        { duration: 850, fill: "forwards", easing: "cubic-bezier(.16,1,.3,1)" },
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion]);

  return (
    <>
      <div ref={progressRef} className="site-progress" aria-hidden="true" />
      {!reduceMotion && <div ref={glowRef} className="cursor-ambient" aria-hidden="true" />}
    </>
  );
}
