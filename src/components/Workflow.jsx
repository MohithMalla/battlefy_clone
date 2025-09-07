// import { useState } from "react";

// export default function FashionSection() {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className=" bg-[#181414] py-12">
// <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#181414] text-white px-6 py-12 gap-18 border border-white/10 rounded-xl mx-2">
//             <div className="max-w-md lead-tight lg:text-left mx-5">
//         <p className="text-lime-400 uppercase text-sm font-light mb-2">
//           New Feature
//         </p>
//         <h1 className="text-3xl font-light mb-4">Fashion photoshoots</h1>
//         <p className="text-white/40 mb-6 font-light text-2xl">
//           Fit your clothing and jewelry onto AI generated models with patterns
//           and logos preserved. Create high-quality on-model imagery at scale.
//         </p>
//         <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-500 transition">
//           Try AI Fashion for Free
//         </button>
//       </div>
//       <div 
//         className="relative flex items-center justify-center mx-5 shadow-lg"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <div className="relative w-[320px] sm:w-[400px] lg:w-[420px] h-[550px] sm:h-[650px] lg:h-[720px] overflow-hidden rounded-xl shadow-lg">
//           <img
//             src="/lady-before-hover.png"
//             alt="Model"
//             className={`absolute inset-0 w-full h-full object-cover shadow-lg transition-opacity duration-700 ease-in-out ${hovered ? "opacity-0" : "opacity-100"}`}
//           />
//           <img
//             src="/lady-hover-img.png" 
//             alt="Model Hover"
//             className={`absolute inset-0 w-full h-full object-cover shadow-lg transition-opacity duration-700 ease-in-out ${hovered ? "opacity-100" : "opacity-0"}`}
//           />
//         </div>
//         <img
//           src="https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/b933f8d2-53a0-4a60-09cf-6f0cb12c5100/public"
//           alt="Clothing Item"
//           className="hidden lg:block absolute -left-34 top-1/2 -translate-y-1/2 w-64 rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//     </div>
//   );
// }
