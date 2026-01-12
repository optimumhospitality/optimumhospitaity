import Footer from "../components/layout/Footer";
import HeroSection from "../components/contact/HeroSection";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
