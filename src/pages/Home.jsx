import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import Features from '../components/Features'
import Showcase from '../components/Showcase'
import Workflow from '../components/Workflow'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(64,136,255,0.25),transparent)] text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <Showcase />
        <Workflow />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
