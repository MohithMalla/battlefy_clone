import React from "react";
import { ArrowUpRight } from "lucide-react";

const DesignWithFlair = () => {
  return (
    <div className="relative w-full  mx-auto  overflow-hidden text-white bg-[#161616] p-12">
      <img
        src="https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/9d023dde-b2a7-4d27-d839-55cbb478f000/public"
        alt="Design Background"
        className="w-full h-[600px] object-cover rounded-2xl"
      />

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-1/8 right-1/18 bg-white/20 p-2 rounded-full">
        <a
          href="https://flair.ai/design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-lime-400 transition">
        <ArrowUpRight className="w-6 h-6" />
        </a>
      </div>
      <div className="absolute top-1/8 left-1/10">
        <h1 className="text-7xl font-light">Design with Flair</h1>
      </div>
      <div className="absolute bottom-1/8 right-1/18">
        <button className="px-6 py-2 rounded-full border border-white/60 bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default DesignWithFlair;
