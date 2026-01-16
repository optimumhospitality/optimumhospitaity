import { ArrowUpRight } from "lucide-react";
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
        <div
          id="service-description-container"
          className="flex flex-col-reverse min-[500px]:flex-row min-[500px]:items-start gap-5 min-[500px]:gap-4 sm:gap-6 min-[750px]:gap-8 md:gap-10 lg:gap-12 xl:gap-16"
        >
          {/* Left Side - Scrollable Feature Points */}
          <div className="w-full min-[500px]:w-[55%] sm:w-[58%] min-[750px]:w-[60%] lg:w-[60%] space-y-4 min-[500px]:space-y-3 sm:space-y-4 min-[750px]:space-y-6 md:space-y-8 lg:space-y-10">
            <div className="flex flex-col gap-3 min-[500px]:gap-2 sm:gap-3 min-[750px]:gap-4 md:gap-5 lg:gap-8">
              <h3 className="text-[20px] lg:text-[32px] font-medium text-primary mb-0 leading-tight">
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
                  <h3 className="text-[14px] sm:text-[18px] lg:text-[20px] font-medium text-primary mb-0.5 min-[500px]:mb-0.5 sm:mb-1 min-[750px]:mb-1.5 md:mb-2 lg:mb-3 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-[#626262] text-[12px] sm:text-[16px] lg:text-[18px] font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Sticky CTA Box */}
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#service-description-container"
            data-scroll-offset="-80"
            className="w-full min-[500px]:w-[45%] sm:w-[42%] min-[750px]:w-[40%] lg:w-[40%]"
          >
            <div className="bg-secondary rounded-lg min-[500px]:rounded-lg sm:rounded-xl min-[750px]:rounded-xl md:rounded-2xl p-4 min-[500px]:p-3 sm:p-4 min-[750px]:p-5 md:p-6 lg:p-8 shadow-lg">
              {/* Problem Section */}
              <div className="mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-8">
                <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-medium text-primary mb-1 min-[500px]:mb-0.5 sm:mb-1 min-[750px]:mb-1 leading-tight">
                  The Problem
                </h3>
                <p className="text-[#626262] text-[14px] sm:text-[18px] lg:text-[20px] font-light leading-relaxed">
                  {ctaBox.problem}
                </p>
              </div>

              {/* Outcome Section */}
              <div className="mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-8">
                <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-medium text-primary mb-1 min-[500px]:mb-0.5 sm:mb-1 min-[750px]:mb-1 leading-tight">
                  The Outcome
                </h3>
                <p className="text-[#626262] text-[14px] sm:text-[18px]  lg:text-[20px] font-light leading-relaxed">
                  {ctaBox.outcome}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={ctaBox.buttonLink}
                className="h-[44px] whitespace-nowrap px-6 lg:px-8 gap-2 lg:h-[56px] font-normal rounded-md lg:rounded-lg inline-flex items-center justify-center bg-primary text-white text-[14px] lg:text-[20px] hover:bg-primary/90 transition-all duration-300 group"
              >
                {ctaBox.buttonText}
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
