import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { DashboardSection } from "@/components/landing/dashboard-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DashboardSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
