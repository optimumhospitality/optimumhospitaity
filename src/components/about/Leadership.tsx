import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { teamMembersData } from "../team/teamData";

// Get first 3 team members for leadership section
const leadershipTeam = teamMembersData.slice(0, 3);

export default function Leadership() {
  return (
    <section className="bg-tertinary pt-15 md:pt-15 sm:pt-15 lg:pt-25 ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        {/* Section Header */}
        <div className="text-center mb-6  sm:mb-10 ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-primary mb-1">
            Leadership Built on Experience
          </h2>
          <p className="text-[#626262] text-sm sm:text-base md:text-lg lg:text-[20px] font-light max-w-2xl mx-auto">
            We proudly serve a diverse portfolio of esteemed clients, including
            high-profile hotel owners.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-6">
          {leadershipTeam.map((member) => (
            <Link
              key={member.id}
              to={`/team/${member.id}`}
              className="w-[320px] sm:w-[350px] md:w-[380px] xl:w-[calc((100%-48px)/3)] xl:min-w-[380px] xl:max-w-[430px] flex-shrink-0 h-[520px] sm:h-[580px] md:h-[650px] lg:h-[707px] flex flex-col bg-tertinary border-[1px] border-[#23283C]/50 rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
            >
              {/* Member Image - fixed height for alignment */}
              <div className="h-[260px] sm:h-[280px] md:h-[320px] lg:h-[372px] w-full flex-shrink-0 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content section - fixed structure */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                {/* Name and Title - fixed height block */}
                <div className="h-[80px] sm:h-[90px] lg:h-[100px] flex-shrink-0">
                  <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[36px] font-[500] text-primary leading-tight">
                    {member.name}
                  </h3>
                  <p className="tracking-[-0.02rem] text-[#393E4F] text-sm sm:text-base lg:text-[20px] font-normal line-clamp-2 mt-1">
                    {member.role}
                  </p>
                </div>

                {/* Horizontal divider - fixed position */}
                <div className="w-full h-[1px] bg-[#23283C]/20 my-3 sm:my-[14px] lg:my-[16px] flex-shrink-0"></div>

                {/* Description - fixed height */}
                <div className="h-[50px] sm:h-[60px] lg:h-[70px] flex-shrink-0 overflow-hidden">
                  <p className="text-[#393E4F] text-sm sm:text-base lg:text-[20px] font-[300] leading-relaxed line-clamp-2">
                    {member.character}
                  </p>
                </div>
              </div>

              {/* Button - fixed at bottom */}
              <div className="mt-auto flex-shrink-0">
                <div className="uppercase w-full h-[50px] sm:h-[56px] lg:h-[63px] text-[14px] sm:text-[16px] lg:text-[18px] font-[500] inline-flex items-center justify-center gap-2 bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                  Know more about {member.gender}
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
