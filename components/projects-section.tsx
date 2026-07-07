"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Folder, Sun, Box, Rocket, Server, Cpu, Shield, Bot, ArrowRight, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { projects } from "@/lib/content"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sun: Sun,
  box: Box,
  rocket: Rocket,
  server: Server,
  cpu: Cpu,
  shield: Shield,
  bot: Bot,
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { t } = useLanguage()

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-28 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
            <Folder className="w-4 h-4" /> {t(projects.label)}
          </span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.02em] text-text">
            {t(projects.titleLead)} <span className="text-accent">{t(projects.titleAccent)}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] text-dim">{t(projects.intro)}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.items.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Bot
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 hover:-translate-y-1.5 hover:border-border-strong hover:bg-card-hover transition-all"
                style={{ transitionDuration: "300ms" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-xl text-accent" style={{ backgroundColor: "var(--chip-bg)" }}>
                    <Icon className="w-5 h-5" />
                  </span>
                  {p.badge && (
                    <span
                      className="rounded-full px-2.5 py-1 text-[11px] font-bold"
                      style={{ backgroundColor: "color-mix(in srgb, var(--accent-2) 16%, transparent)", color: "var(--accent-2)" }}
                    >
                      {t(p.badge)}
                    </span>
                  )}
                </div>

                <span className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">{t(p.category)}</span>
                <h3 className="mt-2 text-[19px] font-bold leading-snug text-text">{t(p.title)}</h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-dim">{t(p.desc)}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-md px-2 py-1 text-[11px] font-semibold text-soft" style={{ backgroundColor: "var(--chip-bg)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  {p.href && p.foot ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent hover:gap-2.5 transition-all">
                      {t(p.foot)} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : p.foot ? (
                    <span className="text-[13px] font-medium text-soft">{t(p.foot)}</span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-soft">
                      {t(projects.comingSoon)} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
