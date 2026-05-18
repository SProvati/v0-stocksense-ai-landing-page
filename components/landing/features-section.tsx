import { Card } from "@/components/ui/card"
import { 
  LineChart, 
  Package, 
  Factory, 
  Lightbulb, 
  Upload,
  ArrowRight
} from "lucide-react"

const features = [
  {
    icon: LineChart,
    title: "AI Demand Forecasting",
    description: "Predict demand up to 60 days ahead with machine learning models that learn from your historical data and external factors.",
    highlight: "15-60 day predictions",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Package,
    title: "Inventory Optimization",
    description: "Automatically calculate optimal reorder points, safety stock levels, and order quantities to minimize costs.",
    highlight: "Smart reorder points",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Factory,
    title: "Production Planning",
    description: "Align production capacity with forecasted demand. Optimize schedules and resource allocation.",
    highlight: "Capacity alignment",
    gradient: "from-chart-3 to-chart-3/50",
  },
  {
    icon: Lightbulb,
    title: "AI Insights Engine",
    description: "Get automatic recommendations and actionable insights. Understand trends, anomalies, and opportunities.",
    highlight: "Smart recommendations",
    gradient: "from-chart-4 to-chart-4/50",
  },
  {
    icon: Upload,
    title: "CSV Upload & Instant Prediction",
    description: "Upload your sales data and get predictions in minutes. No complex setup or technical knowledge required.",
    highlight: "Instant results",
    gradient: "from-chart-5 to-chart-5/50",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 right-0 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-gradient-to-tl from-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Features</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need to Forecast Smarter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Powerful AI tools designed to transform how you manage inventory and plan production.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-border/50 bg-card/50 p-8 transition-all duration-300 hover:border-border hover:bg-card/80 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon with gradient background */}
              <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${feature.gradient} p-4`}>
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>

              {/* Highlight badge */}
              <div className="mb-4 inline-flex rounded-full border border-border/60 bg-secondary/50 px-3 py-1">
                <span className="text-xs font-medium text-muted-foreground">{feature.highlight}</span>
              </div>

              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground">{feature.description}</p>

              {/* Learn more link */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className={`absolute bottom-0 right-0 h-32 w-32 translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-br ${feature.gradient} blur-3xl opacity-30`} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
