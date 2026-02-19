import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackground } from "@/components/hero-background"
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
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <HeroBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's Build Something
                <span className="text-primary block mt-2">Amazing Together</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your business with custom software? Get in touch to discuss your project and receive
                a detailed proposal.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:ceo@damco.space" className="text-primary hover:text-primary/80 transition-colors">
                    ceo@damco.space
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+13073462242" className="text-primary hover:text-primary/80 transition-colors">
                    +1 307) 998-1449
                  </a>
                  <br />
                  <a href="tel:+2348166660455" className="text-primary hover:text-primary/80 transition-colors text-sm">
                    +234 8166660455
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-primary" />
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

              <Card className="text-center">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-primary" />
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
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
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
                  <Card>
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
                  <Card>
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground">Common questions about my services and process.</p>
              </div>

              <div className="space-y-6">
                <Card>
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

                <Card>
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

                <Card>
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

                <Card>
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
