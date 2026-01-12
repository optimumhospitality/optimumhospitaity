import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images
import hotelRoomImage1 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage1.webp";
import hotelRoomImage2 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage2.webp";
import hotelRoomImage3 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage3.webp";
import hotelRoomImage4 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage4.webp";
import hotelRoomImage5 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage5.webp";
import hotelRoomImage6 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage6.webp";
import hotelRoomImage7 from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage7.webp";

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
import feasibilityIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/feasiblity-icon.webp";
import conceptDevelopmentIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/concept-development-icon.webp";
import designOperationIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/design-operation-icon.webp";
import marketLedIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/market-led-icon.webp";
import menuEngineeringIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/menu-engineering-icon.webp";
import outletPerformanceIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/outlet-performance-icon.webp";
import propertyImprovementIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/property-improvement-icon.webp";
import trainingServiceIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/training-service-icon.webp";
import operationalAuditIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/operational-audit-icon.webp";
import distributionChannelIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/distribution-chanel-icon.webp";
import brandingSalesIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/branding-sales-icon.webp";
import seoIcon from "../../assets/image/home-page/coreHotelManagement/card-icon/seo-icon.webp";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  description: string;
  features: { icon: string; text: string }[];
  image: string;
}

import vertizeImage from "../../assets/image/home-page/coreHotelManagement/hotelRoomImage8.webp";
import iconGuest from "../../assets/image/home-page/coreHotelManagement/card-icon/guest-experienct.webp";
import iconWorkflow from "../../assets/image/home-page/coreHotelManagement/card-icon/streamline-workflow.webp";
import iconFinance from "../../assets/image/home-page/coreHotelManagement/card-icon/improve-financial-icon.webp";

// Service slug mapping (matches serviceDetailsData.ts)
const serviceSlugs = [
  "hotel-management",
  "asset-management",
  "project-development",
  "hotel-consulting",
  "fb-concept-curation",
  "operational-support",
  "hotel-marketing",
  "ai-hospitality",
];

const services: Service[] = [
  // ...existing code...
  {
    id: 1,
    title: "Independent & Third-Party Hotel Management",
    description:
      "White-label and third-party management focused on profitability, service quality, and operational discipline.",
    features: [
      { icon: dynamicExperienceIcon, text: "Dynamic experience builder" },
      { icon: aiPoweredIcon, text: "AI-powered experience curation" },
      { icon: experienceBuilderIcon, text: "Experience partner connectivity" },
    ],
    image: hotelRoomImage1,
  },
  {
    id: 2,
    title: "Asset Management & Owner Representation",
    description:
      "Active asset oversight designed to protect value and improve financial performance.",
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
    title: "Project Development & Pre-Opening Services",
    description:
      "De-risking hotel development through technical expertise and disciplined execution.",
    features: [
      {
        icon: technicalServicesIcon,
        text: "Technical services and design reviews",
      },
      { icon: budgetPlanningIcon, text: "Budget, timeline, and scope control" },
      { icon: preOpeningIcon, text: "Pre-opening and soft opening leadership" },
    ],
    image: hotelRoomImage3,
  },
  {
    id: 4,
    title: "Hotel & Resort Consulting",
    description:
      "Strategic advisory grounded in market data, feasibility, and financial logic.",
    features: [
      {
        icon: feasibilityIcon,
        text: "Feasibility studies and highest-use analysis",
      },
      {
        icon: conceptDevelopmentIcon,
        text: "Concept development and repositioning",
      },
      {
        icon: designOperationIcon,
        text: "Design and operational efficiency review",
      },
    ],
    image: hotelRoomImage4,
  },
  {
    id: 5,
    title: "Restaurant & Bar Concept Curation",
    description:
      "Creative F&B concepts built to drive revenue and sustainable margins.",
    features: [
      { icon: marketLedIcon, text: "Market-led concept positioning" },
      { icon: menuEngineeringIcon, text: "Menu engineering and cost control" },
      { icon: outletPerformanceIcon, text: "Outlet performance optimization" },
    ],
    image: hotelRoomImage5,
  },
  {
    id: 6,
    title: "Operational Support & Performance Turnaround",
    description:
      "Targeted interventions to stabilize operations and restore profitability.",
    features: [
      { icon: propertyImprovementIcon, text: "Property improvement planning" },
      {
        icon: trainingServiceIcon,
        text: "Training and service excellence programs",
      },
      {
        icon: operationalAuditIcon,
        text: "Operational audits and turnaround execution",
      },
    ],
    image: hotelRoomImage6,
  },
  {
    id: 7,
    title: "Hotel Marketing & Distribution",
    description:
      "Demand generation strategies focused on conversion, yield, and channel efficiency.",
    features: [
      {
        icon: distributionChannelIcon,
        text: "Distribution and channel optimization",
      },
      {
        icon: brandingSalesIcon,
        text: "Branding, sales, and revenue alignment",
      },
      { icon: seoIcon, text: "SEO-driven visibility and direct demand growth" },
    ],
    image: hotelRoomImage7,
  },
  {
    id: 8,
    title: "AI-Enabled Hospitality, Engineered for Performance",
    description:
      "Integrates advanced AI solutions into hotel operations across Southeast Asia.",
    features: [
      { icon: iconGuest, text: "Guest Experience" },
      { icon: iconWorkflow, text: "Streamline workflows" },
      { icon: iconFinance, text: "Improve financial performance" },
    ],
    image: vertizeImage,
  },
];

