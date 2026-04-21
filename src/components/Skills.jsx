import { motion } from 'framer-motion'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const skillGroups = [
  {
    label: 'Languages',
    icon: '{ }',
    skills: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frameworks & Libraries',
    icon: '▲',
    skills: ['Streamlit', 'NLTK', 'Scikit-learn', 'REST APIs', 'OOP Principles'],
  },
  {
    label: 'Databases & Tools',
    icon: '⬡',
    skills: ['MySQL', 'MongoDB', 'AWS', 'Git', 'Android Studio', 'XAMPP'],
  },
]

function SkillGroup({ group, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 rounded-2xl border border-white/[0.07] bg-[#111111] hover:border-white/[0.12] transition-colors duration-300"
    >
      <div className="flex items-center gap-2.5 mb-5">
        <span className="mono text-sm text-gradient font-medium">{group.icon}</span>
        <h3 className="text-sm font-semibold text-[#EAEAEA] tracking-tight">{group.label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#EAEAEA]/80 hover:text-[#EAEAEA] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0e0e0e]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="03 / skills"
          title="Technical stack"
          sub="Tools I reach for when building. No padding — only what I've actually shipped with."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {skillGroups.map((g, i) => (
            <SkillGroup key={g.label} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
