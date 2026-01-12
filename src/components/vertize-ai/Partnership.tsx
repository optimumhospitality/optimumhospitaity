import optimumLogo from "../../assets/image/home-page/website-logo/optimum-logo.webp";
import VertizeLogo from "../../assets/image/vertize-ai/Vertize-Logo.png";

export default function Partnership() {
    return (
        <section
            className="py-16 md:py-20 lg:py-24"
            style={{
                background: '#2C3348'
            }}
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
                <div className="text-center">
                    {/* Section Header */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[500] text-[#F7EFE3] mb-6">
                        Why Optimum x Vertize?
                    </h2>

                    <p className="text-[#C8C8C8] text-base sm:text-lg md:text-[20px] max-w-3xl mx-auto mb-16 lg: leading-tight">
                        Combining deep hospitality expertise with advanced AI engineering to deliver measurable operational and financial impact.
                    </p>

                    {/* Logos and Descriptions with Divider */}
                    <div className="mb-16">
                        {/* Logos with × Symbol */}
                        <div className="flex items-center justify-center gap-8 lg:gap-12 mb-12 ml-22">
                            <img
                                src={optimumLogo}
                                alt="Optimum Hospitality"
                                className="h-12 sm:h-16 md:h-20 w-auto"
                            />

                            <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-white">×</span>

                            <img
                                src={VertizeLogo}
                                alt="Vertize"
                                className="h-12 sm:h-16 md:h-20 w-auto"
                            />
                        </div>

                        {/* Descriptions with Vertical Line */}
                        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0 max-w-5xl mx-auto relative">
                            {/* Vertical Divider - positioned to align with × above */}
                            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/50 transform -translate-x-1/2" />

                            {/* Optimum Description */}
                            <div className="flex-1 lg:pr-12">
                                <p className="text-[#F9F2E4B2] text-base sm:text-lg leading-relaxed text-center lg:text-right">
                                    Deep regional expertise, owner-focused advisory, operational leadership, and proven performance across luxury and upper-scale assets.
                                </p>
                            </div>

                            {/* Vertize Description */}
                            <div className="flex-1 lg:pl-12">
                                <p className="text-[#F9F2E4B2] text-base sm:text-lg leading-relaxed text-center lg:text-left">
                                    Hospitality-specific AI engineering, automation expertise, and practical technology deployment designed for real-world operations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Quote */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <p className="text-white text-lg sm:text-xl md:text-2xl italic leading-relaxed mb-8 lg:text-[24px] font-[400]">
                            "Together, Optimum and VERTIZE AI deliver intelligent, performance-driven hospitality without compromising service quality or operational control."
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8DCC8] text-[#2C3348] text-base font-semibold rounded-lg hover:bg-[#DCC9AF] transition-all">
                        Request an AI Operational Review
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
                    </button>
                </div>
            </div>
        </section>
    );
}