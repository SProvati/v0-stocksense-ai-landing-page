"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, Lightbulb, Package } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"

const forecastData = [
  { name: "Week 1", actual: 4200, forecast: 4100 },
  { name: "Week 2", actual: 4800, forecast: 4600 },
  { name: "Week 3", actual: 5100, forecast: 5200 },
  { name: "Week 4", actual: 4900, forecast: 5000 },
  { name: "Week 5", actual: null, forecast: 5400 },
  { name: "Week 6", actual: null, forecast: 5800 },
  { name: "Week 7", actual: null, forecast: 6200 },
  { name: "Week 8", actual: null, forecast: 5900 },
]

export function DashboardPreview() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-gradient-to-b from-primary/20 via-transparent to-accent/10 blur-2xl" />
      
      <Card className="relative overflow-hidden rounded-2xl border-border/50 bg-card/80 p-6 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Demand Forecast</h3>
            <p className="text-sm text-muted-foreground">8-week prediction model</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1">
            <span className="flex h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm text-green-500">Live</span>
          </div>
        </div>

        {/* Main Chart */}
        <div className="mb-6 h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={forecastData}>
              <defs>
                <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.65 0.22 265)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.65 0.22 265)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.55 0.25 295)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.55 0.25 295)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.02 270)" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="oklch(0.65 0 0)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="oklch(0.65 0 0)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.12 0.015 270)",
                  border: "1px solid oklch(0.25 0.02 270)",
                  borderRadius: "8px",
                  color: "oklch(0.98 0 0)",
                }}
              />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="oklch(0.55 0.25 295)"
                strokeWidth={2}
                fill="url(#actualGradient)"
                dot={{ fill: "oklch(0.55 0.25 295)", strokeWidth: 0 }}
                name="Actual"
              />
              <Area
                type="monotone"
                dataKey="forecast"
                stroke="oklch(0.65 0.22 265)"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="url(#forecastGradient)"
                dot={{ fill: "oklch(0.65 0.22 265)", strokeWidth: 0 }}
                name="Forecast"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Card className="border-border/50 bg-secondary/30 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <p className="mt-1 text-2xl font-bold text-foreground">94.8%</p>
              </div>
              <div className="rounded-lg bg-green-500/10 p-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </div>
          </Card>
          
          <Card className="border-border/50 bg-secondary/30 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Stock Risk</p>
                <p className="mt-1 text-2xl font-bold text-foreground">Low</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-2">
                <Package className="h-4 w-4 text-primary" />
              </div>
            </div>
          </Card>
          
          <Card className="border-border/50 bg-secondary/30 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Alerts</p>
                <p className="mt-1 text-2xl font-bold text-foreground">3</p>
              </div>
              <div className="rounded-lg bg-yellow-500/10 p-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
              </div>
            </div>
          </Card>
          
          <Card className="border-border/50 bg-secondary/30 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Insights</p>
                <p className="mt-1 text-2xl font-bold text-foreground">12</p>
              </div>
              <div className="rounded-lg bg-accent/10 p-2">
                <Lightbulb className="h-4 w-4 text-accent" />
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  )
}
