// Import all service icons
import dynamicExperienceIcon from "../assets/image/home-page/coreHotelManagement/card-icon/dynamic-experience.webp";
// import aiPoweredIcon from "../assets/image/home-page/coreHotelManagement/card-icon/ai-powered-experience.webp";
// import experienceBuilderIcon from "../assets/image/home-page/coreHotelManagement/card-icon/experience-builder-icon.webp";
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
// import distributionChannelIcon from "../assets/image/home-page/coreHotelManagement/card-icon/distribution-chanel-icon.webp";
import brandingSalesIcon from "../assets/image/home-page/coreHotelManagement/card-icon/branding-sales-icon.webp";
// import seoIcon from "../assets/image/home-page/coreHotelManagement/card-icon/seo-icon.webp";

// Import hero images
import hotelRoomImage1 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage1.webp";
import hotelRoomImage2 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage2.webp";
import hotelRoomImage3 from "../assets/image/home-page/coreHotelManagement/upscale_group_photo.webp";
// import hotelRoomImage4 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage4.webp";
import hotelRoomImage5 from "../assets/image/home-page/coreHotelManagement/upscale_image_food.webp";
// import hotelRoomImage6 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage6.webp";
// import hotelRoomImage7 from "../assets/image/home-page/coreHotelManagement/hotelRoomImage7.webp";
// import vertizeImage from "../assets/image/home-page/coreHotelManagement/hotelRoomImage8.webp";

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
        problem: string;
        outcome: string;
        // heading: string;
        // description: string;
        buttonText: string;
        buttonLink: string;
    };
}

