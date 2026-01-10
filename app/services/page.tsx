import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackground } from "@/components/hero-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/public/image"
import {
  Globe,
  Rocket,
  Bot,
  Database,
  Smartphone,
  Cog,
  Check,
  ArrowRight,
  Clock,
  Users,
  Shield,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "comprehensive-mvp",
      icon: Rocket,
      title: "Comprehensive MVP Package",
      subtitle: "Complete Cross-Platform Solution",
      description:
        "Transform your business idea into a complete digital ecosystem. This premium package includes web application, website, iOS app, and Android app development - everything you need to launch across all platforms simultaneously.",
      features: [
        "Custom web application development",
        "Professional business website",
        "Native iOS application",
        "Native Android application",
        "Unified design system across platforms",
        "Cross-platform data synchronization",
        "Admin dashboard & analytics",
        "User authentication & management",
        "API development & integration",
        "Cloud infrastructure setup",
        "App store deployment assistance",
        "6 months of post-launch support",
      ],
      technologies: ["React Native", "Next.js", "Node.js", "PostgreSQL", "AWS/Vercel", "TypeScript"],
      timeline: "5-6 months",
      pricing: "$27,000 - $35,000",
      isCustom: true,
      image: "/images/comprehensivemvp.jpg",
    },
    {
      id: "saas",
      icon: Globe,
      title: "SaaS Development",
      subtitle: "Scalable Software-as-a-Service Solutions",
      description:
        "Build robust, multi-tenant SaaS applications with subscription management, user authentication, and enterprise-grade security. Perfect for businesses looking to create recurring revenue streams.",
      features: [
        "Multi-tenant architecture design",
        "Stripe payment integration",
        "User management & authentication",
        "Admin dashboards & analytics",
        "API development & documentation",
        "Database optimization",
        "Automated billing & invoicing",
        "Role-based access control",
      ],
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Auth0"],
      timeline: "8-16 weeks",
      pricing: "Starting at $15,000",
      image: "/images/C_Saas_Dev.jpg",
    },
    {
      id: "ai",
      icon: Bot,
      title: "AI Automation",
      subtitle: "Intelligent Process Automation",
      description:
        "Leverage artificial intelligence to automate repetitive tasks, analyze data, and enhance user experiences. Transform your business operations with smart automation.",
      features: [
        "Custom AI model integration",
        "Process automation workflows",
        "Chatbot development",
        "Data analysis & insights",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions",
        "API integrations",
      ],
      technologies: ["OpenAI", "Python", "TensorFlow", "Langchain", "Pinecone", "Vercel AI SDK"],
      timeline: "4-10 weeks",
      pricing: "Starting at $8,000",
      image: "/images/web_app.jpg",
    },
    {
      id: "integration",
      icon: Database,
      title: "System Integration",
      subtitle: "Seamless Third-Party Connections",
      description:
        "Connect your existing systems and integrate third-party services for streamlined operations. Eliminate data silos and improve workflow efficiency.",
      features: [
        "API development & integration",
        "Data migration services",
        "Workflow automation",
        "Legacy system modernization",
        "Real-time synchronization",
        "Custom middleware development",
        "Error handling & monitoring",
        "Documentation & training",
      ],
      technologies: ["REST APIs", "GraphQL", "Webhooks", "Zapier", "Make.com", "Node.js"],
      timeline: "2-8 weeks",
      pricing: "Starting at $3,000",
      image: "/images/system integration.jpg",
    },
    {
      id: "web-apps",
      icon: Smartphone,
      title: "Web Applications",
      subtitle: "Modern Responsive Web Solutions",
      description:
        "Create fast, responsive web applications with modern user interfaces and seamless user experiences. Built with the latest technologies and best practices.",
      features: [
        "Responsive design implementation",
        "Progressive Web App (PWA)",
        "Real-time features",
        "Performance optimization",
        "SEO optimization",
        "Accessibility compliance",
        "Cross-browser compatibility",
        "Mobile-first approach",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      timeline: "4-12 weeks",
      pricing: "Starting at $6,000",
      image: "/images/web_app1.jpg",
    },
    {
      id: "custom",
      icon: Cog,
      title: "Custom Solutions",
      subtitle: "Tailored Software Development",
      description:
        "Get exactly what your business needs with completely custom software solutions. From requirements analysis to ongoing support, I handle every aspect of your project.",
      features: [
        "Requirements analysis & planning",
        "Custom architecture design",
        "Scalable solution development",
        "Quality assurance testing",
        "Deployment & DevOps",
        "Ongoing maintenance & support",
        "Performance monitoring",
        "Feature enhancement",
      ],
      technologies: ["Custom stack based on requirements"],
      timeline: "Variable",
      pricing: "Custom quote",
      image: "/images/Custom.jpg",
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We discuss your requirements, goals, and timeline to create a detailed project plan.",
    },
    {
      step: "2",
      title: "Design & Architecture",
      description: "I design the system architecture and user experience to ensure optimal performance.",
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Agile development with regular updates and thorough testing throughout the process.",
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Launch your solution and provide ongoing support to ensure continued success.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <HeroBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Professional Software
                <span className="text-primary block mt-2">Development Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                From SaaS applications to AI automation, I deliver custom software solutions that drive business growth
                and operational efficiency.
              </p>
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <CardHeader className="p-8 lg:p-12">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                            <service.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="font-serif text-2xl lg:text-3xl mb-1">{service.title}</CardTitle>
                            <CardDescription className="text-base font-medium text-primary">
                              {service.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                        {service.image && (
                          <div className="relative h-72 w-full rounded-lg overflow-hidden mb-6">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        )}

                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.description}</p>

                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-primary mr-2" />
                              <span className="font-medium">{service.timeline}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium text-primary">{service.pricing}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-8 lg:p-12 bg-card/50">
                        <h4 className="font-serif font-semibold text-lg mb-4">What's Included:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button asChild className="w-full mt-8">
                          <Link href="/contact">Get Started</Link>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">My Development Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures your project is delivered on time, within budget, and exceeds
                expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Why Choose My Services
                </h2>
                <p className="text-xl text-muted-foreground">Experience, expertise, and commitment to your success.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground text-sm">
                    Agile development approach ensures rapid delivery without compromising quality.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">Enterprise Security</h3>
                  <p className="text-muted-foreground text-sm">
                    Built with security best practices and compliance standards in mind.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">Ongoing Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Continuous support and maintenance to ensure your solution stays current.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your project and create a solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
