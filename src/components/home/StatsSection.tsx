const stats = [
  {
    value: "5000+",
    label: "Hotels Managed\n& Advised",
  },
  {
    value: "35%",
    label: "GOP Uplift\nAcross Mandates",
  },
  {
    value: "6+",
    label: "Countries\nOperated",
  },
  {
    value: "20%",
    label: "Operating Cost\nReduced",
  },
  {
    value: "25%",
    label: "F&B Segment\nRevenue Uplift",
  },
];

export default function StatsSection() {
  return (
    <section>
      {/* White Divider Space */}

      {/* Stats Section */}
      <div className="bg-primary">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-1">
          {/* Desktop: 5 columns */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:divide-x divide-white/20 py-12 lg:py-16">
            {stats.map((stat) => (
              <div key={stat.value} className="px-6 xl:px-10 flex flex-col">
                <div className="text-4xl xl:text-[64px] font-normal text-white mb-auto">
                  {stat.value}
                </div>
                <div className="text-secondary/80 text-sm lg:text-base whitespace-pre-line leading-relaxed mt-8 lg:mt-10">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Single column with flex-row layout */}
          <div className="lg:hidden divide-y divide-white/20 py-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-row items-center justify-between py-4 px-2"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-white">
                  {stat.value}
                </div>
                <div className="text-secondary/80 text-xs sm:text-sm whitespace-pre-line leading-relaxed text-right">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-tertinary p-5"></div>
    </section>
  );
}
