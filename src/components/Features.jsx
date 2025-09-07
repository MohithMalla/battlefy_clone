// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";

// const data = {
//   "On Model Photography": [
//     { type: "image", src: "https://i.pinimg.com/originals/a6/96/cb/a696cb3bfef2868ae0ca7588462260a4.jpg"}, 
//     { type: "image", src: "https://www.photographer-fashion.co.uk/wp-content/uploads/sites/5/2020/11/1DSC_6428bweb.jpg" },
//     { type: "image", src:   "https://i.pinimg.com/originals/06/06/b5/0606b51c97493debe8a1a680ca4db11f.jpg" },
//     { type: "image", src:   "https://i.pinimg.com/originals/53/0e/ed/530eed19013230acf57e64573336fa10.jpg" },
//     { type: "image", src: "https://i.pinimg.com/originals/a6/96/cb/a696cb3bfef2868ae0ca7588462260a4.jpg"}, 
//     { type: "image", src: "https://www.photographer-fashion.co.uk/wp-content/uploads/sites/5/2020/11/1DSC_6428bweb.jpg" },
//     { type: "image", src:   "https://i.pinimg.com/originals/06/06/b5/0606b51c97493debe8a1a680ca4db11f.jpg" },
//     { type: "image", src:   "https://i.pinimg.com/originals/53/0e/ed/530eed19013230acf57e64573336fa10.jpg" },

//   ],
//   "Product Videos": [
//     { type: "video", src: "/video1.mp4" },
//     { type: "video", src: "/video2.mp4" },
//     { type: "video", src: "/video3.mp4" },
//   ],
//   "Marketing & Ads": [
//     { type: "image", src: "/img5.jpg" },
//     { type: "image", src: "/img6.jpg" },
//     { type: "image", src: "/img7.jpg" },
//   ],
//   "Product Photography": [
//     { type: "image", src: "/img8.jpg" },
//     { type: "image", src: "/img9.jpg" },
//     { type: "image", src: "/img10.jpg" },
//   ],
// };

// const tabs = Object.keys(data);

// export default function FlairSlider() {
//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     data[activeTab].forEach(item => {
//       if (item.type === "video") {
//         const video = document.createElement("video");
//         video.src = item.src;
//         video.preload = "auto";
//         video.muted = true;
//       }
//     });
//     if (scrollRef.current) scrollRef.current.scrollLeft = 0;
//   }, [activeTab]);

//   const scroll = (offset) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="bg-[#181414] text-white py-20">
//   <div className="max-w-7xl mx-auto px-6">
//   <div className="text-left flex flex-col items-center">
//     <div className="w-full max-w-4xl">
//       <h4 className="text-lime-400 text-sm md:text-base font-light mb-4">
//         Create content that matches your brand rules and aesthetic.
//       </h4>
//       <h1 className="text-4xl md:text-7xl font-light leading-tight">
//         Generate on brand content for all your business needs.
//       </h1>
//       <div className="flex flex-wrap gap-3 mt-8">
//         {tabs.map(tab => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-full border transition 
//               ${activeTab === tab 
//                 ? "bg-lime-400 text-black border-lime-400" 
//                 : "border-white/20 hover:border-white/40 text-white/80"
//               }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>


//   <div className="relative w-full mt-12">
//     <button 
//       onClick={() => scroll(-400)}
//       className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full z-10 shadow-lg"
//     >
//       <ChevronLeft className="w-6 h-6" />
//     </button>
//     <div 
//   ref={scrollRef}
//   className="flex gap-6 overflow-hidden scroll-smooth no-scrollbar px-6"
// >
//   {data[activeTab].map((item, i) => (
//     <motion.div
//       key={i}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: i * 0.1 }}
//       className="min-w-[50%] md:min-w-[30%] lg:min-w-[20%] rounded-2xl overflow-hidden flex-shrink-0 shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10 bg-white/5 hover:border-white/60  "
//     >
//       {item.type === "video" ? (
//         <video 
//           src={item.src} 
//           autoPlay 
//           loop 
//           muted 
//           playsInline 
//           className="w-80 h-100 object-cover"
//         />
//       ) : (
//         <img 
//           src={item.src} 
//           alt={`slide-${i}`} 
//           className="w-80 h-100 object-cover " 
//         />
//       )}
//     </motion.div>
//   ))}
// </div>
//     <button 
//       onClick={() => scroll(400)}
//       className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full z-10 shadow-lg"
//     >
//       <ChevronRight className="w-6 h-6" />
//     </button>
//   </div>
// </section>
//   );
// }