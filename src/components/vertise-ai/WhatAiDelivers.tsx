export default function WhatAiDelivers() {
    const deliveryItems = [
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Operational Efficiency",
            description:
                "Automate repetitive workflows, reduce manual intervention, and ensure operational consistency across departments with AI-driven task execution and monitoring.",
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
            title: "Guest Experience Enhancement",
            description:
                "Deliver instant, multilingual guest support through AI voice and digital concierge solutions, ensuring faster responses and personalised service at every touchpoint.",
        },
        {
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Financial Performance",
            description:
                "Unlock cost savings, improve ancillary revenue, and gain clearer insight into operational performance through real-time AI analytics and reporting.",
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
                    <h2 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium mb-6"
                        style={{
                            color: '#FFFDF8',
                            lineHeight: '100%',
                            letterSpacing: '0%'
                        }}
                    >
                        What AI Delivers for Hotel Owners
                    </h2>
                    <p 
                        className="text-base sm:text-lg md:text-[20px] max-w-4xl mx-auto"
                        style={{
                            color: '#D3D3D3',
                            fontWeight: '300',
                            lineHeight: '100%',
                            letterSpacing: '0%'
                        }}
                    >
                        AI is not about replacing people, but about supporting teams and improving operational consistency, handling inquiries, increasing upsells, revenue and profitability.
                    </p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {deliveryItems.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="text-left"
                            >
                                <div className="mb-6">
                                    <div className="text-white">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-white text-sm sm:text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}