export default function CoreHotelManagement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const imageContainer = imageContainerRef.current;

    if (!container || !imageContainer) return;

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
    });

    // Create scroll triggers for each text section with single unified animation
    textRefs.current.forEach((textEl, index) => {
      if (!textEl) return;

      const imgEl = imageRefs.current[index];
      if (!imgEl) return;

      const isLastItem = index === services.length - 1;

      // ScrollTrigger that handles both fade in and fade out
      gsap.timeline({
        scrollTrigger: {
          trigger: textEl,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            if (progress < 0.3) {
              // Fade in phase
              const fadeInProgress = progress / 0.3;
              gsap.set(imgEl, {
                opacity: fadeInProgress,
                scale: 1.05 - 0.05 * fadeInProgress,
              });
            } else if (progress < 0.7 || isLastItem) {
              // Fully visible phase (stays visible for last item)
              gsap.set(imgEl, {
                opacity: 1,
                scale: 1,
              });
            } else {
              // Fade out phase (skip for last item)
              const fadeOutProgress = (progress - 0.7) / 0.3;
              gsap.set(imgEl, {
                opacity: 1 - fadeOutProgress,
                scale: 1 - 0.02 * fadeOutProgress,
              });
            }
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="pt-25 bg-tertinary">
      {/* Section Header */}
      <div className="text-center px-4 pb-16">
        <p className="mt-0 text-xs sm:text-[20px] tracking-[0.2em] text-[#969696] font-light uppercase mb-3">
          STRATEGY, OPERATIONS, AND PERFORMANCE
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-primary mb-4">
          Our Core Hotel Management and Advisory Services
        </h2>
        <p className="text-[#626262] text-sm sm:text-base md:text-[20px] font-[400] max-w-3xl mx-auto">
          From pre-opening to performance turnaround, from strategic asset
          oversight to day-to-day hotel management, these are the services we
          deliver across Southeast Asia.
        </p>
      </div>

      {/* Scrolling Services Section */}
      <div ref={containerRef} className="relative min-h-screen">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content Area - Scrollable Text */}
            <div className="w-full lg:w-1/2 relative z-10 px-4 sm:px-6 md:px-8 lg:pl-[40px]">
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
                    className="w-full max-w-[500px] lg:pr-4 bg-tertinary"
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
                    <ul className="space-y-3 mb-8">
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
                      to={`/services/${serviceSlugs[index]}`}
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
                  <div className="lg:hidden w-full mt-8 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[300px] sm:h-[400px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Image Area - Pinned with Fade - Desktop Only */}
            <div
              ref={imageContainerRef}
              className="hidden lg:flex w-1/2 h-screen items-center justify-center sticky top-0"
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
      <div className="pt-[360px]"></div>
    </section>
  );
}
