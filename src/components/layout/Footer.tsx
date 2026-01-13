import { useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle, X } from "lucide-react";

export default function Footer() {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Show success snackbar
    setShowSnackbar(true);
    // Hide snackbar after 4 seconds
    setTimeout(() => {
      setShowSnackbar(false);
    }, 4000);
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-tertinary relative ">
      {/* Success Snackbar */}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-300 ${
              showSnackbar
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="bg-white text-primary px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 border border-gray-100 backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">Thanks for subscribing!</span>
              <button
                onClick={() => setShowSnackbar(false)}
                className="ml-2 hover:bg-gray-100 rounded-full p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>,
          document.body
        )}

      {/* CTA Section - Secondary/Yellow Background - Overlapping strip */}
      <div className="relative z-10 ">
        {/* Split background - top tertinary, bottom primary */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-1/2 bg-tertinary"></div>
          <div className="h-1/2 bg-primary"></div>
        </div>
        {/* CTA Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 max-lg:px-4 lg:px-10">
          <div className="bg-secondary rounded-2xl sm:rounded-3xl px-5 sm:px-6 max-lg:px-6 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary mb-2 sm:mb-3 md:mb-4 leading-tight sm:whitespace-nowrap lg:whitespace-normal">
                  Let's Improve Your
                  <br className="hidden lg:block" />
                  <span className="lg:hidden"> </span>
                  Hotel's Performance
                </h2>
                <p className="text-primary text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] font-normal">
                  Sign up and start selling travel in less than 1 minute.
                </p>
              </div>

              {/* Right Button */}
              <div className="flex justify-center lg:justify-end flex-shrink-0">
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 bg-primary text-white text-sm sm:text-sm md:text-base lg:text-[16px] font-[400] rounded-md hover:bg-primary/90 transition-colors">
                  Speak with Optimum Hospitality
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Primary/Blue Background */}
      <div className="bg-primary -mt-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-10">
          {/* Newsletter Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ">
            <div>
              <h3 className="text-[28px] text-[#F3F3F3] font-normal mb-1">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>
              <p className="text-[20px] font-[300] text-[#F3F3F3] ">
                Stay in the touch with updates and industry trends.
              </p>
            </div>

            {/* Email Input */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full sm:w-auto"
            >
              <div className="flex border-[1px] border-secondary rounded-[12px] w-full sm:w-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-primary text-white placeholder:text-[#CACACA] text-[16px] rounded-l-[12px] font-[200] focus:outline-none focus:border-white/40 flex-1 sm:flex-none sm:w-[250px] md:w-[300px] min-w-0"
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-3 bg-[#F7EFE3] text-primary text-[16px]  border-secondary font-normal rounded-[11px] hover:bg-white/90 transition-colors whitespace-nowrap lg:w-[157px]"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>

          {/* Horizontal Divider */}
          <div className="py-[60px]">
            <div className="h-[1px] bg-[#FFFFFF]/40 w-full"></div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left - Copyright & Addresses */}
            <div>
              <p className="text-white text-[16px] font-normal sm:text-[16px] font-normal mb-4">
                © Optimum Hospitality Technology Ltd. 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div className="text-[16px] text-[#D8D8D8] font-[200] leading-[140%] tracking-[0.05em]">
                  <p>The Sentry · 15B/8 Le Thanh Ton</p>
                  <p>Street · District 1 Hồ Chí Minh, Hồ</p>
                  <p>Chí Minh City · Vietnam</p>
                </div>
                <div className="hidden lg:block w-[0.9px] bg-[#FFFFFF]/40 self-stretch -mr-6"></div>
                <div className="text-[16px] text-[#D8D8D8] font-[200] leading-[140%]  tracking-[0.05] ml-0">
                  <p>Jl. Raya Gunung Maloko No. 21</p>
                  <p>· Cisauk</p>
                  <p>BSD · Indonesia</p>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}

            {/* Right - Connect with Us */}
            <div className="text-right">
              <p className="text-white text-xs sm:text-[16px] font-normal mb-4">
                Connect with Us
              </p>
              <div className="flex flex-col gap-2 items-end">
                <a
                  href="mailto:info@optimum-hospitality.com"
                  className="flex items-center text-[16px] text-[#D8D8D8] font-[200] gap-2 leading-[140%] tracking-[0.05em] "
                >
                  info@optimum-hospitality.com
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/optimum-hospitality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[16px] text-[#D8D8D8] font-[200] gap-2 leading-[140%] tracking-[0.05em] "
                >
                  optimum-hospitality
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
