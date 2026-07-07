"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { about, stats, ui } from "@/lib/content"

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-28 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
            <User className="w-4 h-4" /> {t(about.label)}
          </span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-text">
            {t(about.titleLead)} <span className="text-accent">{t(about.titleAccent)}</span>
          </h2>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-dim">
                {t(p)}
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {about.pills.map((pill, i) => (
              <span key={i} className="rounded-full border border-border bg-card px-3.5 py-2 text-[13px] text-dim">
                {t(pill)}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex rounded-full bg-accent text-white px-6 py-3 font-semibold hover:-translate-y-0.5 transition-transform" style={{ boxShadow: "var(--shadow-glow)" }}>
              {t(ui.letsConnect)}
            </a>
            <a href="#experience" className="inline-flex rounded-full border border-border-strong text-text px-6 py-3 font-semibold hover:border-accent hover:text-accent transition-colors">
              {t(ui.viewExperience)}
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 hover:border-border-strong hover:bg-card-hover transition-colors">
              <div className="text-[clamp(28px,4vw,40px)] font-black text-accent leading-none">{s.value}</div>
              <div className="mt-2 text-[13px] uppercase tracking-wide text-dim">{t(s.label)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
