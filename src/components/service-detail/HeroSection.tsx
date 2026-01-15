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
}: // description,
HeroSectionProps) {
  return (
    <section
      className="relative w-full flex items-end pb-[60px] min-[500px]:pb-[40px] sm:pb-[50px] min-[750px]:pb-[60px] md:pb-[70px] lg:pb-[80px]"
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
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        {/* Breadcrumb */}
        <div className="mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4">
          <nav className="flex items-center gap-1.5 min-[500px]:gap-1 sm:gap-1.5 min-[750px]:gap-2 text-white/80 text-[12px] min-[500px]:text-[9px] sm:text-[10px] min-[750px]:text-[12px] md:text-sm">
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

        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-end min-[500px]:justify-between gap-4 min-[500px]:gap-4 sm:gap-5 min-[750px]:gap-6">
          {/* Left Content */}
          <div className="max-w-full min-[500px]:flex-1">
            {/* Main Headline */}
            <h1 className="text-[22px] min-[500px]:text-[16px] sm:text-[20px] min-[750px]:text-[26px] md:text-[32px] lg:text-[44px] xl:text-[56px] font-bold text-white leading-[1.1] mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-6">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/95 text-[13px] min-[500px]:text-[10px] sm:text-[12px] min-[750px]:text-[14px] md:text-[16px] lg:text-[18px] xl:text-xl leading-relaxed mb-2 min-[500px]:mb-1.5 sm:mb-2 min-[750px]:mb-3">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
