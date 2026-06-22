import CaseStudy1 from "../../assets/image/home-page/hotel-caseStudies/roomImage1.webp";
import CaseStudy2 from "../../assets/image/home-page/hotel-caseStudies/roomImage2.webp";
// import CaseStudy3 from "../../assets/image/home-page/hotel-caseStudies/roomImage3.webp";
import CaseStudy4 from "../../assets/image/home-page/hotel-caseStudies/roomImage4.webp";
import CaseStudy5 from "../../assets/image/home-page/hotel-caseStudies/roomImage5.webp";
import CaseStudy6 from "../../assets/image/home-page/hotel-caseStudies/angsana.webp";
import hotelimage4 from "../../assets/image/home-page/testimonial/leah.webp";

const projects = [
  {
    image: CaseStudy1,
    hotelName: "Wyndham Grand Hotel Phu Quoc",
    title:
      "Operations audit, PIP (property improvement plan), F&B outlet curation",
    details: "1400-key, 5★ Hotel",
  },
  {
    image: CaseStudy2,
    hotelName: "Caravelle Hotel Saigon",
    title: "Full Hotel Management and Renovation Project Management",
    details: "335-key, 5★ resort",
  },
 {
    // id: 3,
    quote: "Optimum's pre-opening planning and technical services ensured a smooth launch, robust systems, and operational readiness across every discipline.",
    title: "Pre-Opening & Technical Services",
    hotelName: "The Leah Hanoi, Vietnam",
    image: hotelimage4,
  },
  {
    image: CaseStudy4,
    hotelName: "Alma Resort",
    title: "Distribution setup, E-commerce, revenue management",
    details: "580-key, 5★ luxury hotel",
  },
  {
    image: CaseStudy5,
    hotelName: "Arena Hotel Nha Trang",
    title: "E-commerce, distribution setup, revenue management",
    details: "520-key, 5★ luxury hotel",
  },
   {
    image:CaseStudy6,
    hotelName:"Angsana Ho Tram ",
    title: " Asset Management",
    details: "52 Villas, 5★ & 162-key, 4★"
  }
];

export default function ClientProjects() {
  

  return (
    <section className="bg-tertinary py-[60px] sm:py-[60px] lg:py-[100px] overflow-hidden">
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

      {/* Projects Grid (2 rows x 3 columns on large screens) */}
      <div className="relative w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-[40px] pb-6">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <div className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.hotelName}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 h-[40%] p-4 sm:p-5 md:p-6 text-white flex flex-col justify-start">
                  <p className="text-[16px] sm:text-[16px] text-white/80 mb-1 sm:mb-2 lg:text-[20px] mt-auto sm:mt-0">
                    {project.hotelName}
                  </p>
                  <h3 className="text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-1 sm:mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[14px] sm:text-[14px] text-white/70 lg:text-[16px]">
                    {project.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
