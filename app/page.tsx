import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { Footer } from "@/components/footer"

export default function HomePage() {
  console.log("[v0] HomePage component loaded")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
      </main>
      <Footer />
    </div>
  )
}
