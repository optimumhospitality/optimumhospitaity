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
        <section className="bg-[#F7EFE3] pb-2 sm:pb-2 lg:pb-6 lg:max-h-[736px]">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-0">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-[500] text-[#23283C] text-center mb-10 sm:mb-16 lg:mb-12">
                    Our Journey
                </h2>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[7px] sm:left-[14px] lg:left-[15px] top-3 sm:top-6 bottom-6 sm:bottom-12 w-[2px] bg-[#515151]" />

                    {/* Milestones */}
                    <div className="space-y-8 sm:space-y-10 lg:space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-0">
                                {/* Dot and Year Container */}
                                <div className="flex items-start gap-3 sm:gap-6 lg:gap-8 flex-shrink-0 pl-0 sm:pl-1.5">
                                    {/* Dot */}
                                    <div className="relative z-10 w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] lg:w-[20px] lg:h-[20px] rounded-full bg-[#515151] flex-shrink-0 mt-2 sm:mt-5" />

                                    {/* Year */}
                                    <div className="w-16 sm:w-24 lg:w-28 flex-shrink-0">
                                        <span className="text-3xl sm:text-5xl lg:text-[56px] font-[400] text-[#2C3E50] leading-none">
                                            {milestone.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-2 sm:pt-0 pl-7 sm:pl-10 lg:pl-20">
                                    <h3 className="text-lg sm:text-2xl lg:text-[36px] font-[400] text-[#2C3E50] mb-1 sm:mb-2">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-[#2C3E50] text-sm sm:text-base lg:text-[20px] font-[300] leading-relaxed max-w-3xl">
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