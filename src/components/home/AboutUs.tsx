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
    <section ref={sectionRef} className="bg-tertinary  py-15 sm:py-15 lg:py-25">
      {/* Section Header */}
      <div className="text-center  px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-primary mb-2">
          About us
        </h2>
        <p className="text-[#969696] text-xs sm:text-[20px] font-light tracking-[0.2em] uppercase">
          THE OPTIMUM STANDARD
        </p>
      </div>

      {/* Content Section - 1440 × 798 */}
      <div className="max-w-[1440px] pt-6 mx-auto pl-4 sm:pl-6 md:pl-8 lg:pl-[40px] pr-4 sm:pr-6 md:pr-8 lg:pr-[40px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px]">
          {/* Left Content Area */}
          <div className="flex-1 py-0 lg:py-0 flex items-center">
            <div ref={contentRef} className="w-full">
              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-[500] text-primary mb-6 leading-tight">
                We Build for Owners Who Measure Performance
              </h3>

              {/* First Paragraph */}
              <p className="text-[#000000] text-[14px] sm:text-[14px] md:text-xl lg:text-[20px] font-[300] leading-relaxed mb-5">
                We help hotel owners increase profitability, protect asset
                value, and maintain full operational control. Optimum
                Hospitality is a boutique hotel consultancy, asset manager, and
                independent hotel management company operating across Southeast
                Asia.
              </p>

              {/* Second Paragraph */}
              <p className="text-[#000000] text-[14px] sm:text-[14px] md:text-xl lg:text-[20px] font-[300] leading-relaxed mb-8">
                From our bases in Ho Chi Minh City and Jakarta, we work with
                luxury and upper-scale hotels to improve margins, optimize
                operations, and unlock revenue, with particular strength in
                F&B-led assets. Independent by design, every decision we make is
                aligned with owner returns, not brand agendas.
              </p>

              {/* Quote with left border */}
              <div className="border-l-4 border-primary pl-5 mb-8">
                <p className="text-primary  font-[400] text-16 sm:text-[16px] italic leading-relaxed italic">
                  We don't advise from a distance.
                </p>
                <p className="text-primary  font-[400] text-16 sm:text-[16px] italic leading-relaxed italic">
                  We take responsibility for results.
                </p>
              </div>

              {/* CTA Button */}
              <BookMyConsultation />
            </div>
          </div>

          {/* Right Image Area - 530 × 653 */}
          <div
            ref={imageRef}
            className="w-full lg:w-[530px] lg:flex-shrink-0 h-[400px] sm:h-[500px] lg:h-[653px] overflow-hidden"
          >
            <img
              src={aboutImage}
              alt="Business partners discussing"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* <div className="pb-1  bg-tertinary"></div> */}
    </section>
  );
}
