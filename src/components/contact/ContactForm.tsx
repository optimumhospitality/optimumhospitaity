import { useState } from "react";
import { createPortal } from "react-dom";
import { MapPin, Phone, Mail, X, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Ho Chi Minh City, Vietnam",
  },
  {
    icon: Phone,
    label: "CONTACT US",
    value: "+91 9240252",
  },
  {
    icon: Mail,
    label: "MAIL US",
    value: "info@optimum-hospitality.com",
  },
];

export default function ContactForm() {
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
    <section className="bg-tertinary py-12 min-[500px]:py-10 sm:py-12 min-[750px]:py-16 md:py-20 lg:py-25">
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
            <div className="bg-primary text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 border border-white/10 backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-medium">
                Your message has been submitted successfully!
              </span>
              <button
                onClick={() => setShowSnackbar(false)}
                className="ml-2 hover:bg-white/10 rounded-full p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>,
          document.body
        )}

      <div className="max-w-[1440px] mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-[40px]">
        {/* Contact Info Bar */}
        <div className="bg-primary rounded-2xl min-[500px]:rounded-xl sm:rounded-2xl p-6 min-[500px]:p-4 sm:p-5 min-[750px]:p-6 md:p-6 min-[1000px]:p-8 lg:p-8 xl:p-10 mb-8 min-[500px]:mb-6 sm:mb-8 min-[750px]:mb-10 md:mb-12 lg:mb-16 h-auto min-[500px]:h-auto lg:h-[318px] flex items-center justify-center">
          <div className="grid grid-cols-1 min-[500px]:grid-cols-3 gap-6 min-[500px]:gap-2 sm:gap-3 min-[750px]:gap-4 md:gap-6 min-[1000px]:gap-8 min-[1250px]:gap-12 lg:gap-16 xl:gap-24 w-full max-w-[1000px]">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 min-[500px]:w-10 min-[500px]:h-10 sm:w-12 sm:h-12 min-[750px]:w-14 min-[750px]:h-14 md:w-16 md:h-16 min-[1000px]:w-20 min-[1000px]:h-20 lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px] rounded-full bg-white flex items-center justify-center mb-2 min-[500px]:mb-1.5 sm:mb-2 min-[750px]:mb-3">
                  <info.icon className="w-6 h-6 min-[500px]:w-4 min-[500px]:h-4 sm:w-5 sm:h-5 min-[750px]:w-5 min-[750px]:h-5 md:w-6 md:h-6 min-[1000px]:w-8 min-[1000px]:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-primary" />
                </div>
                {/* Label */}
                <p className="text-white/70 text-[10px] min-[500px]:text-[8px] sm:text-[9px] min-[750px]:text-[9px] md:text-[10px] min-[1000px]:text-[11px] lg:text-xs tracking-[0.1em] uppercase mb-0.5 min-[500px]:mb-0.5 sm:mb-1">
                  {info.label}
                </p>
                {/* Value */}
                <p className="text-white text-[13px] min-[500px]:text-[9px] sm:text-[10px] min-[750px]:text-[11px] md:text-[12px] min-[1000px]:text-[13px] lg:text-sm xl:text-base font-medium">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Content and Form Section */}
        <div className="flex flex-col min-[500px]:flex-row gap-6 min-[500px]:gap-4 sm:gap-5 min-[750px]:gap-6 md:gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="w-full min-[500px]:w-[35%] min-[500px]:pr-3 sm:pr-4 min-[750px]:pr-6 md:pr-8 lg:pr-12">
            <h2 className="text-xl min-[500px]:text-base sm:text-lg min-[750px]:text-xl md:text-2xl lg:text-[36px] font-[700] text-primary mb-4 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-6">
              Let's Work Together
            </h2>
            <p className="text-[#404040] font-[300] text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-relaxed">
              Further information available upon request. Please provide some
              information on your project or goals and we'll move the
              conversation on from there.
            </p>
          </div>

          {/* Vertical Divider - Shows from 500px+ */}
          <div className="hidden min-[500px]:block w-px bg-primary/30 min-[500px]:mr-3 sm:mr-4 min-[750px]:mr-5 md:mr-6 lg:mr-[35px]" />

          {/* Right Form */}
          <div className="w-full min-[500px]:flex-1 min-[500px]:pl-2 sm:pl-3 min-[750px]:pl-4 md:pl-6 lg:pl-8">
            <h3 className="text-xl min-[500px]:text-base sm:text-lg min-[750px]:text-xl md:text-2xl lg:text-[36px] font-[700] text-primary mb-5 min-[500px]:mb-3 sm:mb-4 min-[750px]:mb-5 md:mb-6 lg:mb-8">
              Request Consultation
            </h3>

            <form
              className="space-y-3 min-[500px]:space-y-2 sm:space-y-3 min-[750px]:space-y-3.5 md:space-y-4"
              onSubmit={handleSubmit}
            >
              {/* Name Row */}
              <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-3 min-[500px]:gap-2 sm:gap-3 min-[750px]:gap-3.5 md:gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[400] text-[#000000] mb-1 min-[500px]:mb-0.5 sm:mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="Enter your first name"
                    className="w-full px-3 min-[500px]:px-2 sm:px-3 min-[750px]:px-3.5 md:px-4 py-2 min-[500px]:py-1.5 sm:py-2 min-[750px]:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[300] text-[#000000] bg-white placeholder:text-[#555353] placeholder:text-[13px] min-[500px]:placeholder:text-[10px] sm:placeholder:text-[11px] min-[750px]:placeholder:text-[13px] md:placeholder:text-sm lg:placeholder:text-base placeholder:font-[300]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[400] text-[#000000] mb-1 min-[500px]:mb-0.5 sm:mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Enter your last name"
                    className="w-full px-3 min-[500px]:px-2 sm:px-3 min-[750px]:px-3.5 md:px-4 py-2 min-[500px]:py-1.5 sm:py-2 min-[750px]:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[300] text-[#000000] bg-white placeholder:text-[#555353] placeholder:text-[13px] min-[500px]:placeholder:text-[10px] sm:placeholder:text-[11px] min-[750px]:placeholder:text-[13px] md:placeholder:text-sm lg:placeholder:text-base placeholder:font-[300]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[400] text-[#000000] mb-1 min-[500px]:mb-0.5 sm:mb-1"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 min-[500px]:px-2 sm:px-3 min-[750px]:px-3.5 md:px-4 py-2 min-[500px]:py-1.5 sm:py-2 min-[750px]:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[300] text-[#000000] bg-white placeholder:text-[#555353] placeholder:text-[13px] min-[500px]:placeholder:text-[10px] sm:placeholder:text-[11px] min-[750px]:placeholder:text-[13px] md:placeholder:text-sm lg:placeholder:text-base placeholder:font-[300]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[400] text-[#000000] mb-1 min-[500px]:mb-0.5 sm:mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Enter the subject of message"
                  className="w-full px-3 min-[500px]:px-2 sm:px-3 min-[750px]:px-3.5 md:px-4 py-2 min-[500px]:py-1.5 sm:py-2 min-[750px]:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[300] text-[#000000] bg-white placeholder:text-[#555353] placeholder:text-[13px] min-[500px]:placeholder:text-[10px] sm:placeholder:text-[11px] min-[750px]:placeholder:text-[13px] md:placeholder:text-sm lg:placeholder:text-base placeholder:font-[300]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[400] text-[#000000] mb-1 min-[500px]:mb-0.5 sm:mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Explain your query"
                  rows={4}
                  className="w-full px-3 min-[500px]:px-2 sm:px-3 min-[750px]:px-3.5 md:px-4 py-2 min-[500px]:py-1.5 sm:py-2 min-[750px]:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-[300] text-[#000000] bg-white placeholder:text-[#555353] placeholder:text-[13px] min-[500px]:placeholder:text-[10px] sm:placeholder:text-[11px] min-[750px]:placeholder:text-[13px] md:placeholder:text-sm lg:placeholder:text-base placeholder:font-[300] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-10 min-[500px]:px-6 sm:px-8 min-[750px]:px-12 md:px-14 lg:px-16 py-2.5 min-[500px]:py-2 sm:py-2.5 min-[750px]:py-3 md:py-3.5 bg-[#222E60] text-white text-[13px] min-[500px]:text-[10px] sm:text-[11px] min-[750px]:text-[13px] md:text-sm lg:text-base font-medium tracking-[0.1em] rounded-lg hover:bg-primary/90 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
