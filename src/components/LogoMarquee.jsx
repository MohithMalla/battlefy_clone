export default function LogoMarquee() {
  const companies = [
    {
      name: "Amazon",
      logo: "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/2c9452f3-7115-4139-2af2-d1d2cbfd4c00/256",
      link: "https://www.amazon.com",
    },
    {
      name: "BCG",
      logo: "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/c2c41b3b-24cf-43a4-97bf-c8681168a800/256",
      link: "https://www.bcg.com",
    },
    {
      name: "SHEIN",
      logo: "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/c2c41b3b-24cf-43a4-97bf-c8681168a800/256",
      link: "https://www.shein.com",
    },
    {
      name: "BONOBOS",
      logo: "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/8c59db1a-106b-48f0-feb9-2a5f3c6e0700/256",
      link: "https://bonobos.com",
    },
    {
      name: "Samsonite",
      logo: "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/e47bcad5-ea54-4fdf-8f5f-ea3429100e00/256",
      link: "https://www.samsonite.com",
    },
    {
      name: "JLO Beauty",
      logo: "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0454ad64-3cc1-455e-90ab-1fc757b11100/256",
      link: "https://jlobeauty.com",
    },
    {
      name: "Swim Outlet",
      logo: "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/c2c41b3b-24cf-43a4-97bf-c8681168a800/256",
      link: "https://www.swimoutlet.com",
    },
  ];

  return (
    <section className="bg-[#161616] text-white flex flex-col items-center justify-center overflow-hidden p-5 ">
      <div className="text-center text-white text-[28px] font-light mt-[100px]">
        Used by brands of all sizes and industries
      </div>

      <div className="mt-20 overflow-hidden relative w-full mb-[100px]">
        <div className="flex gap-8 w-max animate-marquee">
          {[...companies, ...companies,...companies].map((company, i) => (
            <a
              key={i}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-40 w-40 flex items-center p-5 justify-center bg-[#161616] rounded-lg border-[0.5px] border-white/10
 transition"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-20 max-w-28 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
