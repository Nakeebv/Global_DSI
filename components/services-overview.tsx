import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Globe, Smartphone, Bot, Database, Cog, Rocket } from "lucide-react"
import Link from "next/link"

export function ServicesOverview() {
  const services = [
    {
      icon: Globe,
      title: "SaaS Development",
      description: "Full-stack web applications with subscription models, user management, and scalable architecture.",
      features: ["Multi-tenant architecture", "Payment integration", "User dashboards", "API development"],
      gradient: "from-blue-500 to-cyan-500",
      image: "/images/C_Saas_Dev.jpg",
      href: "/services#saas",
    },
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Rapid prototyping and minimum viable product development to validate your business ideas.",
      features: ["Quick turnaround", "Core feature focus", "User feedback integration", "Iterative development"],
      gradient: "from-purple-500 to-pink-500",
      image: "/images/Comprehensivemvp.jpg",
      href: "/services#comprehensive-mvp",
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions using machine learning and AI to streamline business processes.",
      features: ["Process automation", "Data analysis", "Chatbot integration", "Predictive analytics"],
      gradient: "from-green-500 to-emerald-500",
      image: "/images/ai-interaction.png",
      href: "/services#ai",
    },
    {
      icon: Database,
      title: "System Integration",
      description: "Connect your existing systems and third-party services for seamless data flow and operations.",
      features: ["API integrations", "Data migration", "Workflow automation", "Legacy system updates"],
      gradient: "from-orange-500 to-red-500",
      image: "/images/system integration.jpg",
      href: "/services#integration",
    },
    {
      icon: Smartphone,
      title: "Web Applications",
      description: "Modern, responsive web applications built with the latest technologies and best practices.",
      features: ["Responsive design", "Progressive web apps", "Real-time features", "Performance optimization"],
      gradient: "from-indigo-500 to-purple-500",
      image: "/images/WebAppReal.jpg",
      href: "/services#web-apps",
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored software solutions designed specifically for your unique business requirements.",
      features: ["Requirements analysis", "Custom architecture", "Ongoing support", "Scalable solutions"],
      gradient: "from-teal-500 to-blue-500",
      image: "/images/Custom.jpg",
      href: "/services#custom",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#020617_100%)]" />
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-with-subtle-lines-and-d.jpg')] opacity-[0.04]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            Comprehensive Software Solutions
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From initial concept to final deployment, I provide end-to-end software development services that drive
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/72 to-slate-950/10" />
              <div className="relative z-10 mt-auto flex w-full flex-col p-6">
                <div
                  className={`h-12 w-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-lg"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
