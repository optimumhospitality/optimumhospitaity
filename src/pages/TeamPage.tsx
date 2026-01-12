import Footer from "../components/layout/Footer";
import HeroSection from "../components/team/HeroSection";
import TeamMembers from "../components/team/TeamMembers";

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TeamMembers />
      <Footer />
    </div>
  );
}
