import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { CheckCircle, X, Mail, Linkedin } from "lucide-react";

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
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-5 md:px-6 lg:px-10">
          <div className="bg-secondary rounded-2xl min-[500px]:rounded-xl sm:rounded-2xl md:rounded-3xl px-5 min-[500px]:px-4 sm:px-5 min-[750px]:px-6 md:px-8 lg:px-12 xl:px-16 py-6 min-[500px]:py-5 sm:py-6 min-[750px]:py-8 md:py-10 lg:py-14 xl:py-16 overflow-hidden">
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between gap-4 min-[500px]:gap-4 sm:gap-5 min-[750px]:gap-6 md:gap-6 lg:gap-8">
              {/* Left Content */}
              <div className="text-center min-[500px]:text-left">
                <h2 className="text-[22px] min-[500px]:text-[16px] sm:text-[18px] min-[750px]:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[40px] min-[1400px]:text-5xl font-medium text-primary mb-2 min-[500px]:mb-1.5 sm:mb-2 min-[750px]:mb-2.5 md:mb-3 lg:mb-4 leading-tight">
                  Let's Improve Your Hotel's Performance
                </h2>
                <p className="text-primary text-[14px] min-[500px]:text-[11px] sm:text-[12px] min-[750px]:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] min-[1400px]:text-[24px] font-normal">
                  Sign up and start selling travel in less than 1 minute.
                </p>
              </div>

              {/* Right Button */}
              <div className="flex justify-center min-[500px]:justify-end flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1.5 min-[500px]:gap-1.5 sm:gap-1.5 md:gap-2 px-3 min-[500px]:px-3 sm:px-3.5 min-[750px]:px-4 md:px-5 lg:px-5 xl:px-6 py-2 min-[500px]:py-2 sm:py-2 min-[750px]:py-2.5 md:py-3 lg:py-3 xl:py-3.5 bg-primary text-white text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-[400] rounded-md min-[500px]:rounded-md sm:rounded-md hover:bg-primary/90 transition-colors uppercase whitespace-nowrap"
                >
                  Speak with Optimum Hospitality
                  <svg
                    className="w-3 h-3 min-[500px]:w-2.5 min-[500px]:h-2.5 sm:w-2.5 sm:h-2.5 min-[750px]:w-3 min-[750px]:h-3 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 flex-shrink-0"
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
                </Link>
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
              <h3 className=" text-[20px] sm:text-[20px] lg:text-[28px] text-[#F3F3F3] font-normal mb-1">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>
              <p className="text-[14px] sm:text-[14px] lg:text-[20px] font-[300] text-[#F3F3F3] ">
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
                  className="px-4 py-3 bg-primary text-white placeholder:text-[#CACACA] text-[14px] sm:text-[14px] lg:text-[16px] rounded-l-[12px] font-[200] focus:outline-none focus:border-white/40 flex-1 sm:flex-none sm:w-[250px] md:w-[300px] min-w-0"
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-3 bg-[#F7EFE3] text-primary text-[14px] sm:text-[14px] lg:text-[16px]  border-secondary font-normal rounded-[11px] hover:bg-white/90 transition-colors whitespace-nowrap lg:w-[157px]"
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
                  <p>· Cisauk · BSD · Indonesia</p>
                  {/* <p>BSD · Indonesia</p> */}
                </div>
              </div>
            </div>

            {/* Vertical Divider */}

            {/* Right - Connect with Us */}
            <div className="text-left sm:text-right">
              <p className="text-white text-[16px] sm:text-[16px] font-normal mb-4">
                Connect with Us
              </p>
              <div className="flex flex-col gap-2 items-start sm:items-end">
                <a
                  href="mailto:info@optimum-hospitality.com"
                  className="flex flex-row-reverse sm:flex-row items-center text-[16px] text-[#D8D8D8] font-[200] gap-2 leading-[140%] tracking-[0.05em] "
                >
                  info@optimum-hospitality.com
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://linkedin.com/company/optimum-hospitality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row-reverse sm:flex-row items-center text-[16px] text-[#D8D8D8] font-[200] gap-2 leading-[140%] tracking-[0.05em] "
                >
                  optimum-hospitality
                  <span className="border border-[#D8D8D8] rounded-[4px] w-5 h-5 flex items-center justify-center">
                    <Linkedin className="w-3 h-3 fill-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
