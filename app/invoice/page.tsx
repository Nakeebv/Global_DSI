"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function InvoicePage() {
  const handlePrint = () => {
    window.print()
  }

  const invoiceData = {
    invoiceNumber: "INV-2024-0087",
    date: "January 15, 2024",
    dueDate: "February 14, 2024",
    customer: {
      name: "TechStart Solutions LLC",
      address: "1247 Innovation Drive",
      city: "Austin, TX 78701",
      email: "billing@nahabass.damco.space",
      phone: "(512) 555-0123",
    },
    items: [
      {
        description: "Custom CRM System Development",
        quantity: 1,
        rate: 185.0,
        hours: 1.5,
        total: 277.5,
      },
      {
        description: "API Integration - Stripe Payment Gateway",
        quantity: 1,
        rate: 95.0,
        hours: 1,
        total: 95.0,
      },
      {
        description: "Database Optimization & Performance Tuning",
        quantity: 1,
        rate: 125.0,
        hours: 0.5,
        total: 62.5,
      },
    ],
    subtotal: 435.0,
    tax: 0.0,
    total: 435.0,
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .min-h-screen { min-height: auto; }
          .shadow-lg { box-shadow: none !important; }
          .bg-background { background: white !important; }
          .bg-secondary { background: #f8f9fa !important; }
          .bg-primary { background: #0ea5e9 !important; }
          .text-primary-foreground { color: white !important; }
          .border-border { border-color: #e5e7eb !important; }
          * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
        }
      `}</style>

      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto">
          {/* Print Button */}
          <div className="mb-6 no-print">
            <Button onClick={handlePrint} className="bg-accent hover:bg-accent/90">
              Print Invoice / Save as PDF
            </Button>
          </div>

          {/* Invoice Card */}
          <Card className="p-8 bg-white shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-2">INVOICE</h1>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">DAMCO SPACE INC</p>
                  <p>Custom Software Solutions</p>
                  <p>32 N Gould St. Ste R, Sheridan, WY 82001 USA</p>
                  <p>Email: ceo@damco.space</p>
                  <p>Phone: +1 (254) 625-9392</p>
                  <p>Phone: +234 8166660455</p>
                  <p>Website: nahabass.damco.space</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Invoice Number</p>
                  <p className="font-bold text-lg">{invoiceData.invoiceNumber}</p>
                  <p className="text-sm text-muted-foreground mt-2">Date</p>
                  <p className="font-semibold">{invoiceData.date}</p>
                  <p className="text-sm text-muted-foreground mt-2">Due Date</p>
                  <p className="font-semibold">{invoiceData.dueDate}</p>
                </div>
              </div>
            </div>

            {/* Bill To */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-primary mb-3">Bill To:</h2>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="font-semibold text-foreground">{invoiceData.customer.name}</p>
                <p className="text-muted-foreground">{invoiceData.customer.address}</p>
                <p className="text-muted-foreground">{invoiceData.customer.city}</p>
                <p className="text-muted-foreground mt-2">{invoiceData.customer.email}</p>
                <p className="text-muted-foreground">{invoiceData.customer.phone}</p>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left p-3 font-semibold">Description</th>
                      <th className="text-center p-3 font-semibold">Hours</th>
                      <th className="text-right p-3 font-semibold">Rate</th>
                      <th className="text-right p-3 font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.items.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-secondary/50" : "bg-white"}>
                        <td className="p-3 border-b border-border">
                          <div className="font-medium">{item.description}</div>
                        </td>
                        <td className="p-3 text-center border-b border-border">{item.hours}</td>
                        <td className="p-3 text-right border-b border-border">${item.rate.toFixed(2)}</td>
                        <td className="p-3 text-right border-b border-border font-semibold">
                          ${item.total.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-8">
              <div className="w-80">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Subtotal:</span>
                  <span>${invoiceData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Tax:</span>
                  <span>${invoiceData.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-3 bg-accent text-accent-foreground px-4 rounded-lg mt-2">
                  <span className="font-bold text-lg">Total Due:</span>
                  <span className="font-bold text-lg">${invoiceData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-primary mb-3">Payment Terms & Information</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground mb-2">Payment Methods:</p>
                  <ul className="space-y-1">
                    <li>• Credit/Debit Card via Stripe</li>
                    <li>• Bank Transfer (ACH)</li>
                    <li>• Check payable to "DAMCO SPACE INC"</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Terms:</p>
                  <ul className="space-y-1">
                    <li>• Payment due within 30 days</li>
                    <li>• Late fees: 1.5% per month</li>
                    <li>• All work completed as specified</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Thank you for choosing DAMCO SPACE INC. For questions about this invoice,
                  please contact us at ceo@damco.space or +1 (254) 625-9392. All services have been completed to
                  specification and tested thoroughly.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
              <p>DAMCO SPACE INC | Custom Software Solutions</p>
              <p>ceo@damco.space | +1 (254) 625-9392 | +234 8166660455 | nahabass.damco.space</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
