"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import image from "@/node_modules/next/dist/api/image";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev % totalSlides) + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-[#08111f] text-white">
      {/* Hero Architectural Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="hero-image"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out opacity-35"
        />
        {/* Dark Vignette Overlay for Crisp Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08111f] via-[#08111f]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-transparent to-[#08111f]/70" />
      </div>

      {/* Main Content Area using your container-site class */}
      <div className="relative z-10 container-site py-12 lg:py-16 my-auto flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Headline & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-accent">
                Landmark Nexus
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.12] tracking-tight text-white">
              Real Estate. <br />
              Built Around <br className="hidden sm:block" />
              <span className="text-accent italic font-normal">Possibility.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed font-light">
              We connect people with exceptional properties and real estate opportunities
              through trusted expertise, strategic insight, and a commitment to long-term value.
            </p>

            {/* Buttons using shadcn/ui Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-slate-950 font-semibold px-8 py-6 text-sm tracking-wide transition-all rounded-md"
              >
                <Link href="/properties" className="flex items-center justify-center gap-2">
                  <span>Explore Properties</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-medium px-8 py-6 text-sm tracking-wide transition-all rounded-md bg-transparent"
              >
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Floating Stat Card */}
          <div className="lg:col-span-5 md:translate-y-1/2 flex justify-start lg:justify-end mt-4 lg:mt-0">
            <div className="w-full max-w-sm bg-slate-900/70 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-xl shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20 text-accent shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-white">
                    Premium Properties
                  </h2>
                  <p className="text-xs text-slate-400">Across Nigeria</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="text-4xl sm:text-5xl font-serif font-bold text-accent">
                  120+
                </div>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                  Verified Assets
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

     
    </section>
  );
}