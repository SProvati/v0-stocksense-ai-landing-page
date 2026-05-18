import Link from 'next/link'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-background p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/20">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Authentication Error</h1>
          <p className="text-muted-foreground">
            Something went wrong during the authentication process. This could be due to an expired link or a configuration issue.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full bg-gradient-to-r from-primary to-accent">
            <Link href="/auth/login">Try signing in again</Link>
          </Button>
          <Button asChild variant="outline" className="w-full border-border/60 bg-secondary/30">
            <Link href="/auth/sign-up">Create a new account</Link>
          </Button>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </div>
  )
}
