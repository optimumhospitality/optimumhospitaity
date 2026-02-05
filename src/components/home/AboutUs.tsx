import { useRef, useEffect } from "react";
import { useLocomotiveScroll } from "../LocomotiveScrollProvider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "../../assets/image/home-page/aboutUs/business-partners 1.webp";
import BookMyConsultation from "../common/button/BookMyConsulation";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { isReady } = useLocomotiveScroll();

  // GSAP scroll animations
  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      // Content fade up animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Image fade in with delay
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      ref={sectionRef}
      className="bg-tertinary py-10 min-[500px]:py-8 sm:py-10 min-[750px]:py-14 md:py-18 lg:py-25"
    >
      {/* Section Header */}
      <div className="text-center px-4 min-[500px]:px-3 sm:px-4">
        <h2 className="text-xl min-[500px]:text-lg sm:text-xl min-[750px]:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-medium text-primary mb-1.5 min-[500px]:mb-1 sm:mb-1.5 min-[750px]:mb-2">
          About us
        </h2>
        <p className="text-[#969696] text-[10px] min-[500px]:text-[8px] sm:text-[10px] min-[750px]:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-light tracking-[0.2em] uppercase">
          THE OPTIMUM STANDARD
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-[1440px] pt-4 min-[500px]:pt-3 sm:pt-4 min-[750px]:pt-5 md:pt-6 mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-[40px]">
        <div className="flex flex-col min-[500px]:flex-row gap-6 min-[500px]:gap-4 sm:gap-5 min-[750px]:gap-6 md:gap-8 lg:gap-[40px]">
          {/* Left Content Area */}
          <div className="flex-1 py-0 flex items-center">
            <div ref={contentRef} className="w-full">
              {/* Title */}
              <h3 className="text-xl min-[500px]:text-base sm:text-lg min-[750px]:text-xl md:text-2xl lg:text-[32px] font-[500] text-primary mb-4 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-6 leading-tight">
                We Build for Owners Who Measure Performance
              </h3>

              {/* First Paragraph */}
              <p className="text-[#000000] text-[14px] min-[500px]:text-[10px] sm:text-[12px] min-[750px]:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[300] leading-relaxed mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5">
                We help hotel owners increase profitability, protect asset
                value, and maintain full operational control. Optimum
                Hospitality is a bespoke hotel and advisory, asset manager, and
                independent hotel management company operating across South East
                Asia.
              </p>

              {/* Second Paragraph */}
              <p className="text-[#000000] text-[14px] min-[500px]:text-[10px] sm:text-[12px] min-[750px]:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[300] leading-relaxed mb-5 min-[500px]:mb-3 sm:mb-4 min-[750px]:mb-6 md:mb-8">
                From our bases in Ho Chi Minh City and Jakarta, we work with
                luxury and upper-scale hotels to improve margins, optimize
                operations, and unlock revenue, with particular strength in
                F&B-led assets. Independent by design, every decision we make is
                aligned with owner returns, not brand agendas.
              </p>

              {/* Quote with left border */}
              <div className="border-l-2 min-[500px]:border-l-2 sm:border-l-3 min-[750px]:border-l-4 border-primary pl-3 min-[500px]:pl-2 sm:pl-3 min-[750px]:pl-4 md:pl-5 mb-5 min-[500px]:mb-3 sm:mb-4 min-[750px]:mb-6 md:mb-8">
                <p className="text-primary font-[400] text-[12px] min-[500px]:text-[9px] sm:text-[11px] min-[750px]:text-[13px] md:text-[14px] lg:text-[16px] italic leading-relaxed">
                  We don't advise from a distance.
                </p>
                <p className="text-primary font-[400] text-[12px] min-[500px]:text-[9px] sm:text-[11px] min-[750px]:text-[13px] md:text-[14px] lg:text-[16px] italic leading-relaxed">
                  We take responsibility for results.
                </p>
              </div>

              {/* CTA Button */}
              <BookMyConsultation />
            </div>
          </div>

          {/* Right Image Area */}
          <div
            ref={imageRef}
            className="w-full min-[500px]:w-[40%] sm:w-[42%] min-[750px]:w-[45%] md:w-[45%] lg:w-[530px] min-[500px]:flex-shrink-0 h-[300px] min-[500px]:h-[200px] sm:h-[280px] min-[750px]:h-[360px] md:h-[450px] lg:h-[550px] xl:h-[653px] overflow-hidden"
          >
            <img
              src={aboutImage}
              alt="Business partners discussing"
              className="w-full h-full object-cover rounded-2xl min-[500px]:rounded-lg sm:rounded-xl min-[750px]:rounded-2xl md:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
