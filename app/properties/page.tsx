"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROPERTIES } from "@/app/config/properties";
import { ROUTES } from "@/app/config/routes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Bed, Bath, Search, SlidersHorizontal, ArrowRight } from "lucide-react";

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const filteredProperties = PROPERTIES.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === "all" || property.type === selectedType;
    
    const matchesLocation =
      selectedLocation === "all" ||
      property.location.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#08111f] text-white py-16 sm:py-20 border-b border-white/10">
        <div className="container-site space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
            Featured Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
            Explore Exceptional Properties
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Browse our curated selection of verified luxury residences, commercial complexes, and investment land across Nigeria.
          </p>
        </div>
      </section>

      {/* Filter Bar & Property Grid */}
      <section className="section-padding bg-background flex-1 pb-20">
        <div className="container-site space-y-8">
          
          {/* Controls Bar */}
          <div className="p-4 sm:p-6 bg-card border border-border rounded-xl shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filter Properties</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <Input
                  placeholder="Search by title or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-background border-border text-xs h-10"
                />
              </div>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-background border-border text-xs h-10">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="text-xs">All Property Types</SelectItem>
                  <SelectItem value="duplex" className="text-xs">Duplex</SelectItem>
                  <SelectItem value="bungalow" className="text-xs">Bungalow</SelectItem>
                  <SelectItem value="detached" className="text-xs">Detached House</SelectItem>
                  <SelectItem value="apartment" className="text-xs">Apartment</SelectItem>
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="bg-background border-border text-xs h-10">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="text-xs">All Locations</SelectItem>
                  <SelectItem value="abuja" className="text-xs">Abuja, FCT</SelectItem>
                  <SelectItem value="lagos" className="text-xs">Lagos State</SelectItem>
                  <SelectItem value="yola" className="text-xs">Yola, Adamawa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
            <span>Showing <strong className="text-foreground font-semibold">{filteredProperties.length}</strong> available properties</span>
            {(searchTerm || selectedType !== "all" || selectedLocation !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                  setSelectedLocation("all");
                }}
                className="text-accent hover:underline font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Property Cards Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="bg-card border-border overflow-hidden hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-accent text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                        {property.tag}
                      </span>
                    </div>

                    {/* Meta Content */}
                    <CardHeader className="p-5 pb-2 space-y-1">
                      <h3 className="font-serif font-bold text-base text-foreground line-clamp-1 group-hover:text-accent transition-colors">
                        {property.title}
                      </h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{property.location}</span>
                      </p>
                    </CardHeader>

                    <CardContent className="px-5 py-2 space-y-3">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground border-y border-border/60 py-2">
                        {property.bedrooms && (
                          <span className="flex items-center gap-1">
                            <Bed className="w-3.5 h-3.5 text-accent" />
                            {property.bedrooms} Beds
                          </span>
                        )}
                        {property.bathrooms && (
                          <span className="flex items-center gap-1">
                            <Bath className="w-3.5 h-3.5 text-accent" />
                            {property.bathrooms} Baths
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </div>

                  {/* Footer Price & Link */}
                  <CardFooter className="px-5 py-4 pt-0 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Price</span>
                      <span className="font-serif font-bold text-lg text-accent">{property.price}</span>
                    </div>

                    <Button asChild variant="ghost" size="sm" className="text-xs gap-1 hover:text-accent p-0">
                      <Link href={ROUTES.PROPERTIES.DETAIL(property.id)}>
                        <span>View</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-card border border-border rounded-xl space-y-3">
              <p className="text-base font-serif font-semibold text-foreground">No matching properties found</p>
              <p className="text-xs text-muted-foreground">Try adjusting your search criteria or resetting filters.</p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}