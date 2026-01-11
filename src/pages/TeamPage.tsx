import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/team/HeroSection";
import TeamMembers from "../components/team/TeamMembers";

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TeamMembers />
      <Footer />
    </div>
  );
}
