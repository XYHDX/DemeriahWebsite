"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUp, Linkedin, Github, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { footer, nav, site, ui } from "@/lib/content"

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socials = [
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "GitHub", href: site.socials.github, Icon: Github },
  { label: "X", href: site.socials.x, Icon: XIcon },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { t } = useLanguage()

  return (
    <footer ref={ref} className="border-t border-border px-6" style={{ backgroundColor: "var(--bg-elev)" }}>
      <div className="mx-auto max-w-6xl py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="md:col-span-6">
            <h3 className="text-2xl font-black tracking-[0.12em] text-text">
              DEMERIAH<span className="text-accent">.</span>
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-dim">{t(footer.tagline)}</p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="grid place-items-center w-10 h-10 rounded-full border border-border-strong text-dim hover:bg-accent hover:text-white hover:border-accent transition-colors">
                  <s.Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="md:col-span-3">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-soft mb-5">Navigation</h4>
            <ul className="space-y-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[14px] text-dim hover:text-accent transition-colors">{t(link.label)}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="md:col-span-3">
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-soft mb-5">{t(ui.getInTouch)}</h4>
            <a href={`mailto:${site.email}`} className="text-[14px] text-accent hover:underline break-words">{site.email}</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-6 flex items-center gap-2 text-[14px] text-soft hover:text-accent transition-colors group">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> {t(ui.backToTop)}
            </button>
          </motion.div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-[13px] text-soft">{t(footer.copyright)}</p>
        </div>
      </div>
    </footer>
  )
}
