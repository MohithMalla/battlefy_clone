export default function FeatureCards() {
  const features = [
    {
      title: "AI Ad Generation",
      description:
        "Generate high-quality ads for your products with brand consistency alongside a library of templates.",
      image:
        "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/c1836708-3e1f-4bb2-5630-27e6e8a0f200/public",
    },
    {
      title: "AI Human Models",
      description:
        "Build custom AI human models based on features and scale them across all your brand assets. Choose from a range of features including hair color, body type, and more.",
      image:
        "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/9410e990-db97-4c23-654d-6eff12c49000/public",
    },
  ];

  return (
    <div className="min-h-screen bg-[#161616] flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 px-6 sm:px-10 md:px-16 lg:px-12 py-12">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="group flex flex-col justify-between border border-white/10 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 w-full sm:w-[90%] md:w-[500px] lg:w-[560px] bg-transparent hover:border-white/20 transition duration-300"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 text-white/80 group-hover:text-white transition">
              {feature.title}
            </h2>
            <p className="text-white/30 sm:text-lg md:text-xl lg:text-[22px] mb-6 group-hover:text-white/60 transition duration-300 font-light leading-relaxed">
              {feature.description}
            </p>
          </div>
          <img
            src={feature.image}
            alt={feature.title}
            className={`rounded-lg shadow-md border border-white/10 mt-6 sm:mt-8 md:mt-10 ${
              idx === 1 ? "lg:mt-16" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
}
