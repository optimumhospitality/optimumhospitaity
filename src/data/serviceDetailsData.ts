// Import all service icons
import dynamicExperienceIcon from "../assets/image/home-page/coreHotelManagement/card-icon/dynamic-experience.webp";
import aiPoweredIcon from "../assets/image/home-page/coreHotelManagement/card-icon/ai-powered-experience.webp";
import experienceBuilderIcon from "../assets/image/home-page/coreHotelManagement/card-icon/experience-builder-icon.webp";
import gopCashFlowIcon from "../assets/image/home-page/coreHotelManagement/card-icon/gop-cash-flow-icon.webp";
import capitalPlanningIcon from "../assets/image/home-page/coreHotelManagement/card-icon/capital-planning-icon.webp";
import brandOperatorIcon from "../assets/image/home-page/coreHotelManagement/card-icon/brand-and-opeartor-icon.webp";
import technicalServicesIcon from "../assets/image/home-page/coreHotelManagement/card-icon/techical-services-icon.webp";
import budgetPlanningIcon from "../assets/image/home-page/coreHotelManagement/card-icon/budget-planning-icon.webp";
import preOpeningIcon from "../assets/image/home-page/coreHotelManagement/card-icon/pre-opening-icon.webp";
import feasibilityIcon from "../assets/image/home-page/coreHotelManagement/card-icon/feasiblity-icon.webp";
import conceptDevelopmentIcon from "../assets/image/home-page/coreHotelManagement/card-icon/concept-development-icon.webp";
import designOperationIcon from "../assets/image/home-page/coreHotelManagement/card-icon/design-operation-icon.webp";
import marketLedIcon from "../assets/image/home-page/coreHotelManagement/card-icon/market-led-icon.webp";
import menuEngineeringIcon from "../assets/image/home-page/coreHotelManagement/card-icon/menu-engineering-icon.webp";
import outletPerformanceIcon from "../assets/image/home-page/coreHotelManagement/card-icon/outlet-performance-icon.webp";
import propertyImprovementIcon from "../assets/image/home-page/coreHotelManagement/card-icon/property-improvement-icon.webp";
import trainingServiceIcon from "../assets/image/home-page/coreHotelManagement/card-icon/training-service-icon.webp";
import operationalAuditIcon from "../assets/image/home-page/coreHotelManagement/card-icon/operational-audit-icon.webp";
import distributionChannelIcon from "../assets/image/home-page/coreHotelManagement/card-icon/distribution-chanel-icon.webp";
import brandingSalesIcon from "../assets/image/home-page/coreHotelManagement/card-icon/branding-sales-icon.webp";
import seoIcon from "../assets/image/home-page/coreHotelManagement/card-icon/seo-icon.webp";

// Import hero images
import hotelRoomImage1 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage1.webp";
import hotelRoomImage2 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage2.webp";
import hotelRoomImage3 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage3.webp";
import hotelRoomImage4 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage4.webp";
import hotelRoomImage5 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage5.webp";
import hotelRoomImage6 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage6.webp";
import hotelRoomImage7 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage7.webp";
import vertizeImage from "../assets/image/home-page/coreHotelManagement/hotelRoomImage8.webp";

export interface ServiceFeaturePoint {
    icon: string;
    title: string;
    description: string;
}

export interface ServiceDetail {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    heroImage: string;
    heroDescription: string;
    featurePoints: ServiceFeaturePoint[];
    ctaBox: {
        heading: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    };
}

