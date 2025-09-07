import { useState } from "react";
import { ChevronDown } from "lucide-react";

const games = [
  { name: "Splatoon 3", img: "https://cdn.battlefy.com/helix/images/games/splatoon-3/uploads/box-1660154709642.jpeg" },
  { name: "League of Legends", img: "https://cdn.battlefy.com/helix/images/games/league-of-legends/uploads/box-1591426446904.jpg" },
  { name: "VALORANT", img: "https://cdn.battlefy.com/helix/images/games/valorant/box.jpg" },
  { name: "Mobile Legends", img: "https://cdn.battlefy.com/helix/images/games/mobile-legends-bang-bang/uploads/box-1591431736943.jpg" },
  { name: "Apex Legends", img: "https://d33jl3tgfli0fm.cloudfront.net/helix/images/games/apex-legends/box.jpg" },
  { name: "Marvel Rivals", img: "https://cdn.battlefy.com/helix/images/games/marvel-rivals/uploads/box-1733473615403.png" },
  { name: "Overwatch", img: "https://cdn.battlefy.com/helix/images/games/overwatch/uploads/box-1668629049485.png" },
  { name: "Hearthstone", img: "https://cdn.battlefy.com/helix/images/games/shadowverse-worlds-beyond/uploads/box-1753641810948.jpg" },
  { name: "Rocket League", img: "https://cdn.battlefy.com/helix/images/games/hearthstone/uploads/box-1591425890103.jpg" },
  { name: "FC 25", img: "https://d33jl3tgfli0fm.cloudfront.net/helix/images/games/rocket-league/box.jpg" },
  { name: "Free Fire", img: "https://cdn.battlefy.com/helix/images/games/ea-sports-fc-25/uploads/box-1727113205315.png" },
  { name: "Clash Royale", img: "https://cdn.battlefy.com/helix/images/games/super-smash-bros-ultimate/uploads/box-1591862622326.jpg" },
];

export default function GameSelector() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative bg-[#121921]">
      {/* Top Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full text-start text-white font-medium sticky top-0 z-50">
        <button
          onClick={() => setShowPopup(true)}
          className="flex items-center justify-between bg-purple-600 hover:bg-purple-700 py-5 px-5 border border-gray-700 w-full"
        >
          Select your game
          <ChevronDown className="ml-2 w-4 h-4" />
        </button>

        <div className="hidden md:block bg-[#1c222B] py-5 px-5 text-[#808080] border border-gray-700">
          Global
        </div>
        <div className="hidden md:block bg-[#1c222B] py-5 px-5 text-[#808080] border border-gray-700">
          Any Platform
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="absolute top-full left-0 w-full bg-[#121921] z-50 shadow-lg border-t border-gray-700 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 text-white">
            <span className="font-medium">Select your game</span>
            <button
              onClick={() => setShowPopup(false)}
              className="font-bold hover:text-gray-200"
            >
              Done
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search for games..."
              className="w-full bg-[#1c1c1c] text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Games Horizontal Scroll */}
          <div className="p-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 text-center cursor-pointer hover:scale-105 transition-transform"
                >
                  <img
                    src={game.img}
                    alt={game.name}
                    className="w-20 h-20 mx-auto rounded object-cover"
                  />
                  <p className="text-sm text-gray-300 mt-2">{game.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
