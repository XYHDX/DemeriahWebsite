"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { awards } from "@/lib/content"

export default function AchievementsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { t } = useLanguage()

  return (
    <section id="achievements" ref={ref} className="relative py-24 md:py-28 px-6" style={{ backgroundColor: "var(--bg-elev)" }}>
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
            <Trophy className="w-4 h-4" /> {t(awards.label)}
          </span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.02em] text-text">
            {t(awards.titleLead)} <span className="text-accent">{t(awards.titleAccent)}</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[17px] text-dim">{t(awards.intro)}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.items.map((a, i) => {
            const loc = t(a.location)
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 hover:border-border-strong transition-all"
              >
                <span className="absolute top-0 inset-x-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: "var(--accent)" }} />
                <div className="text-[12px] font-bold tracking-[0.1em] text-accent">{a.year}</div>
                <h3 className="mt-2 text-[16px] font-bold leading-snug text-text">{t(a.title)}</h3>
                <p className="mt-1.5 text-[13px] text-dim">{t(a.org)}</p>
                {loc && <p className="mt-1 text-[12px] text-soft">{loc}</p>}
                <span className="mt-3 inline-block rounded-md px-2.5 py-1 text-[11px] font-bold" style={{ backgroundColor: "var(--chip-bg)", color: "var(--accent-2)" }}>
                  {t(a.prize)}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
