import consultantImage from "../../assets/image/aboutus-page/an-owner-focused-image.webp";

export default function Consultant() {
  return (
    <section className="bg-tertinary pt-[80px]">
      <div className="max-w-[1440px] mx-auto pl-4 sm:pl-6 md:pl-8 lg:pl-[40px] pr-4 sm:pr-6 md:pr-8 lg:pr-[40px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px]">
          {/* Left Content Area */}
          <div className="flex-1 py-8 lg:py-0 flex items-center">
            <div className="w-full">
              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-6 leading-tight">
                An Owner-Focused Approach to Hospitality
              </h3>

              {/* First Paragraph */}
              <p className="text-[#000000] text-base sm:text-lg md:text-xl lg:text-[20px] font-[300] leading-relaxed mb-5">
                We work directly with owners to deliver disciplined operations,
                transparent reporting, and long-term asset value creation.
              </p>

              {/* Second Paragraph */}
              <p className="text-[#000000] text-base sm:text-lg md:text-xl lg:text-[20px] font-[300] leading-relaxed mb-8">
                From our bases in Ho Chi Minh City and Jakarta, we work with
                luxury and upper-scale hotels to improve margins, optimize
                operations, and unlock revenue, with particular strength in
                F&B-led assets. Independent by design, every decision we make is
                aligned with owner returns, not brand agendas.
              </p>

              {/* CTA Button */}
              <button className="h-[56px] inline-flex items-center justify-center gap-[8px] py-[16px] px-[36px] bg-primary text-white text-[14px] font-medium tracking-[0.2em] rounded-[8px] hover:bg-primary/90 transition-colors">
                BOOK MY CONSULTATION
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
            </div>
          </div>

          {/* Right Image Area - 530 × 653 */}
          <div className="w-full lg:w-[530px] lg:flex-shrink-0 h-[400px] sm:h-[500px] lg:h-[653px] overflow-hidden">
            <img
              src={consultantImage}
              alt="Consultants discussing with client"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="pb-[120px]">

      </div>
    </section>
  );
}
