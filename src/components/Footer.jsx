import { useState, useEffect } from "react";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";


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
      <div className="bg-gradient-to-b from-[#73252C] via-[#321E21] to-[#1c1c1c] text-white">
  {/* Partner Logos (Optional, keep or remove as needed) */}

  {/* Main Footer Section */}
  <div className="bg-[#252329] py-10 text-sm text-gray-400">
    <div className="max-w-7xl mx-auto px-4">
      {/* Links Section */}
      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* Learn More */}
        <div className="md:w-1/4">
          <h3 className="text-white font-semibold mb-3 border-b border-gray-700 w-max">
            Learn More
          </h3>
          <ul className="space-y-1">
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Services</li>
            <li className="hover:text-white">The Team</li>
            <li className="hover:text-white">Advisors & Investors</li>
            <li className="hover:text-white">Jobs</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold mb-3 border-b border-gray-700 w-max">
            Contact Us
          </h3>
          <ul className="space-y-1">
            <li className="hover:text-white">Business Inquiries</li>
            <li className="hover:text-white">Organizer and Player Support</li>
            <li className="hover:text-white">Help Center</li>
            <li className="hover:text-white">Media Kit</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Learn More Footer Row */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Do Not Sell My Personal Information</span>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-4">
          <a href="https://x.com/battlefy"><FaTwitter className="h-5 w-5" /></a>
          <a href="https://www.facebook.com/Battlefy/"><FaFacebook className="h-5 w-5" /></a>
          <a href="https://www.youtube.com/battlefy"><FaYoutube className="h-5 w-5" /></a>
        </div>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="bg-[#1c1c1c] text-gray-300 text-center text-md py-4">
    <p>©2025 Battlefy, Inc.</p>
  </div>
</div>

      

      {/* Copyright */}
      
    </footer>
  );
}
