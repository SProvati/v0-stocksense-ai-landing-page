import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "StockSense AI reduced our stockouts by 35% in just three months. The AI predictions are remarkably accurate.",
    author: "Sarah Chen",
    role: "Supply Chain Director",
    company: "RetailMax Inc.",
    metric: "35% fewer stockouts",
  },
  {
    quote: "We&apos;ve improved our forecasting accuracy from 72% to 94%. The ROI was clear within the first quarter.",
    author: "Michael Rodriguez",
    role: "Operations Manager",
    company: "FastGrow Logistics",
    metric: "94% forecast accuracy",
  },
  {
    quote: "Saved hours of manual planning every week. The AI insights help us make decisions we couldn&apos;t see before.",
    author: "Emily Thompson",
    role: "Inventory Manager",
    company: "TechSupply Co.",
    metric: "10+ hours saved weekly",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Trusted by Supply Chain Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            See how businesses are transforming their inventory management with StockSense AI.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 p-8 transition-all duration-300 hover:border-border hover:bg-card/80"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/40" />
              </div>

              {/* Metric highlight */}
              <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                <span className="text-sm font-medium text-primary">{testimonial.metric}</span>
              </div>

              {/* Quote */}
              <blockquote className="mb-6 text-lg text-foreground">
                {`"${testimonial.quote}"`}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30">
                  <span className="text-lg font-semibold text-foreground">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
