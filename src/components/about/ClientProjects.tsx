// import quocImage from "../../assets/image/aboutus-page/hotel-images/quoc-home-image.webp";
// import radissonImage from "../../assets/image/aboutus-page/hotel-images/radison.webp";
// import wyndhamImage from "../../assets/image/aboutus-page/hotel-images/wyandham-home.webp";
import CaseStudy1 from "../../assets/image/home-page/hotel-caseStudies/roomImage1.webp";
import CaseStudy2 from "../../assets/image/home-page/hotel-caseStudies/roomImage2.webp";
import CaseStudy3 from "../../assets/image/home-page/hotel-caseStudies/roomImage3.webp";
import CaseStudy4 from "../../assets/image/home-page/hotel-caseStudies/roomImage4.webp";
import CaseStudy5 from "../../assets/image/home-page/hotel-caseStudies/roomImage5.webp";

const projects = [
  {
    image: CaseStudy1,
    hotelName: "Wyndham Grand Hotel Phu Quoc",
    title: "Operations audit, PIP (property improvement plan), F&B outlet curation",
    details: "1400-key, 5★ Hotel",
  },
  {
    image: CaseStudy2,
    hotelName: "Caravelle Hotel Saigon",
    title: "Management, Renovation project management",
    details: "335-key, 5★ resort",
  },
  {
    image: CaseStudy3,
    hotelName: "Arena Cam Ranh",
    title: "E-commerce, distribution setup, revenue management",
    details: "1450-key, 4★ luxury hotel",
  },
  {
    image: CaseStudy4,
    hotelName: "Alma Resort",
    title: "Distribution setup, E-commerce, revenue management",
    details: "580-key, 5★ luxury hotel",
  },
  {
    image: CaseStudy5,
    hotelName: "Empyrean Hotel Nha Trang",
    title: "E-commerce, distribution setup, revenue management",
    details: "520-key, 5★ luxury hotel",
  },
  {
    image: CaseStudy1,
    hotelName: "Wyndham Grand Hotel Phu Quoc",
    title: "Operations audit, PIP (property improvement plan), F&B outlet curation",
    details: "1400-key, 5★ Hotel",
  },
  {
    image: CaseStudy2,
    hotelName: "Caravelle Hotel Saigon",
    title: "Management, Renovation project management",
    details: "335-key, 5★ resort",
  },
  {
    image: CaseStudy3,
    hotelName: "Arena Cam Ranh",
    title: "E-commerce, distribution setup, revenue management",
    details: "1450-key, 4★ luxury hotel",
  },
  {
    image: CaseStudy4,
    hotelName: "Alma Resort",
    title: "Distribution setup, E-commerce, revenue management",
    details: "580-key, 5★ luxury hotel",
  },
  {
    image: CaseStudy5,
    hotelName: "Empyrean Hotel Nha Trang",
    title: "E-commerce, distribution setup, revenue management",
    details: "520-key, 5★ luxury hotel",
  },
  {
    image: CaseStudy1,
    hotelName: "Wyndham Grand Hotel Phu Quoc",
    title: "Operations audit, PIP (property improvement plan), F&B outlet curation",
    details: "1400-key, 5★ Hotel",
  },
  {
    image: CaseStudy2,
    hotelName: "Caravelle Hotel Saigon",
    title: "Management, Renovation project management",
    details: "335-key, 5★ resort",
  },
  {
    image: CaseStudy3,
    hotelName: "Arena Cam Ranh",
    title: "E-commerce, distribution setup, revenue management",
    details: "1450-key, 4★ luxury hotel",
  },
  {
    image: CaseStudy4,
    hotelName: "Alma Resort",
    title: "Distribution setup, E-commerce, revenue management",
    details: "580-key, 5★ luxury hotel",
  },
  {
    image: CaseStudy5,
    hotelName: "Empyrean Hotel Nha Trang",
    title: "E-commerce, distribution setup, revenue management",
    details: "520-key, 5★ luxury hotel",
  },
  
];

export default function ClientProjects() {
  // Double the projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section className="bg-tertinary pt-[80px] pb-[120px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[48px] lg:text-[48px] font-bold text-primary mb-3">
            Our Clients & Projects
          </h2>
          <p className="text-[#969696] font-[300] text-sm sm:text-base md:text-[16px] tracking-[0.1em] uppercase max-w-2xl mx-auto">
            WE PROUDLY SERVE A DIVERSE PORTFOLIO OF ESTEEMED CLIENTS, INCLUDING
            HIGH-PROFILE HOTEL OWNERS.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full">
        <div className="flex animate-scroll">
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[450px] lg:w-[624px] mx-3 sm:mx-4"
            >
              {/* Project Card */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[560px] lg:h-[624px] rounded-2xl overflow-hidden group">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.hotelName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                  <p className="text-xs sm:text-sm text-white/80 mb-1 sm:mb-2 lg:text-[24px]">
                    {project.hotelName}
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2 leading-tight lg:text-[36px]">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 lg:text-[24px]">
                    {project.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-624px * 3 - 48px));
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 1024px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-450px * 3 - 48px));
            }
          }
        }
        
        @media (max-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-350px * 3 - 48px));
            }
          }
        }
        
        @media (max-width: 640px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-300px * 3 - 36px));
            }
          }
        }
      `}</style>
    </section>
  );
}
