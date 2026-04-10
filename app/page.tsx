"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, ArrowRight, Mail, Linkedin, FileText, Menu, X, ExternalLink} from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "01",
    year: "2024",
    title: "POS Fast Food System",
    image: "/components/Photos/POS Fast Food System.png",
    link: "https://www.figma.com/proto/FMSSnmpmhx5lJOaAWyuwOs/CS251-POS?node-id=46-10&t=pY2vkzAG4L2ismrK-1&scaling=contain&content-scaling=fixed&page-id=46%3A4&starting-point-node-id=46%3A10&show-proto-sidebar=1", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "University Project",
    category: ["UX/UI Design"],
    tools: ["Figma", "User Research"],
  },
  {
    id: "02",
    year: "2024",
    title: "TU Party Mobile App",
    image: "/components/Photos/tu.png",
    link: "https://www.figma.com/proto/7pGnu6YksgvXzW1t9IbTTt/CS384_Prototype?node-id=24-409&t=KXlUYJU8h2Xzj0Ja-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=24%3A409", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "University Project",
    category: ["UX/UI Design"],
    tools: ["Figma", "Prototyping"],
  },
  {
    id: "03",
    year: "2024",
    title: "Cal Control App",
    image: "/components/Photos/control.png",
    link: "https://www.figma.com/proto/6xq067fpFHY2lWS0UIPLus/Cal-Control?node-id=463-2055&t=y6yB2gtRuL5zNH0K-1&scaling=min-zoom&content-scaling=fixed&page-id=156%3A593&starting-point-node-id=156%3A640", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Client Work",
    category: ["UX/UI Design"],
    tools: ["Figma", "Interaction Design"],
  },
  {
    id: "04",
    year: "2025",
    title: "Aom Tang Web App",
    image: "/components/Photos/Aomtang.png",
    link: "https://www.figma.com/proto/CWZ1io1xgBnCCDJ9oz2zPF/%F0%9F%92%B0-%E0%B8%AD%E0%B8%AD%E0%B8%A1%E0%B8%95%E0%B8%B1%E0%B8%87-(OmTang)?node-id=215-717&t=wg0MzQANwg3IXHmU-1&scaling=contain&content-scaling=fixed&page-id=0%3A1", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Personal Project",
    category: ["UX/UI Design"],
    tools: ["Figma", "Minimalist UI"],
  },
  {
    id: "05",
    year: "2025",
    title: "Keeppook Tracker",
    image: "/components/Photos/keep.png",
    link: "https://github.com/ThaLovelace/KeepTang", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Personal Project",
    category: ["Full-Stack Dev", "AI & ML"],
    tools: ["Figma", "Java", "Android Studio"],
  },
  {
    id: "06",
    year: "2025",
    title: "QuickStay Hotel Booking",
    image: "/components/Photos/hotel.png",
    link: "https://quickstay-blond.vercel.app/", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Development",
    category: ["Full-Stack Dev"],
    tools: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "07",
    year: "2025",
    title: "Restaurant POS Redesign",
    image: "/components/Photos/pos.png",
    link: "https://www.figma.com/...", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Client Work",
    category: ["UX/UI Design"],
    tools: ["Figma", "Component Design"],
  },
  {
    id: "08",
    year: "2025",
    title: "Ledlight 3D Landing Page",
    image: "/components/Photos/ledlight.png",
    link: "https://www.figma.com/...", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Client Work",
    category: ["UX/UI Design", "Full-Stack Dev"],
    tools: ["Figma", "Next.js", "TailwindCSS"],
  },
  {
    id: "09",
    year: "2025",
    title: "MyGPT AI Chatbot",
    image: "/components/Photos/gpt.png",
    link: "https://my-gpt-beta-pearl.vercel.app", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Development",
    category: ["Full-Stack Dev", "AI & ML"],
    tools: ["React", "Gemini API"],
  },
  {
    id: "10",
    year: "2025",
    title: "Sleep Sync",
    image: "/components/Photos/sleep.png",
    link: "https://www.figma.com/proto/IX1l1vaCmnkBeQezIiTzak/Sleep-Sync-App?node-id=145-1610&starting-point-node-id=180%3A3969&t=NdYxrPQp3URtdJEz-1", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Client Work",
    category: ["UX/UI Design"],
    tools: ["Figma", "Usability Testing"],
  },
  {
    id: "11",
    year: "2025",
    title: "F&B Dash: Hotel Analytics",
    image: "/components/Photos/fs.png",
    link: "https://www.figma.com/...", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Client Work",
    category: ["UX/UI Design"],
    tools: ["Figma", "Data Visualization"],
  },
  /*{
    id: "12",
    year: "2026",
    title: "AI-Based Dementia Screening",
    image: "/components/Photos/2.png",
    link: "https://www.figma.com/...", // <--- เพิ่มบรรทัดนี้เข้าไป
    tag: "Senior Project",
    category: ["AI & ML", "Full-Stack Dev"],
    tools: ["Python", "Vision Transformer", "FastAPI"],
  },*/
]

