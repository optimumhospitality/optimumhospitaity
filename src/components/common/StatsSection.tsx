import CountUp from "react-countup";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: 100,
    suffix: "+",
    label: "Hotel Projects Managed & Advised",
  },
{
  value: 94,
    suffix: "%",
      label: "Revenue Uplift Achieved (Wink Hotels)",
  },
{
  value: 6,
    suffix: "+",
      label: "Southeast Asian Countries Market Served",
  },
{
  value: 1400,
    suffix: "+",
      label: "Keys Managed in the Largest Resort ",
  },
{
  value: 30,
    suffix: "+",
      label: "Years of Combined Team Experience",
  },
];

export default function StatsSection() {
  return (
    <div className="bg-primary">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-1">
        {/* Desktop: 5 columns */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:divide-x divide-white/20 py-12 lg:py-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 xl:px-10 flex flex-col">
              <div className="text-4xl xl:text-[64px] font-normal text-white mb-auto lg:mt-6">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-secondary/80 text-sm lg:text-[28px] font-[200] whitespace-pre-line leading-[1] mt-8 lg:mt-20 mb-6">
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
