import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-black/50 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="section flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        
        {/* Left - Logo */}
        <a href="https://flair.ai/">
          <div className="h-20 w-auto flex items-center">
            <img
              src="/flair-logo.png"
              alt="logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </a>

        {/* Center - Links (hidden on small/medium, shown from md+) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-12 font-bold text-zinc-400 text-sm lg:text-base">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#enterprise" className="hover:text-white">Enterprise</a>
          <a href="#gallery" className="hover:text-white">Community Gallery</a>
          <a href="#resources" className="hover:text-white">Resources</a>
        </div>

        {/* Right - CTA (always visible) */}
        <div
          className={`flex items-center gap-2 rounded-lg transition px-3 py-2 sm:px-4 sm:py-2 
            ${scrolled ? "bg-lime-400" : "border border-white/50"}
          `}
        >
          <a
            href="#cta"
            className={`rounded-lg font-semibold transition text-sm lg:text-base
              ${scrolled ? "text-[#181414] hover:text-zinc-300" : "text-white"}
            `}
          >
            Try Flair AI for free
          </a>
        </div>
      </nav>
    </header>
  );
}
