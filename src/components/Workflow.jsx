import { useState } from "react";

export default function FashionSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#161616] text-white px-6 py-12 gap-10">
      
      {/* Left Text Section */}
      <div className="max-w-md">
        <p className="text-green-400 uppercase text-sm font-semibold mb-2">
          New Feature
        </p>
        <h1 className="text-3xl font-bold mb-4">Fashion photoshoots</h1>
        <p className="text-gray-400 mb-6">
          Fit your clothing and jewelry onto AI generated models with patterns
          and logos preserved. Create high-quality on-model imagery at scale.
        </p>
        <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-500 transition">
          Try AI Fashion for Free
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative group flex flex-col items-center gap-6">
        {/* Small floating top image */}
        <img
          src="https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/b933f8d2-53a0-4a60-09cf-6f0cb12c5100/public"
          alt="Clothing Item"
          className="w-40 rounded-lg shadow-lg"
        />

        {/* Main lady image with smooth hover crossfade */}
        <div
          className="relative w-84 min-h-screen overflow-hidden rounded-xl shadow-lg"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Base image */}
          <img
            src="/lady-before-hover.png" // replace with your base image path
            alt="Model"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${hovered ? "opacity-0" : "opacity-100"}`}
          />

          {/* Hover image */}
          <img
            src="/lady-hover-img.png" // replace with your hover image path
            alt="Model Hover"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${hovered ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </div>
  );
}