export const serviceDetailsData: ServiceDetail[] = [
    {
        id: 1,
        slug: "hotel-management",
        title: "Independent Hotel Management",
        subtitle: "White-label and third-party management focused on profitability, service quality, and operational discipline.",
        heroImage: hotelRoomImage1,
        heroDescription: "Full-service hotel management designed to maximize operational performance and owner returns.",
        featurePoints: [
            {
                icon: preOpeningIcon,
                title: "Pre-Opening Services",
                description: "For new builds, we provide comprehensive technical pre-opening services and set up your hotel for success."
            },
            {
                icon: conceptDevelopmentIcon,
                title: "Product Development",
                description: "Define positioning, guest segmentation, and the type and style of operation with special attention to creating compelling F&B outlets."
            },
            {
                icon: brandingSalesIcon,
                title: "Branding and Distribution",
                description: "We develop your brand and all the brand standards, or negotiate a franchise on your behalf, then create a digital footprint and online distribution system."
            },
            {
                icon: gopCashFlowIcon,
                title: "Hotel Operation / Management",
                description: "Like no-hidden-cost, flexible Hotel Management contracts for franchised and independent hotels, combined with our hands-on approach, deliver industry-leading gross operating profits (GOP)."
            },
            {
                icon: dynamicExperienceIcon,
                title: "Guest Satisfaction",
                description: "Hospitality is at the core of all that we do. We implement procedures and training structures that meet and exceed international standards."
            },
            {
                icon: budgetPlanningIcon,
                title: "Accountability & Cost Management",
                description: "We ensure a profitable operation with clear targets and accountabilities, focusing on both revenue generation and cost containment."
            },
            {
                icon: technicalServicesIcon,
                title: "Technology",
                description: "As an independent operator, our tech stack is flexible. We can partner with the latest and best new developments and are not forced to use a hotel chain's proprietary systems."
            },
            {
                icon: capitalPlanningIcon,
                title: "Asset Management",
                description: "We ensure that all assets are well-maintained and protected. We place high importance on preventative maintenance programs."
            }
        ],
        ctaBox: {
            problem: "High brand fees and rigid systems that prioritize franchisors over property profitability.",
            outcome: "Flexible, low-fee management that delivers superior GOP through owner-first operations.",
            buttonText: "Schedule a Consultation",
            buttonLink: "/contact"
        }
    },
    {
        id: 2,
        slug: "asset-management",
        title: "Asset Management and Owner Representation",
        subtitle: "Active asset oversight designed to protect value and improve financial performance.",
        heroImage: hotelRoomImage2,
        heroDescription: "Strategic asset management focused on maximizing returns and protecting owner interests.",
        featurePoints: [
            {
                icon: brandOperatorIcon,
                title: "Owner Representation",
                description: "We represent the owner on-site through constant and direct process, monitor forecasting and performance of hotel operators and franchisors alike, ensuring accountability."
            },
            {
                icon: budgetPlanningIcon,
                title: "Financial Monitoring",
                description: "We supervise the budget process, monitor forecasting, balance sheets, and daily business operations, and compare them with the market competitive set."
            },
            {
                icon: gopCashFlowIcon,
                title: "Revenue Management",
                description: "We optimize sales and marketing structures, establish through daily benchmarking, and ensure complete control over revenue streams."
            },
            {
                icon: operationalAuditIcon,
                title: "Operational Reviews",
                description: "We ensure that the owner's interests have a direct influence on project-level decisions and manage guest and staff satisfaction and key performance indicators (KPIs)."
            },
            {
                icon: capitalPlanningIcon,
                title: "Advise On Investment Strategies",
                description: "We optimize and evaluate the investment strategy, model cash flow, conduct asset improvement initiatives, and compare them with initial investment goals and valuations."
            },
            {
                icon: technicalServicesIcon,
                title: "Review & Advice On Contracts",
                description: "We review all third-party contracts on behalf of the owner and ensure that the owner's interest is always protected."
            },
            {
                icon: feasibilityIcon,
                title: "Franchise & Operator Affiliations",
                description: "We provide transparency and balance between owner and operator interests. We advise on initial brand selection and negotiate brand agreement."
            },
            {
                icon: propertyImprovementIcon,
                title: "Capital Expenditures & Control",
                description: "We establish clear rules and provide investment analysis on capital expenditures and project approvals to ensure a balanced approach between maintenance versus capital improvements."
            }
        ],
        ctaBox: {
            problem: "Limited visibility and difficulty holding operators accountable for performance.",
            outcome: "Active oversight that maximizes GOP and ensures operators meet commitments.",
            buttonText: "Discuss Asset Management",
            buttonLink: "/contact"
        }
    },
    {
        id: 3,
        slug: "project-development",
        title: "Hotel Advisory, Feasibility and Pre-Opening Support",
        subtitle: "De-risking hotel development through technical expertise and disciplined execution.",
        heroImage: hotelRoomImage3,
        heroDescription: "Comprehensive project management from concept to opening, ensuring on-time, on-budget delivery.",
        featurePoints: [
            {
                icon: feasibilityIcon,
                title: "Feasibility Studies",
                description: "Leveraging our AI tools, we provide unparalleled, rapid feasibility studies that equip owners' financial institutions with essential insights."
            },
            {
                icon: conceptDevelopmentIcon,
                title: "Hotel Project Development & Strategy",
                description: "We offer product conceptualization, review of project proposals, creation of a strategic planning roadmap, and support with contract negotiation."
            },
            {
                icon: brandOperatorIcon,
                title: "Management Company (Operator) Search & Selection",
                description: "We advise owners on the appropriate brand and model based on their investment strategy and assist in the selection and negotiation process."
            },
            {
                icon: designOperationIcon,
                title: "Design Review",
                description: "We collaborate closely with hotel proprietors, architects, and interior designers to achieve designs that blend aesthetic appeal with operational efficiency to their utmost potential."
            },
            {
                icon: technicalServicesIcon,
                title: "Technical and Pre-opening Services",
                description: "Critical Path set up, IT schematic assessments, manning guide, pre-opening budgeting, operating equipment needs, brand SOPs, manuals, testing, Etc. We ensure your hotel is fully prepared for the opening."
            },
            {
                icon: trainingServiceIcon,
                title: "Recruitment & Human Resources",
                description: "We consult owners on the appropriate organizational structure based on market and industry standards, support in the search for senior executives, and review candidates."
            },
            {
                icon: preOpeningIcon,
                title: "Soft Opening",
                description: "Once open, we remain in the project for some months to guide management staff, establish SOPs, fine-tune operations, address issues, and refine marketing strategies."
            },
            {
                icon: propertyImprovementIcon,
                title: "Audits and Property Improvement Plans (PIPs)",
                description: "We conduct comprehensive operation audits of existing assets, develop a future asset strategy, establish measurable targets for software and hardware improved performance, and analyze operational processes."
            }
        ],
        ctaBox: {
            problem: "Projects run over budget and behind schedule due to poor planning and coordination.",
            outcome: "On-time, on-budget openings with fully prepared operations from day one.",
            buttonText: "Start Your Project",
            buttonLink: "/contact"
        }
    },
    // {
    //     id: 4,
    //     slug: "hotel-consulting",
    //     title: "Hotel & Resort Consulting",
    //     subtitle: "Strategic advisory grounded in market data, feasibility, and financial logic.",
    //     heroImage: hotelRoomImage4,
    //     heroDescription: "Data-driven consulting services to guide strategic decisions and maximize hotel performance.",
    //     featurePoints: [
    //         {
    //             icon: feasibilityIcon,
    //             title: "Feasibility Studies",
    //             description: "Leveraging our AI tools, we provide unparalleled, rapid feasibility studies that equip owners' financial institutions with essential insights for informed decision-making."
    //         },
    //         {
    //             icon: conceptDevelopmentIcon,
    //             title: "Hotel Project Development & Strategy",
    //             description: "We offer product conceptualization, review of project proposals, creation of a strategic planning roadmap, and support with contract negotiation for resort and hotel developments."
    //         },
    //         {
    //             icon: brandOperatorIcon,
    //             title: "Management Company (Operator) Search & Selection",
    //             description: "We advise owners on the appropriate brand and model based on their investment strategy and assist in the selection and negotiation process."
    //         },
    //         {
    //             icon: designOperationIcon,
    //             title: "Design Review",
    //             description: "We collaborate closely with hotel proprietors, architects, and interior designers to achieve designs that blend aesthetic appeal with operational efficiency to their utmost potential."
    //         },
    //         {
    //             icon: technicalServicesIcon,
    //             title: "Technical and Pre-opening Services",
    //             description: "Critical Path set up, IT schematic assessments, manning guide, pre-opening budgeting, operating equipment needs, brand SOPs, manuals, testing. We ensure your resort is fully prepared for the opening."
    //         },
    //         {
    //             icon: trainingServiceIcon,
    //             title: "Recruitment & Human Resources",
    //             description: "We consult owners on the appropriate organizational structure based on market and industry standards, support in the search for senior executives, and review candidates."
    //         },
    //         {
    //             icon: preOpeningIcon,
    //             title: "Soft Opening",
    //             description: "Once open, we remain in the project for some months to guide management staff, establish SOPs, fine-tune operations, address issues, and refine marketing strategies."
    //         },
    //         {
    //             icon: propertyImprovementIcon,
    //             title: "Audits and Property Improvement Plans (PIPs)",
    //             description: "We conduct comprehensive reviews of existing assets, develop a future asset strategy, establish measurable targets for software and hardware improved performance, and analyze operational processes."
    //         }
    //     ],
    //     ctaBox: {
    //         problem: "Investment decisions made without reliable data lead to poor positioning and underperformance.",
    //         outcome: "Data-driven strategies that ensure market fit and realistic financial projections.",
    //         buttonText: "Get Expert Advice",
    //         buttonLink: "/contact"
    //     }
    // },
    {
        id: 5,
        slug: "fb-concept-curation",
        title: "Food and Beverage Strategy and Concept Development",
        subtitle: "Creative F&B concepts built to drive revenue and sustainable margins.",
        heroImage: hotelRoomImage5,
        heroDescription: "Innovative F&B concepts designed to maximize revenue, enhance guest experience, and drive profitability.",
        featurePoints: [
            {
                icon: conceptDevelopmentIcon,
                title: "Concept Development",
                description: "We conduct market research, propose concept ideas, create profit models, and business plans."
            },
            {
                icon: brandingSalesIcon,
                title: "Brand Development",
                description: "Far beyond a name and logo, we construct a brand, its story, and DNA, and develop the brand's presence and delivery."
            },
            {
                icon: designOperationIcon,
                title: "Build & Organise",
                description: "We work with ID and kitchen suppliers, create layouts and define operating equipment needs, and create the menu, drink lists, and pricing models."
            },
            {
                icon: menuEngineeringIcon,
                title: "Menu Engineering",
                description: "We create menus for maximum profits, distribute workload evenly, design recipes with precise yields, and ensure they can be executed by cost-effective staff."
            },
            {
                icon: marketLedIcon,
                title: "Craft Cocktail Program",
                description: "We are in touch with global trends, we create drink lists that sell, and we focus your team on execution and consistency."
            },
            {
                icon: trainingServiceIcon,
                title: "Training",
                description: "We integrate guiding principles and SOPs into a cohesive system. Your restaurant's service will be accolades."
            },
            {
                icon: outletPerformanceIcon,
                title: "Ongoing Support & Management",
                description: "We inspect systems and finances regularly. We provide guidance and coaching, spotting trouble before it festers into something the guest notices."
            },
            {
                icon: gopCashFlowIcon,
                title: "Franchise",
                description: "We negotiate favourable terms and streamline operations and then drive the franchisor to excel."
            }
        ],
        ctaBox: {
            problem: "F&B outlets underperform due to weak concepts and poor cost control.",
            outcome: "Profitable F&B with optimized menus and disciplined execution.",
            buttonText: "Explore F&B Solutions",
            buttonLink: "/contact"
        }
    },
    // {
    //     id: 6,
    //     slug: "operational-support",
    //     title: "Operational Support & Performance Turnaround",
    //     subtitle: "Targeted interventions to stabilize operations and restore profitability.",
    //     heroImage: hotelRoomImage6,
    //     heroDescription: "Rapid response operational support to address performance challenges and drive turnaround.",
    //     featurePoints: [
    //         {
    //             icon: propertyImprovementIcon,
    //             title: "Property Improvement Planning",
    //             description: "Assessment of property condition, prioritization of improvements, and development of capital plans to enhance competitiveness."
    //         },
    //         {
    //             icon: trainingServiceIcon,
    //             title: "Training & Service Excellence Programs",
    //             description: "Intensive training programs, service recovery initiatives, and quality improvement plans to elevate guest satisfaction."
    //         },
    //         {
    //             icon: operationalAuditIcon,
    //             title: "Operational Audits & Turnaround Execution",
    //             description: "Comprehensive operational diagnostics, root cause analysis, and hands-on turnaround execution to restore performance."
    //         },
    //         {
    //             icon: gopCashFlowIcon,
    //             title: "Cost Reduction & Efficiency Gains",
    //             description: "Systematic cost analysis, waste elimination, and process optimization to improve margins without compromising quality."
    //         },
    //         {
    //             icon: budgetPlanningIcon,
    //             title: "Financial Restructuring & Controls",
    //             description: "Implementation of financial controls, budget discipline, and cash flow management to stabilize finances."
    //         },
    //         {
    //             icon: brandOperatorIcon,
    //             title: "Leadership & Team Restructuring",
    //             description: "Assessment of leadership capabilities, organizational restructuring, and talent optimization to build effective teams."
    //         },
    //         {
    //             icon: technicalServicesIcon,
    //             title: "Systems & Process Improvement",
    //             description: "Implementation of standard operating procedures, quality systems, and operational technology to drive consistency."
    //         },
    //         {
    //             icon: outletPerformanceIcon,
    //             title: "Revenue Recovery Initiatives",
    //             description: "Strategic pricing, distribution optimization, and sales initiatives to rebuild revenue and market share."
    //         }
    //     ],
    //     ctaBox: {
    //         problem: "Operational inefficiencies and service issues drive declining profitability.",
    //         outcome: "Restored profitability through targeted interventions and staff training.",
    //         buttonText: "Request Turnaround Support",
    //         buttonLink: "/contact"
    //     }
    // },
    // {
    //     id: 7,
    //     slug: "hotel-marketing",
    //     title: "Hotel Marketing & Distribution",
    //     subtitle: "Demand generation strategies focused on conversion, yield, and channel efficiency.",
    //     heroImage: hotelRoomImage7,
    //     heroDescription: "Strategic marketing and distribution services to maximize visibility, drive bookings, and optimize revenue.",
    //     featurePoints: [
    //         {
    //             icon: distributionChannelIcon,
    //             title: "Distribution & Channel Optimization",
    //             description: "Strategic channel mix optimization, OTA management, and distribution cost reduction to maximize net revenue."
    //         },
    //         {
    //             icon: brandingSalesIcon,
    //             title: "Branding, Sales & Revenue Alignment",
    //             description: "Integrated marketing and sales strategies aligned with revenue goals to drive demand and maximize yield."
    //         },
    //         {
    //             icon: seoIcon,
    //             title: "SEO-Driven Visibility & Direct Demand Growth",
    //             description: "Search engine optimization, content marketing, and digital strategies to increase direct bookings and reduce dependency on OTAs."
    //         },
    //         {
    //             icon: aiPoweredIcon,
    //             title: "Digital Marketing & Social Media",
    //             description: "Targeted digital advertising, social media management, and influencer partnerships to build brand awareness and drive bookings."
    //         },
    //         {
    //             icon: gopCashFlowIcon,
    //             title: "Revenue Management & Pricing Strategy",
    //             description: "Dynamic pricing, yield management, and revenue optimization to maximize RevPAR and total revenue."
    //         },
    //         {
    //             icon: brandingSalesIcon,
    //             title: "Sales Team Development & CRM",
    //             description: "Sales training, CRM implementation, and lead management to improve conversion rates and customer relationships."
    //         },
    //         {
    //             icon: experienceBuilderIcon,
    //             title: "Content Creation & Brand Storytelling",
    //             description: "Professional photography, video production, and compelling content to showcase your property and attract guests."
    //         },
    //         {
    //             icon: outletPerformanceIcon,
    //             title: "Performance Analytics & Reporting",
    //             description: "Comprehensive marketing analytics, ROI tracking, and performance reporting to optimize marketing spend."
    //         }
    //     ],
    //     ctaBox: {
    //         problem: "Lost revenue to OTAs and low direct bookings due to weak distribution.",
    //         outcome: "Increased direct bookings and revenue through optimized distribution.",
    //         buttonText: "Grow Your Revenue",
    //         buttonLink: "/contact"
    //     }
    // },
    // {
    //     id: 8,
    //     slug: "ai-hospitality",
    //     title: "AI-Enabled Hospitality, Engineered for Performance",
    //     subtitle: "Integrates advanced AI solutions into hotel operations across Southeast Asia.",
    //     heroImage: vertizeImage,
    //     heroDescription: "In partnership with Vertize, we bring cutting-edge AI technology to elevate guest experience and operational efficiency.",
    //     featurePoints: [
    //         {
    //             icon: aiPoweredIcon,
    //             title: "AI-Powered Guest Experience",
    //             description: "Intelligent guest interaction systems, personalized recommendations, and 24/7 AI concierge services to enhance guest satisfaction."
    //         },
    //         {
    //             icon: experienceBuilderIcon,
    //             title: "Streamlined Operational Workflows",
    //             description: "AI-driven automation of routine tasks, intelligent scheduling, and workflow optimization to improve staff productivity."
    //         },
    //         {
    //             icon: gopCashFlowIcon,
    //             title: "Improved Financial Performance",
    //             description: "AI-powered revenue management, predictive analytics, and cost optimization to maximize profitability."
    //         },
    //         {
    //             icon: dynamicExperienceIcon,
    //             title: "Intelligent Booking & Upselling",
    //             description: "AI-driven booking assistance, smart upselling recommendations, and personalized offers to increase revenue per guest."
    //         },
    //         {
    //             icon: technicalServicesIcon,
    //             title: "Seamless Technology Integration",
    //             description: "Integration with existing PMS, POS, and operational systems for unified data and seamless operations."
    //         },
    //         {
    //             icon: trainingServiceIcon,
    //             title: "Staff Training & AI Adoption",
    //             description: "Comprehensive training programs to ensure your team can effectively leverage AI tools and maximize their benefits."
    //         },
    //         {
    //             icon: brandOperatorIcon,
    //             title: "Multi-Language Support",
    //             description: "AI systems supporting multiple languages to serve diverse guest demographics across Southeast Asia."
    //         },
    //         {
    //             icon: outletPerformanceIcon,
    //             title: "Performance Analytics & Insights",
    //             description: "AI-powered analytics providing actionable insights on guest behavior, operational efficiency, and revenue opportunities."
    //         }
    //     ],
    //     ctaBox: {
    //         heading: "Ready to Transform with AI?",
    //         description: "Discover how AI-enabled hospitality can elevate your guest experience and drive operational excellence.",
    //         buttonText: "Explore AI Solutions",
    //         buttonLink: "/vertize-ai"
    //     }
    // }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
    return serviceDetailsData.find(service => service.slug === slug);
};

// Helper function to get all service slugs (useful for routing)
export const getAllServiceSlugs = (): string[] => {
    return serviceDetailsData.map(service => service.slug);
};
