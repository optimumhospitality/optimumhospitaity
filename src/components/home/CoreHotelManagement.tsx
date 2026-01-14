import { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "../LocomotiveScrollProvider";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { DollarSign, Lightbulb, MoveUp, type LucideIcon } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gopImageHomeSection from "../../assets/image/home-page/hotel-caseStudies/gopImageHomeSection.webp";

// Import images
import hotelRoomImage1 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage1.webp";
import hotelRoomImage2 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage2.webp";
import hotelRoomImage3 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage3.webp";
// import hotelRoomImage4 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage4.webp";
import hotelRoomImage5 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage5.webp";
// import hotelRoomImage6 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage6.webp";
// import hotelRoomImage7 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage7.webp";
import hotelRoomImage8 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage8.webp";

// Import card icons
import dynamicExperienceIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/dynamic-experience.webp";
import aiPoweredIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/ai-powered-experience.webp";
import experienceBuilderIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/experience-builder-icon.webp";
import gopCashFlowIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/gop-cash-flow-icon.webp";
import capitalPlanningIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/capital-planning-icon.webp";
import brandOperatorIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/brand-and-opeartor-icon.webp";
import technicalServicesIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/techical-services-icon.webp";
import budgetPlanningIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/budget-planning-icon.webp";
import preOpeningIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/pre-opening-icon.webp";
// import feasibilityIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/feasiblity-icon.webp";
// import conceptDevelopmentIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/concept-development-icon.webp";
// import designOperationIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/design-operation-icon.webp";
import marketLedIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/market-led-icon.webp";
import menuEngineeringIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/menu-engineering-icon.webp";
import outletPerformanceIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/outlet-performance-icon.webp";
// import propertyImprovementIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/property-improvement-icon.webp";
// import trainingServiceIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/training-service-icon.webp";
// import operationalAuditIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/operational-audit-icon.webp";
// import distributionChannelIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/distribution-chanel-icon.webp";
// import brandingSalesIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/branding-sales-icon.webp";
// import seoIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/seo-icon.webp";

// Import partner logos

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  description: string;
  features: { icon: string; text: string }[];
  image: string;
}

// Service slug mapping (matches serviceDetailsData.ts)
const serviceSlugs = [
  "/services/hotel-management",
  "/services/asset-management",
  "/services/project-development",
  "/services/fb-concept-curation",
  "/vertize-ai",
];

const services: Service[] = [
  {
    id: 1,
    title: "Independent Hotel Management",
    description:
      "Hands-on hotel management that prioritises owner returns, operational discipline, and long-term asset value, with or without a brand affiliation.",
    features: [
      { icon: dynamicExperienceIcon, text: "Dynamic experience builder" },
      { icon: aiPoweredIcon, text: "AI-powered experience curation" },
      { icon: experienceBuilderIcon, text: "Experience partner connectivity" },
    ],
    image: hotelRoomImage1,
  },
  {
    id: 2,
    title: "Asset Management and Owner Representation",
    description:
      "Protecting owner interests through financial oversight, operator performance monitoring, and strategic decision support.",
    features: [
      { icon: gopCashFlowIcon, text: "GOP and cash flow optimization" },
      {
        icon: capitalPlanningIcon,
        text: "Capital planning and ROI validation",
      },
      {
        icon: brandOperatorIcon,
        text: "Brand and operator performance governance",
      },
    ],
    image: hotelRoomImage2,
  },
  {
    id: 3,
    title: "Hotel Advisory, Feasibility and Pre-Opening Support",
    description:
      "From concept to opening, we guide owners through feasibility studies, development strategy, and operational readiness.",
    features: [
      {
        icon: technicalServicesIcon,
        text: "Feasibility studies and market analysis",
      },
      {
        icon: budgetPlanningIcon,
        text: "Design review and technical services",
      },
      {
        icon: preOpeningIcon,
        text: "Pre-opening leadership and budget control",
      },
    ],
    image: hotelRoomImage3,
  },
  // {
  //   id: 4,
  //   title: "Hotel & Resort Consulting",
  //   description:
  //     "Strategic advisory grounded in market data, feasibility, and financial logic.",
  //   features: [
  //     {
  //       icon: feasibilityIcon,
  //       text: "Feasibility studies and highest-use analysis",
  //     },
  //     {
  //       icon: conceptDevelopmentIcon,
  //       text: "Concept development and repositioning",
  //     },
  //     {
  //       icon: designOperationIcon,
  //       text: "Design and operational efficiency review",
  //     },
  //   ],
  //   image: hotelRoomImage4,
  // },
  {
    id: 4,
    title: "Food and Beverage Strategy and Concept Development",
    description:
      "Maximising F&B profitability through concept design, operational optimisation, and market-aligned positioning.",
    features: [
      { icon: marketLedIcon, text: "Market-led concept positioning" },
      { icon: menuEngineeringIcon, text: "Menu engineering and cost control" },
      { icon: outletPerformanceIcon, text: "Outlet performance optimization" },
    ],
    image: hotelRoomImage5,
  },
  // {
  //   id: 6,
  //   title: "Operational Support & Performance Turnaround",
  //   description:
  //     "Targeted interventions to stabilize operations and restore profitability.",
  //   features: [
  //     { icon: propertyImprovementIcon, text: "Property improvement planning" },
  //     {
  //       icon: trainingServiceIcon,
  //       text: "Training and service excellence programs",
  //     },
  //     {
  //       icon: operationalAuditIcon,
  //       text: "Operational audits and turnaround execution",
  //     },
  //   ],
  //   image: hotelRoomImage6,
  // },
  // {
  //   id: 7,
  //   title: "Hotel Marketing & Distribution",
  //   description:
  //     "Demand generation strategies focused on conversion, yield, and channel efficiency.",
  //   features: [
  //     {
  //       icon: distributionChannelIcon,
  //       text: "Distribution and channel optimization",
  //     },
  //     {
  //       icon: brandingSalesIcon,
  //       text: "Branding, sales, and revenue alignment",
  //     },
  //     { icon: seoIcon, text: "SEO-driven visibility and direct demand growth" },
  //   ],
  //   image: hotelRoomImage7,
  // },
  {
    id: 5,
    title: "AI driven hospitality infrastructure ",
    description:
      "Integrated AI solutions, developed with Vertize, to support guest experience, operational efficiency, and data-driven decision-making.",
    features: [
      { icon: aiPoweredIcon, text: "AI-powered guest experience" },
      {
        icon: experienceBuilderIcon,
        text: "Streamlined operational workflows",
      },
      { icon: dynamicExperienceIcon, text: "Intelligent booking & upselling" },
    ],
    image: hotelRoomImage8,
  },
];

