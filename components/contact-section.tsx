"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Send, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { contact, ui, site } from "@/lib/content"

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const cardIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  x: XIcon,
}

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { t } = useLanguage()

  const mountedAt = useRef(0)
  const [sending, setSending] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    mountedAt.current = Date.now()
  }, [])

  // tick the cooldown down to zero
  useEffect(() => {
    if (cooldown <= 0) return
    const id = setTimeout(() => setCooldown((c) => c - 1), 1000)
    return () => clearTimeout(id)
  }, [cooldown])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sending || cooldown > 0) return
    const form = e.currentTarget

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      // anti-spam signals
      botcheck: (form.elements.namedItem("botcheck") as HTMLInputElement)?.value ?? "",
      elapsed: Date.now() - (mountedAt.current || Date.now()),
    }

    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (res.status === 429) {
        const data = await res.json().catch(() => ({}))
        const wait = Math.min(Math.max(Number(data?.retryAfter) || 30, 5), 3600)
        setCooldown(wait)
        alert(t(ui.rateLimited))
      } else if (res.ok) {
        alert(t(ui.messageSent))
        form.reset()
        setCooldown(30) // enforce a client-side pause between sends too
      } else {
        alert(t(ui.messageFailed))
      }
    } catch {
      alert(t(ui.messageError))
    } finally {
      setSending(false)
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-bg px-4 py-3 text-text placeholder:text-soft focus:outline-none focus:border-accent transition-colors"

  const disabled = sending || cooldown > 0
  const buttonLabel = sending ? t(ui.sending) : cooldown > 0 ? `${t(ui.pleaseWait)} ${cooldown}s` : t(ui.sendMessage)

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-28 px-6 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
            <Mail className="w-4 h-4" /> {t(contact.label)}
          </span>
          <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.02em] text-text">
            {t(contact.titleLead)} <span className="text-accent">{t(contact.titleAccent)}</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[17px] text-dim">{t(contact.intro)}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-7 space-y-5"
          >
            {/* Honeypot — hidden from humans, tempting to bots. Leave empty. */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
              <label htmlFor="botcheck">Company</label>
              <input id="botcheck" name="botcheck" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-[13px] font-medium text-dim">{t(ui.formName)}</label>
                <input id="name" name="name" type="text" required maxLength={100} placeholder={t(ui.formNamePlaceholder)} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-[13px] font-medium text-dim">{t(ui.formEmail)}</label>
                <input id="email" name="email" type="email" required maxLength={150} placeholder={t(ui.formEmailPlaceholder)} className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-[13px] font-medium text-dim">{t(ui.formSubject)}</label>
              <input id="subject" name="subject" type="text" maxLength={150} placeholder={t(ui.formSubjectPlaceholder)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-[13px] font-medium text-dim">{t(ui.formMessage)}</label>
              <textarea id="message" name="message" required rows={5} maxLength={5000} placeholder={t(ui.formMessagePlaceholder)} className={`${inputClass} resize-none`} />
            </div>
            <button
              type="submit"
              disabled={disabled}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-white px-6 py-3.5 font-semibold hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              {!sending && cooldown === 0 && <Send className="w-5 h-5" />}
              {buttonLabel}
            </button>
          </motion.form>

          {/* Contact cards */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid sm:grid-cols-2 gap-4 content-start">
            {contact.cards.map((c) => {
              const Icon = cardIcons[c.key] ?? Mail
              return (
                <a key={c.key} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="rounded-2xl border border-border bg-card p-6 text-center hover:border-accent hover:-translate-y-1 transition-all">
                  <span className="mx-auto mb-3 grid place-items-center w-12 h-12 rounded-xl text-accent" style={{ backgroundColor: "var(--chip-bg)" }}>
                    <Icon className="w-6 h-6" />
                  </span>
                  <div className="text-[12px] uppercase tracking-[0.1em] text-soft">{t(c.label)}</div>
                  <div className="mt-1 text-[15px] font-semibold text-text break-words">{c.value}</div>
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
