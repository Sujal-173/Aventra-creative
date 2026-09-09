"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Megaphone, Palette, Search, ShoppingBag, Wrench } from "lucide-react";
import type { Service } from "@/lib/data/services";

const icons = { code: Code2, search: Search, palette: Palette, megaphone: Megaphone, wrench: Wrench, "shopping-bag": ShoppingBag };

export function CoreServices({ services }: { services: Service[] }) {
  return (
    <section className="aw-section relative overflow-hidden">
      <div className="aw-container">
        <div className="section-heading">
          <div><span className="eyebrow">Capabilities</span><h2>Everything your digital presence needs to <em>move forward.</em></h2></div>
          <p>Strategy, creativity and engineering under one roof—built around outcomes, not deliverables.</p>
        </div>

        <div className="service-grid mt-14">
          {services.slice(0, 6).map((service, index) => {
            const Icon = icons[service.icon] ?? Code2;
            return (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .65, delay: index * .055, ease: [0.16, 1, 0.3, 1] }} className={index === 0 || index === 3 ? "service-wide" : ""}>
                <Link href={`/services/${service.slug}`} className="service-card group">
                  <div className="service-index">0{index + 1}</div>
                  <div className="service-icon"><Icon className="h-5 w-5" /></div>
                  <div className="mt-auto">
                    <h3>{service.name}</h3>
                    <p>{service.shortDesc}</p>
                  </div>
                  <div className="service-link">Discover capability <ArrowUpRight className="h-4 w-4" /></div>
                  <div className="service-wash" style={{ background: service.color }} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
