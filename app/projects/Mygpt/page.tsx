"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

// ============================================================
//  ✏️  CONTENT — แก้ข้อมูลทั้งหมดที่นี่ที่เดียว
// ============================================================
const content = {
  en: {
    title: "MyGPT",
    year: "2024",
    role: "Personal Project · Full-Stack · LLM",
    tagline: "My first hands-on experiment with LLM APIs — built in 3 days to understand how AI products actually work under the hood.",

    links: {
      github: "https://github.com/ThaLovelace/MyGPT",
      demo: "https://my-gpt-beta-pearl.vercel.app/",
    },

    statusTag: "Personal Experiment",

    tags: ["React", "Node.js", "Gemini API", "Prompt Engineering", "ImageKit", "Vercel"],

    context: {
      title: "Why I built this",
      body: "AI was everywhere, and I wanted to understand it from the inside — not just use it. So I found a tutorial, blocked off a weekend, and built a working chatbot from scratch. The goal wasn't a polished product. It was to learn how LLM APIs behave, how to structure prompts in code, and what it actually takes to ship a full-stack AI app.",
    },

    built: {
      title: "What I built",
      items: [
        { label: "Chat Interface", desc: "React frontend with full conversation state management — messages, history, and loading states." },
        { label: "Node.js Backend", desc: "API layer connecting the frontend to Gemini, handling prompt formatting and response streaming." },
        { label: "Prompt Engineering", desc: "Structured system prompts in code to control tone, context, and response format consistently." },
        { label: "Image Generation", desc: "Integrated ImageKit for image handling within the chat experience." },
        { label: "Deployed on Vercel", desc: "Full end-to-end deployment — from local dev to live URL." },
      ],
    },

    learned: {
      title: "What I actually learned",
      lessons: [
        {
          label: "LLM APIs aren't magic — they're interfaces",
          desc: "Once you see how a raw API call works, the mystery disappears. It's just structured text in, structured text out. Understanding this made everything after much easier.",
        },
        {
          label: "Prompt design is real engineering",
          desc: "The same question gets wildly different answers depending on how it's framed. Writing prompts in code taught me to think about context, constraints, and output format deliberately.",
        },
        {
          label: "State management matters in AI UIs",
          desc: "Managing conversation history, loading states, and error handling in a chat interface is more complex than it looks — and directly applied to later projects.",
        },
      ],
    },

    connection: "The patterns learned here — API integration, prompt structuring, async handling — became the foundation for the AI features in dCDT and Keeppook.",

    screenshots: {
      title: "App Screens",
      screens: [
        { image: "" as string, label: "Landing Page", desc: "Landing page and login" },
        { image: "" as string, label: "Chat Interface", desc: "Conversation UI with message history" },
        { image: "" as string, label: "Image Generation", desc: "ImageKit image handling within the chat" },
      ],
    },
  },

  th: {
    title: "MyGPT",
    year: "2024",
    role: "Personal Project · Full-Stack · LLM",
    tagline: "การทดลองครั้งแรกกับ LLM API — สร้างใน 3 วันเพื่อเข้าใจว่า AI Product ทำงานยังไงจริงๆ",

    links: {
      github: "https://github.com/ThaLovelace/MyGPT",
      demo: "https://my-gpt-beta-pearl.vercel.app/",
    },

    statusTag: "Personal Experiment",

    tags: ["React", "Node.js", "Gemini API", "Prompt Engineering", "ImageKit", "Vercel"],

    context: {
      title: "ทำไมถึงสร้างโปรเจคนี้",
      body: "AI อยู่ทุกที่ และอยากเข้าใจมันจากข้างใน ไม่ใช่แค่ใช้งาน เลยหาคลิปสอนใน YouTube แล้วลงมือสร้าง Chatbot จากศูนย์ใน 3 วัน เป้าหมายไม่ใช่ Product ที่สวยงาม แต่คือการเรียนรู้ว่า LLM API ทำงานยังไง วิธีเขียน Prompt ในโค้ดให้ดี และต้องทำอะไรบ้างถึงจะ Ship Full-Stack AI App ได้จริง",
    },

    built: {
      title: "สิ่งที่สร้าง",
      items: [
        { label: "Chat Interface", desc: "Frontend React พร้อม State Management ครบ — ข้อความ, ประวัติการสนทนา, และ Loading States" },
        { label: "Node.js Backend", desc: "API Layer เชื่อม Frontend กับ Gemini จัดการ Prompt Formatting และ Response Streaming" },
        { label: "Prompt Engineering", desc: "เขียน System Prompt ในโค้ดเพื่อควบคุม Tone, Context และรูปแบบผลลัพธ์อย่างสม่ำเสมอ" },
        { label: "Image Generation", desc: "เชื่อมต่อ ImageKit สำหรับจัดการรูปภาพในประสบการณ์การแชท" },
        { label: "Deploy บน Vercel", desc: "Deploy ครบวงจร — จาก Local Dev จนถึง Live URL" },
      ],
    },

    learned: {
      title: "สิ่งที่เรียนรู้จริงๆ",
      lessons: [
        {
          label: "LLM API ไม่ใช่เวทมนตร์ — มันคือ Interface",
          desc: "พอเห็นว่า API Call ดิบๆ ทำงานยังไง ความลึกลับก็หายไป มันแค่ส่ง Text เข้าไปแล้วได้ Text ออกมา เข้าใจจุดนี้ทำให้ทุกอย่างหลังจากนั้นง่ายขึ้นมาก",
        },
        {
          label: "การออกแบบ Prompt คือ Engineering จริงๆ",
          desc: "คำถามเดียวกันให้คำตอบที่แตกต่างกันมากขึ้นอยู่กับวิธีที่ตั้งคำถาม การเขียน Prompt ในโค้ดสอนให้คิดถึง Context, Constraints และ Output Format อย่างตั้งใจ",
        },
        {
          label: "State Management สำคัญมากใน AI UI",
          desc: "การจัดการประวัติการสนทนา, Loading States และ Error Handling ใน Chat Interface ซับซ้อนกว่าที่คิด — และนำไปใช้ต่อในโปรเจคถัดมาโดยตรง",
        },
      ],
    },

    connection: "Pattern ที่เรียนรู้ที่นี่ — การเชื่อมต่อ API, การจัดโครงสร้าง Prompt, การจัดการ Async — กลายเป็นพื้นฐานของฟีเจอร์ AI ใน dCDT และ Keeppook",

    screenshots: {
      title: "หน้าตาของแอป",
      screens: [
        { image: "" as string, label: "Landing Page", desc: "หน้าแรกและการเข้าสู่ระบบ" },
        { image: "" as string, label: "Chat Interface", desc: "UI การสนทนาพร้อมประวัติข้อความ" },
        { image: "" as string, label: "Image Generation", desc: "การจัดการรูปภาพใน Chat ด้วย ImageKit" },
      ],
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

export default function MyGPTPage() {
  const [lang, setLang] = useState<"en" | "th">("en")
  const c = content[lang]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Sticky Nav ── */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Thapanee.</span>
          </Link>
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            {(["en", "th"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide transition-all ${
                  lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24">

        {/* ── Hero ── */}
        <motion.section
          className="pt-14 pb-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.role} · {c.year}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
                {c.title}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {c.tagline}
              </motion.p>
            </div>
            <motion.span variants={fadeUp} className="self-start md:self-end inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border whitespace-nowrap">
              {c.statusTag}
            </motion.span>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
            {c.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">{t}</span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-6">
            {c.links.demo && (
              <a href={c.links.demo} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-xl hover:bg-foreground/85 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            )}
            {c.links.github && (
              <a href={c.links.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium rounded-xl text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
          </motion.div>
        </motion.section>

        {/* ── Screenshots ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">App Screens</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-8">{c.screenshots.title}</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.screenshots.screens.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex flex-col gap-3">
                {s.image ? (
                  <img src={s.image} alt={s.label} className="w-full rounded-2xl border border-border object-cover aspect-video" />
                ) : (
                  <div className="w-full rounded-2xl bg-muted border border-dashed border-border aspect-video flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <span className="text-2xl">🖥</span>
                    <p className="text-xs font-medium">{s.label}</p>
                    <p className="text-xs opacity-50">ใส่ path รูป Screenshot</p>
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Why I built this ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Context</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.context.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl">{c.context.body}</motion.p>
        </motion.section>

        {/* ── What I built ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            {c.built.title}
          </motion.p>
          <div className="space-y-3">
            {c.built.items.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="flex items-start gap-4 py-4 px-5 rounded-xl border border-border">
                <span className="text-[#3C3489] mt-0.5 text-sm flex-shrink-0">▸</span>
                <div>
                  <span className="text-sm font-semibold">{item.label} — </span>
                  <span className="text-sm text-muted-foreground">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── What I learned ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            {c.learned.title}
          </motion.p>
          <div className="space-y-4">
            {c.learned.lessons.map((lesson, i) => (
              <motion.div key={lesson.label} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-5 p-6 rounded-2xl bg-muted/40 border border-border">
                <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-sm mb-1.5">{lesson.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{lesson.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Connection to other projects ── */}
        <motion.section
          className="py-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-[#EEEDFE]/30">
            <span className="text-[#3C3489] text-lg flex-shrink-0 mt-0.5">→</span>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.connection}</p>
          </div>
        </motion.section>

        {/* ── Back link ── */}
        <div className="pt-4 pb-8 flex justify-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </div>

      </main>
    </div>
  )
}
