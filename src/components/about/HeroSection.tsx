import heroImageAbout from "../../assets/image/aboutus-page/about-us-hero.webp";
import HeroSectionButton from "../common/button/HeroSectionButton";

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex items-end pb-[80px]"
      style={{ height: "540px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={heroImageAbout}
          alt="Luxury resort pool view"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          {/* Left Content */}
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] xl:text-[56px] font-bold text-white leading-[1.1] mb-4 sm:mb-5 md:mb-6">
              About Optimum Hospitality
            </h1>

            {/* Subtext */}
            <p className="text-white/95 text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed max-w-xl lg:max-w-2xl">
              A boutique hotel advisory and independent operator focused on
              performance, accountability, and owner returns.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="lg:flex-shrink-0 mt-4 lg:mt-0">
            <HeroSectionButton
              text="Schedule Your Consultation"
              href="#contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
