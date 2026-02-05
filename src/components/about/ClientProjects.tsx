import { useRef, useState, useEffect, useCallback } from "react";
import CaseStudy1 from "../../assets/image/home-page/hotel-caseStudies/roomImage1.webp";
import CaseStudy2 from "../../assets/image/home-page/hotel-caseStudies/roomImage2.webp";
import CaseStudy3 from "../../assets/image/home-page/hotel-caseStudies/roomImage3.webp";
import CaseStudy4 from "../../assets/image/home-page/hotel-caseStudies/roomImage4.webp";
import CaseStudy5 from "../../assets/image/home-page/hotel-caseStudies/roomImage5.webp";

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
    title: "Management, Renovation project management",
    details: "335-key, 5★ resort",
  },
  {
    image: CaseStudy3,
    hotelName: "Imperium Cam Ranh",
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
    hotelName: "Arena Hotel Nha Trang",
    title: "E-commerce, distribution setup, revenue management",
    details: "520-key, 5★ luxury hotel",
  },
];

export default function ClientProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const [, forceUpdate] = useState(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const hasInitialized = useRef(false);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [
    ...projects,
    ...projects,
    ...projects,
    ...projects,
  ];

  // Initialize scroll position once
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || hasInitialized.current) return;

    const singleSetWidth = scrollContainer.scrollWidth / 4;
    scrollContainer.scrollLeft = singleSetWidth;
    hasInitialized.current = true;
  }, []);

  // Auto-scroll - runs continuously, checks ref for interaction state
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 1.2;

    const autoScroll = () => {
      if (!isInteractingRef.current && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        const currentScroll = scrollContainer.scrollLeft;
        const singleWidth = scrollContainer.scrollWidth / 4;

        // Seamless reset when reaching the end
        if (currentScroll >= singleWidth * 3) {
          scrollContainer.scrollLeft = singleWidth;
        }
        // Handle manual scroll backwards
        if (currentScroll < singleWidth * 0.5) {
          scrollContainer.scrollLeft = singleWidth * 2;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, []); // Empty dependency - never re-runs

  // Mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    isInteractingRef.current = true;
    dragStartX.current = e.pageX;
    scrollStartX.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
    forceUpdate((n) => n + 1);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const deltaX = e.pageX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartX.current - deltaX;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";
  }, []);

  const handleMouseEnter = useCallback(() => {
    isInteractingRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false;
    isInteractingRef.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  }, []);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    isInteractingRef.current = true;
    isDragging.current = true;
    dragStartX.current = e.touches[0].pageX;
    scrollStartX.current = scrollRef.current.scrollLeft;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current || !isDragging.current) return;
    const deltaX = e.touches[0].pageX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartX.current - deltaX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 1500);
  }, []);

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

      {/* Scrollable Container */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-[40px] pb-4 cursor-grab select-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[450px] lg:w-[624px]"
            >
              {/* Project Card */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[560px] lg:h-[624px] rounded-2xl overflow-hidden group">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.hotelName}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                  draggable={false}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white pointer-events-none">
                  <p className="text-[16px] sm:text-[16px] text-white/80 mb-1 sm:mb-2 lg:text-[24px]">
                    {project.hotelName}
                  </p>
                  <h3 className="text-[20px] sm:text-[20px] md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2 leading-tight lg:text-[36px]">
                    {project.title}
                  </h3>
                  <p className="text-[16px] sm:text-[16px] text-white/70 lg:text-[24px]">
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
