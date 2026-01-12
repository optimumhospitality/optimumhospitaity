interface HeroSectionProps {
    title: string;
    subtitle: string;
    heroImage: string;
    description: string;
}

export default function HeroSection({
    title,
    subtitle,
    heroImage,
    description,
}: HeroSectionProps) {
    return (
        <section
            className="relative w-full flex items-end pb-[80px]"
            style={{ height: "540px" }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px]">
                {/* Breadcrumb */}
                <div className="mb-4">
                    <nav className="flex items-center gap-2 text-white/80 text-sm">
                        <a href="/" className="hover:text-white transition">
                            Home
                        </a>
                        <span>/</span>
                        <a href="/services" className="hover:text-white transition">
                            Services
                        </a>
                        <span>/</span>
                        <span className="text-white">{title}</span>
                    </nav>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    {/* Left Content */}
                    <div className="max-w-2xl lg:max-w-3xl">
                        {/* Main Headline */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[56px] xl:text-[56px] font-bold text-white leading-[1.1] mb-4 sm:mb-5 md:mb-6">
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-white/95 text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed mb-3">
                            {subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl lg:max-w-2xl">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
