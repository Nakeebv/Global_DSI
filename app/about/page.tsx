import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackground } from "@/components/hero-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SimpleVideo } from "@/components/simple-video"
import Image from "next/image"
import {
  Code,
  Zap,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const skills = [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS/Vercel",
    "Docker",
    "AI/ML Integration",
    "API Development",
    "System Architecture",
    "DevOps",
  ]

  const achievements = [
    {
      icon: Code,
      title: "50+ Projects Delivered",
      description: "Successfully completed projects ranging from MVPs to enterprise applications",
    },
    {
      icon: Users,
      title: "100% Client Satisfaction",
      description: "Maintained perfect client satisfaction through clear communication and quality delivery",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Consistent track record of meeting project deadlines and milestones",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Recognized for innovative solutions and technical excellence in software development",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every project is focused on delivering measurable business value and achieving your specific goals.",
    },
    {
      icon: CheckCircle,
      title: "Quality First",
      description:
        "I prioritize code quality, security, and performance to ensure your software stands the test of time.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "I work as an extension of your team, providing transparent communication and collaborative development.",
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Leveraging the latest technologies and best practices to give you a competitive advantage.",
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
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    Welcome to
                    <span className="text-primary block mt-2">DAMCO SPACE INC</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    A leading software development company dedicated to transforming business ideas into powerful
                    digital solutions. With expertise in modern web technologies and AI integration, we help businesses
                    scale and innovate through custom software development.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <Link href="/contact">
                        Start Your Project
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/services">View My Services</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative h-full w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/austin-distel-rxpThOwuVgE-unsplash.jpg"
                    alt="Professional Software Development Company"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-medium">Professional Software Development Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Corporate Overview
                </h2>
                <p className="text-xl text-muted-foreground">
                  Learn more about DAMCO SPACE INC and our mission
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-4">
                <SimpleVideo
                  src="/videos/Damco_Space_Inc_Corporate_Overview_-_120 (1).mp4"
                  controls={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-xl text-muted-foreground">
                  Turning complex business challenges into elegant software solutions
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Briefcase className="h-6 w-6 text-primary mr-3" />
                        <CardTitle className="text-xl">Professional Background</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        With over a decade of combined experience in software development, our team has worked with
                        startups, growing businesses, and established companies to create custom solutions that drive
                        real results. Our journey began with a passion for problem-solving and has evolved into a
                        comprehensive skill set covering full-stack development, AI integration, and system
                        architecture.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-6 w-6 text-primary mr-3" />
                        <CardTitle className="text-xl">Expertise & Approach</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        We specialize in modern web technologies, with particular expertise in React, Next.js, and
                        AI-powered applications. Our approach combines technical excellence with business acumen,
                        ensuring that every solution not only works flawlessly but also contributes to your bottom line.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      src="/images/team-collaboration.png"
                      alt="Team Collaboration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Technical Skills</CardTitle>
                      <CardDescription>Technologies I work with daily</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Business Information</CardTitle>
                      <CardDescription>Professional contact details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 text-primary mr-3" />
                        <a
                          href="mailto:ceo@damco.space"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          ceo@damco.space
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 text-primary mr-3" />
                        <a
                          href="tel:+13079981449"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +1 (307) 998-1449
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 text-primary mr-3" />
                        <a
                          href="tel:+2348166660455"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +234 8166660455
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 text-primary mr-3" />
                        <span className="text-muted-foreground">32 N Gould St. Ste R, Sheridan, WY 82801 USA</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Track Record</h2>
                <p className="text-xl text-muted-foreground">
                  Proven results and client success across diverse projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <achievement.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ai-interaction.png"
                  alt="AI Interaction and Innovation"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
                <p className="text-xl text-muted-foreground">The principles that guide every project We undertake</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                          <value.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">How We Work</h2>
                <p className="text-xl text-muted-foreground">
                  A collaborative approach that ensures your vision becomes reality
                </p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center md:text-left">
                        <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto md:mx-0 mb-4">
                          1
                        </div>
                        <h3 className="font-serif font-semibold text-lg mb-2">Discovery & Planning</h3>
                        <p className="text-muted-foreground text-sm">
                          We start with a deep dive into your business needs, goals, and technical requirements to
                          create a comprehensive project roadmap.
                        </p>
                      </div>

                      <div className="text-center md:text-left">
                        <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto md:mx-0 mb-4">
                          2
                        </div>
                        <h3 className="font-serif font-semibold text-lg mb-2">Agile Development</h3>
                        <p className="text-muted-foreground text-sm">
                          Using agile methodologies, I deliver working software in iterations, keeping you involved and
                          informed throughout the development process.
                        </p>
                      </div>

                      <div className="text-center md:text-left">
                        <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto md:mx-0 mb-4">
                          3
                        </div>
                        <h3 className="font-serif font-semibold text-lg mb-2">Launch & Support</h3>
                        <p className="text-muted-foreground text-sm">
                          After thorough testing and deployment, We provide ongoing support to ensure your solution
                          continues to perform optimally.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your project and explore how we can help bring your vision to life with custom software
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/services">View Our Services</Link>
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
