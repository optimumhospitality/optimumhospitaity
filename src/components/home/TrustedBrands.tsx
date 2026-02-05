import { useState, useEffect, useCallback, useRef } from "react";
import { useLocomotiveScroll } from "../LocomotiveScrollProvider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import astonLogo from "../../assets/image/home-page/hotel-icon/aston.webp";
import radissonLogo from "../../assets/image/home-page/hotel-icon/radisson-logo.webp";

gsap.registerPlugin(ScrollTrigger);
import accorLogo from "../../assets/image/home-page/hotel-icon/accor-logo.webp";
import wyndhamLogo from "../../assets/image/home-page/hotel-icon/wyndham-logo.webp";
import sheratonLogo from "../../assets/image/home-page/hotel-icon/sheraton-logo.webp";
import dusitLogo from "../../assets/image/home-page/hotel-icon/dusit-log.webp";
import shangrilaLogo from "../../assets/image/home-page/hotel-icon/shangri-logo.webp";
import caravelleLogo from "../../assets/image/home-page/hotel-icon/caravelle-logo.webp";
import marriottLogo from "../../assets/image/home-page/hotel-icon/marriotte-logo.webp";
import theAnamLogo from "../../assets/image/home-page/hotel-icon/the-anam-logo.webp";
import theAlmaLogo from "../../assets/image/home-page/hotel-icon/alma.webp";
import theAngsanaLogo from "../../assets/image/home-page/hotel-icon/angsana.webp";

const brands = [
  { name: "ASTON", logo: astonLogo },
  { name: "Radisson Hotels", logo: radissonLogo },
  { name: "Accor", logo: accorLogo },
  { name: "Wyndham", logo: wyndhamLogo },
  { name: "Sheraton", logo: sheratonLogo },
  { name: "Dusit", logo: dusitLogo },
  { name: "Shangri-La", logo: shangrilaLogo },
  { name: "Caravelle", logo: caravelleLogo },
  { name: "Marriott", logo: marriottLogo },
  { name: "The Anam", logo: theAnamLogo },
  { name: "The Alma", logo: theAlmaLogo },
  { name: "The Angsana", logo: theAngsanaLogo },
];

// Split brands into two rows for the slider
const row1Brands = brands.slice(0, 6);
const row2Brands = brands.slice(6, 12);

export default function TrustedBrands() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  // For mobile: show brands in groups
  const totalSlides = Math.ceil(brands.length / 2);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // GSAP scroll animations
  const { isReady } = useLocomotiveScroll();
  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      // Header fade up animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Logos fade in with stagger
      if (logosRef.current) {
        const logoItems = logosRef.current.querySelectorAll(".logo-item");
        gsap.fromTo(
          logoItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: logosRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      ref={sectionRef}
      className="bg-primary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dark Navy Header Bar */}
      <div ref={headerRef} className="py-6 sm:py-8 md:py-10 lg:py-12">
        <p className="text-center text-[#F7EFE3] text-[16px] sm:text-[16px] md:text-base lg:text-[24px] font-normal tracking-wide px-4">
          Trusted by global hospitality brands and independent owners
        </p>
      </div>

      {/* Logos Section */}
      <div className="pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20">
        <div
          ref={logosRef}
          className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]"
        >
          {/* Desktop View - Two Rows Grid */}
          <div className="hidden md:block">
            {/* Row 1 - 6 logos */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center mb-8 lg:mb-10 xl:mb-12">
              {row1Brands.map((brand) => (
                <div
                  key={brand.name}
                  className="logo-item flex items-center justify-center h-12 lg:h-14 xl:h-16 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-7 md:h-8 lg:h-9 xl:h-10 max-w-[120px] lg:max-w-[140px] xl:max-w-[160px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
            {/* Row 2 - 6 logos */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
              {row2Brands.map((brand) => (
                <div
                  key={brand.name}
                  className="logo-item flex items-center justify-center h-12 lg:h-14 xl:h-16 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-7 md:h-8 lg:h-9 xl:h-10 max-w-[120px] lg:max-w-[140px] xl:max-w-[160px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View - Sliding Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                      {brands
                        .slice(slideIndex * 2, slideIndex * 2 + 2)
                        .map((brand) => (
                          <div
                            key={brand.name}
                            className="flex items-center justify-center py-4"
                          >
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              className="h-10 sm:h-12 w-auto object-contain opacity-70 brightness-0 invert"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-6"
                      : "bg-white/40 hover:bg-white/60 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
