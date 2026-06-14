"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Figma } from "lucide-react"

const content = {
  en: {
    backLabel: "Back to Home",
    year: "2025",
    role: "Freelance Project · UX/UI Designer · Figma",
    title: "Restaurant POS",
    subtitle: "UI Redesign",
    tagline:
      "Client came with wireframes and a system that worked but didn't feel right. I redesigned it to feel as good as it functions — approved on the first try.",
    statusTags: ["Freelance", "Delivered", "Client Approved"],
    techTags: ["Figma", "Component Design", "Design System", "Prototype"],
    figmaLabel: "View Figma Prototype",

    s1Title: "THE BRIEF",
    s1Body:
      "The client already had a fully functional POS system — but it didn't feel right. They came with wireframes for all 7 screens and a clear vision. My job was to redesign both the visual layer and the UX to be noticeably better, while staying true to what they envisioned.",
    s1ImgLabel: "Design System Overview — Full Figma Canvas",

    s2Title: "DESIGN SYSTEM FIRST",
    s2Body:
      "Before touching a single screen, I built a Design System from scratch: a typography scale, a color palette (orange as primary, neutral grays for backgrounds), button variants, and reusable components like Row, Table Header, and Form Field.",
    s2Reason:
      "Why build the system first? With 7 screens to redesign in parallel, a single source of truth means every screen stays consistent without manual cross-checking — and developers can read specs directly without asking follow-up questions.",
    s2ImgLabel: "Design System Canvas",

    s3Title: "7 SCREENS REDESIGNED",

    cashierName: "Cashier (Main Screen)",
    cashierDesc:
      "The most complex and critical screen. The layout is divided into 3 zones: sidebar navigation on the left, a menu grid in the center, and an order summary on the right. Staff see everything in one view — no need to navigate away to check what's been added. Category filters are pill tabs at the top for fast switching, and the payment method sits directly below the order summary so the entire flow completes in one place.",
    cashierImg: "cashier.png",

    categoryName: "Category List",
    categoryDesc:
      "A table list with an added status toggle. Staff can enable or disable a category in a single click — no need to open an edit screen. Green/gray status badges give an immediate read of every category's state at a glance.",
    categoryImg: "Category_List.png",

    itemName: "Item List",
    itemDesc:
      "Food items with thumbnail images in list view, each with a visible on/off toggle for sale status. Owners can manage the full menu quickly without drilling into individual item pages.",
    itemImg: "Item_List.png",

    createItemName: "Create Item",
    createItemDesc:
      "The most form-heavy screen. Split into two panels: basic info on the left, option management on the right. Supports modifier groups (e.g. meat type, size) with drag-and-drop reordering and add-on pricing.",
    createItemImg: "Create_Item.png",

    orderListName: "Order List",
    orderListDesc:
      "A full transaction history with clear status badges — Paid (green) and Cancelled (red). Filterable by date for quick lookup.",
    orderListImg: "Order_List.png",

    orderDetailName: "Order Detail (Popup)",
    orderDetailDesc:
      "A modal with a complete receipt breakdown including discounts and total. Color-coded action buttons: Print Receipt and Cancel Order.",
    orderDetailImg: "Order_List_-_Order_Detail.png",

    s4Title: "UX DECISIONS",
    decisions: [
      {
        color: "orange",
        label: "Orange as primary color",
        text: "Chosen to match the restaurant's brand — warm, appetite-stimulating, and visually prominent against neutral backgrounds without feeling overwhelming.",
      },
      {
        color: "green",
        label: "Toggles instead of buttons for status",
        text: "Enabling or disabling a menu item or category is a high-frequency action. A toggle does it in 1 click — no edit screen required.",
      },
      {
        color: "purple",
        label: "Consistent sidebar navigation",
        text: "The same icon sidebar appears on every screen. Staff always know where they are, and can jump anywhere without returning to a home screen.",
      },
      {
        color: "purple",
        label: "Payment stays in the Cashier screen",
        text: "No screen change needed to process payment. Fewer steps, fewer errors — especially critical during rush hour.",
      },
    ],

    s5Title: "WHAT I LEARNED",
    lessons: [
      {
        quote:
          "A Design System isn't overhead — it's an accelerator. Investing time upfront in components made designing 7 screens faster and more consistent than building page by page ever could have been.",
        label: "Lesson 01",
      },
      {
        quote:
          "Getting client approval on the first try wasn't luck — it was because I read the wireframes carefully and understood the client's intent before placing even the first element.",
        label: "Lesson 02",
      },
      {
        quote:
          "In B2B tools, UX is measured in efficiency, not aesthetics. Staff use this POS for hours every day. Every click you remove is real value.",
        label: "Lesson 03",
      },
    ],
  },

  th: {
    backLabel: "กลับหน้าหลัก",
    year: "2025",
    role: "ฟรีแลนซ์ · UX/UI Designer · Figma",
    title: "Restaurant POS",
    subtitle: "UI Redesign",
    tagline:
      "ลูกค้ามาพร้อม wireframe และระบบที่ทำงานได้ครบ แต่รู้สึกว่ายังไม่ดีพอ เราออกแบบใหม่ให้มันรู้สึกดีเท่ากับที่มันทำงานได้ — ผ่านครั้งแรก",
    statusTags: ["ฟรีแลนซ์", "ส่งมอบแล้ว", "ลูกค้าอนุมัติ"],
    techTags: ["Figma", "Component Design", "Design System", "Prototype"],
    figmaLabel: "ดู Figma Prototype",

    s1Title: "BRIEF ของงาน",
    s1Body:
      "ลูกค้ามีระบบ POS ที่ทำงานได้ครบถ้วนอยู่แล้ว แต่รู้สึกว่ายังไม่ดีพอในด้าน UX และ Visual พวกเขามาพร้อม wireframe ทั้ง 7 หน้าและ vision ที่ชัดเจน งานของเราคือ redesign ทั้ง UI และ UX ให้ดีขึ้นอย่างเห็นได้ชัด โดยยังต้องตรงกับสิ่งที่ลูกค้าต้องการ",
    s1ImgLabel: "ภาพรวม Design System — Canvas ทั้งหมดใน Figma",

    s2Title: "สร้าง DESIGN SYSTEM ก่อน",
    s2Body:
      "ก่อนจะแตะหน้าใดก็ตาม เราสร้าง Design System ขึ้นมาก่อนเลย ประกอบด้วย Typography scale, Color palette (orange เป็น primary, neutral grays สำหรับพื้นหลัง), Button variants และ reusable components อย่าง Row, Table Header, และ Form Field",
    s2Reason:
      "ทำไมต้องทำ Design System ก่อน? เมื่อต้อง redesign 7 หน้าพร้อมกัน การมี single source of truth ทำให้ทุกหน้า consistent โดยไม่ต้องตรวจสอบทีละจุด และ dev สามารถอ่าน spec ได้โดยตรงโดยไม่ต้องถามเพิ่ม",
    s2ImgLabel: "Design System Canvas",

    s3Title: "7 หน้าที่ออกแบบใหม่",

    cashierName: "Cashier (หน้าหลัก)",
    cashierDesc:
      "หน้าที่ซับซ้อนและสำคัญที่สุด layout แบ่ง 3 zone: sidebar navigation ซ้าย, menu grid กลาง, order summary ขวา พนักงานเห็นทุกอย่างในหน้าเดียว ไม่ต้อง navigate ออกไปเพื่อดู order ที่เพิ่มไปแล้ว category filter เป็น pill tabs ที่ top ทำให้สลับหมวดได้เร็ว ส่วน payment method วางไว้ด้านล่าง order summary ให้ flow จบในที่เดียว",
    cashierImg: "cashier.png",

    categoryName: "Category List",
    categoryDesc:
      "ตาราง list ที่เพิ่ม toggle สถานะ เปิด/ปิดใช้งาน category ได้ทันทีโดยไม่ต้องเข้าไปแก้ในหน้าอื่น status badge สีเขียว/เทาทำให้เห็นสถานะทุก category ในครั้งเดียว",
    categoryImg: "Category_List.png",

    itemName: "Item List",
    itemDesc:
      "แสดงรูปอาหารใน list view พร้อม toggle เปิด/ปิดขาย status ที่ชัดเจนทำให้เจ้าของร้านจัดการเมนูได้เร็วโดยไม่ต้องเข้าหน้าย่อย",
    itemImg: "Item_List.png",

    createItemName: "Create Item",
    createItemDesc:
      "หน้าที่ซับซ้อนที่สุดในแง่ form design แบ่ง 2 panel: ข้อมูลพื้นฐานซ้าย, จัดการตัวเลือกสินค้าขวา รองรับ modifier groups เช่น เลือกประเภทเนื้อ, ขนาด พร้อม drag-and-drop reorder และ add-on pricing",
    createItemImg: "Create_Item.png",

    orderListName: "Order List",
    orderListDesc:
      "รายการ transaction ทั้งหมดพร้อม status badge ชัดเจน ชำระแล้ว (เขียว) / ยกเลิก (แดง) filter ตามวันที่ได้",
    orderListImg: "Order_List.png",

    orderDetailName: "Order Detail (Popup)",
    orderDetailDesc:
      "modal ที่แสดง receipt detail ครบถ้วน รวมถึง discount และ total พร้อมปุ่ม พิมพ์ใบเสร็จ และ ยกเลิกรายการ ที่ color-coded ชัดเจน",
    orderDetailImg: "Order_List_-_Order_Detail.png",

    s4Title: "UX DECISIONS ที่ตั้งใจ",
    decisions: [
      {
        color: "orange",
        label: "Orange เป็น primary color",
        text: "เลือกให้ตรงกับ brand ของร้านอาหาร อบอุ่น กระตุ้นความอยากอาหาร และโดดเด่นบน neutral background โดยไม่ overwhelming",
      },
      {
        color: "green",
        label: "Toggle แทน button สำหรับ status",
        text: "การเปิด/ปิดเมนูหรือ category เป็น action ที่ทำบ่อยมาก การใช้ toggle ทำให้ทำได้ใน 1 click โดยไม่ต้องเข้าหน้าแก้ไข",
      },
      {
        color: "purple",
        label: "Consistent sidebar navigation",
        text: "ใช้ icon sidebar เดิมทุกหน้า พนักงานรู้ตลอดว่าอยู่หน้าไหน และไปหน้าอื่นได้เสมอโดยไม่ต้องกลับ home",
      },
      {
        color: "purple",
        label: "Payment ไว้ใน cashier screen เดียว",
        text: "ไม่ต้องเปลี่ยนหน้าเพื่อชำระเงิน ลด step และลดโอกาสผิดพลาดในช่วง rush hour",
      },
    ],

    s5Title: "สิ่งที่ได้เรียนรู้",
    lessons: [
      {
        quote:
          "Design System ไม่ใช่ overhead — มันคือ accelerator การลงทุนเวลาสร้าง component ก่อนทำให้ออกแบบ 7 หน้าได้เร็วกว่าและ consistent กว่าการออกแบบทีละหน้ามาก",
        label: "บทเรียนที่ 01",
      },
      {
        quote:
          "Client approval ตั้งแต่ครั้งแรกไม่ได้หมายความว่าเราโชคดี — มันหมายความว่าเราอ่าน wireframe และเข้าใจ intent ของ client ได้ถูกต้องก่อน design แม้แต่เส้นแรก",
        label: "บทเรียนที่ 02",
      },
      {
        quote:
          "UX ของ B2B tool วัดจาก efficiency ไม่ใช่ความสวย — พนักงานต้องใช้ POS นี้หลายชั่วโมงต่อวัน ทุก click ที่ลดได้คือ value จริงๆ",
        label: "บทเรียนที่ 03",
      },
    ],
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const highlightColors = {
  orange: {
    bg: "bg-[#FAEEDA]",
    text: "text-[#633806]",
    dot: "bg-[#633806]",
  },
  green: {
    bg: "bg-[#E1F5EE]",
    text: "text-[#0F6E56]",
    dot: "bg-[#0F6E56]",
  },
  purple: {
    bg: "bg-[#EEEDFE]",
    text: "text-[#3C3489]",
    dot: "bg-[#3C3489]",
  },
  red: {
    bg: "bg-[#FCEBEB]",
    text: "text-[#A32D2D]",
    dot: "bg-[#A32D2D]",
  },
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-64 flex flex-col items-center justify-center gap-3 text-muted-foreground">
      <span className="text-3xl">🖼</span>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xs opacity-60">ใส่ path รูปภาพ</p>
    </div>
  )
}

function ScreenCard({
  name,
  desc,
  imgLabel,
}: {
  name: string
  desc: string
  imgLabel: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <ImagePlaceholder label={imgLabel} />
      <div>
        <p className="font-semibold text-foreground mb-1">{name}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function PosRedesignPage() {
  const [lang, setLang] = useState<"en" | "th">("en")
  const c = content[lang]

  const screens = [
    { name: c.cashierName, desc: c.cashierDesc, imgLabel: c.cashierImg },
    { name: c.categoryName, desc: c.categoryDesc, imgLabel: c.categoryImg },
    { name: c.itemName, desc: c.itemDesc, imgLabel: c.itemImg },
    { name: c.createItemName, desc: c.createItemDesc, imgLabel: c.createItemImg },
    { name: c.orderListName, desc: c.orderListDesc, imgLabel: c.orderListImg },
    { name: c.orderDetailName, desc: c.orderDetailDesc, imgLabel: c.orderDetailImg },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {c.backLabel}
          </Link>
          <button
            onClick={() => setLang(lang === "en" ? "th" : "en")}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-colors"
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <div className="flex flex-wrap gap-2">
            {c.statusTags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full bg-[#FAEEDA] text-[#633806]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              {c.year} · {c.role}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              {c.title}
              <br />
              <span className="text-muted-foreground">{c.subtitle}</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl italic">
            "{c.tagline}"
          </p>

          <div className="flex flex-wrap gap-2">
            {c.techTags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border border-border hover:bg-muted transition-colors">
              <ExternalLink className="w-4 h-4" />
              {c.figmaLabel}
            </button>
          </div>
        </motion.div>

        {/* Section 1 — The Brief */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {c.s1Title}
          </p>
          <p className="text-base leading-relaxed text-foreground/80">{c.s1Body}</p>
          <ImagePlaceholder label={c.s1ImgLabel} />
        </motion.section>

        {/* Section 2 — Design System */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {c.s2Title}
          </p>
          <p className="text-base leading-relaxed text-foreground/80">{c.s2Body}</p>
          <div className="rounded-2xl bg-[#EEEDFE] border border-[#3C3489]/20 p-5">
            <p className="text-sm text-[#3C3489] leading-relaxed">{c.s2Reason}</p>
          </div>
          <ImagePlaceholder label={c.s2ImgLabel} />
        </motion.section>

        {/* Section 3 — 7 Screens */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {c.s3Title}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {screens.map((screen) => (
              <ScreenCard
                key={screen.name}
                name={screen.name}
                desc={screen.desc}
                imgLabel={screen.imgLabel}
              />
            ))}
          </div>
        </motion.section>

        {/* Section 4 — UX Decisions */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {c.s4Title}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.decisions.map((d) => {
              const palette = highlightColors[d.color as keyof typeof highlightColors]
              return (
                <div
                  key={d.label}
                  className={`rounded-2xl p-5 ${palette.bg}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${palette.dot}`} />
                    <div>
                      <p className={`text-sm font-semibold mb-1 ${palette.text}`}>
                        {d.label}
                      </p>
                      <p className={`text-sm leading-relaxed ${palette.text} opacity-80`}>
                        {d.text}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.section>

        {/* Section 5 — What I Learned */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {c.s5Title}
          </p>
          <div className="space-y-4">
            {c.lessons.map((lesson, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-muted/30 p-6 flex gap-5 items-start"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground shrink-0 pt-1">
                  {lesson.label}
                </span>
                <p className="text-sm leading-relaxed text-foreground/80 italic">
                  "{lesson.quote}"
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}
