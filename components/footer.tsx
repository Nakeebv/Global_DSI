import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 border-t overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-with-subtle-lines-and-d.jpg')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-serif font-bold text-lg">DS</span>
              </div> */}
              <Image
                src="/image__2_-removebg-preview.png"
                alt="DAMCO SPACE INC Logo"
                width={100}
                height={40}
                className="h-10 w-auto"
              />
              {/* <span className="font-serif font-bold text-xl text-white">DAMCO SPACE INC</span> */}
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional software development services specializing in SaaS applications, MVP development, and AI
              automation solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <a href="mailto:ceo@damco.space" className="hover:text-blue-400 transition-colors">
                  ceo@damco.space
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <a href="tel:+13079981449" className="hover:text-blue-400 transition-colors">
                  +1 (307) 998-1449
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <a href="tel:+2348166660455" className="hover:text-blue-400 transition-colors">
                  +234 8166660455
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span>32 N Gould St. Ste R, Sheridan, WY 82801 USA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#saas" className="text-gray-300 hover:text-blue-400 transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services#mvp" className="text-gray-300 hover:text-blue-400 transition-colors">
                  MVP Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-gray-300 hover:text-blue-400 transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services#integration" className="text-gray-300 hover:text-blue-400 transition-colors">
                  System Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; <script>document.write(new Date().getFullYear())</script> DAMCO SPACE INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
