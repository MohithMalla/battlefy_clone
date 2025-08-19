import { motion } from 'framer-motion'

const plans = [
  { name: "Starter", price: "Free", features: ["3 projects", "Basic exports", "Community support"], cta: "Get started" },
  { name: "Pro", price: "$15/mo", features: ["Unlimited projects", "4K exports", "Priority queue"], cta: "Go Pro", highlight: true },
  { name: "Team", price: "$29/mo", features: ["Team seats", "Brand library", "Priority support"], cta: "Start team" },
]

export default function Pricing(){
  return (
    <section id="pricing" className="section py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Pricing</h2>
        <p className="lead mt-3">Flexible plans for creators and teams. Replace with your own.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {plans.map((p, i)=>(
          <motion.div
            key={i}
            className={`card ${p.highlight ? 'ring-2 ring-brand-400' : ''}`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="flex items-baseline justify-between">
              <div className="font-semibold">{p.name}</div>
              <div className="text-2xl">{p.price}</div>
            </div>
            <ul className="mt-4 space-y-2 text-white/70">
              {p.features.map((f, idx)=>(<li key={idx}>• {f}</li>))}
            </ul>
            <a href="#cta" className="btn btn-primary mt-6 w-full text-center">{p.cta}</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
