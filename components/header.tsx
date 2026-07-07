"use client"

import { useEffect, useState } from "react"
import { Menu, X, Download, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { nav, ui, site } from "@/lib/content"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { lang, toggle: toggleLang, t } = useLanguage()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset"
  }, [menuOpen])

  const isDark = mounted ? resolvedTheme === "dark" : false
  const toggleTheme = () => setTheme(isDark ? "light" : "dark")
  const otherLangLabel = lang === "en" ? "العربية" : "English"

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border backdrop-blur-xl" : "border-b border-transparent"
        }`}
        style={{ backgroundColor: scrolled ? "var(--nav-bg)" : "transparent" }}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between h-[68px] gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <span className="text-xl md:text-2xl font-black tracking-[0.14em] text-text">
              DEMERIAH<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dim hover:text-accent transition-colors"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleLang}
              className="rounded-full border border-border-strong px-3.5 py-2 text-[13px] font-semibold text-text hover:border-accent hover:text-accent transition-colors"
              aria-label="Switch language"
            >
              {otherLangLabel}
            </button>

            <button
              onClick={toggleTheme}
              className="grid place-items-center w-[38px] h-[38px] rounded-full border border-border-strong text-text hover:border-accent hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>

            <a
              href={site.cvPath}
              download
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-sm font-semibold hover:-translate-y-0.5 transition-transform"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <Download className="w-4 h-4" />
              {t(ui.downloadCV)}
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden grid place-items-center w-[38px] h-[38px] rounded-full border border-border-strong text-text hover:border-accent hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ backgroundColor: "var(--bg)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-7">
              {nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-extrabold text-text hover:text-accent transition-colors"
                >
                  {t(link.label)}
                </a>
              ))}
              <a
                href={site.cvPath}
                download
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-lg font-bold"
              >
                <Download className="w-5 h-5" />
                {t(ui.downloadCV)}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
