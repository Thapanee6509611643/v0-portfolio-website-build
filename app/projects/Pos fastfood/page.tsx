"use client"

import { useLang } from "@/context/LangContext"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"

const content = {
  en: {
    title: "Fast Food POS System",
    year: "2024",
    role: "University Project · UX/UI Designer · Team of 9",
    tagline: "My first Figma file. Designed from a database schema, not a mood board. 6 screens, 6 days.",
    links: { figma: "" },
    statusTag: "University Project · Figma Prototype",
    tags: ["Figma", "UX/UI Design"],
    heroImage: "" as string,
    brief: {
      title: "The Brief",
      body: "This project was part of CS251 Database Systems. A team of 9 — DB Designers, Backend, Frontend, and UX/UI — each took a role. My job was to take the functional requirements and database schema the team had built together, and turn them into an interface that cashiers could actually use on the floor.",
      teamRoles: ["DB Designer", "Backend Dev", "Frontend Dev", "UX/UI Designer"],
    },
    starting: {
      title: "Starting Point",
      body: "This was my first time using Figma. No low-fi wireframes, no formal user research — just a requirements document from the team and 6 days to design 6 screens.",
      input: "Every screen came from what the system needed to do: add menu items, calculate change, manage promotions, view transactions. The requirements were the design brief. Not references, not mood boards.",
    },
    screens: {
      title: "6 Screens, 6 Roles",
      items: [
        { name: "Login", image: "" as string, desc: "Employee ID + Password. Automatic Time In recorded on login.", highlight: false },
        { name: "Home (Order Taking)", image: "" as string, desc: "The screen that took the most time. 3-zone layout: menu categories left, food grid center, order list right. Staff never need to navigate away mid-order. Category filter + promotion section up top for upselling. Color-coded status badges (Wait List / Served) for instant scanning.", highlight: true },
        { name: "Manage Dish", image: "" as string, desc: "Menu and promotion management for owners. Same layout as Home for familiarity — with ADD button and edit/delete action icons layered in.", highlight: false },
        { name: "Member", image: "" as string, desc: "Member list table with search and pagination. Built to handle a large number of members.", highlight: false },
        { name: "Transaction", image: "" as string, desc: "Full sales log with date filtering. Every transaction recorded for reporting.", highlight: false },
        { name: "Account", image: "" as string, desc: "Employee profile + Check In/Out activity log + daily/monthly sales chart.", highlight: false },
      ],
    },
    decisions: {
      title: "Design Decisions — Intentional",
      items: [
        { label: "3-Zone Home Layout", desc: "Cashiers do multiple things at once — pick items, talk to customers, track pending orders. Keeping the order list always visible on the right means zero navigation interruptions during a transaction." },
        { label: "Color-coded Status Badges", desc: "Wait List (orange) / Served (blue). Staff can scan the entire order board in one second without reading a single word." },
        { label: "Consistent Component Style Across All Screens", desc: "Same sidebar, same header, same color scheme throughout. First time in Figma — but the intent was that every screen should feel like it came from the same system." },
      ],
    },
    reflection: {
      title: "Reflection",
      body: "If I rebuilt this today, I'd do at least two things differently — start with low-fidelity wireframes to validate layout with the team before committing to visuals, and map the user flow explicitly from login to checkout.",
      lesson: "But what this project taught me is that constraints help you decide faster. When requirements are clear and time is limited, designing something that works matters more than designing something perfect.",
    },
  },
  th: {
    title: "Fast Food POS System",
    year: "2024",
    role: "University Project · UX/UI Designer · ทีม 9 คน",
    tagline: "ไฟล์ Figma แรกในชีวิต ออกแบบจาก Database Schema ไม่ใช่ Mood Board 6 หน้า 6 วัน",
    links: { figma: "" },
    statusTag: "University Project · Figma Prototype",
    tags: ["Figma", "UX/UI Design"],
    heroImage: "" as string,
    brief: {
      title: "โจทย์ที่ได้รับ",
      body: "โปรเจคนี้เป็นส่วนหนึ่งของวิชา CS251 Database Systems ทีม 9 คนแบ่งหน้าที่กัน — DB Designer, Backend, Frontend และ UX/UI Designer งานของเราคือแปลง Functional Requirements และ Database Schema ที่ทีมออกแบบร่วมกันให้กลายเป็น Interface ที่พนักงานหน้าร้านใช้งานได้จริง",
      teamRoles: ["DB Designer", "Backend Dev", "Frontend Dev", "UX/UI Designer"],
    },
    starting: {
      title: "จุดเริ่มต้น",
      body: "นี่คือครั้งแรกที่ใช้ Figma เลย ไม่มี Low-fi Wireframe ไม่มี User Research Formal — มีแค่ Requirements Document จากทีม และ 6 วันในการออกแบบ 6 หน้าให้เสร็จ",
      input: "ทุก Screen ออกมาจากสิ่งที่ระบบต้องทำได้: เพิ่มรายการอาหาร, คำนวณเงินทอน, จัดการ Promotion, ดู Transaction — Requirements คือ Design Brief ไม่ใช่ Reference หรือ Mood Board",
    },
    screens: {
      title: "6 Screens, 6 Roles",
      items: [
        { name: "Login", image: "" as string, desc: "Employee ID + Password ระบบบันทึก Time In อัตโนมัติเมื่อล็อกอิน", highlight: false },
        { name: "Home (Order Taking)", image: "" as string, desc: "หน้าที่ใช้เวลาออกแบบมากที่สุด Layout แบ่ง 3 Zone ชัดเจน: เมนูซ้าย, Food Grid กลาง, Order List ขวา พนักงานไม่ต้องเปลี่ยนหน้าจอระหว่างรับออเดอร์เลย มี Filter ตาม Category และ Promotion Section ด้านบน Status Badge สี (Wait List / Served) ช่วยให้เห็นสถานะออเดอร์ทั้งหมดได้ทันที", highlight: true },
        { name: "Manage Dish", image: "" as string, desc: "หน้าจัดการเมนูและ Promotion สำหรับเจ้าของร้าน ใช้ Layout เดียวกับ Home เพื่อให้ Familiar แต่เพิ่ม ADD Button และ Action Icons", highlight: false },
        { name: "Member", image: "" as string, desc: "ตาราง List สมาชิกพร้อม Search และ Pagination รองรับสมาชิกจำนวนมาก", highlight: false },
        { name: "Transaction", image: "" as string, desc: "บันทึกการขายทุกรายการ Filter ตามวันที่ได้ ครบทุก Transaction เพื่อการ Report", highlight: false },
        { name: "Account", image: "" as string, desc: "โปรไฟล์พนักงาน + Check In/Out Activity Log + Sales Chart รายวัน/รายเดือน", highlight: false },
      ],
    },
    decisions: {
      title: "Design Decisions ที่ตั้งใจ",
      items: [
        { label: "Home Layout 3 Zone", desc: "พนักงานร้านอาหารต้องทำหลายอย่างพร้อมกัน การวาง Order List ไว้ขวาตลอดเวลาทำให้ไม่ต้อง Navigate ออกไประหว่างรับออเดอร์" },
        { label: "Color-coded Status Badge", desc: "Wait List (ส้ม) / Served (ฟ้า) พนักงานสแกนสถานะออเดอร์ทั้งหมดได้ใน 1 วินาที โดยไม่ต้องอ่านแม้แต่คำเดียว" },
        { label: "Consistent Component Style ทุกหน้า", desc: "Sidebar เดิม, Header เดิม, Color Scheme เดิมตลอด ตั้งใจให้ทุกหน้า Feel เหมือนมาจากระบบเดียวกัน" },
      ],
    },
    reflection: {
      title: "Reflection",
      body: "ถ้าทำใหม่วันนี้จะทำต่างออกไปอย่างน้อย 2 อย่าง — เริ่มจาก Low-fidelity Wireframe ก่อนเพื่อ Validate Layout กับทีม และทำ User Flow ให้ชัดขึ้นตั้งแต่ Login จนถึง Checkout",
      lesson: "แต่สิ่งที่โปรเจคนี้สอนคือ Constraint ช่วยให้ตัดสินใจได้เร็ว เมื่อมี Requirements ที่ชัดและเวลาที่จำกัด การ Design ออกมาได้จริงสำคัญกว่าการ Design ได้สมบูรณ์แบบ",
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

export default function POSFastFoodPage() {
  const { lang, setLang } = useLang()
  const c = content[lang]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /><span className="font-medium">Thapanee.</span>
          </Link>
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            {(["en", "th"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide transition-all ${lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24">

        {/* ── Hero ── */}
        <motion.section key={`sec-1-${lang}`} className="pt-14 pb-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{c.role} · {c.year}</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4">{c.title}</motion.h1>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">{c.tagline}</motion.p>
            </div>
            <motion.span variants={fadeUp} className="self-start md:self-end inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border whitespace-nowrap">{c.statusTag}</motion.span>
          </div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
            {c.tags.map((t) => <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">{t}</span>)}
          </motion.div>
          {c.links.figma && (
            <motion.div variants={fadeUp} className="flex gap-3 mt-6">
              <a href={c.links.figma} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-xl hover:bg-foreground/85 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" /> Figma Prototype
              </a>
            </motion.div>
          )}
        </motion.section>

        {/* ── Hero Image ── */}
        <motion.section key={`sec-2-${lang}`} className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          {c.heroImage ? (
            <img src={c.heroImage} alt={c.title} className="w-full rounded-2xl border border-border object-cover" />
          ) : (
            <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-64 md:h-80 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <span className="text-3xl">🖼</span>
              <p className="text-sm font-medium">Home — Order Taking Screen</p>
              <p className="text-xs opacity-60">ใส่ path รูป Home.png</p>
            </div>
          )}
        </motion.section>

        {/* ── The Brief ── */}
        <motion.section key={`sec-3-${lang}`} className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">The Brief</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.brief.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">{c.brief.body}</motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {c.brief.teamRoles.map((role) => (
              <span key={role} className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted/30 text-muted-foreground font-medium">{role}</span>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Starting Point ── */}
        <motion.section key={`sec-4-${lang}`} className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Starting Point</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.starting.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-4">{c.starting.body}</motion.p>
          <motion.div variants={fadeUp} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-[#E1F5EE]/30">
            <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">✦</span>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.starting.input}</p>
          </motion.div>
        </motion.section>

        {/* ── 6 Screens ── */}
        <motion.section key={`sec-5-${lang}`} className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">{c.screens.title}</motion.p>
          <div className="space-y-6">
            {c.screens.items.map((screen, i) => (
              <motion.div key={screen.name} variants={fadeUp}
                className={`rounded-2xl border overflow-hidden ${screen.highlight ? "border-foreground/20 bg-muted/20" : "border-border"}`}>
                <div className={`px-6 py-4 border-b flex items-center gap-3 ${screen.highlight ? "border-foreground/10 bg-muted/40" : "border-border bg-muted/30"}`}>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${screen.highlight ? "bg-foreground text-background" : "bg-muted text-muted-foreground"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold">{screen.name}</span>
                  {screen.highlight && <span className="text-xs text-muted-foreground ml-auto">Most time spent here</span>}
                </div>
                <div className="p-6">
                  {screen.image ? (
                    <img src={screen.image} alt={screen.name} className="w-full rounded-xl border border-border object-cover mb-4" />
                  ) : (
                    <div className="w-full rounded-xl bg-muted border border-dashed border-border h-48 flex flex-col items-center justify-center gap-2 text-muted-foreground mb-4">
                      <span className="text-2xl">🖥</span>
                      <p className="text-xs font-medium">{screen.name}</p>
                      <p className="text-xs opacity-50">ใส่ path รูป Screenshot</p>
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">{screen.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Design Decisions ── */}
        <motion.section key={`sec-6-${lang}`} className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">{c.decisions.title}</motion.p>
          <div className="space-y-4">
            {c.decisions.items.map((item, i) => (
              <motion.div key={item.label} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-5 p-6 rounded-2xl bg-muted/40 border border-border">
                <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold text-sm mb-1.5">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Reflection ── */}
        <motion.section key={`sec-7-${lang}`} className="py-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Reflection</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.reflection.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">{c.reflection.body}</motion.p>
          <motion.div variants={fadeUp} className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-muted/30">
            <span className="text-muted-foreground/40 text-2xl leading-none flex-shrink-0">"</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">{c.reflection.lesson}</p>
          </motion.div>
        </motion.section>

        {/* ── Back link ── */}
        <div className="pt-4 pb-8 flex justify-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />Back to all projects
          </Link>
        </div>

      </main>
    </div>
  )
}
