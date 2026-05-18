import { Card } from "@/components/ui/card"
import { Upload, Brain, BarChart3, Zap } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Sales Data",
    description: "Simply upload your historical sales data via CSV or Excel. No complex integrations required.",
    color: "from-primary to-primary/70",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analyzes Patterns",
    description: "Our AI models analyze trends, seasonality, and external factors to understand your business.",
    color: "from-accent to-accent/70",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Get Demand Forecast",
    description: "Receive accurate demand predictions with confidence intervals and trend analysis.",
    color: "from-chart-3 to-chart-3/70",
  },
  {
    number: "04",
    icon: Zap,
    title: "Optimize Instantly",
    description: "Make data-driven inventory decisions and optimize your entire supply chain.",
    color: "from-chart-4 to-chart-4/70",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">How It Works</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From Data to Decisions in Minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            StockSense AI makes demand forecasting simple. Here&apos;s how it works.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-border to-transparent lg:block" />
              )}

              <Card className="relative overflow-hidden border-border/50 bg-card/50 p-8 text-center transition-all duration-300 hover:border-border hover:bg-card/80">
                {/* Step number */}
                <div className="mb-4 text-5xl font-bold text-muted/20">{step.number}</div>

                {/* Icon */}
                <div className={`mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br ${step.color} p-4`}>
                  <step.icon className="h-8 w-8 text-foreground" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
