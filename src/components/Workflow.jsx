import { motion } from 'framer-motion'

const steps = [
  { n: 1, t: "Upload", s: "Drop your product PNG or use background removal." },
  { n: 2, t: "Prompt", s: "Describe the mood & setting you want." },
  { n: 3, t: "Refine", s: "Drag layers, tweak shadows, adjust lighting." },
  { n: 4, t: "Export", s: "Download 4K PNGs & short loops." }
]

export default function Workflow(){
  return (
    <section id="workflow" className="section py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Workflow</h2>
        <p className="lead mt-3">A simple path from idea to shareable assets.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-4 gap-6">
        {steps.map((step, i)=>(
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="text-brand-300 text-sm">Step {step.n}</div>
            <div className="mt-1 font-semibold">{step.t}</div>
            <div className="text-white/70 mt-2">{step.s}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
