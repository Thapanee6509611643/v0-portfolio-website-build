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
    title: "Sleep Sync",
    subtitle: "Sleep Management App for Students",
    year: "2025",
    role: "Freelance Project · UX/UI Designer · End-to-End UX Process",
    tagline: "Started from a real problem I live with every day. Ended with a validated solution that 3 real users could actually use.",
    statusTag: "Freelance · Figma Prototype · Usability Tested",
    tags: ["Figma", "UX Research", "Usability Testing", "Prototyping"],
    figmaLink: "", // 🔗 ใส่ link Figma ที่นี่
    heroImage: "" as string, // 🖼 Cover.png

    problemTitle: "The Problem",
    problemBody: "The brief was to design an app that solves a real student problem. We chose sleep — because it's a problem we actually live with.",
    problemDetail: "Students don't sleep less because they don't know they should. They sleep less because their schedules are unpredictable — group work today, exam tomorrow, doom-scrolling at 2am. Existing sleep apps solve tracking. None of them help you plan sleep around your actual student life.",
    problemImage: "" as string, // 🖼 Presentation slide "Problem"
    problemImageLabel: "Problem Slide",

    researchTitle: "Research",
    researchIntro: "Before designing a single screen, we ran two rounds of research.",
    researchItems: [
      {
        key: "01",
        label: "User Interviews",
        color: "purple",
        findings: [
          { tag: "Pain point", text: "Bedtime procrastination", color: "red" },
          { tag: "Pain point", text: "Waking up still exhausted", color: "red" },
          { tag: "Pain point", text: "Caffeine dependency", color: "red" },
          { tag: "Need", text: "Reminders", color: "green" },
          { tag: "Need", text: "Schedule-based sleep planning", color: "green" },
          { tag: "Need", text: "Progress tracking", color: "green" },
        ],
      },
      {
        key: "02",
        label: "Competitive Analysis",
        color: "purple",
        gap: "Calm, Sleep Cycle, and Pzizz all share the same gap: none of them link sleep to academic schedules. That's Sleep Sync's unique value.",
      },
    ],
    researchImage: "" as string, // 🖼 Research slide
    researchImageLabel: "Research & Insights Slide",

    personaTitle: "Persona",
    personaName: "\"May\" — 20, Year 2 Student",
    personaDetails: [
      "Balances classes, group projects, and a part-time job",
      "Goes to bed at 1–2am, wakes at 7:30am",
      "Drinks coffee every morning without fail",
      "Finds existing apps too generic for her actual life",
    ],
    personaInsight: "May drove every design decision throughout the project. If a feature didn't help May, it didn't belong in the app.",
    personaImage: "" as string, // 🖼 Persona / Design Decisions slide
    personaImageLabel: "User-Centered Design Decisions Slide",

    lofiTitle: "Lo-Fi → Hi-Fi",
    lofiIntro: "Started with lo-fi wireframes across all 5 screens to validate structure and flow before committing to any visual decisions.",
    lofiScreens: [
      { label: "Home", image: "" as string },        // 🖼 Lo-fi Home
      { label: "Check-In", image: "" as string },     // 🖼 Lo-fi Check-In
      { label: "Planner", image: "" as string },      // 🖼 Lo-fi Planner
      { label: "Planner Calendar", image: "" as string }, // 🖼 Lo-fi Planner-1
      { label: "Insights", image: "" as string },     // 🖼 Lo-fi Insights
    ],
    lofiToHifi: "From lo-fi to hi-fi, what changed wasn't just color — it was intentional visual decisions at every level.",
    visualSystem: "Dark navy + purple + pink creates a calming, premium feel — not aggressive. Right for an app used right before sleep. Gamification elements like streak badges and sleep score circles add motivation without making the app feel like a game.",
    visualImage: "" as string, // 🖼 Visual System slide
    visualImageLabel: "Visual System Slide",

    featuresTitle: "4 Core Features",
    features: [
      {
        key: "01",
        name: "Smart Sleep Planner",
        desc: "Input your class schedule. The system automatically suggests the optimal bedtime and wake-up time. This feature doesn't exist in any competing app.",
        image: "" as string, // 🖼 Hi-fi Planner.png
        imageLabel: "Smart Sleep Planner — Hi-Fi",
        color: "purple",
        highlight: true,
      },
      {
        key: "02",
        name: "Daily Check-In",
        desc: "Log wake-up time and mood with emoji. Takes under 30 seconds — minimum friction. A Last Log Summary card provides continuity so you always know where you left off.",
        image: "" as string, // 🖼 Hi-fi Check-In.png
        imageLabel: "Daily Check-In — Hi-Fi",
        color: "green",
        highlight: false,
      },
      {
        key: "03",
        name: "Insights Dashboard",
        desc: "Weekly Sleep Score, Sleep Consistency metrics, Mood Correlation chart, and Achievement badges — showing students exactly how consistent sleep affects their mood over time.",
        image: "" as string, // 🖼 Hi-fi Insights.png
        imageLabel: "Insights Dashboard — Hi-Fi",
        color: "purple",
        highlight: false,
      },
      {
        key: "04",
        name: "Reminders",
        desc: "Bedtime alerts that directly address procrastination — the pain point most frequently mentioned in user interviews.",
        image: "" as string,
        imageLabel: "Reminders Feature",
        color: "green",
        highlight: false,
      },
    ],

    testingTitle: "Usability Testing",
    testingIntro: "Tested with 3 students across 5 tasks: Plan Bedtime, Add Event, Daily Check-in, Set Reminder, Review Insights.",
    testingResult: "Task success rate: 80–100%. Navigation smooth. Motivational streaks highly valued.",
    fixes: [
      {
        problem: "Add Event button was too small",
        fix: "Enlarged the button",
        color: "orange",
      },
      {
        problem: "Reminder feature was hard to find",
        fix: "Added a prominent \"Start Sleep Session\" button to the center of the Home screen",
        color: "orange",
      },
      {
        problem: "Check-in lacked continuity between sessions",
        fix: "Added Last Log Summary card",
        color: "orange",
      },
    ],
    testingImage: "" as string, // 🖼 Usability Testing slide
    testingImageLabel: "Usability Testing Slide",

    lessonsTitle: "What I Learned",
    lessons: [
      {
        title: "The best problems are the ones you live yourself",
        body: "Starting from personal experience gave research a clear direction — and gave every design decision a reason that could always be defended.",
      },
      {
        title: "Lo-fi is more valuable than it looks",
        body: "Wireframing first surfaces flow problems before you're committed to visuals. Skipping this step costs more time in rework than the shortcut ever saves.",
      },
      {
        title: "Usability testing changes the design",
        body: "Features we thought were obvious, users couldn't find. Real testing teaches in ways that thinking alone never can.",
      },
    ],

    backLabel: "Back to all projects",
  },

  th: {
    title: "Sleep Sync",
    subtitle: "แอปจัดการการนอนสำหรับนักศึกษา",
    year: "2025",
    role: "ฟรีแลนซ์ · UX/UI Designer · End-to-End UX Process",
    tagline: "เริ่มจากปัญหาที่ตัวเองเผชิญทุกวัน จบด้วย solution ที่ผ่านการ validate จากผู้ใช้จริง 3 คน",
    statusTag: "ฟรีแลนซ์ · Figma Prototype · Usability Tested",
    tags: ["Figma", "UX Research", "Usability Testing", "Prototyping"],
    figmaLink: "",
    heroImage: "" as string,

    problemTitle: "ปัญหา",
    problemBody: "โจทย์คือออกแบบแอปที่แก้ปัญหาของนักศึกษา เราเลือกปัญหาการนอน เพราะมันคือปัญหาของตัวเองและคนรอบข้างจริงๆ",
    problemDetail: "นักศึกษาไม่ได้นอนน้อยเพราะไม่รู้ว่าต้องนอน แต่เพราะ schedule ไม่แน่นอน — วันนี้มีกลุ่ม พรุ่งนี้สอบ ดึกดูโซเชียล แอปนอนที่มีอยู่แก้ได้แค่การ track แต่ไม่ได้ช่วย plan ให้สอดคล้องกับชีวิตจริงของนักศึกษาเลย",
    problemImage: "" as string,
    problemImageLabel: "สไลด์ Problem",

    researchTitle: "Research",
    researchIntro: "ก่อน design บรรทัดแรก ทำ research ก่อน 2 ส่วน",
    researchItems: [
      {
        key: "01",
        label: "User Interviews",
        color: "purple",
        findings: [
          { tag: "Pain point", text: "Bedtime procrastination", color: "red" },
          { tag: "Pain point", text: "ตื่นแล้วยังเหนื่อย", color: "red" },
          { tag: "Pain point", text: "พึ่งคาเฟอีน", color: "red" },
          { tag: "Need", text: "Reminder", color: "green" },
          { tag: "Need", text: "Schedule-based planning", color: "green" },
          { tag: "Need", text: "Progress tracking", color: "green" },
        ],
      },
      {
        key: "02",
        label: "Competitive Analysis",
        color: "purple",
        gap: "ดู Calm, Sleep Cycle, Pzizz — พบ key gap เดียวกัน: ไม่มีแอปไหนเลยที่ link การนอนเข้ากับ academic schedule นี่คือ unique value ของ Sleep Sync",
      },
    ],
    researchImage: "" as string,
    researchImageLabel: "สไลด์ Research & Insights",

    personaTitle: "Persona",
    personaName: "\"May\" — อายุ 20 ปี นักศึกษาปี 2",
    personaDetails: [
      "Balance เรียน กลุ่ม และ part-time",
      "เข้านอนตี 1-2 ตื่น 7:30",
      "ดื่มกาแฟทุกเช้า",
      "รู้สึกว่าแอปที่มีอยู่ generic เกินไปสำหรับชีวิตนักศึกษา",
    ],
    personaInsight: "Persona นี้ drive ทุก design decision ตลอดโปรเจค ถ้า decision ไหนไม่ช่วย May ได้ มันก็ไม่ควรอยู่ในแอป",
    personaImage: "" as string,
    personaImageLabel: "สไลด์ Design Decisions — User-Centered Approach",

    lofiTitle: "Lo-Fi → Hi-Fi",
    lofiIntro: "เริ่มจาก Lo-fi wireframe ก่อน 5 screens ทั้งหมด เพื่อ validate structure และ flow ก่อน commit กับ visual",
    lofiScreens: [
      { label: "Home", image: "" as string },
      { label: "Check-In", image: "" as string },
      { label: "Planner", image: "" as string },
      { label: "Planner Calendar", image: "" as string },
      { label: "Insights", image: "" as string },
    ],
    lofiToHifi: "จาก Lo-fi สู่ Hi-fi สิ่งที่เปลี่ยนไม่ใช่แค่สี แต่คือการตัดสินใจ visual ที่ตั้งใจทุกจุด",
    visualSystem: "Dark navy + purple + pink ให้ความรู้สึก calming และ premium ไม่ aggressive เหมาะกับ context การใช้ตอนก่อนนอน Gamification elements เช่น streak badge และ sleep score circle เพิ่ม motivation โดยไม่ทำให้แอปดูเหมือนเกม",
    visualImage: "" as string,
    visualImageLabel: "สไลด์ Visual System",

    featuresTitle: "4 Core Features",
    features: [
      {
        key: "01",
        name: "Smart Sleep Planner",
        desc: "input ตารางเรียน ระบบ suggest bedtime และ wake-up time ที่เหมาะสมโดยอัตโนมัติ feature นี้ไม่มีในแอปคู่แข่งเลย",
        image: "" as string,
        imageLabel: "Smart Sleep Planner — Hi-Fi",
        color: "purple",
        highlight: true,
      },
      {
        key: "02",
        name: "Daily Check-In",
        desc: "log wake-up time และ mood ด้วย emoji ใช้เวลาไม่เกิน 30 วินาที ต่ำ friction มากที่สุด มี Last Log Summary card เพื่อ continuity",
        image: "" as string,
        imageLabel: "Daily Check-In — Hi-Fi",
        color: "green",
        highlight: false,
      },
      {
        key: "03",
        name: "Insights Dashboard",
        desc: "Weekly Sleep Score, Sleep Consistency metrics, Mood Correlation chart, และ Achievement badges ทำให้นักศึกษาเห็นว่าการนอนสม่ำเสมอส่งผลต่อ mood ยังไง",
        image: "" as string,
        imageLabel: "Insights Dashboard — Hi-Fi",
        color: "purple",
        highlight: false,
      },
      {
        key: "04",
        name: "Reminders",
        desc: "bedtime alert ลด procrastination — จุด pain point ที่ user interviews พบบ่อยที่สุด",
        image: "" as string,
        imageLabel: "Reminders Feature",
        color: "green",
        highlight: false,
      },
    ],

    testingTitle: "Usability Testing",
    testingIntro: "ทดสอบกับนักศึกษา 3 คน ให้ทำ 5 tasks: Plan Bedtime, Add Event, Daily Check-in, Set Reminder, Review Insights",
    testingResult: "Task success rate: 80–100% Navigation smooth Motivational streaks highly valued",
    fixes: [
      {
        problem: "Add Event button เล็กเกินไป",
        fix: "ขยาย button",
        color: "orange",
      },
      {
        problem: "Reminder feature หาไม่เจอ",
        fix: "เพิ่ม \"Start Sleep Session\" button ตรงกลางหน้า Home",
        color: "orange",
      },
      {
        problem: "Check-in ขาด continuity",
        fix: "เพิ่ม Last Log Summary card",
        color: "orange",
      },
    ],
    testingImage: "" as string,
    testingImageLabel: "สไลด์ Usability Testing",

    lessonsTitle: "สิ่งที่ได้เรียนรู้",
    lessons: [
      {
        title: "ปัญหาที่ดีที่สุดคือปัญหาที่คุณเป็นคนเจอเอง",
        body: "เริ่มจากตัวเองทำให้ research มีทิศทาง และ design decision มีเหตุผลที่ defend ได้เสมอ",
      },
      {
        title: "Lo-fi มีค่ากว่าที่คิด",
        body: "การทำ wireframe ก่อนทำให้พบ flow problem ก่อน commit กับ visual ถ้าข้ามขั้นตอนนี้จะเสียเวลา rework มากกว่า",
      },
      {
        title: "Usability testing เปลี่ยน design",
        body: "feature ที่เราคิดว่าชัดอยู่แล้ว user หาไม่เจอก็มี การทดสอบจริงสอนในแบบที่การนั่งคิดคนเดียวสอนไม่ได้",
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
export default function SleepSyncPage() {
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
                <ExternalLink className="w-3.5 h-3.5" /> View Figma Prototype
              </a>
            </motion.div>
          )}

          {/* Hero image */}
          <motion.div variants={fadeUp} className="mt-8">
            {c.heroImage
              ? <img src={c.heroImage} alt={c.title} className="w-full rounded-2xl border border-border object-cover" />
              : <ImagePlaceholder label="Cover / Hero Image" tall />
            }
          </motion.div>
        </motion.section>

        {/* ── The Problem ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.problemTitle}
          </motion.p>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
            {c.problemBody}
          </motion.p>
          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-muted/30 p-6 flex gap-5 items-start mb-8">
            <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">→</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">{c.problemDetail}</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            {c.problemImage
              ? <img src={c.problemImage} alt={c.problemImageLabel} className="w-full rounded-2xl border border-border object-cover" />
              : <ImagePlaceholder label={c.problemImageLabel} tall />
            }
          </motion.div>
        </motion.section>

        {/* ── Research ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.researchTitle}
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {c.researchIntro}
          </motion.p>

          <div className="space-y-4 mb-8">
            {c.researchItems.map((item) => (
              <motion.div key={item.key} variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
                <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EEEDFE] text-[#3C3489]">{item.key}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3C3489]">{item.label}</span>
                </div>
                <div className="p-6">
                  {"findings" in item ? (
                    <div className="flex flex-wrap gap-2">
                      {item.findings.map((f, fi) => {
                        const p = colorMap[f.color as keyof typeof colorMap]
                        return (
                          <span key={fi} className={`text-xs font-medium px-3 py-1.5 rounded-full ${p.bg} ${p.text}`}>
                            {f.tag}: {f.text}
                          </span>
                        )
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.gap}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp}>
            {c.researchImage
              ? <img src={c.researchImage} alt={c.researchImageLabel} className="w-full rounded-2xl border border-border object-cover" />
              : <ImagePlaceholder label={c.researchImageLabel} tall />
            }
          </motion.div>
        </motion.section>

        {/* ── Persona ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.personaTitle}
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 mb-8">
            {/* Persona card */}
            <div className="rounded-2xl bg-[#EEEDFE] border border-[#c4c0f7] p-6">
              <p className="font-serif text-xl font-bold text-[#3C3489] mb-4">{c.personaName}</p>
              <ul className="space-y-2">
                {c.personaDetails.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#3C3489] opacity-80">
                    <span className="mt-1 text-[#3C3489]">·</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Persona insight */}
            <div className="rounded-2xl border border-border bg-muted/30 p-6 flex gap-5 items-start">
              <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">→</span>
              <p className="text-sm text-muted-foreground leading-relaxed italic">{c.personaInsight}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            {c.personaImage
              ? <img src={c.personaImage} alt={c.personaImageLabel} className="w-full rounded-2xl border border-border object-cover" />
              : <ImagePlaceholder label={c.personaImageLabel} tall />
            }
          </motion.div>
        </motion.section>

        {/* ── Lo-Fi → Hi-Fi ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.lofiTitle}
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {c.lofiIntro}
          </motion.p>

          {/* Lo-fi grid */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {c.lofiScreens.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                {s.image
                  ? <img src={s.image} alt={s.label} className="w-full rounded-xl border border-border object-cover aspect-[9/16]" />
                  : (
                    <div className="w-full rounded-xl bg-muted/50 border border-dashed border-border aspect-[9/16] flex flex-col items-center justify-center gap-1 text-muted-foreground">
                      <span className="text-xl">🖼</span>
                      <p className="text-xs opacity-60 text-center px-1">ใส่รูป</p>
                    </div>
                  )
                }
                <p className="text-xs text-center text-muted-foreground font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Lo-fi → Hi-fi transition note */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-muted/30 p-6 flex gap-5 items-start mb-6">
            <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">→</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">{c.lofiToHifi}</p>
          </motion.div>

          {/* Visual system */}
          <motion.div variants={fadeUp} className="rounded-2xl bg-[#EEEDFE] border border-[#c4c0f7] p-6 mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3C3489] mb-2">Visual System</p>
            <p className="text-sm text-[#3C3489] opacity-80 leading-relaxed">{c.visualSystem}</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            {c.visualImage
              ? <img src={c.visualImage} alt={c.visualImageLabel} className="w-full rounded-2xl border border-border object-cover" />
              : <ImagePlaceholder label={c.visualImageLabel} tall />
            }
          </motion.div>
        </motion.section>

        {/* ── 4 Core Features ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            {c.featuresTitle}
          </motion.p>

          <div className="space-y-6">
            {c.features.map((feature) => {
              const palette = colorMap[feature.color as keyof typeof colorMap]
              return (
                <motion.div key={feature.key} variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
                  <div className={`px-6 py-4 border-b border-border flex items-center gap-3 ${feature.highlight ? "bg-[#EEEDFE]" : "bg-muted/30"}`}>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${palette.num}`}>{feature.key}</span>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${palette.text}`}>{feature.name}</span>
                    {feature.highlight && (
                      <span className="ml-auto text-xs font-medium text-[#3C3489] opacity-70">← unique to Sleep Sync</span>
                    )}
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 items-start">
                    <div>
                      {feature.image
                        ? <img src={feature.image} alt={feature.imageLabel} className="w-full rounded-xl border border-border object-cover" />
                        : (
                          <div className="w-full rounded-xl bg-muted/50 border border-dashed border-border aspect-[9/16] flex flex-col items-center justify-center gap-2 text-muted-foreground">
                            <span className="text-2xl">🖼</span>
                            <p className="text-xs font-medium text-center px-2">{feature.imageLabel}</p>
                            <p className="text-xs opacity-60">ใส่ path รูปภาพ</p>
                          </div>
                        )
                      }
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* ── Usability Testing ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.testingTitle}
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-3">
            {c.testingIntro}
          </motion.p>
          <motion.div variants={fadeUp} className="rounded-2xl bg-[#E1F5EE] border border-[#a3d9c4] p-5 mb-8">
            <p className="text-sm font-semibold text-[#0F6E56]">{c.testingResult}</p>
          </motion.div>

          {/* Feedback → Fixes */}
          <motion.div variants={fadeUp} className="space-y-3 mb-8">
            {c.fixes.map((fix, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#FCEBEB] border border-[#f0bfbf] p-4 flex gap-3 items-start">
                  <span className="text-xs font-bold text-[#A32D2D] mt-0.5 shrink-0">✗</span>
                  <p className="text-sm text-[#A32D2D] leading-relaxed">{fix.problem}</p>
                </div>
                <div className="rounded-2xl bg-[#E1F5EE] border border-[#a3d9c4] p-4 flex gap-3 items-start">
                  <span className="text-xs font-bold text-[#0F6E56] mt-0.5 shrink-0">✓</span>
                  <p className="text-sm text-[#0F6E56] leading-relaxed">{fix.fix}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            {c.testingImage
              ? <img src={c.testingImage} alt={c.testingImageLabel} className="w-full rounded-2xl border border-border object-cover" />
              : <ImagePlaceholder label={c.testingImageLabel} tall />
            }
          </motion.div>
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
