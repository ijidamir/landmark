"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, TrendingUp, Compass, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EXPERTISE_ITEMS = [
  {
    icon: Building2,
    title: "Property Sales",
    description: "Helping clients discover and acquire properties aligned with their needs, lifestyle, and ambitions.",
  },
  {
    icon: TrendingUp,
    title: "Real Estate Investment",
    description: "Identifying real estate opportunities with a focus on strategic value and long-term potential.",
  },
  {
    icon: Compass,
    title: "Property Advisory",
    description: "Providing practical insight and guidance to help clients make informed real estate decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Property Management",
    description: "Professional oversight and management solutions designed to protect and improve property value.",
  },
];

export function About() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site space-y-20">
        
        {/* Top Split: About Us Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-2 text-foreground leading-tight text-balance">
              More than property. <br />
              We build pathways to opportunity.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
              Landmark Nexus provides real estate solutions designed to help individuals, businesses,
              and investors make informed property decisions.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-foreground hover:text-accent transition-colors border-b border-foreground/20 hover:border-accent pb-1"
              >
                <span>Discover Landmark</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Architectural Highlight Card */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden shadow-xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Architectural Building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white font-serif text-5xl font-bold opacity-90">
                01
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Split: Our Expertise Grid */}
        <div className="space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
              Our Expertise
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-foreground mt-2">
              Real estate solutions designed around your goals.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EXPERTISE_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={idx}
                  className="bg-card border-border hover:border-accent/50 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6 sm:p-8 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold font-serif text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}