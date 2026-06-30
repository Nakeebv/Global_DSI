import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fHww?q=80&w=2940&auto=format&fit=crop"

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/35 dark:bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/55 to-slate-950/30 dark:from-slate-950/95 dark:via-slate-900/75 dark:to-slate-950/55" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 gap-8 rounded-lg border border-white/15 bg-slate-950/25 p-6 shadow-2xl backdrop-blur-md dark:bg-slate-950/40 md:grid-cols-4 lg:p-8">
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
            <p className="text-white/75 mb-6 max-w-md">
              Professional software development services specializing in SaaS applications, MVP development, and AI
              automation solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-white/75">
                <Mail className="h-4 w-4 mr-2 text-cyan-300" />
                <a href="mailto:ceo@damcospace.com" className="hover:text-cyan-200 transition-colors">
                  ceo@damcospace.com
                </a>
              </div>
              <div className="flex items-center text-sm text-white/75">
                <Phone className="h-4 w-4 mr-2 text-cyan-300" />
                <a href="tel:+13079981449" className="hover:text-cyan-200 transition-colors">
                  +1 (307) 998-1449
                </a>
              </div>
              <div className="flex items-center text-sm text-white/75">
                <Phone className="h-4 w-4 mr-2 text-cyan-300" />
                <a href="tel:+2348166660455" className="hover:text-cyan-200 transition-colors">
                  +234 8166660455
                </a>
              </div>
              <div className="flex items-center text-sm text-white/75">
                <MapPin className="h-4 w-4 mr-2 text-cyan-300" />
                <span>32 N Gould St. Ste R, Sheridan, WY 82801 USA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#saas" className="text-white/75 hover:text-cyan-200 transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services#mvp" className="text-white/75 hover:text-cyan-200 transition-colors">
                  MVP Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-white/75 hover:text-cyan-200 transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services#integration" className="text-white/75 hover:text-cyan-200 transition-colors">
                  System Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/75 hover:text-cyan-200 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/75 hover:text-cyan-200 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/75 hover:text-cyan-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/75 hover:text-cyan-200 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; <script>document.write(new Date().getFullYear())</script> DAMCO SPACE INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
