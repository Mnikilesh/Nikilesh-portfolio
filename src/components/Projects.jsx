import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const projects = [
  {
    num: '01',
    tag: 'AI · NLP',
    tagColor: 'rgba(91,141,239,0.15)',
    tagText: '#7EB2FF',
    title: 'Smart-Resume',
    subtitle: 'AI Resume Analysis Platform',
    problem: 'Recruiters manually scan hundreds of resumes — a slow, inconsistent, bias-prone process that misses good candidates.',
    solution: 'Dual-login platform with NLP-based job-to-resume matching. Extracts 40+ technical skills, computes ATS scores, and auto-ranks candidates by fit.',
    impact: 'Cuts recruiter screening effort by ~60%. Includes mock interview module covering 5 tech domains.',
    stack: ['Python', 'Scikit-learn', 'NLTK', 'Streamlit', 'MySQL'],
    live: 'https://smart-resume-demo.streamlit.app',
    github: 'https://github.com/Mnikilesh/Smart-Resume-AI-analysis-and-Shortlisting',
    accent: 'rgba(91,141,239,0.08)',
    accentBorder: 'rgba(91,141,239,0.2)',
  },
  {
    num: '02',
    tag: 'Live · E-Commerce',
    tagColor: 'rgba(52,211,153,0.12)',
    tagText: '#34D399',
    title: 'Padmavathi Fruits',
    subtitle: 'Full-Stack E-Commerce · Family Business',
    problem: "A local family fruit business relied entirely on manual phone orders — zero visibility, constant errors, no scalability.",
    solution: 'Built and deployed a complete ordering platform: admin dashboard, dynamic pricing, cart, order management. Zero manual order-taking.',
    impact: '99%+ uptime over 3+ months in live production. Real daily orders running on this system right now.',
    stack: ['JavaScript', 'Python', 'MySQL', 'Bootstrap', 'XAMPP'],
    live: 'https://padmavathi-fruits.pages.dev/',
    github: 'https://github.com/Mnikilesh/padmavathi-fruits',
    accent: 'rgba(52,211,153,0.05)',
    accentBorder: 'rgba(52,211,153,0.2)',
  },
  {
    num: '03',
    tag: 'NLP · Analytics',
    tagColor: 'rgba(155,114,245,0.15)',
    tagText: '#BB94F8',
    title: 'Twitter',
    subtitle: 'Real-Time Sentiment Intelligence',
    problem: 'Brands and researchers have no scalable way to monitor audience sentiment across social media in real time.',
    solution: 'Live Twitter streaming pipeline with NLP classification (positive/negative/neutral), MongoDB storage, and interactive analytics dashboard.',
    impact: 'Designed for business intelligence teams, content creators, and academic researchers to extract actionable audience insights.',
    stack: ['Python', 'NLTK', 'MongoDB', 'Twitter API', 'HTML/CSS/JS'],
    live: null,
    github: 'https://github.com/Mnikilesh/Twitter-Data-Analysis-Toolh',
    accent: 'rgba(155,114,245,0.06)',
    accentBorder: 'rgba(155,114,245,0.2)',
  },
]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/[0.07] bg-[#111111] p-7 md:p-8 card-hover overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #111111 60%, ${project.accent})`,
      }}
    >
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.tagText}, transparent)` }}
      />

      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          {/* Number */}
          <span className="mono text-xs text-[#2a2a2a] font-medium select-none">{project.num}</span>
          {/* Tag */}
          <span
            className="mono text-xs px-2.5 py-1 rounded-full border"
            style={{
              background: project.tagColor,
              color: project.tagText,
              borderColor: project.accentBorder,
            }}
          >
            {project.tag}
          </span>
        </div>

      </div>

      {/* Title */}
      <div className="mb-1">
        <h3 className="text-xl font-bold tracking-tight text-[#EAEAEA] group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="mono text-xs text-[#636363] mt-0.5">{project.subtitle}</p>
      </div>

      {/* Case study breakdown */}
      <div className="mt-5 grid md:grid-cols-3 gap-4">
        {[
          { label: 'Problem', text: project.problem },
          { label: 'Solution', text: project.solution },
          { label: 'Impact', text: project.impact },
        ].map(({ label, text }) => (
          <div key={label} className="space-y-1.5">
            <p className="mono text-[10px] uppercase tracking-widest text-[#636363]">{label}</p>
            <p className="text-sm text-[#EAEAEA]/70 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* Stack */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#636363] hover:text-[#EAEAEA] transition-colors"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Buttons — always visible, bottom-left */}
      <div className="mt-6 flex items-center gap-2">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg font-medium text-white transition-opacity hover:opacity-85"
            style={{ background: 'linear-gradient(135deg, #5B8DEF, #9B72F5)' }}
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg border border-white/10 text-[#EAEAEA] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
        >
          <Github size={12} />
          Code
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="02 / projects"
          title="Things I've built"
          sub="Real systems with real users. Each built to solve an actual problem."
        />
        <div className="flex flex-col gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
