"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"

const content = {
  en: {
    title: "TU Party",
    year: "2024",
    role: "University Project · UX Research & Prototype Design · Team of 7",
    tagline: "A full-semester HCI project — from user interviews to usability testing to iterated prototype. Every design decision backed by real research.",
    links: { figma: "" },
    statusTag: "CS384 (HCI) · Figma Prototype",
    tags: ["Figma", "UX Research", "Prototype Design", "Usability Testing", "CS384 (HCI)"],
    heroImage: "" as string,
    overview: "TU Party is a mobile application that centralizes all club and activity information at Thammasat University in one place. Designed to solve the scattered, incomplete information problem that prevents students from finding and joining clubs. Built for iOS and Android, developed as a 7-person team across one full semester in CS384 Human-Computer Interaction.",
    problem: {
      title: "Problem & Background",
      body: "Many TU students never join clubs — even though clubs are one of the best ways to find your interests and build cross-faculty networks. The core issue: club information is scattered across Facebook, Instagram, Line, and physical notice boards, inconsistently updated, and hard to navigate. Students miss application windows or never discover clubs that match their interests.",
      painPoints: [
        { label: "Scattered information", desc: "Club info spread across Facebook, Instagram, Line, and physical boards with no central source." },
        { label: "No discovery tool", desc: "Students who don't already know what clubs exist have no way to systematically find ones that match their interests." },
        { label: "Missed deadlines", desc: "Inconsistent updates mean students often miss application windows entirely." },
      ],
    },
    research: {
      title: "Research Process",
      body: "The team conducted in-depth 1-on-1 and phone interviews with 10+ participants across multiple faculties and years. Interviewees were split into two groups: Service Providers (students with club leadership roles) and Service Receivers (general members and non-members).",
      affinity: "All interview data was organized into an Affinity Diagram, revealing 6 problem clusters: publicity, incomplete information, internal club communication, membership registration, platform mismatch, and personal motivation.",
      role: "Som-o's role: conducted face-to-face user interviews and co-analyzed transcripts to build the Affinity Diagram with the team.",
      affinityImage: "" as string,
    },
    persona: {
      title: "User Segmentation & Persona",
      body: "From the Affinity Diagram, the team identified 2 user patterns:",
      patterns: [
        { name: "Pattern 1", desc: "Students already in clubs. Familiar with the landscape, follow clubs on Facebook/Instagram, rarely encounter discovery problems." },
        { name: "Pattern 2", desc: "Students not yet in clubs. Partial awareness, rely on Instagram, frequently hit dead ends due to incomplete or unclear club information." },
      ],
      choice: "The team chose Pattern 2 as the primary persona — they represent the exact problem TU Party is designed to solve: students who want to join but lack clear, centralized information to decide.",
      scenario: "From this persona, the team built a User Scenario around 'Ball' — a student interested in football looking for a matching club — as the anchor for Task Analysis and User Flow design.",
      personaImage: "" as string,
    },
    features: {
      title: "Key Features",
      items: [
        { name: "Matching Find", desc: "An interest survey shown immediately after first login. Recommends clubs based on the user's personal preferences — directly addressing 'I don't know what clubs exist for me' from interviews.", image: "" as string },
        { name: "Search + Compare", desc: "Search clubs by name or keyword, then select multiple to compare side by side — hours required, highlights, past activities. Makes the decision process concrete.", image: "" as string },
        { name: "Club Profile", desc: "Full club detail page: activity format, current events, photo gallery, and real member reviews. Solves 'club information is incomplete' — the most common complaint from non-members.", image: "" as string },
        { name: "Track Application Status", desc: "After submitting an application, users track status in real time: Under Review → Shortlisted → Accepted. No more waiting and wondering.", image: "" as string },
      ],
    },
    colors: {
      title: "Visual Design — Color System",
      rule: "60-30-10 Rule",
      body: "The UI follows the 60-30-10 color proportion to keep the app balanced, easy on the eyes, and energetic enough to encourage participation.",
      swatches: [
        { hex: "#FFFFFF", name: "White", percent: "60%", usage: "Primary background across all screens. Keeps information-dense pages readable and uncluttered." },
        { hex: "#EB7147", name: "Apricot", percent: "30%", usage: "Key UI elements: main headings, bottom navigation bar, recommended activity cards. Warm and energetic." },
        { hex: "#EB4811", name: "Burnt Orange", percent: "10%", usage: "Call-to-action buttons (FOLLOW, REGISTER) and important alerts. Draws the eye to action points." },
      ],
      colorImage: "" as string,
    },
    prototype: {
      title: "Prototype — Mid-Project to Final Iteration",
      body: "The team designed High-Fidelity Prototypes from the start, developing two versions: mid-semester and end-semester. After the mid-semester version was tested with real users and reviewed by the instructor, the team applied the insights to improve the prototype across several areas.",
      changes: [
        "Adjusted SKIP/NEXT button colors to be clearly distinguishable",
        "Added more interest options in Matching Find",
        "Added a club recommendation screen after the interest survey",
        "Added comparison details in Compare (hours required, highlights, past activities)",
        "Added application status tracking in Track Status screen",
        "Changed some animations from Smart Animate to Instant to reduce component misalignment",
      ],
      role: "Som-o was the primary owner of the Prototype — responsible for building it in the mid-semester phase and leading all revisions after usability testing and instructor feedback.",
      beforeImage: "" as string,
      afterImage: "" as string,
    },
    usability: {
      title: "Usability Testing & Iteration",
      body: "The team tested the mid-semester prototype with 5 real users. Each was given the same task: 'Join the university football club' — spanning 8 steps from opening the app to confirming the application submission.",
      metrics: [
        { label: "Efficiency", value: "≤ 75s", desc: "Time to complete the full task" },
        { label: "Effectiveness", value: "> 70%", desc: "Task success rate" },
        { label: "Satisfaction", value: "SUS > 68", desc: "System Usability Scale score" },
      ],
      result: "3 out of 5 users passed all metrics. 2 users failed to find the Compare feature — it was buried inside Search and not visible enough to discover naturally.",
      fix: "After testing: the Compare feature was repositioned to be accessible before and after search, not hidden inside it. Font size was increased at flagged points based on direct user feedback.",
      testImage: "" as string,
    },
    myRole: {
      title: "My Role",
      responsibilities: [
        "Conducted face-to-face user interviews (User Research)",
        "Co-analyzed interview transcripts to build Affinity Diagram and User Segmentation",
        "Wrote project documentation and report",
        "Primary owner of the Figma Prototype — both mid-semester build and final iteration",
        "Presented the project to the course instructor",
      ],
      reflection: "This project showed me what a complete UX process actually looks like end-to-end — from defining a problem, conducting real field research, finding insights, designing a prototype, and most importantly, taking real test results and turning them into concrete design improvements.",
    },
  },
  th: {
    title: "TU Party",
    year: "2024",
    role: "University Project · UX Research & Prototype Design · ทีม 7 คน",
    tagline: "โปรเจกต์ HCI ตลอด 1 เทอม — ตั้งแต่สัมภาษณ์ผู้ใช้จริง ไปจนถึง Usability Testing และการปรับปรุง Prototype ทุก Design Decision มาจากข้อมูลจริง",
    links: { figma: "" },
    statusTag: "CS384 (HCI) · Figma Prototype",
    tags: ["Figma", "UX Research", "Prototype Design", "Usability Testing", "CS384 (HCI)"],
    heroImage: "" as string,
    overview: "TU Party คือแอปพลิเคชันมือถือที่รวบรวมข้อมูลกิจกรรมและการรับสมัครชุมนุมทั้งหมดของมหาวิทยาลัยธรรมศาสตร์ไว้ในที่เดียว ออกแบบขึ้นเพื่อแก้ปัญหาการค้นหาชุมนุมที่กระจัดกระจายและไม่ครบถ้วน พัฒนาสำหรับ iOS และ Android โดยทีม 7 คน ตลอด 1 เทอม ในรายวิชา CS384 การปฏิสัมพันธ์ระหว่างมนุษย์และคอมพิวเตอร์",
    problem: {
      title: "Problem & Background",
      body: "นักศึกษา TU จำนวนมากไม่เข้าร่วมชุมนุม ทั้งที่ชุมนุมเป็นช่องทางสำคัญในการค้นหาตัวเองและสร้างเครือข่าย สาเหตุหลักคือข้อมูลชุมนุมกระจัดกระจายอยู่ใน Facebook, Instagram, Line และป้ายประกาศ ไม่มีแหล่งรวม ไม่อัปเดต ทำให้พลาดช่วงเปิดรับสมัคร หรือไม่รู้ว่ามีชุมนุมที่ตรงกับความสนใจ",
      painPoints: [
        { label: "ข้อมูลกระจัดกระจาย", desc: "ข้อมูลชุมนุมอยู่ใน Facebook, Instagram, Line และป้ายประกาศ ไม่มีแหล่งรวมเดียว" },
        { label: "ไม่มีเครื่องมือค้นหา", desc: "นักศึกษาที่ยังไม่รู้จักชุมนุมมีวิธีค้นหาชุมนุมที่ตรงความสนใจได้ยากมาก" },
        { label: "พลาด Deadline", desc: "อัปเดตไม่สม่ำเสมอ ทำให้นักศึกษาพลาดช่วงเปิดรับสมัครทั้งๆ ที่อยากเข้า" },
      ],
    },
    research: {
      title: "กระบวนการวิจัย",
      body: "ทีมเก็บข้อมูลด้วยการสัมภาษณ์เชิงลึกแบบตัวต่อตัวและทางโทรศัพท์ กว่า 10 คน ครอบคลุมหลายคณะและหลายชั้นปี แบ่งเป็น 2 กลุ่ม: ผู้ให้บริการ (ผู้มีตำแหน่งในชุมนุม) และผู้รับบริการ (สมาชิกทั่วไปและผู้ที่ไม่ได้อยู่ในชุมนุม)",
      affinity: "นำข้อมูลทั้งหมดมาทำ Affinity Diagram พบ 6 กลุ่มปัญหา: การประชาสัมพันธ์, ข้อมูลไม่ครบถ้วน, การสื่อสารภายใน, การลงทะเบียน, แพลตฟอร์มไม่เหมาะสม และเหตุผลส่วนตัวของผู้ใช้",
      role: "บทบาทของส้มส้ม: ลงพื้นที่สัมภาษณ์ผู้ใช้แบบตัวต่อตัว และร่วมวิเคราะห์บทสัมภาษณ์เพื่อสร้าง Affinity Diagram",
      affinityImage: "" as string,
    },
    persona: {
      title: "User Segmentation & Persona",
      body: "จาก Affinity Diagram ทีมแบ่งผู้ใช้เป็น 2 Pattern:",
      patterns: [
        { name: "Pattern 1", desc: "กลุ่มที่เข้าร่วมชุมนุมอยู่แล้ว คุ้นเคยกับชุมนุม ติดตามผ่าน Facebook/Instagram ไม่ค่อยพบปัญหาการค้นหา" },
        { name: "Pattern 2", desc: "กลุ่มที่ยังไม่เข้าร่วมชุมนุม รู้จักชุมนุมบางส่วน ติดตามผ่าน Instagram เจอปัญหาการค้นหาบ่อย เพราะข้อมูลไม่ครบและไม่ชัดเจน" },
      ],
      choice: "ทีมเลือก Pattern 2 เป็น Persona หลัก เพราะสะท้อนปัญหาที่ TU Party ต้องการแก้ไขได้ตรงจุดที่สุด",
      scenario: "จาก Persona นี้ ทีมพัฒนา User Scenario ของ 'บอล' นักศึกษาที่สนใจฟุตบอลและอยากหาชุมนุม เพื่อเป็นแกนในการออกแบบ Task Analysis และ User Flow",
      personaImage: "" as string,
    },
    features: {
      title: "Key Features",
      items: [
        { name: "Matching Find", desc: "แบบสำรวจความสนใจที่ผู้ใช้พบทันทีหลัง Login ครั้งแรก ระบบแนะนำชุมนุมตามความชอบ ตอบ Pain Point 'ไม่รู้ว่ามีชุมนุมอะไรที่เหมาะกับตัวเอง' โดยตรง", image: "" as string },
        { name: "Search + Compare", desc: "ค้นหาชุมนุมด้วยชื่อหรือ Keyword และเลือกมาเปรียบเทียบได้ แสดงชั่วโมงเข้าร่วม จุดเด่น และกิจกรรมที่เคยจัด ทำให้ตัดสินใจได้ง่ายขึ้น", image: "" as string },
        { name: "Club Profile", desc: "หน้ารายละเอียดชุมนุมครบถ้วน: รูปแบบกิจกรรม กิจกรรมปัจจุบัน ภาพประกอบ และ Review จากสมาชิกจริง แก้ปัญหา 'ข้อมูลชุมนุมไม่ครบ' ที่พบบ่อยในกลุ่มที่ยังไม่เข้าร่วม", image: "" as string },
        { name: "Track Application Status", desc: "ติดตามสถานะการสมัครแบบ Real-time: กำลังตรวจสอบ → คัดเลือกผู้สมัคร → ผ่านการคัดเลือก ไม่ต้องคอยถามหรือเดาผลเอง", image: "" as string },
      ],
    },
    colors: {
      title: "Visual Design — Color System",
      rule: "60-30-10 Rule",
      body: "UI ของ TU Party ยึดหลัก 60-30-10 เพื่อให้แอปดูสมดุล ใช้งานสบายตา และยังกระตุ้นให้อยากมีส่วนร่วม",
      swatches: [
        { hex: "#FFFFFF", name: "White", percent: "60%", usage: "พื้นหลังหลักทุกหน้า ช่วยให้ข้อมูลปริมาณมากอ่านง่ายและไม่อึดอัด" },
        { hex: "#EB7147", name: "Apricot", percent: "30%", usage: "หัวข้อหลัก แถบเมนูด้านล่าง การ์ดกิจกรรมแนะนำ ให้ความรู้สึกอบอุ่นและกระตุ้นพลังงาน" },
        { hex: "#EB4811", name: "Burnt Orange", percent: "10%", usage: "ปุ่ม Call-to-Action (FOLLOW, REGISTER) และการแจ้งเตือนสำคัญ ดึงความสนใจไปยังจุดที่ต้องดำเนินการ" },
      ],
      colorImage: "" as string,
    },
    prototype: {
      title: "Prototype — Mid-Project to Final Iteration",
      body: "ทีมออกแบบ High-Fidelity Prototype ตั้งแต่ต้น พัฒนาเป็น 2 เวอร์ชัน: กลางเทอมและปลายเทอม หลังนำเวอร์ชันกลางเทอมไปทดสอบกับผู้ใช้จริงและรับ Feedback จากอาจารย์ ทีมนำ Insight มาปรับปรุงในหลายจุด",
      changes: [
        "ปรับสีปุ่ม SKIP/NEXT ให้แตกต่างกันชัดเจน",
        "เพิ่มตัวเลือกความสนใจในหน้า Matching Find",
        "เพิ่มหน้าแนะนำชุมนุมจากผลแบบสำรวจ",
        "เพิ่มข้อมูลเปรียบเทียบในหน้า Compare (ชั่วโมงเข้าร่วม จุดเด่น กิจกรรมที่เคยจัด)",
        "เพิ่มสถานะการสมัครในหน้า Track Status",
        "เปลี่ยน Animation บางส่วนจาก Smart Animate เป็น Instant เพื่อลดความคลาดเคลื่อน",
      ],
      role: "ส้มส้มเป็นผู้รับผิดชอบหลักในการจัดทำ Prototype ทั้งช่วงกลางภาค และรับผิดชอบการปรับปรุงในช่วงปลายภาคหลังจากผลการทดสอบ Usability และ Feedback จากอาจารย์",
      beforeImage: "" as string,
      afterImage: "" as string,
    },
    usability: {
      title: "Usability Testing & Iteration",
      body: "ทีมทดสอบ Prototype กับผู้ใช้จริง 5 คน ให้ทำ Task เดียวกัน: 'สมัครสมาชิกชุมนุมฟุตบอลของมหาวิทยาลัย' — 8 ขั้นตอน ตั้งแต่เปิดแอปจนถึงยืนยันการส่งใบสมัคร",
      metrics: [
        { label: "Efficiency", value: "≤ 75s", desc: "เวลาที่ใช้ทำ Task ทั้งหมด" },
        { label: "Effectiveness", value: "> 70%", desc: "อัตราความสำเร็จของ Task" },
        { label: "Satisfaction", value: "SUS > 68", desc: "คะแนน System Usability Scale" },
      ],
      result: "3 จาก 5 คนผ่านเกณฑ์ทั้งหมด 2 คนหาฟีเจอร์ Compare ไม่เจอ เพราะถูกซ่อนอยู่ใน Search ไม่ชัดเจนพอ",
      fix: "ปรับให้ฟีเจอร์ Compare เข้าถึงได้ทั้งก่อนและหลัง Search ไม่ถูกซ่อนอยู่ลึกอีกต่อไป และขยายขนาดตัวอักษรในจุดที่ผู้ใช้ให้ Feedback",
      testImage: "" as string,
    },
    myRole: {
      title: "บทบาทของส้มส้ม",
      responsibilities: [
        "ลงพื้นที่สัมภาษณ์ผู้ใช้แบบตัวต่อตัว (User Research)",
        "ร่วมวิเคราะห์ข้อมูลจากบทสัมภาษณ์เพื่อสร้าง Affinity Diagram และ User Segmentation",
        "จัดทำเอกสารรายงาน",
        "ผู้รับผิดชอบหลักในการจัดทำ Prototype ทั้งช่วงกลางภาคและการปรับปรุงตามผล Usability Testing",
        "นำเสนอผลงานต่ออาจารย์ผู้สอน",
      ],
      reflection: "โปรเจกต์นี้สอนให้เห็นกระบวนการ UX ตั้งแต่ต้นจนจบแบบครบวงจร — จากการนิยามปัญหา เก็บข้อมูลจริง วิเคราะห์หา Insight ออกแบบ Prototype และสิ่งที่สำคัญที่สุดคือการนำผลการทดสอบจริงมาปรับปรุงงานออกแบบให้ตอบโจทย์ผู้ใช้มากขึ้น",
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

function Placeholder({ label, note }: { label: string; note?: string }) {
  return (
    <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-56 flex flex-col items-center justify-center gap-2 text-muted-foreground">
      <span className="text-2xl">🖼</span>
      <p className="text-sm font-medium">{label}</p>
      {note && <p className="text-xs opacity-60">{note}</p>}
    </div>
  )
}

export default function TUPartyPage() {
  const [lang, setLang] = useState<"en" | "th">("en")
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
        <motion.section className="pt-14 pb-10 border-b border-border"
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
                <ExternalLink className="w-3.5 h-3.5" /> View Full Prototype
              </a>
            </motion.div>
          )}
        </motion.section>

        {/* ── Hero Image ── */}
        <motion.section className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          {c.heroImage
            ? <img src={c.heroImage} alt={c.title} className="w-full rounded-2xl border border-border object-cover" />
            : <Placeholder label="TU Party — App Mockup" note="ใส่ path รูป Hero mockup (Home หรือ Matching Find)" />}
        </motion.section>

        {/* ── Overview ── */}
        <motion.section className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Overview</motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl">{c.overview}</motion.p>
        </motion.section>

        {/* ── Problem ── */}
        <motion.section className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Problem & Background</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.problem.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">{c.problem.body}</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.problem.painPoints.map((p, i) => (
              <motion.div key={p.label} variants={fadeUp} className="p-5 rounded-xl border border-border bg-[#FCEBEB]/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#A32D2D]">⚠</span>
                  <span className="text-sm font-semibold">{p.label}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Research ── */}
        <motion.section className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Research Process</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.research.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-4">{c.research.body}</motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-4">{c.research.affinity}</motion.p>
          <motion.div variants={fadeUp} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-[#E1F5EE]/30 mb-8">
            <span className="text-[#0F6E56] flex-shrink-0 mt-0.5">✦</span>
            <p className="text-sm text-muted-foreground">{c.research.role}</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            {c.research.affinityImage
              ? <img src={c.research.affinityImage} alt="Affinity Diagram" className="w-full rounded-2xl border border-border object-cover" />
              : <Placeholder label="Affinity Diagram" note="ใส่ path รูป Affinity Diagram จาก Figma" />}
          </motion.div>
        </motion.section>

        {/* ── Persona ── */}
        <motion.section className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">User Segmentation & Persona</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.persona.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">{c.persona.body}</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {c.persona.patterns.map((p, i) => (
              <motion.div key={p.name} variants={fadeUp} className={`p-5 rounded-xl border ${i === 1 ? "border-foreground/20 bg-muted/20" : "border-border bg-muted/30"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${i === 1 ? "bg-foreground text-background" : "bg-muted text-muted-foreground"}`}>{p.name}</span>
                  {i === 1 && <span className="text-xs text-muted-foreground">← Primary Persona</span>}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-[#EEEDFE]/30 mb-8">
            <span className="text-[#3C3489] flex-shrink-0 mt-0.5">✦</span>
            <p className="text-sm text-muted-foreground">{c.persona.choice}</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            {c.persona.personaImage
              ? <img src={c.persona.personaImage} alt="User Persona" className="w-full rounded-2xl border border-border object-cover" />
              : <Placeholder label="User Persona" note="ใส่ path รูป User Persona จาก Figma" />}
          </motion.div>
        </motion.section>

        {/* ── Key Features ── */}
        <motion.section className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">{c.features.title}</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.features.items.map((f, i) => (
              <motion.div key={f.name} variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
                <div className="px-5 py-4 border-b border-border bg-muted/30 flex items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAEEDA] text-[#633806]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-semibold">{f.name}</span>
                </div>
                <div className="p-5">
                  {f.image
                    ? <img src={f.image} alt={f.name} className="w-full rounded-xl border border-border object-cover mb-4" />
                    : <div className="w-full rounded-xl bg-muted border border-dashed border-border h-40 flex flex-col items-center justify-center gap-2 text-muted-foreground mb-4">
                        <span className="text-xl">📱</span>
                        <p className="text-xs">{f.name}</p>
                      </div>}
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Color System ── */}
        <motion.section className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Visual Design</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-2">{c.colors.title}</motion.h2>
          <motion.span variants={fadeUp} className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#EEEDFE] text-[#3C3489] mb-4">{c.colors.rule}</motion.span>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">{c.colors.body}</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {c.colors.swatches.map((s) => (
              <motion.div key={s.name} variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
                <div className="h-20 w-full" style={{ backgroundColor: s.hex, border: s.hex === "#FFFFFF" ? "none" : undefined }} />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">{s.name}</span>
                    <span className="text-xs font-bold text-muted-foreground">{s.percent}</span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-2">{s.hex}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.usage}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp}>
            {c.colors.colorImage
              ? <img src={c.colors.colorImage} alt="Color system in use" className="w-full rounded-2xl border border-border object-cover" />
              : <Placeholder label="Color System in Use" note="ใส่ path รูปหน้า Home ที่เห็นทั้ง 3 สีในหน้าเดียว" />}
          </motion.div>
        </motion.section>

        {/* ── Prototype ── */}
        <motion.section className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Prototype</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.prototype.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">{c.prototype.body}</motion.p>
          <motion.div variants={fadeUp} className="rounded-2xl border border-border overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-border bg-muted/30">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Improvements in Final Version</p>
            </div>
            <ul className="divide-y divide-border">
              {c.prototype.changes.map((ch) => (
                <li key={ch} className="flex items-start gap-3 px-6 py-3.5">
                  <span className="text-[#0F6E56] mt-0.5 flex-shrink-0 text-sm">→</span>
                  <p className="text-sm text-muted-foreground">{ch}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-[#E1F5EE]/30 mb-8">
            <span className="text-[#0F6E56] flex-shrink-0 mt-0.5">✦</span>
            <p className="text-sm text-muted-foreground">{c.prototype.role}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              {c.prototype.beforeImage
                ? <img src={c.prototype.beforeImage} alt="Mid-semester prototype" className="w-full rounded-2xl border border-border object-cover" />
                : <Placeholder label="Mid-Semester Version" note="ใส่ path รูป Prototype กลางเทอม" />}
              <p className="text-xs text-muted-foreground text-center">Mid-semester version</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              {c.prototype.afterImage
                ? <img src={c.prototype.afterImage} alt="Final prototype" className="w-full rounded-2xl border border-border object-cover" />
                : <Placeholder label="Final Version" note="ใส่ path รูป Prototype ปลายเทอม" />}
              <p className="text-xs text-muted-foreground text-center">Final version — after iteration</p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Usability Testing ── */}
        <motion.section className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Usability Testing</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.usability.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">{c.usability.body}</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {c.usability.metrics.map((m) => (
              <motion.div key={m.label} variants={fadeUp} className="p-5 rounded-xl border border-border bg-muted/30 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{m.label}</p>
                <p className="font-serif text-2xl font-bold mb-1">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="p-5 rounded-xl border border-border bg-[#FCEBEB]/30 mb-4">
            <p className="text-sm text-[#A32D2D] leading-relaxed"><span className="font-semibold">Result: </span>{c.usability.result}</p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-[#E1F5EE]/30 mb-8">
            <span className="text-[#0F6E56] flex-shrink-0 mt-0.5">→</span>
            <p className="text-sm text-muted-foreground"><span className="font-semibold">Fix: </span>{c.usability.fix}</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            {c.usability.testImage
              ? <img src={c.usability.testImage} alt="Usability test results" className="w-full rounded-2xl border border-border object-cover" />
              : <Placeholder label="Usability Test Results" note="ใส่ path รูปตาราง/กราฟผลการทดสอบ หรือ Before/After Compare feature" />}
          </motion.div>
        </motion.section>

        {/* ── My Role ── */}
        <motion.section className="py-10"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">My Role & Reflection</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-6">{c.myRole.title}</motion.h2>
          <motion.div variants={fadeUp} className="rounded-2xl border border-border overflow-hidden mb-6">
            <ul className="divide-y divide-border">
              {c.myRole.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3 px-6 py-3.5">
                  <span className="text-[#3C3489] mt-0.5 flex-shrink-0 text-sm">▸</span>
                  <p className="text-sm text-muted-foreground">{r}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-muted/30">
            <span className="text-muted-foreground/40 text-2xl leading-none flex-shrink-0">"</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">{c.myRole.reflection}</p>
          </motion.div>
        </motion.section>

        {/* ── CTA ── */}
        {c.links.figma && (
          <motion.div className="py-8 flex justify-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <a href={c.links.figma} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-xl hover:bg-foreground/85 transition-colors">
              <ExternalLink className="w-4 h-4" /> View Full Prototype in Figma
            </a>
          </motion.div>
        )}

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
