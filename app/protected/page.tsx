import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TrendingUp, LogOut, LayoutDashboard } from 'lucide-react'

export default async function ProtectedPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/login')
  }

  const signOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/auth/login')
  }

  return (
    <div className="min-h-svh bg-background">
      {/* Header */}
      <header className="border-b border-border/60 bg-card/50 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">StockSense AI</span>
          </Link>

          <form action={signOut}>
            <Button type="submit" variant="ghost" size="sm" className="gap-2">
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Welcome back{data.user.user_metadata?.full_name ? `, ${data.user.user_metadata.full_name}` : ''}!
            </h1>
            <p className="text-muted-foreground">
              {"You're signed in as"} <span className="font-medium text-foreground">{data.user.email}</span>
            </p>
          </div>

          {/* Dashboard Card */}
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/50 p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                <LayoutDashboard className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">Your Dashboard</h2>
                <p className="max-w-md text-muted-foreground">
                  This is your protected dashboard area. You can add your AI-powered demand forecasting features and inventory management tools here.
                </p>
              </div>
              <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Forecast Accuracy</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-2xl font-bold text-accent">35%</div>
                  <div className="text-sm text-muted-foreground">Reduced Stockouts</div>
                </div>
                <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
                  <div className="text-2xl font-bold text-chart-3">60+</div>
                  <div className="text-sm text-muted-foreground">Days Forecast</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:bg-card/80">
              <h3 className="font-semibold text-foreground">Demand Forecasting</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                View AI-powered demand predictions for your products
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:bg-card/80">
              <h3 className="font-semibold text-foreground">Inventory Optimization</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Optimize stock levels and reduce carrying costs
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:bg-card/80">
              <h3 className="font-semibold text-foreground">Production Planning</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Plan production schedules based on forecasts
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
