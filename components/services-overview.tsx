import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    },
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Rapid prototyping and minimum viable product development to validate your business ideas.",
      features: ["Quick turnaround", "Core feature focus", "User feedback integration", "Iterative development"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions using machine learning and AI to streamline business processes.",
      features: ["Process automation", "Data analysis", "Chatbot integration", "Predictive analytics"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "System Integration",
      description: "Connect your existing systems and third-party services for seamless data flow and operations.",
      features: ["API integrations", "Data migration", "Workflow automation", "Legacy system updates"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "Web Applications",
      description: "Modern, responsive web applications built with the latest technologies and best practices.",
      features: ["Responsive design", "Progressive web apps", "Real-time features", "Performance optimization"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored software solutions designed specifically for your unique business requirements.",
      features: ["Requirements analysis", "Custom architecture", "Ongoing support", "Scalable solutions"],
      gradient: "from-teal-500 to-blue-500",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-with-subtle-lines-and-d.jpg')] opacity-5"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Software Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final deployment, I provide end-to-end software development services that drive
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
            >
              <CardHeader>
                <div
                  className={`h-12 w-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="/images/hero-banner.png"
            alt="Software Development Services"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
