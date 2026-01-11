import { useState } from "react";
import { MoveUp, Lightbulb, DollarSign } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import roomImage1 from "../../assets/image/home-page/hotel-caseStudies/roomImage1.webp";
import roomImage2 from "../../assets/image/home-page/hotel-caseStudies/roomImage2.webp";
import gopImageHomeSection from "../../assets/image/home-page/hotel-caseStudies/gopImageHomeSection.webp";

interface CaseStudy {
  id: number;
  hotelName: string;
  title: string;
  achievement: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    hotelName: "Radisson Mui Ne",
    title: "30% Cost Reduction by Implementing CRM",
    achievement: "Achieved within 18 months",
    image: roomImage1,
  },
  {
    id: 2,
    hotelName: "Taj Hotel",
    title: "+32% GOP Growth by cutting edge technology",
    achievement: "Achieved within 6 months",
    image: roomImage2,
  },
];

const benefits: { icon: LucideIcon; text: string }[] = [
  { icon: MoveUp, text: "Increase revenue and cost efficiency" },
  { icon: Lightbulb, text: "Simplify hotel operations and management" },
  { icon: DollarSign, text: "Strengthen asset value and owner confidence" },
];

export default function HotelCaseStudy() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section>
      {/* Case Studies Section - White Background */}
      <div className="bg-white pt-[50px] pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs sm:text-[20px] font-light tracking-[0.2em] text-gray-500 uppercase mb-3">
              WHERE STRATEGY DELIVERS REAL VALUE
            </p>
            <h2 className="text-[48px] font-medium text-primary">
              Selected Hotel Case Studies
            </h2>
            <p className="mt-4 text-[#626262] text-sm sm:text-base md:text-[20px] max-w-3xl mx-auto">
              Real examples of how we have improved hotel operations, financial
              performance, and guest experience across Southeast Asia.
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="relative group rounded-2xl overflow-hidden cursor-pointer h-[350px] sm:h-[400px] lg:h-[450px]"
                onMouseEnter={() => setHoveredCard(study.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <img
                  src={study.image}
                  alt={study.hotelName}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === study.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-white/80 text-sm mb-2">
                    {study.hotelName}
                  </p>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {study.achievement}
                  </p>

                  {/* View Case Study Button */}
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors">
                    VIEW CASE STUDY
                    <svg
                      className="w-4 h-4"
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
            ))}
          </div>
        </div>
      </div>

      {/* How We Increase GOP Section - Dark Background */}
      <div className="bg-primary relative overflow-hidden">
        {/* Content Container - max 1440px centered */}
        <div className="max-w-[1440px] mx-auto relative px-4 sm:px-6 md:pl-8 md:pr-0 lg:pl-12 xl:pl-[100px]">
          <div className="flex flex-col lg:flex-row lg:h-[485px]">
            {/* Left Content - Centered in flex-col mode */}
            <div className="w-full lg:flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-8 lg:py-0 lg:pr-8">
              <h2 className="text-2xl sm:text-[32px] md:text-4xl font-normal text-white mb-6 lg:mb-8">
                How We Increase GOP and Asset Value
              </h2>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
                      <span className="text-sm sm:text-base lg:text-lg">
                        {benefit.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Request Consultation Button */}
              <button className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-secondary text-primary text-sm sm:text-base lg:text-[20px] font-normal rounded-[8px] hover:bg-secondary/90 transition-colors w-fit">
                REQUEST CONSULTATION
                <svg
                  className="w-4 h-4"
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

            {/* Right Image - Squarish with rounded corners on mobile, full height on desktop */}
            <div className="w-full lg:w-[518px] flex-shrink-0 p-4 sm:p-5 md:p-0">
              <div className="aspect-square lg:aspect-auto w-[280px] sm:w-[320px] md:w-[380px] lg:w-full lg:h-full mx-auto lg:mx-0 rounded-xl lg:rounded-none overflow-hidden">
                <img
                  src={gopImageHomeSection}
                  alt="Business consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pt-25"></div> */}
    </section>
  );
}
