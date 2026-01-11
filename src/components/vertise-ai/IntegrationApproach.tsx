export default function IntegrationApproach() {
    const approaches = [
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
            ),
            title: "Diagnostic & Opportunity Mapping",
            description:
                "We analyses existing workflows, guest journeys, and operational bottlenecks to identify where AI delivers the highest impact.",
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            ),
            title: "Tailored AI Blueprint",
            description:
                "We analyses existing workflows, guest journeys, and operational bottlenecks to identify where AI delivers the highest impact.",
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            ),
            title: "Implementation & Enablement",
            description:
                "We analyses existing workflows, guest journeys, and operational bottlenecks to identify where AI delivers the highest impact.",
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: "Optimization & Performance Tracking",
            description:
                "We analyses existing workflows, guest journeys, and operational bottlenecks to identify where AI delivers the highest impact.",
        },
    ];

    return (
        <section 
            className="py-16 md:py-20 lg:py-24"
            style={{
                background: 'linear-gradient(180deg, #23283C 0%, #2A2E3C 100%)'
            }}
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium text-white mb-6 leading-tight">
                        Our AI Integration Approach
                    </h2>
                    <p className="text-[#C8C8C8] text-base sm:text-lg md:text-[20px] max-w-4xl mx-auto font-light">
                        A structured, practical process to design, implement, and optimise AI solutions within existing hotel operations.
                    </p>
                </div>

                {/* 2x2 Grid Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {approaches.map((approach, index) => {
                        return (
                            <div
                                key={index}
                                className="p-8 lg:p-10 rounded-xl"
                                style={{
                                    background: '#26324E',
                                    border: '1.08px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '12.96px'
                                }}
                            >
                                <div className="mb-6 text-white">
                                    {approach.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                                    {approach.title}
                                </h3>
                                <p className="text-[#D1D1D1] text-base leading-relaxed">
                                    {approach.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}