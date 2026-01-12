import { BadgeCheck } from "lucide-react";
import HeroBGVideo from "../../assets/image/home-page/hero-image/bg.webm";


export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-end pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          src={HeroBGVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay - gradient from left */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[40px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full md:w-[950px] h-auto md:h-[306px] pl-0 sm:pl-0 md:pl-0 lg:pl-0 pb-8 sm:pb-10 md:pb-12 lg:pb-0">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal text-white leading-tight tracking-[-0.02em] mb-4 sm:mb-5 md:mb-6">
              <span className="block">We Manage Your Hotel.</span>
              <span className="block">You Collect Higher Profits.</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl lg:font-[300]">
              Independent hotel management and advisory for owners in Southeast
              Asia who want operational excellence without complexity.
            </p>

            {/* Benefit Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-white/90">

                <BadgeCheck className="w-5.5 h-5.50" />
                {/* </div> */}
                <span className="text-xs sm:text-sm md:text-base">
                  Stronger GOP Optimisation
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90">

                <BadgeCheck className="w-5.5 h-5.50" />
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
