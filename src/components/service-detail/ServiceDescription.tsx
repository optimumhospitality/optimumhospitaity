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
    <section className="bg-tertinary py-10 min-[500px]:py-8 sm:py-10 min-[750px]:py-14 md:py-18 lg:py-25">
      <div className="max-w-[1440px] mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        <div className="flex flex-col-reverse min-[500px]:flex-row min-[500px]:items-start gap-5 min-[500px]:gap-4 sm:gap-6 min-[750px]:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Side - Scrollable Feature Points */}
          <div className="w-full min-[500px]:w-[55%] sm:w-[58%] min-[750px]:w-[60%] lg:w-[60%] space-y-4 min-[500px]:space-y-3 sm:space-y-4 min-[750px]:space-y-6 md:space-y-8 lg:space-y-10">
            <div className="flex flex-col gap-3 min-[500px]:gap-2 sm:gap-3 min-[750px]:gap-4 md:gap-5 lg:gap-8">
              <h3 className="text-base min-[500px]:text-[11px] sm:text-[13px] min-[750px]:text-base md:text-xl lg:text-[28px] font-medium text-primary mb-0 leading-tight">
                What We Do
              </h3>
            </div>
            {featurePoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-2 min-[500px]:gap-2 sm:gap-3 min-[750px]:gap-4 md:gap-5 lg:gap-6 items-start"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-8 h-8 min-[500px]:w-6 min-[500px]:h-6 sm:w-7 sm:h-7 min-[750px]:w-8 min-[750px]:h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                  <img
                    src={point.icon}
                    alt={point.title}
                    className="w-4 h-4 min-[500px]:w-3 min-[500px]:h-3 sm:w-3.5 sm:h-3.5 min-[750px]:w-4 min-[750px]:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pt-0 min-[500px]:pt-0 sm:pt-0.5 min-[750px]:pt-1">
                  <h3 className="text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[14px] md:text-[16px] lg:text-[20px] font-medium text-primary mb-0.5 min-[500px]:mb-0.5 sm:mb-1 min-[750px]:mb-1.5 md:mb-2 lg:mb-3 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-[#626262] text-[11px] min-[500px]:text-[8px] sm:text-[9px] min-[750px]:text-[11px] md:text-[13px] lg:text-[16px] font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Sticky CTA Box */}
          <div className="w-full min-[500px]:w-[45%] sm:w-[42%] min-[750px]:w-[40%] lg:w-[40%] min-[500px]:sticky min-[500px]:top-[80px] min-[500px]:self-start">
            <div className="bg-secondary rounded-lg min-[500px]:rounded-lg sm:rounded-xl min-[750px]:rounded-xl md:rounded-2xl p-4 min-[500px]:p-3 sm:p-4 min-[750px]:p-5 md:p-6 lg:p-8 shadow-lg">
              {/* Problem Section */}
              <div className="mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-8">
                <h3 className="text-base min-[500px]:text-[11px] sm:text-[13px] min-[750px]:text-base md:text-xl lg:text-[28px] font-medium text-primary mb-1 min-[500px]:mb-0.5 sm:mb-1 min-[750px]:mb-1 leading-tight">
                  The Problem
                </h3>
                <p className="text-[#626262] text-[11px] min-[500px]:text-[8px] sm:text-[9px] min-[750px]:text-[12px] md:text-[14px] lg:text-[20px] font-light leading-relaxed">
                  {ctaBox.problem}
                </p>
              </div>

              {/* Outcome Section */}
              <div className="mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-8">
                <h3 className="text-base min-[500px]:text-[11px] sm:text-[13px] min-[750px]:text-base md:text-xl lg:text-[28px] font-medium text-primary mb-1 min-[500px]:mb-0.5 sm:mb-1 min-[750px]:mb-1 leading-tight">
                  The Outcome
                </h3>
                <p className="text-[#626262] text-[11px] min-[500px]:text-[8px] sm:text-[9px] min-[750px]:text-[12px] md:text-[14px] lg:text-[20px] font-light leading-relaxed">
                  {ctaBox.outcome}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={ctaBox.buttonLink}
                className="inline-flex items-center justify-center gap-1.5 min-[500px]:gap-1 sm:gap-1.5 min-[750px]:gap-2 w-full px-3 min-[500px]:px-2 sm:px-3 min-[750px]:px-4 md:px-6 lg:px-8 py-2 min-[500px]:py-1.5 sm:py-2 min-[750px]:py-2.5 md:py-3 lg:py-4 bg-primary text-white text-[11px] min-[500px]:text-[8px] sm:text-[10px] min-[750px]:text-[12px] md:text-sm lg:text-lg font-normal rounded-md min-[500px]:rounded-md sm:rounded-lg hover:bg-primary/90 transition-all duration-300 group"
              >
                {ctaBox.buttonText}
                <svg
                  className="w-3 h-3 min-[500px]:w-2.5 min-[500px]:h-2.5 sm:w-3 sm:h-3 min-[750px]:w-3.5 min-[750px]:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
