import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const events = [
  {
    title: "Splatoon 3 North American League Sunday Scrim",
    date: "Ongoing",
    image:
      "https://cdn.battlefy.com/helix/images/campaigns/68b6ad091992a300172832bc/uploads/1756802353478.png",
  },
  {
    title: "Apex Legends Global Series",
    date: "$ 5,00,000 Prize Pool",
    image:
      "https://cdn.battlefy.com/helix/images/campaigns/5dfa5ef5afb48e6af74cc814/uploads/1739555886679.png",
  },
  {
    title: "Telus Arena Community",
    date: "Sept 15 - Oct 15",
    image:
      "https://cdn.battlefy.com/helix/images/campaigns/64c4730292a5060fb951de32/uploads/1716227966230.png",
  },
  {
    title: "Splatoon 3 North American League Show",
    date: "Ongoing",
    image:
      "https://cdn.battlefy.com/helix/images/campaigns/68b6ad011992a300172832ac/uploads/1756802349328.png",
  },
  {
    title: "Splatoon 3 North American League",
    date: "Ongoing",
    image:
      "https://cdn.battlefy.com/helix/images/campaigns/68b6a607194f580017e298e8/uploads/1756800527867.png",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6 mx-auto max-w-6xl">
      {/* Main Content Row */}
      <div className="flex flex-col lg:flex-row bg-black rounded-lg overflow-hidden shadow-lg">
        {/* Left: Image (66%) */}
        <div className="w-full lg:w-2/3">
          <img
            src={events[activeIndex].image}
            alt={events[activeIndex].title}
            className="w-full h-56 sm:h-72 md:h-96 lg:h-full object-cover"
          />
        </div>

        {/* Right: Content (33%) */}
        <div className="w-full lg:w-1/3 p-4 sm:p-6 bg-[#121212] flex flex-col justify-between">
          <div>
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3">
              {events[activeIndex].title}
            </h2>
            <div className="flex items-center text-gray-400 mb-6 text-sm sm:text-base">
              <Calendar size={18} className="mr-2" />
              {events[activeIndex].date}
            </div>
          </div>
          <button className="bg-[#F44336] hover:bg-[#d32f2f] text-white font-semibold py-2 px-4 rounded text-sm sm:text-base transition-all">
            Play
          </button>
        </div>
      </div>

      {/* Thumbnail Carousel */}
      <div className="flex justify-start lg:justify-center gap-3 sm:gap-4 mt-6 overflow-x-auto scrollbar-hide">
        {events.map((event, idx) => (
          <img
            key={idx}
            src={event.image}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => handleThumbnailClick(idx)}
            className={`w-24 sm:w-28 h-16 sm:h-20 object-cover rounded-md border-2 cursor-pointer transition-all duration-300 ${
              idx === activeIndex
                ? "border-red-500 grayscale-0"
                : "border-gray-600 grayscale"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
