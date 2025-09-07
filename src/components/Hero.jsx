import Footer from './Footer'
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  HelpCircle,
  Search,
} from "lucide-react";

export default function Hero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-950 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-6 md:justify-start">
          <div className="text-2xl font-bold text-red-500">BATTLEFY</div>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav className="space-y-4 px-6">
          <a href="#" className="flex items-center gap-2 hover:text-red-400">
            <Home size={18} /> Home
          </a>
          <a href="#" className="hover:text-red-400">Armoury</a>
          <a href="#" className="hover:text-red-400">Organize Tournaments</a>
          <a href="#" className="hover:text-red-400">Apex Legends Global Series</a>
          <a href="#" className="hover:text-red-400">Splatoon 3 North American League</a>
          <a href="#" className="flex items-center gap-2 hover:text-red-400">
            <HelpCircle size={18} /> Help Center
          </a>
        </nav>

        <div className="p-6 space-y-3 mt-8">
          <select className="w-full bg-gray-800 text-white rounded p-2 text-sm">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
          <button className="w-full bg-red-600 rounded py-2 hover:bg-red-500">
            Login
          </button>
          <button className="w-full border border-red-500 rounded py-2 hover:bg-red-500">
            Sign Up
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-6 py-4 bg-gray-950">
          <div className="text-xl font-bold text-red-500">BATTLEFY</div>
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Hero */}
        <section className="relative h-[50vh] sm:h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-gray-800 to-gray-900">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            CREATE, COMPETE,{" "}
            <span className="text-red-500">CONQUER</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg">
            WITH OVER A MILLION HOURS OF GAMEPLAY EVERY WEEK, BATTLEFY IS THE ESPORTS
            PLATFORM OF CHOICE FOR THE WORLD’S TOP PUBLISHERS, GAMING COMMUNITIES,
            CREATORS, BRANDS AND YOU.
          </p>
        </section>

        {/* Game selector */}
        <section className="bg-gray-800 py-4 px-4">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start max-w-4xl mx-auto">
            <button className="bg-purple-600 px-4 py-2 rounded">Select your game</button>
            <button className="bg-gray-700 px-4 py-2 rounded">Done</button>
            <button className="bg-gray-700 px-4 py-2 rounded">Global</button>
            <button className="bg-gray-700 px-4 py-2 rounded">Any Platform</button>
          </div>
        </section>

        {/* Search */}
        <section className="bg-gray-900 px-6 py-6">
          <div className="max-w-3xl mx-auto flex items-center bg-gray-800 rounded px-4 py-2">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for games"
              className="ml-2 bg-transparent flex-1 outline-none text-white"
            />
          </div>
        </section>

        {/* Game cards */}
        <section className="px-6 pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Splatoon", img: "https://upload.wikimedia.org/wikipedia/en/0/04/Splatoon_3_cover_art.jpg" },
              { name: "League of Legends", img: "https://upload.wikimedia.org/wikipedia/en/7/77/League_of_Legends_logo.png" },
              { name: "Valorant", img: "https://upload.wikimedia.org/wikipedia/en/f/fd/Valorant_cover_art.jpg" },
              { name: "Apex Legends", img: "https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg" },
              { name: "Overwatch 2", img: "https://upload.wikimedia.org/wikipedia/en/5/5f/Overwatch_2_cover_art.jpg" },
              { name: "Hearthstone", img: "https://upload.wikimedia.org/wikipedia/en/1/1d/Hearthstone_2016_logo.png" },
            ].map((game, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <img
                  src={game.img}
                  alt={game.name}
                  className="w-full h-28 sm:h-32 object-cover"
                />
                <div className="p-2 text-center text-sm">{game.name}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
