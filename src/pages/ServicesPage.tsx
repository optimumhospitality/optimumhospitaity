import Footer from "../components/layout/Footer";
import HeroSection from "../components/services/HeroSection";
import CoreHotelManagement from "../components/services/CoreHotelManagement";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoreHotelManagement />
      <Footer />
    </div>
  );
}
