import heroImageContact from "../../assets/image/contact-page/hero-image.webp";
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
          src={heroImageContact}
          alt="Luxury hotel lobby"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        {/* Blur Overlay on Left */}
        <div className="absolute inset-y-0 left-0 w-1/2 backdrop-blur-[2px] bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          {/* Left Content */}
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] xl:text-[56px] font-[700] text-white leading-[1.1] mb-4 sm:mb-5 md:mb-6 whitespace-nowrap">
              Talk to Our Hospitality Experts
            </h1>

            {/* Subtext - 2 lines */}
            <p className="text-[#FFFFFF] font-normal text-sm sm:text-base md:text-[24px] xl:text-[24px] leading-relaxed">
              Get in touch to discuss how we can support your hotel or resort
              with
              <br className="hidden md:block" />
              management, advisory, or operational improvement.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="lg:flex-shrink-0 mt-4 lg:mt-0">
            <HeroSectionButton text="Contact Us" href="#contact-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
