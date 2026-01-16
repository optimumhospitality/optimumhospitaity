import { useState, useEffect, useCallback, useRef } from "react";
import smilingMan from "../../assets/image/home-page/testimonial/smilling-man.webp";

interface Testimonial {
  id: number;
  quote: string;
  title: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: `"Optimum Hospitality brought clarity, discipline. Within the first year, we saw a material improvement in GOP, stronger F&B performance, and better cost control across the asset. Their independent, owner-first approach made a tangible difference "`,
    title: "Hotel Owner & Asset Partner",
    location: "Malaysia",
    image: smilingMan,
  },
  {
    id: 2,
    quote: `"The team at Optimum Hospitality transformed our hotel operations. Their data-driven approach and deep industry expertise helped us achieve remarkable improvements in both revenue and guest satisfaction scores."`,
    title: "Resort General Manager",
    location: "Thailand",
    image: smilingMan,
  },
  {
    id: 3,
    quote: `"Working with Optimum Hospitality has been a game-changer for our property. Their hands-on management style and commitment to excellence have exceeded our expectations in every way."`,
    title: "Property Owner",
    location: "Vietnam",
    image: smilingMan,
  },
  {
    id: 4,
    quote: `"The transparency and regular reporting from Optimum Hospitality gave us complete visibility into our hotel's performance. Their strategic recommendations have driven significant value appreciation."`,
    title: "Investment Director",
    location: "Singapore",
    image: smilingMan,
  },
];

