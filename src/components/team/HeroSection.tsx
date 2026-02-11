import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/image/team-page/team-hero-image/hero-image.webp";
import HeroSectionButton from "../common/button/HeroSectionButton";

export default function HeroSection() {
  const navigate=useNavigate();
  return (
    <section
      className="relative w-full flex items-end pb-10 sm:pb-14 lg:pb-[80px]"
      style={{ height: "540px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={heroImage}
          alt="Our Leadership Team"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-end min-[500px]:justify-between gap-4 min-[500px]:gap-4 sm:gap-5 min-[750px]:gap-6 md:gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="max-w-full min-[500px]:flex-1">
            {/* Main Headline */}
            <h1 className="text-[24px] lg:text-[56px] font-bold text-white leading-[1.1] mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-6">
              Our Leadership Team
            </h1>

            {/* Subtext */}
            <p className="text-white/95 text-[16px] lg:text-[20px]  max-w-full min-[500px]:max-w-[90%] sm:max-w-[85%] md:max-w-xl lg:max-w-2xl">
              Experienced hospitality professionals with deep regional knowledge
              and hands-on operational expertise.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="min-[500px]:flex-shrink-0 mt-2 min-[500px]:mt-0">
            <HeroSectionButton onClick={() => navigate("/contact#contact-form")} text="Reserve Your Spot" />
          </div>
        </div>
      </div>
    </section>
  );
}
