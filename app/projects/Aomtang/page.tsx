"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"

// ============================================================
//  ✏️  CONTENT — แก้ข้อมูลทั้งหมดที่นี่ที่เดียว
// ============================================================
const content = {
  en: {
    title: "Aom Tang",
    subtitle: "Personal Finance Web App",
    year: "2025",
    role: "Personal Project · UX/UI Designer",
    tagline: "Saving money doesn't have to feel like a chore. I designed a finance app that actually looks like something you'd want to open every day.",
    statusTag: "Personal Project · Figma",
    tags: ["Figma", "UI Design", "Web App"],
    figmaLink: "", // 🔗 ใส่ link Figma ที่นี่
    heroImage: "" as string, // 🖼 Landing page hero screen

    ideaTitle: "The Idea",
    ideaBody: "Most finance apps look boring — serious and corporate — to the point where younger users don't want to open them. Yet saving money is a habit best started young.",
    ideaQuestion: "What if a finance app was delightful enough that people actually wanted to open it every day?",
    ideaImage: "" as string, // 🖼 Landing page hero
    ideaImageLabel: "Landing Page — Hero",

    directionTitle: "Design Direction: Friendly Finance",
    directionIntro: "Every visual decision was a deliberate contrast to what finance apps normally look like.",
    directionItems: [
      {
        key: "01",
        label: "Color",
        color: "purple",
        desc: "Purple, pink, green, yellow — vibrant and alive. Not the navy and grey of a bank. Finance should feel approachable, not intimidating.",
      },
      {
        key: "02",
        label: "Illustration",
        color: "green",
        desc: "Playful characters on every screen make even boring actions like \"Transfer\" or \"Budget Planning\" feel friendly. The character's emotional tone shifts to match what the data is telling you.",
      },
      {
        key: "03",
        label: "Typography & Layout",
        color: "orange",
        desc: "Key numbers are large and immediately readable. No hunting for the figure that matters — visual hierarchy does the work.",
      },
    ],
    directionImage: "" as string, // 🖼 Dashboard / หน้าหลัก
    directionImageLabel: "Dashboard — Main Screen",

    screensTitle: "4 Screens",
    screens: [
      {
        key: "01",
        name: "Landing Page",
        desc: "Hero section with illustration and a single email signup CTA. No clutter, no second-guessing where to look. One purpose, one action.",
        image: "" as string, // 🖼 Landing page
        imageLabel: "Landing Page",
        color: "purple",
      },
      {
        key: "02",
        name: "Dashboard (Home)",
        desc: "Three KPI cards (Balance, Expenses, Income) with trend indicators, a spending behavior pie chart, and a recent transactions list. Primary actions — Transfer, Pay Bill, Top Up, Withdraw — are shortcutted front and center.",
        image: "" as string, // 🖼 หน้าหลัก
        imageLabel: "Dashboard — Home",
        color: "green",
      },
      {
        key: "03",
        name: "Wallet",
        desc: "All cards displayed as a card carousel. Add or remove cards, and filter recent transactions by card — so you always know exactly what each card has been used for.",
        image: "" as string, // 🖼 กระเป๋าเงิน
        imageLabel: "Wallet Screen",
        color: "purple",
      },
      {
        key: "04",
        name: "Budget Planner",
        desc: "Budget overview card shows total budget, amount spent, and days remaining. Category cards each have a progress bar showing % used. A line chart shows spending trend through the month. A summary bar at the bottom compares recommended vs actual spend.",
        image: "" as string, // 🖼 วางแผนการใช้จ่าย
        imageLabel: "Budget Planner Screen",
        color: "green",
      },
    ],

    decisionsTitle: "UX Decisions",
    decisions: [
      {
        label: "Budget page: Card + Progress bar + Chart — all three at once",
        text: "Each format answers a different question. The card says \"how much is left\". The progress bar says \"how far along am I\". The chart says \"what's the trend\". Together, you never need to navigate away for more context.",
        color: "purple",
      },
      {
        label: "Contextual spending alerts",
        text: "Instead of just showing numbers, an alert reads \"Expenses up 15% from last month\" — with a \"Plan\" button right there. It closes the gap between knowing there's a problem and doing something about it.",
        color: "orange",
      },
      {
        label: "Illustrations shift with context",
        text: "High-expense screens use active/concerned characters. The landing page uses happy/growing ones. The emotional tone of each illustration matches the data it sits next to.",
        color: "green",
      },
    ],

    lessonsTitle: "What I Learned",
    lessons: [
      {
        title: "Visual personality is a UX decision too",
        body: "An app that looks inviting gets opened more often. And if it gets opened more often, users track their spending more consistently. Aesthetics aren't separate from function — they directly shape behavior.",
      },
      {
        title: "Finance data demands strong visual hierarchy",
        body: "Not all numbers are equal. Your balance matters more than a transaction ID. Design has to help users scan fast without reading everything — and that requires deliberate typographic hierarchy at every level.",
      },
      {
        title: "Personal projects teach what client projects can't",
        body: "No brief. No wireframes. Just an idea and every decision is yours. That constraint is clarifying — it reveals your actual design instincts, not just your ability to execute someone else's vision.",
      },
    ],

    backLabel: "Back to all projects",
  },

  th: {
    title: "ออมตัง",
    subtitle: "Personal Finance Web App",
    year: "2025",
    role: "Personal Project · UX/UI Designer",
    tagline: "การออมเงินไม่จำเป็นต้องรู้สึกน่าเบื่อ เราออกแบบแอปการเงินที่ดูน่าเปิดทุกวัน",
    statusTag: "Personal Project · Figma",
    tags: ["Figma", "UI Design", "Web App"],
    figmaLink: "",
    heroImage: "" as string,

    ideaTitle: "ที่มาของไอเดีย",
    ideaBody: "แอปการเงินส่วนใหญ่ดูน่าเบื่อ serious และ corporate จนคนรุ่นใหม่ไม่อยากเปิด ทั้งที่การออมเงินคือนิสัยที่ควรเริ่มตั้งแต่อายุน้อย",
    ideaQuestion: "ถ้าแอปการเงินน่ารักและสนุกพอ คนจะใช้มันบ่อยขึ้นไหม?",
    ideaImage: "" as string,
    ideaImageLabel: "Landing Page — Hero",

    directionTitle: "Design Direction: Friendly Finance",
    directionIntro: "เลือก visual direction ที่ตรงข้ามกับ finance app ทั่วไปโดยตั้งใจทุกจุด",
    directionItems: [
      {
        key: "01",
        label: "สี",
        color: "purple",
        desc: "Purple, pink, green, yellow — สดใส มีชีวิตชีวา ไม่ใช่ navy หรือ grey ที่ดูเป็นธนาคาร การเงินควรรู้สึก approachable ไม่ใช่น่ากลัว",
      },
      {
        key: "02",
        label: "Illustration",
        color: "green",
        desc: "ตัวละครน่ารัก playful ทุกหน้า ทำให้ action ที่น่าเบื่ออย่าง \"โอนเงิน\" หรือ \"วางแผนงบ\" รู้สึก friendly emotional tone ของตัวละครเปลี่ยนตามข้อมูลที่แสดง",
      },
      {
        key: "03",
        label: "Typography & Layout",
        color: "orange",
        desc: "ตัวเลขสำคัญใหญ่และชัด อ่านได้ทันที ไม่ต้องหาว่าตัวเลขที่สำคัญอยู่ที่ไหน visual hierarchy ทำงานแทน",
      },
    ],
    directionImage: "" as string,
    directionImageLabel: "Dashboard — หน้าหลัก",

    screensTitle: "4 หน้าหลัก",
    screens: [
      {
        key: "01",
        name: "Landing Page",
        desc: "Hero section ที่ดึงดูดด้วย illustration และ email signup CTA เดียว ไม่มี clutter ไม่ต้องเดาว่าต้องทำอะไร หนึ่งจุดประสงค์ หนึ่ง action",
        image: "" as string,
        imageLabel: "Landing Page",
        color: "purple",
      },
      {
        key: "02",
        name: "หน้าหลัก (Dashboard)",
        desc: "KPI cards 3 ตัว (ยอดคงเหลือ, รายจ่าย, รายรับ) พร้อม trend indicator, spending behavior pie chart, และ recent transactions list การกระทำหลักอย่างโอนเงิน จ่ายบิล เติมเงิน ถอนเงิน วาง shortcut ไว้ชัดเจน",
        image: "" as string,
        imageLabel: "หน้าหลัก — Dashboard",
        color: "green",
      },
      {
        key: "03",
        name: "กระเป๋าเงิน",
        desc: "แสดงบัตรทุกใบแบบ card carousel เพิ่ม/ลบบัตรได้ และดู recent transactions กรองตามบัตรได้ รู้เสมอว่าบัตรแต่ละใบถูกใช้ทำอะไร",
        image: "" as string,
        imageLabel: "กระเป๋าเงิน",
        color: "purple",
      },
      {
        key: "04",
        name: "วางแผนการใช้จ่าย",
        desc: "Budget overview card แสดง งบรวมที่ใช้ได้ ใช้ไปแล้ว และวันที่เหลือ Category cards แต่ละหมวดมี progress bar บอก % ที่ใช้ไป Line chart แสดง spending trend ตลอดเดือน Summary bar ด้านล่างเปรียบเทียบค่าใช้จ่ายแนะนำ vs จริง",
        image: "" as string,
        imageLabel: "วางแผนการใช้จ่าย",
        color: "green",
      },
    ],

    decisionsTitle: "UX Decisions",
    decisions: [
      {
        label: "Budget page ใช้ Card + Progress bar + Chart พร้อมกัน",
        text: "แต่ละ format ตอบคำถามต่างกัน Card บอก \"เหลือเท่าไหร่\", Progress bar บอก \"ใช้ไปแค่ไหนแล้ว\", Chart บอก \"trend เป็นยังไง\" ใช้ทั้งสามพร้อมกันทำให้ไม่ต้อง navigate ออกไปหาข้อมูลเพิ่ม",
        color: "purple",
      },
      {
        label: "Spending alert แบบ contextual",
        text: "แทนที่จะแค่แสดงตัวเลข มี alert \"รายจ่ายเพิ่มขึ้น 15% จากเดือนที่แล้ว\" พร้อมปุ่ม \"วางแผน\" ทันที ลด gap ระหว่างการรู้ปัญหากับการแก้ปัญหา",
        color: "orange",
      },
      {
        label: "Illustration ต่างกันตาม context",
        text: "หน้าที่เกี่ยวกับรายจ่ายสูงใช้ภาพที่ดู active/concerned หน้า landing ใช้ภาพที่ดู happy/growing emotional tone ของแต่ละหน้าสอดคล้องกับข้อมูลที่แสดง",
        color: "green",
      },
    ],

    lessonsTitle: "สิ่งที่ได้เรียนรู้",
    lessons: [
      {
        title: "Visual personality คือ UX decision ด้วย",
        body: "แอปที่ดูน่าเปิดทำให้คนเปิดบ่อยขึ้น และถ้าเปิดบ่อยขึ้น ก็ track การใช้จ่ายได้ดีขึ้น ความสวยไม่ใช่แค่ aesthetic มันส่งผลต่อ behavior จริงๆ",
      },
      {
        title: "Finance data ต้องการ visual hierarchy ที่ชัดมาก",
        body: "ตัวเลขทุกตัวไม่เท่ากัน ยอดคงเหลือสำคัญกว่า transaction ID การออกแบบต้องช่วยให้ user scan ได้เร็วโดยไม่ต้องอ่านทุกอย่าง และต้องทำด้วย typographic hierarchy ที่ตั้งใจทุกระดับ",
      },
      {
        title: "Personal project สอนในแบบที่ client project สอนไม่ได้",
        body: "ไม่มี brief ไม่มี wireframe มีแค่ idea และต้องตัดสินใจทุกอย่างเอง ข้อจำกัดนั้นทำให้เห็นชัด — มันเปิดเผย design instinct ที่แท้จริง ไม่ใช่แค่ความสามารถในการ execute vision ของคนอื่น",
      },
    ],

    backLabel: "กลับหน้าโปรเจคทั้งหมด",
  },
}

