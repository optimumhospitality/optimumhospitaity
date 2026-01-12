import heroImage from "../../assets/image/team-page/team-hero-image/hero-image.webp";

export default function HeroSection() {
  return (
    <section className="relative h-[350px] sm:h-[450px] lg:h-[540px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Our Leadership Team"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        <div className="h-full flex flex-col justify-end pb-10 sm:pb-14 lg:pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Left Content */}
            <div>
              <h1 className="text-[56px] sm:text-3xl md:text-4xl lg:text-[56px] font-bold text-white mb-3 leading-tight">
                Our Leadership Team
              </h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-md lg:max-w-lg">
                Experienced hospitality professionals with deep regional
                knowledge and hands-on operational expertise.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
              <button className="inline-flex items-center text-[20px] gap-2 px-5 sm:px-6 py-3 bg-primary text-white text-sm sm:text-base font-normal rounded-lg hover:bg-primary/90 transition-all duration-300 group">
                Reserve Your Spot
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
