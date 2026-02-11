import { useEffect, useRef, type ReactNode, createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

// Context to share scroll position with components outside the scroll container (like Navbar)
interface ScrollContextType {
    scrollY: number;
    isReady: boolean;
}

const ScrollContext = createContext<ScrollContextType>({ scrollY: 0, isReady: false });

export const useLocomotiveScroll = () => useContext(ScrollContext);

interface LocomotiveScrollProviderProps {
    children: ReactNode;
    navbar?: ReactNode; // Navbar rendered outside scroll container but inside context
}

export default function LocomotiveScrollProvider({ children, navbar }: LocomotiveScrollProviderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
    const { pathname, hash } = useLocation();
    const [scrollY, setScrollY] = useState(0);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const scrollContainer = containerRef.current;

        // Initialize Locomotive Scroll with native scroll (better GSAP compatibility)
        locomotiveScrollRef.current = new LocomotiveScroll({
            el: scrollContainer,
            smooth: true,
            multiplier: 0.8,
            lerp: 0.08,
            smartphone: {
                smooth: false, // Native scroll on mobile for better performance
            },
            tablet: {
                smooth: false, // Native scroll on tablet for better performance
            },
        });

        setIsReady(true);

        // Integrate with GSAP ScrollTrigger and update scroll position state
        locomotiveScrollRef.current.on("scroll", (args: unknown) => {
            ScrollTrigger.update();
            // Update scroll position for components outside the scroll container
            const scrollArgs = args as { scroll: { y: number } };
            if (scrollArgs?.scroll?.y !== undefined) {
                setScrollY(scrollArgs.scroll.y);
            }
        });

        // Set up ScrollTrigger scroller proxy
        ScrollTrigger.scrollerProxy(scrollContainer, {
            scrollTop(value?: number) {
                if (locomotiveScrollRef.current) {
                    return arguments.length
                        ? locomotiveScrollRef.current.scrollTo(value as number, { duration: 0, disableLerp: true })
                        : (locomotiveScrollRef.current as unknown as { scroll: { instance: { scroll: { y: number } } } }).scroll?.instance?.scroll?.y || 0;
                }
                return 0;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: scrollContainer.style.transform ? "transform" : "fixed"
        });

        // Update ScrollTrigger when Locomotive updates
        ScrollTrigger.addEventListener("refresh", () => locomotiveScrollRef.current?.update());
        ScrollTrigger.defaults({ scroller: scrollContainer });

        // Initial refresh after short delay to ensure DOM is ready
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        // Cleanup on unmount
        return () => {
            ScrollTrigger.removeEventListener("refresh", () => locomotiveScrollRef.current?.update());
            locomotiveScrollRef.current?.destroy();
            locomotiveScrollRef.current = null;
        };
    }, []);

    // Handle route changes - scroll to top or hash element
    useEffect(() => {
        if (locomotiveScrollRef.current) {
            if (hash) {
                // Scroll to hash element after DOM is ready
                setTimeout(() => {
                    const element = document.querySelector(hash);
                    if (element && locomotiveScrollRef.current) {
                        locomotiveScrollRef.current.scrollTo(element as HTMLElement, { duration: 600, disableLerp: true });
                    }
                }, 300);
            } else {
                // Scroll to top on route change
                locomotiveScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
                setScrollY(0);
            }

            // Update scroll after DOM changes
            setTimeout(() => {
                locomotiveScrollRef.current?.update();
                ScrollTrigger.refresh();
            }, 200);
        }
    }, [pathname, hash]);

    return (
        <ScrollContext.Provider value={{ scrollY, isReady }}>
            {navbar}
            <div data-scroll-container ref={containerRef}>
                {children}
            </div>
        </ScrollContext.Provider>
    );
}
