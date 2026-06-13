
"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Github } from "lucide-react"

// ============================================================
//  ✏️  CONTENT — แก้ข้อมูลทั้งหมดที่นี่ที่เดียว
// ============================================================
const content = {
  en: {
    title: "Fest & Flow",
    year: "2024",
    role: "Freelance Project · Frontend Development · React",
    tagline: "A client came with a wireframe, a color palette, and a one-day deadline. I shipped a full 6-page festival directory website by end of day.",

    links: {
      github: "", // 🔗 ใส่ GitHub link
    },

    statusTag: "Freelance · Delivered",

    tags: ["React", "Vite", "React Router", "CSS Modules", "JavaScript"],

    heroImage: "" as string, // 🔗 ใส่ path รูป Hero screenshot

    brief: {
      title: "The Brief",
      body: "A client needed a complete Thai cultural festival directory — one place to browse every major festival across all regions of Thailand. They came with a wireframe and a color palette. My job was to elevate the design and turn it into a fully working, navigable website.",
    },

    pages: [
      { name: "Home", desc: "Hero section + browse by region + featured festivals" },
      { name: "Festivals", desc: "Full directory with filter by category and region" },
      { name: "Calendar", desc: "Festivals sorted by month across the full year" },
      { name: "Regions", desc: "Divided into 4 Thai regions with imagery" },
      { name: "About", desc: "Origins and meaning of Thai festivals" },
      { name: "Contact", desc: "Client contact channels" },
    ],

    // 🔗 ใส่ path รูป 3 หน้าที่ดูดีที่สุด
    screenImages: [
      { image: "" as string, label: "Home", desc: "Hero section & featured festivals" },
      { image: "" as string, label: "Festivals", desc: "Directory with filter & card grid" },
      { image: "" as string, label: "Calendar", desc: "Month-by-month festival timeline" },
    ],

    challenge: {
      title: "Design to Code in 1 Day",
      intro: "The hardest part wasn't the code — it was the clock. One day from brief to delivery.",
      steps: [
        { num: "01", text: "Read the wireframe and color guide thoroughly before writing a single line." },
        { num: "02", text: "Planned the component structure mentally first — pages, layouts, reusable cards." },
        { num: "03", text: "Used AI tools to scaffold boilerplate fast, then adjusted everything manually to match the design." },
        { num: "04", text: "Built FestivalCard, RegionCard, and CalendarCard as reusable components to avoid repeating UI across 6 pages." },
        { num: "05", text: "Delivered on time." },
      ],
      quote: "Building by hand — instead of just using Figma Dev Mode — taught me how much component thinking and design systems matter when you need to scale fast.",
    },

    learned: [
      {
        title: "Component thinking saves you under deadline pressure",
        desc: "Splitting out FestivalCard and RegionCard from the start meant zero repeated UI work across all 6 pages. The investment in structure paid back immediately.",
      },
      {
        title: "Clients have a vision — your job is to execute it",
        desc: "Wireframes don't answer every question. I made several design detail decisions independently while preserving the client's original intent throughout.",
      },
      {
        title: "AI tools are accelerators, not replacements",
        desc: "AI helped scaffold faster, but understanding the output was non-negotiable. Every generated line had to be read, understood, and adjusted to match the actual design.",
      },
    ],
  },

  th: {
    title: "Fest & Flow",
    year: "2024",
    role: "Freelance Project · Frontend Development · React",
    tagline: "ลูกค้ามาพร้อม Wireframe, Color Palette และ Deadline 1 วัน เราส่งเว็บไซต์ Directory เทศกาลครบ 6 หน้าภายในวันนั้น",

    links: {
      github: "",
    },

    statusTag: "Freelance · Delivered",

    tags: ["React", "Vite", "React Router", "CSS Modules", "JavaScript"],

    heroImage: "" as string,

    brief: {
      title: "โจทย์ที่ได้รับ",
      body: "ลูกค้าต้องการเว็บไซต์รวมเทศกาลวัฒนธรรมไทยทั้งหมด ครอบคลุมทุกภูมิภาคทั่วไทย โดยมี Wireframe และ Color Palette มาให้แล้ว งานของเราคือยกระดับ Design ให้สวยงามและถูกต้องขึ้น พร้อม Implement เป็นเว็บจริงที่ใช้งานได้",
    },

    pages: [
      { name: "Home", desc: "Hero section + เลือกดูตามภูมิภาค + เทศกาลแนะนำ" },
      { name: "Festivals", desc: "Directory ครบ พร้อม Filter ตาม Category และ Region" },
      { name: "Calendar", desc: "เทศกาลเรียงตามเดือนตลอดทั้งปี" },
      { name: "Regions", desc: "แบ่งตาม 4 ภาค พร้อมรูปประกอบ" },
      { name: "About", desc: "ที่มาและความหมายของเทศกาลไทย" },
      { name: "Contact", desc: "ช่องทางติดต่อ" },
    ],

    screenImages: [
      { image: "" as string, label: "Home", desc: "Hero section และเทศกาลแนะนำ" },
      { image: "" as string, label: "Festivals", desc: "Directory พร้อม Filter และ Card Grid" },
      { image: "" as string, label: "Calendar", desc: "Timeline เทศกาลรายเดือน" },
    ],

    challenge: {
      title: "แปลง Design เป็นโค้ดใน 1 วัน",
      intro: "สิ่งที่ท้าทายที่สุดไม่ใช่ตัวโค้ด แต่คือเวลา — Deadline คือภายในวันเดียว",
      steps: [
        { num: "01", text: "อ่าน Wireframe และ Color Guide ของ Client ให้เข้าใจก่อน code แม้แต่บรรทัดเดียว" },
        { num: "02", text: "วาง Component Structure ในหัวก่อน — Pages, Layouts และ Reusable Cards" },
        { num: "03", text: "ใช้ AI Tools ช่วย Scaffold Boilerplate เพื่อประหยัดเวลา แล้วปรับเองให้ตรง Design" },
        { num: "04", text: "Build FestivalCard, RegionCard และ CalendarCard เป็น Reusable Components เพื่อใช้ซ้ำข้ามทั้ง 6 หน้า" },
        { num: "05", text: "Deliver ตรงเวลา" },
      ],
      quote: "ถ้าแค่ใช้ Figma Dev Mode แปลงโค้ดออกมาก็ง่ายกว่านี้ แต่การต้องทำด้วยมือสอนให้รู้ว่า Design System และ Component Thinking สำคัญแค่ไหนตอน Scale",
    },

    learned: [
      {
        title: "Component Thinking ช่วยชีวิตตอน Deadline",
        desc: "การแยก FestivalCard และ RegionCard ออกมาตั้งแต่แรก ทำให้ไม่ต้องเขียน UI ซ้ำแม้แต่ครั้งเดียวตลอด 6 หน้า การลงทุนกับ Structure ตั้งแต่แรกคุ้มค่าทันที",
      },
      {
        title: "Client มี Vision — งานเราคือ Execute ให้ได้",
        desc: "Wireframe ไม่ได้ตอบทุกคำถาม ต้องตัดสินใจ Design Detail เองหลายจุด โดยยังคง Spirit ของ Client ไว้ตลอด",
      },
      {
        title: "AI Tools เป็น Accelerator ไม่ใช่ Replacement",
        desc: "AI ช่วย Scaffold ได้เร็วขึ้น แต่ยังต้องเข้าใจโค้ดที่ออกมาเพื่อปรับให้ถูกต้อง ทุกบรรทัดที่ AI Generate มาต้องอ่าน เข้าใจ และแก้ไขให้ตรง Design จริง",
      },
    ],
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

export default function FestFlowPage() {
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
            <motion.span variants={fadeUp} className="self-start md:self-end inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] border border-[#0F6E56]/20 whitespace-nowrap">
              {c.statusTag}
            </motion.span>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
            {c.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">{t}</span>
            ))}
          </motion.div>

          {c.links.github && (
            <motion.div variants={fadeUp} className="flex gap-3 mt-6">
              <a href={c.links.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium rounded-xl text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </motion.div>
          )}
        </motion.section>

        {/* ── Hero Image ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          {c.heroImage ? (
            <img src={c.heroImage} alt={c.title} className="w-full rounded-2xl border border-border object-cover" />
          ) : (
            <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-64 md:h-80 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <span className="text-3xl">🖼</span>
              <p className="text-sm font-medium">Home — Hero Section</p>
              <p className="text-xs opacity-60">ใส่ path รูป Screenshot หน้า Home</p>
            </div>
          )}
        </motion.section>

        {/* ── The Brief ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">The Brief</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.brief.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">{c.brief.body}</motion.p>

          {/* 6 Pages Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {c.pages.map((page, i) => (
              <motion.div key={page.name} variants={fadeUp} className="p-4 rounded-xl border border-border bg-muted/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-semibold">{page.name}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{page.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 3 Screenshots ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">App Screens</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.screenImages.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex flex-col gap-3">
                {s.image ? (
                  <img src={s.image} alt={s.label} className="w-full rounded-2xl border border-border object-cover aspect-video" />
                ) : (
                  <div className="w-full rounded-2xl bg-muted border border-dashed border-border aspect-video flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <span className="text-2xl">🖥</span>
                    <p className="text-xs font-medium">{s.label}</p>
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

        {/* ── Challenge ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">The Challenge</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-3">{c.challenge.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">{c.challenge.intro}</motion.p>

          <div className="space-y-3 mb-8">
            {c.challenge.steps.map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="flex items-start gap-4 py-4 px-5 rounded-xl border border-border">
                <span className="text-xs font-bold text-muted-foreground/40 flex-shrink-0 mt-0.5">{step.num}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-muted/30">
            <span className="text-muted-foreground/40 text-2xl leading-none flex-shrink-0">"</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">{c.challenge.quote}</p>
          </motion.div>
        </motion.section>

        {/* ── What I Learned ── */}
        <motion.section
          className="py-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">What I Learned</motion.p>
          <div className="space-y-4">
            {c.learned.map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-5 p-6 rounded-2xl bg-muted/40 border border-border">
                <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
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
