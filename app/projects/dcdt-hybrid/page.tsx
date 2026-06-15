"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, FileText } from "lucide-react"

// ============================================================
//  ✏️  CONTENT — แก้ข้อมูลทั้งหมดที่นี่ที่เดียว
//  EN = English  |  TH = ภาษาไทย
// ============================================================
const content = {
  en: {
    title: "dCDT-Hybrid",
    year: "2026",
    role: "Senior Project · AI & ML",
    tagline: "Automated cognitive screening that sees both the drawing and the act of drawing.",

    links: {
      demo: "https://dcdt-demo.vercel.app/",    // 🔗 ลิงค์ Demo
      github: "https://github.com/ThaLovelace/dcdt-frontend.git",                                 // 🔗 ลิงค์ GitHub (ถ้ายังไม่มีปล่อยว่าง)
      paper: "",                                  // 🔗 ลิงค์ Paper (ถ้ายังไม่มีปล่อยว่าง)
    },

    // ── Hero image ──────────────────────────────────────────
    // ใส่ path รูปจริงเพื่อแทน placeholder เช่น "/components/Photos/dcdt-hero.png"
    heroImage: "/components/Photos/vit.png" as string,

    // ── Metrics (แสดงเด่นๆ ด้านบน) ──────────────────────────
    metrics: [
      { value: "96.14%", label: "Accuracy" },
      { value: "85.23%", label: "Sensitivity" },
      { value: "97.00%", label: "Specificity" },
      { value: "0.926",  label: "AUC" },
    ],

    // ── Overview ─────────────────────────────────────────────
    overview: `Traditional Clock Drawing Tests score only the finished image — but two identical-looking clocks can tell completely different stories depending on how they were drawn. dCDT-Hybrid captures both dimensions simultaneously: what the drawing looks like, and how it was produced — and shows exactly which signals led to that result.`,

    // ── Tech tags ────────────────────────────────────────────
    tags: ["Vision Transformer", "Digital Biomarkers", "Explainable AI", "Next.js", "FastAPI", "Python"],
    statusTag: "IEEE — Under Review",

    // ── Two dimensions ───────────────────────────────────────
    dim1: {
      label: "Explainable Analysis",
      title: "What the drawing looks like — and why",
      // ใส่ path รูป Heatmap ได้ที่นี่ เช่น "/components/Photos/dcdt-heatmap.png"
      image: "/components/dcdt-hybrid/XAI Heatmap.png" as string,
      imageLabel: "XAI Heatmap — regions influencing prediction",
      body: "ViT-B/16 classifies the completed clock drawing. Chefer's Gradient×Attention method then generates a heatmap that highlights exactly which regions drove the model's decision, making the output clinically interpretable.",
    },
    dim2: {
      label: "Process Analysis",
      title: "How the drawing was made",
      // ใส่ path รูป Velocity profile ได้ที่นี่
      image: "/components/dcdt-hybrid/Velocity profile.png" as string,
      imageLabel: "Velocity profile across stroke timeline",
      body: "Five digital biomarkers are extracted from millisecond-precision stylus data. Each threshold is dynamically adjusted by age group — because a 70-year-old drawing slowly is not the same signal as a 40-year-old doing the same.",
    },

    // ── Biomarkers ───────────────────────────────────────────
    biomarkers: [
      { key: "K1", name: "Tremor (Jerk)",           domain: "Motor control" },
      { key: "K2", name: "Mean velocity",            domain: "Processing speed · age-adjusted" },
      { key: "K3", name: "Pen pressure",             domain: "Motor function · stylus only" },
      { key: "K4", name: "% Think time",             domain: "Planning & executive function · age-adjusted" },
      { key: "K5", name: "Pre-first-stroke latency", domain: "Cognitive planning" },
    ],

    // ── Fusion output ────────────────────────────────────────
    fusionTitle: "Truth-table fusion → 8 clinical class codes",
    fusionDesc: "Combining both dimensions via a truth table produces eight distinct outcome codes. The most clinically significant is C1.",
    fusionCodes: [
      { code: "C0", desc: "Normal — both dimensions clear",                  highlight: false },
      { code: "C1", desc: "Early warning — image normal, process abnormal",  highlight: true  },
      { code: "C2–C6", desc: "Mixed signal combinations",                    highlight: false },
      { code: "C7", desc: "High risk — multi-domain impairment",             highlight: false },
    ],

    // ── Challenges ───────────────────────────────────────────
    challenges: [
      {
        title: "Domain shift",
        body: "Training images were paper-scanned; the live system captures digital ink. Solved by Digital Ink Simulation — every stroke redrawn at a uniform 3 px width before training.",
      },
      {
        title: "Class imbalance",
        body: "85.9% of samples were Normal vs 14.1% Risk. WeightedRandomSampler combined with Asymmetric Label Smoothing Focal Loss prevented the model from trivially predicting Normal every time.",
      },
      {
        title: "ViT's blind spot",
        body: "ViT-B/16 patches miss fine hand-length ratios. All 13 false negatives were score-3 clocks. Documented openly; a geometric feature layer is proposed as the next fix.",
      },
    ],

    // ── Limitations ──────────────────────────────────────────
    limitations: [
      "Screening prototype only — not a diagnostic tool.",
      "Biomarker thresholds use Western normative data; Thai-population validation is pending.",
      "K3 requires an active stylus; K1 and K5 have known real-device limitations.",
      "No formal clinical trial — ~3,000 images from a single dataset.",
    ],
  },

  // ==========================================================
  //  🇹🇭 ภาษาไทย — เติมข้อความด้านล่างได้เลยค่ะ
  // ==========================================================
  th: {
    title: "dCDT-Hybrid",
    year: "2026",
    role: "Senior Project · AI & ML",
    tagline: "ระบบคัดกรองความจำอัตโนมัติ ที่วิเคราะห์ทั้งภาพวาดและกระบวนการวาด",

    links: {
      demo: "https://dcdt-demo.vercel.app/",
      github: "",
      paper: "",
    },

    heroImage: "" as string,

    metrics: [
      { value: "96.14%", label: "ความแม่นยำ" },
      { value: "85.23%", label: "Sensitivity" },
      { value: "97.00%", label: "Specificity" },
      { value: "0.926",  label: "AUC" },
    ],

    overview: `การทดสอบวาดนาฬิกาแบบดั้งเดิมประเมินเฉพาะภาพที่วาดเสร็จ แต่นาฬิกาที่ดูเหมือนกันสองเรือน อาจมาจากกระบวนการวาดที่บ่งชี้สภาวะต่างกันโดยสิ้นเชิง dCDT-Hybrid วิเคราะห์ทั้งสองมิติพร้อมกัน: ผลลัพธ์ของภาพ และกระบวนการที่ใช้สร้างภาพนั้น พร้อมแสดงให้เห็นว่าสัญญาณใดที่นำไปสู่ผลลัพธ์นั้น`,

    tags: ["Vision Transformer", "Digital Biomarkers", "Explainable AI", "Next.js", "FastAPI", "Python"],
    statusTag: "IEEE — อยู่ระหว่างพิจารณา",

    dim1: {
      label: "วิเคราะห์ภาพแบบอธิบายได้",
      title: "ภาพวาดที่ได้ออกมาเป็นอย่างไร — และเพราะอะไร",
      image: "" as string,
      imageLabel: "XAI Heatmap — บริเวณที่ส่งผลต่อการทำนาย",
      body: "ViT-B/16 จำแนกภาพวาดนาฬิกาที่วาดเสร็จ จากนั้น Chefer's Gradient×Attention สร้าง Heatmap แสดงบริเวณที่ส่งผลต่อการตัดสินใจของโมเดล เพื่อให้ผลลัพธ์ตีความได้ในเชิงคลินิก",
    },
    dim2: {
      label: "วิเคราะห์กระบวนการ",
      title: "กระบวนการวาดเป็นอย่างไร",
      image: "" as string,
      imageLabel: "กราฟความเร็วตลอดการวาด",
      body: "สกัด 5 Digital Biomarkers จากข้อมูลการลากเส้นระดับมิลลิวินาที พร้อมปรับเกณฑ์ตามช่วงอายุ เพราะการวาดช้าของผู้สูงอายุมีความหมายต่างจากผู้ที่อายุน้อยกว่า",
    },

    biomarkers: [
      { key: "K1", name: "การสั่น (Jerk)",              domain: "การควบคุมกล้ามเนื้อ" },
      { key: "K2", name: "ความเร็วเฉลี่ย",               domain: "ความเร็วประมวลผล · ปรับตามอายุ" },
      { key: "K3", name: "แรงกดปากกา",                  domain: "การทำงานของกล้ามเนื้อ · เฉพาะ Stylus" },
      { key: "K4", name: "สัดส่วนเวลาคิด",               domain: "การวางแผน · ปรับตามอายุ" },
      { key: "K5", name: "เวลาก่อนเริ่มลากเส้นแรก",      domain: "การวางแผนทางปัญญา" },
    ],

    fusionTitle: "ผสานด้วย Truth Table → 8 รหัสทางคลินิก",
    fusionDesc: "การรวมทั้งสองมิติด้วย Truth Table ให้ผลลัพธ์ 8 รหัส รหัสที่สำคัญที่สุดทางคลินิกคือ C1",
    fusionCodes: [
      { code: "C0",    desc: "ปกติ — ทั้งสองมิติผ่าน",                    highlight: false },
      { code: "C1",    desc: "เตือนเนิ่น — ภาพปกติ แต่กระบวนการผิดปกติ", highlight: true  },
      { code: "C2–C6", desc: "สัญญาณผสมหลายรูปแบบ",                      highlight: false },
      { code: "C7",    desc: "ความเสี่ยงสูง — ความบกพร่องหลายด้าน",       highlight: false },
    ],

    challenges: [
      {
        title: "Domain Shift",
        body: "ข้อมูลฝึกเป็นภาพสแกนบนกระดาษ แต่ระบบจริงรับภาพดิจิทัล แก้ด้วย Digital Ink Simulation วาดเส้นทุกเส้นใหม่ที่ขนาด 3 px สม่ำเสมอก่อนฝึกโมเดล",
      },
      {
        title: "ความไม่สมดุลของข้อมูล",
        body: "ข้อมูลปกติ 85.9% เทียบกับกลุ่มเสี่ยง 14.1% ใช้ WeightedRandomSampler ร่วมกับ Asymmetric Label Smoothing Focal Loss เพื่อไม่ให้โมเดลทำนาย Normal ทุกครั้ง",
      },
      {
        title: "จุดบอดของ ViT",
        body: "Patch 16×16 ของ ViT จับสัดส่วนเข็มนาฬิกาไม่ได้ FN ทั้ง 13 ตัวเป็น score-3 บันทึกอย่างตรงไปตรงมา พร้อมเสนอเพิ่ม Geometric Feature Layer เป็นขั้นต่อไป",
      },
    ],

    limitations: [
      "เป็นต้นแบบสำหรับคัดกรองเท่านั้น ไม่ใช่เครื่องมือวินิจฉัยทางการแพทย์",
      "เกณฑ์ Biomarker อ้างอิงข้อมูลจากตะวันตก รอการตรวจสอบด้วยข้อมูลประชากรไทย",
      "K3 ต้องใช้ Active Stylus; K1 และ K5 มีข้อจำกัดบนอุปกรณ์จริง",
      "ยังไม่มีการทดลองทางคลินิกอย่างเป็นทางการ ใช้ข้อมูลประมาณ 3,000 ภาพจากชุดข้อมูลเดียว",
    ],
  },
}

