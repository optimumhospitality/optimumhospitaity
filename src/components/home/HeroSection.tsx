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
      className="relative w-full flex items-end pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden"
      style={{
        minHeight: "100svh",
        height: "100svh",
      }}
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
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-12 xl:px-[40px]">
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-end min-[500px]:justify-between gap-4 min-[500px]:gap-4 sm:gap-6 min-[750px]:gap-8 md:gap-10 lg:gap-12">
          {/* Left Content */}
          <div className="w-full min-[500px]:flex-1 pb-4 min-[500px]:pb-0">
            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-[28px] min-[500px]:text-[20px] sm:text-[26px] min-[750px]:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[64px] font-normal text-white leading-tight tracking-[-0.02em] mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-6"
            >
              <span className="block">We Manage Your Hotel.</span>
              <span className="block">You Collect Higher Profits.</span>
            </h1>

            {/* Subtext */}
            <p
              ref={subtextRef}
              className="text-white/90 text-[14px] min-[500px]:text-[11px] sm:text-[13px] min-[750px]:text-[15px] md:text-[17px] lg:text-[19px] xl:text-xl leading-relaxed mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-6 max-w-full min-[500px]:max-w-[90%] sm:max-w-[85%] md:max-w-md lg:max-w-lg xl:max-w-xl lg:font-[300]"
            >
              Independent hotel management and advisory for owners in Southeast
              Asia who want operational excellence without complexity.
            </p>

            {/* Benefit Badges */}
            <div
              ref={badgesRef}
              className="flex flex-col min-[500px]:flex-row flex-wrap gap-2 min-[500px]:gap-2 sm:gap-3 min-[750px]:gap-4 md:gap-5 lg:gap-6"
            >
              <div className="flex items-center gap-1.5 min-[500px]:gap-1 sm:gap-1.5 min-[750px]:gap-2 text-white/90">
                <BadgeCheck className="w-4 h-4 min-[500px]:w-3.5 min-[500px]:h-3.5 sm:w-4 sm:h-4 min-[750px]:w-5 min-[750px]:h-5 md:w-5.5 md:h-5.5" />
                <span className="text-[12px] min-[500px]:text-[9px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base">
                  Stronger GOP Optimisation
                </span>
              </div>
              <div className="flex items-center gap-1.5 min-[500px]:gap-1 sm:gap-1.5 min-[750px]:gap-2 text-white/90">
                <BadgeCheck className="w-4 h-4 min-[500px]:w-3.5 min-[500px]:h-3.5 sm:w-4 sm:h-4 min-[750px]:w-5 min-[750px]:h-5 md:w-5.5 md:h-5.5" />
                <span className="text-[12px] min-[500px]:text-[9px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base">
                  Guaranteed Higher Asset Value
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Button */}
          <div
            ref={ctaRef}
            className="min-[500px]:flex-shrink-0 mt-2 min-[500px]:mt-0"
          >
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
