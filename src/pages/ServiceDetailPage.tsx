import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/service-detail/HeroSection";
import ServiceDescription from "../components/service-detail/ServiceDescription";
import { getServiceBySlug } from "../data/serviceDetailsData";

export default function ServiceDetailPage() {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceSlug]);

    // Get service data by slug
    const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

    // If service not found, redirect to services page
    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="min-h-screen">
            <HeroSection
                title={service.title}
                subtitle={service.subtitle}
                heroImage={service.heroImage}
                description={service.heroDescription}
            />
            <ServiceDescription
                featurePoints={service.featurePoints}
                ctaBox={service.ctaBox}
            />
            <Footer />
        </div>
    );
}
