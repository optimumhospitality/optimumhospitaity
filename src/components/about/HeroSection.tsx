import heroImageAbout from "../../assets/image/aboutus-page/about-us-hero.webp";

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
            <a
              href="#contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white font-normal text-[20px] sm:text-base rounded-md hover:bg-primary/90 transition-all duration-300 group"
            >
              Schedule Your Consultation
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
