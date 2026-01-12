import Footer from "../components/layout/Footer";
import HeroSection from "../components/about/HeroSection";
import Consultant from "../components/about/Consultant";
// import Presence from "../components/about/Presence";
import Operate from "../components/about/Operate";
import ClientProjects from "../components/about/ClientProjects";
import OurJourney from "../components/about/OurJourney";
import Leadership from "../components/about/Leadership";
import Understanding from "../components/about/Understanding";


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Consultant />
      <OurJourney />
      <Leadership />
      <Understanding />
      {/* <Presence /> */}
      
      <ClientProjects />
      <Operate />
      <Footer />
    </div>
  );
}
