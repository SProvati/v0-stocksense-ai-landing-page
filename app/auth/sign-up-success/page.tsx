import Link from 'next/link'
import { TrendingUp, Mail, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-background p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Check your email</h1>
          <p className="text-muted-foreground">
            {"We've sent you a confirmation link. Please check your email to verify your account and complete the sign-up process."}
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <div className="font-medium text-foreground">StockSense AI</div>
              <div className="text-sm text-muted-foreground">Your account is almost ready</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {"Didn't receive the email? Check your spam folder or"}
          </p>
          <Button variant="outline" className="border-border/60 bg-secondary/30">
            Resend confirmation email
          </Button>
        </div>

        <Link 
          href="/auth/login" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to sign in
        </Link>
      </div>
    </div>
  )
}