// ============================================================
//  Shared animation variants
// ============================================================
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

// ============================================================
//  Page
// ============================================================
export default function DCDTPage() {
  const [lang, setLang] = useState<"en" | "th">("en")
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
        <motion.section
          className="pt-14 pb-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* eyebrow */}
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

            {/* status badge */}
            <motion.span
              variants={fadeUp}
              className="self-start md:self-end inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FAEEDA] text-[#633806] border border-[#EF9F27] whitespace-nowrap"
            >
              {c.statusTag}
            </motion.span>
          </div>

          {/* Tags */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
            {c.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                {t}
              </span>
            ))}
          </motion.div>

          {/* Links */}
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
            {c.links.paper && (
              <a href={c.links.paper}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium rounded-xl text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                <FileText className="w-3.5 h-3.5" /> Paper
              </a>
            )}
          </motion.div>
        </motion.section>

        {/* ── Metrics Bar (Signature element) ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {c.metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className="bg-background px-6 py-8 text-center"
              >
                <div className="font-serif text-3xl md:text-4xl font-bold tracking-tight">{m.value}</div>
                <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-medium">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Hero image ── */}
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
              <p className="text-sm">Screenshot / Demo Video</p>
              <p className="text-xs opacity-60">ใส่รูปจริง: เปลี่ยน heroImage ใน content object</p>
            </div>
          )}
        </motion.section>

        {/* ── Overview ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Overview</p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">{c.overview}</p>
        </motion.section>

        {/* ── How it works ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            How it works
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Dim 1 */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E1F5EE] text-[#0F6E56]">01</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6E56]">{c.dim1.label}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold mb-3">{c.dim1.title}</h3>

                {c.dim1.image ? (
                  <img src={c.dim1.image} alt={c.dim1.imageLabel} className="w-full rounded-xl object-cover h-40 mb-4" />
                ) : (
                  <div className="w-full rounded-xl bg-muted border border-dashed border-border h-40 flex items-center justify-center text-xs text-muted-foreground mb-4">
                    {c.dim1.imageLabel}
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed">{c.dim1.body}</p>
              </div>
            </motion.div>

            {/* Dim 2 */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EEEDFE] text-[#3C3489]">02</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3C3489]">{c.dim2.label}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold mb-3">{c.dim2.title}</h3>

                {c.dim2.image ? (
                  <img src={c.dim2.image} alt={c.dim2.imageLabel} className="w-full rounded-xl object-cover h-40 mb-4" />
                ) : (
                  <div className="w-full rounded-xl bg-muted border border-dashed border-border h-40 flex items-center justify-center text-xs text-muted-foreground mb-4">
                    {c.dim2.imageLabel}
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed">{c.dim2.body}</p>
              </div>
            </motion.div>
          </div>

          {/* Biomarkers table */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-border overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-border bg-muted/30">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                5 Digital Biomarkers
              </p>
            </div>
            <div className="divide-y divide-border">
              {c.biomarkers.map((b, i) => (
                <div key={b.key} className="flex items-center gap-4 px-6 py-3.5">
                  <span className="text-xs font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#EEEDFE] text-[#3C3489]">
                    {b.key}
                  </span>
                  <span className="text-sm font-semibold flex-1">{b.name}</span>
                  <span className="text-xs text-muted-foreground hidden sm:block text-right">{b.domain}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fusion codes */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/30">
              <p className="text-sm font-semibold">{c.fusionTitle}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{c.fusionDesc}</p>
            </div>
            <div className="divide-y divide-border">
              {c.fusionCodes.map((fc) => (
                <div
                  key={fc.code}
                  className={`flex items-center gap-4 px-6 py-3.5 ${fc.highlight ? "bg-[#FAEEDA]/30" : ""}`}
                >
                  <span className={`text-xs font-bold px-3 py-1 rounded-md min-w-[52px] text-center ${
                    fc.highlight
                      ? "bg-[#FAEEDA] text-[#633806]"
                      : fc.code === "C0" ? "bg-[#E1F5EE] text-[#0F6E56]"
                      : fc.code === "C7" ? "bg-[#FCEBEB] text-[#A32D2D]"
                      : "bg-[#EEEDFE] text-[#3C3489]"
                  }`}>
                    {fc.code}
                  </span>
                  <span className={`text-sm ${fc.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                    {fc.desc}
                    {fc.highlight && (
                      <span className="ml-2 text-xs font-normal text-[#BA7517]">← key insight</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* ── Challenges ── */}
        <motion.section
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Engineering challenges
          </motion.p>

          <div className="space-y-4">
            {c.challenges.map((ch, i) => (
              <motion.div
                key={ch.title}
                variants={fadeUp}
                className="grid grid-cols-[auto_1fr] gap-5 p-6 rounded-2xl bg-muted/40 border border-border"
              >
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
        <motion.section
          className="py-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Honest limitations
          </motion.p>

          <div className="space-y-2">
            {c.limitations.map((l) => (
              <motion.div
                key={l}
                variants={fadeUp}
                className="flex items-start gap-3 py-3 px-5 rounded-xl border border-border"
              >
                <span className="text-[#BA7517] mt-0.5 text-sm flex-shrink-0">⚠</span>
                <p className="text-sm text-muted-foreground">{l}</p>
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
            Back to all projects
          </Link>
        </div>

      </main>
    </div>
  )
}
