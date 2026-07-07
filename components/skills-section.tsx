"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Bot, CircuitBoard, Network, Crown, Wrench, GraduationCap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { skills, education } from "@/lib/content"

const icons = [Code2, Bot, CircuitBoard, Network, Crown, Wrench]

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-28 px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
            <Wrench className="w-4 h-4" /> {t(skills.label)}
          </span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.02em] text-text">
            {t(skills.titleLead)} <span className="text-accent">{t(skills.titleAccent)}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.groups.map((group, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-border-strong hover:bg-card-hover transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-10 h-10 rounded-xl text-accent" style={{ backgroundColor: "var(--chip-bg)" }}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-[14px] font-bold uppercase tracking-[0.08em] text-accent">{t(group.title)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-lg border border-border px-3 py-1.5 text-[13px] text-dim" style={{ backgroundColor: "var(--chip-bg)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-accent" />
            <h3 className="text-[22px] font-bold text-text">
              {t(education.titleLead)} <span className="text-accent">{t(education.titleAccent)}</span>
            </h3>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex flex-wrap justify-between items-start gap-3">
              <div>
                <h4 className="text-[19px] font-bold text-text max-w-xl">{t(education.degree)}</h4>
                <p className="mt-1 text-accent font-semibold">{t(education.school)}</p>
              </div>
              <span className="text-[13px] text-soft whitespace-nowrap">{education.years}</span>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-[12px] uppercase tracking-[0.15em] font-bold text-accent mb-2">{t(education.projectLabel)}</p>
              <p className="font-semibold text-text">{t(education.projectName)}</p>
              <p className="mt-2 text-[15px] text-dim">{t(education.projectDesc)}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
