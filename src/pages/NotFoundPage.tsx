import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

// Pre-defined particle positions to avoid Math.random during render
const particlePositions = [
  { id: 1, left: 5, top: 10 },
  { id: 2, left: 15, top: 25 },
  { id: 3, left: 25, top: 5 },
  { id: 4, left: 35, top: 45 },
  { id: 5, left: 45, top: 15 },
  { id: 6, left: 55, top: 35 },
  { id: 7, left: 65, top: 55 },
  { id: 8, left: 75, top: 20 },
  { id: 9, left: 85, top: 40 },
  { id: 10, left: 95, top: 60 },
  { id: 11, left: 10, top: 70 },
  { id: 12, left: 20, top: 85 },
  { id: 13, left: 30, top: 65 },
  { id: 14, left: 40, top: 80 },
  { id: 15, left: 50, top: 90 },
  { id: 16, left: 60, top: 75 },
  { id: 17, left: 70, top: 95 },
  { id: 18, left: 80, top: 70 },
  { id: 19, left: 90, top: 85 },
  { id: 20, left: 8, top: 50 },
];

export default function NotFoundPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([numberRef.current, textRef.current, buttonRef.current], {
        opacity: 0,
        y: 50,
      });

      // Animate floating particles
      gsap.to(".particle", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });

      // Main content animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(numberRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3"
        );

      // Glitch effect on 404
      gsap.to(".glitch", {
        skewX: () => gsap.utils.random(-2, 2),
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-primary relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particlePositions.map((pos) => (
          <div
            key={pos.id}
            className="particle absolute w-2 h-2 rounded-full bg-secondary/20"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* 404 Number with glitch effect */}
        <div ref={numberRef} className="relative mb-8">
          <h1 className="glitch text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary leading-none select-none">
            404
          </h1>
          {/* Glitch layers */}
          <h1
            className="absolute inset-0 text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] font-bold text-secondary/20 leading-none select-none blur-sm"
            style={{ transform: "translate(4px, 4px)" }}
          >
            404
          </h1>
        </div>

        {/* Text content */}
        <div ref={textRef} className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off. Don't worry,
            even the best hotels sometimes have a room that's hard to find.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          ref={buttonRef}
          to="/"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary font-medium rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-secondary/20"
        >
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-secondary/40 animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-secondary/40 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-secondary/40 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-secondary/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-secondary/20 rounded-br-3xl" />
    </div>
  );
}
