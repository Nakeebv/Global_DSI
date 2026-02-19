import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the services provided by DAMCO SPACE INC ("we," "our," or "us"), you agree to
                  be bound by these Terms of Service. If you do not agree to these terms, please do not use our
                  services.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DAMCO SPACE INC provides software development services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Custom SaaS application development</li>
                  <li>Minimum Viable Product (MVP) development</li>
                  <li>AI-based automation solutions</li>
                  <li>System integrations and third-party API connections</li>
                  <li>Web application development</li>
                  <li>iOS and Android mobile application development</li>
                  <li>Ongoing software maintenance and support</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All services are delivered digitally through web-based platforms or remote deployment. No physical
                  goods or in-person services are provided.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment for services is processed through Stripe. By using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide accurate and complete payment information</li>
                  <li>Pay all fees and charges associated with your service agreement</li>
                  <li>Authorize us to charge your payment method for agreed-upon services</li>
                  <li>Pay any applicable taxes</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  For subscription-based services, payments will be automatically charged on the agreed schedule until
                  cancelled according to our cancellation policy.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Upon full payment for custom development services, you will own the intellectual property rights to
                  the custom code and applications developed specifically for your project. However:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>We retain rights to general methodologies, techniques, and know-how</li>
                  <li>Third-party libraries and frameworks remain under their respective licenses</li>
                  <li>We may use anonymized project insights for improving our services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  5. Warranties and Disclaimers
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We provide our services "as is" and make no warranties, express or implied, regarding:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Uninterrupted or error-free operation</li>
                  <li>Compatibility with all systems or platforms</li>
                  <li>Achievement of specific business outcomes</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We will make reasonable efforts to deliver quality services but cannot guarantee specific results or
                  performance metrics.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our liability for any claims related to our services is limited to the amount paid for the specific
                  service in question. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of the State of Wyoming, United States. Any disputes will be
                  resolved in the courts of Wyoming.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>DAMCO SPACE INC</p>
                  <p>32 N Gould St. Ste R, Sheridan, WY 82001 USA</p>
                  <p>Email: ceo@damco.space</p>
                  <p>Phone: +1 (307) 998-1449</p>
                  <p>Phone: +234 8166660455</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