// Card dimensions
const CARD_WIDTH = 983;
// const CARD_HEIGHT = 474;
const CARD_GAP = 24;
const MOBILE_CARD_GAP = 40; // Larger gap for mobile

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isUserScrolling = useRef(false);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    scrollToCard(index);
  };

  const scrollToCard = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerWidth = container.offsetWidth;
    const isMobile = containerWidth < 500;
    // Mobile: fixed card width ~280px (increased for better content fit), larger: 70vw
    const cardWidth = isMobile
      ? 280
      : Math.min(CARD_WIDTH, containerWidth * 0.7);
    const gap = isMobile ? MOBILE_CARD_GAP : CARD_GAP;
    const cardTotalWidth = cardWidth + gap;

    // Initial padding centers the first card
    const initialPadding = (containerWidth - cardWidth) / 2;

    // Card's left edge position within scroll content
    const cardLeftPosition = initialPadding + index * cardTotalWidth;

    // To center: scroll so card is centered in viewport
    const targetScroll = cardLeftPosition - initialPadding;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  }, []);

  // Reset auto-scroll timer
  const resetAutoScroll = useCallback(() => {
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
    }
    autoScrollTimerRef.current = setTimeout(() => {
      if (!isUserScrolling.current) {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        setCurrentIndex(nextIndex);
        scrollToCard(nextIndex);
      }
    }, 3000);
  }, [currentIndex, scrollToCard]);

  // Handle scroll event to detect current card
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const width = container.offsetWidth;
    const isMobile = width < 500;
    // Mobile: fixed card width ~280px (increased for better content fit), larger: 70vw
    const cardWidth = isMobile ? 280 : Math.min(CARD_WIDTH, width * 0.7);
    const gap = isMobile ? MOBILE_CARD_GAP : CARD_GAP;
    const cardTotalWidth = cardWidth + gap;
    const scrollLeft = container.scrollLeft;

    // Calculate max scroll
    const maxScroll = container.scrollWidth - container.clientWidth;

    // Update scroll position state for card styling
    setScrollPosition(scrollLeft);
    setContainerWidth(width);

    // If we're near the end of scroll, show last card
    if (scrollLeft >= maxScroll - 50) {
      if (currentIndex !== testimonials.length - 1) {
        setCurrentIndex(testimonials.length - 1);
      }
    } else {
      const centerOffset = (width - cardWidth) / 2;
      const newIndex = Math.round((scrollLeft + centerOffset) / cardTotalWidth);
      const clampedIndex = Math.max(
        0,
        Math.min(testimonials.length - 1, newIndex)
      );

      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    }

    // Reset auto-scroll when user scrolls
    resetAutoScroll();
  }, [currentIndex, resetAutoScroll]);

  // Track when user starts/stops scrolling
  const handleScrollStart = () => {
    isUserScrolling.current = true;
  };

  const handleScrollEnd = () => {
    isUserScrolling.current = false;
    resetAutoScroll();
  };

  // Initialize container width and auto-scroll
  useEffect(() => {
    const updateContainerWidth = () => {
      if (scrollContainerRef.current) {
        setContainerWidth(scrollContainerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    resetAutoScroll();

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
      if (autoScrollTimerRef.current) {
        clearTimeout(autoScrollTimerRef.current);
      }
    };
  }, [resetAutoScroll]);

  // Add scroll event listener with debounce for scroll end detection
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      handleScrollStart();
      handleScroll();

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        handleScrollEnd();
      }, 150);
    };

    container.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  // Calculate card opacity and blur based on scroll position - using state instead of ref
  const getCardStyle = (index: number) => {
    if (containerWidth === 0) {
      // Initial render - first card is fully visible
      return {
        opacity: index === 0 ? 1 : 0.6,
        filter: index === 0 ? "none" : "blur(1.5px)",
        transform: index === 0 ? "scale(1)" : "scale(0.85)",
      };
    }

    const isMobile = containerWidth < 500;
    // Mobile: fixed card width ~280px (increased for better content fit), larger: 70vw
    const cardWidth = isMobile
      ? 280
      : Math.min(CARD_WIDTH, containerWidth * 0.7);
    const gap = isMobile ? MOBILE_CARD_GAP : CARD_GAP;
    const cardTotalWidth = cardWidth + gap;

    const cardCenter = index * cardTotalWidth + cardTotalWidth / 2;
    const viewportCenter = scrollPosition + containerWidth / 2;
    const distance = Math.abs(cardCenter - viewportCenter);
    const maxDistance = cardTotalWidth;

    const normalizedDistance = Math.min(distance / maxDistance, 1);

    // Center card (distance ~0) should be fully visible with NO blur
    const opacity = 1 - normalizedDistance * 0.4;
    // Only apply blur if not in center zone (threshold 0.15)
    const blur =
      normalizedDistance < 0.15 ? 0 : (normalizedDistance - 0.15) * 1.8;
    const scale = 1 - normalizedDistance * 0.15;

    return {
      opacity: Math.max(0.6, opacity),
      filter: blur < 0.05 ? "none" : `blur(${blur}px)`,
      transform: `scale(${Math.max(0.85, scale)})`,
    };
  };

  // Calculate dynamic padding based on container width
  const getScrollPadding = () => {
    const isMobile = containerWidth < 500;
    const cardWidth = isMobile
      ? 280
      : Math.min(CARD_WIDTH, containerWidth * 0.7);
    const padding = Math.max(20, (containerWidth - cardWidth) / 2);
    return `${padding}px`;
  };

  return (
    <section className="bg-tertinary pt-[60px]  overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-[24px] sm:text-[24px] md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Trusted by Hotel Owners and Investors
          </h2>
          <p className="text-[#626262] text-[14px] sm:text-[14px] md:text-[20px] font-normal max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed">
            Owners and partners rely on Optimum Hospitality for disciplined
            execution, transparent reporting, and consistent operational
            results.
          </p>
        </div>

        {/* Testimonial Carousel - Free Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-10 min-[500px]:gap-6 h-auto md:h-auto lg:h-[474px] overflow-x-auto scroll-smooth scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              paddingLeft: getScrollPadding(),
              paddingRight: getScrollPadding(),
            }}
          >
            {testimonials.map((card, index) => (
              <div
                key={card.id}
                onClick={() => goToSlide(index)}
                className="flex-shrink-0 cursor-pointer transition-all duration-300 ease-out h-auto w-[280px] min-[500px]:w-[70vw] min-[500px]:max-w-[983px]"
                style={getCardStyle(index)}
              >
                {/* Card - flex-col below 500px, flex-row from 500px+ */}
                <div className="flex flex-col min-[500px]:flex-row border-[1px] border-[#CACACA]/50 rounded-[12px] min-[500px]:rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] items-stretch bg-white min-h-[395px] h-auto min-[500px]:min-h-0 min-[500px]:h-[220px] sm:h-[260px] min-[700px]:h-[300px] md:h-[340px] min-[900px]:h-[400px] lg:h-[474px] w-full overflow-hidden min-[500px]:overflow-visible">
                  {/* Image - full width on mobile, 45% width on larger screens */}
                  <div className="w-full min-[500px]:w-[45%] flex-shrink-0 px-3 pt-3 min-[500px]:p-1.5 sm:p-2 md:p-3 lg:p-6 xl:p-7">
                    <div className="w-full h-[188px] min-[500px]:h-full min-[500px]:w-full rounded-lg min-[500px]:rounded-[8px] xl:rounded-[16px] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-center"
                        draggable={false}
                      />
                    </div>
                  </div>

                  {/* Quote Content - 55% width on larger screens */}
                  <div className="flex-1 min-[500px]:w-[55%] min-w-0 px-3 pt-2 pb-3 min-[500px]:py-1.5 min-[500px]:px-2 min-[500px]:pr-3 sm:py-2 sm:px-3 md:p-3 lg:pt-5 lg:pr-5 lg:pb-5 xl:pt-7 xl:pr-10 xl:pb-[33px] lg:pl-2 xl:pl-3 flex flex-col justify-between gap-2 min-[500px]:gap-0">
                    <blockquote className="text-[12px] lg:text-[24px] font-normal text-primary leading-snug">
                      {card.quote}
                    </blockquote>
                    <div className="mt-2 min-[500px]:mt-0">
                      <p className="font-bold text-[14px] lg:text-[24px] text-primary">
                        {card.title}
                      </p>
                      <p className="text-[14px] lg:text-[24px] text-primary">
                        {card.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots - 60px gap from card */}
          <div className="flex justify-center gap-2 sm:gap-2.5 mt-[60px]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-2.5 sm:w-3"
                    : "bg-gray-400 hover:bg-gray-500 w-2.5 sm:w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
