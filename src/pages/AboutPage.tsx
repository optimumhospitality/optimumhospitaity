import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/about/HeroSection";
import Consultant from "../components/about/Consultant";
import Presence from "../components/about/Presence";
import Operate from "../components/about/Operate";
import ClientProjects from "../components/about/ClientProjects";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Consultant />
      <Presence />
      <Operate />
      <ClientProjects />
      <Footer />
    </div>
  );
}
