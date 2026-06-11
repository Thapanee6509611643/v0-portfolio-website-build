"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, FileText, AlertTriangle, Eye, Activity, Table2 } from "lucide-react"
import { motion } from "framer-motion"

// ============================================================
//  ✏️  CONTENT — แก้ข้อมูลที่นี่ที่เดียว
//  Edit all page content here. Both EN and TH versions.
// ============================================================
const content = {
  en: {
    backLabel: "Back to Portfolio",
    sectionLabel: "Senior project · AI & ML · 2026",
    title: "dCDT-Hybrid",
    subtitle:
      "Automated cognitive screening integrating Vision Transformer analysis and digital biomarker process analysis",
    tags: [
      { label: "Vision Transformer", variant: "ai" as const },
      { label: "Digital Biomarkers", variant: "ai" as const },
      { label: "Explainable AI", variant: "ai" as const },
      { label: "Next.js", variant: "default" as const },
      { label: "FastAPI", variant: "default" as const },
      { label: "Python", variant: "default" as const },
      { label: "IEEE — Under Review", variant: "amber" as const },
    ],
    links: {
      demo: "https://dcdt-demo.vercel.app/",
      github: "https://github.com/",   // 🔗 แก้ลิงค์ GitHub
      paper: "#",                       // 🔗 แก้ลิงค์ Paper
    },
    // --- Screenshot placeholder ---
    heroImage: null as string | null,  // ใส่ path รูปจริงเช่น "/components/Photos/dcdt-hero.png"
    heroAlt: "dCDT-Hybrid web app screenshot",
    // --- Problem ---
    problemTitle: "The problem",
    problem: [
      "Traditional Clock Drawing Test relies on clinicians manually scoring a final image — subjective, inconsistent, and blind to how the patient drew it. Two identical-looking clocks can tell completely different stories.",
      "dCDT-Hybrid captures both dimensions simultaneously — something no fully-deployed open system had done before.",
    ],
    // --- How it works ---
    howTitle: "How it works",
    dim1: {
      title: "Dimension 1 — Static analysis",
      image: null as string | null,  // ใส่ path รูป XAI Heatmap
      imageAlt: "XAI Heatmap",
      desc: "ViT-B/16 classifies final drawing + Chefer's Gradient×Attention heatmap highlights regions influencing the prediction",
      pills: ["ViT-B/16", "Grad×Attention"],
      color: "teal" as const,
    },
    dim2: {
      title: "Dimension 2 — Process analysis",
      image: null as string | null,  // ใส่ path รูป Velocity profile
      imageAlt: "Velocity profile chart",
      desc: "5 digital biomarkers extracted from millisecond-precision stroke data with dynamic age-adjusted thresholds",
      pills: ["K1–K5 Biomarkers", "Age-adjusted"],
      color: "purple" as const,
    },
    fusionTitle: "Truth table fusion → 8 clinical class codes",
    fusionCodes: [
      { code: "C0", label: "Normal — no indicators", variant: "teal" as const },
      { code: "C1", label: "Early cognitive warning", sub: "— normal image, abnormal process", variant: "amber" as const },
      { code: "C2–C6", label: "Mixed signal combinations", variant: "purple" as const },
      { code: "C7", label: "High risk — multi-domain impairment", variant: "red" as const },
    ],
    // --- Biomarkers ---
    biomarkersTitle: "5 digital biomarkers",
    biomarkers: [
      { key: "K1", name: "Tremor (Jerk)", domain: "Motor control", variant: "purple" as const },
      { key: "K2", name: "Mean velocity", domain: "Processing speed · age-adjusted", variant: "purple" as const },
      { key: "K3", name: "Pen pressure", domain: "Motor function · stylus only", variant: "amber" as const },
      { key: "K4", name: "% Think time", domain: "Planning / executive · age-adjusted", variant: "purple" as const },
      { key: "K5", name: "Pre-first hand latency", domain: "Cognitive planning", variant: "purple" as const },
    ],
    // --- Results ---
    resultsTitle: "Results",
    metrics: [
      { val: "96.14%", label: "Accuracy" },
      { val: "85.23%", label: "Sensitivity" },
      { val: "97.00%", label: "Specificity" },
      { val: "0.926", label: "AUC" },
    ],
    // --- Hard part ---
    hardTitle: "The hard part",
    hardSteps: [
      {
        num: "01",
        title: "Domain shift",
        desc: "Training data = paper-scanned. System captures = digital drawings. Solved via Digital Ink Simulation — uniform 3px stroke preprocessing.",
      },
      {
        num: "02",
        title: "Class imbalance (85.9% Normal vs 14.1% Risk)",
        desc: "WeightedRandomSampler + Asymmetric Label Smoothing Focal Loss to prevent the model from ignoring Risk cases.",
      },
      {
        num: "03",
        title: "What the model can't see",
        desc: "ViT's 16×16 patch misses hand length ratios → all 13 FN were score-3 cases. Documented honestly, proposed geometric layer fix.",
      },
    ],
    // --- Limitations ---
    limTitle: "Honest limitations",
    limitations: [
      "Screening prototype only — not a diagnostic tool",
      "Biomarker thresholds based on Western normative data — Thai validation pending",
      "K3 requires active stylus; K1 and K5 have known real-device limitations",
      "No formal clinical trial conducted — ~3,000 images from single dataset",
    ],
  },

  // ============================================================
  //  🇹🇭  ภาษาไทย — เติมข้อความที่นี่
  // ============================================================
  th: {
    backLabel: "กลับหน้า Portfolio",
    sectionLabel: "Senior project · AI & ML · 2026",
    title: "dCDT-Hybrid",
    subtitle:
      "ระบบคัดกรองทางปัญญาอัตโนมัติ ผสานการวิเคราะห์ด้วย Vision Transformer และการวิเคราะห์กระบวนการวาดจาก Digital Biomarkers",
    tags: [
      { label: "Vision Transformer", variant: "ai" as const },
      { label: "Digital Biomarkers", variant: "ai" as const },
      { label: "Explainable AI", variant: "ai" as const },
      { label: "Next.js", variant: "default" as const },
      { label: "FastAPI", variant: "default" as const },
      { label: "Python", variant: "default" as const },
      { label: "IEEE — อยู่ระหว่างพิจารณา", variant: "amber" as const },
    ],
    links: {
      demo: "https://dcdt-demo.vercel.app/",
      github: "https://github.com/",
      paper: "#",
    },
    heroImage: null as string | null,
    heroAlt: "ภาพหน้าจอแอปพลิเคชัน dCDT-Hybrid",
    problemTitle: "ปัญหาที่พบ",
    problem: [
      "การทดสอบวาดนาฬิกาแบบดั้งเดิมต้องอาศัยผู้เชี่ยวชาญตรวจรูปภาพปลายทางด้วยตนเอง ซึ่งมีความลำเอียงสูง ไม่สม่ำเสมอ และไม่สามารถมองเห็น กระบวนการ ที่ผู้ป่วยวาดได้ นาฬิกาที่ดูเหมือนกันสองเรือนอาจบ่งชี้สภาวะที่แตกต่างกันโดยสิ้นเชิง",
      "dCDT-Hybrid บันทึกทั้งสองมิติพร้อมกัน ซึ่งยังไม่มีระบบเปิดที่นำไปใช้งานจริงทำได้มาก่อน",
    ],
    howTitle: "หลักการทำงาน",
    dim1: {
      title: "มิติที่ 1 — วิเคราะห์ภาพนิ่ง",
      image: null as string | null,
      imageAlt: "XAI Heatmap",
      desc: "ViT-B/16 จำแนกภาพวาดปลายทาง + Chefer's Gradient×Attention Heatmap แสดงบริเวณที่ส่งผลต่อการทำนาย",
      pills: ["ViT-B/16", "Grad×Attention"],
      color: "teal" as const,
    },
    dim2: {
      title: "มิติที่ 2 — วิเคราะห์กระบวนการ",
      image: null as string | null,
      imageAlt: "กราฟความเร็วของการวาด",
      desc: "สกัด 5 Digital Biomarkers จากข้อมูลการลากเส้นระดับมิลลิวินาที พร้อมปรับเกณฑ์ตามช่วงอายุ",
      pills: ["K1–K5 Biomarkers", "ปรับตามอายุ"],
      color: "purple" as const,
    },
    fusionTitle: "ผสานด้วย Truth Table → 8 รหัสทางคลินิก",
    fusionCodes: [
      { code: "C0", label: "ปกติ — ไม่พบสัญญาณผิดปกติ", sub: undefined, variant: "teal" as const },
      { code: "C1", label: "เตือนเนิ่น — ภาพปกติ แต่กระบวนการผิดปกติ", sub: undefined, variant: "amber" as const },
      { code: "C2–C6", label: "สัญญาณผสม", sub: undefined, variant: "purple" as const },
      { code: "C7", label: "ความเสี่ยงสูง — ความบกพร่องหลายด้าน", sub: undefined, variant: "red" as const },
    ],
    biomarkersTitle: "5 Digital Biomarkers",
    biomarkers: [
      { key: "K1", name: "การสั่น (Jerk)", domain: "การควบคุมกล้ามเนื้อ", variant: "purple" as const },
      { key: "K2", name: "ความเร็วเฉลี่ย", domain: "ความเร็วในการประมวลผล · ปรับตามอายุ", variant: "purple" as const },
      { key: "K3", name: "แรงกด", domain: "การทำงานของกล้ามเนื้อ · เฉพาะ Stylus", variant: "amber" as const },
      { key: "K4", name: "สัดส่วนเวลาคิด", domain: "การวางแผน / บริหารจัดการ · ปรับตามอายุ", variant: "purple" as const },
      { key: "K5", name: "เวลารอก่อนเริ่มวาด", domain: "การวางแผนทางปัญญา", variant: "purple" as const },
    ],
    resultsTitle: "ผลลัพธ์",
    metrics: [
      { val: "96.14%", label: "ความแม่นยำ" },
      { val: "85.23%", label: "Sensitivity" },
      { val: "97.00%", label: "Specificity" },
      { val: "0.926", label: "AUC" },
    ],
    hardTitle: "ความท้าทาย",
    hardSteps: [
      {
        num: "01",
        title: "Domain Shift",
        desc: "ข้อมูลฝึกเป็นภาพสแกนบนกระดาษ แต่ระบบจริงรับภาพดิจิทัล แก้ปัญหาด้วย Digital Ink Simulation และ Preprocessing เส้น 3px สม่ำเสมอ",
      },
      {
        num: "02",
        title: "ความไม่สมดุลของข้อมูล (85.9% ปกติ vs 14.1% เสี่ยง)",
        desc: "ใช้ WeightedRandomSampler + Asymmetric Label Smoothing Focal Loss เพื่อป้องกันโมเดลมองข้ามกลุ่มเสี่ยง",
      },
      {
        num: "03",
        title: "สิ่งที่โมเดลมองไม่เห็น",
        desc: "Patch 16×16 ของ ViT ไม่สามารถจับสัดส่วนเข็มนาฬิกาได้ → FN ทั้ง 13 ตัวเป็น score-3 บันทึกอย่างตรงไปตรงมาและเสนอแนวทางเพิ่ม Geometric Layer",
      },
    ],
    limTitle: "ข้อจำกัดที่ต้องรู้",
    limitations: [
      "เป็นต้นแบบสำหรับคัดกรองเท่านั้น — ไม่ใช่เครื่องมือวินิจฉัยทางการแพทย์",
      "เกณฑ์ Biomarker อ้างอิงข้อมูลเชิงบรรทัดฐานจากตะวันตก — รอการตรวจสอบด้วยข้อมูลไทย",
      "K3 ต้องใช้ Active Stylus; K1 และ K5 มีข้อจำกัดบนอุปกรณ์จริง",
      "ยังไม่มีการทดลองทางคลินิกอย่างเป็นทางการ — ใช้ข้อมูลประมาณ 3,000 ภาพจากชุดข้อมูลเดียว",
    ],
  },
}

