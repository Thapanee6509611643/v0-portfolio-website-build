"use client"

import { useLang } from "@/context/LangContext"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"

// ============================================================
//  ✏️  CONTENT — แก้ข้อมูลทั้งหมดที่นี่ที่เดียว
// ============================================================
const content = {
  en: {
    title: "F&B Dash",
    subtitle: "Cafe Analytics Dashboard",
    year: "2025",
    role: "Freelance Project · UX/UI Designer · Data Visualization",
    tagline: "My first dashboard. 3 days, almost no sleep. Learned that choosing the right chart type is a UX decision, not an aesthetic one.",
    statusTag: "Freelance · Delivered · ⭐ 5/5",
    tags: ["Figma", "Data Visualization", "Dashboard Design", "UX Research"],
    figmaLink: "", // 🔗 ใส่ link Figma ที่นี่

    overviewTitle: "The Brief",
    overview: "The client had an existing PowerBI mockup but wanted a dashboard that looked better and made data easier to read — for cafe managers who need to monitor sales, costs, and customer behavior in one place.",
    overviewDetail: "This wasn't like any UI project I'd done before. The challenge wasn't just aesthetics — it was how to make complex data readable in seconds. And there was a 3-day deadline. My first real dashboard, no time for trial and error. Every decision had to be right from the start.",
    overviewImage: "/components/Photos/fs.png" as string, // 🖼 Dashboard.png

    screensTitle: "5 Screens, 4 Roles",
    screens: [
      {
        key: "01",
        name: "Login",
        desc: "Clean and minimal, with SSO support via Google and Microsoft — designed for enterprise users who expect seamless, credential-free entry.",
        image: "/components/F&B/Log-in.png" as string, // 🖼 Log-in.png
        imageLabel: "Login Screen",
        color: "purple",
      },
      {
        key: "02",
        name: "Dashboard — Overview",
        desc: "Six KPI cards at the top (Revenue, Orders, Customers, Average Check, Cost, Gross Profit%) give managers an instant snapshot. Below: Revenue vs Cost line chart, Top Categories bar chart, and Order Type + Customer Type donut charts.",
        image: "/components/F&B/Dashboard.png" as string, // 🖼 Dashboard.png
        imageLabel: "Dashboard Overview",
        color: "green",
      },
      {
        key: "03",
        name: "Dashboard — First-time User",
        desc: "A version for new users with no data yet. Instead of showing empty charts (which look broken and confusing), it surfaces a Quick Start Tour, Documentation, and Help panel — so users know exactly what to do next.",
        image: "/components/F&B/Dashboard-2.png" as string, // 🖼 Dashboard-2.png
        imageLabel: "First-time User State",
        color: "orange",
      },
      {
        key: "04",
        name: "Analysis",
        desc: "The screen that required the most thinking. Features a Table Occupancy Heatmap, Cost vs Revenue by Category, and Contribution Margin by Menu Items — each chosen to answer a specific decision managers need to make.",
        image: "/components/F&B/Analysis.png" as string, // 🖼 Analysis.png
        imageLabel: "Analysis Screen",
        color: "green",
      },
      {
        key: "05",
        name: "Upload",
        desc: "Three ways to import data: Excel/CSV, Cloud Storage, and Download Template. Designed to be as frictionless as possible — because if uploading is hard, the whole dashboard becomes useless.",
        image: "/components/F&B/Upload.png" as string, // 🖼 Upload.png
        imageLabel: "Upload Screen",
        color: "purple",
      },
    ],

    heatmapTitle: "The Key Decision: Heatmap over Bar Chart",
    heatmapIntro: "This is where I stopped and thought the longest.",
    heatmapBody: "The client's original PowerBI showed daily sales by day of week as a standard bar chart. It was technically correct — but it wasn't answering the question managers actually needed answered.",
    heatmapQuestion: "The real question was: \"Which time slots on which days is the cafe busiest?\"",
    heatmapBefore: "Bar chart answer",
    heatmapBeforeDesc: "Tells you which day sells the most. One dimension only.",
    heatmapAfter: "Heatmap answer",
    heatmapAfterDesc: "X-axis: time (10am–9pm). Y-axis: day of week. Dark = busy, light = quiet. Managers see instantly that Friday–Sunday 5pm–9pm is peak time — without reading a single number.",
    heatmapImage: "/components/F&B/Table Occupancy Heatmap.png" as string, // 🖼 Analysis.png — heatmap crop
    heatmapImageLabel: "Table Occupancy Heatmap",
    heatmapConclusion: "Choosing the Heatmap wasn't because it looks better. It was because it answers the right question. That's the difference between data visualization and data decoration.",

    decisionsTitle: "Other Design Decisions",
    decisions: [
      {
        label: "Navy + Yellow color palette",
        text: "Navy conveys enterprise-level credibility. Yellow is the accent that pulls attention to the numbers that matter. Both contrast well on white without competing with the data itself.",
        color: "purple",
      },
      {
        label: "KPI cards pinned at the top of every screen",
        text: "Managers shouldn't need to scroll to find the headline numbers. They appear instantly on page load — the dashboard answers before you can even ask.",
        color: "green",
      },
      {
        label: "First-time user experience as a separate design state",
        text: "An empty dashboard looks broken. Designing the empty state with clear guidance means users know what to do instead of feeling lost — and they come back.",
        color: "orange",
      },
      {
        label: "Contribution Margin table + metric cards side by side",
        text: "Shows both \"which item sells the most\" and \"which item actually makes the most profit\" simultaneously. Because the top seller and the most profitable item are rarely the same thing.",
        color: "green",
      },
    ],

    lessonsTitle: "What I Learned",
    lessons: [
      {
        title: "Chart type is a UX decision, not an aesthetic one",
        body: "Choosing Heatmap over bar chart wasn't about what looks better. It was about what answers the user's actual question. That distinction — form following function at the data level — is what data visualization really teaches.",
      },
      {
        title: "Start from the decision, not the data",
        body: "Dashboard design should begin with: \"What does the user need to decide?\" Not \"What data do we have?\" Starting from data gives you every chart. Starting from decisions gives you the right charts.",
      },
      {
        title: "Empty state is part of the UX",
        body: "The first-time user experience matters as much as the main dashboard. If users get stuck on day one, they don't come back. Designing for the empty state is designing for retention.",
      },
    ],

    backLabel: "Back to all projects",
  },

  th: {
    title: "F&B Dash",
    subtitle: "Cafe Analytics Dashboard",
    year: "2025",
    role: "ฟรีแลนซ์ · UX/UI Designer · Data Visualization",
    tagline: "Dashboard แรกในชีวิต 3 วัน แทบไม่ได้นอน ได้เรียนรู้ว่าการเลือก chart type คือ UX decision ไม่ใช่ aesthetic decision",
    statusTag: "ฟรีแลนซ์ · ส่งมอบแล้ว · ⭐ 5/5",
    tags: ["Figma", "Data Visualization", "Dashboard Design", "UX Research"],
    figmaLink: "",

    overviewTitle: "Brief ของงาน",
    overview: "Client มี PowerBI mockup อยู่แล้ว แต่อยากได้ Dashboard ที่ดูดีขึ้นและอ่านข้อมูลได้ง่ายขึ้น สำหรับผู้บริหารร้านคาเฟ่ที่ต้องดูยอดขาย ต้นทุน และพฤติกรรมลูกค้าในที่เดียว",
    overviewDetail: "งานนี้ไม่เหมือน UI project ที่เคยทำมาก่อน เพราะ challenge ไม่ใช่แค่ความสวย แต่คือทำยังไงให้ข้อมูลที่ซับซ้อนอ่านได้ในไม่กี่วินาที และงานนี้มี deadline 3 วัน — ครั้งแรกที่ออกแบบ dashboard จริงๆ ไม่มีเวลา trial and error ทุก decision ต้องคิดให้ขาดตั้งแต่แรก",
    overviewImage: "" as string,

    screensTitle: "5 หน้า 4 บทบาท",
    screens: [
      {
        key: "01",
        name: "Login",
        desc: "Clean และ minimal รองรับ SSO ผ่าน Google และ Microsoft เหมาะกับ enterprise user ที่คาดหวัง login ที่ไม่ยุ่งยาก",
        image: "" as string,
        imageLabel: "Login Screen",
        color: "purple",
      },
      {
        key: "02",
        name: "Dashboard — Overview",
        desc: "KPI cards 6 ตัวด้านบน (Revenue, Orders, Customers, Average Check, Cost, Gross Profit%) ให้ผู้บริหารเห็น snapshot ทันที ด้านล่างมี Revenue vs Cost line chart, Top Categories bar chart, Order Type และ Customer Type donut charts",
        image: "" as string,
        imageLabel: "Dashboard Overview",
        color: "green",
      },
      {
        key: "03",
        name: "Dashboard — First-time User",
        desc: "Version สำหรับ user ใหม่ที่ยังไม่มีข้อมูล มี Quick Start Tour, Documentation และ Help panel แทนที่จะแสดง chart ว่างเปล่าที่ดูน่ากลัวและสับสน",
        image: "" as string,
        imageLabel: "First-time User State",
        color: "orange",
      },
      {
        key: "04",
        name: "Analysis",
        desc: "หน้าที่ลงทุนคิดมากที่สุดในโปรเจคนี้ มี Table Occupancy Heatmap, Cost vs Revenue by Category, และ Contribution Margin by Menu Items — แต่ละอันเลือกมาเพื่อตอบคำถามเฉพาะที่ผู้บริหารต้องตัดสินใจ",
        image: "" as string,
        imageLabel: "Analysis Screen",
        color: "green",
      },
      {
        key: "05",
        name: "Upload",
        desc: "3 วิธี import ข้อมูล: Excel/CSV, Cloud Storage, และ Download Template ออกแบบให้ง่ายที่สุด เพราะถ้า upload ยาก ทั้ง dashboard ก็ไม่มีประโยชน์",
        image: "" as string,
        imageLabel: "Upload Screen",
        color: "purple",
      },
    ],

    heatmapTitle: "Decision สำคัญ: Heatmap แทน Bar Chart",
    heatmapIntro: "นี่คือจุดที่ต้องหยุดคิดนานที่สุด",
    heatmapBody: "Client มี PowerBI เดิมที่แสดงยอดขายแต่ละวันในสัปดาห์เป็น bar chart ธรรมดา มันถูกต้อง — แต่ไม่ได้ตอบคำถามที่ผู้บริหารอยากรู้จริงๆ",
    heatmapQuestion: "คำถามจริงๆ คือ: \"ช่วงเวลาไหนของวันไหนที่ร้านยุ่งที่สุด?\"",
    heatmapBefore: "Bar chart ตอบ",
    heatmapBeforeDesc: "บอกได้แค่ว่าวันไหนขายได้มาก มิติเดียว",
    heatmapAfter: "Heatmap ตอบ",
    heatmapAfterDesc: "แกน X คือเวลา (10am–9pm), แกน Y คือวันในสัปดาห์ สีเข้ม = busy, สีอ่อน = quiet ผู้บริหารเห็นทันทีว่า Friday–Sunday ช่วง 5pm–9pm คือ peak time โดยไม่ต้องอ่านตัวเลขเลย",
    heatmapImage: "" as string,
    heatmapImageLabel: "Table Occupancy Heatmap",
    heatmapConclusion: "การเลือก Heatmap ไม่ใช่เพราะมันสวยกว่า แต่เพราะมันตอบคำถามที่ถูกต้อง นั่นคือความแตกต่างระหว่าง data visualization และ data decoration",

    decisionsTitle: "Design Decisions อื่นๆ",
    decisions: [
      {
        label: "Navy + Yellow color palette",
        text: "Navy ให้ความน่าเชื่อถือแบบ enterprise, Yellow เป็น accent ที่ดึงความสนใจไปที่ตัวเลขสำคัญ ทั้งคู่ contrast กันได้ดีบน white background โดยไม่แข่งกับข้อมูล",
        color: "purple",
      },
      {
        label: "KPI cards ด้านบนทุกหน้า",
        text: "ผู้บริหารไม่ต้อง scroll หาตัวเลขหลัก เห็นทันทีที่เปิดหน้า dashboard ตอบก่อนที่จะถาม",
        color: "green",
      },
      {
        label: "First-time user experience แยกออกมา",
        text: "Dashboard ที่ไม่มีข้อมูลดูน่ากลัวมาก การออกแบบ empty state ให้มี guidance ทำให้ user รู้ว่าต้องทำอะไรต่อ และกลับมาใช้อีกครั้ง",
        color: "orange",
      },
      {
        label: "Contribution Margin table + metric cards คู่กัน",
        text: "แสดงทั้ง \"อันไหนขายดี\" และ \"อันไหนทำกำไรได้จริง\" พร้อมกัน เพราะเมนูที่ขายดีที่สุดกับที่กำไรมากที่สุดไม่ค่อยใช่อันเดียวกัน",
        color: "green",
      },
    ],

    lessonsTitle: "สิ่งที่ได้เรียนรู้",
    lessons: [
      {
        title: "Chart type คือ UX decision ไม่ใช่ aesthetic decision",
        body: "การเลือก Heatmap แทน bar chart ไม่ใช่เพราะมันสวยกว่า แต่เพราะมันตอบคำถามของ user ได้ตรงกว่า ความแตกต่างนี้ — form following function ในระดับของข้อมูล — คือสิ่งที่ Data Visualization สอนจริงๆ",
      },
      {
        title: "เริ่มจาก decision ไม่ใช่ข้อมูล",
        body: "Dashboard design ควรเริ่มจาก \"user ต้องการตัดสินใจอะไร?\" ไม่ใช่ \"มีข้อมูลอะไรบ้าง?\" ถ้าเริ่มจากข้อมูล จะได้ chart ทุกอัน ถ้าเริ่มจาก decision จะได้ chart ที่ใช้งานได้จริง",
      },
      {
        title: "Empty state ก็เป็นส่วนหนึ่งของ UX",
        body: "First-time user experience สำคัญพอๆ กับ main dashboard เพราะถ้า user ติดตอนแรก พวกเขาจะไม่กลับมาใช้อีก การออกแบบ empty state คือการออกแบบเพื่อ retention",
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

// ============================================================
//  Page
// ============================================================
export default function FnbDashPage() {
  const { lang, setLang } = useLang()
  const c = content[lang]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Sticky Nav ── */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Thapanee.</span>
          </Link>
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            {(["en", "th"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide transition-all ${
                  lang === l
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
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
              className="self-start inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] border border-[#a3d9c4] whitespace-nowrap"
            >
              {c.statusTag}
            </motion.span>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
            {c.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                {t}
              </span>
            ))}
          </motion.div>

          {c.figmaLink && (
            <motion.div variants={fadeUp} className="flex gap-3 mt-6">
              <a
                href={c.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-xl hover:bg-foreground/85 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> View Figma Prototype
              </a>
            </motion.div>
          )}
        </motion.section>

        {/* ── Overview ── */}
        <motion.section key={`sec-2-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.overviewTitle}
          </motion.p>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
            {c.overview}
          </motion.p>

          {/* 3-day deadline callout */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-muted/30 p-6 flex gap-5 items-start mb-8">
            <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">⚡</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              {c.overviewDetail}
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            {c.overviewImage ? (
              <img src={c.overviewImage} alt="Dashboard Overview" className="w-full rounded-2xl border border-border object-cover" />
            ) : (
              <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-64 md:h-80 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <span className="text-3xl">🖼</span>
                <p className="text-sm font-medium">Dashboard Overview</p>
                <p className="text-xs opacity-60">ใส่ path รูปภาพ</p>
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* ── 5 Screens ── */}
        <motion.section key={`sec-3-${lang}`}
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
                <motion.div
                  key={screen.key}
                  variants={fadeUp}
                  className="rounded-2xl border border-border overflow-hidden"
                >
                  <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${palette.num}`}>
                      {screen.key}
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${palette.text}`}>
                      {screen.name}
                    </span>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 items-start">
                    <div>
                      {screen.image ? (
                        <img
                          src={screen.image}
                          alt={screen.imageLabel}
                          className="w-full rounded-xl border border-border object-cover"
                        />
                      ) : (
                        <div className="w-full rounded-xl bg-muted/50 border border-dashed border-border h-44 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                          <span className="text-2xl">🖼</span>
                          <p className="text-xs font-medium">{screen.imageLabel}</p>
                          <p className="text-xs opacity-60">ใส่ path รูปภาพ</p>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{screen.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* ── Heatmap Key Decision ── */}
        <motion.section key={`sec-4-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.heatmapTitle}
          </motion.p>

          <motion.p variants={fadeUp} className="text-base font-semibold text-foreground mb-3">
            {c.heatmapIntro}
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {c.heatmapBody}
          </motion.p>

          {/* Question callout */}
          <motion.div variants={fadeUp} className="rounded-2xl bg-[#EEEDFE] border border-[#c4c0f7] p-5 mb-6">
            <p className="text-sm font-semibold text-[#3C3489] leading-relaxed">{c.heatmapQuestion}</p>
          </motion.div>

          {/* Before / After comparison */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">✗</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.heatmapBefore}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.heatmapBeforeDesc}</p>
            </div>
            <div className="rounded-2xl border border-[#a3d9c4] bg-[#E1F5EE] p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#0F6E56] text-white">✓</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6E56]">{c.heatmapAfter}</span>
              </div>
              <p className="text-sm text-[#0F6E56] leading-relaxed opacity-80">{c.heatmapAfterDesc}</p>
            </div>
          </motion.div>

          {/* Heatmap image */}
          <motion.div variants={fadeUp} className="mb-6">
            {c.heatmapImage ? (
              <img src={c.heatmapImage} alt={c.heatmapImageLabel} className="w-full rounded-2xl border border-border object-cover" />
            ) : (
              <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-56 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <span className="text-3xl">🖼</span>
                <p className="text-sm font-medium">{c.heatmapImageLabel}</p>
                <p className="text-xs opacity-60">ใส่ path รูปภาพ</p>
              </div>
            )}
          </motion.div>

          {/* Conclusion */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-muted/30 p-6 flex gap-5 items-start">
            <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">→</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">{c.heatmapConclusion}</p>
          </motion.div>
        </motion.section>

        {/* ── Design Decisions ── */}
        <motion.section key={`sec-5-${lang}`}
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
        <motion.section key={`sec-6-${lang}`}
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
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {c.backLabel}
          </Link>
        </div>

      </main>
    </div>
  )
}
