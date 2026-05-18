"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, Lightbulb, Package, BarChart3 } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const demandData = [
  { name: "Jan", demand: 4200, forecast: 4100 },
  { name: "Feb", demand: 4800, forecast: 4700 },
  { name: "Mar", demand: 5100, forecast: 5200 },
  { name: "Apr", demand: 4900, forecast: 4850 },
  { name: "May", demand: 5400, forecast: 5350 },
  { name: "Jun", demand: 5800, forecast: 5900 },
]

const inventoryData = [
  { name: "Product A", current: 850, optimal: 720, risk: "low" },
  { name: "Product B", current: 340, optimal: 500, risk: "high" },
  { name: "Product C", current: 620, optimal: 600, risk: "low" },
  { name: "Product D", current: 450, optimal: 400, risk: "medium" },
]

const insights = [
  {
    type: "alert",
    icon: AlertTriangle,
    title: "Stock Alert",
    description: "Product B is 32% below optimal stock levels. Reorder recommended.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    type: "insight",
    icon: TrendingUp,
    title: "Trend Detected",
    description: "Demand for Product A is trending up 15% week over week.",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    type: "recommendation",
    icon: Lightbulb,
    title: "Recommendation",
    description: "Increase safety stock for summer season. Historical pattern detected.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function DashboardSection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Dashboard Preview</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Powerful Analytics at Your Fingertips
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Get a complete view of your inventory health, demand forecasts, and AI-powered insights.
          </p>
        </div>

        {/* Dashboard mock */}
        <div className="mt-16">
          <Card className="overflow-hidden rounded-2xl border-border/50 bg-card/80 shadow-2xl backdrop-blur-xl">
            {/* Dashboard header */}
            <div className="flex items-center justify-between border-b border-border/50 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <span className="text-xs font-bold text-primary-foreground">S</span>
                </div>
                <span className="font-semibold text-foreground">StockSense Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
            </div>

            <div className="p-6">
              {/* KPI row */}
              <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                <Card className="border-border/50 bg-secondary/30 p-4">
                  <p className="text-sm text-muted-foreground">Forecast Accuracy</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">94.8%</span>
                    <span className="text-sm text-green-400">+2.3%</span>
                  </div>
                </Card>
                <Card className="border-border/50 bg-secondary/30 p-4">
                  <p className="text-sm text-muted-foreground">Total Products</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">1,247</span>
                    <span className="text-sm text-muted-foreground">tracked</span>
                  </div>
                </Card>
                <Card className="border-border/50 bg-secondary/30 p-4">
                  <p className="text-sm text-muted-foreground">Stock Alerts</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">7</span>
                    <span className="text-sm text-yellow-400">action needed</span>
                  </div>
                </Card>
                <Card className="border-border/50 bg-secondary/30 p-4">
                  <p className="text-sm text-muted-foreground">Cost Savings</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">$47.2k</span>
                    <span className="text-sm text-green-400">this month</span>
                  </div>
                </Card>
              </div>

              {/* Charts row */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Demand forecast chart */}
                <Card className="border-border/50 bg-secondary/20 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">Demand Forecast</h3>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        <span className="text-muted-foreground">Actual</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">Forecast</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={demandData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.02 270)" vertical={false} />
                        <XAxis dataKey="name" stroke="oklch(0.65 0 0)" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="oklch(0.65 0 0)" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "oklch(0.12 0.015 270)",
                            border: "1px solid oklch(0.25 0.02 270)",
                            borderRadius: "8px",
                            color: "oklch(0.98 0 0)",
                          }}
                        />
                        <Line type="monotone" dataKey="demand" stroke="oklch(0.55 0.25 295)" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="forecast" stroke="oklch(0.65 0.22 265)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                {/* Inventory levels */}
                <Card className="border-border/50 bg-secondary/20 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">Inventory Levels</h3>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">Current</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                        <span className="text-muted-foreground">Optimal</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={inventoryData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.02 270)" horizontal={false} />
                        <XAxis type="number" stroke="oklch(0.65 0 0)" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis type="category" dataKey="name" stroke="oklch(0.65 0 0)" fontSize={12} tickLine={false} axisLine={false} width={80} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "oklch(0.12 0.015 270)",
                            border: "1px solid oklch(0.25 0.02 270)",
                            borderRadius: "8px",
                            color: "oklch(0.98 0 0)",
                          }}
                        />
                        <Bar dataKey="current" fill="oklch(0.65 0.22 265)" radius={[0, 4, 4, 0]} />
                        <Bar dataKey="optimal" fill="oklch(0.4 0 0)" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>

              {/* AI Insights */}
              <div className="mt-6">
                <h3 className="mb-4 font-semibold text-foreground">AI Insights</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {insights.map((insight, index) => (
                    <Card key={index} className="border-border/50 bg-secondary/20 p-4">
                      <div className="flex items-start gap-3">
                        <div className={`rounded-lg ${insight.bgColor} p-2`}>
                          <insight.icon className={`h-4 w-4 ${insight.color}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{insight.title}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{insight.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
