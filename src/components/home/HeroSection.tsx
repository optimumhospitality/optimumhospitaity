import { useRef, useEffect } from "react";
import { useLocomotiveScroll } from "../LocomotiveScrollProvider";
import { gsap } from "gsap";
import { BadgeCheck } from "lucide-react";
import HeroBGVideo from "../../assets/image/home-page/hero-image/bg.webm";
import HeroSectionButton from "../common/button/HeroSectionButton";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { isReady } = useLocomotiveScroll();

  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial state is set in CSS or via .from()
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          badgesRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-end pb-12 sm:pb-16 md:pb-20 lg:pb-24"
    >
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
            <h1
              ref={headlineRef}
              className="text-[32px] sm:text-[32px] md:text-5xl lg:text-[64px] font-normal text-white leading-tight tracking-[-0.02em] mb-4 sm:mb-5 md:mb-6"
            >
              <span className="block">We Manage Your Hotel.</span>
              <span className="block">You Collect Higher Profits.</span>
            </h1>

            {/* Subtext */}
            <p
              ref={subtextRef}
              className="text-white/90 text-[16px] sm:text-[16px] md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl lg:font-[300]"
            >
              Independent hotel management and advisory for owners in Southeast
              Asia who want operational excellence without complexity.
            </p>

            {/* Benefit Badges */}
            <div
              ref={badgesRef}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6"
            >
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
          <div ref={ctaRef} className="lg:flex-shrink-0 mt-4 sm:mt-0">
            <HeroSectionButton
              text="BOOK MY CONSULTATION"
              href="#consultation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