// ============================================================
//  Animation
// ============================================================
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

const colorMap = {
  orange: { bg: "bg-[#FAEEDA]", text: "text-[#633806]", num: "bg-[#FAEEDA] text-[#633806]", border: "border-[#e8c98a]" },
  green:  { bg: "bg-[#E1F5EE]", text: "text-[#0F6E56]", num: "bg-[#E1F5EE] text-[#0F6E56]", border: "border-[#a3d9c4]" },
  purple: { bg: "bg-[#EEEDFE]", text: "text-[#3C3489]", num: "bg-[#EEEDFE] text-[#3C3489]", border: "border-[#c4c0f7]" },
  red:    { bg: "bg-[#FCEBEB]", text: "text-[#A32D2D]", num: "bg-[#FCEBEB] text-[#A32D2D]", border: "border-[#f0bfbf]" },
}

function ImagePlaceholder({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`w-full rounded-2xl bg-muted/50 border border-dashed border-border ${tall ? "h-64 md:h-80" : "h-52"} flex flex-col items-center justify-center gap-3 text-muted-foreground`}>
      <span className="text-3xl">🖼</span>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xs opacity-60">ใส่ path รูปภาพ</p>
    </div>
  )
}

// ============================================================
//  Page
// ============================================================
export default function AomTangPage() {
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

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
                {c.title}
                <br />
                <span className="text-muted-foreground">{c.subtitle}</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {c.tagline}
              </motion.p>
            </div>
            <motion.span
              variants={fadeUp}
              className="self-start inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-[#EEEDFE] text-[#3C3489] border border-[#c4c0f7] whitespace-nowrap"
            >
              {c.statusTag}
            </motion.span>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
            {c.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">{t}</span>
            ))}
          </motion.div>

          {c.figmaLink && (
            <motion.div variants={fadeUp} className="flex gap-3 mt-6">
              <a href={c.figmaLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-xl hover:bg-foreground/85 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" /> View Figma
              </a>
            </motion.div>
          )}

          {/* Hero image */}
          <motion.div variants={fadeUp} className="mt-8">
            {c.heroImage
              ? <img src={c.heroImage} alt={c.title} className="w-full rounded-2xl border border-border object-cover" />
              : <ImagePlaceholder label="Landing Page — Hero Screen" tall />
            }
          </motion.div>
        </motion.section>

        {/* ── The Idea ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.ideaTitle}
          </motion.p>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {c.ideaBody}
          </motion.p>

          {/* The central question */}
          <motion.div variants={fadeUp} className="rounded-2xl bg-[#EEEDFE] border border-[#c4c0f7] p-6 mb-8">
            <p className="font-serif text-lg md:text-xl font-bold text-[#3C3489] leading-snug">
              "{c.ideaQuestion}"
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            {c.ideaImage
              ? <img src={c.ideaImage} alt={c.ideaImageLabel} className="w-full rounded-2xl border border-border object-cover" />
              : <ImagePlaceholder label={c.ideaImageLabel} tall />
            }
          </motion.div>
        </motion.section>

        {/* ── Design Direction ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.directionTitle}
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {c.directionIntro}
          </motion.p>

          <div className="space-y-4 mb-8">
            {c.directionItems.map((item) => {
              const palette = colorMap[item.color as keyof typeof colorMap]
              return (
                <motion.div
                  key={item.key}
                  variants={fadeUp}
                  className={`grid grid-cols-[auto_1fr] gap-5 p-6 rounded-2xl ${palette.bg} border border-border/40`}
                >
                  <span className={`font-serif text-2xl font-bold opacity-25 leading-none mt-0.5 select-none ${palette.text}`}>
                    {item.key}
                  </span>
                  <div>
                    <h3 className={`font-semibold text-sm mb-1.5 ${palette.text}`}>{item.label}</h3>
                    <p className={`text-sm leading-relaxed ${palette.text} opacity-80`}>{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div variants={fadeUp}>
            {c.directionImage
              ? <img src={c.directionImage} alt={c.directionImageLabel} className="w-full rounded-2xl border border-border object-cover" />
              : <ImagePlaceholder label={c.directionImageLabel} tall />
            }
          </motion.div>
        </motion.section>

        {/* ── 4 Screens ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            {c.screensTitle}
          </motion.p>

          <div className="space-y-6">
            {c.screens.map((screen) => {
              const palette = colorMap[screen.color as keyof typeof colorMap]
              return (
                <motion.div key={screen.key} variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
                  <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${palette.num}`}>{screen.key}</span>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${palette.text}`}>{screen.name}</span>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 items-start">
                    <div>
                      {screen.image
                        ? <img src={screen.image} alt={screen.imageLabel} className="w-full rounded-xl border border-border object-cover" />
                        : (
                          <div className="w-full rounded-xl bg-muted/50 border border-dashed border-border h-48 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                            <span className="text-2xl">🖼</span>
                            <p className="text-xs font-medium">{screen.imageLabel}</p>
                            <p className="text-xs opacity-60">ใส่ path รูปภาพ</p>
                          </div>
                        )
                      }
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{screen.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* ── UX Decisions ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            {c.decisionsTitle}
          </motion.p>

          <div className="space-y-4">
            {c.decisions.map((d, i) => {
              const palette = colorMap[d.color as keyof typeof colorMap]
              return (
                <motion.div
                  key={d.label}
                  variants={fadeUp}
                  className={`grid grid-cols-[auto_1fr] gap-5 p-6 rounded-2xl ${palette.bg} border border-border/40`}
                >
                  <span className={`font-serif text-2xl font-bold opacity-25 leading-none mt-0.5 select-none ${palette.text}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={`font-semibold text-sm mb-1.5 ${palette.text}`}>{d.label}</h3>
                    <p className={`text-sm leading-relaxed ${palette.text} opacity-80`}>{d.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* ── What I Learned ── */}
        <motion.section
          className="py-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            {c.lessonsTitle}
          </motion.p>
          <div className="space-y-4">
            {c.lessons.map((lesson, i) => (
              <motion.div
                key={lesson.title}
                variants={fadeUp}
                className="grid grid-cols-[auto_1fr] gap-5 p-6 rounded-2xl bg-muted/40 border border-border"
              >
                <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-sm mb-1.5">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{lesson.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Back link ── */}
        <div className="pt-4 pb-8 flex justify-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {c.backLabel}
          </Link>
        </div>

      </main>
    </div>
  )
}
