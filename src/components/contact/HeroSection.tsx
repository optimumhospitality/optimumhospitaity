import heroImageContact from "../../assets/image/contact-page/hero-image.webp";
import HeroSectionButton from "../common/button/HeroSectionButton";

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex items-end pb-10 sm:pb-14 lg:pb-[80px]"
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
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-end min-[500px]:justify-between gap-4 min-[500px]:gap-4 sm:gap-5 min-[750px]:gap-6 md:gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="max-w-full min-[500px]:flex-1">
            {/* Main Headline */}
            <h1 className="text-[24px] lg:text-[56px] font-bold text-white leading-[1.1] mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-6">
              Talk to Our Hospitality Experts
            </h1>

            {/* Subtext - 2 lines */}
            <p className="text-white/95 text-[16px] lg:text-[20px]">
              Get in touch to discuss how we can support your hotel or resort
              with
              <br className="hidden md:block" />
              management, advisory, or operational improvement.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="min-[500px]:flex-shrink-0 mt-2 min-[500px]:mt-0">
            <HeroSectionButton text="Let's chat" href="#contact-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