// ============================================================
//  Styles helpers
// ============================================================
type TagVariant = "ai" | "default" | "amber"
type PillColor = "teal" | "purple"
type FusionVariant = "teal" | "amber" | "purple" | "red"
type BioVariant = "purple" | "amber"

const tagStyle: Record<TagVariant, string> = {
  ai: "bg-[#E1F5EE] text-[#0F6E56] border border-[#5DCAA5]",
  default: "bg-muted text-muted-foreground border border-border",
  amber: "bg-[#FAEEDA] text-[#633806] border border-[#EF9F27]",
}

const pillStyle: Record<PillColor, string> = {
  teal: "bg-[#E1F5EE] text-[#0F6E56]",
  purple: "bg-[#EEEDFE] text-[#3C3489]",
}

const fusionBadgeStyle: Record<FusionVariant, string> = {
  teal: "bg-[#E1F5EE] text-[#0F6E56]",
  amber: "bg-[#FAEEDA] text-[#633806]",
  purple: "bg-[#EEEDFE] text-[#3C3489]",
  red: "bg-[#FCEBEB] text-[#A32D2D]",
}

const kBadgeStyle: Record<BioVariant, string> = {
  purple: "bg-[#EEEDFE] text-[#3C3489]",
  amber: "bg-[#FAEEDA] text-[#633806]",
}

