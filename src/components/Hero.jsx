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
      <section className="bg-[#181414] text-white flex flex-col items-center justify-center pt-24 sm:pt-32 px-4 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-zinc-300">
          The AI design tool for
          <br />
          <span className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-6 sm:py-8">
            <span className="text-lime-400">product</span>

            <span className="relative w-[160px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-[50px] sm:h-[70px] md:h-[90px] lg:h-[100px] ">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={`absolute top-0 left-0 transition-all duration-700 ease-in-out
                  ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}
                  text-lime-400 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[50px] sm:leading-[70px] md:leading-[90px] lg:leading-[100px]
                `}
                >
                  {word}
                </span>
              ))}
            </span>
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/50 max-w-xl sm:max-w-2xl">
          Build stunning AI product content with your team in real-time.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button className="w-full sm:w-auto bg-lime-400 text-zinc-900 font-bold opacity-80 px-6 py-3 rounded-lg hover:opacity-100 shadow-[0_0_20px_4px_rgba(163,230,53,0.3)] transition duration-300">
            Get Started – It’s Free
          </button>
          <button className="w-full sm:w-auto bg-white/10 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/20 transition">
            Book a Demo
          </button>
        </div>
      </section>

      <section className="bg-[#181414] w-full relative overflow-hidden">
        <img
          alt="Laptop Hero"
          src="https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/1714a744-46b5-4009-1b22-d39558452000/public"
          className="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[850px] object-cover mt-[-20px] sm:mt-[-30px]"
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[55vw] aspect-video">
  <video
    className="absolute top-[0%] left-[58%] -translate-x-1/2 w-[85%] sm:w-[80%] md:w-[75%] lg:w-full h-full rounded-lg shadow-lg"
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
