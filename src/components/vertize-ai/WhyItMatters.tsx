// import WhyItMattersImg from "../../assets/image/vertize-ai/WhyItMatter.webp"
import WhyItMattersVideo from "../../assets/image/vertize-ai/WhyItMatters.webm"

export default function WhyItMatters() {
    return (
        <section className="bg-white py-16 md:py-20 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px]">
                <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
                    {/* Video animation at the top */}
                    <video
                        src={WhyItMattersVideo}
                        className="w-[360px] h-[360px] max-w-3xl rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Heading */}
                    <h2
                        className="text-[32px] sm:text-[40px] md:text-[48px] font-normal text-center mb-6"
                        style={{
                            color: '#000000',
                            lineHeight: '120%',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Why It Matters in Modern Hotels?
                    </h2>

                    {/* Subheading */}
                    <p
                        className="text-[18px] sm:text-[20px] md:text-[24px] font-light text-center max-w-5xl"
                        style={{
                            color: '#272F3D',
                            lineHeight: '150%',
                            letterSpacing: '0%'
                        }}
                    >
                        Rising labour costs, increasing guest expectations, and operational complexity require smarter, more efficient ways of working.
                    </p>
                </div>
            </div>
        </section>
    );
}
