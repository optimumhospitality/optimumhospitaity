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
    quote: `"Optimum Hospitality brought clarity, discipline. Within the first year, we saw a material improvement in GOP, stronger F&B performance, and better cost control across the asset. Their independent, owner-first approach made a tangible difference to both short-term results and long-term value."`,
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
    const cardWidth = Math.min(CARD_WIDTH, containerWidth * 0.9);
    const cardTotalWidth = cardWidth + CARD_GAP;

    // Initial padding centers the first card (50vw - half card width)
    const initialPadding = (containerWidth - cardWidth) / 2;

    // Card's left edge position within scroll content (after initial padding)
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
    const cardTotalWidth = Math.min(CARD_WIDTH, width * 0.9) + CARD_GAP;
    const scrollLeft = container.scrollLeft;
    const centerOffset = (width - cardTotalWidth) / 2;

    // Update scroll position state for card styling
    setScrollPosition(scrollLeft);
    setContainerWidth(width);

    const newIndex = Math.round((scrollLeft + centerOffset) / cardTotalWidth);
    const clampedIndex = Math.max(
      0,
      Math.min(testimonials.length - 1, newIndex)
    );

    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex);
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
    if (scrollContainerRef.current) {
      setContainerWidth(scrollContainerRef.current.offsetWidth);
    }
    resetAutoScroll();
    return () => {
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

    const cardTotalWidth =
      Math.min(CARD_WIDTH, containerWidth * 0.9) + CARD_GAP;
    // const centerOffset = (containerWidth - cardTotalWidth) / 2;

    const cardCenter = index * cardTotalWidth + cardTotalWidth / 2;
    const viewportCenter = scrollPosition + containerWidth / 2;
    const distance = Math.abs(cardCenter - viewportCenter);
    const maxDistance = cardTotalWidth;

    const normalizedDistance = Math.min(distance / maxDistance, 1);

    // Center card (distance ~0) should be fully visible
    const opacity = 1 - normalizedDistance * 0.4;
    const blur = normalizedDistance * 1.5;
    const scale = 1 - normalizedDistance * 0.15;

    return {
      opacity: Math.max(0.6, opacity),
      filter: blur < 0.1 ? "none" : `blur(${blur}px)`,
      transform: `scale(${Math.max(0.85, scale)})`,
    };
  };

  return (
    <section className="bg-tertinary pt-[60px]  overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Trusted by Hotel Owners and Investors
          </h2>
          <p className="text-[#626262] text-xs sm:text-sm md:text-[20px] font-normal max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed">
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
            className="flex items-center gap-6 h-auto md:h-auto lg:h-[474px] overflow-x-auto scroll-smooth scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              paddingLeft: `calc(50vw - min(${CARD_WIDTH / 2}px, 45vw))`,
              paddingRight: `calc(50vw - min(${CARD_WIDTH / 2}px, 45vw))`,
            }}
          >
            {testimonials.map((card, index) => (
              <div
                key={card.id}
                onClick={() => goToSlide(index)}
                className="flex-shrink-0 cursor-pointer transition-all duration-300 ease-out h-auto md:h-[474px]"
                style={{
                  width: `min(${CARD_WIDTH}px, 90vw)`,
                  ...getCardStyle(index),
                }}
              >
                {/* Card - flex-col on mobile/small tablet, flex-row on lg+ */}
                <div className="flex flex-col border-[1px] border-[#CACACA]/50 rounded-[24px] lg:flex-row items-stretch bg-white   h-auto lg:h-[474px] w-full">
                  {/* Image - Minimal size reduction, stays stable */}
                  <div className="w-full lg:w-auto flex-shrink-0 p-4 sm:p-5 lg:p-6 xl:p-7">
                    <div className="aspect-square lg:aspect-auto w-[280px] sm:w-[300px] md:w-[340px] lg:w-[340px] xl:w-[385px] lg:h-full xl:h-[408px] mx-auto lg:mx-0 rounded-lg xl:rounded-[16px] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                    </div>
                  </div>

                  {/* Quote Content - Full visibility on mobile */}
                  <div className="flex-1 min-w-0 p-4 sm:p-5 lg:pt-5 lg:pr-5 lg:pb-5 xl:pt-7 xl:pr-10 xl:pb-[33px] lg:pl-2 xl:pl-3 flex flex-col justify-between">
                    <blockquote className="text-primary text-[16px] font-normal sm:text-[16px] lg:text-[24px] xl:text-[24px] leading-relaxed">
                      {card.quote}
                    </blockquote>
                    <div className="mt-3 lg:mt-4 xl:mt-6">
                      <p className="font-bold text-primary text-[16px] sm:text-base lg:text-[24px] xl:text-[24px]">
                        {card.title}
                      </p>
                      <p className="text-primary text-[16px] sm:text-[16px] lg:text-[24px] xl:text-[24px]">
                        {card.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 sm:gap-2.5 mt-8 sm:mt-10 md:mt-12">
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
