export default function EsportsSection() {
  return (
    <section className="bg-gradient-to-b from-[#1c1c1c] via-[#321E21] to-[#73252C] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight uppercase tracking-tight">
          Looking to unlock the full potential
          <br className="hidden sm:block" />
          of your esports events?
        </h1>

        {/* Highlighted Sub-heading */}
        <h2 className="mt-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
          <span className="inline-block bg-black text-white px-3 py-1">
            That's where we come in
          </span>
        </h2>

        {/* Supporting paragraph */}
        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-3xl">
          We create engaging experiences that gamers want to be a part of, while tracking your
          program’s impact and success with those you want to connect with.
        </p>

        {/* CTA Button */}
        <button className="mt-8 px-6 py-3 bg-gray-300 text-black font-semibold rounded-full hover:bg-white transition">
          LET'S WORK TOGETHER
        </button>

        {/* Featured Programs */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold uppercase mb-10 text-center">
            Featured Programs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Apex Legends Global Series",
                img: "https://a.storyblok.com/f/150896/1782x1002/7965b76610/algs-image.png",
              },
              {
                title: "Madden Championship Series",
                img: "https://a.storyblok.com/f/150896/970x544/eade5c9304/madden_battlefy_asset.png",
              },
              {
                title: "Connected Club Cup",
                img: "https://a.storyblok.com/f/150896/956x568/d943f273e1/featured-ee.png",
              },
              {
                title: "College League of Legends",
                img: "https://a.storyblok.com/f/150896/956x568/03906d94ce/featured-clol.png",
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="bg-[#2d0a0a] rounded-xl overflow-hidden relative group"
              >
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-full h-78 object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                <button className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-800 text-white px-4 py-1 rounded-full text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Visit Portal →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
