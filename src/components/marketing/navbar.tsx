"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  { name: "Web Development", href: "/services/web-development", blurb: "Fast, scalable, custom-built" },
  { name: "E-commerce", href: "/services/e-commerce", blurb: "Stores built to convert" },
  { name: "SEO & Optimization", href: "/services/seo", blurb: "Ranked, measured, growing" },
  { name: "Branding & Design", href: "/services/branding", blurb: "Identity that holds up" },
  { name: "Digital Marketing", href: "/services/digital-marketing", blurb: "Campaigns tied to revenue" },
  { name: "Maintenance", href: "/services/maintenance", blurb: "Ongoing support & updates" },
];

const NAV_LINKS = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("aventra-theme");
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("aventra-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => dialogRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.clearTimeout(focusTimer);
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled ? "backdrop-blur-md border-[var(--line)]" : "backdrop-blur-sm border-transparent",
      )}
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" style={{ height: "4.25rem" }}>
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Aventra Creative — home">
          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-md bg-[var(--accent-soft)] ring-1 ring-[var(--line)] transition-transform group-hover:scale-105">
            <Image src="/images/logo-icon.png" alt="Aventra Creative logo" fill className="object-contain p-1" sizes="32px" priority />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[14px] font-bold tracking-tight text-[var(--ink)]">AVENTRA</span>
            <span className="label-mono text-[9px] text-[var(--accent)]">CREATIVE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false);
            }}
          >
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={cn(
                "flex items-center gap-1 rounded-md px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                pathname.startsWith("/services")
                  ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]",
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                >
                  <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] p-3 shadow-[var(--shadow-lg)]">
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="rounded-lg px-4 py-3 transition-colors hover:bg-[var(--surface)]"
                        >
                          <div className="text-sm font-medium text-[var(--ink)]">{s.name}</div>
                          <div className="mt-0.5 text-xs text-[var(--ink-muted)]">{s.blurb}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-1 border-t border-[var(--line)] px-4 py-2 pt-2">
                      <Link href="/services" onClick={() => setServicesOpen(false)} className="text-xs font-medium text-[var(--accent)] hover:underline">
                        View all services →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href + "/"));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-md px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                  isActive ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--ink-muted)] hover:text-[var(--ink)]",
                )}
              >
                {l.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] bg-transparent text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link href="/contact" className="btn-primary !py-2.5 !px-4 text-[13.5px]">
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] bg-transparent text-[var(--ink)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] bg-transparent text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 60,
              height: "100dvh",
              width: "100vw",
              background: "var(--bg)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(event) => {
              if (event.target === event.currentTarget) setMobileOpen(false);
            }}
          >
            <div ref={dialogRef} tabIndex={-1} className="flex flex-col" style={{ height: "100%" }}>
              <div className="flex items-center justify-between border-b border-[var(--line)] px-6" style={{ height: "4.25rem" }}>
                <span className="font-display font-semibold text-[var(--ink)]">Aventra Creative</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav id="mobile-navigation" className="flex flex-1 flex-col gap-1 px-6 py-6 overflow-y-auto" aria-label="Mobile">
                {[{ name: "Services", href: "/services" }, ...NAV_LINKS].map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "border-b border-[var(--line)] py-4 font-display text-2xl font-medium transition-colors",
                        isActive ? "text-[var(--accent)]" : "text-[var(--ink)] hover:text-[var(--accent)]",
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-6 w-full text-center">
                  Start a project
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
