const operationSteps = [
  {
    number: "01",
    title: "Initial Meetings",
    description:
      "Listen and understand. Rich insights and understanding the business in totality",
  },
  {
    number: "02",
    title: "Tailormade Strategy",
    description:
      "Define hotel and business strategies based on research and insight to create outstanding investments",
  },
  {
    number: "03",
    title: "Starting Phase",
    description:
      "Kick-off meeting and establish communication system and protocols with all stakeholders",
  },
];

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

export default function Operate() {
  return (
    <section>
      {/* Header Section */}
      <div className="bg-tertinary pt-[80px] ">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-[48px] lg:text-[48px] font-[500] text-primary mb-3">
              How we Operate
            </h2>
            <p className="text-[#969696] font-[300] text-base sm:text-lg md:text-[20px] tracking-[0.2em] uppercase">
              WE ARE PRESENT ACROSS 17+ CITIES IN SOUTH EAST ASIA
            </p>
          </div>

          {/* Operation Steps */}
          <div className="pb-[120px] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/30">
            {operationSteps.map((step) => (
              <div
                key={step.number}
                className="py-8 md:py-0 px-4 md:px-8 lg:px-12"
              >
                {/* Step Number */}
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-light text-primary mb-6">
                  {step.number}
                </div>

                {/* Step Title with left border */}
                <div className="border-l-4 border-primary pl-4 mb-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                    {step.title}
                  </h3>
                </div>

                {/* Step Description */}
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
      <div className="h-[80px] bg-tertinary"></div>
    </section>
  );
}
