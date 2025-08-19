import { useState, useEffect } from "react";

export default function Hero() {
  const words = [
    "advertising",
    "photoshoots",
    "videos",
    "content",
    "marketing",
    "photos",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO HEADING */}
      <section className="bg-[#181414] text-white flex flex-col items-center justify-center pt-32 px-4 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light leading-tight text-zinc-300">
          The AI design tool for
          <br />
          <span className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-8">
            {/* Fixed word */}
            <span className="text-lime-400">product</span>

            {/* Rotating words */}
            <span className="relative w-[180px] sm:w-[240px] md:w-[300px] h-[60px] sm:h-[80px] md:h-[96px]">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={`absolute top-0 left-0 transition-all duration-700 ease-in-out
                  ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}
                  text-lime-400 text-5xl sm:text-6xl lg:text-8xl font-light leading-[60px] sm:leading-[80px] lg:leading-[96px]
                `}
                >
                  {word}
                </span>
              ))}
            </span>
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/50 max-w-2xl">
          Build stunning AI product content with your team in real-time.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-lime-400 text-zinc-900 font-bold opacity-80 px-6 py-3 rounded-md hover:opacity-100 shadow-[0_0_20px_4px_rgba(163,230,53,0.3)] transition duration-300">
            Get Started – It’s Free
          </button>
          <button className="bg-white/10 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/20 transition">
            Book a Demo
          </button>
        </div>
      </section>

      {/* HERO IMAGE + VIDEO */}
      <section className="bg-[#181414] w-full relative overflow-hidden">
        {/* Background Image */}
        <img
          alt="Laptop Hero"
          src="https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/1714a744-46b5-4009-1b22-d39558452000/public"
          className="w-full h-auto md:h-[500px] lg:h-[850px] object-cover mt-[-30px]"
        />

        {/* Overlayed Video */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] aspect-video">
            <video
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://video.flair.ai/flair-hero.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
