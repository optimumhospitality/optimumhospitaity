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
        <section className="bg-tertinary py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px]">
                <div className="flex flex-col-reverse lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                    {/* Left Side - Scrollable Feature Points */}
                    <div className="w-full lg:w-[60%] space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-10">
                        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-primary mb-0 leading-tight">
                                What We Do
                            </h3>
                        </div>
                        {featurePoints.map((point, index) => (
                            <div
                                key={index}
                                className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-start"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                                    <img
                                        src={point.icon}
                                        alt={point.title}
                                        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4 object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-0 sm:pt-1">
                                    <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-primary mb-1 sm:mb-2 lg:mb-3 leading-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-[#626262] text-sm sm:text-base lg:text-[16px] font-light leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Sticky CTA Box */}
                    <div className="w-full lg:w-[40%] lg:sticky lg:top-[96px] lg:self-start">
                        <div className="bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg">
                            {/* Problem Section */}
                            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-primary mb-1 sm:mb-2 lg:mb-1 leading-tight">
                                    The Problem
                                </h3>
                                <p className="text-[#626262] text-sm sm:text-base lg:text-[20px] font-light leading-relaxed">
                                    {ctaBox.problem}
                                </p>
                            </div>

                            {/* Outcome Section */}
                            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-primary mb-1 sm:mb-2 lg:mb-1 leading-tight">
                                    The Outcome
                                </h3>
                                <p className="text-[#626262] text-sm sm:text-base lg:text-[20px] font-light leading-relaxed">
                                    {ctaBox.outcome}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <a
                                href={ctaBox.buttonLink}
                                className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-primary text-white text-sm sm:text-base lg:text-lg font-normal rounded-lg hover:bg-primary/90 transition-all duration-300 group"
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