"use client"

import { useLang } from "@/context/LangContext"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

// ============================================================
//  ✏️  CONTENT — แก้ข้อมูลทั้งหมดที่นี่ที่เดียว
// ============================================================
const content = {
  en: {
    title: "Keeppook",
    year: "2025",
    role: "University Project · Android · AI",
    tagline: "A finance tracker that categorizes your spending before you even think about it.",

    links: {
      github: "https://github.com/ThaLovelace/KeepTang.git",
      demo: "",
    },

    statusTag: "Android · Native Java",

    tags: ["Android (Java)", "Google Gemini API", "SQLite", "Hybrid AI", "Gamification", "Figma"],

    highlights: [
      { value: "3-Layer", label: "AI Architecture" },
      { value: "< 10ms", label: "Cache Response" },
      { value: "Offline", label: "First Design" },
      { value: "Self", label: "Learning System" },
    ],

    screenshots: {
      title: "App in action",
      screens: [
        { image: "/components/Keeppook/Dashboard.png" as string, label: "Dashboard", desc: "Balance overview & recent transactions" },
        { image: "/components/Keeppook/Smart Input.png" as string, label: "Smart Input", desc: "AI auto-categorizes as you type" },
        { image: "/components/Keeppook/Calendar.png" as string, label: "Calendar", desc: "Browse spending history by date" },
        { image: "/components/Keeppook/Chart.png" as string, label: "Chart & AI Advisor", desc: "Spending breakdown + AI financial tips" },
      ],
    },

    problem: {
      title: "Why another finance app?",
      body: "Most expense trackers fail for two reasons: they're too much work to fill in, and they're too boring to keep using. Keeppook was built to fix both — eliminate the friction of categorization with AI, and bring people back every day with a streak system.",
      painPoints: [
        {
          label: "High Friction",
          desc: "Existing apps make users tap through dozens of category icons just to log one purchase.",
        },
        {
          label: "No Motivation",
          desc: "Without a reason to return, most people abandon their finance apps within a few weeks.",
        },
      ],
    },

    design: {
      title: "Design before code",
      body: "Before writing a single line of Java, the entire app was mapped out in Figma — from low-fidelity wireframes to a complete high-fidelity UI system. This process helped surface UX decisions early and kept the development phase focused.",
      lofiImage: "/components/Keeppook/Low-fi.png" as string,
      hifiImage: "/components/Keeppook/Hi-fi.png" as string,
      lofiLabel: "Low-fidelity wireframes — layout and user flow",
      hifiLabel: "High-fidelity UI — final visual design in Figma",
    },

    ai: {
      title: "Hybrid AI Categorization",
      body: "The core innovation of Keeppook is a 3-layer intelligence system that decides how to categorize each expense — prioritizing speed, cost, and accuracy in that order.",
      layers: [
        {
          key: "L1",
          name: "Memory Cache",
          speed: "< 10ms",
          desc: "Checks the local AI_KNOWLEDGE table first. If the word has been seen before — by the user or the AI — it returns instantly with no network call.",
          color: "bg-[#E1F5EE] text-[#0F6E56]",
        },
        {
          key: "L2",
          name: "Rule-Based Logic",
          speed: "< 50ms",
          desc: "Falls back to a hardcoded keyword dictionary covering 100+ common Thai and English expense terms. Fast and works fully offline.",
          color: "bg-[#EEEDFE] text-[#3C3489]",
        },
        {
          key: "L3",
          name: "Cloud AI (Gemini)",
          speed: "~800ms",
          desc: "Only called when the first two layers fail. Uses Google Gemini to understand context, then saves the result back to Layer 1 — so it never has to ask again.",
          color: "bg-[#FAEEDA] text-[#633806]",
        },
      ],
      selfLearning: "Every Gemini response is written back to the local database. Over time, the app learns the user's vocabulary and relies less on the cloud.",
    },

    gamification: {
      title: "Streak system",
      body: "A daily check-in system rewards consistent use: 10 points per day, 50 bonus points for a 7-day streak. A weekly progress popup shows users how close they are to the next milestone — turning a chore into a habit.",
    },

    challenges: [
      {
        title: "ANR — App freezing on heavy data",
        body: "Database queries and chart calculations were originally running on the Main Thread, causing the UI to freeze. Moved all heavy operations to a background ExecutorService, with results posted back via Handler(Looper.getMainLooper()).",
      },
      {
        title: "API Latency & Rate Limits",
        body: "Early builds fired a Gemini request on every keystroke ('P', 'Pi', 'Piz'...). Implemented 800ms debouncing so requests only fire on a complete word — combined with the 3-layer fallback, this cut API calls by over 80%.",
      },
      {
        title: "Data loss on screen rotation",
        body: "Android destroys and recreates Activities on orientation change, wiping form data. Fixed by declaring configChanges in AndroidManifest.xml so the app handles rotation itself without an Activity restart.",
      },
    ],

    limitations: [
      "Smart Categorizer requires internet for Layer 3 — offline mode falls back to Rule-Based only.",
      "All data is stored locally (SQLite). Uninstalling the app permanently deletes transaction history.",
      "No cloud sync — switching devices means starting fresh.",
    ],

    future: [
      "Cloud backup via Firebase with multi-device support.",
      "Reward shop: redeem streak points for discount coupons or app themes.",
      "Bank API integration for automatic transaction import.",
      "Conversational AI: ask 'How much did I spend on coffee last month?' and get an instant answer.",
    ],
  },

  th: {
    title: "Keeppook",
    year: "2025",
    role: "โปรเจคมหาวิทยาลัย · Android · AI",
    tagline: "แอปบันทึกรายจ่ายที่จัดหมวดหมู่ให้อัตโนมัติ ก่อนที่คุณจะต้องคิด",

    links: {
      github: "https://github.com/ThaLovelace/KeepTang.git",
      demo: "",
    },

    statusTag: "Android · Native Java",

    tags: ["Android (Java)", "Google Gemini API", "SQLite", "Hybrid AI", "Gamification", "Figma"],

    highlights: [
      { value: "3 ชั้น", label: "สถาปัตยกรรม AI" },
      { value: "< 10ms", label: "ตอบสนอง Cache" },
      { value: "Offline", label: "First Design" },
      { value: "Self", label: "Learning System" },
    ],

    problem: {
      title: "ทำไมต้องมีแอปการเงินอีกตัว?",
      body: "แอปบันทึกรายจ่ายส่วนใหญ่ล้มเหลวด้วยเหตุผลสองประการ: ใช้งานยุ่งยากเกินไป และน่าเบื่อจนไม่อยากกลับมาใช้ Keeppook ถูกสร้างขึ้นเพื่อแก้ทั้งสองปัญหา — ลดขั้นตอนด้วย AI และดึงผู้ใช้กลับมาด้วยระบบ Streak",
      painPoints: [
        {
          label: "ขั้นตอนยุ่งยาก",
          desc: "แอปที่มีอยู่บังคับให้ผู้ใช้กดเลือกหมวดหมู่จากไอคอนจำนวนมากเพื่อบันทึกแค่รายการเดียว",
        },
        {
          label: "ขาดแรงจูงใจ",
          desc: "ไม่มีเหตุผลที่จะกลับมาใช้ซ้ำ ทำให้ผู้ใช้ส่วนใหญ่เลิกใช้ภายในไม่กี่สัปดาห์",
        },
      ],
    },

    screenshots: {
      title: "หน้าจอแอปจริง",
      screens: [
        { image: "/components/Keeppook/Dashboard.png" as string, label: "Dashboard", desc: "ภาพรวมยอดเงินและรายการล่าสุด" },
        { image: "/components/Keeppook/Smart Input.png" as string, label: "Smart Input", desc: "AI จัดหมวดหมู่ให้อัตโนมัติขณะพิมพ์" },
        { image: "/components/Keeppook/Calendar.png" as string, label: "ปฏิทิน", desc: "ดูประวัติการใช้จ่ายตามวันที่" },
        { image: "/components/Keeppook/Chart.png" as string, label: "Chart & AI Advisor", desc: "กราฟสรุปรายจ่าย + คำแนะนำจาก AI" },
      ],
    },

    design: {
      title: "ออกแบบก่อนเขียนโค้ด",
      body: "ก่อนจะเขียน Java แม้แต่บรรทัดเดียว แอปทั้งหมดถูกออกแบบใน Figma ตั้งแต่ Low-fidelity Wireframe จนถึง High-fidelity UI System ช่วยให้ตัดสินใจเรื่อง UX ได้ตั้งแต่ต้น และทำให้ขั้นตอน Dev โฟกัสมากขึ้น",
      lofiImage: "/components/Keeppook/Low-fi.png" as string,
      hifiImage: "/components/Keeppook/Hi-fi.png" as string,
      lofiLabel: "Low-fidelity Wireframe — Layout และ User Flow",
      hifiLabel: "High-fidelity UI — งานออกแบบสุดท้ายใน Figma",
    },

    ai: {
      title: "ระบบจำแนกหมวดหมู่ด้วย Hybrid AI",
      body: "นวัตกรรมหลักของ Keeppook คือระบบ AI 3 ชั้น ที่ตัดสินใจจำแนกหมวดหมู่ของแต่ละรายการ โดยเรียงลำดับตามความเร็ว ต้นทุน และความแม่นยำ",
      layers: [
        {
          key: "L1",
          name: "Memory Cache",
          speed: "< 10ms",
          desc: "ตรวจสอบตาราง AI_KNOWLEDGE ในเครื่องก่อน ถ้าเคยเห็นคำนี้แล้ว ไม่ว่าจะจากผู้ใช้หรือ AI จะตอบทันทีโดยไม่ต้องใช้เน็ต",
          color: "bg-[#E1F5EE] text-[#0F6E56]",
        },
        {
          key: "L2",
          name: "Rule-Based Logic",
          speed: "< 50ms",
          desc: "ใช้ Keyword Dictionary ที่กำหนดไว้ล่วงหน้ากว่า 100 คำ ทั้งภาษาไทยและอังกฤษ เร็วและทำงานได้แบบ Offline",
          color: "bg-[#EEEDFE] text-[#3C3489]",
        },
        {
          key: "L3",
          name: "Cloud AI (Gemini)",
          speed: "~800ms",
          desc: "เรียกใช้เมื่อสองชั้นแรกไม่พบคำตอบ ใช้ Gemini วิเคราะห์บริบท แล้วบันทึกผลลัพธ์กลับไปที่ชั้น 1 เพื่อไม่ต้องถามซ้ำอีก",
          color: "bg-[#FAEEDA] text-[#633806]",
        },
      ],
      selfLearning: "ทุกคำตอบจาก Gemini จะถูกบันทึกลงฐานข้อมูลภายใน เมื่อเวลาผ่านไป แอปจะเรียนรู้คำศัพท์ของผู้ใช้และพึ่งพา Cloud น้อยลงเรื่อยๆ",
    },

    gamification: {
      title: "ระบบ Streak",
      body: "ระบบเช็คอินรายวัน มอบ 10 แต้มต่อวัน และโบนัส 50 แต้มเมื่อเช็คอินครบ 7 วันติดต่อกัน Popup รายสัปดาห์แสดงความก้าวหน้า เปลี่ยนภาระน่าเบื่อให้กลายเป็นนิสัย",
    },

    challenges: [
      {
        title: "ANR — แอปค้างเมื่อมีข้อมูลมาก",
        body: "ช่วงแรก Query ฐานข้อมูลและการคำนวณกราฟทำงานบน Main Thread ทำให้ UI กระตุก แก้โดยย้ายงานหนักไปทำงานบน Background ExecutorService แล้วส่งผลกลับผ่าน Handler(Looper.getMainLooper())",
      },
      {
        title: "API ล่าช้าและโควต้าหมด",
        body: "เดิมส่ง Request ไป Gemini ทุกครั้งที่พิมพ์ตัวอักษร ('P', 'Pi', 'Piz'...) แก้ด้วย Debouncing 800ms รอจนหยุดพิมพ์ก่อนส่ง ร่วมกับ 3-Layer Fallback ลด API Call ได้กว่า 80%",
      },
      {
        title: "ข้อมูลหายเมื่อหมุนหน้าจอ",
        body: "Android จะทำลายและสร้าง Activity ใหม่เมื่อหมุนจอ ทำให้ข้อมูลในฟอร์มหาย แก้โดยกำหนด configChanges ใน AndroidManifest.xml ให้แอปจัดการการหมุนเองโดยไม่ Restart",
      },
    ],

    limitations: [
      "Smart Categorizer ต้องใช้อินเทอร์เน็ตสำหรับชั้นที่ 3 — Offline ใช้ได้แค่ Rule-Based",
      "ข้อมูลเก็บใน SQLite ภายในเครื่อง ถอนแอปแล้วข้อมูลหายถาวร",
      "ไม่มี Cloud Sync — เปลี่ยนเครื่องต้องเริ่มใหม่",
    ],

    future: [
      "Cloud Backup ผ่าน Firebase รองรับหลายอุปกรณ์",
      "ร้านแลกรางวัล: นำแต้ม Streak ไปแลกคูปองหรือธีมแอป",
      "เชื่อมต่อ Bank API ดึงธุรกรรมอัตโนมัติ",
      "AI Chatbot: ถามว่า 'เดือนที่แล้วใช้จ่ายกาแฟไปเท่าไหร่?' แล้วได้คำตอบทันที",
    ],
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

export default function KeeppookPage() {
  const { lang, setLang } = useLang()
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
        <motion.section key={`sec-1-${lang}`}
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
            <motion.span variants={fadeUp} className="self-start md:self-end inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] border border-[#0F6E56]/20 whitespace-nowrap">
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

        {/* ── Highlights ── */}
        <motion.section key={`sec-2-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {c.highlights.map((h) => (
              <motion.div key={h.label} variants={fadeUp} className="bg-background px-6 py-8 text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold tracking-tight">{h.value}</div>
                <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-medium">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Screenshots ── */}
        <motion.section key={`sec-3-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">App Screens</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-8">{c.screenshots.title}</motion.h2>

          {/* 4 screenshots grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.screenshots.screens.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex flex-col gap-2">
                {s.image ? (
                  <img src={s.image} alt={s.label} className="w-full rounded-2xl border border-border object-cover aspect-[9/19]" />
                ) : (
                  <div className="w-full rounded-2xl bg-muted border border-dashed border-border aspect-[9/19] flex flex-col items-center justify-center gap-1.5 text-muted-foreground px-3">
                    <span className="text-xl">📱</span>
                    <p className="text-xs font-medium text-center">{s.label}</p>
                  </div>
                )}
                <div className="px-1">
                  <p className="text-xs font-semibold">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Problem ── */}
        <motion.section key={`sec-4-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">The Problem</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.problem.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">{c.problem.body}</motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.problem.painPoints.map((p, i) => (
              <motion.div key={p.label} variants={fadeUp} className="p-6 rounded-2xl border border-border bg-muted/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FCEBEB] text-[#A32D2D]">
                    Pain Point {i + 1}
                  </span>
                  <span className="text-sm font-semibold">{p.label}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Design Process ── */}
        <motion.section key={`sec-5-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Design Process</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.design.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">{c.design.body}</motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lofi */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">01</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Low-Fidelity</span>
              </div>
              <div className="p-4">
                {c.design.lofiImage ? (
                  <img src={c.design.lofiImage} alt={c.design.lofiLabel} className="w-full rounded-xl object-cover" />
                ) : (
                  <div className="w-full rounded-xl bg-muted border border-dashed border-border h-56 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <span className="text-2xl">🖼</span>
                    <p className="text-xs">{c.design.lofiLabel}</p>
                    <p className="text-xs opacity-50">ใส่รูป Low-fi จาก Figma</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Hifi */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E1F5EE] text-[#0F6E56]">02</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6E56]">High-Fidelity</span>
              </div>
              <div className="p-4">
                {c.design.hifiImage ? (
                  <img src={c.design.hifiImage} alt={c.design.hifiLabel} className="w-full rounded-xl object-cover" />
                ) : (
                  <div className="w-full rounded-xl bg-muted border border-dashed border-border h-56 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <span className="text-2xl">🖼</span>
                    <p className="text-xs">{c.design.hifiLabel}</p>
                    <p className="text-xs opacity-50">ใส่รูป High-fi จาก Figma</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── How AI Works ── */}
        <motion.section key={`sec-6-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">How the AI Works</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.ai.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">{c.ai.body}</motion.p>

          <div className="space-y-3 mb-6">
            {c.ai.layers.map((layer) => (
              <motion.div key={layer.key} variants={fadeUp} className="grid grid-cols-[auto_1fr_auto] items-start gap-5 p-6 rounded-2xl border border-border bg-muted/30">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${layer.color}`}>{layer.key}</span>
                <div>
                  <h3 className="text-sm font-semibold mb-1">{layer.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{layer.desc}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{layer.speed}</span>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-[#E1F5EE]/30">
            <span className="text-[#0F6E56] text-sm mt-0.5">✦</span>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.ai.selfLearning}</p>
          </motion.div>
        </motion.section>

        {/* ── Gamification ── */}
        <motion.section key={`sec-7-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Gamification</p>
          <h2 className="font-serif text-2xl font-bold mb-4">{c.gamification.title}</h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{c.gamification.body}</p>
        </motion.section>

        {/* ── Technical Challenges ── */}
        <motion.section key={`sec-8-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">Engineering Challenges</motion.p>
          <div className="space-y-4">
            {c.challenges.map((ch, i) => (
              <motion.div key={ch.title} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-5 p-6 rounded-2xl bg-muted/40 border border-border">
                <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-sm mb-1.5">{ch.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ch.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Limitations ── */}
        <motion.section key={`sec-9-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Honest Limitations</motion.p>
          <div className="space-y-2">
            {c.limitations.map((l) => (
              <motion.div key={l} variants={fadeUp} className="flex items-start gap-3 py-3 px-5 rounded-xl border border-border">
                <span className="text-[#BA7517] mt-0.5 text-sm flex-shrink-0">⚠</span>
                <p className="text-sm text-muted-foreground">{l}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Future Work ── */}
        <motion.section key={`sec-10-${lang}`}
          className="py-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">What's Next</motion.p>
          <div className="space-y-2">
            {c.future.map((f) => (
              <motion.div key={f} variants={fadeUp} className="flex items-start gap-3 py-3 px-5 rounded-xl border border-border">
                <span className="text-[#0F6E56] mt-0.5 text-sm flex-shrink-0">→</span>
                <p className="text-sm text-muted-foreground">{f}</p>
              </motion.div>
            ))}
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
