import CountUp from "react-countup";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: 5000,
    suffix: "+",
    label: "Hotels Managed\n& Advised",
  },
  {
    value: 35,
    suffix: "%",
    label: "GOP Uplift\nAcross Mandates",
  },
  {
    value: 6,
    suffix: "+",
    label: "Countries\nOperated",
  },
  {
    value: 20,
    suffix: "%",
    label: "Operating Cost\nReduced",
  },
  {
    value: 25,
    suffix: "%",
    label: "F&B Segment\nRevenue Uplift",
  },
];

export default function StatsSection() {
  return (
    <div className="bg-primary">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-1">
        {/* Desktop: 5 columns */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:divide-x divide-white/20 py-12 lg:py-16">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 xl:px-10 flex flex-col">
              <div className="text-4xl xl:text-[64px] font-normal text-white mb-auto">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-secondary/80 text-sm lg:text-base whitespace-pre-line leading-relaxed mt-8 lg:mt-10">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Single column with flex-col centered layout */}
        <div className="lg:hidden divide-y divide-white/20 py-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center py-6 px-2"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-2">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-secondary/80 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