const dimAccentStyle: Record<"teal" | "purple", string> = {
  teal: "text-[#0F6E56]",
  purple: "text-[#3C3489]",
}

// ============================================================
//  Page Component
// ============================================================
export default function DCDTPage() {
  const [lang, setLang] = useState<"en" | "th">("en")
  const c = content[lang]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {c.backLabel}
          </Link>

          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                lang === "en"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("th")}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                lang === "th"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              TH
            </button>
          </div>
        </nav>
      </header>

      {/* ── Body ── */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <motion.div {...fadeIn} className="space-y-0">

          {/* Header */}
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            {c.sectionLabel}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">{c.title}</h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-5">{c.subtitle}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {c.tags.map((t) => (
              <span key={t.label} className={`text-xs px-3 py-1 rounded-full font-medium ${tagStyle[t.variant]}`}>
                {t.label}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={c.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live demo
            </a>
            <a
              href={c.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={c.links.paper}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <FileText className="w-4 h-4" /> Paper (under review)
            </a>
          </div>

          {/* Hero Image / Placeholder */}
          {c.heroImage ? (
            <img
              src={c.heroImage}
              alt={c.heroAlt}
              className="w-full rounded-2xl border border-border object-cover mb-10"
            />
          ) : (
            <div className="w-full rounded-2xl border border-dashed border-border bg-muted h-56 flex flex-col items-center justify-center gap-2 text-muted-foreground text-sm mb-10">
              <span className="text-2xl">🖼</span>
              <span>{c.heroAlt}</span>
              {/* 💡 ใส่รูป: เปลี่ยน heroImage ใน content object ด้านบน */}
            </div>
          )}

          <hr className="border-border my-10" />

          {/* Problem */}
          <section className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              {c.problemTitle}
            </p>
            {c.problem.map((p, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </section>

          <hr className="border-border my-10" />

          {/* How it works */}
          <section className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
              {c.howTitle}
            </p>

            {/* Two dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {([c.dim1, c.dim2] as const).map((dim) => (
                <div key={dim.title} className="border border-border rounded-2xl p-5">
                  <p className={`text-sm font-semibold mb-3 ${dimAccentStyle[dim.color]}`}>
                    {dim.color === "teal" ? (
                      <Eye className="inline w-4 h-4 mr-1 mb-0.5" aria-hidden />
                    ) : (
                      <Activity className="inline w-4 h-4 mr-1 mb-0.5" aria-hidden />
                    )}
                    {dim.title}
                  </p>

                  {/* Image or placeholder */}
                  {dim.image ? (
                    <img src={dim.image} alt={dim.imageAlt} className="w-full rounded-lg object-cover h-32 mb-3" />
                  ) : (
                    <div className="w-full rounded-lg bg-muted border border-dashed border-border h-32 flex items-center justify-center text-xs text-muted-foreground mb-3">
                      {dim.imageAlt}
                      {/* 💡 ใส่รูป: เปลี่ยน dim1.image หรือ dim2.image ใน content */}
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{dim.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {dim.pills.map((p) => (
                      <span key={p} className={`text-xs px-2.5 py-1 rounded-full font-medium ${pillStyle[dim.color]}`}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Fusion codes */}
            <div className="border border-border rounded-2xl p-5">
              <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                <Table2 className="w-4 h-4" aria-hidden />
                {c.fusionTitle}
              </p>
              <div className="space-y-0 divide-y divide-border">
                {c.fusionCodes.map((fc) => (
                  <div key={fc.code} className="flex items-center gap-3 py-2.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md min-w-[44px] text-center ${fusionBadgeStyle[fc.variant]}`}>
                      {fc.code}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {fc.variant === "amber" || fc.variant === "red" ? (
                        <span className="font-medium text-foreground">{fc.label}</span>
                      ) : (
                        fc.label
                      )}
                      {fc.sub && <span className="text-xs text-muted-foreground ml-1">{fc.sub}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* Biomarkers */}
          <section className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              {c.biomarkersTitle}
            </p>
            <div className="border border-border rounded-2xl divide-y divide-border overflow-hidden">
              {c.biomarkers.map((b) => (
                <div key={b.key} className="flex items-center gap-4 px-5 py-3">
                  <span className={`text-xs font-semibold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${kBadgeStyle[b.variant]}`}>
                    {b.key}
                  </span>
                  <span className="text-sm font-medium flex-1">{b.name}</span>
                  <span className="text-xs text-muted-foreground text-right">{b.domain}</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* Results */}
          <section className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-5">
              {c.resultsTitle}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-muted rounded-xl p-4 text-center">
                  <div className="text-2xl font-semibold">{m.val}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* Hard part */}
          <section className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              {c.hardTitle}
            </p>
            <div className="border border-border rounded-2xl divide-y divide-border overflow-hidden">
              {c.hardSteps.map((s) => (
                <div key={s.num} className="flex gap-4 px-5 py-4">
                  <span className="text-xs font-semibold text-[#0F6E56] bg-[#E1F5EE] px-2.5 py-1 rounded-md h-fit flex-shrink-0 mt-0.5">
                    {s.num}
                  </span>
                  <div>
                    <p className="text-sm font-semibold mb-1">{s.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* Limitations */}
          <section className="mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              {c.limTitle}
            </p>
            <div className="border border-border rounded-2xl divide-y divide-border overflow-hidden">
              {c.limitations.map((l) => (
                <div key={l} className="flex gap-3 px-5 py-3.5 items-start">
                  <AlertTriangle className="w-4 h-4 text-[#BA7517] flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-sm text-muted-foreground">{l}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {c.backLabel}
            </Link>
          </div>

        </motion.div>
      </main>
    </div>
  )
}
