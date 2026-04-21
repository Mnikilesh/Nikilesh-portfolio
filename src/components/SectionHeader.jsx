import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function SectionHeader({ index, title, sub }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <p className="mono text-xs text-[#636363] mb-3 tracking-widest uppercase">{index}</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">{title}</h2>
      {sub && <p className="text-[#636363] text-base max-w-md">{sub}</p>}
    </motion.div>
  )
}
