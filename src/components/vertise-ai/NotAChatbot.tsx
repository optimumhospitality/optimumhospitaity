import ChatBotImg from "../../assets/image/vertise-ai/ChatBot.webp"

export default function NotAChatbot() {
    return (
        <section className="bg-[#FFFDF8] py-16 md:py-20 lg:py-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
                <div className="text-center max-w-5xl mx-auto">
                    {/* 3D Icon/Graphic */}
                    <div className="mb-12 flex justify-center">
                        <img 
                            src={ChatBotImg} 
                            alt="AI Technology" 
                            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[294px] lg:h-[294px]"
                        />
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[500] text-[#000000] leading-tight mb-8">
                        This is not a chat bot.
                        <br />
                        This is not software.
                    </h2>
                    
                    {/* Description */}
                    <p className="text-[#272F3D] text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                        This is AI driven hospitality infrastructure, built to transform front desk economics and futureproof your opertions
                    </p>
                </div>
            </div>
        </section>
    );
}