const categories = ["All", "UX/UI Design", "Full-Stack Dev", "AI & ML"]

// --- ฟังก์ชันช่วยเหลือสำหรับ Smooth Scroll ---
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, closeMenu?: () => void) => {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    if (closeMenu) closeMenu()
  }
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, "home")}
          className="font-serif text-2xl font-bold tracking-tight cursor-pointer"
        >
          Thapanee.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Home
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Projects
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            About Me
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#home" onClick={(e) => scrollToSection(e, "home", () => setIsOpen(false))} className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#projects" onClick={(e) => scrollToSection(e, "projects", () => setIsOpen(false))} className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#about" onClick={(e) => scrollToSection(e, "about", () => setIsOpen(false))} className="text-muted-foreground hover:text-foreground transition-colors">
                About Me
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, "contact", () => setIsOpen(false))} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="bg-muted/50 rounded-3xl px-8 py-12 md:px-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Hi,
              <img
                src="/components/Photos/me1.jpg"
                alt="Som-o"
                className="
                  inline-block 
                  w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                  object-cover mx-3 align-middle 
                  border-2 border-white rounded-xl shadow-md 
                  rotate-[-5deg]
                  
                  transition-all duration-300 ease-out
                  hover:scale-125 hover:rotate-0 hover:shadow-xl   /* desktop */
                  active:scale-110                                 /* mobile tap */
                  cursor-pointer
                "
              />
              I'm Som-o!
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I turn complex logic into beautiful, user-friendly experiences. 
              <br />
              As a Computer Science student with a designer's eye, 
              I build digital products that don't just work flawlessly behind the scenes, 
              <br />
              but look amazing on the screen
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12"
            >
              <button
                onClick={(e) => {
                  const el = document.getElementById("projects")
                  el?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border hover:bg-muted transition-colors cursor-pointer"
                aria-label="Scroll to projects"
              >
                <ArrowDown className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FilterButtons({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: string
  onFilterChange: (filter: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            activeFilter === category
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer flex flex-col"
    >
      {/* กรอบรูปภาพ (ตั้ง relative ไว้เพื่ออ้างอิงตำแหน่งปุ่ม) */}
      <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-muted relative">
        <img 
          src={project.image || "/placeholder.jpg"} 
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* --- ปุ่มลิงก์มุมขวาบน (จะโชว์ก็ต่อเมื่อเราใส่ข้อมูล link ไว้) --- */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            // แต่งสไตล์ปุ่ม: สีดำ (foreground) ลอยมุมขวาบน (top-4 right-4) มีเงา (shadow-lg)
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 bg-foreground text-background rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
            aria-label={`View ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {/* ----------------------------------------------------- */}
      </div>

      <div className="space-y-2 flex-1">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {project.tag}
        </span>
        <h3 className="font-serif text-xl font-bold group-hover:text-muted-foreground transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">{project.year}</span>
          <span className="text-muted-foreground">·</span>
          {project.tools.slice(0, 2).map((tool) => (
            <span
              key={tool}
              className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pt-2">
          View Project <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.article>
  )
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = useMemo(() => {
    // 1. กรองข้อมูลตามหมวดหมู่ก่อน
    let result = activeFilter === "All" 
      ? [...projects] 
      : projects.filter((project) => project.category.includes(activeFilter));
      
    // 2. ใช้ .sort() เพื่อเรียงลำดับ id จากมากไปน้อย (เลขเยอะอยู่บน)
    return result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  }, [activeFilter])

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Works
        </motion.h2>

        <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey didn't start with a traditional design background; it started with logic, algorithms, and a Computer Science degree. However, <br/> I quickly realized that the most brilliant code is useless if people can't figure out how to use it. That's when I found my sweet spot: the intersection of UX/UI design and software development.
              </p>
              <p>
                I consider myself a 'Hybrid'. Whether I'm designing a premium dashboard for a client or engineering an AI Vision Transformer to help with medical screening, my goal is always the same: solving real human problems through technology.
              </p>
              <p>
                As an introvert, I spend a lot of time observing how people interact with the digital world. When I'm not designing or debugging, you can find me playing the guitar, listening to my favorite K-pop playlists, or sketching out ideas for my dream cafe in Mae Rim.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/components/Photos/me2.jpg"
              alt="Som-o"
              className="
                block mx-auto

                w-48 h-48 
                md:w-72 md:h-72 
                lg:w-[420px] lg:h-[420px]

                object-cover 
                border-4 border-white rounded-2xl shadow-xl 
                rotate-[-4deg]

                transition-all duration-300 ease-out
                hover:scale-105 hover:rotate-0 hover:shadow-2xl
                active:scale-105
                cursor-pointer
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-muted/50 rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Have a project in mind?
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-12">
              {"Let's Connect!"}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href="https://drive.google.com/file/d/16Jig1cqzv2LBBmXrxev_eiuDtsL7-pvS/view?usp=sharing"
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a
                href="http://www.linkedin.com/in/thapanee-chaiprapha-67229b301"
                className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-xl font-medium hover:bg-muted transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <a
              href="mailto:cha.thapanee.work@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              cha.thapanee.work@gmail.com
            </a>
          </motion.div>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Thapanee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// --- คอมโพเนนต์ใหม่: ปุ่มลอยตรงกลาง (FAB) ---
function FloatingContactButton() {
  // ตั้งค่าเริ่มต้นให้โชว์ปุ่มเสมอ
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // ใช้ document.documentElement.scrollHeight เพื่อความแม่นยำของความสูงทั้งหน้า
      const scrollPosition = window.scrollY + window.innerHeight
      const bottomPosition = document.documentElement.scrollHeight - 100 // ระยะก่อนถึงขอบล่าง 100px
      
      // ถ้าเลื่อนมาถึงล่างสุดให้ซ่อน (false) ถ้าไม่ถึงให้โชว์ (true)
      if (scrollPosition >= bottomPosition) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    
    // หน่วงเวลาเช็ก 0.5 วินาที เพื่อให้เว็บเรนเดอร์ความสูงให้เสร็จก่อน
    const timeoutId = setTimeout(handleScroll, 500)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full shadow-2xl hover:bg-foreground/90 transition-all duration-300"
          aria-label="Let's Connect"
        >
          <Mail className="w-4 h-4" />
          <span className="text-sm font-medium">Let's Connect</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function Portfolio() {
  return (
    // ใส่ id="home" ให้ส่วนบนสุด เพื่อให้ปุ่ม Home กดกลับขึ้นมาได้
    <main id="home" className="min-h-screen scroll-smooth">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <Footer />
      {/* วางปุ่มลอยไว้ตรงนี้ */}
      <FloatingContactButton />
    </main>
  )
}