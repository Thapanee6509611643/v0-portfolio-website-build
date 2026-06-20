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
    title: "Restaurant POS",
    subtitle: "UI Redesign",
    year: "2025",
    role: "Freelance Project · UX/UI Designer · Figma",
    tagline: "Client came with wireframes and a system that worked but didn't feel right. I redesigned it to feel as good as it functions — approved on the first try.",
    statusTag: "Freelance · Delivered · Client Approved",
    tags: ["Figma", "Component Design", "Design System", "Prototype"],
    figmaLink: "", // 🔗 ใส่ link Figma ที่นี่

    overviewTitle: "Overview",
    overview: "The client already had a fully functional POS system — but it didn't feel right. They came with wireframes for all 7 screens and a clear vision. My job was to redesign both the visual layer and the UX to be noticeably better, while staying true to what they envisioned.",
    overviewImage: "/components/Photos/pos.png" as string, // 🖼 ใส่ path รูป Design System Overview

    designSystemTitle: "Design System First",
    designSystemBody: "Before touching a single screen, I built a Design System from scratch: a typography scale, a color palette (orange as primary, neutral grays for backgrounds), button variants, and reusable components like Row, Table Header, and Form Field.",
    designSystemReason: "With 7 screens to redesign in parallel, a single source of truth means every screen stays consistent without manual cross-checking — and developers can read specs directly without asking follow-up questions.",
    designSystemImage: "/components/Restaurant POS/Design System Canvas.png" as string, // 🖼 ใส่ path รูป Design System Canvas

    screensTitle: "7 Screens Redesigned",
    screens: [
      {
        key: "01",
        name: "Cashier (Main Screen)",
        desc: "The most complex and critical screen. Layout is divided into 3 zones: sidebar navigation left, menu grid center, order summary right. Staff see everything in one view — no need to navigate away to check what's been added. Category filters are pill tabs at the top, and payment method sits directly below the order summary so the entire flow completes in one place.",
        image: "/components/Restaurant POS/cashier.png" as string, // 🖼 cashier.png
        imageLabel: "Cashier Screen",
        color: "green",
      },
      {
        key: "02",
        name: "Category List",
        desc: "A table list with an added status toggle. Staff can enable or disable a category in a single click — no need to open an edit screen. Green/gray status badges give an immediate read of every category's state at a glance.",
        image: "/components/Restaurant POS/Category List.png" as string, // 🖼 Category_List.png
        imageLabel: "Category List Screen",
        color: "green",
      },
      {
        key: "03",
        name: "Item List",
        desc: "Food items with thumbnail images in list view, each with a visible on/off toggle for sale status. Owners can manage the full menu quickly without drilling into individual item pages.",
        image: "/components/Restaurant POS/Item List.png" as string, // 🖼 Item_List.png
        imageLabel: "Item List Screen",
        color: "green",
      },
      {
        key: "04",
        name: "Create Item",
        desc: "The most form-heavy screen. Split into two panels: basic info on the left, option management on the right. Supports modifier groups (meat type, size) with drag-and-drop reordering and add-on pricing.",
        image: "/components/Restaurant POS/Create Item.png" as string, // 🖼 Create_Item.png
        imageLabel: "Create Item Screen",
        color: "purple",
      },
      {
        key: "05",
        name: "Order List",
        desc: "A full transaction history with clear status badges — Paid (green) and Cancelled (red). Filterable by date for quick lookup.",
        image: "/components/Restaurant POS/Order List.png" as string, // 🖼 Order_List.png
        imageLabel: "Order List Screen",
        color: "purple",
      },
      {
        key: "06",
        name: "Order Detail (Popup)",
        desc: "A modal with a complete receipt breakdown including discounts and total. Color-coded action buttons: Print Receipt and Cancel Order.",
        image: "/components/Restaurant POS/Order List - Order Detail.png" as string, // 🖼 Order_List_-_Order_Detail.png
        imageLabel: "Order Detail Popup",
        color: "purple",
      },
    ],

    decisionsTitle: "UX Decisions",
    decisions: [
      {
        label: "Orange as primary color",
        text: "Chosen to match the restaurant's brand — warm, appetite-stimulating, and visually prominent against neutral backgrounds without feeling overwhelming.",
        color: "orange",
      },
      {
        label: "Toggles instead of buttons for status",
        text: "Enabling or disabling a menu item or category is a high-frequency action. A toggle does it in 1 click — no edit screen required.",
        color: "green",
      },
      {
        label: "Consistent sidebar navigation",
        text: "The same icon sidebar appears on every screen. Staff always know where they are, and can jump anywhere without returning to a home screen.",
        color: "purple",
      },
      {
        label: "Payment stays in the Cashier screen",
        text: "No screen change needed to process payment. Fewer steps, fewer errors — especially critical during rush hour.",
        color: "purple",
      },
    ],

    lessonsTitle: "What I Learned",
    lessons: [
      {
        title: "Design System as accelerator",
        body: "Investing time upfront in components made designing 7 screens faster and more consistent than building page by page ever could have been. A Design System isn't overhead — it's the foundation that lets you move fast without breaking consistency.",
      },
      {
        title: "Understanding intent before designing",
        body: "Getting client approval on the first try wasn't luck — it was because I read the wireframes carefully and understood the client's intent before placing even the first element.",
      },
      {
        title: "B2B UX is measured in efficiency",
        body: "Staff use this POS for hours every day. Every click you remove is real value. In B2B tools, UX is measured in efficiency, not aesthetics — and that distinction changes every design decision you make.",
      },
    ],

    backLabel: "Back to all projects",
  },

  th: {
    title: "Restaurant POS",
    subtitle: "UI Redesign",
    year: "2025",
    role: "ฟรีแลนซ์ · UX/UI Designer · Figma",
    tagline: "ลูกค้ามาพร้อม wireframe และระบบที่ทำงานได้ครบ แต่รู้สึกว่ายังไม่ดีพอ เราออกแบบใหม่ให้มันรู้สึกดีเท่ากับที่มันทำงานได้ — ผ่านครั้งแรก",
    statusTag: "ฟรีแลนซ์ · ส่งมอบแล้ว · ลูกค้าอนุมัติ",
    tags: ["Figma", "Component Design", "Design System", "Prototype"],
    figmaLink: "",

    overviewTitle: "ภาพรวม",
    overview: "ลูกค้ามีระบบ POS ที่ทำงานได้ครบถ้วนอยู่แล้ว แต่รู้สึกว่ายังไม่ดีพอในด้าน UX และ Visual พวกเขามาพร้อม wireframe ทั้ง 7 หน้าและ vision ที่ชัดเจน งานของเราคือ redesign ทั้ง UI และ UX ให้ดีขึ้นอย่างเห็นได้ชัด โดยยังต้องตรงกับสิ่งที่ลูกค้าต้องการ",
    overviewImage: "" as string,

    designSystemTitle: "สร้าง Design System ก่อน",
    designSystemBody: "ก่อนจะแตะหน้าใดก็ตาม เราสร้าง Design System ขึ้นมาก่อนเลย ประกอบด้วย Typography scale, Color palette (orange เป็น primary, neutral grays สำหรับพื้นหลัง), Button variants และ reusable components อย่าง Row, Table Header, และ Form Field",
    designSystemReason: "เมื่อต้อง redesign 7 หน้าพร้อมกัน การมี single source of truth ทำให้ทุกหน้า consistent โดยไม่ต้องตรวจสอบทีละจุด และ dev สามารถอ่าน spec ได้โดยตรงโดยไม่ต้องถามเพิ่ม",
    designSystemImage: "" as string,

    screensTitle: "7 หน้าที่ออกแบบใหม่",
    screens: [
      {
        key: "01",
        name: "Cashier (หน้าหลัก)",
        desc: "หน้าที่ซับซ้อนและสำคัญที่สุด layout แบ่ง 3 zone: sidebar navigation ซ้าย, menu grid กลาง, order summary ขวา พนักงานเห็นทุกอย่างในหน้าเดียว ไม่ต้อง navigate ออกไป category filter เป็น pill tabs ที่ top และ payment method อยู่ด้านล่าง order summary ให้ flow จบในที่เดียว",
        image: "" as string,
        imageLabel: "Cashier Screen",
        color: "green",
      },
      {
        key: "02",
        name: "Category List",
        desc: "ตาราง list ที่เพิ่ม toggle สถานะ เปิด/ปิดใช้งาน category ได้ทันทีใน 1 click status badge สีเขียว/เทาทำให้เห็นสถานะทุก category ในครั้งเดียว",
        image: "" as string,
        imageLabel: "Category List Screen",
        color: "green",
      },
      {
        key: "03",
        name: "Item List",
        desc: "แสดงรูปอาหารใน list view พร้อม toggle เปิด/ปิดขาย เจ้าของร้านจัดการเมนูได้เร็วโดยไม่ต้องเข้าหน้าย่อย",
        image: "" as string,
        imageLabel: "Item List Screen",
        color: "green",
      },
      {
        key: "04",
        name: "Create Item",
        desc: "หน้าที่ซับซ้อนที่สุดในแง่ form design แบ่ง 2 panel: ข้อมูลพื้นฐานซ้าย, จัดการตัวเลือกสินค้าขวา รองรับ modifier groups พร้อม drag-and-drop reorder และ add-on pricing",
        image: "" as string,
        imageLabel: "Create Item Screen",
        color: "purple",
      },
      {
        key: "05",
        name: "Order List",
        desc: "รายการ transaction ทั้งหมดพร้อม status badge ชัดเจน ชำระแล้ว (เขียว) / ยกเลิก (แดง) filter ตามวันที่ได้",
        image: "" as string,
        imageLabel: "Order List Screen",
        color: "purple",
      },
      {
        key: "06",
        name: "Order Detail (Popup)",
        desc: "Modal แสดง receipt detail ครบถ้วน รวมถึง discount และ total พร้อมปุ่ม พิมพ์ใบเสร็จ และ ยกเลิกรายการ ที่ color-coded ชัดเจน",
        image: "" as string,
        imageLabel: "Order Detail Popup",
        color: "purple",
      },
    ],

    decisionsTitle: "UX Decisions ที่ตั้งใจ",
    decisions: [
      {
        label: "Orange เป็น primary color",
        text: "เลือกให้ตรงกับ brand ของร้านอาหาร อบอุ่น กระตุ้นความอยากอาหาร และโดดเด่นบน neutral background โดยไม่ overwhelming",
        color: "orange",
      },
      {
        label: "Toggle แทน button สำหรับ status",
        text: "การเปิด/ปิดเมนูหรือ category เป็น action ที่ทำบ่อยมาก Toggle ทำให้ทำได้ใน 1 click โดยไม่ต้องเข้าหน้าแก้ไข",
        color: "green",
      },
      {
        label: "Consistent sidebar navigation",
        text: "ใช้ icon sidebar เดิมทุกหน้า พนักงานรู้ตลอดว่าอยู่หน้าไหน และไปหน้าอื่นได้เสมอโดยไม่ต้องกลับ home",
        color: "purple",
      },
      {
        label: "Payment ไว้ใน cashier screen เดียว",
        text: "ไม่ต้องเปลี่ยนหน้าเพื่อชำระเงิน ลด step และลดโอกาสผิดพลาดในช่วง rush hour",
        color: "purple",
      },
    ],

    lessonsTitle: "สิ่งที่ได้เรียนรู้",
    lessons: [
      {
        title: "Design System คือ Accelerator",
        body: "การลงทุนเวลาสร้าง component ก่อนทำให้ออกแบบ 7 หน้าได้เร็วกว่าและ consistent กว่าการออกแบบทีละหน้ามาก Design System ไม่ใช่ overhead — มันคือรากฐานที่ทำให้ move fast โดยไม่เสีย consistency",
      },
      {
        title: "เข้าใจ Intent ก่อน Design",
        body: "Client approval ตั้งแต่ครั้งแรกไม่ได้หมายความว่าเราโชคดี มันหมายความว่าเราอ่าน wireframe และเข้าใจ intent ของ client ได้ถูกต้องก่อน design แม้แต่เส้นแรก",
      },
      {
        title: "UX ของ B2B วัดจาก Efficiency",
        body: "พนักงานต้องใช้ POS นี้หลายชั่วโมงต่อวัน ทุก click ที่ลดได้คือ value จริงๆ ใน B2B tool UX วัดจาก efficiency ไม่ใช่ความสวย และความแตกต่างนั้นเปลี่ยนทุก design decision",
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

// ============================================================
//  Color palette helper
// ============================================================
const colorMap = {
  orange: { bg: "bg-[#FAEEDA]", text: "text-[#633806]", badge: "bg-[#FAEEDA] text-[#633806]", num: "bg-[#FAEEDA] text-[#633806]" },
  green:  { bg: "bg-[#E1F5EE]", text: "text-[#0F6E56]", badge: "bg-[#E1F5EE] text-[#0F6E56]", num: "bg-[#E1F5EE] text-[#0F6E56]" },
  purple: { bg: "bg-[#EEEDFE]", text: "text-[#3C3489]", badge: "bg-[#EEEDFE] text-[#3C3489]", num: "bg-[#EEEDFE] text-[#3C3489]" },
  red:    { bg: "bg-[#FCEBEB]", text: "text-[#A32D2D]", badge: "bg-[#FCEBEB] text-[#A32D2D]", num: "bg-[#FCEBEB] text-[#A32D2D]" },
}

// ============================================================
//  Page
// ============================================================
export default function PosRedesignPage() {
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

          {/* Lang toggle */}
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

            {/* Status badge */}
            <motion.span
              variants={fadeUp}
              className="self-start inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FAEEDA] text-[#633806] border border-[#e8c98a] whitespace-nowrap"
            >
              {c.statusTag}
            </motion.span>
          </div>

          {/* Tech tags */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
            {c.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                {t}
              </span>
            ))}
          </motion.div>

          {/* Figma link */}
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
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {c.overview}
          </motion.p>

          {/* Overview image */}
          <motion.div variants={fadeUp}>
            {c.overviewImage ? (
              <img src={c.overviewImage} alt="Design System Overview" className="w-full rounded-2xl border border-border object-cover" />
            ) : (
              <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-64 md:h-80 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <span className="text-3xl">🖼</span>
                <p className="text-sm font-medium">Design System Overview — Full Figma Canvas</p>
                <p className="text-xs opacity-60">ใส่ path รูปภาพ</p>
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* ── Design System ── */}
        <motion.section key={`sec-3-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.designSystemTitle}
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-5">
            {c.designSystemBody}
          </motion.p>

          {/* Insight box */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-muted/30 p-6 flex gap-5 items-start mb-8">
            <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">→</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              {c.designSystemReason}
            </p>
          </motion.div>

          {/* Design system image */}
          <motion.div variants={fadeUp}>
            {c.designSystemImage ? (
              <img src={c.designSystemImage} alt="Design System Canvas" className="w-full rounded-2xl border border-border object-cover" />
            ) : (
              <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-56 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <span className="text-3xl">🖼</span>
                <p className="text-sm font-medium">Design System Canvas</p>
                <p className="text-xs opacity-60">ใส่ path รูปภาพ</p>
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* ── 7 Screens ── */}
        <motion.section key={`sec-4-${lang}`}
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
                  {/* Screen header */}
                  <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${palette.num}`}>
                      {screen.key}
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${palette.text}`}>
                      {screen.name}
                    </span>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 items-start">
                    {/* Image */}
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

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {screen.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* ── UX Decisions ── */}
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
