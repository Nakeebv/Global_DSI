import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InteractiveHero } from "@/components/ui/interactive-hero-backgrounds"
import { ContactForm } from "@/components/contact-form"
import { ServiceRequestForm } from "@/components/service-request-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <InteractiveHero
          brandName="DAMCO SPACE INC"
          heroTitle="Let's Build Something Amazing Together"
          heroDescription="Ready to transform your business with custom software? Get in touch to discuss your project and receive a detailed proposal."
          emailPlaceholder="ceo@damcospace.com"
          emailAddress="ceo@damcospace.com"
          ballpitConfig={{
            count: 150,
            gravity: 0.5,
            friction: 0.99,
            minSize: 0.4,
            maxSize: 0.9,
            lightIntensity: 4,
          }}
        />

        {/* Contact Information */}
        <section className="relative overflow-hidden bg-background py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(59,130,246,0.12),transparent_24%)] dark:bg-slate-950" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center border-white/15 bg-white/80 shadow-xl backdrop-blur-md dark:bg-slate-950/60">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                    <Mail className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:ceo@damcospace.com" className="text-cyan-600 hover:text-cyan-500 transition-colors dark:text-cyan-300">
                    ceo@damcospace.com
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center border-white/15 bg-white/80 shadow-xl backdrop-blur-md dark:bg-slate-950/60">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                    <Phone className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+13079981449" className="text-cyan-600 hover:text-cyan-500 transition-colors dark:text-cyan-300">
                    +1 (307) 998-1449
                  </a>
                  <br />
                  <a href="tel:+2348166660455" className="text-cyan-600 hover:text-cyan-500 transition-colors text-sm dark:text-cyan-300">
                    +234 8166660455
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center border-white/15 bg-white/80 shadow-xl backdrop-blur-md dark:bg-slate-950/60">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    32 N Gould St. Ste R
                    <br />
                    Sheridan, WY 82801
                    <br />
                    USA
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-white/15 bg-white/80 shadow-xl backdrop-blur-md dark:bg-slate-950/60">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle className="text-lg">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Within 24 hours
                    <br />
                    Monday - Friday
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Forms */}
            <div className="max-w-4xl mx-auto relative z-10">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/70 shadow-lg backdrop-blur-md dark:bg-slate-950/70">
                  <TabsTrigger value="general" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    General Inquiry
                  </TabsTrigger>
                  <TabsTrigger value="service" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Service Request
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                  <Card className="border-white/15 bg-white/85 shadow-2xl backdrop-blur-md dark:bg-slate-950/70">
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl">Get In Touch</CardTitle>
                      <CardDescription>
                        Have a question or want to discuss your project? Send me a message and I'll get back to you
                        within 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ContactForm />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="service">
                  <Card className="border-white/15 bg-white/85 shadow-2xl backdrop-blur-md dark:bg-slate-950/70">
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl">Request a Service Quote</CardTitle>
                      <CardDescription>
                        Tell me about your project requirements and I'll provide a detailed proposal with timeline and
                        pricing.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ServiceRequestForm />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background dark:bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground">Common questions about my services and process.</p>
              </div>

              <div className="space-y-6">
                <Card className="border-border/70 bg-card/85 shadow-lg backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-lg">How long does a typical project take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Project timelines vary based on complexity. MVPs typically take 3-6 weeks, while full SaaS
                      applications can take 8-16 weeks. I provide detailed timelines during the planning phase.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/70 bg-card/85 shadow-lg backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-lg">What's included in the project cost?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      All projects include development, testing, deployment, and initial support. I provide transparent
                      pricing with no hidden fees and detailed breakdowns of what's included.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/70 bg-card/85 shadow-lg backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, I offer ongoing maintenance and support packages to keep your application updated, secure,
                      and running smoothly. Support options are discussed during project planning.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/70 bg-card/85 shadow-lg backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Can you work with my existing team?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      I can integrate with your existing development team, provide technical leadership, or work
                      independently based on your needs and preferences.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