// const partners = [
//   { name: "CloudCollective", logo: partnerLogo1 },
//   { name: "ParkHaus", logo: partnerLogo2 },
//   { name: "Interiologic", logo: partnerLogo3 },
//   { name: "PurpleAsia", logo: partnerLogo4 },
// ];

const benefits: { icon: LucideIcon; text: string }[] = [
  {
    icon: MoveUp,
    text: "Increase revenue and lower costs through operational discipline",
  },
  {
    icon: Lightbulb,
    text: "Improve efficiency with transparent systems and accountability",
  },
  {
    icon: DollarSign,
    text: "Build long-term asset value with owner-aligned management",
  },
];

export default function CoreHotelManagement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const { isReady } = useLocomotiveScroll();

  useEffect(() => {
    if (!isReady) return;

    const container = containerRef.current;
    const imageContainer = imageContainerRef.current;

    if (!container || !imageContainer) return;

    // Get the scroll container for Locomotive Scroll
    const scrollContainer = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLElement;

    // Set initial states - first image visible, rest hidden
    imageRefs.current.forEach((imgEl, index) => {
      if (imgEl) {
        gsap.set(imgEl, {
          opacity: index === 0 ? 1 : 0,
          scale: index === 0 ? 1 : 1.05,
        });
      }
    });

    // Pin the image container while scrolling through text
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: imageContainer,
      pinSpacing: false,
      scroller: scrollContainer || undefined,
    });

    // Create scroll triggers for each text section with single unified animation
    textRefs.current.forEach((textEl, index) => {
      if (!textEl) return;

      const imgEl = imageRefs.current[index];
      if (!imgEl) return;

      // Create scroll trigger that handles both fade in and fade out
      ScrollTrigger.create({
        trigger: textEl,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        scroller: scrollContainer || undefined,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.3) {
            // Fade in phase
            const fadeInProgress = progress / 0.3;
            gsap.set(imgEl, {
              opacity: fadeInProgress,
              scale: 1.05 - 0.05 * fadeInProgress,
            });
          } else if (progress < 0.7) {
            // Fully visible phase
            gsap.set(imgEl, {
              opacity: 1,
              scale: 1,
            });
          } else {
            // Fade out phase
            const fadeOutProgress = (progress - 0.7) / 0.3;
            gsap.set(imgEl, {
              opacity: 1 - fadeOutProgress,
              scale: 1 - 0.02 * fadeOutProgress,
            });
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isReady]);

  return (
    <section className="pt-25 bg-white">
      {/* Section Header */}
      <div className="text-center px-4 pb-16">
        <p className="mt-0 text-xs sm:text-[20px] tracking-[0.2em] text-[#969696] font-light uppercase mb-3">
          STRATEGY, OPERATIONS, AND PERFORMANCE
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-primary mb-4">
          Our Core Hotel Management and Advisory Services
        </h2>
        <p className="text-[#626262] text-sm sm:text-base md:text-[20px] font-[400] max-w-5xl mx-auto ">
          End-to-end support for hotel owners, from strategic advisory to full
          independent hotel management.
        </p>
      </div>

      {/* Scrolling Services Section */}
      <div ref={containerRef} className="relative min-h-screen">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content Area - Scrollable Text */}
            <div className="w-full lg:w-[840px] relative z-10 px-4 sm:px-6 md:px-8 lg:pl-[40px]">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="min-h-[80vh] lg:h-screen flex flex-col lg:items-center justify-center py-8 lg:py-0"
                >
                  {/* Inner content container */}
                  <div
                    ref={(el) => {
                      textRefs.current[index] = el;
                    }}
                    className="w-full max-w-[500px] lg:pr-4 bg-white"
                  >
                    {/* Service Number */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-400 text-sm mb-6">
                      {String(service.id).padStart(2, "0")}
                    </div>

                    {/* Divider Line */}
                    <div className="w-full h-px bg-gray-200 mb-8"></div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-primary text-sm sm:text-[20px] font-[400] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 ">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <img
                            src={feature.icon}
                            alt=""
                            className="w-5 h-5 object-contain"
                          />
                          <span className="text-sm text-primary sm:text-[20px] font-[300]">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Know More Button */}
                    <Link
                      to={`${serviceSlugs[index]}`}
                      className="h-[56px] text-[16px] font-normal inline-flex items-center justify-center gap-[8px] py-[16px] px-[36px] border border-primary text-primary text-[14px] font-medium rounded-[12px] hover:bg-primary hover:text-white transition-colors w-fit"
                    >
                      KNOW MORE
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
                    </Link>
                  </div>

                  {/* Mobile Image - Show below content on mobile */}
                  <div className=" lg:hidden w-full mt-8 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[400px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Image Area - Pinned with Fade - Desktop Only */}
            <div
              ref={imageContainerRef}
              className="hidden lg:flex w-[600px] h-screen items-center justify-end sticky top-0 "
            >
              <div className="relative w-full h-screen overflow-hidden">
                {services.map((service, index) => (
                  <img
                    key={service.id}
                    ref={(el) => {
                      imageRefs.current[index] = el;
                    }}
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out will-change-[opacity,transform]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary relative overflow-hidden">
        {/* Content Container - max 1440px centered */}
        <div className="max-w-[1440px] mx-auto relative px-4 sm:px-6 md:pl-8 md:pr-0 lg:pl-12 xl:pl-[100px]">
          <div className="flex flex-col lg:flex-row lg:h-[485px]">
            {/* Left Content - Centered in flex-col mode */}
            <div className="w-full lg:flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-8 lg:py-0 lg:pr-8">
              <h2 className="text-2xl sm:text-[32px] md:text-4xl font-normal text-white mb-6 lg:mb-8">
                How We Increase GOP and Asset Value
              </h2>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/90"
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base lg:text-lg text-left">
                        {benefit.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Request Consultation Button */}
              <button className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3   lg:mt-6 bg-secondary text-primary text-[16px] sm:text-[16px] lg:text-[20px] font-normal rounded-[8px] hover:bg-secondary/90 transition-colors w-fit">
                REQUEST CONSULTATION
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
              </button>
            </div>

            {/* Right Image - Full width edge-to-edge on mobile, squarish with padding on tablet, full height on desktop */}
            <div className="w-[calc(100%+2rem)] -ml-4 sm:w-full sm:ml-0 lg:w-[600px] flex-shrink-0 pt-6 sm:p-5 md:p-0 lg:p-0">
              <div className="w-full sm:w-[320px] sm:aspect-square md:w-[380px] md:aspect-square lg:aspect-auto lg:w-full lg:h-full sm:mx-auto lg:mx-0 sm:rounded-xl lg:rounded-none overflow-hidden">
                <img
                  src={gopImageHomeSection}
                  alt="Business consultation"
                  className="w-full aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tertiary background spacing */}
      <div className="h-[10px] bg-tertinary"></div>
    </section>
  );
}
