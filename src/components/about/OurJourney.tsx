interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
}

const milestones: JourneyMilestone[] = [
  {
    year: "2021",
    title: "Founded in Vietnam",
    description:
      "Established by senior luxury hoteliers with decades of regional experience.",
  },
  {
    year: "2022",
    title: "Independent Hotel Management",
    description:
      "Launched full-service hotel management and advisory services across Vietnam.",
  },
  {
    year: "2023",
    title: "Regional Expansion",
    description:
      "Extended operations into Indonesia, Cambodia, and Laos markets.",
  },
  {
    year: "2024",
    title: "100+ Projects Milestone",
    description:
      "Delivered comprehensive advisory and management services across Southeast Asia",
  },
  {
    year: "2025",
    title: "AI Partnership",
    description:
      "Partnered with Vertize to deliver AI-enabled hospitality solutions",
  },
];

export default function OurJourney() {
  return (
    <section className="bg-[#F7EFE3] min-[500px]:pb-2 sm:pb-2 lg:pb-6 lg:max-h-[736px]">
      <div className="max-w-5xl mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-0">
        {/* Section Title */}
        <h2 className="text-2xl min-[500px]:text-xl sm:text-2xl min-[750px]:text-3xl md:text-4xl lg:text-[48px] font-[500] text-[#23283C] text-center mb-8 min-[500px]:mb-6 sm:mb-8 min-[750px]:mb-10 md:mb-12 lg:mb-12">
          Our Journey
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - calculated to end at last dot */}
          <div className="absolute left-[6px] min-[500px]:left-[5px] sm:left-[7px] min-[750px]:left-[10px] md:left-[12px] lg:left-[15px] top-2 min-[500px]:top-2 sm:top-3 min-[750px]:top-4 md:top-5 lg:top-6 w-[1.5px] min-[500px]:w-[1.5px] sm:w-[2px] bg-[#515151] h-[calc(100%-65px)] min-[500px]:h-[calc(100%-55px)] sm:h-[calc(100%-60px)] min-[750px]:h-[calc(100%-70px)] md:h-[calc(100%-80px)] lg:h-[calc(100%-95px)]" />

          {/* Milestones */}
          <div className="space-y-6 min-[500px]:space-y-4 sm:space-y-5 min-[750px]:space-y-6 md:space-y-7 lg:space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex min-[500px]:flex-row min-[500px]:items-start gap-0"
              >
                {/* Dot and Year Container */}
                <div className="flex items-start gap-2 min-[500px]:gap-2 sm:gap-3 min-[750px]:gap-4 md:gap-6 lg:gap-8 flex-shrink-0 pl-0 min-[500px]:pl-0 sm:pl-0.5 min-[750px]:pl-1 md:pl-1.5">
                  {/* Dot */}
                  <div className="relative z-10 w-[12px] h-[12px] min-[500px]:w-[10px] min-[500px]:h-[10px] sm:w-[12px] sm:h-[12px] min-[750px]:w-[16px] min-[750px]:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px] rounded-full bg-[#515151] flex-shrink-0 mt-1.5 min-[500px]:mt-1 sm:mt-2 min-[750px]:mt-3 md:mt-4 lg:mt-5" />

                  {/* Year */}
                  <div className="w-14 min-[500px]:w-12 sm:w-14 min-[750px]:w-18 md:w-22 lg:w-28 flex-shrink-0">
                    <span className="text-2xl min-[500px]:text-lg sm:text-2xl min-[750px]:text-3xl md:text-4xl lg:text-[56px] font-[400] text-[#2C3E50] leading-none">
                      {milestone.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 min-[500px]:pt-0 sm:pt-0 pl-4 min-[500px]:pl-4 sm:pl-6 min-[750px]:pl-10 md:pl-14 lg:pl-20">
                  <h3 className="text-base min-[500px]:text-[11px] sm:text-[13px] min-[750px]:text-lg md:text-xl lg:text-[36px] font-[400] text-[#2C3E50] mb-0.5 min-[500px]:mb-0.5 sm:mb-1 min-[750px]:mb-1.5 md:mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-[#2C3E50] text-[12px] min-[500px]:text-[9px] sm:text-[10px] min-[750px]:text-[12px] md:text-[14px] lg:text-[20px] font-[300] leading-relaxed max-w-3xl">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
