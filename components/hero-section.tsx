import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Cpu } from "lucide-react"
import Link from "next/link"

const serviceHighlights = [
  {
    title: "Custom Web Apps",
    description: "Dashboards, portals, and internal tools shaped around the way your team already works.",
    details: ["Next.js", "CRM workflows", "Admin panels"],
    icon: Code,
    iconClass: "from-blue-500 to-cyan-500",
  },
  {
    title: "MVP Buildouts",
    description: "A focused first version with the core user flow, payments, auth, and launch basics in place.",
    details: ["Prototype to product", "Stripe", "User onboarding"],
    icon: Zap,
    iconClass: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "AI Workflows",
    description: "Practical automations for intake, follow-ups, summaries, and handoffs where manual work slows you down.",
    details: ["OpenAI", "Lead routing", "Ops automation"],
    icon: Cpu,
    iconClass: "from-indigo-500 to-sky-500",
  },
]

export function HeroSection() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fHww?q=80&w=2940&auto=format&fit=crop"

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/25 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Transform Your Business with
            <span className="block mt-2 bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
              Custom Software Solutions
            </span>
          </h1>

          <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            I specialize in building SaaS applications, MVPs, and AI-powered automations that drive real business
            results. From concept to deployment, I deliver scalable solutions tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-xl text-white"
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
              className="text-lg px-8 py-3 border-white/30 bg-white/10 text-white shadow-xl backdrop-blur-md hover:bg-white/20 hover:text-white"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {serviceHighlights.map(({ title, description, details, icon: Icon, iconClass }) => (
              <div
                key={title}
                className="flex h-full flex-col items-center text-center rounded-lg border border-white/20 bg-slate-950/30 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-slate-950/40"
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${iconClass} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{description}</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
