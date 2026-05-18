import { Card } from "@/components/ui/card"
import { TrendingDown, AlertCircle, FileSpreadsheet, Clock } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Overstocking Increases Costs",
    description: "Excess inventory ties up capital and increases storage costs, eating into your profit margins.",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
  {
    icon: AlertCircle,
    title: "Stockouts Reduce Revenue",
    description: "Running out of popular items means lost sales, unhappy customers, and damaged brand reputation.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: FileSpreadsheet,
    title: "Manual Forecasting is Inaccurate",
    description: "Excel-based forecasting can&apos;t account for complex patterns, seasonality, and market trends.",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Clock,
    title: "Poor Production Planning",
    description: "Without accurate demand data, production schedules miss the mark, causing delays and waste.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">The Challenge</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Inventory Management is Broken
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Traditional methods leave businesses guessing. Here&apos;s what&apos;s costing you money.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 p-6 transition-all duration-300 hover:border-border hover:bg-card/80"
            >
              <div className={`mb-4 inline-flex rounded-xl ${problem.bgColor} p-3`}>
                <problem.icon className={`h-6 w-6 ${problem.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{problem.description}</p>
              
              {/* Hover glow effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className={`absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full ${problem.bgColor} blur-2xl`} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
