import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header  className="relative bg-gradient-to-br from-gray-800 via-blue-800 to-purple-800 border-t overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/image__2_-removebg-preview.png"
                alt="Damco Space Inc"
                width={50}
                height={50}
                className="h-10 w-auto p-0"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-lg text-white font-semibold"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
