import heroImage from "../../assets/image/home-page/hero-image/heroImage.webp";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-end pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={heroImage}
          alt="Luxury hotel pool"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay - gradient from left */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[40px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full md:w-[950px] h-auto md:h-[306px] pl-4 sm:pl-6 md:pl-8 lg:pl-[40px] pb-8 sm:pb-10 md:pb-12 lg:pb-[60px]">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal text-white leading-tight tracking-[-0.02em] mb-4 sm:mb-5 md:mb-6">
              <span className="block">We Manage Your Hotel.</span>
              <span className="block">You Collect Higher Profits.</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              Independent hotel management and advisory for owners in Southeast
              Asia who want operational excellence without complexity.
            </p>

            {/* Benefit Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white/60 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm md:text-base">
                  Stronger GOP Optimisation
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white/60 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm md:text-base">
                  Guaranteed Higher Asset Value
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Button */}
          <div className="lg:flex-shrink-0 mt-4 sm:mt-0">
            <a
              href="#consultation"
              className="inline-flex text-[20px]  items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-primary text-white font-normal sm:text-sm md:text-base rounded hover:bg-primary/85 transition-all duration-300 group"
            >
              BOOK MY CONSULTATION
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
