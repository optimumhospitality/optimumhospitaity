import HeroSection from "../components/home/HeroSection";
import TrustedBrands from "../components/home/TrustedBrands";
import WhatWeDo from "../components/home/WhatWeDo";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import HotelCaseStudy from "../components/home/HotelCaseStudy";
import CoreHotelManagement from "../components/home/CoreHotelManagement";
import AboutUs from "../components/home/AboutUs";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TrustedBrands />
      <WhatWeDo />
      <StatsSection />
      <TestimonialsSection />
      <CoreHotelManagement />
      <HotelCaseStudy />
      <AboutUs />
      <Footer />
    </main>
  );
}
