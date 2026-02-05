import { MapPin } from "lucide-react";

interface Location {
    city: string;
    description: string;
}

const locations: Location[] = [
    {
        city: "Ho Chi Minh City, Vietnam",
        description: "Primary Operations Hub",
    },
    {
        city: "Jakarta, Indonesia",
        description: "Regional Expansion",
    },
    {
        city: "Hanoi, Vietnam",
        description: "Advisory Support",
    },
];

export default function Understanding() {
    return (
        <section className="bg-tertinary pt-16 sm:pt-20 lg:pt-25">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-primary mb-4">
                        Deep Regional Understanding
                    </h2>
                    <p className="text-[#626262] text-sm sm:text-base md:text-lg lg:text-[20px] font-light max-w-3xl mx-auto leading-relaxed">
                        Long-term presence in South East Asia with on-the-ground expertise in
                        local regulations, labour markets, owner expectations, and regional
                        guest behaviour.
                    </p>
                </div>

                {/* Location Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className="bg-primary rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col items-center text-center"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center mb-6 sm:mb-8">
                                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                            </div>

                            {/* City Name */}
                            <h3 className="text-lg sm:text-xl lg:text-[22px] font-medium text-white mb-2">
                                {location.city}
                            </h3>

                            {/* Description */}
                            <p className="text-white/70 text-sm sm:text-base font-light">
                                {location.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
