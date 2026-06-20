"use client"

import { useLang } from "@/context/LangContext"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Github } from "lucide-react"

const content = {
  en: {
    title: "Ledlight 3D",
    subtitle: "Sales Landing Page",
    year: "2024",
    role: "Freelance Project · Frontend Development · UI Design",
    tagline: "Client gave me a content outline and said 'make it modern.' I gave them a dark neon experience that matched the product itself.",
    links: { github: "" },
    statusTag: "Freelance · Delivered",
    tags: ["Next.js", "TailwindCSS", "Figma"],
    heroImage: "/components/Photos/ledlight.png" as string,
    brief: {
      title: "The Brief",
      body: "The client runs a 3D LED signage business and needed a sales landing page. They came with a content outline and section structure — no design spec, no color palette, just: 'make it modern and nice.'",
      task: "My job was to do two things at once: design it and build it.",
    },
    design: {
      title: "Design Decision: Dark Neon",
      intro: "The first decision was visual direction — the client hadn't specified. I chose dark mode with neon accents, and the reasoning was direct:",
      reasons: [
        { label: "Product logic", desc: "The product is 3D LED signs. A bright, standard-looking page would work against the product itself." },
        { label: "Visual contrast", desc: "Dark backgrounds make neon glow immediately — the effect draws the eye exactly the way the actual signs do." },
        { label: "Psychological moment", desc: "The customer's mental image is a storefront at night with a glowing sign. The page should match that feeling." },
      ],
      conclusion: "Design led the product — it didn't just wrap the content.",
      neonImage: "/components/Ledlight/Neon Effect Close-up.png" as string,
    },
    sections: {
      title: "What I built — 10 sections, 1 page",
      items: [
        { name: "Hero", desc: "Main hook + free quote CTA" },
        { name: "Pain", desc: "Why good shops still get walked past" },
        { name: "Product", desc: "5 types of 3D LED signs" },
        { name: "Features", desc: "Icon + benefit for each selling point" },
        { name: "Proof", desc: "Before/After storefront comparisons" },
        { name: "Social Proof", desc: "Customer reviews" },
        { name: "Pricing Table", desc: "Anchor pricing tiers" },
        { name: "Process", desc: "6 steps — done in under 5 minutes" },
        { name: "FAQ", desc: "14 common questions answered" },
        { name: "Final CTA", desc: "Close the sale" },
      ],
      sectionImages: [
        { image: "/components/Ledlight/Pricing.png" as string, label: "Pricing + Process", desc: "Conversion-focused sections" },
        { image: "/components/Ledlight/Hero.png" as string, label: "Hero + Product", desc: "Visual hook and product showcase" },
      ],
    },
    learned: [
      {
        title: "'Make it modern' is a brief that needs interpretation",
        desc: "No spec means making every decision yourself. Choosing dark neon wasn't just an aesthetic call — it was reading the product and translating it into a visual language the client hadn't articulated yet.",
      },
      {
        title: "Sales pages have their own logic",
        desc: "Section order isn't about what looks good — it's about customer journey. Hook → Pain → Solution → Proof → Price → CTA has to flow in a way that makes someone want to buy before they even reach the pricing section.",
      },
      {
        title: "Figma to Code is a skill that takes practice",
        desc: "Translating a visual design into pixel-perfect, responsive code requires both design sense and frontend skill simultaneously — they can't be separated in this kind of work.",
      },
    ],
  },
  th: {
    title: "Ledlight 3D",
    subtitle: "Sales Landing Page",
    year: "2024",
    role: "Freelance Project · Frontend Development · UI Design",
    tagline: "ลูกค้าให้ Content Outline มาและบอกว่า 'ให้ดู Modern' เราให้ Dark Neon Experience ที่เข้ากับ Product เลย",
    links: { github: "" },
    statusTag: "Freelance · Delivered",
    tags: ["Next.js", "TailwindCSS", "Figma"],
    heroImage: "/components/Photos/ledlight.png" as string,
    brief: {
      title: "โจทย์ที่ได้รับ",
      body: "Client ทำธุรกิจป้ายอักษรไฟ 3D และต้องการ Sales Landing Page มีแค่ Content Outline และ Section Structure มาให้ — ไม่มี Design Spec ไม่มี Color Palette เฉพาะ มีแค่ 'อยากให้สวยและ Modern'",
      task: "งานของเราคือ 2 อย่างพร้อมกัน: ออกแบบ และ เขียนโค้ด ให้จบในชิ้นเดียว",
    },
    design: {
      title: "Design Decision: Dark Neon",
      intro: "จุดตัดสินใจแรกคือ Visual Direction — Client ไม่ได้ระบุมา เลือก Dark Mode + Neon Accent เพราะเหตุผลตรงไปตรงมา:",
      reasons: [
        { label: "Logic ของ Product", desc: "Product คือป้ายไฟ 3D ถ้า Page ดูสว่างธรรมดา มันขัดกับ Product เอง" },
        { label: "Visual Contrast", desc: "Dark Background ทำให้ Neon Glow โดดเด่นทันที ดึงดูดสายตาเหมือนป้ายไฟจริงๆ" },
        { label: "Psychological Moment", desc: "ภาพในหัวของลูกค้าคือหน้าร้านยามค่ำคืนที่ป้ายไฟเด่น Page ควรให้ความรู้สึกนั้น" },
      ],
      conclusion: "Design นำ Product ไม่ใช่แค่ Wrap Content",
      neonImage: "/components/Ledlight/Neon Effect Close-up.png" as string,
    },
    sections: {
      title: "สิ่งที่สร้าง — 10 Sections ใน 1 หน้า",
      items: [
        { name: "Hero", desc: "Hook หลัก + CTA ขอราคาฟรี" },
        { name: "Pain", desc: "ทำไมร้านดีแต่ลูกค้าเดินผ่าน" },
        { name: "Product", desc: "5 ประเภทป้าย 3D" },
        { name: "Features", desc: "Icon + Benefit แต่ละจุด" },
        { name: "Proof", desc: "Before/After หน้าร้าน" },
        { name: "Social Proof", desc: "Review จากลูกค้า" },
        { name: "Pricing Table", desc: "ตารางราคา Anchor" },
        { name: "Process", desc: "6 ขั้นตอน ใช้เวลาไม่เกิน 5 นาที" },
        { name: "FAQ", desc: "14 คำถามที่ลูกค้าถามบ่อย" },
        { name: "Final CTA", desc: "ปิดดีล" },
      ],
      sectionImages: [
        { image: "/components/Ledlight/Pricing + Process.png" as string, label: "Pricing + Process", desc: "Section ที่เน้น Conversion" },
        { image: "/components/Ledlight/Hero + Product.png" as string, label: "Hero + Product", desc: "Visual Hook และการนำเสนอ Product" },
      ],
    },
    learned: [
      {
        title: "'Make it modern' คือ Design Brief ที่ต้องตีความ",
        desc: "ไม่มี Spec ที่ชัดเจนหมายความว่าต้องตัดสินใจเองทุกอย่าง การเลือก Dark Neon ไม่ใช่แค่ Aesthetic แต่คือการอ่าน Product แล้ว Translate เป็น Visual Language ที่ Client ยังบอกไม่ได้",
      },
      {
        title: "Sales Page มี Logic ของมันเอง",
        desc: "การเรียง Section ไม่ใช่แค่ความสวย แต่คือ Customer Journey — Hook → Pain → Solution → Proof → Price → CTA ต้องไหลให้คนอยากซื้อก่อนเลื่อนถึงราคา",
      },
      {
        title: "Figma to Code คือทักษะที่ต้องฝึก",
        desc: "การแปลง Visual Design เป็นโค้ดที่ Pixel-perfect และ Responsive ต้องการทั้ง Design Sense และ Frontend Skill พร้อมกัน — สองอย่างนี้แยกกันไม่ได้ในงานแบบนี้",
      },
    ],
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

export default function LedlightPage() {
  const { lang, setLang } = useLang()
  const c = content[lang]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Thapanee.</span>
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
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {c.role} · {c.year}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-2">{c.title}</motion.h1>
              <motion.p variants={fadeUp} className="font-serif text-xl md:text-2xl text-muted-foreground font-medium mb-4">{c.subtitle}</motion.p>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">{c.tagline}</motion.p>
            </div>
            <motion.span variants={fadeUp} className="self-start md:self-end inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] border border-[#0F6E56]/20 whitespace-nowrap">
              {c.statusTag}
            </motion.span>
          </div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
            {c.tags.map((t) => <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">{t}</span>)}
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
        <motion.section key={`sec-2-${lang}`} className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          {c.heroImage ? (
            <img src={c.heroImage} alt={c.title} className="w-full rounded-2xl border border-border object-cover" />
          ) : (
            <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-72 md:h-96 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <span className="text-3xl">🖼</span>
              <p className="text-sm font-medium">Full-page Screenshot</p>
              <p className="text-xs opacity-60">ใส่ path รูป Landing Page เต็มหน้า</p>
            </div>
          )}
        </motion.section>

        {/* ── The Brief ── */}
        <motion.section key={`sec-3-${lang}`} className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">The Brief</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.brief.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-4">{c.brief.body}</motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted/30">
            <span className="text-foreground font-bold text-sm flex-shrink-0">→</span>
            <p className="text-sm font-medium">{c.brief.task}</p>
          </motion.div>
        </motion.section>

        {/* ── Design Decision ── */}
        <motion.section key={`sec-4-${lang}`} className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Design Thinking</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.design.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">{c.design.intro}</motion.p>

          <div className="space-y-3 mb-8">
            {c.design.reasons.map((r, i) => (
              <motion.div key={r.label} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-5 p-5 rounded-xl border border-border bg-muted/30">
                <span className="font-serif text-xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="text-sm font-semibold">{r.label} — </span>
                  <span className="text-sm text-muted-foreground">{r.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 p-5 rounded-xl border border-border bg-[#EEEDFE]/30 mb-8">
            <span className="text-[#3C3489] font-bold text-lg flex-shrink-0">✦</span>
            <p className="text-sm font-semibold text-[#3C3489]">{c.design.conclusion}</p>
          </motion.div>

          {c.design.neonImage ? (
            <motion.img variants={fadeUp} src={c.design.neonImage} alt="Neon effect" className="w-full rounded-2xl border border-border object-cover" />
          ) : (
            <motion.div variants={fadeUp} className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-56 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <span className="text-2xl">✨</span>
              <p className="text-sm font-medium">Neon Effect Close-up</p>
              <p className="text-xs opacity-60">ใส่ path รูป Hero หรือ Section ที่เห็น Neon ชัดที่สุด</p>
            </motion.div>
          )}
        </motion.section>

        {/* ── 10 Sections ── */}
        <motion.section key={`sec-5-${lang}`} className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">{c.sections.title}</motion.p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {c.sections.items.map((item, i) => (
              <motion.div key={item.name} variants={fadeUp} className="p-4 rounded-xl border border-border bg-muted/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-muted-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs font-semibold">{item.name}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.sections.sectionImages.map((s) => (
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

        {/* ── What I Learned ── */}
        <motion.section key={`sec-6-${lang}`} className="py-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">What I Learned</motion.p>
          <div className="space-y-4">
            {c.learned.map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-5 p-6 rounded-2xl bg-muted/40 border border-border">
                <span className="font-serif text-2xl font-bold text-muted-foreground/30 leading-none mt-0.5 select-none">{String(i + 1).padStart(2, "0")}</span>
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
