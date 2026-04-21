import { motion } from 'framer-motion'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const experiences = [
  {
    period: 'Jun 2024 – Aug 2024',
    role: 'Full Stack Developer Intern',
    company: 'AI Variant',
    link: 'https://drive.google.com/file/d/1ncrqNISKZSiBk4bJ6LZA7WHrdlRs6tfd/view?usp=drive_link',
    points: [
      'Shipped 3 production-ready full-stack features using Python, MySQL, and JavaScript in agile sprints.',
      'Identified and resolved a critical UI rendering bug within the first 2 weeks — before it reached end users.',
    ],
  },
  {
    period: 'Jan 2024 – Mar 2024',
    role: 'Android Developer Intern',
    company: 'AICTE × Google',
    link: 'https://tinyurl.com/y5hxann7',
    points: [
      'Built 2 Android applications in Java under the national AICTE-Google Developer programme.',
      'Improved app load time by 25% through layout hierarchy optimisation and Material Design standards.',
    ],
  },
]

const certifications = [
  'Computer Graphics & Animations — Infosys',
  'Mobile App Development — Infosys',
  'Fundamentals of C++ — IBM',
  'Data Analytics — IBM',
  'DevOps on AWS — AWS Academy',
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="04 / experience"
          title="Work history"
          sub="Internships where I shipped real features, not sandboxed tasks."
        />

        {/* Timeline */}
        <div className="space-y-0 mb-16">
          {experiences.map((exp, i) => {
            const [expRef, expInView] = useInView()
            return (
              <motion.div
                key={exp.company}
                ref={expRef}
                initial={{ opacity: 0, x: -16 }}
                animate={expInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-7 border-b border-white/[0.06] first:border-t"
              >
                <div>
                  <p className="mono text-xs text-[#636363] leading-relaxed">{exp.period}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#EAEAEA] tracking-tight">{exp.role}</h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-xs text-gradient mb-3 mt-0.5 hover:opacity-75 transition-opacity inline-flex items-center gap-1">
                    {exp.company} ↗
                  </a>
                  <ul className="space-y-1.5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-sm text-[#636363] leading-relaxed flex gap-2">
                        <span className="text-[#2a2a2a] mt-1.5 flex-shrink-0">—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="mono text-xs text-[#636363] uppercase tracking-widest mb-4">Certifications</p>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="mono text-xs px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[#636363]"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}