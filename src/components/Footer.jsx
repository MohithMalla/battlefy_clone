import { useState, useEffect } from "react";

export default function Footer() {
  const partners = [
    { name: "NHL 23", logo: "https://a.storyblok.com/f/150896/342x180/cf44c944af/nhl.png" },
    { name: "The Show 22", logo: "https://a.storyblok.com/f/150896/342x180/07b7d3805a/logo-mlb.png" },
    { name: "ZOTAC Cup", logo: "https://a.storyblok.com/f/150896/342x180/cb3d546b42/logo-zotac.png" },
    { name: "Apex Legends", logo: "https://a.storyblok.com/f/150896/342x180/188c57d647/algs.png" },
    { name: "Valorant College", logo: "https://a.storyblok.com/f/150896/342x180/3c0d6d448e/cval.png" },
    { name: "Premier League", logo: "https://a.storyblok.com/f/150896/342x180/007ffebceb/epl.png" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#73252C] via-[#321E21] to-[#1c1c1c] text-white">
      {/* Partner Logos Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase">
          Some other major players we’ve worked with
        </h2>
        <p className="text-gray-300 mt-2 text-sm">(Just to name a few)</p>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-10">
          {partners.map((partner, idx) => (
            <img
              key={idx}
              src={partner.logo}
              alt={partner.name}
              className="h-10 sm:h-12 md:h-14 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="bg-[#252329] py-10 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-12 md:gap-16">
          {/* Left Column */}
          <div className="md:w-1/3">
            <h3 className="text-white font-semibold mb-3 border-b border-gray-700 w-max">
              Learn More
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">The Team</li>
              <li className="hover:text-white cursor-pointer">Advisors & Investors</li>
              <li className="hover:text-white cursor-pointer">Jobs</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3">
            <h3 className="text-white font-semibold mb-3 border-b border-gray-700 w-max">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Business Inquiries</li>
              <li className="hover:text-white cursor-pointer">Organizer and Player Support</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Media Kit</li>
            </ul>
          </div>
        </div>

        {/* Bottom Links & Socials */}
        <div className="max-w-7xl mx-auto mt-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-500 text-center">
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Do Not Sell My Personal Information</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.png" alt="Twitter" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.png" alt="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/icons/youtube.png" alt="YouTube" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1c1c1c] text-gray-300 text-center py-4 text-sm sm:text-base">
        <p>©2025 Battlefy, Inc.</p>
      </div>
    </footer>
  );
}
