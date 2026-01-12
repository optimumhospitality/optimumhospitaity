import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/vertize-ai/HeroSection";
import WhyItMatters from "../components/vertize-ai/WhyItMatters";
import WhatAiDelivers from "../components/vertize-ai/WhatAiDelivers";
import AiUseCases from "../components/vertize-ai/AiUseCases";
import WhyOptimumVertize from "../components/vertize-ai/WhyOptimumVertize";
import IntegrationApproach from "../components/vertize-ai/IntegrationApproach";
import NotAChatbot from "../components/vertize-ai/NotAChatbot";
import Partnership from "../components/vertize-ai/Partnership";
import FAQSection from "../components/vertize-ai/FAQSection";

export default function VertizeAiPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <WhyItMatters />
            <WhatAiDelivers />
            <AiUseCases />
            <WhyOptimumVertize />
            <IntegrationApproach />
            <NotAChatbot />
            <Partnership />
            <FAQSection />
            <Footer />
        </div>
    );
}
