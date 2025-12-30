import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Refund and Dispute Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. Service Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DAMCO SPACE INC provides custom software development services delivered digitally. Since our services
                  are custom-built and delivered upon completion, our refund policy reflects the nature of bespoke
                  software development work.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. Refund Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Refunds may be considered in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Project Cancellation:</strong> If you cancel a project before development begins, you may
                    receive a full refund minus any consultation fees already incurred.
                  </li>
                  <li>
                    <strong>Non-Delivery:</strong> If we fail to deliver agreed-upon services within the specified
                    timeframe without valid reason.
                  </li>
                  <li>
                    <strong>Material Breach:</strong> If we materially breach the service agreement and fail to remedy
                    the breach within 30 days of written notice.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. Non-Refundable Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following are generally not eligible for refunds:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Completed development work that meets agreed specifications</li>
                  <li>Consultation and planning services already provided</li>
                  <li>Third-party service costs (hosting, licenses, etc.)</li>
                  <li>Changes in project requirements after development has begun</li>
                  <li>Dissatisfaction with delivered work that meets original specifications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Partial Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For projects cancelled mid-development, refunds will be calculated based on work completed. You will
                  be charged for completed milestones and any non-recoverable costs incurred on your behalf.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  5. Dispute Resolution Process
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have concerns about our services or billing:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Contact us directly at ceo@damco.space to discuss the issue</li>
                  <li>We will investigate and respond within 5 business days</li>
                  <li>If unresolved, we may engage in mediation through a neutral third party</li>
                  <li>As a last resort, disputes may be resolved through binding arbitration</li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Chargeback Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage direct communication before initiating chargebacks. Unjustified chargebacks may result in
                  suspension of services and may be disputed through proper channels. We maintain detailed records of
                  all work performed and communications.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Refund Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Approved refunds will be processed within 10 business days and returned to the original payment
                  method. Processing times may vary depending on your financial institution.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For refund requests or disputes, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>DAMCO SPACE INC</p>
                  <p>32 N Gould St. Ste R, Sheridan, WY 82001 USA</p>
                  <p>Email: ceo@damco.space</p>
                  <p>Phone: +1 (254) 625-9392</p>
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
