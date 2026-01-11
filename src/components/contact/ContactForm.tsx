import { MapPin, Phone, Mail } from "lucide-react";

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
  return (
    <section className="bg-tertinary py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
        {/* Contact Info Bar */}
        <div className="bg-primary rounded-2xl p-6 md:p-6 lg:p-6 mb-12 md:mb-16 h-auto lg:h-[318px] flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-100 w-full max-w-[900px]">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex flex-col items-center text-center whitespace-nowrap"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px] rounded-full bg-white flex items-center justify-center mb-3">
                  <info.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                {/* Label */}
                <p className="text-white/70 text-xs tracking-[0.1em] uppercase mb-1">
                  {info.label}
                </p>
                {/* Value */}
                <p className="text-white text-sm md:text-base font-medium">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Content and Form Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="w-full lg:w-[35%] lg:pr-12">
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-[700] text-primary  mb-6">
              Let's Work Together
            </h2>
            <p className="text-[#404040] font-[300] text-sm md:text-[24px] leading-relaxed">
              Further information available upon request. Please provide some
              information on your project or goals and we'll move the
              conversation on from there.
            </p>
          </div>

          {/* Vertical Divider - Desktop only */}
          <div className="hidden lg:block w-px bg-primary/30 mr-[35px]" />

          {/* Right Form */}
          <div className=" w-full lg:flex-1 lg:pl-8">
            <h3 className="text-2xl md:text-[36px] font-[700] text-primary mb-8">
              Request Consultation
            </h3>

            <form className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[24px] font-[300] text-[#000000] mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[18px] font-[300] placeholder:text-[#555353] placeholder:text-[18px] placeholder:font-[300]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[24px] font-[300] text-[#000000] mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[18px] font-[300] placeholder:text-[#555353] placeholder:text-[18px] placeholder:font-[300]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[24px] font-[300] text-[#000000] mb-2"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[18px] font-[300] placeholder:text-[#555353] placeholder:text-[18px] placeholder:font-[300]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[24px] font-[300] text-[#000000] mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Enter the subject of message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[18px] font-[300] placeholder:text-[#555353] placeholder:text-[18px] placeholder:font-[300]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[24px] font-[300] text-[#000000] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Explain your query"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-[18px] font-[300] placeholder:text-[#555353] placeholder:text-[18px] placeholder:font-[300] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-22 py-5 bg-[#222E60] text-white font-medium tracking-[0.1em] rounded-lg hover:bg-primary/90 transition-colors"
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
