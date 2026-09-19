"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/app/config/routes";
import { MapPin, ArrowRight, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { properties } from "@/app/home/data";
import {
  Card,
  
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PROPERTIES } from "@/app/config/properties";


export function FeaturedProperties() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-site space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
              Featured Properties
            </span>
            <h2 className="text-3xl pt-3 sm:text-4xl font-bold font-serif text-foreground">
              Explore exceptional properties
            </h2>
          </div>

          <Link
            href={ROUTES.PROPERTIES.LIST}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-foreground hover:text-accent transition-colors"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-Card Grid utilizing shadcn Card components */}
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-none">
          {PROPERTIES.map((property) => (
            <Card
              key={property.id}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-start bg-card border-border overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-all"
            >
              <div>
                {/* Image Media Top */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-wider uppercase font-semibold border-none">
                    {property.tag}
                  </Badge>
                  <button
                    type="button"
                    aria-label="Save to favorites"
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:text-accent transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <CardHeader className="p-5 pb-2 space-y-1.5">
                  <CardTitle className="font-serif font-bold text-base text-foreground line-clamp-1">
                    {property.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </CardDescription>
                </CardHeader>
              </div>

              <CardFooter className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-border/60">
                <span className="font-serif font-bold text-base text-accent">
                  {property.price}
                </span>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-xs text-foreground hover:text-accent p-0 h-auto font-medium gap-1"
                >
                  <Link href={ROUTES.PROPERTIES.DETAIL(property.id)}>
                    <span>View Property</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}