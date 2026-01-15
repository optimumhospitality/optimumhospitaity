import { useRef, useEffect, useState } from "react";
import { useLocomotiveScroll } from "../LocomotiveScrollProvider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: 100,
    suffix: "+",
    label: "Hotel Projects Managed & Advised",
  },
  {
    value: 94,
    suffix: "%",
    label: "Revenue Uplift Achieved (Wink Hotels)",
  },
  {
    value: 6,
    suffix: "+",
    label: "Southeast Asian Countries Market Served",
  },
  {
    value: 1400,
    suffix: "+",
    label: "Keys Managed in the Largest Resort ",
  },
  {
    value: 30,
    suffix: "+",
    label: "Years of Combined  Experience",
  },
];

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isReady } = useLocomotiveScroll();
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    // Get the scroll container for Locomotive Scroll
    const scrollContainer = document.querySelector("[data-scroll-container]");

    const ctx = gsap.context(() => {
      // Stagger stats items
      const items = containerRef.current?.querySelectorAll(".stat-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              scroller: scrollContainer,
              start: "top 75%",
              toggleActions: "play none none none",
              onEnter: () => {
                setTimeout(() => {
                  setStartCount(true);
                }, 500);
              },
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <div className="bg-primary" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-1">
        {/* Desktop: 5 columns */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:divide-x divide-white/20 py-12 lg:py-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-item px-6 xl:px-10 flex flex-col">
              <div className="text-4xl xl:text-[64px] font-normal text-white mb-auto lg:mt-6">
                {startCount ? (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    delay={index * 0.1}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-secondary/80 text-sm lg:text-[28px] font-[200] whitespace-pre-line leading-[1] mt-8 lg:mt-20 mb-6">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Single column with flex-col centered layout */}
        <div className="lg:hidden divide-y divide-white/20 py-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-item flex flex-col items-center justify-center text-center py-6 px-2"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-2">
                {startCount ? (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    delay={index * 0.1}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-secondary/80 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
