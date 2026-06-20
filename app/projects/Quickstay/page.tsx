"use client"

import { useLang } from "@/context/LangContext"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

// ============================================================
//  ✏️  CONTENT — แก้ข้อมูลทั้งหมดที่นี่ที่เดียว
// ============================================================
const content = {
  en: {
    title: "QuickStay",
    year: "2024",
    role: "Personal Project · Full-Stack · MERN",
    tagline: "Built every line by hand, no AI, no copy-paste. One week. One full-stack app. One lesson I won't forget.",

    links: {
      github: "https://github.com/ThaLovelace/Hotel-Booking.git", // 🔗 ใส่ GitHub link
      demo: "https://quickstay-blond.vercel.app/",   // 🔗 ใส่ Live Demo link
    },

    statusTag: "Personal Learning Project",

    tags: ["React", "Node.js", "Express", "MongoDB", "Clerk Auth", "Cloudinary", "Nodemailer", "Vercel"],

    heroImage: "/components/Photos/hotel.png" as string, // 🔗 ใส่ path รูป Screenshot หน้า Home

    why: {
      title: "Why I built this",
      body: "I wanted to understand how full-stack really works — not just read about it or watch someone else do it. So I found a YouTube tutorial and wrote every single line of code by hand. No AI. No copy-paste. One week straight.",
      goal: "The goal wasn't a polished product. It was to understand how data flows from a frontend input all the way into a database, and what the backend actually has to manage in between.",
    },

    roles: {
      title: "What I built — 3 roles in one system",
      items: [
        {
          role: "Guest",
          color: "bg-[#E1F5EE] text-[#0F6E56]",
          features: ["Search hotels by location & date", "View room details and pricing", "Book rooms and manage booking history"],
        },
        {
          role: "Hotel Owner",
          color: "bg-[#EEEDFE] text-[#3C3489]",
          features: ["Dashboard to manage hotel listings", "Add and edit room inventory", "View booking statistics and occupancy"],
        },
        {
          role: "System",
          color: "bg-[#FAEEDA] text-[#633806]",
          features: ["Auth via Clerk (session management)", "Images via Cloudinary (upload & CDN)", "Email confirmation via Nodemailer"],
        },
      ],
    },

    screenImages: [
      { image: "/components/QuickStay/Home.png" as string, label: "Home", desc: "Hotel search & landing experience" },
      { image: "/components/QuickStay/Room Details.png" as string, label: "Room Details", desc: "Room info, availability & booking" },
      { image: "/components/QuickStay/Owner Dashboard.png" as string, label: "Owner Dashboard", desc: "Hotel management & booking stats" },
    ],

    challenge: {
      title: "The Hard Part: Connecting the Dots",
      intro: "The most frustrating week wasn't building the frontend. It wasn't building the backend. It was making them talk to each other.",
      body: "Both sides worked perfectly in isolation. Then I tried to connect them — and nothing worked. I spent days debugging issues I didn't have names for yet: requests that didn't go through, auth that broke halfway, data that looked right but arrived wrong.",
      reflection: "I didn't always know what I was looking for. I just kept searching, asking, trying — until it worked. That process of not knowing what's broken, then finding it anyway — that's the part no tutorial prepares you for. And it's also the part I'm most glad I went through.",
      concurrentTitle: "One specific problem that stuck: Concurrent Booking",
      concurrentDesc: "What happens when two users open the same room at the same time, both see it as available, and press Book simultaneously? I didn't know this had a name until I searched long enough to find the terms Race Condition and Database Transaction.",
      solution: {
        title: "Solution: MongoDB Transaction",
        steps: [
          { num: "01", code: "startTransaction()", desc: "Lock the session before any read or write" },
          { num: "02", code: "checkAvailability()", desc: "Query availability inside the same transaction" },
          { num: "03", code: "commitTransaction()", desc: "If available → create booking → commit" },
          { num: "04", code: "abortTransaction()", desc: "If taken → abort → return error to user" },
        ],
      },
      overlap: {
        title: "Date overlap logic",
        desc: "One condition that covers every possible overlap scenario:",
        condition: "checkIn_new < checkOut_existing AND checkOut_new > checkIn_existing",
      },
    },

    learned: [
      {
        title: "Full-stack means making two worlds talk — not just knowing both separately",
        desc: "Knowing frontend and knowing backend aren't enough. The real skill is knowing what has to happen at the seam between them — requests, tokens, parsing, error handling across the boundary.",
      },
      {
        title: "Concurrent systems need Race Condition thinking from day one",
        desc: "Any system with multiple users acting at the same time has this problem. Solving it with MongoDB Transactions here means I'll recognize and handle it immediately in a real production system.",
      },
      {
        title: "Writing every line by hand teaches in a way copying never can",
        desc: "I use AI to code much faster now — but only because I understand the structure from building it myself first. That foundation is what lets me know when AI output is right or wrong.",
      },
    ],
  },

  th: {
    title: "QuickStay",
    year: "2024",
    role: "Personal Project · Full-Stack · MERN",
    tagline: "เขียนทุกบรรทัดด้วยมือ ไม่ใช้ AI ไม่ Copy-paste หนึ่งอาทิตย์ หนึ่ง Full-Stack App หนึ่งบทเรียนที่ไม่มีวันลืม",

    links: {
      github: "https://github.com/ThaLovelace/Hotel-Booking.git",
      demo: "https://quickstay-blond.vercel.app/",
    },

    statusTag: "Personal Learning Project",

    tags: ["React", "Node.js", "Express", "MongoDB", "Clerk Auth", "Cloudinary", "Nodemailer", "Vercel"],

    heroImage: "/components/Photos/hotel.png" as string,

    why: {
      title: "ทำไมถึงสร้างโปรเจคนี้",
      body: "อยากรู้ว่า Full-Stack จริงๆ มันทำงานยังไง ไม่ใช่แค่อ่านหรือดูคนอื่นทำ เลยหา Tutorial บน YouTube แล้วนั่งเขียนโค้ดตามทุกบรรทัด ไม่ใช้ AI ไม่ Copy-paste — ใช้เวลา 1 อาทิตย์เต็มๆ",
      goal: "เป้าหมายไม่ใช่ Product ที่สวย แต่คือเข้าใจว่าข้อมูลไหลจาก Frontend ไปถึง Database ยังไง และ Backend ต้องจัดการอะไรบ้าง",
    },

    roles: {
      title: "สิ่งที่สร้าง — 3 Role ในระบบเดียว",
      items: [
        {
          role: "Guest",
          color: "bg-[#E1F5EE] text-[#0F6E56]",
          features: ["ค้นหาโรงแรมตามสถานที่และวันที่", "ดูรายละเอียดห้องและราคา", "จองห้องและดูประวัติการจอง"],
        },
        {
          role: "Hotel Owner",
          color: "bg-[#EEEDFE] text-[#3C3489]",
          features: ["Dashboard จัดการรายการโรงแรม", "เพิ่มและแก้ไขห้องพัก", "ดูสถิติการจองและอัตราการเข้าพัก"],
        },
        {
          role: "System",
          color: "bg-[#FAEEDA] text-[#633806]",
          features: ["Auth ด้วย Clerk (จัดการ Session)", "รูปภาพผ่าน Cloudinary (Upload & CDN)", "Email ยืนยันผ่าน Nodemailer"],
        },
      ],
    },

    screenImages: [
      { image: "/components/QuickStay/Home.png" as string, label: "Home", desc: "ค้นหาโรงแรมและหน้า Landing" },
      { image: "/components/QuickStay/Room Details.png" as string, label: "Room Details", desc: "ข้อมูลห้อง ความพร้อมใช้งาน และการจอง" },
      { image: "/components/QuickStay/Owner Dashboard.png" as string, label: "Owner Dashboard", desc: "จัดการโรงแรมและดูสถิติการจอง" },
    ],

    challenge: {
      title: "จุดที่ยากที่สุด: Connecting the Dots",
      intro: "อาทิตย์ที่หนักที่สุดไม่ใช่ตอน Build Frontend ไม่ใช่ตอน Build Backend แต่คือตอนที่ทำให้ทั้งสองฝั่งคุยกันได้",
      body: "แต่ละฝั่งทำงานได้ดีคนเดียว พอเชื่อมกันปุ๊บ ทุกอย่างพัง ใช้เวลาหลายวัน Debug ปัญหาที่ยังไม่รู้ชื่อ — Request ที่ส่งไม่ผ่าน, Auth ที่พังกลางทาง, ข้อมูลที่ดูถูกแต่มาถึงผิด",
      reflection: "ไม่ได้รู้เสมอว่ากำลังหาอะไร แค่ค้นหา ถาม ลอง — จนมันใช้งานได้ กระบวนการที่ไม่รู้ว่าอะไรพัง แล้วหาเจอได้ในที่สุด — นั่นคือสิ่งที่ Tutorial ไม่เคยสอน และคือส่วนที่ภูมิใจที่สุดที่ได้ผ่านมา",
      concurrentTitle: "ปัญหาหนึ่งที่ติดฝังใจ: Concurrent Booking",
      concurrentDesc: "ถ้ามีคน 2 คนเปิดห้องเดียวกันพร้อมกัน ทั้งคู่เห็นว่าห้องว่าง แล้วกดจองพร้อมกัน — ระบบจะทำยังไง? ตอนนั้นไม่รู้ว่าปัญหานี้มีชื่อเรียก จนค้นหานานพอที่จะเจอคำว่า Race Condition และ Database Transaction",
      solution: {
        title: "วิธีแก้: MongoDB Transaction",
        steps: [
          { num: "01", code: "startTransaction()", desc: "ล็อค Session ก่อน Read หรือ Write ใดๆ" },
          { num: "02", code: "checkAvailability()", desc: "ตรวจสอบความพร้อมใช้งานภายใน Transaction เดียวกัน" },
          { num: "03", code: "commitTransaction()", desc: "ถ้าว่าง → สร้าง Booking → Commit" },
          { num: "04", code: "abortTransaction()", desc: "ถ้าไม่ว่าง → Abort → แจ้ง Error กลับไปยังผู้ใช้" },
        ],
      },
      overlap: {
        title: "Date Overlap Logic",
        desc: "เงื่อนไขเดียวที่ครอบคลุมทุก Overlap Case:",
        condition: "checkIn_new < checkOut_existing AND checkOut_new > checkIn_existing",
      },
    },

    learned: [
      {
        title: "Full-Stack คือการทำให้ 2 โลกคุยกันได้ ไม่ใช่แค่รู้ทั้งสองแยกกัน",
        desc: "รู้ Frontend และรู้ Backend ยังไม่พอ ทักษะที่แท้จริงคือรู้ว่าต้องทำอะไรตรงรอยต่อ — Request, Token, Parsing, Error Handling ข้ามขอบเขต",
      },
      {
        title: "ระบบที่มีคนใช้พร้อมกันต้องคิดเรื่อง Race Condition ตั้งแต่ต้น",
        desc: "ระบบที่มี User หลายคนทำงานพร้อมกันล้วนมีปัญหานี้ การแก้ด้วย MongoDB Transaction ตอนนี้ทำให้รู้จักและรับมือได้ทันทีเมื่อเจอในระบบ Production จริง",
      },
      {
        title: "เขียนเองทุกบรรทัดสอนได้ในแบบที่ Copy ไม่ได้",
        desc: "ตอนนี้ใช้ AI ช่วย Code ได้เร็วขึ้นมาก แต่เพราะเข้าใจโครงสร้างจากการเขียนเองก่อน เลยรู้ว่า AI ทำถูกหรือผิด ฐานความเข้าใจนั้นคือสิ่งที่ทำให้ใช้ AI ได้อย่างมีประสิทธิภาพ",
      },
    ],
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

export default function QuickStayPage() {
  const { lang, setLang } = useLang()
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
        <motion.section key={`sec-1-${lang}`}
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
            <motion.span variants={fadeUp} className="self-start md:self-end inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border whitespace-nowrap">
              {c.statusTag}
            </motion.span>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
            {c.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">{t}</span>
            ))}
          </motion.div>

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
          </motion.div>
        </motion.section>

        {/* ── Hero Image ── */}
        <motion.section key={`sec-2-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          {c.heroImage ? (
            <img src={c.heroImage} alt={c.title} className="w-full rounded-2xl border border-border object-cover" />
          ) : (
            <div className="w-full rounded-2xl bg-muted/50 border border-dashed border-border h-64 md:h-80 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <span className="text-3xl">🖼</span>
              <p className="text-sm font-medium">Home — Landing Page</p>
              <p className="text-xs opacity-60">ใส่ path รูป Screenshot หน้า Home</p>
            </div>
          )}
        </motion.section>

        {/* ── Why I built this ── */}
        <motion.section key={`sec-3-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Context</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.why.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-4">{c.why.body}</motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl">{c.why.goal}</motion.p>
        </motion.section>

        {/* ── 3 Roles ── */}
        <motion.section key={`sec-4-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            {c.roles.title}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.roles.items.map((item) => (
              <motion.div key={item.role} variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
                <div className="px-5 py-3 border-b border-border bg-muted/30">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.color}`}>{item.role}</span>
                </div>
                <ul className="p-5 space-y-2.5">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="text-muted-foreground/40 mt-0.5 flex-shrink-0">—</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Screenshots ── */}
        <motion.section key={`sec-5-${lang}`}
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

        {/* ── The Hard Part ── */}
        <motion.section key={`sec-6-${lang}`}
          className="py-10 border-b border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">The Hard Part</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-2xl font-bold mb-4">{c.challenge.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-4">{c.challenge.intro}</motion.p>
          <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-4">{c.challenge.body}</motion.p>

          {/* Reflection quote */}
          <motion.div variants={fadeUp} className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-muted/30 mb-10">
            <span className="text-muted-foreground/40 text-2xl leading-none flex-shrink-0">"</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic">{c.challenge.reflection}</p>
          </motion.div>

          {/* Concurrent Booking */}
          <motion.p variants={fadeUp} className="text-sm font-semibold mb-3">{c.challenge.concurrentTitle}</motion.p>
          <motion.div variants={fadeUp} className="p-5 rounded-xl border border-border bg-[#FCEBEB]/40 mb-6">
            <p className="text-sm text-[#A32D2D] leading-relaxed">{c.challenge.concurrentDesc}</p>
          </motion.div>

          {/* Solution Steps */}
          <motion.p variants={fadeUp} className="text-sm font-semibold mb-4">{c.challenge.solution.title}</motion.p>
          <div className="space-y-3 mb-8">
            {c.challenge.solution.steps.map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="grid grid-cols-[auto_auto_1fr] items-start gap-4 py-4 px-5 rounded-xl border border-border">
                <span className="text-xs font-bold text-muted-foreground/40 flex-shrink-0 mt-0.5">{step.num}</span>
                <code className="text-xs font-mono bg-muted px-2 py-1 rounded text-foreground flex-shrink-0">{step.code}</code>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Date Overlap */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/30">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.challenge.overlap.title}</p>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.challenge.overlap.desc}</p>
              <code className="block text-sm font-mono bg-muted px-4 py-3 rounded-xl text-foreground leading-relaxed">
                {c.challenge.overlap.condition}
              </code>
            </div>
          </motion.div>
        </motion.section>

        {/* ── What I Learned ── */}
        <motion.section key={`sec-7-${lang}`}
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
