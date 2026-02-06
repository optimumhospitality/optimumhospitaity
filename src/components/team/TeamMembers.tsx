// Import team member images
import johnGardner from "../../assets/image/team-page/team-member/john-gardner.webp";
import khangNguyen from "../../assets/image/team-page/team-member/khang.webp";
import gauravRai from "../../assets/image/team-page/team-member/gaurav-rai.webp";
import ayeMon from "../../assets/image/team-page/team-member/aye-mon.webp";
import minhNguyen from "../../assets/image/team-page/team-member/minh-nyugen.webp";
import lannyTran from "../../assets/image/team-page/team-member/lanny-tran.webp";
import colmHutchinson from "../../assets/image/team-page/team-member/colm-hutchinson.webp";
import tomBeirnaert from "../../assets/image/team-page/team-member/tom.webp";
import nobertVas from "../../assets/image/team-page/team-member/nobert-vas.webp";
import martinNugroho from "../../assets/image/team-page/team-member/martin-nugroho.webp";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  gender: "him" | "her";
}

interface TeamSection {
  country: string;
  members: TeamMember[];
}

const teamData: TeamSection[] = [
  {
    country: "VIETNAM",
    members: [
      {
        id: "john-gardner",
        name: "John Gardner",
        title: "Founding Partner & CEO",
        description:
          "John is a well-seasoned and passionate 5 star hotelier experienced in general management, cluster management of multiple properties, pre-openings, renovations as well as asset management.",
        image: johnGardner,
        gender: "him",
      },
      {
        id: "khang-nguyen",
        name: "Khang Nguyen",
        title: "Operations Director & Business Development",
        description:
          "Khang is an experienced hospitality professional with extensive expertise in operations management and business development across Southeast Asia.",
        image: khangNguyen,
        gender: "him",
      },
      {
        id: "gaurav-rai",
        name: "Gaurav Rai",
        title: "Director of Special Projects",
        description:
          "Gaurav is a seasoned hospitality executive with over 30 years of international experience in luxury hotel management and special projects.",
        image: gauravRai,
        gender: "him",
      },
      {
        id: "aye-mon",
        name: "Aye Mon",
        title: "Spa & Wellness",
        description:
          "Aye Mon is a wellness industry specialist with comprehensive experience in spa operations, pre-openings, and operational excellence.",
        image: ayeMon,
        gender: "her",
      },
      {
        id: "minh-nguyen",
        name: "Minh Nguyen",
        title: "Advisor",
        description:
          "Minh is a trusted advisor with deep expertise in hospitality investments and owner representation.",
        image: minhNguyen,
        gender: "him",
      },
      {
        id: "lanny-tran",
        name: "Lanny Tran",
        title: "Project Analyst and Strategy Advisor",
        description:
          "Lanny is a skilled project analyst and strategy advisor with extensive experience in hospitality consulting and market analysis.",
        image: lannyTran,
        gender: "her",
      },
      {
        id: "colm-hutchinson",
        name: "Colm Hutchinson",
        title: "Marketing Content & Strategy",
        description:
          "Colm is a creative marketing professional with extensive experience in hospitality marketing, content strategy, and brand development.",
        image: colmHutchinson,
        gender: "him",
      },
      {
        id: "tom-beirnaert",
        name: "Tom Beirnaert",
        title: "AI Strategy Partner, Vertize",
        description:
          "Tom is an innovative hospitality-focused technology entrepreneur with extensive experience in AI strategy, automation, and digital transformation across hotels, resorts, and F&B concepts in Southeast Asia. His career spans commercial consulting, operational optimisation, and the development of advanced AI systems that enhance guest experience, streamline workflows, and unlock new revenue opportunities for operators and owners. Having lived in Vietnam for a total of +5 years, he has developed a strong understanding of the local business culture and the operational realities of the region's hospitality industry.",
        image: tomBeirnaert,
        gender: "him",
      },
    ],
  },
  {
    country: "INDONESIA",
    members: [
      {
        id: "nobert-vas",
        name: "Nobert Vas",
        title: "CEO of Optimum Hospitality- Indonesia",
        description:
          "Nobert is a multilingual hospitality executive fluent in four languages with a passion for connecting capital with premium hospitality opportunities.",
        image: nobertVas,
        gender: "him",
      },
      {
        id: "martin-nugroho",
        name: "Martin Nugroho",
        title: "COO & VP Development",
        description:
          "Martin is a distinguished executive within the Indonesian real estate and hospitality industry with decades of leadership experience.",
        image: martinNugroho,
        gender: "him",
      },
    ],
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    // Fixed height card for consistent alignment across all cards
    <Link
      to={`/team/${member.id}`}
      className="w-[320px] sm:w-[350px] md:w-[380px] xl:w-[calc((100%-48px)/3)] xl:min-w-[380px] xl:max-w-[430px] flex-shrink-0 h-[520px] sm:h-[580px] md:h-[650px] lg:h-[707px] flex flex-col bg-tertinary border-[1px] border-[#23283C]/50 rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
    >
      {/* Image - fixed height for alignment */}
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
            {member.title}
          </p>
        </div>

        {/* Horizontal divider - fixed position */}
        <div className="w-full h-[1px] bg-[#23283C]/20 my-3 sm:my-[14px] lg:my-[16px] flex-shrink-0"></div>

        {/* Description - fixed height */}
        <div className="h-[50px] sm:h-[60px] lg:h-[70px] flex-shrink-0 overflow-hidden">
          <p className="text-[#393E4F] text-sm sm:text-base lg:text-[20px] font-[300] leading-relaxed line-clamp-2">
            {member.description}
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
  );
}

export default function TeamMembers() {
  return (
    <section className=" py-15 sm:py-15 lg:py-25 sm:py-25 bg-tertinary">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        {teamData.map((section, sectionIndex) => (
          <div
            key={section.country}
            className={sectionIndex > 0 ? "mt-16 sm:mt-20" : ""}
          >
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-sm md:text-[36px] font-300 tracking-[0.2em] text-primary uppercase mb-2">
                TEAM OPTIMUM HOSPITALITY
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary">
                {section.country}
              </h2>
            </div>

            {/* Team Grid - 3 cards per row on xl+ screens, centered incomplete rows */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-6">
              {section.members.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
