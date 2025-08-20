
import { motion } from "framer-motion";
import { useState } from "react";

export default function DragDropShowcase() {
  const text =
    "Stage scenes digitally with drag & drop props. Bring it to life with AI.";
  const words = text.split(" ");
  const [hovered, setHovered] = useState(false);        

  return (
    <>
          <section className="w-full min-h-screen bg-[#161616] text-white flex items-center justify-center px-6 sm:px-8 py-16 sm:py-20  ">
        <div className="max-w-7xl w-full flex flex-col items-center gap-16 sm:gap-24 relative  ">
          <div className="w-full flex justify-center sm:justify-start " >
            <div className="relative w-60 sm:w-84 h-48 sm:h-64 flex items-center justify-center">
              <div className="absolute inset-0 border border-dashed border-lime-400">
                {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
                  (pos, i) => (
                    <span
                      key={i}
                      className={`absolute ${pos} w-2.5 h-2.5 border-1 border-lime-400 rounded-full bg-[#181414]`}
                      style={{ transform: "translate(-50%, -50%)" }}
                    />
                  )
                )}
              </div>
              <motion.img
                src="/image-removebg-preview (1).png"   
                alt="Green flower icon"
                initial={{ opacity: 0, x: -60, rotate: -10 }}
                animate={{ opacity: 1, x: 0, rotate: -10 }}
                transition={{ duration: 0.9, delay: 2 }}
                className="object-contain w-40 sm:w-56 h-40 sm:h-56 absolute"
              />
            </div>
          </div>
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-center sm:text-start max-w-3xl mt-[-100px]   sm:ml-0"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2"
                variants={{
                  hidden: { opacity: 0.3, color: "#666" },
                  visible: { opacity: 1, color: "#fff" },
                }}
                transition={{ duration: 0.6 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <div className="w-full flex justify-center sm:justify-end mt-[-100px]  sm:ml-0 ">
            <div
              className="relative w-64 sm:w-80 md:w-90 h-64 sm:h-80 md:h-90 flex items-center justify-center"   
              onMouseEnter={() => setHovered(true)}     
              onMouseLeave={() => setHovered(false)}    
            >
              {hovered && (
                <div className="absolute inset-0 border border-dashed border-lime-400">
                  {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
                    (pos, i) => (
                      <span
                        key={i}
                        className={`absolute ${pos} w-2.5 h-2.5 border-1 border-lime-400 rounded-full bg-[#181414]`}
                        style={{ transform: "translate(-50%, -50%)" }}
                      />
                    )
                  )}
                </div>
              )}
              <motion.img
                src={hovered ? "/before-hover-img-removebg-preview.png" : "before-hover-img.png"}
                alt="Product scene"
                initial={{ opacity: 0, x: 100 }}        
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: hovered ? 0.95 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="object-cover w-full h-full rounded-xl transition-all duration-500 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#181414] text-white py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-12 px-4 sm:px-8">   
          <video
            src="https://video.flair.ai/flair-templates.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:w-[750px] lg:h-[600px] object-cover rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.4)]"  
          />
          <div className="max-w-lg px-4 sm:px-6 md:px-12 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              Mix & match <br /> product with <br /> tem
plates
            </h2>

            <p className="text-white/40 text-lg sm:text-xl md:text-2xl font-light mt-6 md:mt-12">
              Test design concepts that connect customers with one click.
              Build templates at scale.
            </p>

            <a
              href="#"
              className="inline-flex items-center text-lime-400 text-xl sm:text-2xl hover:underline font-light mt-6 md:mt-12"
            >
              Start with templates
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}