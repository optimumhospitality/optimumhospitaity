import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import type { TeamMemberData } from "./teamData";

interface TeamDetailProps {
  member: TeamMemberData;
}

export default function TeamDetail({ member }: TeamDetailProps) {
  return (
    <>
      {/* Hero Section with Member Info */}
      <section className="bg-primary pt-16 md:pt-0">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:h-[400px]">
          {/* Member Image - Squarish with rounded corners on mobile, rectangle on desktop */}
          <div className="w-full max-w-[350px] mx-auto h-[400px] px-4 py-4 md:max-w-none md:mx-0 md:h-full md:w-[280px] lg:w-[350px] md:p-0 flex-shrink-0 md:pt-18">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top rounded-xl md:rounded-none"
            />
          </div>

          {/* Member Info - Centered on mobile */}
          <div className=" flex-1 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 sm:px-6 md:px-8 lg:px-16 py-6 md:py-0">
            <h1 className="mt-15 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-[500] mb-1">
              {member.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[20px] text-white/80 font-[400] mb-3 md:mb-4">
              {member.role}
            </p>
            <p className="text-sm sm:text-base md:text-[20px] font-[300] text-[#B8B8B8] leading-relaxed mb-4 md:mb-6 max-w-xl">
              {member.character}
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-[#FFFDF8] items-center gap-2 px-8 py-2.5 md:px-18 md:py-3 border border-white text-[#222E60] text-sm md:text-[13px] font-[500] rounded-md hover:bg-primary hover:border-white hover:text-white transition-colors w-fit"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-tertinary pt-10 md:py-10 lg:pt-6 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
          {/* Back to Team Link */}
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-[#393E4F] text-[24px] font-[400] mb-8"
          >
            <ChevronLeft className="w-5 h-5" />
            back to team
          </Link>

          {/* About Content */}
          <div className="px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-primary uppercase mb-6 md:mb-8">
              ABOUT {member.name.split(" ")[0].toUpperCase()}
            </h2>

            <div className="space-y-4 md:space-y-6">
              {member.about.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#393E4F] text-sm sm:text-base md:text-lg lg:text-[36px] leading-relaxed font-[300]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Signature Section */}
          <div className="mt-16 pt-8 pb-12 ">
            <img
              src={member.signatureImage}
              alt={`${member.name} signature`}
              className="h-16 md:h-20 mb-4"
            />
            <p className="text-xl md:text-2xl font-bold text-primary">
              {member.name}
            </p>
            <p className="text-base md:text-lg text-[#393E4F]">{member.role}</p>
          </div>
        </div>
        <div className="pb-40"></div>
      </section>
    </>
  );
}
