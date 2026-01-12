import { useState } from 'react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Will AI replace our staff or reduce human touch?",
            answer: "Hotels don't win because of automation alone. They win because of how guests feel. AI's role is to take pressure off your team, not remove the human connection that defines great hospitality."
        },
        {
            question: "Do we have time for another project?",
            answer: "Implementation is designed to integrate seamlessly with your existing operations without disrupting day-to-day activities. Our phased approach ensures minimal time commitment from your team while delivering maximum value."
        },
        {
            question: "We already use several AI tools — why Vertize?",
            answer: "While many hotels use various AI tools, Vertize offers a comprehensive, hospitality-specific platform that integrates all AI capabilities into one unified system, eliminating the need to manage multiple vendors and ensuring seamless communication across all touchpoints."
        },
        {
            question: "What about data privacy and compliance?",
            answer: "Data security and compliance are our top priorities. We adhere to all international data protection regulations including GDPR, and implement enterprise-grade security measures to ensure your guest data remains protected and compliant with industry standards."
        }
    ];

    const toggleFAQ = (index: number) => {
        // If clicking the same one, close it. Otherwise, open the new one (closes previous automatically)
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#FFFDF8] py-16 md:py-20 lg:py-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#2A2E3C] mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="max-w-5xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="overflow-hidden transition-all duration-300"
                                style={{
                                    background: isOpen ? '#23283C' : 'transparent',
                                    border: isOpen ? '1.68px solid #FFFFFF4D' : '1.68px solid #23283C',
                                    borderRadius: '16.8px'
                                }}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left"
                                >
                                    <h3 className={`text-lg sm:text-xl md:text-2xl font-[400] pr-4 ${isOpen ? 'text-white' : 'text-[#2A2E3C]'
                                        }`}>
                                        {faq.question}
                                    </h3>
                                    <svg
                                        className={`w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-[#2A2E3C]'
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="grid transition-all duration-500 ease-in-out"
                                    style={{
                                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                                        opacity: isOpen ? 1 : 0
                                    }}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 sm:px-8 pb-6">
                                            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}