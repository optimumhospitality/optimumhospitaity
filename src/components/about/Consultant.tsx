import consultantImage from "../../assets/image/aboutus-page/an-owner-focused-image.webp";
import BookMyConsultation from "../common/button/BookMyConsulation";

export default function Consultant() {
  return (
    <section className="bg-tertinary pt-[40px] min-[500px]:pt-[30px] sm:pt-[40px] min-[750px]:pt-[50px] md:pt-[60px] lg:pt-[80px]">
      <div className="max-w-[1440px] mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-[40px]">
        <div className="flex flex-col min-[500px]:flex-row gap-6 min-[500px]:gap-4 sm:gap-5 min-[750px]:gap-6 md:gap-8 lg:gap-[40px]">
          {/* Left Content Area */}
          <div className="flex-1 py-0 flex items-center">
            <div className="w-full">
              {/* Title */}
              <h3 className="text-xl min-[500px]:text-base sm:text-lg min-[750px]:text-xl md:text-2xl lg:text-[32px] font-bold text-primary mb-4 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-6 leading-tight">
                An Owner-Focused Approach to Hospitality
              </h3>

              {/* First Paragraph */}
              <p className="text-[#000000] text-[14px] min-[500px]:text-[10px] sm:text-[12px] min-[750px]:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[300] leading-relaxed mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5">
                We work directly with owners to deliver disciplined operations,
                transparent reporting, and long-term asset value creation.
              </p>

              {/* Second Paragraph */}
              <p className="text-[#000000] text-[14px] min-[500px]:text-[10px] sm:text-[12px] min-[750px]:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[300] leading-relaxed mb-5 min-[500px]:mb-3 sm:mb-4 min-[750px]:mb-6 md:mb-8">
                From our bases in Ho Chi Minh City and Jakarta, we work with
                luxury and upper-scale hotels to improve margins, optimize
                operations, and unlock revenue, with particular strength in
                F&B-led assets. Independent by design, every decision we make is
                aligned with owner returns, not brand agendas.
              </p>

              {/* CTA Button */}
              <BookMyConsultation />
            </div>
          </div>

          {/* Right Image Area */}
          <div className="w-full min-[500px]:w-[40%] sm:w-[42%] min-[750px]:w-[45%] md:w-[45%] lg:w-[530px] min-[500px]:flex-shrink-0 h-[300px] min-[500px]:h-[200px] sm:h-[280px] min-[750px]:h-[360px] md:h-[450px] lg:h-[550px] xl:h-[653px] overflow-hidden">
            <img
              src={consultantImage}
              alt="Consultants discussing with client"
              className="w-full h-full object-cover rounded-2xl min-[500px]:rounded-lg sm:rounded-xl min-[750px]:rounded-2xl md:rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="pb-10 min-[500px]:pb-8 sm:pb-10 min-[750px]:pb-12 md:pb-16 lg:pb-25"></div>
    </section>
  );
}
