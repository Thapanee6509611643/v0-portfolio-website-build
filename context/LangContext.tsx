"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Lang = "en" | "th"

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  // โหลดภาษาจาก localStorage เมื่อ mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang | null
    if (saved === "en" || saved === "th") {
      setLangState(saved)
    }
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem("portfolio-lang", newLang)
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
