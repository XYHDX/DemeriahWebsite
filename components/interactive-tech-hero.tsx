"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Globe, Linkedin, Github, ChevronDown, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { hero, ui, site } from "@/lib/content"

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function InteractiveTechHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationFrameRef = useRef<number>()
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const { t } = useLanguage()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const styles = getComputedStyle(document.documentElement)
    const particleRGB = (styles.getPropertyValue("--hero-particle").trim() || "14, 77, 64")
    const linkRGB = (styles.getPropertyValue("--hero-link").trim() || "168, 132, 61")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(window.innerHeight, 640)
    }
    resize()
    window.addEventListener("resize", resize)

    const particleCount = 90
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.25,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mouse = mouseRef.current
      const maxDist = 200

      particles.forEach((p, i) => {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist
          p.vx -= (dx / dist) * force * 0.02
          p.vy -= (dy / dist) * force * 0.02
        }
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.99
        p.vy *= 0.99
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleRGB}, ${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j]
          const dx2 = p.x - o.x
          const dy2 = p.y - o.y
          const d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
          if (d2 < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(o.x, o.y)
            ctx.strokeStyle = `rgba(${particleRGB}, ${0.12 * (1 - d2 / 120)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }

        if (dist < maxDist) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${linkRGB}, ${0.35 * (1 - dist / maxDist)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160)
      glow.addColorStop(0, `rgba(${particleRGB}, 0.14)`)
      glow.addColorStop(0.5, `rgba(${linkRGB}, 0.05)`)
      glow.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [mounted, resolvedTheme])

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />

      {/* faint grid */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(color-mix(in srgb, var(--accent) 7%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--accent) 7%, transparent) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 78%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-1.5 mb-7 text-[13px] text-dim"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--accent-3)", boxShadow: "0 0 0 0 rgba(207,58,74,.5)", animation: "yd-pulse 2s infinite" }}
          />
          {t(hero.badge)}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-[clamp(40px,7vw,76px)] font-black leading-[1.05] tracking-[-0.03em] text-text"
        >
          <span className="block">{t(hero.firstName)}</span>
          <span className="block text-accent">{t(hero.lastName)}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-[clamp(17px,2.2vw,23px)] font-medium text-dim"
        >
          {t(hero.role)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-dim"
        >
          {t(hero.bio)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-soft"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" /> {t(hero.location)}
          </span>
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4 text-accent" /> {site.email}
          </a>
          <a href={site.websiteUrl} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
            <Globe className="w-4 h-4 text-accent" /> {site.website}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-3">
            <a href={site.socials.linkedin} aria-label="LinkedIn" className="grid place-items-center w-11 h-11 rounded-full border border-border-strong text-text hover:bg-accent hover:text-white hover:border-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={site.socials.github} aria-label="GitHub" className="grid place-items-center w-11 h-11 rounded-full border border-border-strong text-text hover:bg-accent hover:text-white hover:border-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={site.socials.x} aria-label="X" className="grid place-items-center w-11 h-11 rounded-full border border-border-strong text-text hover:bg-accent hover:text-white hover:border-accent transition-colors">
              <XIcon className="w-[18px] h-[18px]" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3 font-semibold hover:-translate-y-0.5 transition-transform" style={{ boxShadow: "var(--shadow-glow)" }}>
              {t(ui.getInTouch)}
            </a>
            <a href={site.cvPath} download className="inline-flex items-center gap-2 rounded-full border border-border-strong text-text px-6 py-3 font-semibold hover:border-accent hover:text-accent transition-colors">
              <Download className="w-4 h-4" />
              {t(ui.downloadCV)}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center gap-2 text-soft">
          <span className="text-[11px] uppercase tracking-[0.3em]">{t(ui.scroll)}</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
