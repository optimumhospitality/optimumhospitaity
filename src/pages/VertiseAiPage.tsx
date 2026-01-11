import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/vertise-ai/HeroSection";
import WhyItMatters from "../components/vertise-ai/WhyItMatters";
import WhatAiDelivers from "../components/vertise-ai/WhatAiDelivers";
import AiUseCases from "../components/vertise-ai/AiUseCases";
import WhyOptimumVertise from "../components/vertise-ai/WhyOptimumVertise";
import IntegrationApproach from "../components/vertise-ai/IntegrationApproach";
import NotAChatbot from "../components/vertise-ai/NotAChatbot";
import Partnership from "../components/vertise-ai/Partnership";
import FAQSection from "../components/vertise-ai/FAQSection";

export default function VertiseAiPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <WhyItMatters />
            <WhatAiDelivers />
            <AiUseCases />
            <WhyOptimumVertise />
            <IntegrationApproach />
            <NotAChatbot />
            <Partnership />
            <FAQSection />
            <Footer />
        </div>
    );
}
