import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(91,141,239,0.07) 0%, rgba(155,114,245,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-8">
          <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] mono text-xs text-[#636363]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            available for full-time roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.92] tracking-[-0.04em] mb-6"
        >
          Mamidala
          <br />
          <span className="text-gradient">Nikilesh.</span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          {...fadeUp(0.3)}
          className="mono text-[#636363] text-base mb-4 tracking-tight"
        >
          // Full Stack Developer &amp; AI Systems Builder
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-[#EAEAEA]/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light"
        >
          I build systems that <span className="text-[#EAEAEA] font-medium">ship to real users</span> — from AI-powered hiring tools to e-commerce running a live family business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-16">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #5B8DEF, #9B72F5)' }}
          >
            View Projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume-2025.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-sm text-[#EAEAEA] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
          >
            <Download size={15} />
            Resume
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap gap-8 pt-8 border-t border-white/[0.06]"
        >
          {[
            { num: '4+', label: 'Projects Shipped' },
            { num: '2', label: 'Internships' },
            { num: '99%', label: 'Uptime (Live App)' },
            { num: '3+', label: 'Months in Production' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold tracking-tight text-gradient">{num}</div>
              <div className="text-xs text-[#636363] mt-0.5 mono">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.7)} className="flex gap-4 mt-8">
          {[
            { Icon: Github, href: 'https://github.com/Mnikilesh', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/mamidala-nikilesh-a18a7026b/', label: 'LinkedIn' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#636363] hover:text-[#EAEAEA] transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
