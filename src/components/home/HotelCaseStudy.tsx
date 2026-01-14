import { useState, useRef, useEffect } from "react";
import { useLocomotiveScroll } from "../LocomotiveScrollProvider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// import { MoveUp, Lightbulb, DollarSign } from "lucide-react";
// import type { LucideIcon } from "lucide-react";
import roomImage1 from "../../assets/image/home-page/hotel-caseStudies/roomImage1.webp";
import roomImage2 from "../../assets/image/home-page/hotel-caseStudies/roomImage2.webp";
// import gopImageHomeSection from "../../assets/image/home-page/hotel-caseStudies/gopImageHomeSection.webp";

import partnerLogo1 from "../../assets/image/home-page/coreHotelManagement/parter-logo1.webp";
import partnerLogo2 from "../../assets/image/home-page/coreHotelManagement/parter-logo2.webp";
import partnerLogo3 from "../../assets/image/home-page/coreHotelManagement/parter-logo3.webp";
import partnerLogo4 from "../../assets/image/home-page/coreHotelManagement/parter-logo4.webp";


interface CaseStudy {
  id: number;
  hotelName: string;
  title: React.ReactNode;
  achievement: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    hotelName: "Wyndham Grand Hotel Phu Quoc",
    title: <>Operations audit, PIP, F&B outlet curation</>,
    achievement: "1,400 key,  5★ Hotel",
    image: roomImage1,
  },
  {
    id: 2,
    hotelName: "Caravelle Hotel Saigon",
    title: <>Management, Renovation <br/> project management</> ,
    achievement: "335 key,  5★ Hotel",
    image: roomImage2,
  },
];

// const benefits: { icon: LucideIcon; text: string }[] = [
//   { icon: MoveUp, text: "Increase revenue and cost efficiency" },
//   { icon: Lightbulb, text: "Simplify hotel operations and management" },
//   { icon: DollarSign, text: "Strengthen asset value and owner confidence" },
// ];

const partners = [
  { name: "CloudCollective", logo: partnerLogo1 },
  { name: "ParkHaus", logo: partnerLogo2 },
  { name: "Interiologic", logo: partnerLogo3 },
  { name: "PurpleAsia", logo: partnerLogo4 },
];

export default function HotelCaseStudy() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  // GSAP scroll animations
  const { isReady } = useLocomotiveScroll();
  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      // Header fade up animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Case cards fade in with stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".case-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Partners section fade in
      if (partnersRef.current) {
        gsap.fromTo(
          partnersRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: partnersRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section ref={sectionRef}>
      {/* Case Studies Section - White Background */}
      <div className="bg-white pt-[60px] pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[58px] xl:px-[58px]">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs sm:text-[20px] font-light tracking-[0.2em] text-gray-500 uppercase mb-1">
              WHERE STRATEGY DELIVERS REAL VALUE
            </p>
            <h2 className="text-[48px] font-medium text-primary">
              Selected Hotel Case Studies
            </h2>
            <p className="mt-0 text-[#626262] text-sm sm:text-base md:text-[20px] max-w-3xl mx-auto">
              Real examples of how we have improved hotel operations, financial
              performance, and guest experience across Southeast Asia.
            </p>
          </div>

          {/* Case Study Cards */}
          <div ref={cardsRef} className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-[24px]">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="case-card relative group rounded-2xl overflow-hidden cursor-pointer w-full h-[350px] sm:h-[400px] lg:w-[600px] lg:h-[600px] flex-shrink-0"
                onMouseEnter={() => setHoveredCard(study.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <img
                  src={study.image}
                  alt={study.hotelName}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCard === study.id ? "scale-110" : "scale-100"
                    }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs sm:text-sm text-white/80 mb-1 sm:mb-2 lg:text-[24px]">
                    {study.hotelName}
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2 leading-tight lg:text-[36px]">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 lg:text-[24px]">
                    {study.achievement}
                  </p>

                  {/* View Case Study Button */}
                  {/* <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors">
                    VIEW CASE STUDY
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Increase GOP Section - Dark Background */}


      <div className="bg-primary" ref={partnersRef}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
            {/* Left Text */}
            <div className="lg:max-w-md flex-shrink-0">
              <h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white mb-4 leading-tight">
                Our Partners
              </h3>
              <p className="text-white/70 text-[18px] sm:text-[20px] md:text-[20px] leading-relaxed">
                We partner selectively with organizations that meet our
                standards for performance, precision, and long-term value
                creation.
              </p>
            </div>

            {/* Partner Logos - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-20 gap-y-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-16"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 sm:h-10 md:h-14 w-auto object-contain filter brightness-0 invert opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pt-25"></div> */}
    </section>
  );
}
