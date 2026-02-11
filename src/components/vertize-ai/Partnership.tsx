import { useNavigate } from "react-router-dom";
import optimumLogo from "../../assets/image/home-page/website-logo/optimum-logo.webp";
import VertizeLogo from "../../assets/image/vertize-ai/Vertize-Logo.png";

export default function Partnership() {
  const navigate=useNavigate();
  return (
    <section
      className="py-16 md:py-20 lg:py-24"
      style={{
        background: "#2C3348",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
        <div className="text-center">
          {/* Section Header */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-[500] text-[#F7EFE3] mb-4 sm:mb-6">
            Why Optimum x Vertize?
          </h2>

          <p className="text-[#C8C8C8] text-sm sm:text-base md:text-lg lg:text-[20px] max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 leading-tight px-2 sm:px-0">
            Combining deep hospitality expertise with advanced AI engineering to
            deliver measurable operational and financial impact.
          </p>

          {/* Logos and Descriptions with Divider */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            {/* Logos with × Symbol */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-12">
              <img
                src={optimumLogo}
                alt="Optimum Hospitality"
                className="h-8 sm:h-12 md:h-16 lg:h-20 w-auto max-w-[40%] object-contain"
              />

              <span className="text-2xl sm:text-4xl lg:text-6xl font-light text-white flex-shrink-0">
                ×
              </span>

              <img
                src={VertizeLogo}
                alt="Vertize"
                className="h-8 sm:h-12 md:h-16 lg:h-20 w-auto max-w-[40%] object-contain"
              />
            </div>

            {/* Descriptions with Vertical Line */}
            <div className="flex flex-col lg:flex-row items-start justify-center gap-6 sm:gap-8 lg:gap-0 max-w-5xl mx-auto relative px-2 sm:px-4 lg:px-0">
              {/* Vertical Divider - positioned to align with × above */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/50 transform -translate-x-1/2" />

              {/* Optimum Description */}
              <div className="flex-1 lg:pr-12">
                <p className="text-[#F9F2E4B2] text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-right">
                  Deep regional expertise, owner-focused advisory, operational
                  leadership, and proven performance across luxury and
                  upper-scale assets.
                </p>
              </div>

              {/* Vertize Description */}
              <div className="flex-1 lg:pl-12">
                <p className="text-[#F9F2E4B2] text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
                  Hospitality-specific AI engineering, automation expertise, and
                  practical technology deployment designed for real-world
                  operations.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4 lg:px-0">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl italic leading-relaxed mb-6 sm:mb-8 lg:text-[24px] font-[400]">
              "Together, Optimum and VERTIZE AI deliver intelligent,
              performance-driven hospitality without compromising service
              quality or operational control."
            </p>
          </div>

          {/* CTA Button */}
          <button onClick={() => navigate("/contact#contact-form")} className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-[#E8DCC8] text-[#2C3348] text-sm sm:text-base font-semibold rounded-lg hover:bg-[#DCC9AF] transition-all">
            <span className="whitespace-nowrap">
              Request an AI Operational Review
            </span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
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
        </div>
      </div>
    </section>
  );
}
