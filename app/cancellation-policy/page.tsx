import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Cancellation Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. Project Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may cancel your software development project at any time by providing written notice. Cancellation
                  terms depend on the project phase:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Before Development Starts:</strong> Full refund minus any consultation fees already incurred
                  </li>
                  <li>
                    <strong>During Development:</strong> Payment required for completed work and non-recoverable costs
                  </li>
                  <li>
                    <strong>After Delivery:</strong> No refund available for completed and delivered work
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  2. Subscription Service Cancellation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For ongoing subscription-based services (maintenance, support, hosting):
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>You may cancel at any time with 30 days written notice</li>
                  <li>Cancellation takes effect at the end of the current billing period</li>
                  <li>No refunds for partial billing periods</li>
                  <li>Access to services continues until the end of the paid period</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. How to Cancel</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">To cancel services:</p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Send written notice to ceo@damco.space</li>
                  <li>Include your project details and reason for cancellation</li>
                  <li>Specify your preferred cancellation date</li>
                  <li>We will confirm receipt and provide a final invoice if applicable</li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Our Right to Cancel</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to cancel services in the following situations:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Non-payment of invoices after 30 days</li>
                  <li>Violation of our Terms of Service</li>
                  <li>Requests for illegal or unethical services</li>
                  <li>Abusive or threatening behavior toward our team</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  In such cases, we will provide 15 days written notice when possible and refund any prepaid amounts for
                  undelivered services.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">5. Project Handover</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon cancellation, we will provide you with all completed work, source code, and documentation
                  developed up to the cancellation date, subject to payment of all outstanding invoices.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Post-Cancellation Support</h2>
                <p className="text-muted-foreground leading-relaxed">
                  After cancellation, we may provide limited transition support for up to 30 days to help you transfer
                  services to another provider. This support may be subject to additional fees.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For cancellation requests or questions about this policy, please contact us at:
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
