import type { ServiceFeaturePoint } from "../../data/serviceDetailsData";

interface ServiceDescriptionProps {
    featurePoints: ServiceFeaturePoint[];
    ctaBox: {
        problem: string;
        outcome: string;
        buttonText: string;
        buttonLink: string;
    };
}

export default function ServiceDescription({
    featurePoints,
    ctaBox,
}: ServiceDescriptionProps) {
    return (
        <section className="bg-tertinary py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px]">
                <div className="flex flex-col-reverse lg:flex-row lg:items-start gap-8 lg:gap-12 xl:gap-16">
                    {/* Left Side - Scrollable Feature Points */}
                    <div className="w-full lg:w-[60%] space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20 ">
                        {featurePoints.map((point, index) => (
                            <div
                                key={index}
                                className="flex gap-4 sm:gap-5 md:gap-6 items-start"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                                    <img
                                        src={point.icon}
                                        alt={point.title}
                                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-primary mb-2 sm:mb-3 leading-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-[#626262] text-sm sm:text-base md:text-lg lg:text-[20px] font-light leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Sticky CTA Box */}
                    <div className="w-full lg:w-[40%] lg:sticky lg:top-[96px] lg:self-start">
                        <div className="bg-secondary rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg">
                            {/* Problem Section */}
                            <div className="mb-6 sm:mb-7 md:mb-8">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-medium text-primary mb-2 sm:mb-1 leading-tight">
                                    The Problem
                                </h3>
                                <p className="text-[#626262] text-sm sm:text-base md:text-lg lg:text-[20px] font-light leading-relaxed">
                                    {ctaBox.problem}
                                </p>
                            </div>

                            {/* Outcome Section */}
                            <div className="mb-6 sm:mb-7 md:mb-8">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] font-medium text-primary mb-2 sm:mb-1 leading-tight">
                                    The Outcome
                                </h3>
                                <p className="text-[#626262] text-sm sm:text-base md:text-lg lg:text-[20px] font-light leading-relaxed">
                                    {ctaBox.outcome}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <a
                                href={ctaBox.buttonLink}
                                className="inline-flex items-center justify-center gap-2 sm:gap-3 w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-sm sm:text-base md:text-lg font-normal rounded-lg hover:bg-primary/90 transition-all duration-300 group"
                            >
                                {ctaBox.buttonText}
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}