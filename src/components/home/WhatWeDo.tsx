import { User, Hotel, ChartNoAxesCombined } from "lucide-react";

const principles = [
  {
    icon: User,
    title: "Independent and Owner-First",
    description:
      "Boutique management from Ho Chi Minh City and Jakarta. Every decision prioritizes your returns with transparent, low-fee contracts.",
  },
  {
    icon: Hotel,
    title: "Luxury Hotels and F&B Expertise",
    description:
      "30+ years managing Caravelle Saigon, Four Seasons, Mandarin Oriental, and 100+ projects across Southeast Asia.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Accountable for GOP Results",
    description:
      "We take full operational responsibility with hands-on revenue and cost control that delivers superior GOP.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="pt-[100px] pb-[100px] bg-tertinary">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[#969696] text-xs sm:text-[20px] font-[300] tracking-[0.05em] uppercase mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-[500] leading-tight mb-4 lg:mb-6">
            Independent Hotel Management
            <br className="hidden sm:block" /> Experts in Southeast Asia
          </h2>
          <p className="text-[#626262] text-sm sm:text-base md:text-[20px] font-400 max-w-2xl mx-auto">
            Three principles that guide every project we manage across
            <br className="hidden sm:block" /> Vietnam, Indonesia, and Southeast
            Asia
          </p>
        </div>

        {/* Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            const isLastItem = index === principles.length - 1;
            return (
              <div
                key={principle.title}
                className={`flex flex-col items-center text-center md:items-start md:text-left ${
                  !isLastItem
                    ? " md:border-r-[2px] md:border-r md:border-[#000000]/50 md:pr-8 lg:pr-10"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-primary stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-primary text-lg sm:text-xl lg:text-[36px] font-[500] mb-3 leading-tight">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-[#000000] text-sm sm:text-[24px] font-[300] tracking-[-0.02em] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
