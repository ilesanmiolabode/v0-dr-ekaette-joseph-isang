"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient" />

      <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/10 rounded-full mix-blend-multiply filter blur-2xl animate-float" />

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start lg:items-center">
          {/* Left content */}
          <div
            className={`space-y-10 text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass animate-pulse-slow">
              <Sparkles className="h-5 w-5 text-accent animate-spin-slow" />
              <span className="text-base font-medium">Healthcare Innovation Leader</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight text-balance animate-fade-in-up whitespace-nowrap overflow-hidden">
                Dr. Ekaette Joseph-Isang
              </h1>
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-accent animate-fade-in-up animate-delay-100">
                  MD, MBA, MPH, CPHQ, CDIP, CCS, CRC, PAHM
                </h2>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium leading-tight text-white/90 animate-fade-in-up animate-delay-200">
                  Healthcare Executive
                </h3>
              </div>
            </div>

            <p className="text-lg lg:text-2xl leading-relaxed text-white/90 max-w-3xl animate-fade-in-up animate-delay-300">
              Healthcare executive and strategic advisor with{" "}
              <span className="font-semibold text-accent">20+ years</span> of combined experience scaling value-based care, risk adjustment, and population health programs. Expert in aligning clinical strategy, operations, and technology to drive sustainable outcomes, regulatory readiness, and ethical innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in-up animate-delay-400">
              <a href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 font-bold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold px-10 py-7 text-lg rounded-full bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-12 animate-fade-in-up animate-delay-500">
              <div className="glass rounded-2xl p-4 sm:p-6 text-center elevated-card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Award className="h-6 w-6 sm:h-10 sm:w-10 text-accent animate-bounce-slow" />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white">20+</div>
                <div className="text-sm sm:text-base text-white/80 mt-2">Years Exp.</div>
              </div>
              <div className="glass rounded-2xl p-4 sm:p-6 text-center elevated-card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-6 w-6 sm:h-10 sm:w-10 text-accent animate-bounce-slow animation-delay-200" />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white">100K+</div>
                <div className="text-sm sm:text-base text-white/80 mt-2">Patients</div>
              </div>
              <div className="glass rounded-2xl p-4 sm:p-6 text-center elevated-card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingUp className="h-6 w-6 sm:h-10 sm:w-10 text-accent animate-bounce-slow animation-delay-400" />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white">$2.3M</div>
                <div className="text-sm sm:text-base text-white/80 mt-2">Savings</div>
              </div>
            </div>
          </div>

          <div
            className={`relative lg:order-last mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl blur-2xl opacity-40 animate-float" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-accent/50 transition-all duration-500 aspect-[4/5]">
                <Image
                  src="/images/dr-ekaette-blue-suit.jpg"
                  alt="Dr. Ekaette Joseph-Isang - Healthcare Strategy Executive"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-primary/20 rounded-full blur-xl animate-pulse animation-delay-2000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
