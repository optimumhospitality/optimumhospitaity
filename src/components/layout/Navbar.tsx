import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import optimumLogo from "../../assets/image/home-page/website-logo/optimum-logo.webp";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICE", href: "/services" },
  { name: "OUR TEAM", href: "/team" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past the hero section (approximately viewport height)
      const heroHeight = window.innerHeight;
      setIsScrolledPastHero(window.scrollY >= heroHeight - 72); // 72px is navbar height
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20 transition-colors duration-300 ${
        isHomePage && !isScrolledPastHero ? "bg-transparent/80" : "bg-primary"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="h-[72px] flex items-center justify-between">
          {/* LEFT: Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={optimumLogo}
              alt="Optimum Hospitality"
              className="h-10 w-auto"
            />
          </a>

          {/* CENTER: Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-[20px] font-light tracking-wide hover:text-secondary transition"
              >
                {link.name}
              </a>
            ))}

            {/* Vertize AI */}
            {/* <a
              href="#vertize"
              className="flex items-center gap-2 text-white text-sm font-medium tracking-wide hover:text-secondary transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              VERTIZE AI
            </a> */}
          </div>

          {/* RIGHT: Reserve Button */}
          <a
            href="#reserve"
            className="hidden text-[14px] lg:inline-flex items-center gap-2 px-6 py-2.5 bg-white text-primary  font-normal rounded-md hover:bg-gray-100 transition"
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
          </a>

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
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/20 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white text-base px-2 py-2 rounded hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#reserve"
              className="block mt-2 text-center bg-white text-primary font-semibold py-3 rounded-md"
            >
              RESERVE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
