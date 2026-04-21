import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react'
import { useInView } from './useInView'
import SectionHeader from './SectionHeader'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nikileshmamidala@gmail.com',
    href: 'mailto:nikileshmamidala@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'mamidala-nikilesh',
    href: 'https://www.linkedin.com/in/mamidala-nikilesh-a18a7026b/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Mnikilesh',
    href: 'https://github.com/Mnikilesh',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens mailto with form content
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:nikileshmamidala@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0e0e0e]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="05 / contact"
          title="Let's build something"
          sub="Open to full-time SDE roles and interesting problems. I reply fast."
        />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
          {/* Left: links */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-[#111111] hover:border-white/[0.14] hover:bg-white/[0.03] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/[0.07] bg-white/[0.03]">
                  <Icon size={15} className="text-[#636363] group-hover:text-[#EAEAEA] transition-colors" />
                </div>
                <div>
                  <p className="mono text-[10px] text-[#636363] uppercase tracking-widest">{label}</p>
                  <p className="text-sm text-[#EAEAEA] mt-0.5">{value}</p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="ml-auto text-[#2a2a2a] group-hover:text-[#636363] transition-colors"
                />
              </a>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl border border-white/[0.07] bg-[#111111]"
          >
            {sent ? (
              <div className="h-full flex items-center justify-center text-center py-8">
                <div>
                  <div className="text-2xl mb-2">✓</div>
                  <p className="text-[#EAEAEA] font-medium">Opening your mail client...</p>
                  <p className="text-sm text-[#636363] mt-1">Or email me directly at nikileshmamidala@gmail.com</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mono text-[10px] text-[#636363] uppercase tracking-widest block mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-[#EAEAEA] placeholder-[#2a2a2a] focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mono text-[10px] text-[#636363] uppercase tracking-widest block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-[#EAEAEA] placeholder-[#2a2a2a] focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="mono text-[10px] text-[#636363] uppercase tracking-widest block mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What are you building?"
                    className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-sm text-[#EAEAEA] placeholder-[#2a2a2a] focus:outline-none focus:border-white/20 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #5B8DEF, #9B72F5)' }}
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
