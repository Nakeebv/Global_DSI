"use client"

export default function InvoicePDF() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Print Button - Hidden in print */}
      <div className="p-4 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
        >
          Print Invoice / Save as PDF
        </button>
      </div>

      {/* Invoice Content */}
      <div className="max-w-4xl mx-auto p-8 bg-white">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">INVOICE</h1>
            <p className="text-gray-600">Invoice #INV-2024-001</p>
            <p className="text-gray-600">Date: January 15, 2024</p>
            <p className="text-gray-600">Due Date: February 14, 2024</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold text-gray-900 mb-2">DAMCO SPACE INC</h2>
            <p className="text-gray-600">Software Development Services</p>
            <p className="text-gray-600">32 N Gould St. Ste R, Sheridan, WY 82001 USA</p>
            <p className="text-gray-600">ceo@damco.space</p>
            <p className="text-gray-600">+1 (254) 625-9392</p>
            <p className="text-gray-600">+234 8166660455</p>
          </div>
        </div>

        {/* Bill To */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Bill To:</h3>
          <div className="text-gray-700">
            <p className="font-medium">Sarah Johnson</p>
            <p>TechStart Solutions LLC</p>
            <p>456 Innovation Drive</p>
            <p>Dallas, TX 75201</p>
            <p>sarah@nahabass.damco.space</p>
          </div>
        </div>

        {/* Services Table */}
        <div className="mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-2 font-semibold text-gray-900">Description</th>
                <th className="text-center py-3 px-2 font-semibold text-gray-900">Hours</th>
                <th className="text-center py-3 px-2 font-semibold text-gray-900">Rate</th>
                <th className="text-right py-3 px-2 font-semibold text-gray-900">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 text-gray-700">
                  <div className="font-medium">Custom CRM Development</div>
                  <div className="text-sm text-gray-500">
                    Built custom customer relationship management system with user authentication, contact management,
                    and reporting dashboard
                  </div>
                </td>
                <td className="text-center py-3 px-2 text-gray-700">12</td>
                <td className="text-center py-3 px-2 text-gray-700">$25.00</td>
                <td className="text-right py-3 px-2 text-gray-700">$300.00</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 text-gray-700">
                  <div className="font-medium">API Integration Services</div>
                  <div className="text-sm text-gray-500">
                    Integrated third-party payment processing API and email notification system
                  </div>
                </td>
                <td className="text-center py-3 px-2 text-gray-700">4</td>
                <td className="text-center py-3 px-2 text-gray-700">$25.00</td>
                <td className="text-right py-3 px-2 text-gray-700">$100.00</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-2 text-gray-700">
                  <div className="font-medium">Database Optimization</div>
                  <div className="text-sm text-gray-500">
                    Optimized database queries and implemented caching for improved performance
                  </div>
                </td>
                <td className="text-center py-3 px-2 text-gray-700">1.4</td>
                <td className="text-center py-3 px-2 text-gray-700">$25.00</td>
                <td className="text-right py-3 px-2 text-gray-700">$35.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-64">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-gray-700">$435.00</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-700">Tax (0%):</span>
              <span className="text-gray-700">$0.00</span>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-gray-300 font-bold text-lg">
              <span className="text-gray-900">Total:</span>
              <span className="text-gray-900">$435.00</span>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Terms</h3>
          <div className="text-gray-700 text-sm space-y-1">
            <p>• Payment is due within 30 days of invoice date</p>
            <p>• Late payments may incur a 1.5% monthly service charge</p>
            <p>• Please include invoice number with payment</p>
            <p>• For questions regarding this invoice, contact ceo@damco.space</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-4">
          <p>Thank you for your business!</p>
          <p>DAMCO SPACE INC - Software Development Services</p>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body { margin: 0; }
          .print\\:hidden { display: none !important; }
          @page { margin: 0.5in; }
        }
      `}</style>
    </div>
  )
}
