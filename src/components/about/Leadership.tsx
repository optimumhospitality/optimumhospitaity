import { Link } from "react-router-dom";
import { teamMembersData } from "../team/teamData";

// Get first 3 team members for leadership section
const leadershipTeam = teamMembersData.slice(0, 3);

export default function Leadership() {
  return (
    <section className="bg-tertinary py-16 sm:py-20 lg:py-24 ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-primary mb-4">
            Leadership Built on Experience
          </h2>
          <p className="text-[#626262] text-sm sm:text-base md:text-lg lg:text-[20px] font-light max-w-2xl mx-auto">
            We proudly serve a diverse portfolio of esteemed clients, including
            high-profile hotel owners.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {leadershipTeam.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
            >
              {/* Member Image */}
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Name */}
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium text-primary mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-primary/80 text-sm sm:text-base font-normal mb-4">
                  {member.role}
                </p>

                {/* Character/Description */}
                <p className="text-[#626262] text-sm sm:text-base font-light leading-relaxed flex-1">
                  {member.character}
                </p>
              </div>

              {/* Know More Button */}
              <Link
                to={`/team/${member.id}`}
                className="block bg-primary text-white text-center py-4 text-sm sm:text-base font-normal hover:bg-primary/90 transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  Know more about him
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
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
