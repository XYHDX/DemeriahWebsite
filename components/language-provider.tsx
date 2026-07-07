"use client"

import React, { createContext, useCallback, useContext, useEffect, useState } from "react"

export type Lang = "en" | "ar"

type Bilingual<T> = { en: T; ar: T }

type LanguageContextValue = {
  lang: Lang
  dir: "ltr" | "rtl"
  setLang: (l: Lang) => void
  toggle: () => void
  /** Pick the value matching the active language from a { en, ar } pair. */
  t: <T,>(pair: Bilingual<T>) => T
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  // Restore persisted language on mount.
  useEffect(() => {
    try {
      const stored = localStorage.getItem("yd-lang")
      if (stored === "ar" || stored === "en") setLangState(stored)
    } catch {
      /* localStorage unavailable — keep default */
    }
  }, [])

  // Reflect language on <html>/<body> and persist it.
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    document.body.setAttribute("dir", dir)
    try {
      localStorage.setItem("yd-lang", lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggle = useCallback(() => setLangState((p) => (p === "en" ? "ar" : "en")), [])
  const t = useCallback(
    <T,>(pair: Bilingual<T>): T => (lang === "ar" ? pair.ar : pair.en),
    [lang],
  )

  return (
    <LanguageContext.Provider value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
