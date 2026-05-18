import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started with demand forecasting",
    price: "$0",
    period: "forever",
    features: [
      "15-day forecast horizon",
      "Basic dashboard",
      "Up to 50 products",
      "CSV upload",
      "Email support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For businesses serious about inventory optimization",
    price: "$99",
    period: "/month",
    features: [
      "60-day forecast horizon",
      "Advanced AI models",
      "Unlimited products",
      "Inventory optimization",
      "Production planning",
      "Export reports (PDF, Excel)",
      "API access",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-bl from-primary/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Start free and upgrade when you&apos;re ready for more powerful features.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-border/50 p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-card/80 to-card/50 ring-2 ring-primary/50"
                  : "bg-card/50 hover:bg-card/80"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1">
                    <Sparkles className="h-3 w-3 text-primary" />
                    <span className="text-xs font-medium text-primary">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan info */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`rounded-full p-1 ${plan.popular ? "bg-primary/20" : "bg-secondary"}`}>
                      <Check className={`h-3 w-3 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
