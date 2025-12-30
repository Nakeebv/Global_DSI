"use client"

import Image from "next/image"

export function WorkspaceShowcase() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-with-subtle-lines-and-d.jpg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Professional Development Environment
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I work in a modern, collaborative environment equipped with cutting-edge tools and technologies. This
              setup enables me to deliver high-quality solutions efficiently and stay at the forefront of software
              development.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-muted-foreground">Latest development tools and infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-muted-foreground">Collaborative workspace for client discussions</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-600 mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-muted-foreground">Professional setup ensuring optimal productivity</span>
              </li>
            </ul>
          </div>

          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/photo-1722596627369-a743837c7176.avif"
              alt="Professional development workspace with modern tech setup"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