export const serviceDetailsData: ServiceDetail[] = [
    {
        id: 1,
        slug: "hotel-management",
        title: "Independent & Third-Party Hotel Management",
        subtitle: "White-label and third-party management focused on profitability, service quality, and operational discipline.",
        heroImage: hotelRoomImage1,
        heroDescription: "Full-service hotel management designed to maximize operational performance and owner returns.",
        featurePoints: [
            {
                icon: dynamicExperienceIcon,
                title: "Full Operational Control",
                description: "Complete day-to-day management of all hotel operations, from front office to back-of-house, ensuring consistent service standards and operational efficiency."
            },
            {
                icon: gopCashFlowIcon,
                title: "Revenue & Profit Optimization",
                description: "Strategic revenue management, cost control, and GOP optimization to maximize profitability while maintaining service quality."
            },
            {
                icon: aiPoweredIcon,
                title: "Quality Assurance Programs",
                description: "Rigorous quality control systems, guest satisfaction monitoring, and continuous improvement initiatives to maintain brand standards."
            },
            {
                icon: experienceBuilderIcon,
                title: "Team Development & Training",
                description: "Comprehensive staff training programs, leadership development, and performance management to build high-performing hotel teams."
            },
            {
                icon: brandOperatorIcon,
                title: "Brand Standards Compliance",
                description: "Ensuring adherence to brand guidelines, operational standards, and quality benchmarks across all touchpoints."
            },
            {
                icon: technicalServicesIcon,
                title: "Technology Integration",
                description: "Implementation and management of property management systems, booking engines, and operational technology to streamline operations."
            },
            {
                icon: budgetPlanningIcon,
                title: "Financial Planning & Reporting",
                description: "Monthly financial reporting, budget preparation, forecasting, and variance analysis to keep owners informed and in control."
            },
            {
                icon: capitalPlanningIcon,
                title: "Asset Maintenance & CapEx Planning",
                description: "Proactive property maintenance, capital expenditure planning, and asset preservation to protect long-term value."
            }
        ],
        ctaBox: {
            heading: "Ready to Optimize Your Hotel Operations?",
            description: "Let's discuss how our independent management approach can improve your hotel's performance and profitability.",
            buttonText: "Schedule a Consultation",
            buttonLink: "/contact"
        }
    },
    {
        id: 2,
        slug: "asset-management",
        title: "Asset Management & Owner Representation",
        subtitle: "Active asset oversight designed to protect value and improve financial performance.",
        heroImage: hotelRoomImage2,
        heroDescription: "Strategic asset management focused on maximizing returns and protecting owner interests.",
        featurePoints: [
            {
                icon: gopCashFlowIcon,
                title: "GOP & Cash Flow Optimization",
                description: "Continuous monitoring and improvement of gross operating profit and cash flow generation through strategic interventions and operational discipline."
            },
            {
                icon: capitalPlanningIcon,
                title: "Capital Planning & ROI Validation",
                description: "Strategic capital expenditure planning, investment prioritization, and ROI analysis to ensure every dollar spent drives value."
            },
            {
                icon: brandOperatorIcon,
                title: "Operator Performance Governance",
                description: "Active oversight of hotel operators and management companies, ensuring accountability, performance standards, and contract compliance."
            },
            {
                icon: budgetPlanningIcon,
                title: "Budget Review & Approval",
                description: "Detailed budget analysis, challenge, and approval processes to ensure realistic targets and optimal resource allocation."
            },
            {
                icon: operationalAuditIcon,
                title: "Monthly Performance Reviews",
                description: "Regular financial and operational performance reviews, variance analysis, and corrective action planning."
            },
            {
                icon: feasibilityIcon,
                title: "Strategic Repositioning",
                description: "Market analysis, competitive positioning, and strategic recommendations to maximize asset value and revenue potential."
            },
            {
                icon: technicalServicesIcon,
                title: "Contract Negotiation & Management",
                description: "Negotiation of management agreements, vendor contracts, and service agreements to protect owner interests and optimize terms."
            },
            {
                icon: propertyImprovementIcon,
                title: "Property Improvement Plans",
                description: "Development and oversight of property improvement initiatives, renovations, and repositioning projects to enhance competitiveness."
            }
        ],
        ctaBox: {
            heading: "Protect Your Hotel Investment",
            description: "Our asset management services ensure your hotel investment is actively managed for maximum returns and long-term value.",
            buttonText: "Discuss Asset Management",
            buttonLink: "/contact"
        }
    },
    {
        id: 3,
        slug: "project-development",
        title: "Project Development & Pre-Opening Services",
        subtitle: "De-risking hotel development through technical expertise and disciplined execution.",
        heroImage: hotelRoomImage3,
        heroDescription: "Comprehensive project management from concept to opening, ensuring on-time, on-budget delivery.",
        featurePoints: [
            {
                icon: technicalServicesIcon,
                title: "Technical Services & Design Reviews",
                description: "Expert review of architectural plans, MEP systems, and operational layouts to ensure functionality, efficiency, and guest experience."
            },
            {
                icon: budgetPlanningIcon,
                title: "Budget, Timeline & Scope Control",
                description: "Rigorous project management, cost control, and schedule monitoring to prevent overruns and ensure timely delivery."
            },
            {
                icon: preOpeningIcon,
                title: "Pre-Opening & Soft Opening Leadership",
                description: "Complete pre-opening management including recruitment, training, systems setup, and soft opening execution."
            },
            {
                icon: designOperationIcon,
                title: "Operational Design Consultation",
                description: "Input on operational flow, space planning, and design decisions to optimize efficiency and guest experience from day one."
            },
            {
                icon: feasibilityIcon,
                title: "FF&E Procurement & Installation",
                description: "Management of furniture, fixtures, and equipment procurement, quality control, and installation coordination."
            },
            {
                icon: trainingServiceIcon,
                title: "Staff Recruitment & Training",
                description: "Comprehensive recruitment strategies, onboarding programs, and pre-opening training to build a high-performing team."
            },
            {
                icon: technicalServicesIcon,
                title: "Systems Integration & Testing",
                description: "Implementation and testing of PMS, POS, and operational systems to ensure seamless operations from opening day."
            },
            {
                icon: brandOperatorIcon,
                title: "Brand Standards Implementation",
                description: "Ensuring all brand standards, operating procedures, and quality benchmarks are embedded before opening."
            }
        ],
        ctaBox: {
            heading: "Planning a New Hotel Project?",
            description: "Our development and pre-opening expertise ensures your project launches successfully, on time, and within budget.",
            buttonText: "Start Your Project",
            buttonLink: "/contact"
        }
    },
    {
        id: 4,
        slug: "hotel-consulting",
        title: "Hotel & Resort Consulting",
        subtitle: "Strategic advisory grounded in market data, feasibility, and financial logic.",
        heroImage: hotelRoomImage4,
        heroDescription: "Data-driven consulting services to guide strategic decisions and maximize hotel performance.",
        featurePoints: [
            {
                icon: feasibilityIcon,
                title: "Feasibility Studies & Market Analysis",
                description: "Comprehensive market research, demand analysis, and financial feasibility studies to validate investment decisions and development concepts."
            },
            {
                icon: conceptDevelopmentIcon,
                title: "Concept Development & Positioning",
                description: "Strategic concept development, brand positioning, and market differentiation strategies to maximize competitive advantage."
            },
            {
                icon: designOperationIcon,
                title: "Design & Operational Efficiency Review",
                description: "Expert review of design plans and operational layouts to optimize efficiency, reduce costs, and enhance guest experience."
            },
            {
                icon: capitalPlanningIcon,
                title: "Investment Strategy & ROI Modeling",
                description: "Financial modeling, investment analysis, and return projections to support informed decision-making."
            },
            {
                icon: brandOperatorIcon,
                title: "Operator Selection & Negotiation",
                description: "Strategic guidance on operator selection, contract negotiation, and deal structuring to secure optimal terms."
            },
            {
                icon: propertyImprovementIcon,
                title: "Repositioning & Renovation Strategy",
                description: "Strategic repositioning plans, renovation scoping, and investment prioritization to maximize asset value."
            },
            {
                icon: operationalAuditIcon,
                title: "Operational Audits & Diagnostics",
                description: "Comprehensive operational assessments, performance diagnostics, and improvement roadmaps."
            },
            {
                icon: gopCashFlowIcon,
                title: "Performance Improvement Plans",
                description: "Detailed action plans to improve operational performance, increase revenue, and reduce costs."
            }
        ],
        ctaBox: {
            heading: "Need Strategic Hotel Guidance?",
            description: "Our consulting services provide the insights and strategies you need to make confident decisions about your hotel investment.",
            buttonText: "Get Expert Advice",
            buttonLink: "/contact"
        }
    },
    {
        id: 5,
        slug: "fb-concept-curation",
        title: "Restaurant & Bar Concept Curation",
        subtitle: "Creative F&B concepts built to drive revenue and sustainable margins.",
        heroImage: hotelRoomImage5,
        heroDescription: "Innovative F&B concepts designed to maximize revenue, enhance guest experience, and drive profitability.",
        featurePoints: [
            {
                icon: marketLedIcon,
                title: "Market-Led Concept Positioning",
                description: "Market research, competitive analysis, and consumer insights to develop F&B concepts that resonate with target audiences."
            },
            {
                icon: menuEngineeringIcon,
                title: "Menu Engineering & Cost Control",
                description: "Strategic menu design, pricing optimization, and cost engineering to maximize profitability while maintaining quality."
            },
            {
                icon: outletPerformanceIcon,
                title: "Outlet Performance Optimization",
                description: "Revenue management, operational efficiency improvements, and service excellence programs to drive F&B performance."
            },
            {
                icon: conceptDevelopmentIcon,
                title: "Concept Design & Development",
                description: "Complete concept development from positioning and branding to interior design and operational planning."
            },
            {
                icon: designOperationIcon,
                title: "Kitchen & Service Design",
                description: "Functional kitchen layouts, service flow optimization, and equipment planning to ensure operational efficiency."
            },
            {
                icon: trainingServiceIcon,
                title: "Culinary Team Development",
                description: "Chef recruitment, team training, and culinary standards development to deliver exceptional food quality."
            },
            {
                icon: brandingSalesIcon,
                title: "F&B Marketing & Promotion",
                description: "Strategic marketing plans, promotional campaigns, and brand building to drive covers and revenue."
            },
            {
                icon: gopCashFlowIcon,
                title: "F&B Financial Management",
                description: "Budgeting, cost control, inventory management, and financial reporting to ensure sustainable profitability."
            }
        ],
        ctaBox: {
            heading: "Transform Your F&B Operations",
            description: "Let's create F&B concepts that drive revenue, delight guests, and deliver sustainable margins.",
            buttonText: "Explore F&B Solutions",
            buttonLink: "/contact"
        }
    },
    {
        id: 6,
        slug: "operational-support",
        title: "Operational Support & Performance Turnaround",
        subtitle: "Targeted interventions to stabilize operations and restore profitability.",
        heroImage: hotelRoomImage6,
        heroDescription: "Rapid response operational support to address performance challenges and drive turnaround.",
        featurePoints: [
            {
                icon: propertyImprovementIcon,
                title: "Property Improvement Planning",
                description: "Assessment of property condition, prioritization of improvements, and development of capital plans to enhance competitiveness."
            },
            {
                icon: trainingServiceIcon,
                title: "Training & Service Excellence Programs",
                description: "Intensive training programs, service recovery initiatives, and quality improvement plans to elevate guest satisfaction."
            },
            {
                icon: operationalAuditIcon,
                title: "Operational Audits & Turnaround Execution",
                description: "Comprehensive operational diagnostics, root cause analysis, and hands-on turnaround execution to restore performance."
            },
            {
                icon: gopCashFlowIcon,
                title: "Cost Reduction & Efficiency Gains",
                description: "Systematic cost analysis, waste elimination, and process optimization to improve margins without compromising quality."
            },
            {
                icon: budgetPlanningIcon,
                title: "Financial Restructuring & Controls",
                description: "Implementation of financial controls, budget discipline, and cash flow management to stabilize finances."
            },
            {
                icon: brandOperatorIcon,
                title: "Leadership & Team Restructuring",
                description: "Assessment of leadership capabilities, organizational restructuring, and talent optimization to build effective teams."
            },
            {
                icon: technicalServicesIcon,
                title: "Systems & Process Improvement",
                description: "Implementation of standard operating procedures, quality systems, and operational technology to drive consistency."
            },
            {
                icon: outletPerformanceIcon,
                title: "Revenue Recovery Initiatives",
                description: "Strategic pricing, distribution optimization, and sales initiatives to rebuild revenue and market share."
            }
        ],
        ctaBox: {
            heading: "Need Urgent Performance Improvement?",
            description: "Our turnaround specialists can quickly diagnose issues and implement solutions to restore your hotel's performance.",
            buttonText: "Request Turnaround Support",
            buttonLink: "/contact"
        }
    },
    {
        id: 7,
        slug: "hotel-marketing",
        title: "Hotel Marketing & Distribution",
        subtitle: "Demand generation strategies focused on conversion, yield, and channel efficiency.",
        heroImage: hotelRoomImage7,
        heroDescription: "Strategic marketing and distribution services to maximize visibility, drive bookings, and optimize revenue.",
        featurePoints: [
            {
                icon: distributionChannelIcon,
                title: "Distribution & Channel Optimization",
                description: "Strategic channel mix optimization, OTA management, and distribution cost reduction to maximize net revenue."
            },
            {
                icon: brandingSalesIcon,
                title: "Branding, Sales & Revenue Alignment",
                description: "Integrated marketing and sales strategies aligned with revenue goals to drive demand and maximize yield."
            },
            {
                icon: seoIcon,
                title: "SEO-Driven Visibility & Direct Demand Growth",
                description: "Search engine optimization, content marketing, and digital strategies to increase direct bookings and reduce dependency on OTAs."
            },
            {
                icon: aiPoweredIcon,
                title: "Digital Marketing & Social Media",
                description: "Targeted digital advertising, social media management, and influencer partnerships to build brand awareness and drive bookings."
            },
            {
                icon: gopCashFlowIcon,
                title: "Revenue Management & Pricing Strategy",
                description: "Dynamic pricing, yield management, and revenue optimization to maximize RevPAR and total revenue."
            },
            {
                icon: brandingSalesIcon,
                title: "Sales Team Development & CRM",
                description: "Sales training, CRM implementation, and lead management to improve conversion rates and customer relationships."
            },
            {
                icon: experienceBuilderIcon,
                title: "Content Creation & Brand Storytelling",
                description: "Professional photography, video production, and compelling content to showcase your property and attract guests."
            },
            {
                icon: outletPerformanceIcon,
                title: "Performance Analytics & Reporting",
                description: "Comprehensive marketing analytics, ROI tracking, and performance reporting to optimize marketing spend."
            }
        ],
        ctaBox: {
            heading: "Boost Your Hotel's Visibility & Bookings",
            description: "Our marketing and distribution strategies drive qualified demand, increase direct bookings, and maximize revenue.",
            buttonText: "Grow Your Revenue",
            buttonLink: "/contact"
        }
    },
    {
        id: 8,
        slug: "ai-hospitality",
        title: "AI-Enabled Hospitality, Engineered for Performance",
        subtitle: "Integrates advanced AI solutions into hotel operations across Southeast Asia.",
        heroImage: vertizeImage,
        heroDescription: "In partnership with Vertize, we bring cutting-edge AI technology to elevate guest experience and operational efficiency.",
        featurePoints: [
            {
                icon: aiPoweredIcon,
                title: "AI-Powered Guest Experience",
                description: "Intelligent guest interaction systems, personalized recommendations, and 24/7 AI concierge services to enhance guest satisfaction."
            },
            {
                icon: experienceBuilderIcon,
                title: "Streamlined Operational Workflows",
                description: "AI-driven automation of routine tasks, intelligent scheduling, and workflow optimization to improve staff productivity."
            },
            {
                icon: gopCashFlowIcon,
                title: "Improved Financial Performance",
                description: "AI-powered revenue management, predictive analytics, and cost optimization to maximize profitability."
            },
            {
                icon: dynamicExperienceIcon,
                title: "Intelligent Booking & Upselling",
                description: "AI-driven booking assistance, smart upselling recommendations, and personalized offers to increase revenue per guest."
            },
            {
                icon: technicalServicesIcon,
                title: "Seamless Technology Integration",
                description: "Integration with existing PMS, POS, and operational systems for unified data and seamless operations."
            },
            {
                icon: trainingServiceIcon,
                title: "Staff Training & AI Adoption",
                description: "Comprehensive training programs to ensure your team can effectively leverage AI tools and maximize their benefits."
            },
            {
                icon: brandOperatorIcon,
                title: "Multi-Language Support",
                description: "AI systems supporting multiple languages to serve diverse guest demographics across Southeast Asia."
            },
            {
                icon: outletPerformanceIcon,
                title: "Performance Analytics & Insights",
                description: "AI-powered analytics providing actionable insights on guest behavior, operational efficiency, and revenue opportunities."
            }
        ],
        ctaBox: {
            heading: "Ready to Transform with AI?",
            description: "Discover how AI-enabled hospitality can elevate your guest experience and drive operational excellence.",
            buttonText: "Explore AI Solutions",
            buttonLink: "/vertise-ai"
        }
    }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
    return serviceDetailsData.find(service => service.slug === slug);
};

// Helper function to get all service slugs (useful for routing)
export const getAllServiceSlugs = (): string[] => {
    return serviceDetailsData.map(service => service.slug);
};
