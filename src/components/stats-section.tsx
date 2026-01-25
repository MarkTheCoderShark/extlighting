import { companyStats } from "@/lib/data/team";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string | number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsSectionProps {
  className?: string;
  variant?: "default" | "dark" | "gold";
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  {
    value: companyStats.installationsCompleted,
    label: "Installations Completed",
    suffix: "+",
  },
  {
    value: companyStats.yearsInBusiness,
    label: "Years in Business",
    suffix: "+",
  },
  {
    value: companyStats.fiveStarReviews,
    label: "5-Star Reviews",
    suffix: "+",
  },
  {
    value: companyStats.citiesServed,
    label: "Cities Served",
  },
];

export function StatsSection({
  className,
  variant = "default",
  stats = defaultStats,
}: StatsSectionProps) {
  const variants = {
    default: {
      bg: "bg-background",
      stat: "text-gold-700",
      label: "text-charcoal-600",
    },
    dark: {
      bg: "bg-charcoal-900",
      stat: "text-gold-400",
      label: "text-charcoal-400",
    },
    gold: {
      bg: "bg-gold-700",
      stat: "text-white",
      label: "text-gold-100",
    },
  };

  const style = variants[variant];

  return (
    <section className={cn("py-12", style.bg, className)}>
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={cn("text-4xl md:text-5xl font-bold", style.stat)}>
                {stat.prefix}
                {typeof stat.value === "number"
                  ? stat.value.toLocaleString()
                  : stat.value}
                {stat.suffix}
              </p>
              <p className={cn("mt-2 text-sm font-medium", style.label)}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
