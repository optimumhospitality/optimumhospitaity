import mapImage from "../../assets/image/aboutus-page/map-image.webp";

export default function Presence() {
  return (
    <section className="bg-secondary max-h-[870px] pt-[40px] pb-[80px]">
      <div className="  max-w-[1440px]  px-4 sm:px-6 md:px-8 lg:px-[40px]">
        {/* Section Header */}
        <div className="text-center mb-15">
          <h2 className="text-2xl sm:text-3xl md:text-[48px] lg:text-[48px] font-[500] text-primary mb-3">
            Our Presence
          </h2>
          <p className="text-[#969696] font-[300] text-[20px] sm:text-[20px] tracking-[0.2em] uppercase">
            WE ARE PRESENT ACROSS 17+ CITIES IN SOUTH EAST ASIA
          </p>
        </div>

        {/* Map Image */}
        <div className="flex justify-center">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[797px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[587px] overflow-hidden ">
            <img
              src={mapImage}
              alt="Our presence across South East Asia"
              className="w-full h-full  border-[1px] rounded-[40px] border-[#23283C]"
            />
          </div>
        </div>
      </div>
     
    </section>
  );
}
