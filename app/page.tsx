"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, ArrowRight, Mail, Linkedin, FileText, Menu, X } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "01",
    year: "2024",
    title: "POS Fast Food System",
    tag: "University Project",
    category: ["UX/UI Design"],
    tools: ["Figma", "User Research"],
  },
  {
    id: "02",
    year: "2024",
    title: "TU Party Mobile App",
    tag: "University Project",
    category: ["UX/UI Design"],
    tools: ["Figma", "Prototyping"],
  },
  {
    id: "03",
    year: "2024",
    title: "Cal Control App",
    tag: "Freelance",
    category: ["UX/UI Design"],
    tools: ["Figma", "Interaction Design"],
  },
  {
    id: "04",
    year: "2025",
    title: "Aom Tang Web App",
    tag: "Personal Project",
    category: ["UX/UI Design"],
    tools: ["Figma", "Minimalist UI"],
  },
  {
    id: "05",
    year: "2025",
    title: "Keeppook Tracker",
    tag: "Personal Project",
    category: ["Full-Stack Dev"],
    tools: ["Kotlin", "Android Studio"],
  },
  {
    id: "06",
    year: "2025",
    title: "QuickStay Hotel Booking",
    tag: "Development",
    category: ["Full-Stack Dev"],
    tools: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "07",
    year: "2025",
    title: "Restaurant POS Redesign",
    tag: "Freelance",
    category: ["UX/UI Design"],
    tools: ["Figma", "Component Design"],
  },
  {
    id: "08",
    year: "2025",
    title: "Ledlight 3D Landing Page",
    tag: "Freelance",
    category: ["UX/UI Design", "Full-Stack Dev"],
    tools: ["Next.js", "TailwindCSS"],
  },
  {
    id: "09",
    year: "2025",
    title: "MyGPT AI Chatbot",
    tag: "Development",
    category: ["Full-Stack Dev", "AI & ML"],
    tools: ["React", "Gemini API"],
  },
  {
    id: "10",
    year: "2025",
    title: "Sleep Sync",
    tag: "Client Work",
    category: ["UX/UI Design"],
    tools: ["Figma", "Usability Testing"],
  },
  {
    id: "11",
    year: "2025",
    title: "F&B Dash: Hotel Analytics",
    tag: "Freelance",
    category: ["UX/UI Design"],
    tools: ["Figma", "Data Visualization"],
  },
  {
    id: "12",
    year: "2026",
    title: "AI-Based Dementia Screening",
    tag: "Senior Project",
    category: ["AI & ML", "Full-Stack Dev"],
    tools: ["Python", "Vision Transformer", "FastAPI"],
  },
]

const categories = ["All", "UX/UI Design", "Full-Stack Dev", "AI & ML"]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
          Rada.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About Me
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
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
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About Me
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
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
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="bg-muted/50 rounded-3xl px-8 py-16 md:px-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Designing with Logic.
              <br />
              Building with Purpose.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A CS student passionate about creating intuitive, human-centered tools
              — bridging the gap between beautiful design and functional code.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border hover:bg-muted transition-colors"
                aria-label="Scroll to projects"
              >
                <ArrowDown className="w-5 h-5" />
              </Link>
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
  const colors = [
    "bg-sky-100",
    "bg-amber-100",
    "bg-rose-100",
    "bg-emerald-100",
    "bg-violet-100",
    "bg-orange-100",
  ]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div
        className={`aspect-[4/3] rounded-2xl ${colors[index % colors.length]} flex items-center justify-center overflow-hidden mb-4`}
      >
        <div className="w-3/4 h-3/4 bg-background/80 rounded-xl shadow-lg flex items-center justify-center">
          <span className="font-serif text-2xl font-bold text-muted-foreground/50">
            {project.id}
          </span>
        </div>
      </div>
      <div className="space-y-2">
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

function MidGridCTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="col-span-1 md:col-span-2 bg-muted/50 rounded-3xl p-12 md:p-16 text-center my-8"
    >
      <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
        Like what you see?
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
        {"Let's connect."}
      </h2>
      <button
        onClick={scrollToContact}
        className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
        aria-label="Scroll to contact"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </motion.div>
  )
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects
    return projects.filter((project) => project.category.includes(activeFilter))
  }, [activeFilter])

  const firstHalf = filteredProjects.slice(0, 6)
  const secondHalf = filteredProjects.slice(6)

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Case Studies
        </motion.h2>

        <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {firstHalf.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}

            {filteredProjects.length > 6 && <MidGridCTA key="mid-cta" />}

            {secondHalf.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 6} />
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
                My journey into design has been shaped by my passion for creativity, problem-solving,
                and building things that matter. Whether sketching wireframes or writing backend logic,
                I&apos;ve consistently approached my work with a user-centered mindset, even before I
                knew what that meant.
              </p>
              <p>
                What excites me about product & visual design is the opportunity to create intuitive,
                human-centered solutions that empower people. I believe design is more than just making
                things look good — it&apos;s about crafting thoughtful experiences that truly serve the
                needs of the people who use them.
              </p>
              <p>
                My diverse background provides a unique perspective on creating impactful, meaningful
                solutions. I&apos;m eager to learn, grow, and collaborate with others to build products
                that connect with people in a real way.
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
            <div className="w-64 h-80 md:w-80 md:h-96 bg-muted rounded-2xl flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Photo</span>
            </div>
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
              Like what you see?
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-12">
              {"Let's Connect!"}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-xl font-medium hover:bg-muted transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <a
              href="mailto:rada.design@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              rada.design@gmail.com
            </a>
          </motion.div>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
