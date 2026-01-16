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
      className="relative w-full flex items-end pb-10 sm:pb-14 lg:pb-[80px]"
      style={{ height: "540px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-6 md:px-8 lg:px-10 xl:px-[40px]">
        {/* Breadcrumb */}
        <div className="mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4">
          <nav className="flex items-center gap-1.5 min-[500px]:gap-1 sm:gap-1.5 min-[750px]:gap-2 text-white/80 text-[16px] lg:text-[20px]">
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
            <h1 className="text-[24px] lg:text-[56px] font-bold text-white leading-[1.1] mb-3 min-[500px]:mb-2 sm:mb-3 min-[750px]:mb-4 md:mb-5 lg:mb-6">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/95 text-[16px] lg:text-[20px] mb-2 min-[500px]:mb-1.5 sm:mb-2 min-[750px]:mb-3">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
