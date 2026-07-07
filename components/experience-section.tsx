"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { experience } from "@/lib/content"

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    <section id="experience" ref={ref} className="relative py-24 md:py-28 px-6" style={{ backgroundColor: "var(--bg-elev)" }}>
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
            <Briefcase className="w-4 h-4" /> {t(experience.label)}
          </span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.02em] text-text">
            {t(experience.titleLead)} <span className="text-accent">{t(experience.titleAccent)}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] text-dim">{t(experience.intro)}</p>
        </motion.div>

        <div>
          {experience.items.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex gap-5"
            >
              {/* marker column */}
              <div className="flex flex-col items-center">
                <span className="mt-1.5 w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: "var(--bg-elev)", border: "3px solid var(--accent)" }} />
                {i < experience.items.length - 1 && <span className="flex-1 w-px my-1" style={{ backgroundColor: "var(--accent)", opacity: 0.4 }} />}
              </div>

              {/* content */}
              <div className="flex-1 pb-10">
                <div className="rounded-2xl border border-border bg-card p-6 hover:border-border-strong hover:bg-card-hover transition-colors">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-soft mb-2.5">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{t(exp.location)}</span>
                  </div>
                  <h3 className="text-[19px] font-bold text-text">{t(exp.title)}</h3>
                  <p className="mt-0.5 text-[15px] font-semibold text-accent">
                    {t(exp.company)}
                    {exp.link && exp.linkLabel && (
                      <>
                        {" · "}
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                          {exp.linkLabel}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </>
                    )}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-dim">{t(exp.desc)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="rounded-md px-2.5 py-1 text-[11px] font-semibold text-accent" style={{ backgroundColor: "var(--chip-bg)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
