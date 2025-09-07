// src/App.jsx
import { useState } from "react";
import {
  Home,
  Shield,
  Network,
  HelpCircle,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import Features from "./Features.jsx";
import CTA from "./CTA.jsx";
import Footer from "./Footer.jsx";
import FAQ from "./FAQ.jsx";

// Dummy events
const events = [
  {
    image:
      "https://cdn.battlefy.com/helix/images/campaigns/64c4730292a5060fb951de32/uploads/1716227966230.png",
    title: "Splatoon 3 North American League Show",
    date: "Ongoing",
  },
  {
    image:
      "https://cdn.battlefy.com/helix/images/campaigns/64c4730292a5060fb951de32/uploads/1716227966230.png",
    title: "Another Event Title",
    date: "Starts Oct 10",
  },
  {
    image:
      "https://cdn.battlefy.com/helix/images/campaigns/64c4730292a5060fb951de32/uploads/1716227966230.png",
    title: "Third Event",
    date: "Sept 15 - Oct 15",
  },
  {
    image:
      "https://cdn.battlefy.com/helix/images/campaigns/64c4730292a5060fb951de32/uploads/1716227966230.png",
    title: "Fourth Event",
    date: "Coming Soon",
  },
];

// Reusable Event Card
const EventCard = ({ event }) => (
  <div className="min-w-[300px] bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg flex flex-col">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4 flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-lg font-bold">{event.title}</h3>
        <p className="text-gray-400 mt-1">{event.date}</p>
      </div>
      <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-700 transition-colors">
        Play
      </button>
    </div>
  </div>
);

export default function App() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="flex h-screen bg-[#1C1C1C] text-white">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0c0f16] flex flex-col justify-between transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div>
          {/* Logo */}
          <div className="p-6 flex items-center gap-2">
            <img
              src="https://a.storyblok.com/f/150896/2160x2160/d1066e1597/bfy_logo_3d.png/m/700x0/filters:format(png)"
              alt="Battlefy Icon"
              className="w-6 h-6"
            />
            <span className="text-2xl font-bold">
              <span className="text-white">BATTLE</span>
              <span className="text-red-500">FY</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="px-4 space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 hover:text-red-400"
            >
              <Home size={18} /> Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 hover:text-red-400"
            >
              <Shield size={18} /> Armoury
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 hover:text-red-400"
            >
              <Network size={18} /> Organize Tournaments
            </a>

            <hr className="my-2 border-gray-700" />

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 hover:text-red-400"
            >
              <img
                src="https://cdn.battlefy.com/algs/algs-season-5/default-team-logo.png"
                alt="Apex"
                className="w-5 h-5"
              />
              Apex Legends Global Series
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 hover:text-red-400"
            >
              <img
                src="https://cdn.battlefy.com/helix/images/campaigns/68b6a607194f580017e298e8/uploads/1756800578490.png"
                alt="Splatoon"
                className="w-5 h-5"
              />
              Splatoon 3 North American League
            </a>

            <hr className="my-2 border-gray-700" />

            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 hover:text-red-400"
            >
              <HelpCircle size={18} /> Help Center
            </a>
          </nav>
        </div>

        {/* Bottom Options */}
        <div className="p-4 space-y-3">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-gray-800 text-white rounded p-2 text-sm"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

          <button className="w-full flex items-center justify-center gap-2 bg-gray-800 rounded py-2 hover:bg-gray-700">
            <LogIn size={16} /> Login
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-gray-800 rounded py-2 hover:bg-gray-700">
            <UserPlus size={16} /> Sign Up
          </button>
        </div>
      </aside>

      {/* Overlay for small screens */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar with menu button */}
        <header className="lg:hidden flex items-center bg-[#1C1C1C] p-4">
          <button
            onClick={() => setOpen(true)}
            className="text-white p-2 rounded-md bg-gray-800"
          >
            <Menu size={20} />
          </button>
          <span className="ml-4 font-bold text-xl">BATTLEFY</span>
        </header>

        <main className="flex-1 overflow-y-auto lg:ml-64">
          {/* Hero Section */}
          <section
            className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6"
            style={{
              backgroundImage:
                "url('https://a.storyblok.com/f/150896/2160x2160/d1066e1597/bfy_logo_3d.png/m/700x0/filters:format(png)')",
              backgroundSize: "cover",
              backgroundPosition: "start",
            }}
          >
            <div className="absolute inset-0 from-gray-900/80 to-gray-900/80"></div>

            <div className="relative text-start">
              <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                CREATE, COMPETE,
                <br />
                CONQUER
              </h1>
              <p className="mt-6 text-gray-300 max-w-2xl mx-auto font-bold">
                WITH OVER A MILLION HOURS OF GAMEPLAY EVERY WEEK, BATTLEFY IS
                THE ESPORTS PLATFORM OF CHOICE FOR THE WORLD’S TOP PUBLISHERS,
                GAMING COMMUNITIES, CREATORS, BRANDS AND YOU.
              </p>
            </div>
          </section>

          {/* Select Your Game Section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 w-full text-start text-white font-medium sticky top-0 z-50">
  <div className="bg-purple-600 py-5 px-5 border border-gray-700">
    Select your game
  </div>

  <div className="hidden md:block bg-[#1c222B] py-5 px-5 text-[#808080] border border-gray-700">
    Global
  </div>

  <div className="hidden md:block bg-[#1c222B] py-5 px-5 text-[#808080] border border-gray-700">
    Any Platform
  </div>
</div> */}
          <FAQ />


          {/* Game Selector Box */}
          <div className="bg-[#1a1a1a] border-4 border-red-500 rounded-lg mt-8 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center mx-4 md:mx-24">
            <div className="col-span-1 text-left">
              <h2 className="text-2xl font-semibold mb-2">
                What are you playing?
              </h2>
              <p className="text-gray-400 mb-4">
                Select a game to start finding tournaments.
              </p>
              <button className="bg-red-500 px-6 py-2 rounded font-medium hover:bg-red-600">
                Select a game 
              </button>
            </div>

            <div className="col-span-2 flex justify-center">
              <img
                src="select_your_game_img.png"
                alt="Game Illustration"
                className="w-full max-h-64 object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Tournament Cards Slider */}
          <Features />
          <CTA />
          <Footer />
        </main>
      </div>
    </div>
  );
}
