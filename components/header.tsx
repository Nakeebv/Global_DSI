import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type HeaderProps = {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fHww?q=80&w=2940&auto=format&fit=crop"

  return (
    <header
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-30 overflow-hidden border-b border-white/10"
          : "relative overflow-hidden border-b border-white/10"
      }
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/25 dark:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/35 to-slate-950/55 dark:from-slate-950/90 dark:via-slate-900/60 dark:to-slate-950/75" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
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
              className="border border-white/25 bg-white/10 text-white shadow-lg backdrop-blur-md hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
