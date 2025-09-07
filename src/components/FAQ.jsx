// import { useEffect, useRef, useState } from "react";

// export default function ComparisonTable() {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   const features = [
//     {
//       label: "Custom model image generation",
//       sub: "Create images with models trained on your products",
//       flair: true,
//       pebbely: false,
//       botika: true,
//       claid: true,
//     },
//     {
//       label: "On model photography",
//       sub: "Generate images with products on models",
//       flair: true,
//       pebbely: false,
//       botika: true,
//       claid: true,
//     },
//     {
//       label: "Instant image generation",
//       sub: "Quickly generate product images without training",
//       flair: true,
//       pebbely: false,
//       botika: false,
//       claid: false,
//     },
//     {
//       label: "Background image regeneration",
//       sub: "Recreate and modify image backgrounds",
//       flair: true,
//       pebbely: true,
//       botika: false,
//       claid: true,
//     },
//     {
//       label: "Video generation",
//       sub: "Create product videos with AI",
//       flair: true,
//       pebbely: false,
//       botika: false,
//       claid: true,
//     },
//     {
//       label: "Ad generation",
//       sub: "Generate ad creatives with AI",
//       flair: true,
//       pebbely: false,
//       botika: false,
//       claid: false,
//     },
//     {
//       label: "AI editing tools",
//       sub: "Edit and refine images with AI assistance",
//       flair: true,
//       pebbely: false,
//       botika: false,
//       claid: false,
//     },
//     {
//       label: "Brand asset management",
//       sub: "Manage your brand assets in one place",
//       flair: true,
//       pebbely: false,
//       botika: false,
//       claid: false,
//     },
//     {
//       label: "Human builder",
//       sub: "Create and customize human models",
//       flair: true,
//       pebbely: false,
//       botika: false,
//       claid: false,
//     },
//     {
//       label: "Custom background and assets",
//       sub: "Add your own backgrounds and props",
//       flair: true,
//       pebbely: false,
//       botika: false,
//       claid: false,
//     },
//     {
//       label: "Team collaboration",
//       sub: "Work together with your team in real-time",
//       flair: true,
//       pebbely: false,
//       botika: false,
//       claid: false,
//     },
//     {
//       label: "API access",
//       sub: "Access via API for integration",
//       flair: true,
//       pebbely: false,
//       botika: false,
//       claid: false,
//     },
//   ];

//   const FlairTick = () => (
//     <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-lime-900 flex items-center justify-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         stroke="lime"
//         strokeWidth="3"
//         className="w-3 h-3 sm:w-4 sm:h-4"
//         viewBox="0 0 24 24"
//       >
//         <path d="M5 13l4 4L19 7" />
//       </svg>
//     </div>
//   );

//   const WhiteTick = () => (
//     <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-zinc-800 flex items-center justify-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         stroke="white"
//         strokeWidth="3"
//         className="w-3 h-3 sm:w-4 sm:h-4"
//         viewBox="0 0 24 24"
//       >
//         <path d="M5 13l4 4L19 7" />
//       </svg>
//     </div>
//   );

//   const WhiteCross = () => (
//     <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-zinc-800 flex items-center justify-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         stroke="grey"
//         strokeWidth="3"
//         className="w-3 h-3 sm:w-4 sm:h-4"
//         viewBox="0 0 24 24"
//       >
//         <path d="M6 6l12 12M6 18L18 6" />
//       </svg>
//     </div>
//   );

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisible(true);
//             observer.disconnect();
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-[#181414] text-white py-12 sm:py-20 px-3 sm:px-6 md:px-12 lg:px-24">
//       <div
//         ref={sectionRef}
//         className="border border-white/20 rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 bg-[#161616]"
//       >
//         <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-center mb-3 sm:mb-4">
//           How does Flair compare?
//         </h2>
//         <p className="text-white/50 text-center mb-6 sm:mb-12 text-base sm:text-xl md:text-2xl font-light">
//           See how Flair stacks up against other AI product photography platforms
//         </p>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse text-sm sm:text-base md:text-lg">
//             <thead>
//               <tr className="text-left text-gray-300 border-b border-gray-700">
//                 <th className="py-2 sm:py-3 px-2 sm:px-4">Features</th>
//                 <th className="py-2 sm:py-3 ">Flair</th>
//                 <th className="py-2 sm:py-3 ">Pebbelly</th>
//                 <th className="py-2 sm:py-3 ">Botika</th>
//                 <th className="py-2 sm:py-3 ">Claid</th>
//               </tr>
//             </thead>
//             <tbody>
//               {features.map((feature, idx) => (
//                 <tr
//                   key={idx}
//                   className={`border-b border-white/5 transition-all duration-700
//                     ${
//                       visible
//                         ? "opacity-100 translate-x-0"
//                         : "opacity-0 -translate-x-10"
//                     }
//                   `}
//                   style={{
//                     transitionDelay: visible ? `${idx * 120}ms` : "0ms",
//                   }}
//                 >
//                   <td className="py-4 sm:py-5 px-2 sm:px-4 w-[50%] sm:w-[40%]">
//                     <div className="flex flex-col">
//                       <span className="text-white font-medium text-sm sm:text-base md:text-lg">
//                         {feature.label}
//                       </span>
//                       <span className="text-gray-500 text-xs sm:text-sm md:text-base">
//                         {feature.sub}
//                       </span>
//                     </div>
//                   </td>

//                   <td className="py-4 text-center w-[15%]">
//                     {feature.flair ? <FlairTick /> : <WhiteCross />}
//                   </td>
//                   <td className="py-4 text-center w-[15%]">
//                     {feature.pebbely ? <WhiteTick /> : <WhiteCross />}
//                   </td>
//                   <td className="py-4 text-center w-[15%]">
//                     {feature.botika ? <WhiteTick /> : <WhiteCross />}
//                   </td>
//                   <td className="py-4 text-center w-[15%]">
//                     {feature.claid ? <WhiteTick /> : <WhiteCross />}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
