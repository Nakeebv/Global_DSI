import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Cpu } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-with-subtle-lines-and-d.jpg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transform Your Business with
            <span className="text-primary block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Custom Software Solutions
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I specialize in building SaaS applications, MVPs, and AI-powered automations that drive real business
            results. From concept to deployment, I deliver scalable solutions tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-3 bg-white/80 backdrop-blur-sm border-2 hover:bg-white/90"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-muted-foreground">Tailored software solutions built with modern technologies</p>
            </div>

            <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Rapid MVP Development</h3>
              <p className="text-muted-foreground">Get your product to market faster with proven methodologies</p>
            </div>

            <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-muted-foreground">Leverage AI to automate processes and enhance user experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
