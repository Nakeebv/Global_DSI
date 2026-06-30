"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

type BallpitConfig = {
  count?: number
  gravity?: number
  friction?: number
  minSize?: number
  maxSize?: number
  lightIntensity?: number
}

type InteractiveHeroProps = {
  brandName: string
  heroTitle: string
  heroDescription: string
  emailPlaceholder?: string
  emailAddress?: string
  ballpitConfig?: BallpitConfig
}

type Orb = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  hue: number
  alpha: number
}

export function InteractiveHero({
  brandName,
  heroTitle,
  heroDescription,
  emailPlaceholder = "Start a conversation",
  emailAddress = "ceo@damcospace.com",
  ballpitConfig,
}: InteractiveHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const config = {
      count: ballpitConfig?.count ?? 110,
      gravity: ballpitConfig?.gravity ?? 0.42,
      friction: ballpitConfig?.friction ?? 0.985,
      minSize: ballpitConfig?.minSize ?? 0.35,
      maxSize: ballpitConfig?.maxSize ?? 0.95,
      lightIntensity: ballpitConfig?.lightIntensity ?? 3.5,
    }

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.35,
      active: false,
    }

    let width = 0
    let height = 0
    let frame = 0
    let orbs: Orb[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      width = rect.width
      height = rect.height
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      orbs = Array.from({ length: config.count }, () => {
        const size = config.minSize + Math.random() * (config.maxSize - config.minSize)

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: 10 + size * 20,
          hue: 185 + Math.random() * 55,
          alpha: 0.22 + Math.random() * 0.32,
        }
      })
    }

    const movePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
    }

    const leavePointer = () => {
      pointer.active = false
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      context.globalCompositeOperation = "lighter"

      for (const orb of orbs) {
        const dx = pointer.x - orb.x
        const dy = pointer.y - orb.y
        const distance = Math.max(80, Math.hypot(dx, dy))
        const pull = pointer.active ? config.lightIntensity / distance : 0.006

        orb.vx += (dx / distance) * pull
        orb.vy += (dy / distance) * pull + config.gravity * 0.004
        orb.vx *= config.friction
        orb.vy *= config.friction
        orb.x += orb.vx
        orb.y += orb.vy

        if (orb.x < -orb.radius) orb.x = width + orb.radius
        if (orb.x > width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = height + orb.radius
        if (orb.y > height + orb.radius) orb.y = -orb.radius

        const gradient = context.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, `hsla(${orb.hue}, 95%, 72%, ${orb.alpha})`)
        gradient.addColorStop(0.45, `hsla(${orb.hue}, 95%, 56%, ${orb.alpha * 0.45})`)
        gradient.addColorStop(1, `hsla(${orb.hue}, 95%, 45%, 0)`)

        context.fillStyle = gradient
        context.beginPath()
        context.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        context.fill()
      }

      frame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener("resize", resize)
    canvas.addEventListener("pointermove", movePointer)
    canvas.addEventListener("pointerleave", leavePointer)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", movePointer)
      canvas.removeEventListener("pointerleave", leavePointer)
    }
  }, [ballpitConfig])

  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-slate-950 pt-28 pb-20 text-white lg:pt-36">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,0.24),transparent_35%),linear-gradient(135deg,rgba(2,6,23,0.92),rgba(15,23,42,0.62),rgba(2,6,23,0.88))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-2xl backdrop-blur-md">
            {brandName}
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-normal text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/78 sm:text-xl">{heroDescription}</p>

          <div className="mt-10 flex w-full max-w-xl flex-col gap-3 rounded-lg border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-md sm:flex-row">
            <a
              href={`mailto:${emailAddress}`}
              className="flex min-h-12 flex-1 items-center gap-3 rounded-md bg-slate-950/35 px-4 text-left text-sm text-white/80"
            >
              <Mail className="h-4 w-4 text-cyan-200" />
              {emailPlaceholder}
            </a>
            <Button asChild className="min-h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400">
              <a href={`mailto:${emailAddress}`}>
                Email Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
