import { useState, useEffect } from "react";
import { useLocation,  useNavigate } from "react-router-dom";
import optimumLogo from "../../assets/image/home-page/website-logo/optimum-logo.webp";
import { useLocomotiveScroll } from "../LocomotiveScrollProvider";

// Services data matching CoreHotelManagement.tsx
const servicesData = [
  { name: "Independent Hotel Management", href: "/services/hotel-management" },
  {
    name: "Asset Management and Owner Representation",
    href: "/services/asset-management",
  },
  {
    name: "Hotel Advisory, Feasibility and Pre-Opening Support",
    href: "/services/project-development",
  },
  {
    name: "Food and Beverage Strategy and Concept Development",
    href: "/services/fb-concept-curation",
  },
  {
    name: "AI driven hospitality infrastructure (Vertize AI)",
    href: "/vertize-ai",
  },
];

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "OUR TEAM", href: "/team" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Get scroll position from Locomotive Scroll context
  const { scrollY } = useLocomotiveScroll();

  // Check if scrolled past the hero section (approximately viewport height)
  const heroHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const isScrolledPastHero = scrollY >= heroHeight - 72; // 72px is navbar height

  const isServicesActive =
    location.pathname.startsWith("/services") ||
    location.pathname === "/vertize-ai";

  // Handle navigation with loading state
  const handleNavigation = (href: string, callback?: () => void) => {
    if (location.pathname === href) return;

    setIsNavigating(true);
    setLoadingProgress(0);

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 50);

    // Small delay to show loading state, then navigate
    setTimeout(() => {
      callback?.();
      navigate(href);
    }, 100);
  };

  // Reset loading state when navigation completes
  useEffect(() => {
    if (isNavigating) {
      setLoadingProgress(100);
      const timeout = setTimeout(() => {
        setIsNavigating(false);
        setLoadingProgress(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Loading Progress Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent transition-opacity duration-300 ${
          isNavigating ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-secondary via-secondary to-white transition-all duration-150 ease-out"
          style={{ width: `${loadingProgress}%` }}
        />
        {/* Glowing effect */}
        <div
          className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/50 to-transparent animate-pulse"
          style={{
            transform: `translateX(${loadingProgress < 100 ? "0" : "100%"})`,
            opacity: isNavigating ? 1 : 0,
          }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20 transition-colors duration-300 ${
          isHomePage && !isScrolledPastHero ? "bg-transparent/80" : "bg-primary"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="h-[72px] flex items-center justify-between">
            {/* LEFT: Logo */}
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center gap-2"
            >
              <img
                src={optimumLogo}
                alt="Optimum Hospitality"
                className="h-10 w-auto"
              />
            </button>

            {/* CENTER: Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {/* Home Link */}
              <button
                onClick={() => handleNavigation("/")}
                className={`text-white text-[20px] font-light tracking-wide hover:text-secondary transition ${
                  location.pathname === "/"
                    ? "underline decoration-2 underline-offset-8"
                    : ""
                }`}
              >
                HOME
              </button>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center gap-1 text-white text-[20px] font-light tracking-wide hover:text-secondary transition ${
                    isServicesActive
                      ? "underline decoration-2 underline-offset-8"
                      : ""
                  }`}
                >
                  SERVICES
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-0 w-[380px] bg-primary rounded-none shadow-xl overflow-hidden transition-all duration-200 border-t border-white/20 ${
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="py-2">
                    {servicesData.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsServicesOpen(false);
                          handleNavigation(service.href);
                        }}
                        className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors group w-full text-left"
                      >
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-xs font-medium group-hover:bg-white group-hover:text-primary transition-colors">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[14px] font-medium leading-tight">
                          {service.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Nav Links */}
              {navLinks.slice(1).map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className={`text-white text-[20px] font-light tracking-wide hover:text-secondary transition ${
                    location.pathname === link.href
                      ? "underline decoration-2 underline-offset-8"
                      : ""
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* RIGHT: Reserve Button */}
            <button
              onClick={() => handleNavigation("/contact")}
              className="hidden text-[14px] lg:inline-flex items-center gap-2 px-6 py-2.5 bg-white text-primary font-normal rounded-md hover:bg-gray-100 transition"
            >
              RESERVE
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-[800px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/20 py-4 space-y-2">
              {/* Home Link */}
              <button
                onClick={() =>
                  handleNavigation("/", () => setIsMobileMenuOpen(false))
                }
                className="block w-full text-left text-white text-base px-2 py-2 rounded hover:bg-white/10"
              >
                HOME
              </button>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between text-white text-base px-2 py-2 rounded hover:bg-white/10"
                >
                  SERVICES
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Services List */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isMobileServicesOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 py-2 space-y-1">
                    {servicesData.map((service, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleNavigation(service.href, () => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          })
                        }
                        className="flex items-center gap-2 text-white/80 text-sm px-2 py-2 rounded hover:bg-white/10 hover:text-white transition-colors w-full text-left"
                      >
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white text-xs">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-tight">{service.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Nav Links */}
              {navLinks.slice(1).map((link) => (
                <button
                  key={link.name}
                  onClick={() =>
                    handleNavigation(link.href, () =>
                      setIsMobileMenuOpen(false)
                    )
                  }
                  className="block w-full text-left text-white text-base px-2 py-2 rounded hover:bg-white/10"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() =>
                  handleNavigation("/contact", () => setIsMobileMenuOpen(false))
                }
                className="block w-full mt-2 text-center bg-white text-primary font-semibold py-3 rounded-md"
              >
                RESERVE
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
