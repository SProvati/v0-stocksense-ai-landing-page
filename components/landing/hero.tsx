"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Package, BarChart3 } from "lucide-react"
import { DashboardPreview } from "./dashboard-preview"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-gradient-to-bl from-accent/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">AI-Powered Forecasting</span>
          </div>

          {/* Main heading */}
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Predict Demand.{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Optimize Inventory.
            </span>{" "}
            Instantly.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            StockSense AI uses advanced machine learning to forecast demand and optimize inventory and production planning. Make smarter decisions with AI-powered insights.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent px-8 hover:opacity-90">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border/60 bg-secondary/30 backdrop-blur-sm">
              <Play className="h-4 w-4" />
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">95%</span>
              </div>
              <span className="mt-1 text-sm text-muted-foreground">Forecast Accuracy</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-accent" />
                <span className="text-3xl font-bold text-foreground">35%</span>
              </div>
              <span className="mt-1 text-sm text-muted-foreground">Reduced Stockouts</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-chart-3" />
                <span className="text-3xl font-bold text-foreground">60+</span>
              </div>
              <span className="mt-1 text-sm text-muted-foreground">Days Forecast Range</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
