import { useNavigate } from "react-router-dom";
import HeroBG from "../../assets/image/vertize-ai/HeroBG.webp";


export default function HeroSection() {
  const navigate=useNavigate();
  return (
    <section className="relative min-h-screen bg-[#0a1628] flex items-start sm:items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={HeroBG} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl" />
            </div> */}

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] w-full pt-24 pb-8 sm:py-20">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-12">
          {/* Hero Content */}
          <div className="max-w-5xl">
            <h1
              className="text-[28px] sm:text-[50px] md:text-[60px] font-normal text-white text-center mb-4 sm:mb-6"
              style={{ lineHeight: "110%" }}
            >
              AI-Enabled
              <span className="italic" style={{ color: "#7692FF" }}>
                {" "}
                Hospitality,
              </span>
              <br />
              Engineered for Performance
            </h1>
            <p
              className="text-[#D9D9D9] text-[14px] sm:text-[18px] md:text-[20px] font-light text-center mb-6 sm:mb-10 max-w-6xl mx-auto"
              style={{ lineHeight: "130%", letterSpacing: "-0.02em" }}
            >
              In partnership with Vertize, Optimum Hospitality integrates
              advanced AI solutions into hotel operations to elevate guest
              experience, streamline workflows, and improve financial
              performance across South East Asia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-0 sm:mb-60">
              <button onClick={() => navigate("/contact#contact-form")} className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-white text-[#1E2D42] text-sm sm:text-base font-normal rounded-lg hover:bg-gray-100 transition-all shadow-lg">
                REQUEST AI CONSULTATION
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-transparent text-white text-sm sm:text-base font-normal rounded-lg border-2 border-white/30 hover:border-white/50 transition-all">
                VIEW AI USE CASES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
