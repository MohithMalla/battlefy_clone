import { useState } from 'react'

const faqs = [
  { q: "Can I replace media with my own?", a: "Yes—swap files in /public/media and update texts in components." },
  { q: "Is this production-ready?", a: "It's a polished starter. Add auth, editor, and API before shipping." },
  { q: "What about SEO?", a: "Vite + React supports meta tags; add OpenGraph images and sitemap." },
  { q: "Animations?", a: "All sections use Framer Motion + CSS transitions for smooth effects." },
]

export default function FAQ(){
  const [open, setOpen] = useState(0)
  return (
    <section className="section py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">FAQ</h2>
        <p className="lead mt-3">Common questions about this template.</p>
      </div>
      <div className="mt-10 max-w-3xl mx-auto">
        {faqs.map((f, i)=>(
          <div key={i} className="border-b border-white/10 py-4">
            <button className="w-full text-left flex justify-between items-center" onClick={()=>setOpen(open===i? -1 : i)}>
              <span className="font-medium">{f.q}</span>
              <span className="text-white/60">{open===i? '−' : '+'}</span>
            </button>
            {open===i && <p className="text-white/70 mt-2">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
