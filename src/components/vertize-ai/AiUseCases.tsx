export default function AiUseCases() {
    const useCases = [
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v18M3 9h18M3 15h18" />
                </svg>
            ),
            title: "Front Office",
            items: [
                "AI-powered reservation management system",
                "Automated check-in/check-out processes",
                "Intelligent room assignment and upselling",
                "24/7 multilingual guest support via voice AI"
            ]
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Management Intelligence",
            items: [
                "Real-time performance dashboards and KPIs",
                "Revenue optimisation and dynamic pricing",
                "Competitive intelligence and market analysis",
                "Forecasting and strategic planning tools"
            ]
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Housekeeping & Engineering",
            items: [
                "Predictive maintenance scheduling",
                "Optimised housekeeping task allocation",
                "Energy management and sustainability tracking",
                "Automated inventory and supply chain management"
            ]
        },
        {
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Guest Services",
            items: [
                "Digital concierge for recommendations and bookings",
                "Personalised guest experience orchestration",
                "Automated service request routing and tracking",
                "Sentiment analysis and proactive issue resolution"
            ]
        }
    ];

    return (
        <section className="bg-[#FFFDF8] py-16 md:py-20 lg:py-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium text-[#2A2E3C] mb-4">
                        AI Use Cases for Hotels & Resorts
                    </h2>
                    <p className="text-[#626262] text-base sm:text-lg md:text-[20px] max-w-3xl mx-auto">
                        AI Use Cases for Hotels & Resorts Smarter operations, better guest experiences, and measurable revenue growth powered by AI
                    </p>
                </div>

                {/* 2x2 Grid with Dividers */}
                <div className="relative">
                    {/* Vertical divider */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#D3D3D3]" />
                    {/* Horizontal divider */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-[#D3D3D3]" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {useCases.map((useCase, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`p-8 lg:p-12 border-b border-[#D3D3D3] lg:border-b-0 last:border-b-0 ${index % 2 === 0 ? "lg:w-full lg:max-w-[90%] lg:ml-auto" : ""}`}
                                >
                                    <div className="mb-6 text-[#2A2E3C]">
                                        {useCase.icon}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2A2E3C] mb-6">
                                        {useCase.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {useCase.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <svg
                                                    className="w-5 h-5 text-[#2A2E3C] flex-shrink-0 mt-0.5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-[#626262] text-base leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}