import WhyUsBG from "../../assets/image/vertize-ai/WhyUsBG.webp";

export default function WhyOptimumVertize() {
  return (
    <section className="bg-[#FFFDF8] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#969696] text-[20px] sm:text-base uppercase tracking-wider mb-4">
            EVIDENCE, RESULTS AND REALISTIC BENCHMARKS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[500] text-[#23283C] mb-4 leading-tight">
            Why Vertize Ai
          </h2>
          <p className="text-[#626262] text-[20px] sm:text-lg md:text-[20px] max-w-4xl mx-auto leading-relaxed">
            Combining deep hospitality expertise with advanced AI engineering to
            deliver measurable operational and financial impact.
          </p>
        </div>

        {/* Case Study Card */}
        <div
          className="bg-[#FFFDF8] rounded-2xl lg:rounded-3xl overflow-hidden"
          style={{ border: "1px solid #23283C33" }}
        >
          <div className="flex flex-col lg:flex-row lg:max-h-[534px]">
            {/* Left Image */}
            <div className="w-full lg:w-[629px]">
              <img
                src={WhyUsBG}
                alt="Boutique hotel poolside terrace"
                className="w-full h-[250px] sm:h-[300px] lg:h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 p-6 lg:pt-8 lg:pr-28">
              <h3
                className="text-2xl sm:text-3xl lg:text-[32px] font-[400] text-[#23283C] mb-4"
                style={{ lineHeight: "1.1" }}
              >
                Boutique city hotel (80 rooms)
              </h3>

              <div className="mb-4">
                <h4
                  className="text-lg font-[500] text-[#000000] mb-0"
                  style={{ lineHeight: "1.2" }}
                >
                  Focus
                </h4>
                <p
                  className="text-[#000000] font-[300] text-[18px]"
                  style={{ lineHeight: "1.3" }}
                >
                  AI powered pre arrival and in stay upsell, plus automated FAQ
                  handling.
                </p>
              </div>

              <div className="mb-4">
                <h4
                  className="text-lg font-[500] text-[#000000] mb-0"
                  style={{ lineHeight: "1.2" }}
                >
                  Initial situation
                </h4>
                <p
                  className="text-[#000000] font-[300] text-[18px]"
                  style={{ lineHeight: "1.3" }}
                >
                  Manual upsell emails, high call volume to front office, no
                  central tracking.
                </p>
              </div>

              <div className="mb-5">
                <h4
                  className="text-lg font-[500] text-[#2A2E3C] mb-2"
                  style={{ lineHeight: "1.2" }}
                >
                  Typical result after 90 days
                </h4>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#000000]">•</span>
                    <span
                      className="text-[#000000] font-[300] text-[18px]"
                      style={{ lineHeight: "1.3" }}
                    >
                      +18 percent upsell revenue per occupied room
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#000000]">•</span>
                    <span
                      className="text-[#000000] font-[300] text-[18px]"
                      style={{ lineHeight: "1.3" }}
                    >
                      22 percent faster average response time to guest requests
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#000000]">•</span>
                    <span
                      className="text-[#000000] font-[300] text-[18px]"
                      style={{ lineHeight: "1.3" }}
                    >
                      around 35 percent of routine questions handled entirely by
                      Al agents.
                    </span>
                  </li>
                </ul>
              </div>

              {/* <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#23283C] text-[14px] font-[400] rounded-full border-2 border-[#23283C] hover:bg-[#23283C] hover:text-white transition-all">
                                VIEW CASE STUDY
                                <svg
                                    className="w-5 h-5"
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
                            </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
